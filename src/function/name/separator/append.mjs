import { function_name_separator } from '../separator.mjs';
import { string_combine } from '../../../string/combine.mjs';
export function function_name_separator_append(p) {
    return string_combine(p, function_name_separator());
}