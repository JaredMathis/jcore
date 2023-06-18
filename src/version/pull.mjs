import { not } from '../not.mjs';
import { file_json_write } from '../file/json/write.mjs';
import { version_path_file_next } from './path/file/next.mjs';
import { version_property_file_path } from './property/file/path.mjs';
import { list_remove_multiple_property_exists } from '../list/remove/multiple/property/exists.mjs';
import { version_property_commit_id } from './property/commit/id.mjs';
import { version_path_commit } from './path/commit.mjs';
import { database_reference_get_data } from '../database/reference/get/data.mjs';
import { database_value_get } from '../database/value/get.mjs';
import { database_reference } from '../database/reference.mjs';
import { version_document_path_commit } from './document/path/commit.mjs';
import { database_document_info_reference } from '../database/document/info/reference.mjs';
import { database_firestore_get } from '../database/firestore/get.mjs';
import { version_property_commit_latest } from './property/commit/latest.mjs';
import { database_transaction } from '../database/transaction.mjs';
import { version_collection_repository } from './collection/repository.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { range } from '../range.mjs';
import { add_1 } from '../add/1.mjs';
import { list_single } from '../list/single.mjs';
import { version_property_part_id } from './property/part/id.mjs';
import { assert } from '../assert.mjs';
import { list_empty } from '../list/empty.mjs';
import { file_exists } from '../file/exists.mjs';
export async function version_pull(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let db = database_firestore_get();
    let database_collection_name = version_collection_repository(repository_name);
    const property_commit_latest = version_property_commit_latest();
    let info_refererence = database_document_info_reference(db, database_collection_name);
    await database_transaction(db, async function v_5(transaction) {
        let info_data = await database_reference_get_data(transaction, info_refererence);
        let commit_latest_value = object_property_get(info_data, property_commit_latest);
        for (let i of range(commit_latest_value)) {
            let commit_version = add_1(i);
            let document_path_commit = version_document_path_commit(commit_version);
            let commit_refererence = database_reference(db, database_collection_name, document_path_commit);
            let commit_data = await database_reference_get_data(transaction, commit_refererence);
            let commit_value = database_value_get(commit_data);
            const property_commit_id = version_property_commit_id();
            let commits = list_remove_multiple_property_exists(commit_value, property_commit_id);
            let commit = list_single(commits);
            const property_part_id = version_property_part_id();
            let parts = list_remove_multiple_property_exists(commit_value, property_part_id);
            let v = list_empty(commit_value);
            assert(v);
            let commit_path = version_path_commit(repository_name, commit_version);
            await file_json_write(commit_path, commit);
            for (let part of parts) {
                let v_2 = version_property_file_path();
                let part_file_path = object_property_get(part, v_2);
                let part_path = await version_path_file_next(repository_name, part_file_path);
                let v_4 = await file_exists(part_path);
                let v_3 = not(v_4);
                assert(v_3);
                await file_json_write(part_path, part);
            }
        }
    });
}