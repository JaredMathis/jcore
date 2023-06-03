import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { function_name_get } from '../function/name/get.mjs';
import { error } from '../error.mjs';
import { log } from '../log.mjs';
import { function_is } from '../function/is.mjs';
export function error_caught(fn, exception, error_message) {
    arguments_assert(arguments, [
        function_is,
        error_is,
        tautology
    ]);
    log(exception);
    log(error_message);
    error(`${ function_name_get(fn) } failed`);
    metadata([]);
}