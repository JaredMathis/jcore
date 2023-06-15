import { js_code_call_expression_with_args } from '../../js/code/call/expression/with/args.mjs';
import { js_call_expression_awaitify } from '../../js/call/expression/awaitify.mjs';
import { js_code_statement } from '../../js/code/statement.mjs';
import { function_add_with_statement } from './with/statement.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { error } from '../../error.mjs';
import { comment } from '../../comment.mjs';
export async function function_add_mapper(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let expression = error();
    comment(` await function_map(function_name_get(refactor_asyncify), function_name_new);`);
    js_code_call_expression_with_args();
    return await function_add_with_statement(function_name, js_code_statement(js_call_expression_awaitify(expression)));
}