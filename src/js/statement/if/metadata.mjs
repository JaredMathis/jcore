import { js_node_is } from '../../node/is.mjs';
import { js_node_call_expression_statement_if_name_equal } from '../../node/call/expression/statement/if/name/equal.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_name_get } from '../../../function/name/get.mjs';
import { function_is } from '../../../function/is.mjs';
export function js_statement_if_metadata(statement, if_statement_metadata) {
    arguments_assert(arguments, [
        js_node_is,
        function_is
    ]);
    let name_expected = function_name_get(metadata);
    js_node_call_expression_statement_if_name_equal(statement, name_expected, on_name_equal);
    function on_name_equal(statement, expression) {
        if_statement_metadata(statement, expression);
    }
    metadata([]);
}