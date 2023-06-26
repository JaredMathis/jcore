import { metadata } from '../../../../metadata.mjs';
import { task_properties } from '../../../properties.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { object_map } from '../../../../object/map.mjs';
export function task_from_git_hub_issue(issue) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = task_properties();
    let v_2 = object_map(issue, v);
    return v_2;
    metadata([]);
}