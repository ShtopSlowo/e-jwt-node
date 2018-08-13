const serverRunMessage = (port, info) => {
  console.log('\x1b[36m%s\x1b[0m',
    `
    Server running on ${port} port.`,
    '\x1b[35m',
    `
    Link: http://localhost:${port}`,
    '\x1b[33m',
    `
  [info]`,
    '\x1b[32m',
    `
    ${info
    ? `${info}\n`
    : '^_^ No additional info!'}`,
    '\x1b[0m');
};

module.exports = { serverRunMessage };
