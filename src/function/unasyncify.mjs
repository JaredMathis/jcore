import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_copy } from './copy.mjs';
import { function_naming_suffix_async } from './naming/suffix/async.mjs';
import { metadata } from '../metadata.mjs';
import { function_delete_if_exists } from './delete/if/exists.mjs';
import { refactor_unasyncify } from '../refactor/unasyncify.mjs';
import { function_map } from './map.mjs';
import { function_name_get } from './name/get.mjs';
import { string_suffix_without } from '../string/suffix/without.mjs';
export async function function_unasyncify(function_name) {
    arguments_assert(arguments, [tautology]);
    let ending = function_naming_suffix_async();
    let function_name_result = string_suffix_without(function_name, ending);
    await function_delete_if_exists(function_name_result);
    await function_copy(function_name, function_name_result);
    await function_map(function_name_get(refactor_unasyncify), function_name_result);
    metadata([]);
}