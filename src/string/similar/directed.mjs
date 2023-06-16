import { string_remove_at } from '../remove/at.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { range } from '../../range.mjs';
import { string_length } from '../length.mjs';
import { equal } from '../../equal.mjs';
import { string_is } from '../is.mjs';
export function string_similar_directed(a, b) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    const a_length = string_length(a);
    for (let i of range(a_length)) {
        let other = string_remove_at(a, i);
        if (equal(other, b)) {
            return true;
        }
    }
    return false;
}