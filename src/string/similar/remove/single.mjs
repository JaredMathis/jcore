import { string_similar_generic } from '../generic.mjs';
import { string_remove_at } from '../../remove/at.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_is } from '../../is.mjs';
import { string_length } from '../../length.mjs';
export function string_similar_remove_single(a, b) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    const range_count = string_length(a);
    function other_get(i) {
        return string_remove_at(a, i);
    }
    return string_similar_generic(other_get, range_count, b);
}