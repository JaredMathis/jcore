import { metadata } from '../../../../metadata.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_single_item } from '../../../../list/single/item.mjs';
import { function_add_with_statements } from '../statements.mjs';
import { js_parse_statement } from '../../../../js/parse/statement.mjs';
export async function function_add_with_statement_code(function_name, statement_code) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let statement = js_parse_statement(statement_code);
    let v = list_single_item(statement);
    let v_2 = await function_add_with_statements(function_name, v);
    return v_2;
    metadata([]);
}