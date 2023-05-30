import { integer_parse } from './parse.mjs';
export function integer_parsable(input) {
    return !isNaN(integer_parse(input));
}