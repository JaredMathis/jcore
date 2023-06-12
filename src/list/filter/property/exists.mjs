import { object_property_exists } from '../../../object/property/exists.mjs';
import { list_filter } from '../../filter.mjs';
export function list_filter_property_exists(property_commit_id) {
    return list_filter(mapped, m => object_property_exists(m, property_commit_id));
}