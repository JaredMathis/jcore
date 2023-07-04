import { reduce_generic_async } from '../../../reduce/generic/async.mjs';
import { function_is } from '../../../function/is.mjs';
import { metadata } from '../../../metadata.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function list_adder_generic_async(then, lambda) {
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
    return await reduce_generic_async(intialize, each_inner, then);
    metadata([]);
}