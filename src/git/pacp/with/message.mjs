import { command_line_all } from '../../../command/line/all.mjs';
export async function git_pacp_with_message(commit_message) {
    const command_commit = `git commit -m "${ commit_message }"`;
    let commands = [
        `git pull`,
        `git add *`,
        command_commit,
        `git push`
    ];
    return command_line_all(commands);
}