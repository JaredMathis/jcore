import { string_identifier_parts_from } from '../parts/from.mjs';
import { list_remove_last_verify_multiple } from '../../../list/remove/last/verify/multiple.mjs';
import { string_identifier_parts_to } from '../parts/to.mjs';
export function string_identifier_suffix_remove(suffix, function_name_old) {
    let function_name_suffix_parts = string_identifier_parts_to(suffix);
    let function_name_old_parts = string_identifier_parts_to(function_name_old);
    list_remove_last_verify_multiple(function_name_old_parts, function_name_suffix_parts);
    let function_name_new = string_identifier_parts_from(function_name_old_parts);
    return function_name_new;
}