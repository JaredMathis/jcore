import { git_ignore_filter } from '../../git/ignore/filter.mjs';
import { path_parse_base } from '../../path/parse/base.mjs';
import { add_1 } from '../../add/1.mjs';
import { list_max } from '../../list/max.mjs';
import { integer_parse } from '../../integer/parse.mjs';
import { string_suffix_without } from '../../string/suffix/without.mjs';
import { list_map } from '../../list/map.mjs';
import { file_json_overwrite } from '../../file/json/overwrite.mjs';
import { log } from '../../log.mjs';
import { version_path_sub_get } from '../path/sub/get.mjs';
import { version_property_hunks } from '../property/hunks.mjs';
import { file_delete } from '../../file/delete.mjs';
import { object_is } from '../../object/is.mjs';
import { list_add } from '../../list/add.mjs';
import { guid_generate } from '../../guid/generate.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { version_file_difference } from '../file/difference.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { version_property_path } from '../property/path.mjs';
import { assert } from '../../assert.mjs';
import { file_exists } from '../../file/exists.mjs';
import { list_length_is_0 } from '../../list/length/is/0.mjs';
import { directory_read } from '../../directory/read.mjs';
import { path_join } from '../../path/join.mjs';
import { file_extension_json } from '../../file/extension/json.mjs';
import { directory_exists_ensure } from '../../directory/exists/ensure.mjs';
import { list_is } from '../../list/is.mjs';
export async function version_commit_files(repository_name, file_paths, data) {
    arguments_assert(arguments, [
        string_identifier_is,
        list_is,
        object_is
    ]);
    let lambda = version_file_difference;
    let filtered = await git_ignore_filter(file_paths);
    let property_hunks = version_property_hunks();
    let property_file_path = 'file_path';
    let property_contents = 'contents';
    let writes = [];
    let parts = [];
    for (let file_path of filtered) {
        let difference = await lambda(repository_name, file_path);
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
    }
    if (list_length_is_0(writes)) {
        console.log('nothing to commit');
        return;
    }
    let when = new Date().toISOString();
    let commit_id = guid_generate();
    let commit = {
        commit_id,
        when,
        parts,
        data
    };
    let repository_commits_directory_name = 'commits';
    let repository_sub_path = version_path_sub_get(repository_name, repository_commits_directory_name);
    await directory_exists_ensure(repository_sub_path);
    let existing_commits = await directory_read(repository_sub_path);
    let version = 1;
    if (!list_length_is_0(existing_commits)) {
        let names = list_map(existing_commits, path_parse_base);
        let unparsed = list_map(names, c => string_suffix_without(c, file_extension_json()));
        let parsed = list_map(unparsed, integer_parse);
        let max = list_max(parsed);
        version = add_1(max);
    }
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
            await file_json_overwrite(file_path, contents);
        }
    } catch (e) {
        for (let w of writes) {
            const file_path = object_property_get(w, property_file_path);
            if (await file_exists(file_path)) {
                file_delete(file_path);
            }
        }
        throw e;
    }
}