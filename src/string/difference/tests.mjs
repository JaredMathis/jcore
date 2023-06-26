import { metadata } from '../../metadata.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../is.mjs';
import { string_difference_get_external } from './get/external.mjs';
import { string_difference_apply_external } from './apply/external.mjs';
export function string_difference_tests(string_old, string_new) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let hunks = string_difference_get_external(string_old, string_new);
    let string_new2 = string_difference_apply_external(string_old, hunks);
    return string_new2;
    metadata([]);
}