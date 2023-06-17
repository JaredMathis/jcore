import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_single } from '../../list/single.mjs';
import { js_node_property_declarations_get } from '../node/property/declarations/get.mjs';
export function js_declarations_single(match) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let declarations = js_node_property_declarations_get(match);
    let declaration = list_single(declarations);
    return declaration;
}