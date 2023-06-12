import { file_js_parse_with_file_path } from '../../../parse/with/file/path.mjs';
import { path_is } from '../../../../../path/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { object_property_initialize } from '../../../../../object/property/initialize.mjs';
export async function file_js_path_to_mapper_args(file_path) {
    arguments_assert(arguments, [path_is]);
    let args = await file_js_parse_with_file_path(file_path);
    object_property_initialize(args, 'file_path', file_path);
    return args;
    metadata([]);
}