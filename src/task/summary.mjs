import { task_property_title } from './property/title.mjs';
import { task_property_number } from './property/number.mjs';
import { object_property_get } from '../object/property/get.mjs';
export function task_summary(o) {
    return `${ object_property_get(o, task_property_number()) } ${ object_property_get(o, task_property_title()) }`;
}