import { js_identifier_rename_if } from './rename/if.mjs';
import { metadata } from '../../metadata.mjs';
export function js_identifier_rename(args, identifier_name_old, identifier_name_new) {
    return js_identifier_rename_if(args, should_rename, name_new_get);
    metadata([]);
    function should_rename(name) {
        return name === identifier_name_old;
    }
    function name_new_get(name) {
        return identifier_name_new;
    }
}