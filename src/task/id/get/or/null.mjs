import { task_id_get_generic } from '../generic.mjs';
import { object_property_get_or } from '../../../../object/property/get/or.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
export async function task_id_get_or_null() {
    arguments_assert(arguments, []);
    let lambda = object_property_get_or;
    return await task_id_get_generic(lambda);
    metadata([]);
}