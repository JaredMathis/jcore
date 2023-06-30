import { list_each_with_index } from '../../../list/each/with/index.mjs';
import { metadata } from '../../../metadata.mjs';
import { git_ignore_map } from '../map.mjs';
import { list_add_if_not_exists } from '../../../list/add/if/not/exists.mjs';
import { git_ignore_line_slash_add } from '../line/slash/add.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function git_ignore_add_slashes(gitignore_line_to_add) {
    arguments_assert(arguments, [arguments_assert_todo]);
    function lambda_map(gitignore_lines) {
        let slashed = git_ignore_line_slash_add(gitignore_line_to_add);
        list_add_if_not_exists(gitignore_lines, slashed);
        list_each_with_index(gitignore_lines, (value, index));
    }
    await git_ignore_map(lambda_map);
    metadata([]);
}