import { refactor_asyncify } from '../refactor/asyncify.mjs';
import { js_node_is_call_expression } from '../js/node/is/call/expression.mjs';
import { js_nodes_get } from '../js/nodes/get.mjs';
import { function_copy } from './copy.mjs';
import { function_naming_suffix_async } from './naming/suffix/async.mjs';
import { string_add } from '../string/add.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_map } from './map.mjs';
import { function_name_get } from './name/get.mjs';
export async function function_asyncify(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let function_name_new = string_add(function_name, function_naming_suffix_async());
    await function_copy(function_name, function_name_new);
    function_map(function_name_get(refactor_asyncify));
    js_nodes_get(parsed, js_node_is_call_expression);
}