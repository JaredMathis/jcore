import { metadata } from '../metadata.mjs';
import { list_intersection } from './intersection.mjs';
export function list_unique(list) {
    return list_intersection(list, list);
    metadata([]);
}