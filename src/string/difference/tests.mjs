import { equal } from '../../equal.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../is.mjs';
import { string_difference_get } from './get.mjs';
import { string_difference_apply } from './apply.mjs';
import { assert } from '../../assert.mjs';
export function string_difference_tests(string_old, string_new) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let hunks = string_difference_get(string_old, string_new);
    let string_new2 = string_difference_apply(string_old, hunks);
    assert(equal(string_new2, string_new));
}