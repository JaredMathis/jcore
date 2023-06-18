import { tests_name } from '../../../tests/name.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { log } from '../../../log.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { command_line } from '../../../command/line.mjs';
import { comment } from '../../../comment.mjs';
import { tests_generate } from '../../../tests/generate.mjs';
export async function function_tests_generate_after() {
    arguments_assert(arguments, []);
    await tests_generate();
    comment(`NodeJS will not re-import ${ tests_name() } after we re-generate it so we must run through command line`);
    let cl_result = await command_line(`node run.mjs ${ tests_name() }`);
    let stdout = object_property_get(cl_result, 'stdout');
    log(stdout);
}