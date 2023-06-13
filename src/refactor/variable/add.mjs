import { js_function_declaration_to_statement_arguments_assert } from '../../js/function/declaration/to/statement/arguments/assert.mjs';
import { list_add_after } from '../../list/add/after.mjs';
import { js_keyword_let } from '../../js/keyword/let.mjs';
import { js_parse_statement } from '../../js/parse/statement.mjs';
import { js_function_declaration_to_statements } from '../../js/function/declaration/to/statements.mjs';
import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
export async function refactor_variable_add(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_declaration, identifier} = args;
    let statement = js_parse_statement(`${ js_keyword_let() } ${ identifier }`);
    let statement_arguments_assert = await js_function_declaration_to_statement_arguments_assert(function_declaration);
    let statements = js_function_declaration_to_statements(function_declaration);
    list_add_after(statements, statement, statement_arguments_assert);
    error('todo: refactor_variable_new');
}