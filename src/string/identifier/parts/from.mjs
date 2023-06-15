import { function_name_separator } from '../../../function/name/separator.mjs';
import { list_join } from '../../../list/join.mjs';
export function string_identifier_parts_from(list_parts) {
    return list_join(list_parts, function_name_separator());
}