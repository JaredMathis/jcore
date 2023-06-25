import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { file_name_json } from '../file/name/json.mjs';
import { directory_current } from '../directory/current.mjs';
export function data_path() {
    arguments_assert(arguments, []);
    let v = directory_current();
    let v_2 = `data`;
    let v_3 = file_name_json(v_2);
    return `${ v }/${ v_3 }`;
    metadata([]);
}