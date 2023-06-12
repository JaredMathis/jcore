import { database_property_value } from '../property/value.mjs';
import { object_property_get } from '../../object/property/get.mjs';
export function database_value_get(commit_data) {
    return object_property_get(commit_data, database_property_value());
}