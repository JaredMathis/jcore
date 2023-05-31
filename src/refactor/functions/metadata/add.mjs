import { js_node_call_expression_on_name_equal } from '../../../js/node/call/expression/on/name/equal.mjs';
import { js_function_delcaration_to_statements } from '../../../js/function/delcaration/to/statements.mjs';
import { js_export_function_single_or_null } from '../../../js/export/function/single/or/null.mjs';
import { file_js_all_map_args } from '../../../file/js/all/map/args.mjs';
import { list_length_is_0 } from '../../../list/length/is/0.mjs';
import { list_last } from '../../../list/last.mjs';
export async function refactor_functions_metadata_add() {
    await file_js_all_map_args(async function mapper(args) {
        let fd = js_export_function_single_or_null(parsed);
        if (fd !== null) {
            return;
        }
        let already_exists = false;
        let statements = js_function_delcaration_to_statements(fd);
        if (!list_length_is_0(statements)) {
            let last = list_last(statements);
            js_node_call_expression_on_name_equal(last, function on_name_equal() {
                already_exists = true;
            });
        }
    });
}