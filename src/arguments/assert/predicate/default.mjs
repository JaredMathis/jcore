import { arguments_assert_todo } from '../todo.mjs';
import { arguments_assert } from '../../assert.mjs';
import { comment } from '../../../comment.mjs';
import { tautology } from '../../../tautology.mjs';
export function arguments_assert_predicate_default() {
    arguments_assert(arguments, []);
    comment(`After changing tautologies use this moving forward`)
    if (false) {
        return arguments_assert_todo;
    }
    return tautology;
}