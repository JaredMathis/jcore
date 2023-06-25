import { js_statement_expression_to_expression } from '../../../../../../statement/expression/to/expression.mjs';
import { function_is } from '../../../../../../../function/is.mjs';
import { defined_is } from '../../../../../../../defined/is.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
import { js_node_call_expression_if_name_equal } from '../../../if/name/equal.mjs';
import { js_node_is_expression_statement } from '../../../../../is/expression/statement.mjs';
import { js_node_is } from '../../../../../is.mjs';
export function js_node_call_expression_statement_if_name_equal(statement, name_expected, on_name_equal) {
    arguments_assert(arguments, [
        js_node_is,
        defined_is,
        function_is
    ]);
    let v = js_node_is_expression_statement(statement);
    if (v) {
        let expression = js_statement_expression_to_expression(statement);
        js_node_call_expression_if_name_equal(expression, name_expected, on_name_equal);
    }
}