import { log } from '../../../log.mjs';
import { equal } from '../../../equal.mjs';
import { list_length } from '../../../list/length.mjs';
import { directory_read_paths } from '../../read/paths.mjs';
import { directory_current_to_source } from '../../current/to/source.mjs';
import { directory_read_directories } from '../../read/directories.mjs';
import { error } from '../../../error.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function directory_all_empty_delete() {
    arguments_assert(arguments, []);
    let result = await directory_read_directories(directory_current_to_source());
    for (let directory_path of result) {
        let file_paths = await directory_read_paths(directory_path);
        let count = list_length(file_paths);
        if (equal(count, 0)) {
            console.log(directory_path);
        }
    }
}