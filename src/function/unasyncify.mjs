import { string_prefix_without } from '../string/prefix/without.mjs';
import { function_suffix_async } from './suffix/async.mjs';
import { function_name_separator } from './name/separator.mjs';
import { refactor_unasyncify } from '../refactor/unasyncify.mjs';
import { function_map } from './map.mjs';
import { function_name_get } from './name/get.mjs';
export async function function_unasyncify(function_name) {
    let ending = `${ function_name_separator() }${ function_suffix_async() }`;
    let function_name_result = string_prefix_without(function_name, ending);
    function_map(function_name_get(refactor_unasyncify), function_name);
}