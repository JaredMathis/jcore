import { file_js_map_args } from '../../map/args.mjs';
import { file_js_all_path } from '../path.mjs';
export async function file_js_all_map_args(mapper) {
    for (let file_path of await file_js_all_path()) {
        await file_js_map_args(file_path, mapper);
    }
}