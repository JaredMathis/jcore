import { arguments_assert_todo } from '../../../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
import { js_statement_end } from '../../../../../../statement/end.mjs';
import { js_code_call_expression_with_args_code } from '../../../with/args/code.mjs';
export function js_code_call_expression_statement_with_args_code(name, call_args) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    return `${ js_code_call_expression_with_args_code(name, call_args) }${ js_statement_end() }`;
}