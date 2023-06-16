import { function_is } from '../../../function/is.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { visit_async } from '../../async.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { noop } from '../../../noop.mjs';
export async function visit_lambda_none_async(root, children_get) {
    arguments_assert(arguments, [
        defined_is,
        function_is
    ]);
    let result = await visit_async(root, children_get, noop);
    return result;
}