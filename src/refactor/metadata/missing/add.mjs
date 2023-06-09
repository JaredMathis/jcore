import { boolean_value_true } from '../../../boolean/value/true.mjs';
import { boolean_value_false } from '../../../boolean/value/false.mjs';
import { js_code_call_expression_metadata } from '../../../js/code/call/expression/metadata.mjs';
import { js_code_statement } from '../../../js/code/statement.mjs';
import { not } from '../../../not.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { refactor_import_fix } from '../../import/fix.mjs';
import { list_add } from '../../../list/add.mjs';
import { js_parse_statement } from '../../../js/parse/statement.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_statement_if_metadata } from '../../../js/statement/if/metadata.mjs';
import { list_last } from '../../../list/last.mjs';
import { list_empty } from '../../../list/empty.mjs';
import { js_function_declaration_to_statements } from '../../../js/function/declaration/to/statements.mjs';
export async function refactor_metadata_missing_add(args) {
    arguments_assert(arguments, [defined_is]);
    let {function_declaration} = args;
    let already_exists = boolean_value_false();
    let statements = js_function_declaration_to_statements(function_declaration);
    let v_3 = list_empty(statements);
    let v = not(v_3);
    if (v) {
        let last_statement = list_last(statements);
        let v_4 = function if_statement_metadata(last_statement, last_expression) {
            already_exists = boolean_value_true();
        };
        js_statement_if_metadata(last_statement, v_4);
    }
    let v_2 = not(already_exists);
    if (v_2) {
        let metadata_new_code = js_code_call_expression_metadata();
        let metadata_new_statement_code = js_code_statement(metadata_new_code);
        let metadata_new = js_parse_statement(metadata_new_statement_code);
        list_add(statements, metadata_new);
        await refactor_import_fix(args);
    }
    metadata([]);
}