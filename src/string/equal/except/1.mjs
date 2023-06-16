import { list_string_lengths } from '../../../list/string/lengths.mjs';
import { list_unique } from '../../../list/unique.mjs';
import { string_is } from '../../is.mjs';
import { string_equal_count } from '../count.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_length_is_1 } from '../../../list/length/is/1.mjs';
export function string_equal_except_1(a, b) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let lengths = list_string_lengths([
        a,
        b
    ]);
    let unique = list_unique(lengths);
    if (!list_length_is_1(unique)) {
        return false;
    }
    let result = string_equal_count(a, b);
    return result;
}