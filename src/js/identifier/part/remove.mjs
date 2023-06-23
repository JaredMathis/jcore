import { js_identifier_parts_from } from '../parts/from.mjs';
import { list_remove } from '../../../list/remove.mjs';
import { js_identifier_parts_to } from '../parts/to.mjs';
export function js_identifier_part_remove(function_name_prefix, part_to_remove) {
    let function_name_prefix_parts = js_identifier_parts_to(function_name_prefix);
    list_remove(function_name_prefix_parts, part_to_remove);
    let function_name_of_copy = js_identifier_parts_from(function_name_prefix_parts);
    return function_name_of_copy;
}