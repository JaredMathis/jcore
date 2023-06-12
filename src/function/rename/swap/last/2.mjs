import { string_length_at_least } from '../../../../string/length/at/least.mjs';
import { string_identifier_parts } from '../../../../string/identifier/parts.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { assert } from '../../../../assert.mjs';
import { list_last_index } from '../../../../list/last/index.mjs';
import { subtract_1 } from '../../../../subtract/1.mjs';
import { list_get } from '../../../../list/get.mjs';
export async function function_rename_swap_last_2(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let parts = string_identifier_parts(function_name);
    assert(string_length_at_least(parts, 2));
    let last_index = list_last_index(parts);
    let last_index_second = subtract_1(last_index);
    let temp = list_get(last_index);
    ilst_set(parts, last_index_second, temp);
}