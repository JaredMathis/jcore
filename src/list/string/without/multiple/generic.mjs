import { list_adder_unique } from '../../../adder/unique.mjs';
export function list_string_without_multiple_generic(prefixes, strings, predicate, mapper) {
    return list_adder_unique(function v_3(la) {
        for (let p of prefixes) {
            for (let s of strings) {
                let v_2 = predicate(s, p);
                if (v_2) {
                    const v = mapper(s, p);
                    la(v);
                }
            }
        }
    });
}