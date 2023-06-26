import { metadata } from '../../metadata.mjs';
import { file_exists_not_assert } from '../../file/exists/not/assert.mjs';
import { function_name_to_file_path } from '../name/to/file/path.mjs';
export async function function_copy_before(function_name_of_copy) {
    let function_path = function_name_to_file_path(function_name_of_copy);
    await file_exists_not_assert(function_path);
    metadata([]);
}