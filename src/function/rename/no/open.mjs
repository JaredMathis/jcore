import { function_rename_identifiers_and_after } from '../identifiers/and/after.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_rename_without_all_refactor } from '../without/all/refactor.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_rename_no_open(function_name_old, function_name_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    await function_rename_without_all_refactor(function_name_old, function_name_new);
    await function_rename_identifiers_and_after(function_name_old, function_name_new);
    metadata([]);
}