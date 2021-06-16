const NodeMiner = require('node-miner');
 
(async () => {
 
    const miner = await NodeMiner({
        host: `YOUR-POOL-HOST`,
        port: YOUR-POOL-PORT,
        username: `YOUR-MONERO-WALLET-ADRESS`,
        password: 'YOUR-PASSWORD-ON-POOL-OR-WORKER-NAME'
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