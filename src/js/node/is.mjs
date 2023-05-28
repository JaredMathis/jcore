import { object_property_exists } from "../../object/property/exists.mjs";

export function js_node_is(candidate) {
    if (!candidate) {
        return false;
    }
    return object_property_exists(candidate, 'type')
}