import { string_identifier_parts_from } from './from.mjs';
import { string_identifier_parts_to } from './to.mjs';
export function string_identifier_parts_map(function_name_old, map) {
    let parts = string_identifier_parts_to(function_name_old);
    map(parts);
    let function_name_new = string_identifier_parts_from(parts);
    return function_name_new;
}