import { not } from '../../../../not.mjs';
import { list_multiple_summary } from '../../../../list/multiple/summary.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_add } from '../../../../list/add.mjs';
import { list_empty } from '../../../../list/empty.mjs';
import { string_difference_get } from '../../../../string/difference/get.mjs';
import { version_file_contents_each } from '../../../file/contents/each.mjs';
import { version_removals } from '../../../removals.mjs';
import { todo } from '../../../../todo.mjs';
import { file_read } from '../../../../file/read.mjs';
import { version_output_generic } from '../../../output/generic.mjs';
import { directory_read_current } from '../../../../directory/read/current.mjs';
export async function version_sync_local_preview_generic(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let file_paths = await directory_read_current();
    let differences = [];
    await version_output_generic(repository_name, file_paths, lambda);
    async function lambda(file_path, contents) {
        let existing = await file_read(file_path);
        todo(contents, existing, file_path);
    }
    let removals = await version_removals(repository_name, file_paths);
    await version_file_contents_each(repository_name, removals, async (file_path, contents) => {
        todo(contents, '', file_path);
    });
    function todo(contents, existing, file_path) {
        let hunks = string_difference_get(contents, existing);
        if (not(list_empty(hunks))) {
            list_add(differences, {
                file_path,
                hunks
            });
        }
    }
    return list_multiple_summary({
        differences,
        removals
    });
    ;
}