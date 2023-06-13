import { function_add_string } from '../../string.mjs';
import { string_identifier_with_prefix } from '../../../../string/identifier/with/prefix.mjs';
export async function function_add_string_prefix_generic(prefix, suffix, value) {
    let function_name = string_identifier_with_prefix(prefix, suffix);
    await function_add_string(function_name, value);
    return function_name;
}