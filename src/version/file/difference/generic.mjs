import { list_max_or_0 } from '../../../list/max/or/0.mjs';
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
export async function version_file_difference_generic(repository_name, file_path, contents_new_get) {
    arguments_assert(arguments, [
        string_identifier_is,
        path_is,
        string_is
    ]);
    let contents_old = await version_file_contents(repository_name, file_path);
    let contents_new = await contents_new_get(file_path);
    let hunks_new = string_difference_get(contents_old, contents_new);
    let property_version_path = version_property_path();
    let repository_file_directory_path = version_path_file_directory(repository_name, file_path);
    let paths = await directory_read(repository_file_directory_path);
    let mapped = list_map(paths, p => string_prefix_without(p, repository_file_directory_path));
    let mapped2 = list_map(mapped, m => string_suffix_without(m, file_extension_json()));
    let mapped3 = list_map(mapped2, integer_parse);
    list_max_or_0;
    return {
        [property_version_path]: version_path,
        [property_hunks]: hunks_new
    };
}