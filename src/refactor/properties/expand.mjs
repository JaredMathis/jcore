import { js_unparse } from '../../js/unparse.mjs';
import { list_add_after } from '../../list/add/after.mjs';
import { object_replace } from '../../object/replace.mjs';
import { js_statement_assignment } from '../../js/statement/assignment.mjs';
import { js_identifier_name_next_prefix } from '../../js/identifier/name/next/prefix.mjs';
import { js_identifier_name_next } from '../../js/identifier/name/next.mjs';
import { js_code_expression_string } from '../../js/code/expression/string.mjs';
import { js_code_join_comma } from '../../js/code/join/comma.mjs';
import { js_node_property_declarations } from '../../js/node/property/declarations.mjs';
import { js_code_call_expression_statement_with_args_code } from '../../js/code/call/expression/statement/with/args/code.mjs';
import { js_property_identifier_name } from '../../js/property/identifier/name.mjs';
import { js_node_property_value } from '../../js/node/property/value.mjs';
import { js_node_property_key } from '../../js/node/property/key.mjs';
import { js_node_property_properties } from '../../js/node/property/properties.mjs';
import { js_block_statement_body } from '../../js/block/statement/body.mjs';
import { js_node_is_block_statement } from '../../js/node/is/block/statement.mjs';
import { js_visit_node_grandparent } from '../../js/visit/node/grandparent.mjs';
import { js_node_is_variable_declaration } from '../../js/node/is/variable/declaration.mjs';
import { js_node_is_variable_declarator } from '../../js/node/is/variable/declarator.mjs';
import { js_visit_nodes_filter } from '../../js/visit/nodes/filter.mjs';
import { js_node_is_object_pattern } from '../../js/node/is/object/pattern.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { function_name_get } from '../../function/name/get.mjs';
import { list_length_is_1 } from '../../list/length/is/1.mjs';
export function refactor_properties_expand(args) {
    arguments_assert(arguments, [defined_is]);
    let {function_declaration, parsed} = args;
    js_visit_nodes_filter(parsed, js_node_is_object_pattern, v => {
        let {stack, parent, node} = v;
        if (js_node_is_variable_declarator(parent)) {
            let grandparent = js_visit_node_grandparent(stack, 0);
            if (js_node_is_variable_declaration(grandparent)) {
                let declarations = object_property_get(grandparent, js_node_property_declarations());
                if (list_length_is_1(declarations)) {
                    let grandparent_great = js_visit_node_grandparent(stack, 1);
                    if (js_node_is_block_statement(grandparent_great)) {
                        let function_body_statements = js_block_statement_body(grandparent_great);
                        let previous = grandparent;
                        let v = js_identifier_name_next(parsed);
                        let properties = object_property_get(node, js_node_property_properties());
                        for (let property of properties) {
                            let key = js_property_identifier_name(property, js_node_property_key());
                            let local = js_property_identifier_name(property, js_node_property_value());
                            let local_identifier = js_identifier_name_next_prefix(parsed, local);
                            let args = [
                                v,
                                js_code_expression_string(key)
                            ];
                            let args_code = js_code_join_comma(args);
                            let after_let = js_code_call_expression_statement_with_args_code(function_name_get(object_property_get), args_code);
                            let statement = js_statement_assignment(local_identifier, after_let);
                            list_add_after(function_body_statements, statement, previous);
                            js_unparse(statement);
                            previous = statement;
                        }
                        object_replace(node, v);
                        js_unparse(node);
                    }
                }
            }
        }
    });
}