import { log } from '../../log.mjs';
import { function_open_vs_code } from '../open/vs/code.mjs';
import { function_rename_no_open } from './no/open.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_rename_single(function_name_old, function_name_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    await function_rename_no_open(function_name_old, function_name_new);
    await function_open_vs_code(function_name_new);
}