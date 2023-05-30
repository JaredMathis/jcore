import { list_add } from '../../add.mjs';
import { list_contains } from '../../contains.mjs';
import { assert } from '../../../assert.mjs';
export function list_add_exists_not(stack, node) {
    assert(!list_contains(stack, node));
    list_add(stack, node);
}