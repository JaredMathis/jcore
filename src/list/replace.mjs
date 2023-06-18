import { list_add_multiple } from './add/multiple.mjs';
import { list_clear } from './clear.mjs';
export function list_replace(statements_code, statements_code_new) {
    list_clear(statements_code);
    list_add_multiple(statements_code, statements_code_new);
}