import { list_compare_generic } from '../compare/generic.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { value_get } from '../../value/get.mjs';
import { list_is } from '../is.mjs';
import { function_is } from '../../function/is.mjs';
export function list_max_generic(list, value_get) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    let compare = (current, found) => current > found;
    return list_compare_generic(list, value_get, compare);
}