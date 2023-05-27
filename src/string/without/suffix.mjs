import { assert } from "../../assert.mjs";
import { function_extension } from "../../function/extension.mjs";
import { string_ends_with } from "../ends/with.mjs";
import { string_length } from "../length.mjs";
import { string_sub_start } from "../sub/start.mjs";

export function string_without_suffix(input, suffix) {
    assert(string_ends_with(suffix, function_extension()));
    let start = string_length(input) - string_length(suffix);
    return string_sub_start(input, start);
}