import { js_expression_awaitify } from '../../expression/awaitify.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_call_expression_name_change } from './name/change.mjs';
import { string_add } from '../../../string/add.mjs';
import { js_call_expression_name_get_or_null } from './name/get/or/null.mjs';
export function js_call_expression_awaitify(node, suffix) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let name_old = js_call_expression_name_get_or_null(node);
    let name_new = string_add(name_old, suffix);
    js_call_expression_name_change(node, name_new);
    js_expression_awaitify(node);
}