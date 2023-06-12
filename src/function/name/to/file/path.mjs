import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_add_beginning } from '../../../../list/add/beginning.mjs';
import { list_last_map } from '../../../../list/last/map.mjs';
import { directory_source } from '../../../../directory/source.mjs';
import { string_split } from '../../../../string/split.mjs';
import { function_extension } from '../../../extension.mjs';
import { directory_current } from '../../../../directory/current.mjs';
import { path_join } from '../../../../path/join.mjs';
import { function_name_separator } from '../../separator.mjs';
export function function_name_to_file_path(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let directory_source_result = directory_source();
    let parts = string_split(function_name, function_name_separator());
    list_add_beginning(parts, directory_source_result);
    list_add_beginning(parts, directory_current());
    list_last_map(parts, last => last + function_extension());
    let joined = path_join(parts);
    return joined;
    metadata([]);
}