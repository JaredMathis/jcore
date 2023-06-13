import { js_visit_nodes_types_get } from '../../js/visit/nodes/types/get.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { log } from '../../log.mjs';
import { json_to } from '../../json/to.mjs';
import { js_visit_nodes_filter } from '../../js/visit/nodes/filter.mjs';
export async function refactor_variable_set(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {parsed} = args;
    let expecting = js_parse_statement_let()
    js_visit_nodes_filter(parsed);
}