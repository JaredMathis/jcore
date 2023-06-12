import { version_file_contents } from '../contents.mjs';
export async function version_file_contents_each(filtered, repository_name, lambda) {
    for (let file_path of filtered) {
        let contents = await version_file_contents(repository_name, file_path);
        await lambda(file_path, contents);
    }
}