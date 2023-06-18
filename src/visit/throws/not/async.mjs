import { not } from '../../../not.mjs';
import { function_is } from '../../../function/is.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { visit_throws_async } from '../async.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function visit_throws_not_async(root, children_get) {
    arguments_assert(arguments, [
        defined_is,
        function_is
    ]);
    let v = await visit_throws_async(root, children_get);
    let result = not(v);
    return result;
}