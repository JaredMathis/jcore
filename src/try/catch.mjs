import { function_is } from '../function/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function try_catch(lambda, on_error) {
    arguments_assert(arguments, [
        function_is,
        function_is
    ]);
    let result;
    try {
        result = lambda();
    } catch (e) {
        result = on_error(e);
    }
    return result;
    metadata([]);
}