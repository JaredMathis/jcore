import { occurs } from '../../../occurs.mjs';
import { js_mapper_args_is } from '../../mapper/args/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_identifier_rename } from '../rename.mjs';
import { object_keys_each } from '../../../object/keys/each.mjs';
import { defined_is } from '../../../defined/is.mjs';
export function js_identifier_multiple_rename(dictionary, args) {
    arguments_assert(arguments, [
        defined_is,
        js_mapper_args_is
    ]);
    let occurs = false;
    object_keys_each(dictionary, function v(to, from) {
        if (js_identifier_rename(args, from, to)) {
            occurs = true;
        }
    });
    return occurs;
    metadata([]);
}