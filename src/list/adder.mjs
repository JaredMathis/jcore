import { metadata_generated } from '../metadata/generated.mjs';
import { metadata } from '../metadata.mjs';
import { list_adder_generic } from './adder/generic.mjs';
import { list_add } from './add.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function list_adder(then) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = list_add;
    return list_adder_generic(then, lambda);
    metadata([metadata_generated()]);
}