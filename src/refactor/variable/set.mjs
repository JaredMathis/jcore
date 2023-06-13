import { js_node_property_declarations } from '../../js/node/property/declarations.mjs';
import { js_node_is_variable_declarator } from '../../js/node/is/variable/declarator.mjs';
import { json_to } from '../../json/to.mjs';
import { log } from '../../log.mjs';
import { js_parse_statement_let } from '../../js/parse/statement/let.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { js_visit_nodes_filter } from '../../js/visit/nodes/filter.mjs';
import { object_property_get } from '../../object/property/get.mjs';
export async function refactor_variable_set(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {identifier, value} = args;
    let {parsed} = args;
    let expecting = js_parse_statement_let(identifier, ``);
    console.log(json_to({ expecting }));
    js_visit_nodes_filter(parsed, n => {
        return js_node_is_variable_declarator(n) && object_property_get(n, js_node_property_declarations());
    }, n => console.log(n));
}