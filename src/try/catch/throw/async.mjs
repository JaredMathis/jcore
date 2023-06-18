import { try_catch_throw_finally_async } from './finally/async.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_is } from '../../../function/is.mjs';
import { noop } from '../../../noop.mjs';
export async function try_catch_throw_async(lambda_try, lambda_catch) {
    arguments_assert(arguments, [
        function_is,
        function_is
    ]);
    let v = await try_catch_throw_finally_async(lambda_try, lambda_catch, noop);
    return v;
}