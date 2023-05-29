import { array_last_index } from "../last/index.mjs";

export function array_index_valid(list ,index) {
    return index >= 0 && index <= array_last_index(list);
}