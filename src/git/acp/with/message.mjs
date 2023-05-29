import { command_line } from '../../../command/line.mjs';
import { data_git_commit_message_set } from '../../../data/git/commit/message/set.mjs';
import { data_task_id } from '../../../data/task/id.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { data_git_commit_message_initial } from '../../../data/git/commit/message/initial.mjs';
import { data_get } from '../../../data/get.mjs';
export async function git_acp_with_message(commit_message) {
    let data = await data_get();
    const initial = data_git_commit_message_initial();
    if (commit_message === initial) {
        let task_id = object_property_get(data, data_task_id());
        commit_message = task_id;
        data_git_commit_message_set(initial);
    }
    let commands = [
        `git add *`,
        `git commit -m "${ commit_message }"`,
        `git push`
    ];
    for (let c of commands) {
        await command_line(c);
    }
}