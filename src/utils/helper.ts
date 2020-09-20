const isString = (value: any) => {
  return typeof value === "string" || value instanceof String;
};

export { isString };
