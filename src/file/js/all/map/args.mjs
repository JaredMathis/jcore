import { function_is } from '../../../../function/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { file_js_map_args } from '../../map/args.mjs';
import { file_js_all_path } from '../path.mjs';
export async function file_js_all_map_args(mapper) {
    arguments_assert(arguments, [function_is]);
    for (let file_path of await file_js_all_path()) {
        console.log({file_path})
        await file_js_map_args(file_path, mapper);
    }
    metadata([]);
}