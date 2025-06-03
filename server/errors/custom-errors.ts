export class ApplicationError extends Error {
  constructor(message: string, public readonly statusCode: number = 500, public readonly code?: string, public readonly data?: object) {
    super(message)
    this.name = this.constructor.name
    this.stack = this.captureStack()
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      message: this.message,
      code: this.code,
      data: this.data,
    }
  }

  captureStack() {
    const err = new Error()
    return err.stack?.split('\n').slice(2).join('\n')
  }
}

export class YupDataValidationError extends ApplicationError {
  constructor(message: string, data?: object) {
    super(message, 400, 'YUP_VALIDATION_ERROR', data)
  }
}
export class ObjectHelperValidError extends ApplicationError {
  constructor(message: string, data?: object) {
    super(message, 500, 'OBJECT_HELPER_VALIDATION_ERROR', data)
  }
}
export class ConfigDataError extends ApplicationError {
  constructor(message: string, data?: object) {
    super(message, 500, 'CONFIG_DATA_ERROR', data)
  }
}
export class EmailSendError extends ApplicationError {
  constructor(message: string, data?: object) {
    super(message, 500, 'EMAIL_SEND_ERROR', data)
  }
}
export class ObjectReplaceValueError extends ApplicationError {
  constructor(message: string, data?: object) {
    super(message, 500, 'OBJECT_REPLACE_VALUE_ERROR', data)
  }
}
export class UpdateJsonError extends ApplicationError {
  constructor(message: string, data?: object) {
    super(message, 500, 'UPDATE_JSON_ERROR', data)
  }
}
export class ParseJsonError extends ApplicationError {
  constructor(message: string, data?: object) {
    super(message, 500, 'PARSE_JSON_ERROR', data)
  }
}
export class CreateEmailTemplateError extends ApplicationError {
  constructor(message: string, data?: object) {
    super(message, 500, 'CREATE_EMAIL_TEMPLATE_ERROR', data)
  }
}
export class CreateTemplateDataError extends ApplicationError {
  constructor(message: string, data?: object) {
    super(message, 500, 'CREATE_TEMPLATE_DATA_ERROR', data)
  }
}
export class CreateTemplateDataModel extends ApplicationError {
  constructor(message: string, data?: object) {
    super(message, 500, 'CREATE_TEMPLATE_DATA_MODEL_ERROR', data)
  }
}
export class CompileTemplateError extends ApplicationError {
  constructor(message: string, data?: object) {
    super(message, 500, 'COMPILE_TEMPLATE_ERROR', data)
  }
}
export class RegisterTemplatePartialError extends ApplicationError {
  constructor(message: string, data?: object) {
    super(message, 500, 'REGISTER_TEMPLATE_PARTIALS_ERROR', data)
  }
}
export class ResolvePartialPaths extends ApplicationError {
  constructor(message: string, data?: object) {
    super(message, 500, 'RESOLVE_PARTIALS_PATHS_ERROR', data)
  }
}
export class EmailConfigError extends ApplicationError {
  constructor(message: string, data?: object) {
    super(message, 500, 'EMAIL_CONFIG_ERROR', data)
  }
}
export class ReplacePlaceholdersError extends ApplicationError {
  constructor(message: string, data?: object) {
    super(message, 500, 'REPLACE_PLACEHOLDER_ERROR', data)
  }
}
