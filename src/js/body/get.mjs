import { metadata } from '../../metadata.mjs';
import { object_property_get } from '../../object/property/get.mjs';
export function js_body_get(parsed) {
    return object_property_get(parsed, 'body');
    metadata([]);
}