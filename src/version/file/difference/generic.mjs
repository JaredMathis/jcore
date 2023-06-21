import { version_path_file_next } from '../../path/file/next.mjs';
import { string_difference_get } from '../../../string/difference/get.mjs';
import { version_property_hunks } from '../../property/hunks.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { version_property_path } from '../../property/path.mjs';
import { version_file_contents } from '../contents.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { path_is } from '../../../path/is.mjs';
import { function_is } from '../../../function/is.mjs';
export async function version_file_difference_generic(repository_name, file_path, contents_new_get) {
    arguments_assert(arguments, [
        js_identifier_is,
        path_is,
        function_is
    ]);
    let contents_old = await version_file_contents(repository_name, file_path);
    let contents_new = await contents_new_get(file_path);
    let hunks_new = string_difference_get(contents_old, contents_new);
    let version_path = await version_path_file_next(repository_name, file_path);
    let property_version_path = version_property_path();
    let property_hunks = version_property_hunks();
    return {
        [property_version_path]: version_path,
        [property_hunks]: hunks_new
    };
}