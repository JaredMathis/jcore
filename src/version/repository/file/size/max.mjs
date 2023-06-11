import { list_map } from '../../../../list/map.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_max } from '../../../../list/max.mjs';
import { string_byte_size } from '../../../../string/byte/size.mjs';
import { file_read } from '../../../../file/read.mjs';
import { list_map_async } from '../../../../list/map/async.mjs';
import { directory_read } from '../../../../directory/read.mjs';
import { version_path_repository } from '../../../path/repository.mjs';
export async function version_repository_file_size_max(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let repository_directory = version_path_repository(repository_name);
    let file_paths = await directory_read(repository_directory);
    let list_contents = await list_map_async(file_paths, async file_path => {
        let contents = await file_read(file_path);
        return contents;
    });
    let file_sizes = list_map(list_contents, string_byte_size);
    let file_size_max = list_max(file_sizes);
    return file_size_max;
}