import { string_split } from '../../split.mjs';
export function string_identifier_multiple_parse(values) {
    return string_split(values, ',');
}