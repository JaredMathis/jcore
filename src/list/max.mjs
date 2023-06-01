import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { number_is } from '../number/is.mjs';
import { assert } from '../assert.mjs';
import { list_first } from './first.mjs';
export function list_max(test_ids_all_number) {
    arguments_assert(arguments, [tautology]);
    let max = list_first(test_ids_all_number);
    assert(number_is(max));
    for (let n of test_ids_all_number) {
        assert(number_is(n));
        if (n > max) {
            max = n;
        }
    }
    return max;
    metadata([]);
}