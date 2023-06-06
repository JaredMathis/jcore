import { arguments_assert_todo } from '../todo.mjs';
import { arguments_assert } from '../../assert.mjs';
import { comment } from '../../../comment.mjs';
export function arguments_assert_predicate_default() {
    arguments_assert(arguments, []);
    comment(`After changing tautologies use this moving forward`);
    return arguments_assert_todo;
}