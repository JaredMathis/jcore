import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { file_delete } from '../file/delete.mjs';
import { function_exists } from './exists.mjs';
import { assert } from '../assert.mjs';
import { function_name_to_path } from './name/to/path.mjs';
export async function function_delete(function_name) {
    arguments_assert(arguments, [tautology]);
    assert(await function_exists(function_name));
    let file_path = function_name_to_path(function_name);
    await file_delete(file_path);
    metadata([]);
}