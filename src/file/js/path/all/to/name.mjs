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
    let mapped = list_map(file_js_paths, function v_2(a) {
        return file_path_split(a);
    });
    let directory_source_result = directory_source();
    let mapped2 = list_map(mapped, function v_3(a) {
        assert(list_first(a) === directory_source_result);
        let v = list_skip_first(a);
        return v;
    });
    let mapped3 = list_map(mapped2, function v_4(a) {
        return list_join(a, function_name_separator());
    });
    let mapped4 = list_map(mapped3, function v_5(a) {
        return string_suffix_without(a, function_extension());
    });
    return mapped4;
    metadata([]);
}