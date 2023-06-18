import { list_skip } from './skip.mjs';
export function list_copy(refactor_stack) {
    let v = list_skip(refactor_stack, 0);
    return v;
}