import { log } from '../../../log.mjs';
import { command_line_check } from '../../../command/line/check.mjs';
export async function git_pacp_with_message(commit_message) {
    let commands = [
        `git pull`,
        `git add *`,
        `git commit -m "${ commit_message }"`,
        `git push`
    ];
    for (let c of commands) {
        let c_result = await command_line_check(c);
        if (!c_result.success) {
            log(`Command failed: ${ c }`);
            log(c_result.stdout);
            break;
        }
    }
}