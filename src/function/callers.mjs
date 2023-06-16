import { list_to_dictionary } from '../list/to/dictionary.mjs';
import { function_dependencies_non_recursive } from './dependencies/non/recursive.mjs';
import { list_any } from '../list/any.mjs';
import { function_name_all } from './name/all.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { list_add } from '../list/add.mjs';
import { function_name_to_file_path } from './name/to/file/path.mjs';
export async function function_callers(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let result = [];
    let candidates = await function_name_all();
    for (let c of candidates) {
        let dependencies = await function_dependencies_non_recursive(c);
        if (list_any(dependencies, d => object_property_get(d, 'function_name') === function_name)) {
            list_add(result, c);
        }
    }
    return list_to_dictionary(result, function_name_to_file_path);
}