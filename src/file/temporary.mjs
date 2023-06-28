import { file_delete } from './delete.mjs';
import { file_read } from './read.mjs';
import { log } from '../log.mjs';
import { file_exists } from './exists.mjs';
import { file_write } from './write.mjs';
import { try_catch_finally_async } from '../try/catch/finally/async.mjs';
import { guid_generate } from '../guid/generate.mjs';
export async function file_temporary(contents, logic) {
    let file_path_temporary = `${ guid_generate() }.txt`;
    await try_catch_finally_async(async function v() {
        await file_write(file_path_temporary, contents);
        await logic();
    }, async function v_2() {
        if (await file_exists(file_path_temporary)) {
            log(await file_read(file_path_temporary));
            await file_delete(file_path_temporary);
        }
    });
    return file_path_temporary;
}