import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { reduce_generic } from '../../reduce/generic.mjs';
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
    return reduce_generic(intialize, each_inner, then);
    metadata([metadata_generated()]);
}