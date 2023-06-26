import { metadata } from '../../metadata.mjs';
import { command_line } from '../../command/line.mjs';
import { string_is } from '../../string/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function js_npm_uninstall(npm_package_name) {
    arguments_assert(arguments, [string_is]);
    let v = `npm uninstall ${ npm_package_name }`;
    await command_line(v);
    metadata([]);
}