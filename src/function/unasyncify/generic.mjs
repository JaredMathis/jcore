import { function_map } from '../map.mjs';
import { refactor_unasyncify } from '../../refactor/unasyncify.mjs';
import { function_name_get } from '../name/get.mjs';
import { function_copy } from '../copy.mjs';
import { function_delete_if_exists } from '../delete/if/exists.mjs';
import { string_suffix_without } from '../../string/suffix/without.mjs';
import { string_ends_with } from '../../string/ends/with.mjs';
import { function_naming_suffix_asynk } from '../naming/suffix/asynk.mjs';
export async function function_unasyncify_generic(only_if_needed, function_name) {
    let ending = function_naming_suffix_asynk();
    if (!only_if_needed || string_ends_with(ending)) {
        let function_name_result = string_suffix_without(function_name, ending);
        await function_delete_if_exists(function_name_result);
        await function_copy(function_name, function_name_result);
        let v = function_name_get(refactor_unasyncify);
        await function_map(v, function_name_result);
    }
}