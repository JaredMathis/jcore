import { task_available } from '../available.mjs';
import { task_property_set_local } from '../property/set/local.mjs';
import { task_property_state } from '../property/state.mjs';
import { git_hub_repository_issue_close } from '../../git/hub/repository/issue/close.mjs';
import { integer_parse } from '../../integer/parse.mjs';
export async function task_state_change(task_number_string, property_value) {
    let task_number = integer_parse(task_number_string);
    await git_hub_repository_issue_close(task_number);
    const property_name = task_property_state();
    await task_property_set_local(task_number_string, property_name, property_value);
    return await task_available();
}