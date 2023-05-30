import { function_extension } from '../../../../../function/extension.mjs';
import { string_without_suffix } from '../../../../../string/without/suffix.mjs';
import { list_join } from '../../../../../list/join.mjs';
import { function_name_separator } from '../../../../../function/name/separator.mjs';
import { list_skip_first } from '../../../../../list/skip/first.mjs';
import { list_first } from '../../../../../list/first.mjs';
import { assert } from '../../../../../assert.mjs';
import { directory_source } from '../../../../../directory/source.mjs';
import { file_path_split } from '../../../../path/split.mjs';
import { list_map } from '../../../../../list/map.mjs';
export function file_js_path_all_to_name(file_js_paths) {
    let mapped = list_map(file_js_paths, a => file_path_split(a));
    let directory_source_result = directory_source();
    let mapped2 = list_map(mapped, a => {
        assert(list_first(a) === directory_source_result);
        return list_skip_first(a);
    });
    let fns = function_name_separator();
    let mapped3 = list_map(mapped2, a => list_join(a, fns));
    let mapped4 = list_map(mapped3, a => string_without_suffix(a, function_extension()));
    return mapped4;
}