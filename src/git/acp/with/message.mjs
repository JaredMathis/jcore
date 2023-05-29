import { command_line } from '../../../command/line.mjs';
export async function git_acp_with_message(commit_message) {
    let commands = [
        `git add *`,
        `git commit -m "${ commit_message }"`,
        `git push`
    ];
    for (let c of commands) {
        await command_line(c);
    }
}