import { integer_value_2 } from '../../../integer/value/2.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_skip } from '../../../list/skip.mjs';
import { list_to } from '../../../list/to.mjs';
export function command_line_args_skipped() {
    arguments_assert(arguments, []);
    let args_command_line = list_to(process.argv);
    let skipped = list_skip(args_command_line, integer_value_2());
    return skipped;
    metadata([]);
}