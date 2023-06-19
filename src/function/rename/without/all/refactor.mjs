import { equal_not } from '../../../../equal/not.mjs';
import { not } from '../../../../not.mjs';
import { list_string_to_dictionary } from '../../../../list/string/to/dictionary.mjs';
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
import { string_prefix_replace } from '../../../../string/prefix/replace.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { object_keys } from '../../../../object/keys.mjs';
import { object_properties } from '../../../../object/properties.mjs';
export async function function_rename_without_all_refactor(function_name_old, function_name_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let v = equal_not(function_name_old, function_name_new);
    assert(v);
    let v_2 = await function_exists(function_name_old);
    assert(v_2);
    let v_7 = await function_exists(function_name_new);
    let v_3 = not(v_7);
    assert(v_3);
    let v_8 = await file_js_all_identifier_exists(function_name_new);
    let v_4 = not(v_8);
    assert(v_4);
    let all = await function_name_all();
    let tests_prefix_old = function_tests_prefix_get(function_name_old);
    let tests_old = list_filter(all, function v_10(a) {
        let v_12 = string_starts_with(a, tests_prefix_old);
        return v_12;
    });
    let tests_prefix_new = function_tests_prefix_get(function_name_new);
    let tests_renames = list_string_to_dictionary(tests_old, function v_11(t) {
        let v_13 = string_prefix_replace(t, tests_prefix_old, tests_prefix_new);
        return v_13;
    });
    for (let to of object_properties(tests_renames)) {
        let v_9 = await function_exists(to);
        let v_5 = not(v_9);
        assert(v_5);
    }
    await function_rename_file_path(function_name_old, function_name_new);
    for (let from of object_keys(tests_renames)) {
        let to = object_property_get(tests_renames, from);
        await function_rename_file_path(from, to);
    }
    return tests_renames;
    metadata([]);
}