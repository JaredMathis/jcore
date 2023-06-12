import { function_delete } from '../delete.mjs';
import { file_exists_not_assert } from '../../file/exists/not/assert.mjs';
import { function_copy } from '../copy.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_copy_replace(function_name_to_copy, function_name_of_copy) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    await file_exists_not_assert(file_path);
    function_delete;
    await function_copy(function_name_to_copy, function_name_of_copy);
}