import { log } from '../log.mjs';
import { function_delete_if_exists } from './delete/if/exists.mjs';
import { function_suffix_async } from './suffix/async.mjs';
import { function_name_separator } from './name/separator.mjs';
import { refactor_unasyncify } from '../refactor/unasyncify.mjs';
import { function_map } from './map.mjs';
import { function_name_get } from './name/get.mjs';
import { string_suffix_without } from '../string/suffix/without.mjs';
import { function_copy } from './copy.mjs';
export async function function_unasyncify(function_name) {
    let ending = `${ function_name_separator() }${ function_suffix_async() }`;
    let function_name_result = string_suffix_without(function_name, ending);
    console.log(function_name_result);
    await function_delete_if_exists(function_name_result);
    await function_copy(function_name, function_name_result);
    await function_map(function_name_get(refactor_unasyncify), function_name_result);
}