import { comment } from "../../../comment.mjs";
import { number_is } from "../../../number/is.mjs";
import { throws } from "../../../throws.mjs";
import { arguments_assert } from "../../assert.mjs";

comment('Too many predicates')
throws(() => arguments_assert([1], [number_is, number_is]));