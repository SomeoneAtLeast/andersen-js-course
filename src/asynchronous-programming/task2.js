const parseJSON = (jsonStr, successCb, failureCb) => {
  try {
    const result = JSON.parse(jsonStr);
    successCb(result);
  } catch (e) {
    failureCb(e);
  }
};

const successCb = result => {
  console.log('Success parse!');
  console.log(result);
};

const failureCb = error => {
  console.log('Failure parse!');
  console.log(error);
};

parseJSON('{"x": 10}', successCb, failureCb);
parseJSON('{x}', successCb, failureCb);
