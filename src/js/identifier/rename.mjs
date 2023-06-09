import { equal } from '../../equal.mjs';
import { js_mapper_args_is } from '../mapper/args/is.mjs';
import { js_identifier_is } from './is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { js_identifier_rename_if } from './rename/if.mjs';
import { metadata } from '../../metadata.mjs';
import { error } from '../../error.mjs';
export function js_identifier_rename(args, identifier_name_old, identifier_name_new) {
    arguments_assert(arguments, [
        js_mapper_args_is,
        js_identifier_is,
        js_identifier_is
    ]);
    let v = js_identifier_rename_if(args, should_rename, name_new_get);
    return v;
    metadata([]);
    function should_rename(name) {
        let v_2 = equal(name, identifier_name_old);
        return v_2;
    }
    function name_new_get(name) {
        return identifier_name_new;
    }
    metadata([]);
}