import { string_identifier_parts_from } from '../parts/from.mjs';
import { list_remove_last_verify_multiple } from '../../../list/remove/last/verify/multiple.mjs';
import { string_identifier_parts_to } from '../parts/to.mjs';
export function string_identifier_suffix_remove(suffix, before) {
    let suffix_parts = string_identifier_parts_to(suffix);
    let before_parts = string_identifier_parts_to(before);
    list_remove_last_verify_multiple(before_parts, suffix_parts);
    let function_name_new = string_identifier_parts_from(before_parts);
    return function_name_new;
}