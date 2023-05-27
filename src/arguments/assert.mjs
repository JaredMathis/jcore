import { assert } from "../assert.mjs";
import { arguments_count } from "./count.mjs";
import { array_is } from "../array/is.mjs";

export function arguments_assert(args, predicates) {
    arguments_count(arguments, 2);
    assert(array_is(predicates));
    arguments_count(args, predicates.length);
    for (let i of range(predicates.length)) {
        assert(predicates[i](args[i]));
    }
}