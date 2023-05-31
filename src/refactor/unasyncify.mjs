import { refactor_unasyncify_each } from './unasyncify/each.mjs';
import { js_callable_multiple } from '../js/callable/multiple.mjs';
import { js_visit_nodes_all } from '../js/visit/nodes/all.mjs';
import { assert } from '../assert.mjs';
import { comment } from '../comment.mjs';
export async function refactor_unasyncify(args) {
    let {parsed} = args;
    comment(`To remove this assert, fix the code`);
    assert(!js_callable_multiple(parsed));
    js_visit_nodes_all(parsed, refactor_unasyncify_each);
}