import { not } from '../../not.mjs';
import { js_variable_declarator_init_change_unparsed } from '../../js/variable/declarator/init/change/unparsed.mjs';
import { js_declarations_single } from '../../js/declarations/single.mjs';
import { js_nodes_get } from '../../js/nodes/get.mjs';
import { js_node_property_id } from '../../js/node/property/id.mjs';
import { js_property_name } from '../../js/property/name.mjs';
import { js_node_is_variable_declaration } from '../../js/node/is/variable/declaration.mjs';
import { js_node_property_declarations } from '../../js/node/property/declarations.mjs';
import { js_node_is_variable_declarator } from '../../js/node/is/variable/declarator.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { list_length_is_1 } from '../../list/length/is/1.mjs';
import { list_single } from '../../list/single.mjs';
import { js_node_is_identifier } from '../../js/node/is/identifier.mjs';
import { equal } from '../../equal.mjs';
export async function refactor_variable_set(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {identifier, value} = args;
    let {parsed} = args;
    const predicate = n => {
        if (not(js_node_is_variable_declaration(n))) {
            return false;
        }
        let v = js_node_property_declarations();
        let declarations = object_property_get(n, v);
        if (not(list_length_is_1(declarations))) {
            return false;
        }
        let declaration = list_single(declarations);
        if (not(js_node_is_variable_declarator(declaration))) {
            return false;
        }
        let v_2 = js_node_property_id();
        let id = object_property_get(declaration, v_2);
        if (not(js_node_is_identifier(id))) {
            return false;
        }
        let v_5 = js_property_name();
        let v_3 = object_property_get(id, v_5);
        let v_4 = equal(v_3, identifier);
        return v_4;
    };
    let nodes = js_nodes_get(parsed, predicate);
    let match = list_single(nodes);
    let declaration = js_declarations_single(match);
    js_variable_declarator_init_change_unparsed(declaration, value);
}