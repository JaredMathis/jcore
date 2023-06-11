import { integer_parse } from '../../integer/parse.mjs';
import { file_extension_json } from '../../file/extension/json.mjs';
import { string_suffix_without } from '../../string/suffix/without.mjs';
import { path_parse_base } from '../../path/parse/base.mjs';
import { list_map } from '../../list/map.mjs';
import { list_length_is_0 } from '../../list/length/is/0.mjs';
import { directory_read } from '../../directory/read.mjs';
import { directory_exists_ensure } from '../../directory/exists/ensure.mjs';
import { version_path_commits_get } from '../path/commits/get.mjs';
export async function version_commits_get(repository_name) {
    let repository_sub_path = version_path_commits_get(repository_name);
    await directory_exists_ensure(repository_sub_path);
    let existing_commits = await directory_read(repository_sub_path);
    let parsed;
    if (list_length_is_0(existing_commits)) {
        parsed = [];
    } else {
        let names = list_map(existing_commits, path_parse_base);
        let unparsed = list_map(names, c => string_suffix_without(c, file_extension_json()));
        parsed = list_map(unparsed, integer_parse);
    }
    return parsed;
}