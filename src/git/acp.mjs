import {object_property_get} from '../object/property/get.mjs'
import {command_line} from '../command/line.mjs'
import { data_get } from '../data/get.mjs';

export async function git_acp() {
    let data = await data_get();
    let task_id = object_property_get(data, 'task_id');
    let commands = [
        `git add *`,
        `git commit -m "${task_id}"`,
        `git push`,
    ];
    for (let c of commands) {
        await command_line(c);
    }
}