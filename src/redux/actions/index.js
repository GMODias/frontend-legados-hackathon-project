export const addAssignment = (value) => ({
  type: 'ADD_ELEMENT',
  ...value,
});

export const removeAssignment = () => ({
  type: 'REMOVE_ELEMENT',
});
