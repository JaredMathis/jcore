import { metadata } from '../../metadata.mjs';
import { or } from '../../or.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_map } from '../map.mjs';
import { refactor_unasyncify } from '../../refactor/unasyncify.mjs';
import { function_name_get } from '../name/get.mjs';
import { function_copy } from '../copy.mjs';
import { function_delete_if_exists } from '../delete/if/exists.mjs';
import { string_suffix_without } from '../../string/suffix/without.mjs';
import { string_ends_with } from '../../string/ends/with.mjs';
import { function_naming_suffix_asynk } from '../naming/suffix/asynk.mjs';
export async function function_unasyncify_generic(function_name, only_if_needed) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let ending = function_naming_suffix_asynk();
    let v_3 = !only_if_needed;
    let v_4 = string_ends_with(function_name, ending);
    let v_2 = or(v_3, v_4);
    if (v_2) {
        let function_name_result = string_suffix_without(function_name, ending);
        await function_delete_if_exists(function_name_result);
        await function_copy(function_name, function_name_result);
        let v = function_name_get(refactor_unasyncify);
        await function_map(v, function_name_result);
    }
    metadata([]);
}