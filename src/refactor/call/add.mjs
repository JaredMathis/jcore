import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { js_parse_statement } from '../../js/parse/statement.mjs';
export function refactor_call_add(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_declaration} = args;
    let statement = js_parse_statement(identifier, after_let_identifier);
    await js_function_declaration_statement_add_after_arguments_assert(function_declaration, statement);
    await refactor_import_fix(args);
    error('todo: refactor_call_add');
}