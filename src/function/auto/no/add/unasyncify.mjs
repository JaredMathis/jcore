import { metadata } from '../../../../metadata.mjs';
import { refactor_import_fix } from '../../../../refactor/import/fix.mjs';
import { function_add_js_node_type_auto } from '../../../add/js/node/type/auto.mjs';
import { function_map_multiple_references } from '../../../map/multiple/references.mjs';
import { function_auto_no_add_refactors } from './refactors.mjs';
export async function function_auto_no_add_unasyncify(function_name) {
    let refactors = function_auto_no_add_refactors();
    await function_map_multiple_references(refactors, function_name);
    await function_add_js_node_type_auto(function_name);
    let v = [refactor_import_fix];
    await function_map_multiple_references(v, function_name);
    metadata([]);
}