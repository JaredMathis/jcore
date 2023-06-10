import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../is.mjs';
import { list_is } from '../../list/is.mjs';
export function string_difference_apply2(string_old, hunks) {
    arguments_assert(arguments, [
        string_is,
        list_is
    ]);
}