import { visit } from "../visit.mjs";

export function visit_filter(root, children_get, filter, lambda) {
    visit(root, children_get, node => {
        if (filter(node)) {
            lambda(node)
        }
    })
}