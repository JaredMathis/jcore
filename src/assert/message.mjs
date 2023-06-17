import { metadata } from '../metadata.mjs';
import { error } from '../error.mjs';
import { assert_arguments_count } from './arguments/count.mjs';
import { string_is } from '../string/is.mjs';
export function assert_message(value, message) {
    assert_arguments_count(arguments, 2);
    if (!(string_is(message))) {
        error('invalid message');
    }
    if (value === true) {
        return;
    }
    error(message);
    metadata([]);
}