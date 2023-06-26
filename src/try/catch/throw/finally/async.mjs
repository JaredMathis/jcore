import { metadata } from '../../../../metadata.mjs';
import { function_is } from '../../../../function/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function try_catch_throw_finally_async(lambda_try, lambda_catch, lambda_finally) {
    arguments_assert(arguments, [
        function_is,
        function_is,
        function_is
    ]);
    try {
        let v = await lambda_try();
        return v;
    } catch (e) {
        await lambda_catch(e);
        throw e;
    } finally {
        await lambda_finally();
    }
    metadata([]);
}