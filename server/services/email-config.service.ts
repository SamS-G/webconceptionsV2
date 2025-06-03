import type { RuntimeConfig } from 'nuxt/schema'
import type { IEmailConfigService } from '~/server/interfaces/services'
import { EmailConfigError } from '~/server/errors/custom-errors'
import type {Transporter} from 'nodemailer';
import nodemailer from 'nodemailer'
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import type {Login} from "~/server/interfaces/login";

export class EmailConfigService implements IEmailConfigService {
  private readonly config: RuntimeConfig
  constructor() {
    this.config = useRuntimeConfig()
  }

  /**
   * Create email configuration
   * @param login
   */
  createEmailConfig(login: Login): Transporter<SMTPTransport.SentMessageInfo, SMTPTransport.Options> {
    try {
     return nodemailer.createTransport({
        service: login.service,
        auth: {
          user: login.user,
          pass: login.pass
        }
      })
    }
    catch (err) {
      throw new EmailConfigError('Error when creating the EmailConfig', <Error>err)
    }
  }
}
