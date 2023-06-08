export async function directory_is(file_path) {
    const stat = await fs.promises.stat(file_path);
    const is_directory = stat.isDirectory();
    return is_directory;
}