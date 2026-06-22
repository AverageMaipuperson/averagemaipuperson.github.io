import { initCppJs, Test } from './native/MathUtils.h';

async function run() {
    await initCppJs();

    const calculator = new Test();
    
    const sum = calculator.add(40, 2);
    const squared = calculator.square(5.5);

    console.log(`Sum from C++: ${sum}`);
    console.log(`Square from C++: ${squared}`);
}

run();
