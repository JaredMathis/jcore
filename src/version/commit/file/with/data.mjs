import { log } from '../../../../log.mjs';
import { version_path_sub_get } from '../../../path/sub/get.mjs';
import { version_property_hunks } from '../../../property/hunks.mjs';
import { file_delete } from '../../../../file/delete.mjs';
import { object_is } from '../../../../object/is.mjs';
import { list_add } from '../../../../list/add.mjs';
import { guid_generate } from '../../../../guid/generate.mjs';
import { path_is } from '../../../../path/is.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { version_file_difference } from '../../../file/difference.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { version_property_path } from '../../../property/path.mjs';
import { assert } from '../../../../assert.mjs';
import { file_exists } from '../../../../file/exists.mjs';
import { list_length_is_0 } from '../../../../list/length/is/0.mjs';
import { directory_read } from '../../../../directory/read.mjs';
import { path_join } from '../../../../path/join.mjs';
import { file_extension_json } from '../../../../file/extension/json.mjs';
export async function version_commit_file_with_data(repository_name, file_path, data) {
    arguments_assert(arguments, [
        string_identifier_is,
        path_is,
        object_is
    ]);
    let property_hunks = version_property_hunks();
    let property_file_path = 'file_path';
    let property_contents = 'contents';
    let writes = [];
    let parts = [];
    let difference = await version_file_difference(repository_name, file_path);
    let hunks = object_property_get(difference, property_hunks);
    if (!list_length_is_0(hunks)) {
        let difference_path = object_property_get(difference, version_property_path());
        let part_id = guid_generate();
        list_add(parts, part_id);
        let difference_write = {
            [property_file_path]: difference_path,
            [property_contents]: {
                part_id,
                hunks
            }
        };
        list_add(writes, difference_write);
    }
    if (list_length_is_0(writes)) {
        return;
    }
    let when = new Date().getTime();
    let commit_id = guid_generate();
    let commit = {
        commit_id,
        when,
        parts,
        data
    };
    let repository_commits_directory_name = 'commits';
    let repository_sub_path = version_path_sub_get(repository_name, repository_commits_directory_name);
    let existing_commits = await directory_read(repository_sub_path);
    console.log({ existing_commits });
    assert(list_length_is_0(existing_commits));
    let version = 1;
    let commit_path = path_join([
        repository_sub_path,
        `${ version }${ file_extension_json() }`
    ]);
    let commit_write = {
        [property_file_path]: commit_path,
        [property_contents]: commit
    };
    list_add(writes, commit_write);
    for (let w of writes) {
        const file_path = object_property_get(w, property_file_path);
        assert(!await file_exists(file_path));
    }
    try {
        for (let w of writes) {
            const file_path = object_property_get(w, property_file_path);
            const contents = object_property_get(w, property_contents);
            await json_overwrite(file_path, contents);
        }
    } catch (e) {
        for (let w of writes) {
            const file_path = object_property_get(w, property_file_path);
            if (await file_exists(file_path)) {
                file_delete(file_path);
            }
        }
    }
}