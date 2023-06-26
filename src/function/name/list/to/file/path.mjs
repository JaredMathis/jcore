import { metadata } from '../../../../../metadata.mjs';
import { function_name_to_file_path } from '../../../to/file/path.mjs';
import { list_string_to_dictionary } from '../../../../../list/string/to/dictionary.mjs';
export function function_name_list_to_file_path(result) {
    let v = list_string_to_dictionary(result, function_name_to_file_path);
    return v;
    metadata([]);
}