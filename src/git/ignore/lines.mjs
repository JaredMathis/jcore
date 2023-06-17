import { string_new_line } from '../../string/new/line.mjs';
import { string_split } from '../../string/split.mjs';
import { file_read } from '../../file/read.mjs';
import { string_empty } from '../../string/empty.mjs';
import { file_write } from '../../file/write.mjs';
import { file_exists } from '../../file/exists.mjs';
import { git_ignore_path } from './path.mjs';
export async function git_ignore_lines() {
    let gitignore_file_path = git_ignore_path();
    if (!(await file_exists(gitignore_file_path))) {
        await file_write(gitignore_file_path, string_empty());
    }
    let contents = await file_read(gitignore_file_path);
    let lines = string_split(contents, string_new_line());
    return {
        lines,
        contents
    };
}