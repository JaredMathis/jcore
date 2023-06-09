import { version_path_file_directory } from '../../path/file/directory.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { version_property_path } from '../../property/path.mjs';
import { string_difference_get } from '../../../string/difference/get.mjs';
import { version_file_contents } from '../contents.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { path_is } from '../../../path/is.mjs';
import { string_is } from '../../../string/is.mjs';
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
    version_path_file_directory;
    return {
        [property_version_path]: version_path,
        [property_hunks]: hunks_new
    };
}