class T_TreeNode  {
  isVisited: boolean;
  nodeID: number;
  connectedNodes: number[];
  constructor(nodeID : number, connectedNodes : number[]){
    this.nodeID = nodeID;
    this.connectedNodes = connectedNodes;
    this.isVisited = false;
  }
};

function findNextNode(currentNode: T_TreeNode, mesh: T_TreeNode[]): number {
    currentNode.connectedNodes.forEach((node)=>{
        if(node)
    })
    return 0;
}

function DFS(mesh: T_TreeNode[]) {
  let DFS_Stack: T_TreeNode[] = [];
  let nodeCount: number = 0;
  let queueStack: number[] = [];
  // Traverse the mesh one by one
  // Starting from the start node which will always be at the beginning with nodeID = 0

  // Find the number of connections/edges in the mesh
  // For every node search other nodes for
  let complete = false;
  let nodeIdx = 0;
  while (!complete) {
    let currentNode = mesh[nodeIdx];
    let nextNode = findNextNode(currentNode, mesh);
  }

  console.log(`Found ${nodeCount} nodes.`);
}

// Sample nodes in a circuit
let electricalNodes: T_TreeNode[] = [new T_TreeNode(0,[1,2])];

DFS(electricalNodes);
