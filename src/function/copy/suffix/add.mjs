import { string_identifier_parts_from } from '../../../string/identifier/parts/from.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { function_copy_suffix } from '../suffix.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_last_remove } from '../../../list/last/remove.mjs';
import { list_single_item } from '../../../list/single/item.mjs';
import { list_add_beginning } from '../../../list/add/beginning.mjs';
import { string_identifier_parts_to } from '../../../string/identifier/parts/to.mjs';
import { error } from '../../../error.mjs';
import { comment } from '../../../comment.mjs';
import { json_to } from '../../../json/to.mjs';
export async function function_copy_suffix_add(function_name_old, function_name_suffix) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let function_name_old_parts = string_identifier_parts_to(function_name_old);
    let last = list_last_remove(function_name_old_parts);
    let function_name_prefix = string_identifier_parts_from(function_name_old_parts);
    let function_name_suffix_from = list_single_item(last);
    let function_name_suffix_parts = string_identifier_parts_to(function_name_suffix);
    list_add_beginning(function_name_suffix_parts, last);
    let function_name_suffix_to = string_identifier_parts_from(function_name_suffix_parts);
    comment(`Test this the first time it's ran - if values look good remove error and comment`);
    error(json_to({
        function_name_prefix,
        function_name_suffix_from,
        function_name_suffix_to
    }));
    function_copy_suffix(function_name_prefix, function_name_suffix_from, function_name_suffix_to);
}