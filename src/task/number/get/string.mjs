import { task_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_to } from '../../../string/to.mjs';
import { task_property_number } from '../../property/number.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
export function task_number_get_string(sub) {
    arguments_assert(arguments, [task_is]);
    let sub_number = object_property_get(sub, task_property_number());
    let sub_number_string = string_to(sub_number);
    return sub_number_string;
}