import { list_add } from '../../list/add.mjs';
import { guid_generate } from '../../guid/generate.mjs';
import { path_is } from '../../path/is.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { version_file_difference } from './difference.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { version_property_path } from '../property/path.mjs';
export async function version_file_commit(repository_name, file_path) {
    arguments_assert(arguments, [
        string_identifier_is,
        path_is
    ]);
    let when = new Date().getTime();
    let commit_id = guid_generate();
    let parts = [];
    let difference = await version_file_difference(repository_name, file_path);
    let difference_path = object_property_get(difference, version_property_path());
    let part_id = guid_generate();
    let difference_write = {
        file_path: difference_path,
        contents: {
            part_id,
            hunks,
        }
    };
    list_add(parts, part_id);
    let commit = {
        commit_id,
        when,
        parts
    };
}