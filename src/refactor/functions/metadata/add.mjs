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
export async function refactor_functions_metadata_add() {
    await file_js_all_map_args(async function mapper(args) {
        let {parsed} = args;
        let fd = js_export_function_single_or_null(parsed);
        if (fd !== null) {
            return;
        }
        let already_exists = false;
        let statements = js_function_delcaration_to_statements(fd);
        if (!list_length_is_0(statements)) {
            let last = list_last(statements);
            js_node_call_expression_on_name_equal(last, function_name_get(metadata), function on_name_equal() {
                already_exists = true;
            });
        }
        if (!already_exists) {
            let args = '[]';
            let metadata_new_code = `${ js_code_call_expression_with_args(function_name_get(metadata), args) }${ js_statement_end() }`;
            let metadata_new = js_parse_statement(metadata_new_code);
            list_add(statements, metadata_new);
        }
    });
}