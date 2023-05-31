import { metadata } from '../metadata.mjs';
export async function refactor_multiple(args, refactors) {
    for (let r of refactors) {
        await r(args);
    }
    metadata([]);
}