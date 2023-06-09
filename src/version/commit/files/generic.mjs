import { version_write_all } from '../../write/all.mjs';
import { version_property_contents } from '../../property/contents.mjs';
import { version_property_file_path } from '../../property/file/path.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { path_join } from '../../../path/join.mjs';
import { add_1 } from '../../../add/1.mjs';
import { list_max } from '../../../list/max.mjs';
import { integer_parse } from '../../../integer/parse.mjs';
import { file_extension_json } from '../../../file/extension/json.mjs';
import { string_suffix_without } from '../../../string/suffix/without.mjs';
import { path_parse_base } from '../../../path/parse/base.mjs';
import { list_map } from '../../../list/map.mjs';
import { directory_read } from '../../../directory/read.mjs';
import { directory_exists_ensure } from '../../../directory/exists/ensure.mjs';
import { version_path_sub_get } from '../../path/sub/get.mjs';
import { list_add } from '../../../list/add.mjs';
import { guid_generate } from '../../../guid/generate.mjs';
import { version_property_path } from '../../property/path.mjs';
import { list_length_is_0 } from '../../../list/length/is/0.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { version_property_hunks } from '../../property/hunks.mjs';
import { git_ignore_filter } from '../../../git/ignore/filter.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { list_is } from '../../../list/is.mjs';
import { object_is } from '../../../object/is.mjs';
import { function_is } from '../../../function/is.mjs';
export async function version_commit_files_generic(repository_name, file_paths, commit_data, difference_get) {
    arguments_assert(arguments, [
        string_identifier_is,
        list_is,
        object_is,
        function_is
    ]);
    let filtered = await git_ignore_filter(file_paths);
    let property_hunks = version_property_hunks();
    let property_file_path = version_property_file_path();
    let property_contents = version_property_contents();
    let writes = [];
    let parts = [];
    for (let file_path of filtered) {
        let difference = await difference_get(repository_name, file_path);
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
    if (!list_length_is_0(writes)) {
        let when = new Date().toISOString();
        let commit_id = guid_generate();
        let commit = {
            commit_id,
            when,
            parts,
            data: commit_data
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
    }
    return writes;
}