import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { file_json_overwrite } from '../file/json/overwrite.mjs';
import { data_path } from './path.mjs';
export async function data_overwrite(data) {
    arguments_assert(arguments, [object_is]);
    let file_path = data_path();
    await file_json_overwrite(data, file_path);
    metadata([]);
}