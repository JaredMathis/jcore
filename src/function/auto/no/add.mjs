import { function_map_multiple_references } from '../../map/multiple/references.mjs';
import { function_add_js_node_type_auto } from '../../add/js/node/type/auto.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_auto_no_add_refactors } from './add/refactors.mjs';
import { function_unasyncify_generic } from '../../unasyncify/generic.mjs';
export async function function_auto_no_add(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let refactors = function_auto_no_add_refactors();
    await function_map_multiple_references(refactors, function_name);
    await function_add_js_node_type_auto(function_name);
    const only_if_needed = true;
    await function_unasyncify_generic(function_name, only_if_needed);
    metadata([]);
}