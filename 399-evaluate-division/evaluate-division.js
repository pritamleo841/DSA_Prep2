/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  /**
    - This below solution code uses a graph representation to store 
    the variable pairs and their corresponding values. 

    - It then uses a Depth-First Search (DFS) algorithm to evaluate 
    each query by traversing the graph and calculating the result.
    
    - The evaluateQuery function takes care of the DFS traversal.
   */  
   //build graph --- (1)
   
   let graph = {};
   for(let i=0;i<equations.length;i++){
        let [numerator,denominator] = equations[i];
        let value = values[i];
        if(!graph[numerator]){
            graph[numerator]={};
        }
        if(!graph[denominator]){
            graph[denominator]={};
        }
        graph[numerator][denominator]=value;
        graph[denominator][numerator]=1/value; //directed graph
    }
    //evaluate each query --- (2) //dfs traveral
    const evaluate = (numerator,denominator,visited)=>{
        if(!(numerator in graph) || !(denominator in graph)){
            return -1.0;
        }
        if(numerator === denominator){
            return 1.0;
        }

        visited.add(numerator);
        let neighbours = graph[numerator];

        for(let neighbour in neighbours){
            if(!visited.has(neighbour)){
                let result = evaluate(neighbour,denominator,visited);
                if(result!==-1.0){
                    return neighbours[neighbour]*result;
                }
            }
        }
        return -1.0;
    };
    //now process each query --- (3)
    let results =[];
    for(let query of queries){
        let [numerator,denominator]=query;
        let visited = new Set();
        let result = evaluate(numerator,denominator,visited);
        results.push(result);
    }
    return results;
};