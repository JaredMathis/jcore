import { git_ignore_line_slash_add } from '../../../line/slash/add.mjs';
import { git_ignore_map } from '../../../map.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { list_add_if_not_exists } from '../../../../../list/add/if/not/exists.mjs';
export async function git_ignore_add_if_not_exists(gitignore_line_to_add) {
    arguments_assert(arguments, [arguments_assert_todo]);
    function lambda_map(gitignore_lines) {
        let slashed = git_ignore_line_slash_add(gitignore_line_to_add);
        list_add_if_not_exists(gitignore_lines, slashed);
    }
    await git_ignore_map(lambda_map);
    metadata([]);
}