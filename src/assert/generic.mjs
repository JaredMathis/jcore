import { metadata } from '../metadata.mjs';
import { error } from '../error.mjs';
import { assert_arguments_count } from './arguments/count.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function assert_generic(value) {
    arguments_assert(arguments, [arguments_assert_todo]);
    assert_arguments_count(arguments, 1);
    if (value === true) {
        return;
    }
    error('Assertion failed');
    metadata([]);
}