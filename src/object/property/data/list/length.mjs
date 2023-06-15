import { list_length } from '../../../../list/length.mjs';
import { object_property_get } from '../../get.mjs';
export function object_property_data_list_length(issues) {
    let data = object_property_get(issues, 'data');
    return list_length(data);
}