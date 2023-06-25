import { not } from '../../../not.mjs';
import { date_now_iso } from '../../../date/now/iso.mjs';
import { version_path_commit } from '../../path/commit.mjs';
import { version_property_commit_id } from '../../property/commit/id.mjs';
import { version_list_file_add } from '../../list/file/add.mjs';
import { version_property_part_id } from '../../property/part/id.mjs';
import { version_property_parts } from '../../property/parts.mjs';
import { version_commits_get } from '../../commits/get.mjs';
import { version_property_contents } from '../../property/contents.mjs';
import { version_property_file_path } from '../../property/file/path.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { add_1 } from '../../../add/1.mjs';
import { list_add } from '../../../list/add.mjs';
import { guid_generate } from '../../../guid/generate.mjs';
import { version_property_path } from '../../property/path.mjs';
import { list_empty } from '../../../list/empty.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { version_property_hunks } from '../../property/hunks.mjs';
import { git_ignore_filter } from '../../../git/ignore/filter.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { list_is } from '../../../list/is.mjs';
import { object_is } from '../../../object/is.mjs';
import { function_is } from '../../../function/is.mjs';
import { list_max_or_0 } from '../../../list/max/or/0.mjs';
export async function version_commit_files_generic(repository_name, file_paths, commit_data, difference_get) {
    arguments_assert(arguments, [
        js_identifier_is,
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
        let v_2 = not(list_empty(hunks));
        if (v_2) {
            let v = version_property_path();
            let difference_path = object_property_get(difference, v);
            let part_id = guid_generate();
            list_add(parts, part_id);
            let difference_write = {
                [property_file_path]: difference_path,
                [property_contents]: {
                    [version_property_file_path()]: file_path,
                    [version_property_part_id()]: part_id,
                    hunks
                }
            };
            list_add(writes, difference_write);
        }
    }
    let v_3 = not(list_empty(writes));
    if (v_3) {
        let when = date_now_iso();
        let commit_id = guid_generate();
        let commit = {
            [version_property_commit_id()]: commit_id,
            when,
            [version_property_parts()]: parts,
            data: commit_data
        };
        let parsed = await version_commits_get(repository_name);
        let max = list_max_or_0(parsed);
        let commit_version = add_1(max);
        let commit_path = version_path_commit(repository_name, commit_version);
        version_list_file_add(writes, commit_path, commit);
    }
    return writes;
}