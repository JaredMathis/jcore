import { metadata } from '../../../metadata.mjs';
import { js_identifier_parts_from } from '../parts/from.mjs';
import { list_set } from '../../../list/set.mjs';
import { list_index_of_single } from '../../../list/index/of/single.mjs';
import { js_identifier_parts_to } from '../parts/to.mjs';
export function js_identifier_part_change(function_name_prefix, part_to_change_from, part_to_change_to) {
    let function_name_prefix_parts = js_identifier_parts_to(function_name_prefix);
    let index = list_index_of_single(function_name_prefix_parts, part_to_change_from);
    list_set(function_name_prefix_parts, index, part_to_change_to);
    let function_name_of_copy = js_identifier_parts_from(function_name_prefix_parts);
    return function_name_of_copy;
    metadata([]);
}