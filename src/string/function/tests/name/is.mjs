import { string_includes } from "../../../includes.mjs";
import { string_function_tests_sub } from "../sub.mjs";

export function string_function_tests_name_is(a) {
    return string_includes(a, string_function_tests_sub(fns));
}
