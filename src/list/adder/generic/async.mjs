import { function_is } from '../../../function/is.mjs';
import { metadata } from '../../../metadata.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function list_adder_generic_async(then, lambda) {
    arguments_assert(arguments, [
        function_is,
        function_is
    ]);
    let current = intialize();
    await then(each);
    function intialize() {
        return [];
    }

    function each(element) {
        arguments_assert(arguments, [defined_is]);
        current = each_inner(current, element);
    }

    function each_inner(list, element) {
        lambda(list, element);
        return list;
    }
    return current;
    metadata([]);
}