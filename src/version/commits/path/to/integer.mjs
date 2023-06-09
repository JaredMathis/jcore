import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { integer_parse } from '../../../../integer/parse.mjs';
import { file_extension_json } from '../../../../file/extension/json.mjs';
import { string_suffix_without } from '../../../../string/suffix/without.mjs';
import { path_parse_base } from '../../../../path/parse/base.mjs';
import { list_map } from '../../../../list/map.mjs';
export function version_commits_path_to_integer(existing_commits) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let names = list_map(existing_commits, path_parse_base);
    let v_4 = function v(c) {
        let v_2 = file_extension_json();
        let v_3 = string_suffix_without(c, v_2);
        return v_3;
    };
    let unparsed = list_map(names, v_4);
    let parsed = list_map(unparsed, integer_parse);
    return parsed;
    metadata([]);
}