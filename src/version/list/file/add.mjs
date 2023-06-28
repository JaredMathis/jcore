import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_add } from '../../../list/add.mjs';
import { version_property_contents } from '../../property/contents.mjs';
import { version_property_file_path } from '../../property/file/path.mjs';
export function version_list_file_add(list, file_path, contents) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let property_file_path = version_property_file_path();
    let property_contents = version_property_contents();
    let commit_write = {
        [property_file_path]: file_path,
        [property_contents]: contents
    };
    list_add(list, commit_write);
    metadata([]);
}