import { js_identifier_combine } from '../combine.mjs';
export function js_identifier_prefix_property(property_prefix) {
    let v = 'property';
    let v_2 = js_identifier_combine(property_prefix, v);
    return v_2;
}