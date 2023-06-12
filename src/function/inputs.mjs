import { js_function_declaration_to_params } from '../js/function/declaration/to/params.mjs';
import { js_node_property_name } from '../js/node/property/name.mjs';
import { list_map_property } from '../list/map/property.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_to_declaration } from './to/declaration.mjs';
export async function function_inputs(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let fd = await function_to_declaration(function_name);
    let params = js_function_declaration_to_params(fd);
    let mapped = list_map_property(params, js_node_property_name());
    return mapped;
}