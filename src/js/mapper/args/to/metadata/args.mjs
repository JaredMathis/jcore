import { js_statement_metadata_is } from '../../../../statement/metadata/is.mjs';
import { refactor_metadata_missing_add } from '../../../../../refactor/metadata/missing/add.mjs';
import { list_length_is_0 } from '../../../../../list/length/is/0.mjs';
import { js_function_delcaration_to_statements } from '../../../../function/delcaration/to/statements.mjs';
import { js_statement_metadata_args_get } from '../../../../statement/metadata/args/get.mjs';
import { list_last } from '../../../../../list/last.mjs';
export async function js_mapper_args_to_metadata_args(args) {
    let {function_declaration} = args;
    let statements = js_function_delcaration_to_statements(function_declaration);
    if (list_length_is_0(statements)) {
        await refactor_metadata_missing_add(args);
    }
    let last_statement = list_last(statements);
    if (!js_statement_metadata_is(last_statement)) {
        await refactor_metadata_missing_add(args);
    }
    let metadata_args = js_statement_metadata_args_get(last_statement);
    return metadata_args;
}