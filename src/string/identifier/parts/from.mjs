import { function_name_separator } from '../../../function/name/separator.mjs';
import { list_join } from '../../../list/join.mjs';
export function string_identifier_parts_from(parts) {
    return list_join(parts, function_name_separator());
}