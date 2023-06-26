import { metadata } from '../../metadata.mjs';
import { function_map } from '../map.mjs';
export async function function_map_multiple(refactors_names, function_name) {
    for (let n of refactors_names) {
        await function_map(n, function_name);
    }
    metadata([]);
}