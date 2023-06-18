import { list_length } from '../../list/length.mjs';
import { equal_by } from '../../equal/by.mjs';
import { not } from '../../not.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_is } from '../../list/is.mjs';
import { range } from '../../range.mjs';
export function js_statements_refactorable(left, right) {
    arguments_assert(arguments, [
        list_is,
        list_is
    ]);
    if (not(equal_by(list_length, left, right))) {
        return false;
    }
    for (let index of range(list_length(left))) {
    }
}