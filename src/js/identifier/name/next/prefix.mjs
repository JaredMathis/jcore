import { string_to } from '../../../../string/to.mjs';
import { string_identifier_with_prefix } from '../../../../string/identifier/with/prefix.mjs';
import { list_contains } from '../../../../list/contains.mjs';
import { js_identifiers } from '../../../identifiers.mjs';
export function js_identifier_name_next_prefix(identifier_next_prefix, parsed) {
    let identifier_next = identifier_next_prefix;
    let identifiers = js_identifiers(parsed);
    let c = 2;
    while (list_contains(identifiers, identifier_next)) {
        identifier_next = string_identifier_with_prefix(identifier_next_prefix, string_to(c));
        c++;
    }
    return identifier_next;
}