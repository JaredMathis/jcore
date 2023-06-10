import { number_is } from '../../number/is.mjs';
import { assert } from '../../assert.mjs';
import { list_first } from '../first.mjs';
export function list_max_generic(list, value_get) {
    let compare = (a, b) => a > b;
    let result = list_first(list)
    let max = value_get(result);
    assert(number_is(max));
    for (let element of list) {
        let n = value_get(element);
        assert(number_is(n));
        if (n > max) {
            result = element;
            max = n;
        }
    }
    return result;
}