import { js_export_function_single } from '../../../../js/export/function/single.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { js_node_call_expression_if_name_equal } from '../../../../js/node/call/expression/if/name/equal.mjs';
import { list_first } from '../../../../list/first.mjs';
import { js_function_delcaration_to_statements } from '../../../../js/function/delcaration/to/statements.mjs';
import { function_parse } from '../../../parse.mjs';
import { function_name_all } from '../../../name/all.mjs';
export async function function_arguments_assert_tautology_next() {
    const all = await function_name_all();
    for (let function_name of all) {
        let parsed = function_parse(function_name);
        let function_delcaration = js_export_function_single();
        let statements = js_function_delcaration_to_statements(function_declaration);
        let statement_first = list_first(statements);
        js_node_call_expression_if_name_equal(statement_first, function_name_get(arguments_assert), function on_name_equal() {
            exists = true;
        });
    }
}