import { metadata } from '../../metadata.mjs';
import { function_name_get } from '../name/get.mjs';
import { function_auto_after_refactors } from './after/refactors.mjs';
import { function_map } from '../map.mjs';
export async function function_auto_after(function_name) {
    let refactors = function_auto_after_refactors();
    for (let r of refactors) {
        await function_map(function_name_get(r), function_name);
    }
    metadata([]);
}