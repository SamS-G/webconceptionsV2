import * as fs from 'node:fs'
import path from 'node:path'
import { ApplicationError, ParseJsonError } from '~/server/errors/custom-errors'
import { getLogger } from '~/server/plugins/00-pino-logger'

/**
   * Safely parses a JSON string into a specified generic type.
   * @param json - The JSON string to parse.
   * @returns The parsed object of type T.
   * @throws An error if the JSON string is invalid.
   */
export const parseJson = <T>(json: string): T => {
  try {
    return JSON.parse(json) as T
  }
  catch (err) {
    throw new ParseJsonError(`Invalid JSON string: ${err instanceof Error ? err.message : String(err)}`)
  }
}
/**
 * Load content of a file, encrypted or not
 * @param filePath
 * @param toObject - Option if you want return object
 */
export const loadFileContent = async <T>(filePath: string, toObject: boolean = false): Promise<T | string> => {
  try {
    const logger = getLogger()
    const content = await fs.promises.readFile(path.resolve(filePath), 'utf8')
    
    if (toObject) {
      try {
        const parsed = JSON.parse(content)

        // Type check after parsing.
        if (typeof parsed === 'object' && parsed !== null) {
          return parsed as T
        }
        logger?.warn(`The content of file ${filePath} is not a valid JSON object. Return of an empty object.`)

        return {} as T
      }
      catch (err) {
        const error = err as ApplicationError
        logger?.warn(`Error parsing JSON in ${filePath}. Return of an empty object. Error: ${error.message}`)
        return {} as T
      }
    }

    return content.trim()
  }
  catch (err) {
    if (err instanceof ApplicationError) {
      throw err
    }
    const error = err as ApplicationError
    throw new Error(`Error reading file ${filePath}: ${error.message}`)
  }
}