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
    let v_5 = function v(a, b) {
        let v_2 = value_get(a);
        let v_3 = value_get(b);
        let v_4 = compare(v_2, v_3);
        return v_4;
    };
    list.sort(v_5);
    if (reverse) {
        list_reverse(list);
    }
}