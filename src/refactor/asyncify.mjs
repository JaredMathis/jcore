import { list_to_dictionary } from '../list/to/dictionary.mjs';
import { js_node_call_expression_name_equal } from '../js/node/call/expression/name/equal.mjs';
import { list_any } from '../list/any.mjs';
import { js_node_is_call_expression } from '../js/node/is/call/expression.mjs';
import { js_nodes_get } from '../js/nodes/get.mjs';
import { refactor_async_add } from './async/add.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_name_all } from '../function/name/all.mjs';
import { list_filter } from '../list/filter.mjs';
export async function refactor_asyncify(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    refactor_async_add(args);
    let function_names = await function_name_all();
    let calls = js_nodes_get(parsed, js_node_is_call_expression);
    let function_names_dictionary = list_to_dictionary();
    let function_calls = list_filter(calls, ce => list_any(function_names, name => js_node_call_expression_name_equal(ce, name)));
}