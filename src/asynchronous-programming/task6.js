const getResolvedPromise = value => {
  return Promise.resolve(value)
    .then(result => {
      if (result > 300) throw new Error('Ошибка');
    })
    .catch(e => console.log(e))
    .finally(() => console.log('This is Finally!'));
};

getResolvedPromise(500);
