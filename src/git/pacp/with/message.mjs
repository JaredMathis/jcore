import { log } from '../../../log.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_name_get } from '../../../function/name/get.mjs';
import { list_remove_all_first_equals } from '../../../list/remove/all/first/equals.mjs';
import { git } from '../../../git.mjs';
import { list_join } from '../../../list/join.mjs';
import { command_line_args_skipped } from '../../../command/line/args/skipped.mjs';
import { command_line_all } from '../../../command/line/all.mjs';
import { result_empty } from '../../../result/empty.mjs';
import { string_is } from '../../../string/is.mjs';
import { boolean_is } from '../../../boolean/is.mjs';
export async function git_pacp_with_message(commit_message, sync) {
    arguments_assert(arguments, [string_is, boolean_is]);
    let args = command_line_args_skipped();
    list_remove_all_first_equals(args, function_name_get(git));
    let args_message = list_join(args, ' ');
    const command_commit = `git commit -m "${ commit_message } ${ args_message }"`;
    let commands;
    commands = [
        `git pull`,
        `git add *`,
        command_commit,
        `git push`
    ];
    let c_result = await command_line_all(commands);
    if (!c_result.success) {
        if (c_result.command === command_commit) {
            let result = result_empty();
            result.inner = c_result;
            result.message = `There was probably no code to commit. If this is not true, fix the code!`;
            return result;
        } else {
            log({
                c_result,
                command_commit
            });
        }
    }
    return c_result;
    metadata([]);
}