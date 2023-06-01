import { js_statement_metadata_args_get } from '../js/statement/metadata/args/get.mjs';
import { js_function_delcaration_to_statements } from '../js/function/delcaration/to/statements.mjs';
import { metadata } from '../metadata.mjs';
import { js_keyword_async } from '../js/keyword/async.mjs';
import { object_property_set } from '../object/property/set.mjs';
import { refactor_unasyncify_each } from './unasyncify/each.mjs';
import { js_callable_multiple } from '../js/callable/multiple.mjs';
import { js_visit_nodes_all } from '../js/visit/nodes/all.mjs';
import { assert } from '../assert.mjs';
import { comment } from '../comment.mjs';
import { js_export_function_single } from '../js/export/function/single.mjs';
export async function refactor_unasyncify(args) {
    let {parsed, function_declaration} = args;
    comment(`To remove this assert, fix the code - right now it does not handle functions or arrows inside the exported function`);
    assert(!js_callable_multiple(parsed));
    js_visit_nodes_all(parsed, refactor_unasyncify_each);
    let fd = js_export_function_single(parsed);
    object_property_set(fd, js_keyword_async(), false);
    let statements = js_function_delcaration_to_statements(fd);
    let last_metadata_args = js_statement_metadata_args_get(last_statement);
    metadata([]);
}