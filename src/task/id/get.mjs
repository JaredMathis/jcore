import { object_property_get } from '../../object/property/get.mjs';
import { metadata } from '../../metadata.mjs';
import { task_id_get_generic } from './get/generic.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_id_get() {
    arguments_assert(arguments, []);
    let lambda = object_property_get;
    let v = await task_id_get_generic(lambda);
    return v;
    metadata([]);
}