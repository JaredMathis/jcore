import { js_identifier_parts_to } from '../../../../js/identifier/parts/to.mjs';
import { js_identifier_is } from '../../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_add_beginning } from '../../../../list/add/beginning.mjs';
import { list_last_map } from '../../../../list/last/map.mjs';
import { directory_source } from '../../../../directory/source.mjs';
import { function_extension } from '../../../extension.mjs';
import { directory_current } from '../../../../directory/current.mjs';
import { path_join } from '../../../../path/join.mjs';
import { string_combine } from '../../../../string/combine.mjs';
export function function_name_to_file_path(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let directory_source_result = directory_source();
    let parts = js_identifier_parts_to(function_name);
    list_add_beginning(parts, directory_source_result);
    let v = directory_current();
    list_add_beginning(parts, v);
    let v_3 = function v_2(last) {
        let v_4 = function_extension();
        let v_5 = string_combine(last, v_4);
        return v_5;
    };
    list_last_map(parts, v_3);
    let joined = path_join(parts);
    return joined;
    metadata([]);
}