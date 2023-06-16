import { string_similar_generic } from '../generic.mjs';
import { string_swap } from '../../swap.mjs';
import { add_1 } from '../../../add/1.mjs';
import { subtract_1 } from '../../../subtract/1.mjs';
import { string_length } from '../../length.mjs';
import { string_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function string_similar_swap_adjascent(a, b) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    const range_count = subtract_1(string_length(a));
    function other_get(i) {
        let i_next = add_1(i);
        let other = string_swap(a, i, i_next);
        return other;
    }
    return string_similar_generic(other_get, range_count, b);
}