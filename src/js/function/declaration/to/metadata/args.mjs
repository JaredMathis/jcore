import { js_statement_metadata_args_get } from '../../../../statement/metadata/args/get.mjs';
import { list_last } from '../../../../../list/last.mjs';
export function js_function_declaration_to_metadata_args(statements) {
    let last_statement = list_last(statements);
    let last_metadata_args = js_statement_metadata_args_get(last_statement);
    return last_metadata_args;
}