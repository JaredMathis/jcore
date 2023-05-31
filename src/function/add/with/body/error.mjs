import { metadata } from '../../../../metadata.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { list_single_item } from '../../../../list/single/item.mjs';
import { js_parse_statement } from '../../../../js/parse/statement.mjs';
import { error } from '../../../../error.mjs';
import { function_add_with_statements } from '../statements.mjs';
export async function function_add_with_body_error(function_name) {
    let error_statement_code = `${ function_name_get(error) }('todo: ${ function_name }');`;
    let error_statement = js_parse_statement(error_statement_code);
    return await function_add_with_statements(function_name, list_single_item(error_statement));
    metadata([]);
}