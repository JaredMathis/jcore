import { file_extension_json } from '../file/extension/json.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function data_path() {
    arguments_assert(arguments, []);
    let extension = file_extension_json();
    return `./data${ extension }`;
    metadata([]);
}