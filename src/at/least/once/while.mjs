import { metadata_generated } from '../../../metadata/generated.mjs';
import { metadata } from '../../../metadata.mjs';
import { at_least_once } from '../once.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function at_least_once_while(lambda) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result;
    do {
        result = at_least_once(lambda);
    } while (result);
    metadata([metadata_generated()]);
}