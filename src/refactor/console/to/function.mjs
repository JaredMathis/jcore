import { file_read } from "../../../file/read.mjs";

export async function refactor_console_to_function(file_path) {
    let contents = await file_read(file_path);
    console.log(contents);
}