import { object_replace } from '../../object/replace.mjs';
import { js_await_expression_argument_change } from '../await/expression/argument/change.mjs';
import { object_copy_shallow } from '../../object/copy/shallow.mjs';
import { string_a } from '../../string/a.mjs';
import { js_code_await } from '../code/await.mjs';
import { js_parse_expression } from '../parse/expression.mjs';
export function js_expression_awaitify(node) {
    let awaited = js_parse_expression(js_code_await(string_a()));
    let result = object_copy_shallow(node);
    js_await_expression_argument_change(awaited, result);
    object_replace(node, awaited);
}