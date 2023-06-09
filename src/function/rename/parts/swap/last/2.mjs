import { metadata } from '../../../../../metadata.mjs';
import { integer_value_2 } from '../../../../../integer/value/2.mjs';
import { list_swap_last_2 } from '../../../../../list/swap/last/2.mjs';
import { function_rename_single } from '../../../single.mjs';
import { js_identifier_parts_map } from '../../../../../js/identifier/parts/map.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_identifier_is } from '../../../../../js/identifier/is.mjs';
import { assert } from '../../../../../assert.mjs';
import { list_length_at_least } from '../../../../../list/length/at/least.mjs';
export async function function_rename_parts_swap_last_2(function_name_old) {
    arguments_assert(arguments, [js_identifier_is]);
    let v_2 = function map(parts) {
        let v_3 = integer_value_2();
        let v = list_length_at_least(parts, v_3);
        assert(v);
        list_swap_last_2(parts);
    };
    let function_name_new = js_identifier_parts_map(function_name_old, v_2);
    await function_rename_single(function_name_old, function_name_new);
    metadata([]);
}