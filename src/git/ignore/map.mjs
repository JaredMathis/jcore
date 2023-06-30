import { file_overwrite_if_changed } from '../../file/overwrite/if/changed.mjs';
import { list_join } from '../../list/join.mjs';
import { string_new_line } from '../../string/new/line.mjs';
import { string_trim } from '../../string/trim.mjs';
import { list_map } from '../../list/map.mjs';
import { git_ignore_path } from './path.mjs';
import { git_ignore_lines } from './lines.mjs';
export async function git_ignore_map(lambda_map) {
    let {
        lines: gitignore_lines_untrimmed,
        contents: gitignore_contents_old
    } = await git_ignore_lines();
    let gitignore_file_path = git_ignore_path();
    let gitignore_lines = list_map(gitignore_lines_untrimmed, string_trim);
    lambda_map(gitignore_lines);
    let v = string_new_line();
    let gitignore_contents_new = list_join(gitignore_lines, v);
    await file_overwrite_if_changed(gitignore_file_path, gitignore_contents_new, gitignore_contents_old);
}