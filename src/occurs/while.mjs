import { metadata_generated } from '../metadata/generated.mjs';
import { metadata } from '../metadata.mjs';
import { occurs } from '../occurs.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function occurs_while(lambda) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result;
    do {
        result = occurs(lambda);
    } while (result);
    metadata([metadata_generated()]);
}