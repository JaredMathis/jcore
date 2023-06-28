import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { function_add_with_statements_synchronized } from '../statements/synchronized.mjs';
import { list_single_item } from '../../../../list/single/item.mjs';
import { js_parse_statement } from '../../../../js/parse/statement.mjs';
export async function function_add_with_statement_synchronized(statement_code, function_name, is_async) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let statement = js_parse_statement(statement_code);
    let statements = list_single_item(statement);
    await function_add_with_statements_synchronized(function_name, statements, is_async);
    metadata([]);
}