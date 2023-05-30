import { list_first_remove } from '../../../first/remove.mjs';
import { list_first } from '../../../first.mjs';
export function list_remove_all_first_equals(args, value) {
    while (list_first(args) === value) {
        list_first_remove(args);
    }
}