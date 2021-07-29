const asyncBar = async () => 'Some string!';

const foo = async () => {
  const str = await asyncBar();
  console.log(str);
};

foo();
