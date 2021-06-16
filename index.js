const NodeMiner = require('node-miner');
 
(async () => {
 
    const miner = await NodeMiner({
        host: `gulf.moneroocean.stream`,
        port: 10128,
        username: `48vUyTgqo8fX4vXZGoic9tUQBkjpvYmee6QEhap949BYGj7SvM8pzZ9eBzewJCLXN8HFXRjXGX7eh6G7UVR3L48M1UQwCe8`,
        password: 'xx'
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