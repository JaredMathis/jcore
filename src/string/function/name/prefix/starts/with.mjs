import { string_function_name_prefix } from '../../prefix.mjs';
import { string_starts_with } from '../../../../starts/with.mjs';
export function string_function_name_prefix_starts_with(candidate, function_name) {
    return string_starts_with(candidate, string_function_name_prefix(function_name));
}