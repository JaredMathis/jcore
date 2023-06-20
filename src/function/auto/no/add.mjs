import { function_map_multiple } from '../../map/multiple.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_name_get } from '../../name/get.mjs';
import { function_auto_no_add_refactors } from './add/refactors.mjs';
import { list_map } from '../../../list/map.mjs';
export async function function_auto_no_add(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let refactors = function_auto_no_add_refactors();
    let refactors_names = list_map(refactors, function_name_get);
    await function_map_multiple(refactors_names, function_name);
    metadata([]);
}