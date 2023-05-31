import { function_name_separator } from './name/separator.mjs';
import { refactor_unasyncify } from '../refactor/unasyncify.mjs';
import { function_map } from './map.mjs';
import { function_name_get } from './name/get.mjs';
export async function function_unasyncify(function_name) {
    let ending = `async`;
    let a = `${ function_name_separator() }`;
    function_map(function_name_get(refactor_unasyncify), function_name);
}