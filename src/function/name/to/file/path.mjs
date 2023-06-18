import { string_identifier_parts_to } from '../../../../string/identifier/parts/to.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_add_beginning } from '../../../../list/add/beginning.mjs';
import { list_last_map } from '../../../../list/last/map.mjs';
import { directory_source } from '../../../../directory/source.mjs';
import { function_extension } from '../../../extension.mjs';
import { directory_current } from '../../../../directory/current.mjs';
import { path_join } from '../../../../path/join.mjs';
export function function_name_to_file_path(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let directory_source_result = directory_source();
    let parts = string_identifier_parts_to(function_name);
    list_add_beginning(parts, directory_source_result);
    let v = directory_current();
    list_add_beginning(parts, v);
    list_last_map(parts, function v_2(last) {
        return last + function_extension();
    });
    let joined = path_join(parts);
    return joined;
    metadata([]);
}