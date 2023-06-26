import { metadata } from '../../../../metadata.mjs';
import { directory_read_contents } from '../../../../directory/read/contents.mjs';
import { directory_property_contents } from '../../../../directory/property/contents.mjs';
import { list_map_property } from '../../../../list/map/property.mjs';
import { list_map } from '../../../../list/map.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_max } from '../../../../list/max.mjs';
import { string_byte_size } from '../../../../string/byte/size.mjs';
import { version_path_repository } from '../../../path/repository.mjs';
export async function version_repository_file_size_max(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let repository_directory = version_path_repository(repository_name);
    let mapped = await directory_read_contents(repository_directory);
    let property_contents = directory_property_contents();
    let list_contents = list_map_property(mapped, property_contents);
    let file_sizes = list_map(list_contents, string_byte_size);
    let file_size_max = list_max(file_sizes);
    return file_size_max;
    metadata([]);
}