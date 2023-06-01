import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_name_separator } from '../../../function/name/separator.mjs';
export function string_function_tests_sub() {
    arguments_assert(arguments, []);
    let fns = function_name_separator();
    return `${ fns }test${ fns }`;
    metadata([]);
}