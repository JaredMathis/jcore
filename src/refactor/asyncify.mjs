import { not } from '../not.mjs';
import { js_callable_multiple_assert_not } from '../js/callable/multiple/assert/not.mjs';
import { function_naming_suffix_async } from '../function/naming/suffix/async.mjs';
import { js_call_expression_name_get_or_null } from '../js/call/expression/name/get/or/null.mjs';
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
import { assert } from '../assert.mjs';
import { string_ends_with } from '../string/ends/with.mjs';
import { comment } from '../comment.mjs';
export async function refactor_asyncify(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {parsed} = args;
    js_callable_multiple_assert_not(parsed);
    refactor_async_add(args);
    let function_names = await function_name_all();
    let function_names_dictionary = list_to_dictionary(function_names, identity);
    let calls = js_nodes_get(parsed, js_node_is_call_expression);
    let function_calls = list_filter(calls, function v_3(ce) {
        return object_property_exists(function_names_dictionary, js_call_expression_name_get_or_null(ce));
    });
    let suffix = function_naming_suffix_async();
    for (let f of function_calls) {
        let name = js_call_expression_name_get_or_null(f);
        comment(`If this assert fails - look into why a non-async function (presumably) is calling a function that ends with async`);
        let v_2 = string_ends_with(name, suffix);
        let v = not(v_2);
        assert(v);
    }
}