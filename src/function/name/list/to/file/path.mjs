import { function_name_to_file_path } from '../../../to/file/path.mjs';
import { list_to_dictionary } from '../../../../../list/to/dictionary.mjs';
export function function_name_list_to_file_path(result) {
    return list_to_dictionary(result, function_name_to_file_path);
}