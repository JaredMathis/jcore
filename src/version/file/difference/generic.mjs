import { version_path_file_directory } from '../../path/file/directory.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { version_property_path } from '../../property/path.mjs';
import { string_difference_get } from '../../../string/difference/get.mjs';
import { version_file_contents } from '../contents.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { path_is } from '../../../path/is.mjs';
import { string_is } from '../../../string/is.mjs';
import { directory_read } from '../../../directory/read.mjs';
import { list_map } from '../../../list/map.mjs';
import { string_prefix_without } from '../../../string/prefix/without.mjs';
import { string_suffix_without } from '../../../string/suffix/without.mjs';
import { file_extension_json } from '../../../file/extension/json.mjs';
import { integer_parse } from '../../../integer/parse.mjs';
import { list_max_generic } from '../../../list/max/generic.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { function_is } from '../../../function/is.mjs';
import { directory_separator } from '../../../directory/separator.mjs';
export async function version_file_difference_generic(repository_name, file_path, contents_new_get) {
    arguments_assert(arguments, [
        string_identifier_is,
        path_is,
        function_is
    ]);
    let contents_old = await version_file_contents(repository_name, file_path);
    let contents_new = await contents_new_get(file_path);
    let hunks_new = string_difference_get(contents_old, contents_new);
    let repository_file_directory_path = version_path_file_directory(repository_name, file_path);
    let paths = await directory_read(repository_file_directory_path);
    let mapped = list_map(paths, file_path => {
        let without_prefix = string_prefix_without(file_path, repository_file_directory_path + directory_separator());
        let without_suffix = string_suffix_without(without_prefix, file_extension_json());
        console.log({without_suffix})
        let version = integer_parse(without_suffix);
        return {
            file_path,
            version
        };
    });
    let max = list_max_generic(mapped, m => object_property_get(m, 'version'));
    let version_path = object_property_get(max, 'file_path');
    let property_version_path = version_property_path();
    return {
        [property_version_path]: version_path,
        [property_hunks]: hunks_new
    };
}