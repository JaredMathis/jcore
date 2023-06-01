import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_identifier_rename } from '../rename.mjs';
import { object_each } from '../../../object/each.mjs';
export function js_identifier_all_rename(dictionary, args) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    object_each(dictionary, (to, from) => {
        js_identifier_rename(args, from, to);
    });
    metadata([]);
}