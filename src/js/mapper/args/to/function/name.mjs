import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { js_function_declaration_to_name } from '../../../../function/declaration/to/name.mjs';
export function js_mapper_args_to_function_name(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_declaration} = args;
    let function_name = js_function_declaration_to_name(function_declaration);
    return function_name;
    metadata([]);
}