import { list_min } from '../../list/min.mjs';
import { list_string_lengths } from '../../list/string/lengths.mjs';
import { count } from '../../count.mjs';
import { number_min } from '../../number/min.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { range } from '../../range.mjs';
import { string_length } from '../length.mjs';
import { string_get } from '../get.mjs';
import { equal } from '../../equal.mjs';
import { string_is } from '../is.mjs';
export function string_equal_count(a, b) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    return count(c => {
        let lengths = list_string_lengths([
            a,
            b
        ]);
        list_min(lengths);
        let a_length = string_length(a);
        let b_length = string_length(b);
        for (let i of range(number_min(a_length, b_length))) {
            let a_i = string_get(a, i);
            let b_i = string_get(b, i);
            if (equal(a_i, b_i)) {
                c();
            }
        }
    });
}