import { object_property_get_initialize } from '../../../../object/property/get/initialize.mjs';
import { data_commit_message } from '../../../commit/message.mjs';
import { data_get } from '../../../get.mjs';
export async function data_git_commit_message_get() {
    let data = await data_get();
    const property_name = data_commit_message();
    return object_property_get_initialize(data, property_name, '');
}