import { log } from '../../../log.mjs';
import { command_line_check } from '../../../command/line/check.mjs';
import { object_property_set } from '../../../object/property/set.mjs';
export async function git_pacp_with_message(commit_message) {
    let result = result_empty();
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
            result_unsuccess(result);
            return result;
        }
    }
    return result;
}

function result_unsuccess(result) {
    object_property_set(result, result_success(), false);
}

function result_success() {
    return 'success';
}

function result_empty() {
    return { [result_success()]: true };
}
