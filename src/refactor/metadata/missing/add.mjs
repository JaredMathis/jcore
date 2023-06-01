import { refactor_import_fix } from '../../import/fix.mjs';
import { list_add } from '../../../list/add.mjs';
import { js_parse_statement } from '../../../js/parse/statement.mjs';
import { js_statement_end } from '../../../js/statement/end.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_name_get } from '../../../function/name/get.mjs';
import { js_code_call_expression_with_args } from '../../../js/code/call/expression/with/args.mjs';
import { js_statement_if_metadata } from '../../../js/statement/if/metadata.mjs';
import { list_last } from '../../../list/last.mjs';
import { list_length_is_0 } from '../../../list/length/is/0.mjs';
import { js_function_delcaration_to_statements } from '../../../js/function/delcaration/to/statements.mjs';
export async function refactor_metadata_missing_add(args) {
    let {function_declaration} = args;
    let already_exists = false;
    let statements = js_function_delcaration_to_statements(function_declaration);
    let last_statement;
    if (!list_length_is_0(statements)) {
        last_statement = list_last(statements);
        js_statement_if_metadata(last_statement, function if_statement_metadata(last_statement, last_expression) {
            already_exists = true;
        });
    }
    if (!already_exists) {
        let metadata_new_code = `${ js_code_call_expression_with_args(function_name_get(metadata), '[]') }${ js_statement_end() }`;
        let metadata_new = js_parse_statement(metadata_new_code);
        list_add(statements, metadata_new);
        await refactor_import_fix(args);
    }
}