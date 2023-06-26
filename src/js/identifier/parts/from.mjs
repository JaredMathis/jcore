import { metadata } from '../../../metadata.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_name_separator } from '../../../function/name/separator.mjs';
import { list_join } from '../../../list/join.mjs';
import { list_is } from '../../../list/is.mjs';
export function js_identifier_parts_from(list_parts) {
    arguments_assert(arguments, [list_is]);
    let v = function_name_separator();
    let v_2 = list_join(list_parts, v);
    return v_2;
    metadata([]);
}