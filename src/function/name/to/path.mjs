import { array_add_beginning } from '../../../array/add/beginning.mjs';
import { array_last_map } from '../../../array/last/map.mjs';
import { directory_source } from '../../../directory/source.mjs';
import { string_split } from '../../../string/split.mjs';
import { function_extension } from '../../extension.mjs';
import { directory_current } from '../../../directory/current.mjs';
import { path_join } from '../../../path/join.mjs';
export function function_name_to_path(function_name) {
    let directory_source_result = directory_source();
    let split = string_split(function_name, '_');
    array_add_beginning(split, directory_source_result);
    array_add_beginning(split, directory_current());
    array_last_map(split, last => last + function_extension());
    let joined = path_join(split);
    return joined;
}