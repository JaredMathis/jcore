import { git } from '../../../git.mjs';
import { list_join } from '../../../list/join.mjs';
import { command_line_args_skipped } from '../../../command/line/args/skipped.mjs';
import { command_line_all } from '../../../command/line/all.mjs';
import { result_empty } from '../../../result/empty.mjs';
import { list_first } from '../../../list/first.mjs';
export async function git_pacp_with_message(commit_message) {
    let args = command_line_args_skipped();
    if (false) {
        const value = git.name;
        while (list_first(args, a => a === value)) {
            list_first_remove(args);
        }
    }
    let args_message = list_join(args, ' ');
    const command_commit = `git commit -m "${ commit_message }: ${ args_message }"`;
    let commands = [
        `git pull`,
        `git add *`,
        command_commit,
        `git push`
    ];
    let c_result = command_line_all(commands);
    if (!c_result.success) {
        if (c_result.command === command_commit) {
            let result = result_empty();
            result.inner = c_result;
            result.message = `There was probably no code to commit. If this is not true, fix the code!`;
            return result;
        }
    }
    return c_result;
}