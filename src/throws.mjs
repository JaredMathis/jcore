import { error } from "./error.mjs";

export function throws(lambda) {
    let errored = false;
    try {
        lambda();
    } catch (e) {
        errored = true;
    }
    if (!errored) {
        error(`Expecting throw`);
    }
}