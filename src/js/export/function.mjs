import { assert } from "../../assert.mjs";
import { string_length } from "../../string/length.mjs";

export function js_export_function(function_name, function_statements_code) {
    assert(string_length(function_name) >= 1);
    return `export function ${ function_name }() { ${ function_statements_code } }`;
}