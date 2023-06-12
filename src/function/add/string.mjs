import { function_add_with_statement } from './with/statement.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_add_string() {
    arguments_assert(arguments, []);
    return await function_add_with_statement(function_name, error_statement_code);
}