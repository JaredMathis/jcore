import { string_prefix_without } from '../../../../string/prefix/without.mjs';
import { string_starts_with } from '../../../../string/starts/with.mjs';
import { list_adder_unique } from '../../../adder/unique.mjs';
export function list_string_prefix_without_multiple(prefixes, strings) {
    return list_adder_unique(la => {
        for (let p of prefixes) {
            for (let s of strings) {
                if (string_starts_with(s, p)) {
                    const v = string_prefix_without(s, p);
                    la(v);
                }
            }
        }
    });
}