import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { refactor_import_fix } from '../../../../refactor/import/fix.mjs';
import { function_add_properties_get_auto } from '../../../add/properties/get/auto.mjs';
import { function_map_multiple_references } from '../../../map/multiple/references.mjs';
import { function_auto_no_add_refactors } from './refactors.mjs';
export async function function_auto_no_add_unasyncify(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let refactors = function_auto_no_add_refactors();
    await function_map_multiple_references(refactors, function_name);
    await function_add_properties_get_auto(function_name);
    let v = [refactor_import_fix];
    await function_map_multiple_references(v, function_name);
    metadata([]);
}