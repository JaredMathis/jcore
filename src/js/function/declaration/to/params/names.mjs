import { js_node_property_name } from '../../../../node/property/name.mjs';
import { list_map_property } from '../../../../../list/map/property.mjs';
import { js_function_declaration_to_params } from '../params.mjs';
export function js_function_declaration_to_params_names(fd) {
    let params = js_function_declaration_to_params(fd);
    let mapped = list_map_property(params, js_node_property_name());
    return mapped;
}