import { todo } from '../../todo.mjs';
import { string_is } from '../is.mjs';
export function string_identifier_is(value) {
    todo(`Make this better (i.e. only letters and underscores and numbers or something)`);
    return string_is(value);
}