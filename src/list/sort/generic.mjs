import { list_reverse } from '../reverse.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { subtract } from '../../subtract.mjs';
import { value_get } from '../../value/get.mjs';
import { list_is } from '../is.mjs';
import { function_is } from '../../function/is.mjs';
import { boolean_is } from '../../boolean/is.mjs';
export function list_sort_generic(list, value_get, reverse, compare) {
    arguments_assert(arguments, [
        list_is,
        function_is,
        boolean_is,
        function_is
    ]);
    list.sort(function v(a, b) {
        return compare(value_get(a), value_get(b));
    });
    if (reverse) {
        list_reverse(list);
    }
}