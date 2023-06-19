import { metadata } from '../../metadata.mjs';
import { task_id_get_generic } from './get/generic.mjs';
import { object_property_get_or } from '../../object/property/get/or.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_id_get() {
    arguments_assert(arguments, []);
    let lambda = object_property_get_or;
    return await task_id_get_generic(lambda);
    metadata([]);
}