import { equal } from '../../../../../equal.mjs';
import { list_is } from '../../../../../list/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { function_extension } from '../../../../../function/extension.mjs';
import { string_suffix_without } from '../../../../../string/suffix/without.mjs';
import { list_join } from '../../../../../list/join.mjs';
import { function_name_separator } from '../../../../../function/name/separator.mjs';
import { list_skip_first } from '../../../../../list/skip/first.mjs';
import { list_first } from '../../../../../list/first.mjs';
import { assert } from '../../../../../assert.mjs';
import { directory_source } from '../../../../../directory/source.mjs';
import { file_path_split } from '../../../../path/split.mjs';
import { list_map } from '../../../../../list/map.mjs';
export function file_js_path_all_to_name(file_js_paths) {
    arguments_assert(arguments, [list_is]);
    let v_11 = function v_2(a) {
        let v_6 = file_path_split(a);
        return v_6;
    };
    let mapped = list_map(file_js_paths, v_11);
    let directory_source_result = directory_source();
    let v_12 = function v_3(a) {
        let v_15 = equal(list_first(a), directory_source_result);
        assert(v_15);
        let v = list_skip_first(a);
        return v;
    };
    let mapped2 = list_map(mapped, v_12);
    let v_13 = function v_4(a) {
        let v_7 = function_name_separator();
        let v_8 = list_join(a, v_7);
        return v_8;
    };
    let mapped3 = list_map(mapped2, v_13);
    let v_14 = function v_5(a) {
        let v_9 = function_extension();
        let v_10 = string_suffix_without(a, v_9);
        return v_10;
    };
    let mapped4 = list_map(mapped3, v_14);
    return mapped4;
    metadata([]);
}