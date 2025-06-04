import { contact } from 'assets/templates/pages/data/contact'
import type {
  IEmailConfigService,
  IEmailService,
  ITemplateService,
  IValidationService,
} from '~/server/interfaces/services'
import {email as emailSchema} from '~/server/schema/email'
import type { EmailForm } from '~/server/types/email-form'
import type { UniversalForm } from '~/server/types/universal-form'
import type { Email } from '~/server/types/email'
import type Mail from "nodemailer/lib/mailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import type {RuntimeConfig} from "nuxt/schema";
import type {Login} from "~/server/interfaces/login";
import type {ApplicationError} from "~/server/errors/custom-errors";
import {EmailSendError} from "~/server/errors/custom-errors";

export class EmailService implements IEmailService {
  constructor(
    private readonly validationService: IValidationService,
    private readonly templateService: ITemplateService,
    private readonly emailConfigService: IEmailConfigService,
    private readonly config: RuntimeConfig
  ) {
    this.config = useRuntimeConfig()
  }

  /**
   * Create email template
   * Validate content
   * Config and send the email with gmail API
   * @param formData
   * @param login
   * @return object
   */
  async prepareEmail(formData: UniversalForm<EmailForm>, login: Login): Promise<{
    email: { email: string; subject: string; message: string } & Record<string, string>;
    config: Mail<SMTPTransport.SentMessageInfo, SMTPTransport.Options>
  }> {
    // Create email template
    const email = await this.templateService.createTemplate(formData, contact)
    // Validate created email
    const emailValidate = await this.validationService.yupDataValidate(email, emailSchema) as Email
    // Create emailConfig to send by SMTP
    const emailConfig = this.emailConfigService.createEmailConfig(login)
    // Return email and transporter
    return {
      email: emailValidate,
      config: emailConfig
    };
  }

  async sendEmail(email: Email, transport: Mail<SMTPTransport.SentMessageInfo, SMTPTransport.Options>): Promise<{
    success: boolean;
    message: string
  } | ApplicationError> {
    try {
      await transport.sendMail({
        from: 'WebConceptions',
        to: this.config.private.formSendEmail,
        subject: `Nouveau message depuis le formulaire du site WebConceptions : ${email.subject}`,
        text: email.text ?? "",
        html: email.message
      })

      return {success: true, message: 'Envoi effectué avec succès'}
      
    } catch (err) {
      const error = err as EmailSendError
      console.error('Erreur d’envoi :', err)
      throw new EmailSendError('Erreur lors de l\'envoi de l\'email', error)
    }
  }
}
