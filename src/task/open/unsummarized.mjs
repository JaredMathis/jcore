import { task_property_open } from '../property/open.mjs';
import { task_property_state } from '../property/state.mjs';
import { list_filter_property } from '../../list/filter/property.mjs';
import { task_all_unsummarized } from '../all/unsummarized.mjs';
export async function task_open_unsummarized() {
    let all = await task_all_unsummarized();
    let open = list_filter_property(all, task_property_state(), task_property_open());
    return open;
}