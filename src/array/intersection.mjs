import { array_contains } from "./contains.mjs";
import { array_filter } from "./filter.mjs";

export function array_intersection(left, right) {
    return array_filter(left, l => array_contains(right, l));
}