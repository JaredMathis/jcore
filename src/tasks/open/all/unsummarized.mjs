import { task_property_open } from '../../../task/property/open.mjs';
import { task_property_state } from '../../../task/property/state.mjs';
import { list_filter_property } from '../../../list/filter/property.mjs';
import { task_all_unsummarized } from '../../../task/all/unsummarized.mjs';
export async function tasks_open_all_unsummarized() {
    let all = await task_all_unsummarized();
    let open = list_filter_property(all, task_property_state(), task_property_open());
    return {
        all,
        open
    };
}