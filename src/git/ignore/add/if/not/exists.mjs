import { metadata } from '../../../../../metadata.mjs';
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
import { string_combine } from '../../../../../string/combine.mjs';
export async function git_ignore_add_if_not_exists(gitignore_line_to_add) {
    arguments_assert(arguments, [arguments_assert_todo]);
    function lambda_map(gitignore_lines_before) {
        let slashed = string_combine('/', gitignore_line_to_add);
        let gitignore_lines_after = list_map(gitignore_lines_before, string_trim);
        list_add_if_not_exists(gitignore_lines_after, slashed);
        return gitignore_lines_after;
    }
    let {
        lines: gitignore_lines_before,
        contents: gitignore_contents_old
    } = await git_ignore_lines();
    let gitignore_file_path = git_ignore_path();
    let gitignore_lines_after = lambda_map(gitignore_lines_before);
    let v = string_new_line();
    let gitignore_contents_new = list_join(gitignore_lines_after, v);
    await file_overwrite_if_changed(gitignore_file_path, gitignore_contents_new, gitignore_contents_old);
    metadata([]);
}

