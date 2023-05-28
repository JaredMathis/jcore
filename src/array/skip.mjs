import { array_slice } from "./slice.mjs";
import { array_length } from "./length.mjs";

export function array_skip(list, skip_count) {
    return array_slice(list, skip_count, array_length(list));
}