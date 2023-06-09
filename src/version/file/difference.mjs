import { version_file_contents } from './contents.mjs';
import { version_property_path } from '../property/path.mjs';
import { file_read } from '../../file/read.mjs';
import { path_is } from '../../path/is.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_difference_get } from '../../string/difference/get.mjs';
export async function version_file_difference(repository_name, file_path) {
    arguments_assert(arguments, [
        string_identifier_is,
        path_is
    ]);
    let lambda = file_read;
    let contents_old = await version_file_contents(repository_name, file_path);
    let contents_new = await file_read(file_path);
    let hunks_new = string_difference_get(contents_old, contents_new);
    let property_version_path = version_property_path();
    return {
        [property_version_path]: version_path,
        [property_hunks]: hunks_new
    };
}