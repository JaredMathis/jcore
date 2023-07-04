import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { defined_is } from '../../defined/is.mjs';
import { function_is } from '../../function/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_adder_generic(then, lambda) {
    arguments_assert(arguments, [
        function_is,
        function_is
    ]);
    function intialize() {
        return [];
    }
    function each_inner(list, element) {
        lambda(list, element);
        return list;
    }
    let current = intialize();
    then(each);
    function each(element) {
        arguments_assert(arguments, [defined_is]);
        current = each_inner(current, element);
    }
    return current;
    metadata([metadata_generated()]);
}