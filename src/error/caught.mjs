import { error } from '../error.mjs';
import { log } from '../log.mjs';
export function error_caught(fn, exception, error_message) {
    log(exception);
    log(error_message);
    error(`${ fn.name } failed`);
}