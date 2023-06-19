import { not } from '../not.mjs';
import { metadata } from '../metadata.mjs';
import { error } from '../error.mjs';
import { assert_arguments_count } from './arguments/count.mjs';
import { string_is } from '../string/is.mjs';
import { assert_message_lazy } from './message/lazy.mjs';
export function assert_message(value, message) {
    assert_message_lazy(value, () => message);
    metadata([]);
}