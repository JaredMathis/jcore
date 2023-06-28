import { function_is } from '../../../function/is.mjs';
import { metadata } from '../../../metadata.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function list_adder_generic_async(then, lambda) {
    arguments_assert(arguments, [
        function_is,
        function_is
    ]);
    let list = [];
    await then(list_new_then_add);
    function list_new_then_add(element) {
        arguments_assert(arguments, [defined_is]);
        lambda(list, element);
    }
    return list;
    metadata([]);
}