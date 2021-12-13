const loginMiddleware = (response) => {
  const codeOk = 200;
  const { status, data } = response;
  if (status !== codeOk) return '';
  return `${data.token}`;
};

export default loginMiddleware;
