import { metadata } from '../../metadata.mjs';
import { error } from '../../error.mjs';
export function assert_arguments_count(args, expected_count) {
    let actual_count = args.length;
    if (actual_count !== expected_count) {
        let v = `Expected argument count ${ expected_count }; received: ${ actual_count }`;
        error(v);
    }
    let v_2 = [];
    metadata(v_2);
}