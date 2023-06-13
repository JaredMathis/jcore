import { list_add_after } from '../../list/add/after.mjs';
import { js_mapper_args_to_statement_arguments_assert } from '../../js/mapper/args/to/statement/arguments/assert.mjs';
import { js_keyword_let } from '../../js/keyword/let.mjs';
import { js_parse_statement } from '../../js/parse/statement.mjs';
import { js_function_declaration_to_statements } from '../../js/function/declaration/to/statements.mjs';
import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
export async function refactor_variable_add(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {js_function_declaration, identifier} = args;
    let statement = js_parse_statement(`${ js_keyword_let() } ${ identifier }`);
    let statement_arguments_assert = await js_mapper_args_to_statement_arguments_assert(args);
    let statements = js_function_declaration_to_statements(js_function_declaration);
    list_add_after(statements, statement, statement_arguments_assert);
    error('todo: refactor_variable_new');
}