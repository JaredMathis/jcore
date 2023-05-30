import { function_exists } from './exists.mjs';
import { assert } from '../assert.mjs';
import { function_name_to_path } from './name/to/path.mjs';
export async function function_delete(function_name) {
    assert(await function_exists(function_name));
    let file_path = function_name_to_path(function_name);
}