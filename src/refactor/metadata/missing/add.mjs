import { not } from '../../../not.mjs';
import { js_code_call_expression_statement_with_args_code } from '../../../js/code/call/expression/statement/with/args/code.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { refactor_import_fix } from '../../import/fix.mjs';
import { list_add } from '../../../list/add.mjs';
import { js_parse_statement } from '../../../js/parse/statement.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_name_get } from '../../../function/name/get.mjs';
import { js_statement_if_metadata } from '../../../js/statement/if/metadata.mjs';
import { list_last } from '../../../list/last.mjs';
import { list_empty } from '../../../list/empty.mjs';
import { js_function_declaration_to_statements } from '../../../js/function/declaration/to/statements.mjs';
export async function refactor_metadata_missing_add(args) {
    arguments_assert(arguments, [defined_is]);
    let {function_declaration} = args;
    let already_exists = false;
    let statements = js_function_declaration_to_statements(function_declaration);
    let v = not(list_empty(statements));
    if (v) {
        let last_statement = list_last(statements);
        js_statement_if_metadata(last_statement, function if_statement_metadata(last_statement, last_expression) {
            already_exists = true;
        });
    }
    let v_2 = not(already_exists);
    if (v_2) {
        const name = function_name_get(metadata);
        const call_args = '[]';
        let metadata_new_code = js_code_call_expression_statement_with_args_code(name, call_args);
        let metadata_new = js_parse_statement(metadata_new_code);
        list_add(statements, metadata_new);
        await refactor_import_fix(args);
    }
}