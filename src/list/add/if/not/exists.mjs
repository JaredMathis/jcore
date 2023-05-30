import { list_add } from '../../../add.mjs';
import { list_contains } from '../../../contains.mjs';
export function list_add_if_not_exists(list, element) {
    if (list_contains(list, element)) {
        return;
    }
    list_add(list, element);
}