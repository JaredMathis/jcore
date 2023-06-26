import { noop } from '../../../noop.mjs';
import { try_catch_throw_finally_async } from '../throw/finally/async.mjs';
import { function_is } from '../../../function/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function try_catch_finally_async(lambda_try, lambda_finally) {
    arguments_assert(arguments, [
        function_is,
        function_is
    ]);
    let v = await try_catch_throw_finally_async(lambda_try, noop, lambda_finally);
    return v;
    metadata([]);
}