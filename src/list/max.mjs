import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { number_is } from '../number/is.mjs';
import { assert } from '../assert.mjs';
import { list_first } from './first.mjs';
import { identity } from '../identity.mjs';
export function list_max(list) {
    arguments_assert(arguments, [list_is]);
    let lambda = identity;
    let max = lambda(list_first(list));
    assert(number_is(max));
    for (let element of list) {
        let n = lambda(element);
        assert(number_is(n));
        if (n > max) {
            max = n;
        }
    }
    return max;
    metadata([]);
}