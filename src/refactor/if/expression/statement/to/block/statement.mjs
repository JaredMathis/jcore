import { js_function_declaration_named } from '../../../../../../js/function/declaration/named.mjs';
import { js_node_property_body_get } from '../../../../../../js/node/property/body/get.mjs';
import { js_node_property_consequent_get } from '../../../../../../js/node/property/consequent/get.mjs';
import { js_node_is_if_statement } from '../../../../../../js/node/is/if/statement.mjs';
import { arguments_assert_todo } from '../../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { js_nodes_each } from '../../../../../../js/nodes/each.mjs';
import { js_node_is_expression_statement } from '../../../../../../js/node/is/expression/statement.mjs';
import { assert } from '../../../../../../assert.mjs';
import { js_node_is_block_statement } from '../../../../../../js/node/is/block/statement.mjs';
export function refactor_if_expression_statement_to_block_statement(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {parsed} = args;
    js_nodes_each(parsed, js_node_is_if_statement, node => {
        let consequent = js_node_property_consequent_get(node);
        if (js_node_is_expression_statement(consequent)) {
            let function_expression = js_function_declaration_named(name);
            let body = js_node_property_body_get(function_expression);
            assert(js_node_is_block_statement(body));
        }
    });
}