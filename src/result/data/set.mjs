import { object_merge } from '../../object/merge.mjs';
export function result_data_set(data, result) {
    object_merge({ data }, result);
    return result;
}