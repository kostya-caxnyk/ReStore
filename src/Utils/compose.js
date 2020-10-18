const compose = (...funcs) => (Wrapped) => {
  return funcs.reduceRight((acc, func) => {
    return func(acc);
  }, Wrapped);
};

export default compose;
