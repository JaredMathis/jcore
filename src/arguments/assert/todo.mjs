import { error } from '../../error.mjs';
import { arguments_assert } from '../assert.mjs';
export function arguments_assert_todo() {
    arguments_assert(arguments, []);
    error('todo: arguments_assert_todo');
}