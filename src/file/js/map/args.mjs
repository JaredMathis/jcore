import { metadata } from '../../../metadata.mjs';
import { file_js_overwrite } from '../overwrite.mjs';
import { file_js_path_to_args } from '../path/to/args.mjs';
export async function file_js_map_args(file_path, mapper) {
    let args = await file_js_path_to_args(file_path);
    await mapper(args);
    await file_js_overwrite(args);
    metadata([]);
}