import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { task_property_open } from '../../../task/property/open.mjs';
import { task_property_state } from '../../../task/property/state.mjs';
import { list_filter_property } from '../../../list/filter/property.mjs';
import { task_all_unsummarized } from '../../../task/all/unsummarized.mjs';
export async function tasks_open_all_unsummarized() {
    arguments_assert(arguments, []);
    let all = await task_all_unsummarized();
    let v = task_property_state();
    let v_2 = task_property_open();
    let open = list_filter_property(all, v, v_2);
    return {
        all,
        open
    };
    metadata([]);
}