import { equal } from '../../equal.mjs';
import { list_length } from '../../list/length.mjs';
import { directory_read_paths } from '../read/paths.mjs';
export async function directory_empty_is(directory_path) {
    let file_paths = await directory_read_paths(directory_path);
    let count = list_length(file_paths);
    const is_empty = equal(count, 0);
    return is_empty;
}