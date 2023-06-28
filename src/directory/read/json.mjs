import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { directory_property_json } from '../property/json.mjs';
import { object_property_initialize } from '../../object/property/initialize.mjs';
import { json_from } from '../../json/from.mjs';
import { directory_property_contents } from '../property/contents.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { directory_read_contents } from './contents.mjs';
export async function directory_read_json(repository_files_path) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let files_contents = await directory_read_contents(repository_files_path);
    for (let f of files_contents) {
        let v = directory_property_contents();
        let contents = object_property_get(f, v);
        let json = json_from(contents);
        let v_2 = directory_property_json();
        object_property_initialize(f, v_2, json);
    }
    return files_contents;
    metadata([]);
}