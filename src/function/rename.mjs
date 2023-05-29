import { assert } from "../assert.mjs";
import { function_exists } from "./exists.mjs";

export function function_rename(function_name_old, function_name_new) {
    assert(await function_exists(function_name_old));
    assert(!await function_exists(function_name_new));
}