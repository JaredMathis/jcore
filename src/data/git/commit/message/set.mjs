export function data_git_commit_message_set(message) {
    await data_key_value_set(data_task_id(), task_id);
}