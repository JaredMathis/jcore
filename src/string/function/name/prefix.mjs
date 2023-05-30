import { function_name_separator } from '../../../function/name/separator.mjs';
export function string_function_name_prefix(function_name) {
    return function_name + function_name_separator();
}