import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { data_git_commit_message_initial } from './initial.mjs';
import { data_task_property_id } from '../../../task/property/id.mjs';
import { object_property_get_initialize } from '../../../../object/property/get/initialize.mjs';
import { data_get } from '../../../get.mjs';
export async function data_git_commit_message_get() {
    arguments_assert(arguments, []);
    let data = await data_get();
    return object_property_get_initialize(data, data_task_property_id(), data_git_commit_message_initial());
    metadata([]);
}