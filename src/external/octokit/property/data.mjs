import { object_property_get } from '../../../object/property/get.mjs';
export function external_octokit_property_data(response) {
    let v = object_property_get(response, 'data');
    return v;
}