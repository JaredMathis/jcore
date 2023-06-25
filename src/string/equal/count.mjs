import { list_min } from '../../list/min.mjs';
import { list_string_lengths } from '../../list/string/lengths.mjs';
import { count } from '../../count.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { range } from '../../range.mjs';
import { string_get } from '../get.mjs';
import { equal } from '../../equal.mjs';
import { string_is } from '../is.mjs';
export function string_equal_count(a, b) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let v = count(function v_2(c) {
        const inputs = [
            a,
            b
        ];
        let lengths = list_string_lengths(inputs);
        for (let i of range(list_min(lengths))) {
            let a_i = string_get(a, i);
            let b_i = string_get(b, i);
            let v_3 = equal(a_i, b_i);
            if (v_3) {
                c();
            }
        }
    });
    return v;
}