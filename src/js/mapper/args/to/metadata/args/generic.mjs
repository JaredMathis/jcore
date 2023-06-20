import { js_statement_metadata_args_get } from '../../../../../statement/metadata/args/get.mjs';
import { refactor_metadata_missing_add } from '../../../../../../refactor/metadata/missing/add.mjs';
import { js_statement_metadata_is } from '../../../../../statement/metadata/is.mjs';
import { not } from '../../../../../../not.mjs';
import { list_last } from '../../../../../../list/last.mjs';
import { list_empty } from '../../../../../../list/empty.mjs';
import { js_function_declaration_to_statements } from '../../../../../function/declaration/to/statements.mjs';
export async function js_mapper_args_to_metadata_args_generic(args, add_missing) {
    let {function_declaration} = args;
    let statements = js_function_declaration_to_statements(function_declaration);
    let missing = false;
    if (list_empty(statements)) {
        missing = true;
    } else {
        let last_statement = list_last(statements);
        if (not(js_statement_metadata_is(last_statement))) {
            missing = true;
        }
    }
    if (missing) {
        if (add_missing) {
            await refactor_metadata_missing_add(args);
        } else {
            return [];
        }
    }
    let statements2 = js_function_declaration_to_statements(function_declaration);
    let last_statement2 = list_last(statements2);
    let metadata_args = js_statement_metadata_args_get(last_statement2);
    return metadata_args;
}