import { noop } from '../../../../noop.mjs';
import { function_is } from '../../../../function/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function try_catch_throw_async(lambda_try, lambda_catch) {
    arguments_assert(arguments, [
        function_is,
        function_is
    ]);
    let lambda_finally = noop;
    try {
        return await lambda_try();
    } catch (e) {
        await lambda_catch(e);
        throw e;
    } finally {
        await lambda_finally();
    }
}