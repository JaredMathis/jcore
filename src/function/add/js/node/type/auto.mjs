import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { error } from '../../../../../error.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_nodes_each } from '../../../../../js/nodes/each.mjs';
import { function_parse } from '../../../../parse.mjs';
export function function_add_js_node_type_auto(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let parsed = function_parse(function_name);
    js_nodes_each(parsed, )
}