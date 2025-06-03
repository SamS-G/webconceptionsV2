import type { H3Event } from 'h3'
import type { ApplicationError } from '~/server/errors/custom-errors'
import type {
  IErrorHandlerService,
  IEmailService,
} from '~/server/interfaces/services'
import type {RuntimeConfig} from "nuxt/schema";
import type {Login} from "~/server/interfaces/login";
import {parseJson} from "~/server/helpers/files.helper";

export class EmailController {
  constructor(
    private readonly emailService: IEmailService,
    private readonly errorHandlerService: IErrorHandlerService,
    private readonly config: RuntimeConfig
  ) {
    this.config = useRuntimeConfig()
  }

  /**
   * 1- Create email template
   * 2- Send email.
   * @param event
   * @return object
   */
  async sendingWithGmail(event: H3Event) {
    try {
      const formData = await readBody(event)
      const login:Login = parseJson(this.config.private.mailLogin)

      const toSend = await this.emailService.prepareEmail(formData, login)

      return await this.emailService.sendEmail(toSend.email, toSend.config)
    }
    catch (err) {
      this.errorHandlerService.handleError(event, <Error | ApplicationError>err)
    }
  }
}
