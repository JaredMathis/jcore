import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { todo } from '../../todo.mjs';
import { string_is } from '../is.mjs';
export function string_identifier_is(value) {
    arguments_assert(arguments, [tautology]);
    todo(`Make this better (i.e. only letters and underscores and numbers or something)`);
    return string_is(value);
    metadata([]);
}