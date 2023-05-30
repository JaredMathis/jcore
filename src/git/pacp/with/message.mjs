import { command_line_all } from '../../../command/line/all.mjs';
import { comment } from '../../../comment.mjs';
import { result_empty } from '../../../result/empty.mjs';
export async function git_pacp_with_message(commit_message) {
    const command_commit = `git commit -m "${ commit_message }"`;
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
            result.message = `There was probably no code to commit. If this is not true, fix the code!`
            return result;
        }
    }
    return c_result;
}