import { metadata } from '../../../metadata.mjs';
import { function_name_get } from '../../../function/name/get.mjs';
import { js_node_call_expression_if_name_equal } from '../../node/call/expression/if/name/equal.mjs';
import { node_is_type_call_expression } from '../../../node/is/type/call/expression.mjs';
import { assert } from '../../../assert.mjs';
import { js_node_property_expression } from '../../node/property/expression.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { js_node_is_expression_statement } from '../../node/is/expression/statement.mjs';
export function js_statement_if_metadata(statement, if_statement_metadata) {
    if (js_node_is_expression_statement(statement)) {
        let last_expression = object_property_get(statement, js_node_property_expression());
        if (node_is_type_call_expression(last_expression)) {
            js_node_call_expression_if_name_equal(last_expression, function_name_get(metadata), function on_name_equal() {
                if_statement_metadata(statement, last_expression);
            });
        }
    }
}