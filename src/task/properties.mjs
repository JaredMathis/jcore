import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { task_property_body } from './property/body.mjs';
import { task_property_state } from './property/state.mjs';
import { task_property_title } from './property/title.mjs';
import { task_property_number } from './property/number.mjs';
export function task_properties() {
    arguments_assert(arguments, []);
    let v = task_property_number();
    let v_2 = task_property_title();
    let v_3 = task_property_state();
    let v_4 = task_property_body();
    return [
        v,
        v_2,
        v_3,
        v_4
    ];
    metadata([]);
}