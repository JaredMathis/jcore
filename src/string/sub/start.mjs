import { string_length } from "../string_length.mjs";

export function string_sub_start(input, start) {
    let length = string_length(input);
    return string_sub_from(input, start, length);
}