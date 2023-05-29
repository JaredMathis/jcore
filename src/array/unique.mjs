import { array_intersection } from './intersection.mjs';
export function array_unique(list) {
    return array_intersection(list, list);
}