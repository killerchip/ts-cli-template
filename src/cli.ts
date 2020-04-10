import commander from 'commander';

const parseArguments = (program = commander) => {
    program
        .description('A starter template for TS based CLI creation.')
        .name('ts-cli-template')
        .usage('<source-file> [options] arguments')
        .option('-o <option>', 'sample option');

    program.parse(process.argv);

    return { options: program.opts(), args: program.args };
};

export default parseArguments;
