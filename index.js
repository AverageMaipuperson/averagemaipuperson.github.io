import { initCppJs, Test } from './native/test.h'; 

async function run() {
    await initCppJs({ path: './' }); 

    const instance = new Test();
    console.log("C++ working!", instance);
}

run();
