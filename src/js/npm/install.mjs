import { command_line } from '../../command/line.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../../string/is.mjs';
export function js_npm_install(npm_package_name) {
    arguments_assert(arguments, [string_is]);
    command_line;
}