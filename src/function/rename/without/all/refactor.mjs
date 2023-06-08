import { list_filter_function_names_starts_with_tests_prefix } from '../../../../list/filter/function/names/starts/with/tests/prefix.mjs';
import { function_name_all } from '../../../name/all.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { file_rename } from '../../../../file/rename.mjs';
import { function_name_to_file_path } from '../../../name/to/file/path.mjs';
import { file_js_all_identifier_exists } from '../../../../file/js/all/identifier/exists.mjs';
import { function_exists } from '../../../exists.mjs';
import { assert } from '../../../../assert.mjs';
export async function function_rename_without_all_refactor(function_name_old, function_name_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    assert(await function_exists(function_name_old));
    assert(!await function_exists(function_name_new));
    assert(!await file_js_all_identifier_exists(function_name_new));


    let all = await function_name_all();
    let tests_old = list_filter_function_names_starts_with_tests_prefix(all, function_name_old);
    let tests_new = list_filter_function_names_starts_with_tests_prefix(all, function_name_new);
    for (let t of tests_new) {
        assert(!await function_exists(t));
    }

    let file_path_old = function_name_to_file_path(function_name_old);
    let file_path_new = function_name_to_file_path(function_name_new);
    await file_rename(file_path_old, file_path_new);
    metadata([]);
}