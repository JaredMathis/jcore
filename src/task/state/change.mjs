import { git_hub_repository_issue_state_generic } from '../../git/hub/repository/issue/state/generic.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { task_available } from '../available.mjs';
import { task_property_change_local } from '../property/change/local.mjs';
import { task_property_state } from '../property/state.mjs';
import { integer_parse } from '../../integer/parse.mjs';
export async function task_state_change(task_number_string, property_value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let task_number = integer_parse(task_number_string);
    await git_hub_repository_issue_state_generic(task_number, property_value);
    const property_name = task_property_state();
    await task_property_change_local(task_number_string, property_name, property_value);
    let v = await task_available();
    return v;
    metadata([]);
}