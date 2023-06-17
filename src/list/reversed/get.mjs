import { list_reverse } from '../reverse.mjs';
import { list_add_multiple } from '../add/multiple.mjs';
export function list_reversed_get(args) {
    let args_reversed = [];
    list_add_multiple(args_reversed, args);
    list_reverse(args_reversed);
}