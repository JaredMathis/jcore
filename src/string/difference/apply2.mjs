import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../is.mjs';
import { list_is } from '../../list/is.mjs';
import { list_length_is_0 } from '../../list/length/is/0.mjs';
import { error } from '../../error.mjs';
import { json_to } from '../../json/to.mjs';
export function string_difference_apply2(string_old, hunks) {
    arguments_assert(arguments, [
        string_is,
        list_is
    ]);
    if (list_length_is_0(hunks)) {
        return string_old
    }
    error(json_to({string_old, hunks}))
}