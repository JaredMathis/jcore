import { version_file_contents } from '../contents.mjs';
export async function version_file_contents_each(repository_name, file_paths, lambda) {
    for (let file_path of file_paths) {
        let contents = await version_file_contents(repository_name, file_path);
        await lambda(file_path, contents);
    }
    metadata([]);
}