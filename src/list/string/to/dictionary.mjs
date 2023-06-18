import { metadata_generated } from '../../../metadata/generated.mjs';
import { metadata } from '../../../metadata.mjs';
import { identity } from '../../../identity.mjs';
import { list_to_dictionary } from '../../to/dictionary.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function list_string_to_dictionary(list, element_to_value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    return list_to_dictionary(list, identity, element_to_value);
    metadata([metadata_generated()]);
}