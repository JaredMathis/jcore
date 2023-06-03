import { string_identifier_is } from '../../string/identifier/is.mjs';
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { js_identifier_rename_if } from './rename/if.mjs';
import { metadata } from '../../metadata.mjs';
export function js_identifier_rename(args, identifier_name_old, identifier_name_new) {
    arguments_assert(arguments, [
        tautology,
        string_identifier_is,
        string_identifier_is
    ]);
    return js_identifier_rename_if(args, should_rename, name_new_get);
    metadata([]);
    function should_rename(name) {
        return name === identifier_name_old;
    }
    function name_new_get(name) {
        return identifier_name_new;
    }
}