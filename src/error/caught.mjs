import { metadata } from '../metadata.mjs';
import { function_name_get } from '../function/name/get.mjs';
import { error } from '../error.mjs';
import { log } from '../log.mjs';
export function error_caught(fn, exception, error_message) {
    log(exception);
    log(error_message);
    error(`${ function_name_get(fn) } failed`);
    metadata([]);
}