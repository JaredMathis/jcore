import { list_to_dictionary } from '../../to/dictionary.mjs';
import { identity } from '../../../identity.mjs';
import { metadata_generated } from '../../../metadata/generated.mjs';
import { metadata } from '../../../metadata.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function list_string_to_dictionary(list, element_to_value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let element_to_key = identity;
    return list_to_dictionary(list, element_to_key, element_to_value);
    metadata([metadata_generated()]);
}