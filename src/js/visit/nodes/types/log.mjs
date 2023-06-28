import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_visit_nodes_types_get } from './get.mjs';
import { log } from '../../../../log.mjs';
export function js_visit_nodes_types_log(parsed) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = js_visit_nodes_types_get(parsed);
    log(v);
    metadata([]);
}