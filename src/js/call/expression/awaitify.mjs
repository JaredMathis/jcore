import { object_replace } from '../../../object/replace.mjs';
import { js_await_expression_argument_change } from '../../await/expression/argument/change.mjs';
import { object_copy_shallow } from '../../../object/copy/shallow.mjs';
import { string_a } from '../../../string/a.mjs';
import { js_code_await } from '../../code/await.mjs';
import { js_parse_expression } from '../../parse/expression.mjs';
import { js_call_expression_name_change } from './name/change.mjs';
import { string_add } from '../../../string/add.mjs';
import { js_call_expression_name_get_or_null } from './name/get/or/null.mjs';
export function js_call_expression_awaitify(f, suffix) {
    let name_old = js_call_expression_name_get_or_null(f);
    let name_new = string_add(name_old, suffix);
    js_call_expression_name_change(f, name_new);
    let awaited = js_parse_expression(js_code_await(string_a()));
    let result = object_copy_shallow(f);
    js_await_expression_argument_change(awaited, result);
    object_replace(f, awaited);
}