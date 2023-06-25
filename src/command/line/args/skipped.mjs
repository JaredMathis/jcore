import { integer_value_2 } from '../../../integer/value/2.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_skip } from '../../../list/skip.mjs';
import { list_to } from '../../../list/to.mjs';
export function command_line_args_skipped() {
    arguments_assert(arguments, []);
    let v = process.argv;
    let args_command_line = list_to(v);
    let v_2 = integer_value_2();
    let skipped = list_skip(args_command_line, v_2);
    return skipped;
    metadata([]);
}