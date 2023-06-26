import { metadata } from '../../../../metadata.mjs';
import { string_combine } from '../../../../string/combine.mjs';
export function function_name_to_tests_values(n) {
    let ending = '_tests_values';
    let v = string_combine(n, ending);
    return v;
    metadata([]);
}