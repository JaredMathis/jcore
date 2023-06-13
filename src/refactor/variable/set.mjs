import { json_to } from '../../json/to.mjs';
import { log } from '../../log.mjs';
import { json_equal } from '../../json/equal.mjs';
import { js_parse_statement_let } from '../../js/parse/statement/let.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { js_visit_nodes_filter } from '../../js/visit/nodes/filter.mjs';
import { js_node_is_type } from '../../js/node/is/type.mjs';
export async function refactor_variable_set(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {identifier, value} = args;
    let {parsed} = args;
    let expecting = js_parse_statement_let(identifier, ``);
    console.log(json_to({ expecting }));
    js_visit_nodes_filter(parsed, n => js_node_is_variable_declarator(n), n => console.log(n));
}

function js_node_is_variable_declarator(n) {
    return js_node_is_type(n, "VariableDeclarator");
}
