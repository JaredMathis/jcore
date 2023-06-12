import { function_name_separator } from '../../../function/name/separator.mjs';
import { string_split } from '../../split.mjs';
export function string_identifier_parts_to(function_name) {
    return string_split(function_name, function_name_separator());
}