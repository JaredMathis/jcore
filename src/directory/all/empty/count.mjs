import { list_filter_async } from '../../../list/filter/async.mjs';
import { directory_current_to_source } from '../../current/to/source.mjs';
import { directory_read_directories } from '../../read/directories.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { directory_empty_is } from '../../empty/is.mjs';
import { list_length } from '../../../list/length.mjs';
export async function directory_all_empty_count() {
    arguments_assert(arguments, []);
    let v = directory_current_to_source();
    let directories = await directory_read_directories(v);
    let empties = await list_filter_async(directories, directory_empty_is);
    let count = list_length(empties);
    return count;
}