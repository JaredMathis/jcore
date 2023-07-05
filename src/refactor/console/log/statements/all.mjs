import { log } from '../../../../log.mjs';
import { js_mapper_args_is } from '../../../../js/mapper/args/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function refactor_console_log_statements_all(args) {
    arguments_assert(arguments, [js_mapper_args_is]);
    let {parsed} = args;
    log({ parsed });
}