import { subtract_1 } from '../../../subtract/1.mjs';
import { equal } from '../../../equal.mjs';
import { string_remove_at } from '../../remove/at.mjs';
import { string_length } from '../../length.mjs';
import { range } from '../../../range.mjs';
import { string_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function string_similar_swap_adjascent(a, b) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    for (let i of range(subtract_1(string_length(a)))) {
        let other = string_remove_at(a, i);
        if (equal(other, b)) {
            return true;
        }
    }
    return false;
}