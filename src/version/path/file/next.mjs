import { metadata } from '../../../metadata.mjs';
import { string_combine } from '../../../string/combine.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { version_path_file_get } from './get.mjs';
import { add_1 } from '../../../add/1.mjs';
import { list_max_or_0 } from '../../../list/max/or/0.mjs';
import { integer_parse } from '../../../integer/parse.mjs';
import { file_extension_json } from '../../../file/extension/json.mjs';
import { string_suffix_without } from '../../../string/suffix/without.mjs';
import { directory_separator } from '../../../directory/separator.mjs';
import { string_prefix_without } from '../../../string/prefix/without.mjs';
import { list_map } from '../../../list/map.mjs';
import { directory_read } from '../../../directory/read.mjs';
import { path_exists } from '../../../path/exists.mjs';
import { version_path_file_directory } from './directory.mjs';
export async function version_path_file_next(repository_name, file_path) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let repository_file_directory_path = version_path_file_directory(repository_name, file_path);
    let mapped;
    let v_3 = await path_exists(repository_file_directory_path);
    if (v_3) {
        let paths = await directory_read(repository_file_directory_path);
        mapped = list_map(paths, function v_2(file_path) {
            let without_prefix = string_prefix_without(file_path, string_combine(repository_file_directory_path, directory_separator()));
            let v = file_extension_json();
            let without_suffix = string_suffix_without(without_prefix, v);
            let version = integer_parse(without_suffix);
            return version;
        });
    } else {
        mapped = [];
    }
    let max = list_max_or_0(mapped);
    let version = add_1(max);
    let version_path = version_path_file_get(repository_name, file_path, version);
    return version_path;
    metadata([]);
}