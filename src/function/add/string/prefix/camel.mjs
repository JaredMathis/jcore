import { function_add_string_prefix } from '../prefix.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_add_string_prefix_camel() {
    arguments_assert(arguments, []);
    let result = await function_add_string_prefix(prefix, value);
    return result;
}