import { list_add_at } from '../../list/add/at.mjs';
import { list_index_of } from '../../list/index/of.mjs';
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
    let after_index = list_index_of(statements, statement_arguments_assert);
    let statements = js_function_declaration_to_statements(js_function_declaration);
    list_add_at(statements, statement, after_index);
    error('todo: refactor_variable_new');
}