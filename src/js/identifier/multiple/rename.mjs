import { js_mapper_args_is } from '../../mapper/args/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_identifier_rename } from '../rename.mjs';
import { object_each } from '../../../object/each.mjs';
import { defined_is } from '../../../defined/is.mjs';
export function js_identifier_multiple_rename(dictionary, args) {
    arguments_assert(arguments, [
        defined_is,
        js_mapper_args_is
    ]);
    let changed = false;
    object_each(dictionary, (to, from) => {
        if (js_identifier_rename(args, from, to)) {
            changed = true;
        }
    });
    return changed;
    metadata([]);
}