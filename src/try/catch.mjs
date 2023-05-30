import { error_caught } from '../error/caught.mjs';
export function try_catch(fn, lambda) {
    try {
        return lambda();
    } catch (e) {
        error_caught(fn, e, unparsed);
    }
}