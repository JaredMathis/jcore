import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { data_git_commit_message_initial } from './initial.mjs';
import { task_property_id } from '../../../../task/property/id.mjs';
import { object_property_get_initialize } from '../../../../object/property/get/initialize.mjs';
import { data_get } from '../../../get.mjs';
export async function data_git_commit_message_get() {
    arguments_assert(arguments, []);
    let data = await data_get();
    let v = task_property_id();
    let v_2 = data_git_commit_message_initial();
    let v_3 = object_property_get_initialize(data, v, v_2);
    return v_3;
    metadata([]);
}