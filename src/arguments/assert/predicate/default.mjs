import { metadata } from '../../../metadata.mjs';
import { arguments_assert_todo } from '../todo.mjs';
import { arguments_assert } from '../../assert.mjs';
export function arguments_assert_predicate_default() {
    arguments_assert(arguments, []);
    return arguments_assert_todo;
    metadata([]);
}