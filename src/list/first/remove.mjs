import { error } from '../../error.mjs';
import { list_remove_at } from '../remove/at.mjs';
export function list_first_remove(list) {
    list_remove_at(list, 0);
}