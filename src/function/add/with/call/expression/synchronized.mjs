import { boolean_value_true } from '../../../../../boolean/value/true.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_add_with_statement_synchronized } from '../../statement/synchronized.mjs';
import { js_code_statement } from '../../../../../js/code/statement.mjs';
import { js_code_await } from '../../../../../js/code/await.mjs';
import { js_code_call_expression_with_args } from '../../../../../js/code/call/expression/with/args.mjs';
export async function function_add_with_call_expression_synchronized(function_name, function_name_to_call, expression_code_args) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let expression_code = js_code_call_expression_with_args(function_name_to_call, expression_code_args);
    let awaited = js_code_await(expression_code);
    let statement_code = js_code_statement(awaited);
    let is_async = boolean_value_true();
    await function_add_with_statement_synchronized(statement_code, function_name, is_async);
    metadata([]);
}