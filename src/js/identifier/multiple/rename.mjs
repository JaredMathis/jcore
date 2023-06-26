import { boolean_value_true } from '../../../boolean/value/true.mjs';
import { boolean_value_false } from '../../../boolean/value/false.mjs';
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
    let occurs = boolean_value_false();
    let v_3 = function v(to, from) {
        let v_2 = js_identifier_rename(args, from, to);
        if (v_2) {
            occurs = boolean_value_true();
        }
    };
    object_keys_each(dictionary, v_3);
    return occurs;
    metadata([]);
}