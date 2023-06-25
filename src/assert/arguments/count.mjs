import { metadata } from '../../metadata.mjs';
import { error } from '../../error.mjs';
export function assert_arguments_count(args, expected_count) {
    let actual_count = args.length;
    let v = actual_count !== expected_count;
    if (v) {
        error(`Expected argument count ${ expected_count }; received: ${ actual_count }`);
    }
    metadata([]);
}