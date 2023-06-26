import { file_js_parse_with_unparsed } from '../../../parse/with/unparsed.mjs';
import { path_is } from '../../../../../path/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { object_property_initialize } from '../../../../../object/property/initialize.mjs';
export async function file_js_path_to_mapper_args(file_path) {
    arguments_assert(arguments, [path_is]);
    let args = await file_js_parse_with_unparsed(file_path);
    let v = 'file_path';
    object_property_initialize(args, v, file_path);
    return args;
    metadata([]);
}