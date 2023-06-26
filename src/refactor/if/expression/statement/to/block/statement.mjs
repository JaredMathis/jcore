import { object_copy_shallow } from '../../../../../../object/copy/shallow.mjs';
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
import { string_a } from '../../../../../../string/a.mjs';
import { list_add } from '../../../../../../list/add.mjs';
import { object_replace } from '../../../../../../object/replace.mjs';
import { metadata } from '../../../../../../metadata.mjs';
export function refactor_if_expression_statement_to_block_statement(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {parsed} = args;
    js_nodes_each(parsed, js_node_is_if_statement, function v_2(node) {
        let consequent = js_node_property_consequent_get(node);
        let v = js_node_is_expression_statement(consequent);
        if (v) {
            let function_expression = js_function_declaration_named(string_a());
            let block_statement = js_node_property_body_get(function_expression);
            assert(js_node_is_block_statement(block_statement));
            let body = js_node_property_body_get(block_statement);
            let copy = object_copy_shallow(consequent);
            list_add(body, copy);
            object_replace(consequent, block_statement);
        }
    });
    metadata([]);
}