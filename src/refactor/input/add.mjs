import { js_mapper_args_to_statement_arguments_assert_args } from '../../js/mapper/args/to/statement/arguments/assert/args.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
export async function refactor_input_add(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {input_name} = args;
    let arguments_assert_args = await js_mapper_args_to_statement_arguments_assert_args(args);
}