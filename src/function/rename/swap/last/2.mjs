import { string_identifier_parts_from } from '../../../../string/identifier/parts/from.mjs';
import { list_swap } from '../../../../list/swap.mjs';
import { string_length_at_least } from '../../../../string/length/at/least.mjs';
import { string_identifier_parts_to } from '../../../../string/identifier/parts/to.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { assert } from '../../../../assert.mjs';
import { list_last_index } from '../../../../list/last/index.mjs';
import { subtract_1 } from '../../../../subtract/1.mjs';
export async function function_rename_swap_last_2(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let parts = string_identifier_parts_to(function_name);
    assert(string_length_at_least(parts, 2));
    let last_index = list_last_index(parts);
    let last_index_second = subtract_1(last_index);
    list_swap(parts, last_index, last_index_second);
    let mapped = string_identifier_parts_from(parts);
}