import { js_mapper_args_to_statement_arguments_assert } from '../../js/mapper/args/to/statement/arguments/assert.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
export async function refactor_input_add(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {input_name} = args;
    let statement_arguments_assert = await js_mapper_args_to_statement_arguments_assert(args);
}