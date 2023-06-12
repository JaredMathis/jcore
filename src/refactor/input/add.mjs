import { js_parse_expression } from '../../js/parse/expression.mjs';
import { log } from '../../log.mjs';
import { js_mapper_args_to_statement_arguments_assert_args_predicate } from '../../js/mapper/args/to/statement/arguments/assert/args/predicate.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
export async function refactor_input_add(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {input_name, function_declaration} = args;
    let arguments_assert_args = await js_mapper_args_to_statement_arguments_assert_args_predicate(function_declaration);
    js_parse_expression;
    console.log({ arguments_assert_args });
}