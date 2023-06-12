import { string_length_at_least } from '../../../../string/length/at/least.mjs';
import { string_identifier_parts } from '../../../../string/identifier/parts.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { assert } from '../../../../assert.mjs';
export async function function_rename_swap_last_2(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let parts = string_identifier_parts(function_name);
    assert(string_length_at_least(parts, 2));
}