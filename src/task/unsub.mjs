import { task_current_data } from './current/data.mjs';
import { task_current_video } from './current/video.mjs';
import { metadata } from '../metadata.mjs';
import { task_set_available_first } from './set/available/first.mjs';
import { task_unsub_generic } from './unsub/generic.mjs';
import { task_set } from './set.mjs';
import { task_finish } from './finish.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_unsub() {
    arguments_assert(arguments, []);
    let v_4 = await task_unsub_generic(async function v() {
        await task_current_video();
        await task_finish();
        return await task_set_available_first();
    }, on_empty_not);
    return v_4;
    async function on_empty_not(last_string) {
        await task_finish();
        await task_set(last_string);
        return await task_current_data();
    }
    metadata([]);
}