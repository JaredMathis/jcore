import { list_swap_last_2 } from '../../../../../list/swap/last/2.mjs';
import { function_rename_single } from '../../../single.mjs';
import { string_identifier_parts_map } from '../../../../../string/identifier/parts/map.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { string_identifier_is } from '../../../../../string/identifier/is.mjs';
import { assert } from '../../../../../assert.mjs';
import { list_length_at_least } from '../../../../../list/length/at/least.mjs';
export async function function_rename_parts_swap_last_2(function_name_old) {
    arguments_assert(arguments, [string_identifier_is]);
    let function_name_new = string_identifier_parts_map(function_name_old, function map(parts) {
        let v = list_length_at_least(parts, 2);
        assert(v);
        list_swap_last_2(parts);
    });
    await function_rename_single(function_name_old, function_name_new);
}