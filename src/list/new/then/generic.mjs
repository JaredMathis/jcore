import { arguments_assert } from '../../../arguments/assert.mjs';
import { defined_is } from '../../../defined/is.mjs';
export function list_new_then_generic(then, lambda) {
    let list = [];
    then(list_new_then_add);
    function list_new_then_add(element) {
        arguments_assert(arguments, [defined_is]);
        lambda(list, element);
    }
    return list;
}