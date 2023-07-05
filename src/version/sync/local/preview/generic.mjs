import { metadata } from '../../../../metadata.mjs';
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
export async function version_sync_local_preview_generic(repository_name, file_paths) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    console.log(0);
    let differences = [];
    console.log(1);
    await version_output_generic(repository_name, file_paths, lambda);
    console.log(2);
    async function lambda(file_path, contents) {
        let existing = await file_read(file_path);
        todo(contents, existing, file_path);
    }
    console.log(3);
    let removals = await version_removals(repository_name, file_paths);
    console.log({removals});
    console.log(4);
    let v_4 = async function v_2(file_path, contents) {
        let v_8 = '';
        todo(contents, v_8, file_path);
    };
    console.log(5);
    await version_file_contents_each(repository_name, removals, v_4);
    console.log(6);
    function todo(contents, existing, file_path) {
        let hunks = string_difference_get(contents, existing);
        let v_5 = list_empty(hunks);
        let v_3 = not(v_5);
        if (v_3) {
            let v_6 = {
                file_path,
                hunks
            };
            list_add(differences, v_6);
        }
    }
    console.log(7);
    let v_7 = {
        differences,
        removals
    };
    console.log(8);
    let v = list_multiple_summary(v_7);
    console.log(9);
    return v;
    console.log(10);
    ;
    console.log(11);
    metadata([]);
    console.log(12);
}