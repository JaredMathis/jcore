import { command_line } from '../../../command/line.mjs';
import { command_line_try } from '../../../command/line/try.mjs';
export async function git_pacp_with_message(commit_message) {
    let commands = [
        `git pull`,
        `git add *`,
        `git commit -m "${ commit_message }"`,
        `git push`
    ];
    for (let c of commands) {
        await command_line(c);
    }
}