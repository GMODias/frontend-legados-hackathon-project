const registerMiddleware = (response) => {
  const codeCreated = 201;
  const { status } = response;
  if (status !== codeCreated) return '';
  return 'Usuário cadastrado com sucesso';
};

export default registerMiddleware;
