import { function_name_separator } from '../../../../../function/name/separator.mjs';
import { string_case_camel_parse } from '../../parse.mjs';
export function string_case_camel_parse_to_snake(input) {
    let parsed = string_case_camel_parse(input);
    let snake = string_join(parsed, function_name_separator());
    return snake;
}