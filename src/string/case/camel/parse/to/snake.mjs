import { function_name_separator } from '../../../../../function/name/separator.mjs';
import { string_case_camel_parse } from '../../parse.mjs';
export function string_case_camel_parse_to_snake(node_type) {
    let node_type_parsed = string_case_camel_parse(node_type);
    let node_type_snake = string_join(node_type_parsed, function_name_separator());
}