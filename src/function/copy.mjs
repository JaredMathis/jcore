import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { file_open_vs_code } from '../file/open/vs/code.mjs';
import { function_copy_no_open } from './copy/no/open.mjs';
export async function function_copy(function_name_to_copy, function_name_of_copy) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    await function_copy_no_open(function_name_to_copy, function_name_of_copy);
    await file_open_vs_code(function_name_of_copy);
}