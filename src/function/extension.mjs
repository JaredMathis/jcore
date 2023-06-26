import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { file_extension_separator } from '../file/extension/separator.mjs';
import { string_combine } from '../string/combine.mjs';
export function function_extension() {
    arguments_assert(arguments, []);
    let v = file_extension_separator();
    let v_2 = 'mjs';
    let v_3 = string_combine(v, v_2);
    return v_3;
    metadata([]);
}