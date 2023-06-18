import { string_is } from '../../string/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { refactor_unasyncify } from '../../refactor/unasyncify.mjs';
import { function_name_get } from '../name/get.mjs';
import { function_map } from '../map.mjs';
import { function_copy } from '../copy.mjs';
import { function_delete_if_exists } from '../delete/if/exists.mjs';
import { string_suffix_without } from '../../string/suffix/without.mjs';
export async function function_unasyncify_generic(function_name, ending) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let function_name_result = string_suffix_without(function_name, ending);
    await function_delete_if_exists(function_name_result);
    await function_copy(function_name, function_name_result);
    let v = function_name_get(refactor_unasyncify);
    await function_map(v, function_name_result);
}