export class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export function printTree(root) {
    let result = "";
    let queue = [root];
    let level = 0;

    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelString = "";

        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift();
            levelString += currentNode.value;

            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }

        result += `${levelString}\n`;
        level++;
    }

    return result;
}
