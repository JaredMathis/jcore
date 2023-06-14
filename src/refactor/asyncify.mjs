import { js_call_expression_to_name_or_null } from '../js/call/expression/to/name/or/null.mjs';
import { object_property_exists } from '../object/property/exists.mjs';
import { list_to_dictionary } from '../list/to/dictionary.mjs';
import { js_node_is_call_expression } from '../js/node/is/call/expression.mjs';
import { js_nodes_get } from '../js/nodes/get.mjs';
import { refactor_async_add } from './async/add.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_name_all } from '../function/name/all.mjs';
import { list_filter } from '../list/filter.mjs';
import { identity } from '../identity.mjs';
export async function refactor_asyncify(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    refactor_async_add(args);
    let function_names = await function_name_all();
    let calls = js_nodes_get(parsed, js_node_is_call_expression);
    let function_names_dictionary = list_to_dictionary(function_names, identity);
    let function_calls = list_filter(calls, ce => object_property_exists(function_names_dictionary, js_call_expression_to_name_or_null(ce)));
}