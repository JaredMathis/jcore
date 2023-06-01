import { js_statement_if_metadata } from '../../../../js/statement/if/metadata.mjs';
import { file_js_all_map_args_if_function } from '../../../../file/js/all/map/args/if/function.mjs';
import { refactor_import_fix } from '../../../import/fix.mjs';
import { list_add } from '../../../../list/add.mjs';
import { js_parse_statement } from '../../../../js/parse/statement.mjs';
import { js_statement_end } from '../../../../js/statement/end.mjs';
import { js_code_call_expression_with_args } from '../../../../js/code/call/expression/with/args.mjs';
import { metadata } from '../../../../metadata.mjs';
import { function_name_get } from '../../../../function/name/get.mjs';
import { list_last } from '../../../../list/last.mjs';
import { list_length_is_0 } from '../../../../list/length/is/0.mjs';
import { js_function_delcaration_to_statements } from '../../../../js/function/delcaration/to/statements.mjs';
export async function refactor_functions_metadata_extra_remove() {
    await file_js_all_map_args_if_function(async function logic(fd, args) {
        let already_exists = false;
        let statements = js_function_delcaration_to_statements(fd);
        if (!list_length_is_0(statements)) {
            let last_statement = list_last(statements);
            let success = false;
            js_statement_if_metadata(last_statement, function if_statement_metadata(last_statement, last_expression) {
                success = true;
            });
            success
        }
        if (false)
            js_statement_if_metadata(last_statement, function if_statement_metadata(last_statement, last_expression) {
                already_exists = true;
            });
        if (!already_exists) {
            let metadata_new_code = `${ js_code_call_expression_with_args(function_name_get(metadata), '[]') }${ js_statement_end() }`;
            let metadata_new = js_parse_statement(metadata_new_code);
            list_add(statements, metadata_new);
            await refactor_import_fix(args);
        }
    });
    metadata([]);
}