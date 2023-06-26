import { task_property_body } from './property/body.mjs';
import { task_property_state } from './property/state.mjs';
import { task_property_title } from './property/title.mjs';
import { task_property_number } from './property/number.mjs';
export function task_properties() {
    return [
        task_property_number(),
        task_property_title(),
        task_property_state(),
        task_property_body()
    ];
    metadata([]);
}