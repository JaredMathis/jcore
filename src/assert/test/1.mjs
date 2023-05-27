import { assert } from "../../assert.mjs";
import { comment } from "../../comment.mjs";

comment(`Should execute without exception`);
assert(true);

throws(() => assert(false));