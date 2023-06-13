import { json_equal } from '../../json/equal.mjs';
import { js_parse_statement_let } from '../../js/parse/statement/let.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { js_visit_nodes_filter } from '../../js/visit/nodes/filter.mjs';
export async function refactor_variable_set(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {identifier, value} = args;
    let {parsed} = args;
    let expecting = js_parse_statement_let(identifier, ``);
    js_visit_nodes_filter(parsed, n => json_equal());
}