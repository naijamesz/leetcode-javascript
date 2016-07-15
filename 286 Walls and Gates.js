// You are given a m x n 2D grid initialized with these three possible values.

// -1 - A wall or an obstacle.
// 0 - A gate.
// INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
// Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

// For example, given the 2D grid:
// INF  -1  0  INF
// INF INF INF  -1
// INF  -1 INF  -1
//   0  -1 INF INF
// After running your function, the 2D grid should be:
//   3  -1   0   1
//   2   2   1  -1
//   1  -1   2  -1
//   0  -1   3   4
// Hide Company Tags Google Facebook
// Show Tags
// Show Similar Problems



var wallsAndGates = function(rooms) {
    var gates = [];
    
    if(!rooms || rooms.length === 0) {
        return;
    }
    
    var rows = rooms.length;
    var cols = rooms[0].length;
    
    // find all gates
    for(var i = 0; i < rows; i++) {
        for(var j = 0; j < cols; j++) {
            if(rooms[i][j] === 0) {
                gates.push([i, j]);
            }
        }
    }
    
    // starting from all gates and traverse
    for(i = 0; i < gates.length; i++) {
        var gate = gates[i];
        traverse(rooms, gate[0], gate[1], rows, cols, 0);
    }
};

function traverse(rooms, i, j, rows, cols, dist) {
    if(i >= 0 && i < rows && j >= 0 && j < cols) {
        if(rooms[i][j] !== -1 && rooms[i][j] >= dist) {
            rooms[i][j] = dist;
            traverse(rooms, i + 1, j, rows, cols, dist + 1);
            traverse(rooms, i, j + 1, rows, cols, dist + 1);
            traverse(rooms, i - 1, j, rows, cols, dist + 1);
            traverse(rooms, i, j - 1, rows, cols, dist + 1);
        }
    }
}