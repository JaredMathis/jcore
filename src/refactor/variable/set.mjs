import { js_parse_expression } from '../../js/parse/expression.mjs';
import { log_json } from '../../log/json.mjs';
import { js_node_property_id } from '../../js/node/property/id.mjs';
import { js_property_name } from '../../js/property/name.mjs';
import { js_node_is_variable_declaration } from '../../js/node/is/variable/declaration.mjs';
import { js_node_property_declarations } from '../../js/node/property/declarations.mjs';
import { js_node_is_variable_declarator } from '../../js/node/is/variable/declarator.mjs';
import { log } from '../../log.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { list_length_is_1 } from '../../list/length/is/1.mjs';
import { list_single } from '../../list/single.mjs';
import { js_node_is_identifier } from '../../js/node/is/identifier.mjs';
import { equal } from '../../equal.mjs';
import { js_visit_nodes_filter_node } from '../../js/visit/nodes/filter/node.mjs';
export async function refactor_variable_set(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {identifier, value} = args;
    let {parsed} = args;
    const o = js_parse_expression('a', '= b');
    log_json(o);
    list_add_then;
    js_visit_nodes_filter_node(parsed, n => {
        if (!js_node_is_variable_declaration(n)) {
            return false;
        }
        let declarations = object_property_get(n, js_node_property_declarations());
        if (!list_length_is_1(declarations)) {
            return false;
        }
        let declaration = list_single(declarations);
        if (!js_node_is_variable_declarator(declaration)) {
            return false;
        }
        let id = object_property_get(declaration, js_node_property_id());
        if (!js_node_is_identifier(id)) {
            return false;
        }
        return equal(object_property_get(id, js_property_name()), identifier);
    }, n => console.log(n));
}