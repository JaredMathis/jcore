import { arguments_assert } from '../../arguments/assert.mjs';
import { number_is } from '../../number/is.mjs';
import { assert } from '../../assert.mjs';
import { list_first } from '../first.mjs';
import { value_get } from '../../value/get.mjs';
import { list_is } from '../is.mjs';
import { function_is } from '../../function/is.mjs';
export function list_compare_generic(list, value_get, compare) {
    arguments_assert(arguments, [
        list_is,
        function_is,
        function_is
    ]);
    let result = list_first(list);
    let found = value_get(result);
    let v = number_is(found);
    assert(v);
    for (let element of list) {
        let current = value_get(element);
        let v_2 = number_is(current);
        assert(v_2);
        let v_3 = compare(current, found);
        if (v_3) {
            result = element;
            found = current;
        }
    }
    return result;
}