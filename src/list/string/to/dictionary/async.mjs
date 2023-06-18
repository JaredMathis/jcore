import { identity } from '../../../../identity.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_to_dictionary_async } from '../../../to/dictionary/async.mjs';
export async function list_string_to_dictionary_async(list, element_to_value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    return list_to_dictionary_async(list, identity, element_to_value);
}