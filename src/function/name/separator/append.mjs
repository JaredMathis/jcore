import { metadata } from '../../../metadata.mjs';
import { function_name_separator } from '../separator.mjs';
import { string_combine } from '../../../string/combine.mjs';
export function function_name_separator_append(p) {
    let v = function_name_separator();
    let v_2 = string_combine(p, v);
    return v_2;
    metadata([]);
}