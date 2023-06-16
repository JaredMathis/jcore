import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { log } from '../log.mjs';
import { assert } from '../assert.mjs';
import { try_catch_throw } from '../try/catch/throw.mjs';
export function assert_log(condition, message) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    try_catch_throw(() => {
        assert(condition);
    }, () => {
        log(message);
    });
}