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
    let result = command_line_all(commands);
    if (!result.success) {
        if (result.command === command_commit) {
            comment(`There was probably no code to commit`);
            return result_empty();
        }
    }
    return result;
}