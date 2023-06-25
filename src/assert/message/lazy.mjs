import { error } from '../../error.mjs';
import { string_is } from '../../string/is.mjs';
import { not } from '../../not.mjs';
import { assert_arguments_count } from '../arguments/count.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_is } from '../../function/is.mjs';
export function assert_message_lazy(value, message_get) {
    assert_arguments_count(arguments, 2);
    let v = not(function_is(message_get));
    if (v) {
        error('invalid message_get');
    }
    let v_2 = value === true;
    if (v_2) {
        return;
    }
    let message = message_get();
    let v_3 = not(string_is(message));
    if (v_3) {
        error('invalid message');
    }
    error(message);
}