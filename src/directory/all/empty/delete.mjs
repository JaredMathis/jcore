import { directory_current_to_source } from '../../current/to/source.mjs';
import { directory_read_directories } from '../../read/directories.mjs';
import { error } from '../../../error.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function directory_all_empty_delete() {
    arguments_assert(arguments, []);
    error('todo: directory_all_empty_delete');
    let result = await directory_read_directories(directory_current_to_source());
    ;
}