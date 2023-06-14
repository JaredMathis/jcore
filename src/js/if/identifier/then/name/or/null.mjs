import { js_identifier_name_get } from '../../../../../identifier/name/get.mjs';
import { js_node_is_identifier } from '../../../../../node/is/identifier.mjs';
import { object_property_get } from '../../../../../../object/property/get.mjs';
export function js_if_identifier_then_name_or_null(node, property_name, or_null) {
    let property = object_property_get(node, property_name);
    if (or_null) {
        if (!js_node_is_identifier(property)) {
            return null;
        }
    }
    let name = js_identifier_name_get(property);
    return name;
}