import { object_property_get } from '../object/property/get.mjs';
import { command_line } from '../command/line.mjs';
import { data_get } from '../data/get.mjs';
import { data_task_id } from '../data/task/id.mjs';
import { data_git_commit_message_set } from '../data/git/commit/message/set.mjs';
export async function git_acp() {
    let data = await data_get();
    let task_id = object_property_get(data, data_task_id());
    let commit_message;
    commit_message = task_id;
    if(false)data_git_commit_message_get();
    let commands = [
        `git add *`,
        `git commit -m "${ commit_message }"`,
        `git push`
    ];
    for (let c of commands) {
        await command_line(c);
    }
}