import { js_parse_statement_let } from '../../../js/parse/statement/let.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { refactor_import_fix } from '../../import/fix.mjs';
import { js_function_declaration_statement_add_after_arguments_assert } from '../../../js/function/declaration/statement/add/after/arguments/assert.mjs';
export async function refactor_variable_add_generic(args, after_let_identifier) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let {function_declaration, identifier} = args;
    let statement = js_parse_statement_let(identifier, after_let_identifier);
    await js_function_declaration_statement_add_after_arguments_assert(function_declaration, statement);
    await refactor_import_fix(args);
    metadata([]);
}