import { js_parse_call_expression } from '../js/parse/call/expression.mjs';
import { metadata_generated } from '../metadata/generated.mjs';
import { js_function_declaration_to_metadata_args } from '../js/function/declaration/to/metadata/args.mjs';
import { metadata } from '../metadata.mjs';
import { js_keyword_async } from '../js/keyword/async.mjs';
import { object_property_set } from '../object/property/set.mjs';
import { refactor_unasyncify_each } from './unasyncify/each.mjs';
import { js_callable_multiple } from '../js/callable/multiple.mjs';
import { js_visit_nodes_all } from '../js/visit/nodes/all.mjs';
import { assert } from '../assert.mjs';
import { comment } from '../comment.mjs';
import { function_name_get } from '../function/name/get.mjs';
export async function refactor_unasyncify(args) {
    let {parsed, function_declaration} = args;
    comment(`To remove this assert, fix the code - right now it does not handle functions or arrows inside the exported function`);
    assert(!js_callable_multiple(parsed));
    js_visit_nodes_all(parsed, refactor_unasyncify_each);
    object_property_set(function_declaration, js_keyword_async(), false);
    let metadata_args = await js_function_declaration_to_metadata_args(function_declaration);
    js_parse_call_expression(function_name_get(metadata_generated));
    metadata([]);
}