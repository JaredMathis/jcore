import { file_overwrite } from '../../file/overwrite.mjs';
import { list_join } from '../../list/join.mjs';
import { list_add_if_not_exists } from '../../list/add/if/not/exists.mjs';
import { string_trim } from '../../string/trim.mjs';
import { list_map } from '../../list/map.mjs';
import { string_new_line } from '../../string/new/line.mjs';
import { string_split } from '../../string/split.mjs';
import { file_read } from '../../file/read.mjs';
import { string_empty } from '../../string/empty.mjs';
import { file_write } from '../../file/write.mjs';
import { file_exists } from '../../file/exists.mjs';
export async function git_ignore_add(gitignore_line_to_add) {
    let gitignore_file_path = '.gitignore';
    if (!await file_exists(gitignore_file_path)) {
        await file_write(gitignore_file_path, string_empty());
    }
    let gitignore_contents = await file_read(gitignore_file_path);
    let gitignore_lines = string_split(gitignore_contents, string_new_line());
    let mapped = list_map(gitignore_lines, string_trim);
    list_add_if_not_exists(mapped, gitignore_line_to_add);
    let gitignore_contents_new = list_join(mapped, string_new_line());
    await file_overwrite(gitignore_file_path, gitignore_contents_new);
}