import { function_add_js_node_type_auto } from '../../add/js/node/type/auto.mjs';
import { function_map_multiple } from '../../map/multiple.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_name_get } from '../../name/get.mjs';
import { function_auto_no_add_refactors } from './add/refactors.mjs';
import { list_map } from '../../../list/map.mjs';
import { function_unasyncify_generic } from '../../unasyncify/generic.mjs';
export async function function_auto_no_add(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let refactors = function_auto_no_add_refactors();
    let refactors_names = list_map(refactors, function_name_get);
    await function_map_multiple(refactors_names, function_name);
    const only_if_needed = true;
    if (false)
        await function_add_js_node_type_auto(function_name);
    await function_unasyncify_generic(function_name, only_if_needed);
    metadata([]);
}