import { function_is } from '../../../function/is.mjs';
import { metadata } from '../../../metadata.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function list_adder_generic_async(then, lambda) {
    arguments_assert(arguments, [
        function_is,
        function_is
    ]);
    let list = intialize();
    await then(list_new_then_add);
    function intialize() {
        return [];
    }

    function list_new_then_add(element) {
        arguments_assert(arguments, [defined_is]);
        list = each(list);
    }

    function each(list) {
        lambda(list, element);
        return list;
    }
    return list;
    metadata([]);
}