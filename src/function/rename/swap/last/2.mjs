import { function_rename } from '../../../rename.mjs';
import { string_identifier_parts_map } from '../../../../string/identifier/parts/map.mjs';
import { list_swap } from '../../../../list/swap.mjs';
import { string_length_at_least } from '../../../../string/length/at/least.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { assert } from '../../../../assert.mjs';
import { list_last_index } from '../../../../list/last/index.mjs';
import { subtract_1 } from '../../../../subtract/1.mjs';
import { equal } from '../../../../equal.mjs';
export async function function_rename_swap_last_2(function_name_old) {
    arguments_assert(arguments, [string_identifier_is]);
    let function_name_new = string_identifier_parts_map(function_name_old, function map(parts) {
        assert(string_length_at_least(parts, 2));
        let last_index = list_last_index(parts);
        let last_index_second = subtract_1(last_index);
        list_swap(parts, last_index, last_index_second);
    });
    function_rename;
}