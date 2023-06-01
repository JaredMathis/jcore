import { tautology } from '../../../../tautology.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { file_js_map_args } from '../../map/args.mjs';
import { file_js_all_path } from '../path.mjs';
export async function file_js_all_map_args(mapper) {
    arguments_assert(arguments, [tautology]);
    for (let file_path of await file_js_all_path()) {
        await file_js_map_args(file_path, mapper);
    }
    metadata([]);
}