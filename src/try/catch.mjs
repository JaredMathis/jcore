import { string_empty_not_is } from '../string/empty/not/is.mjs';
import { function_is } from '../function/is.mjs';
import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { error_caught } from '../error/caught.mjs';
export function try_catch(fn, lambda, error_message) {
    arguments_assert(arguments, [
        function_is,
        tautology,
        string_empty_not_is
    ]);
    try {
        return lambda();
    } catch (e) {
        error_caught(fn, e, error_message);
    }
    metadata([]);
}