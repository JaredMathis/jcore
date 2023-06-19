import { string_empty_not_is } from '../../string/empty/not/is.mjs';
import { function_is } from '../../function/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { error_caught } from '../../error/caught.mjs';
export function try_catch_log(fn, lambda, error_message) {
    arguments_assert(arguments, [
        function_is,
        function_is,
        string_empty_not_is
    ]);
    let v
    try_catch(lambda, on_error);
    return v;
    metadata([]);

    function on_error(e) {
        error_caught(fn, e, error_message);
    }
}

function try_catch(lambda, on_error) {
    let v;
    try {
        v = lambda();
    } catch (e) {
        v = on_error(e);
    }
    return v;
}
