import { metadata } from '../../../metadata.mjs';
import { js_identifier_parts_from } from './from.mjs';
import { js_identifier_parts_to } from './to.mjs';
export function js_identifier_parts_map(function_name_old, map) {
    let parts = js_identifier_parts_to(function_name_old);
    map(parts);
    let function_name_new = js_identifier_parts_from(parts);
    return function_name_new;
    metadata([]);
}