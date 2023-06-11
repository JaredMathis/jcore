import { list_add } from '../list/add.mjs';
import { list_length_is_0 } from '../list/length/is/0.mjs';
import { string_difference_get } from '../string/difference/get.mjs';
import { version_file_contents } from './file/contents.mjs';
import { version_removals } from './removals.mjs';
import { todo } from '../todo.mjs';
import { file_read } from '../file/read.mjs';
import { version_output_generic } from './output/generic.mjs';
import { directory_read_current } from '../directory/read/current.mjs';
export async function version_differences(repository_name) {
    let file_paths = await directory_read_current();
    let differences = [];
    await version_output_generic(repository_name, file_paths, lambda);
    async function lambda(file_path, contents) {
        let existing = await file_read(file_path);
        todo(contents, existing, file_path);
    }
    let removals = await version_removals(repository_name, file_paths);
    for (let r of removals) {
        let contents = await version_file_contents(repository_name, r);
        todo(contents, '', r);
    }
    function todo(contents, existing, file_path) {
        let hunks = string_difference_get(contents, existing);
        if (!list_length_is_0(hunks)) {
            list_add(differences, {
                file_path,
                hunks
            });
        }
    }
    return differences;
}