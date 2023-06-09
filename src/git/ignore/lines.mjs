import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { not } from '../../not.mjs';
import { string_new_line } from '../../string/new/line.mjs';
import { string_split } from '../../string/split.mjs';
import { file_read } from '../../file/read.mjs';
import { string_empty } from '../../string/empty.mjs';
import { file_write } from '../../file/write.mjs';
import { file_exists } from '../../file/exists.mjs';
import { git_ignore_path } from './path.mjs';
export async function git_ignore_lines() {
    arguments_assert(arguments, []);
    let gitignore_file_path = git_ignore_path();
    let v_4 = await file_exists(gitignore_file_path);
    let v_3 = not(v_4);
    if (v_3) {
        let v = string_empty();
        await file_write(gitignore_file_path, v);
    }
    let contents = await file_read(gitignore_file_path);
    let v_2 = string_new_line();
    let lines = string_split(contents, v_2);
    return {
        lines,
        contents
    };
    metadata([]);
}