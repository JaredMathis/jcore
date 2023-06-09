import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_node_property_async_get } from '../../../js/node/property/async/get.mjs';
import { function_name_to_declaration } from '../to/declaration.mjs';
export async function function_name_async_is(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let fd = await function_name_to_declaration(function_name);
    let async_is = js_node_property_async_get(fd);
    return async_is;
    metadata([]);
}