import { list_skip } from '../../../list/skip.mjs';
import { list_to } from '../../../list/to.mjs';
export function command_line_args_skipped() {
    let args_command_line = list_to(process.argv);
    let skipped = list_skip(args_command_line, 2);
    return skipped;
}