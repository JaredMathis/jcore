import { function_map_multiple } from '../multiple.mjs';
import { function_name_get } from '../../name/get.mjs';
import { list_map } from '../../../list/map.mjs';
export async function function_map_multiple_references(refactors, function_name) {
    let refactors_names = list_map(refactors, function_name_get);
    await function_map_multiple(refactors_names, function_name);
}