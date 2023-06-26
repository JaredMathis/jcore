import { metadata } from './metadata.mjs';
import { defined_is } from './defined/is.mjs';
import { error } from './error.mjs';
import { arguments_assert_todo } from './arguments/assert/todo.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export function and(left, right) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    if (arguments.length !== 2) {
        error();
    }
    if (!defined_is(left)) {
        error();
    }
    if (!defined_is(right)) {
        error();
    }
    return left === right;
    metadata([]);
}