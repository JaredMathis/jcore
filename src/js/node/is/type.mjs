import { object_property_get } from "../../../object/property/get.mjs";

export function js_node_is_type(node, type_expected) {
    console.log({node})
    const type_actual = object_property_get(node, 'type');
    return type_actual === type_expected
}