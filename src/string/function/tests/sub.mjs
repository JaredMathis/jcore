import { function_name_separator } from "../../../function/name/separator.mjs";

export function string_function_tests_sub() {
    let fns = function_name_separator();
    return `${fns}test${fns}`;
}
