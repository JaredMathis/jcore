import { boolean_value_true } from '../../boolean/value/true.mjs';
import { metadata } from '../../metadata.mjs';
import { integer_value_1 } from '../../integer/value/1.mjs';
import { not } from '../../not.mjs';
import { string_difference_apply } from '../../string/difference/apply.mjs';
import { string_empty } from '../../string/empty.mjs';
import { list_add } from '../../list/add.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { file_json_read } from '../../file/json/read.mjs';
import { file_exists } from '../../file/exists.mjs';
import { version_path_file_get } from '../path/file/get.mjs';
import { version_property_hunks } from '../property/hunks.mjs';
import { git_ignore_add_if_not_exists } from '../../git/ignore/add/if/not/exists.mjs';
import { version_path_root } from '../path/root.mjs';
import { path_is } from '../../path/is.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function version_file_contents(repository_name, file_path) {
    arguments_assert(arguments, [
        js_identifier_is,
        path_is
    ]);
    let gitignore_line_to_add = version_path_root();
    await git_ignore_add_if_not_exists(gitignore_line_to_add);
    let list_hunks = [];
    let property_hunks = version_property_hunks();
    let version = integer_value_1();
    let version_path;
    while (boolean_value_true()) {
        version_path = version_path_file_get(repository_name, file_path, version);
        let v_2 = await file_exists(version_path);
        let v = not(v_2);
        if (v) {
            break;
        }
        let before_object = await file_json_read(version_path);
        let hunks = object_property_get(before_object, property_hunks);
        list_add(list_hunks, hunks);
        version++;
    }
    let contents_old = string_empty();
    for (let hunks of list_hunks) {
        contents_old = string_difference_apply(contents_old, hunks);
    }
    return contents_old;
    metadata([]);
}