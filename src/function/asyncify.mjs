import { refactor_asyncify } from '../refactor/asyncify.mjs';
import { function_copy } from './copy.mjs';
import { function_naming_suffix_asynk } from './naming/suffix/asynk.mjs';
import { string_add } from '../string/add.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_map } from './map.mjs';
import { function_name_get } from './name/get.mjs';
export async function function_asyncify(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = function_naming_suffix_asynk();
    let function_name_new = string_add(function_name, v);
    await function_copy(function_name, function_name_new);
    let v_2 = function_name_get(refactor_asyncify);
    await function_map(v_2, function_name_new);
}