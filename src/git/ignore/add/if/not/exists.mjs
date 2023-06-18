import { file_overwrite_if_changed } from '../../../../../file/overwrite/if/changed.mjs';
import { git_ignore_lines } from '../../../lines.mjs';
import { git_ignore_path } from '../../../path.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { list_join } from '../../../../../list/join.mjs';
import { list_add_if_not_exists } from '../../../../../list/add/if/not/exists.mjs';
import { string_trim } from '../../../../../string/trim.mjs';
import { list_map } from '../../../../../list/map.mjs';
import { string_new_line } from '../../../../../string/new/line.mjs';
export async function git_ignore_add_if_not_exists(gitignore_line_to_add) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {
        lines: gitignore_lines,
        contents: gitignore_contents_old
    } = await git_ignore_lines();
    let gitignore_file_path = git_ignore_path();
    let mapped = list_map(gitignore_lines, string_trim);
    list_add_if_not_exists(mapped, gitignore_line_to_add);
    let v = string_new_line();
    let gitignore_contents_new = list_join(mapped, v);
    await file_overwrite_if_changed(gitignore_file_path, gitignore_contents_new, gitignore_contents_old);
}