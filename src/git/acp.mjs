import { data_git_commit_message_get } from '../data/git/commit/message/get.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { command_line } from '../command/line.mjs';
import { data_get } from '../data/get.mjs';
import { data_task_id } from '../data/task/id.mjs';
import { data_git_commit_message_initial } from '../data/git/commit/message/initial.mjs';
export async function git_acp() {

    let data = await data_get();
    let commit_message = await data_git_commit_message_get();
    const initial = data_git_commit_message_initial();
    if (commit_message === initial) {
        let task_id = object_property_get(data, data_task_id());
        commit_message = task_id;
        if(false)data_git_commit_message_set(initial);
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