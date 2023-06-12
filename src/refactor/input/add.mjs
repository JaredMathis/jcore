import { js_parse_expression } from '../../js/parse/expression.mjs';
import { log } from '../../log.mjs';
import { js_function_declaration_to_statement_arguments_assert_args_predicate } from '../../js/function/declaration/to/statement/arguments/assert/args/predicate.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { function_name_get } from '../../function/name/get.mjs';
import { list_add } from '../../list/add.mjs';
export async function refactor_input_add(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {input_name, function_declaration} = args;
    let arguments_assert_args = await js_function_declaration_to_statement_arguments_assert_args_predicate(function_declaration);
    let type = js_parse_expression(function_name_get(arguments_assert_todo));
    list_add(arguments_assert_args, type )
    console.log({ arguments_assert_args });
}