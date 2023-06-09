import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_map } from '../../../map.mjs';
import { js_brace_both } from '../../../../js/brace/both.mjs';
import { null_is } from '../../../../null/is.mjs';
export function json_map_empty_if_null(task_body_value, map) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let body_before;
    let v = null_is(task_body_value);
    if (v) {
        body_before = js_brace_both();
    } else {
        body_before = task_body_value;
    }
    let body_after = json_map(body_before, map);
    return body_after;
    metadata([]);
}