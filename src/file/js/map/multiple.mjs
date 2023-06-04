import { path_is } from '../../../path/is.mjs';
import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { file_js_map } from '../map.mjs';
import { list_is } from '../../../list/is.mjs';
export async function file_js_map_multiple(mappers, file_path) {
    arguments_assert(arguments, [
        list_is,
        path_is
    ]);
    for (let m of mappers) {
        await file_js_map(m, file_path);
    }
    metadata([]);
}