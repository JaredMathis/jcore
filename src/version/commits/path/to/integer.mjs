import { integer_parse } from '../../../../integer/parse.mjs';
import { file_extension_json } from '../../../../file/extension/json.mjs';
import { string_suffix_without } from '../../../../string/suffix/without.mjs';
import { path_parse_base } from '../../../../path/parse/base.mjs';
import { list_map } from '../../../../list/map.mjs';
export function version_commits_path_to_integer(existing_commits) {
    let names = list_map(existing_commits, path_parse_base);
    let unparsed = list_map(names, function v(c) {
        return string_suffix_without(c, file_extension_json());
    });
    let parsed = list_map(unparsed, integer_parse);
    return parsed;
}