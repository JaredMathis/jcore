import { object_keys_recursive } from '../../../object/keys/recursive.mjs';
import { string_to_tree } from '../../to/tree.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function string_sub_max_2(left, right) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let tree_left = string_to_tree(left);
    let tree_left_keys = object_keys_recursive(tree_left);
    let tree_right = string_to_tree(right);
    let tree_right_keys = object_keys_recursive(tree_right);
    return {
        tree_left_keys,
        tree_right_keys
    };
}