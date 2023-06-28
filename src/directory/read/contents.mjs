import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { file_read } from '../../file/read.mjs';
import { list_map_async } from '../../list/map/async.mjs';
import { directory_property_file_path } from '../property/file/path.mjs';
import { directory_property_contents } from '../property/contents.mjs';
import { directory_read } from '../read.mjs';
export async function directory_read_contents(repository_directory) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let file_paths = await directory_read(repository_directory);
    let property_contents = directory_property_contents();
    let property_file_path = directory_property_file_path();
    let v_2 = async function v(file_path) {
        let contents = await file_read(file_path);
        return {
            [property_contents]: contents,
            [property_file_path]: file_path
        };
    };
    let mapped = await list_map_async(file_paths, v_2);
    return mapped;
    metadata([]);
}