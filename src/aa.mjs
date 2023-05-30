import { error } from './error.mjs';
export function aa() {
    error('todo: aa');
    bb();
}
function bb() {
    dd();
    cc();
}
function cc() {
    cc();
}
function dd() {
}