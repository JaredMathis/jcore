import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { file_js_map } from '../map.mjs';
export async function file_js_map_multiple(mappers, file_path) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    for (let m of mappers) {
        await file_js_map(m, file_path);
    }
    metadata([]);
}