import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { function_is } from '../../function/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function try_catch_throw(lambda_try, lambda_catch) {
    arguments_assert(arguments, [
        function_is,
        function_is
    ]);
    try {
        lambda_try();
    } catch (e) {
        lambda_catch(e);
        throw e;
    }
    metadata([metadata_generated()]);
}