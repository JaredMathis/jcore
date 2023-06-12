import { string_add } from '../add.mjs';
export function string_add_multiple(strings) {
    let function_name = '';
    for (let s of strings) {
        function_name = string_add(function_name, s);
    }
    return function_name;
}