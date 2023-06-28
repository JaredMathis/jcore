import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { js_node_property_name } from '../../../../node/property/name.mjs';
import { list_map_property } from '../../../../../list/map/property.mjs';
import { js_function_declaration_to_params } from '../params.mjs';
export function js_function_declaration_to_params_names(fd) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let params = js_function_declaration_to_params(fd);
    let v = js_node_property_name();
    let mapped = list_map_property(params, v);
    return mapped;
    metadata([]);
}