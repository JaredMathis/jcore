import { refactor_import_fix } from '../import/fix.mjs';
import { js_function_declaration_statement_add_after_arguments_assert } from '../../js/function/declaration/statement/add/after/arguments/assert.mjs';
import { js_keyword_let } from '../../js/keyword/let.mjs';
import { js_parse_statement } from '../../js/parse/statement.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
export async function refactor_variable_add(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_declaration, identifier} = args;
    let statement = js_parse_statement(`${ js_keyword_let() } ${ identifier }`);
    await js_function_declaration_statement_add_after_arguments_assert(function_declaration, statement);
    await refactor_import_fix(args);
}