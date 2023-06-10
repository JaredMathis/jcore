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
    assert(number_is(found));
    for (let element of list) {
        let current = value_get(element);
        assert(number_is(current));
        if (compare(current, found)) {
            result = element;
            found = current;
        }
    }
    return result;
}