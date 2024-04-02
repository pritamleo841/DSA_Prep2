/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    const choices=['A','C','G','T'];
    const queue=[startGene];
    const seen=new Set([startGene]);

    let steps=0;
    while(queue.length!=0){
        const n = queue.length;
        for(let i=0;i<n;i++){
            const node = queue.shift();
            if(node===endGene)return steps;
            for(const choice of choices){
                for(let j=0;j<node.length;j++){
                    const neighbor = node.substring(0,j)+choice+node.substring(j+1);

                    if(!seen.has(neighbor) && bank.includes(neighbor)){
                        queue.push(neighbor);
                        seen.add(neighbor);
                    }
                }
            }
        }
        steps++;
    }
    return -1;
};