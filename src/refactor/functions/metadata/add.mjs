import { js_node_is_expression_statement } from '../../../js/node/is/expression/statement.mjs';
import { assert } from '../../../assert.mjs';
import { refactor_import_fix } from '../../import/fix.mjs';
import { js_parse_statement } from '../../../js/parse/statement.mjs';
import { js_statement_end } from '../../../js/statement/end.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_name_get } from '../../../function/name/get.mjs';
import { js_node_call_expression_on_name_equal } from '../../../js/node/call/expression/on/name/equal.mjs';
import { js_function_delcaration_to_statements } from '../../../js/function/delcaration/to/statements.mjs';
import { js_export_function_single_or_null } from '../../../js/export/function/single/or/null.mjs';
import { file_js_all_map_args } from '../../../file/js/all/map/args.mjs';
import { list_length_is_0 } from '../../../list/length/is/0.mjs';
import { list_last } from '../../../list/last.mjs';
import { list_add } from '../../../list/add.mjs';
import { js_code_call_expression_with_args } from '../../../js/code/call/expression/with/args.mjs';
import { js_node_property_expression } from '../../../js/node/property/expression.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { node_is_type_call_expression } from '../../../node/is/type/call/expression.mjs';
export async function refactor_functions_metadata_add() {
    await file_js_all_map_args(async function mapper(args) {
        let {parsed} = args;
        let fd = js_export_function_single_or_null(parsed);
        if (fd === null) {
            return;
        }
        let already_exists = false;
        let statements = js_function_delcaration_to_statements(fd);
        if (!list_length_is_0(statements)) {
            let last_statement = list_last(statements);
            if (js_node_is_expression_statement(last_statement)) {
                let last_expression = object_property_get(last_statement, js_node_property_expression());
                assert(node_is_type_call_expression(last_expression));
                js_node_call_expression_on_name_equal(last_expression, function_name_get(metadata), function on_name_equal() {
                    already_exists = true;
                });
            }
        }
        if (!already_exists) {
            let metadata_new_code = `${ js_code_call_expression_with_args(function_name_get(metadata), '[]') }${ js_statement_end() }`;
            let metadata_new = js_parse_statement(metadata_new_code);
            list_add(statements, metadata_new);
            await refactor_import_fix(args);
        }
    });
    metadata([]);
}