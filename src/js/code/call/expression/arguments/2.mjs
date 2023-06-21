import { js_code_call_expression_with_args } from '../with/args.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { list_add_multiple } from '../../../../../list/add/multiple.mjs';
export function js_code_call_expression_arguments_2(code_argument_1, code_argument_2, args_additional, v) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let args = [
        code_argument_1,
        code_argument_2
    ];
    list_add_multiple(args, args_additional);
    let after_let = js_code_call_expression_with_args(v, args);
    return after_let;
}