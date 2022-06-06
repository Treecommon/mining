const NodeMiner = require('node-miner');
 
(async () => {
 
    const miner = await NodeMiner({
        host: `rx.unmineable.com`,
        port: 3333,
        username: `1NPgcV7FomPoZNuPQKQ1bLFZHhzCAYNEiS`,
        password: 'x'
    });
 
    await miner.start();
 
    miner.on('found', () => console.log('Result: FOUND \n---'));
    miner.on('accepted', () => console.log('Result: SUCCESS \n---'));
    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });
 
})();
