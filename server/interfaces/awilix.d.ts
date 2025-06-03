import type { Logger } from 'pino'
import type { EmailService } from '~/server/services/email.service'
import type { ValidationService } from '~/server/services/validation.service'
import type { TemplateService } from '~/server/services/template.service'
import type { ErrorHandlerService } from '~/server/services/error-handler.service'
import type { EmailConfigService } from '~/server/services/email-config.service'
import type { EmailController } from '~/server/controller/email.controller'

export interface AppContainerConfig {
  nodeEnv?: string
  logLevel?: string
  notificationEndpoint?: string
}

export interface Awilix {
  // Configuration
  config: AppContainerConfig
  // Logger
  logger: Logger
  // Services (Singleton)
  emailService: EmailService
  validationService: ValidationService
  templateService: TemplateService
  errorHandlerService: ErrorHandlerService
  emailConfigService: EmailConfigService
  // Controllers (Scoped)
  emailController: EmailController
}
