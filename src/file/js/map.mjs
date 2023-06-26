import { js_identifier_is } from '../../js/identifier/is.mjs';
import { path_is } from '../../path/is.mjs';
import { file_js_map_with_args } from './map/with/args.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export async function file_js_map(function_name_mapper, file_path) {
    arguments_assert(arguments, [
        js_identifier_is,
        path_is
    ]);
    let v = {};
    await file_js_map_with_args(file_path, function_name_mapper, v);
    metadata([]);
}