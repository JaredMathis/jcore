import { function_name_separator } from "../../../../function/name/separator.mjs";
import { string_includes } from "../../../includes.mjs";

export function string_function_test_name_is(a, fns) {
    let fns = function_name_separator();
    return string_includes(a, `${fns}test${fns}`);
}

