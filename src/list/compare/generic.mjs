import { number_is } from '../../number/is.mjs';
import { assert } from '../../assert.mjs';
import { list_first } from '../first.mjs';
import { value_get } from '../../value/get.mjs';
export function list_compare_generic(list, value_get, compare) {
    let result = list_first(list);
    let max = value_get(result);
    assert(number_is(max));
    for (let element of list) {
        let n = value_get(element);
        assert(number_is(n));
        if (compare(n, max)) {
            result = element;
            max = n;
        }
    }
    return result;
}