import { js_visit_identifiers } from '../../../../../js/visit/identifiers.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_parse } from '../../../../parse.mjs';
export async function function_add_js_node_type_auto(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let parsed = await function_parse(function_name);
    js_visit_identifiers(parsed);
}