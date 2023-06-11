import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { file_name_json } from '../file/name/json.mjs';
import { directory_current } from '../directory/current.mjs';
export function data_path() {
    arguments_assert(arguments, []);
    return `${ directory_current() }/${ file_name_json(`data`) }`;
    metadata([]);
}