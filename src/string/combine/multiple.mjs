import { string_combine } from '../combine.mjs';
export function string_combine_multiple(strings) {
    let function_name = '';
    for (let s of strings) {
        function_name = string_combine(function_name, s);
    }
    return function_name;
}