import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_is } from '../../../function/is.mjs';
export async function try_catch_throw_async(lambda_try, lambda_catch) {
    arguments_assert(arguments, [
        function_is,
        function_is
    ]);
    try {
        await lambda_try();
    } catch (e) {
        await lambda_catch(e);
        throw e;
    }
}