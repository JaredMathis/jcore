import { assert } from "../../assert.mjs";
import { string_starts_with } from "../starts/with.mjs";

export function string_prefix_replace(n, prefix_old, prefix_new) {
    assert(string_starts_with(n, prefix_old));
    let prefix_without = string_prefix_without(n, prefix_old);
}