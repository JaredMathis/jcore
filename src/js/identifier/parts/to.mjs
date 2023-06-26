import { metadata } from '../../../metadata.mjs';
import { function_name_separator } from '../../../function/name/separator.mjs';
import { string_split } from '../../../string/split.mjs';
export function js_identifier_parts_to(function_name) {
    let v = function_name_separator();
    let v_2 = string_split(function_name, v);
    return v_2;
    metadata([]);
}