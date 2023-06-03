import { path_is } from '../../../../../path/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { file_js_parse } from '../../../parse.mjs';
export async function file_js_path_to_mapper_args(file_path) {
    arguments_assert(arguments, [path_is]);
    let parsed = await file_js_parse(file_path);
    let args = {
        parsed,
        file_path
    };
    return args;
    metadata([]);
}