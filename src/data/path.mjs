import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { file_name_json } from '../file/name/json.mjs';
export function data_path() {
    arguments_assert(arguments, []);
    return `./${ file_name_json(`data`) }`;
    metadata([]);
}