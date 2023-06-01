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
            let last_expression = js_node_property_expression();
            console.log(last_expression)
            js_node_call_expression_on_name_equal(last_statement, function_name_get(metadata), function on_name_equal() {
                already_exists = true;
            });
        }
        console.log(already_exists)
        if (false)
        if (!already_exists) {
            let metadata_new_code = `${ js_code_call_expression_with_args(function_name_get(metadata), '[]') }${ js_statement_end() }`;
            let metadata_new = js_parse_statement(metadata_new_code);
            list_add(statements, metadata_new);
            await refactor_import_fix(args);
        }
    });
    metadata([]);
}