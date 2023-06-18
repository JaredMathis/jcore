import { function_name_separator } from '../../../function/name/separator.mjs';
import { list_join } from '../../../list/join.mjs';
export function string_identifier_parts_from(list_parts) {
    let v = function_name_separator();
    let v_2 = list_join(list_parts, v);
    return v_2;
}