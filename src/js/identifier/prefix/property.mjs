import { js_identifier_combine } from '../combine.mjs';
export function js_identifier_prefix_property(property_prefix) {
    return js_identifier_combine(property_prefix, 'property');
}