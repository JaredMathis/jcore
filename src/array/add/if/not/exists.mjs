import { array_add } from '../../../add.mjs';
import { array_contains } from '../../../contains.mjs';
export function array_add_if_not_exists(list, element) {
    if (array_contains(list, element)) {
        return;
    }
    array_add(list, element);
}