import type { H3Error, H3Event } from 'h3'
import type { Schema } from 'yup'
import type { z, ZodIssue } from 'zod'
import type { ApplicationError } from '~/server/errors/custom-errors'
import type { EmailForm } from '~/server/types/email-form'
import type { ReplacementValue } from '~/server/types/replacement-value'
import type { DynamicValuesObject } from '~/server/interfaces/dynamic-value-object'
import type {Transporter} from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import type {Login} from "~/server/interfaces/login";
import type {UniversalForm} from "~/server/types/universal-form";
import type {Email} from "~/server/types/email";
import type Mail from "nodemailer/lib/mailer";

export interface IEmailService {
  prepareEmail(formData: UniversalForm<EmailForm>, login: Login): Promise<{
    email: { email: string; subject: string; message: string } & Record<string, string>;
    config: Mail<SMTPTransport.SentMessageInfo, SMTPTransport.Options>
  }>

  sendEmail(email: Email, pass: Mail<SMTPTransport.SentMessageInfo, SMTPTransport.Options>): Promise<{
    success: boolean;
    message: string
  } | ApplicationError>
}
export interface IValidationService {
  yupDataValidate<T>(data: T, validationSchema: Schema<T>): Promise<T>
  validateType<T>(obj: unknown, schema: z.ZodType<T, z.ZodTypeDef, T>): {
    success: true
    type: 'validated'
    data: T
  } | {
    success: false
    type: 'error'
    errors: ZodIssue[] | unknown
  }
  compareDates(tokenExpiration: number): boolean
}
export interface IErrorHandlerService {
  handleError(event: H3Event, error: Error | ApplicationError | H3Error & { statusCode?: number, data?: never }): void
}
export interface IEmailConfigService {
  createEmailConfig(login: Login): Transporter<SMTPTransport.SentMessageInfo, SMTPTransport.Options>
}
export interface ITemplateService {
  createTemplate(data: Record<string, ReplacementValue>, dataModel: DynamicValuesObject): Promise<Record<string, string>>
}
