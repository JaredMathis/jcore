import { metadata } from '../../../../metadata.mjs';
import { function_add_with_statements_synchronized } from '../statements/synchronized.mjs';
import { list_single_item } from '../../../../list/single/item.mjs';
import { js_parse_statement } from '../../../../js/parse/statement.mjs';
export async function function_add_with_statement_synchronized(statement_code, function_name, is_async) {
    let statement = js_parse_statement(statement_code);
    let statements = list_single_item(statement);
    await function_add_with_statements_synchronized(function_name, statements, is_async);
    metadata([]);
}