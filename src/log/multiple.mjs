import { identity } from '../identity.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { log } from '../log.mjs';
export function log_multiple(list) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let mapper = identity;
    for (let message of list) {
        log(message);
    }
}