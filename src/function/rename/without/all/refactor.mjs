import { string_starts_with } from '../../../../string/starts/with.mjs';
import { list_filter } from '../../../../list/filter.mjs';
import { function_tests_prefix_get } from '../../../tests/prefix/get.mjs';
import { function_rename_file_path } from '../../file/path.mjs';
import { function_name_all } from '../../../name/all.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { file_js_all_identifier_exists } from '../../../../file/js/all/identifier/exists.mjs';
import { function_exists } from '../../../exists.mjs';
import { assert } from '../../../../assert.mjs';
import { list_map } from '../../../../list/map.mjs';
import { string_prefix_replace } from '../../../../string/prefix/replace.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
export async function function_rename_without_all_refactor(function_name_old, function_name_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    assert(await function_exists(function_name_old));
    assert(!await function_exists(function_name_new));
    assert(!await file_js_all_identifier_exists(function_name_new));
    let all = await function_name_all();
    let tests_prefix_old = function_tests_prefix_get(function_name_old);
    let tests_old = list_filter(all, a => string_starts_with(a, tests_prefix_old));
    let tests_prefix_new = function_tests_prefix_get(function_name_new);
    let tests_renames = list_map(tests_old, t => {
        return {
            from: t,
            to: string_prefix_replace(t, tests_prefix_old, tests_prefix_new)
        };
    });
    for (let r of tests_renames) {
        let to = object_property_get(r, 'to');
        assert(!await function_exists(to));
    }
    await function_rename_file_path(function_name_old, function_name_new);
    metadata([]);
}