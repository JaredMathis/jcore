import { function_is } from '../../function/is.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { log } from '../../log.mjs';
export function log_multiple_map(list, mapper) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        function_is
    ]);
    for (let element of list) {
        let mapped = mapper(element);
        log(mapped);
    }
    metadata([]);
}