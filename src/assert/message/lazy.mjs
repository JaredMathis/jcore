import { error } from '../../error.mjs';
import { string_is } from '../../string/is.mjs';
import { not } from '../../not.mjs';
import { assert_arguments_count } from '../arguments/count.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function assert_message_lazy(value, message_get) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    assert_arguments_count(arguments, 2);
    if (not(string_is(message_get))) {
        error('invalid message');
    }
    if (value === true) {
        return;
    }
    error(message_get);
    return result;
}