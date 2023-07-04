import { defined_is } from '../../defined/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function reduce_generic_async(intialize, then, each_inner) {
    let current = intialize();
    await then(each);
    function each(element) {
        arguments_assert(arguments, [defined_is]);
        current = each_inner(current, element);
    }
    return current;
}