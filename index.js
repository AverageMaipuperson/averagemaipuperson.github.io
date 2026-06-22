import { initCppJs, Test } from './test.js'; 

async function run() {
    await initCppJs({ path: './' }); 

    const instance = new Test();
    console.log("C++ working!", instance);
}

run();
