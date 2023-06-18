import { list_add_multiple } from './add/multiple.mjs';
import { list_clear } from './clear.mjs';
export function list_replace(list_to_replace, list_to_replace_with) {
    list_clear(list_to_replace);
    list_add_multiple(list_to_replace, list_to_replace_with);
}