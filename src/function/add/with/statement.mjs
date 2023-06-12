import { list_single_item } from '../../../list/single/item.mjs';
import { function_add_with_statements } from './statements.mjs';
import { js_parse_statement } from '../../../js/parse/statement.mjs';
export async function function_add_with_statement(function_name, error_statement_code) {
    let error_statement = js_parse_statement(error_statement_code);
    return await function_add_with_statements(function_name, list_single_item(error_statement));
}