import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_replace } from '../../object/replace.mjs';
import { js_await_expression_argument_change } from '../await/expression/argument/change.mjs';
import { object_copy_shallow } from '../../object/copy/shallow.mjs';
import { string_a } from '../../string/a.mjs';
import { js_code_await } from '../code/await.mjs';
import { js_parse_expression } from '../parse/expression.mjs';
export function js_expression_awaitify(node) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v_2 = string_a();
    let v = js_code_await(v_2);
    let awaited = js_parse_expression(v);
    let result = object_copy_shallow(node);
    js_await_expression_argument_change(awaited, result);
    object_replace(node, awaited);
    metadata([]);
}