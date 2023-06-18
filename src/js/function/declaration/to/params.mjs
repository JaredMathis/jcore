import { js_node_property_params } from '../../../node/property/params.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
export function js_function_declaration_to_params(fd) {
    let v = js_node_property_params();
    let v_2 = object_property_get(fd, v);
    return v_2;
}