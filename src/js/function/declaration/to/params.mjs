import { js_node_property_params } from '../../../node/property/params.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
export function js_function_declaration_to_params(fd) {
    return object_property_get(fd, js_node_property_params());
}