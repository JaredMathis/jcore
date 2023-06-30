import { task_current_data } from '../../data.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { task_current_open } from '../../open.mjs';
import { task_property_closed } from '../../../property/closed.mjs';
import { task_property_state_get } from '../../../property/state/get.mjs';
import { equal } from '../../../../equal.mjs';
export async function task_current_open_if_closed() {
    arguments_assert(arguments, []);
    let before = await task_current_data();
    if (equal(task_property_state_get(before), task_property_closed())) {
        await task_current_open();
    }
}