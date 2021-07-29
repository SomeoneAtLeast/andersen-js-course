const sequentialGetData = () => {
  const dataArr = [];

  fetch('http://www.json-generator.com/api/json/get/cevhxOsZnS')
    .then(data => data.json())
    .then(data => dataArr.push(data))
    .then(() => {
      fetch('http://www.json-generator.com/api/json/get/cguaPsRxAi')
        .then(data => data.json())
        .then(data => dataArr.push(data));
    })
    .then(() => {
      fetch('http://www.json-generator.com/api/json/get/cfDZdmxnDm')
        .then(data => data.json())
        .then(data => dataArr.push(data));
    })
    .then(() => {
      fetch('http://www.json-generator.com/api/json/get/cfkrfOjrfS')
        .then(data => data.json())
        .then(data => dataArr.push(data));
    })
    .then(() => {
      fetch('http://www.json-generator.com/api/json/get/ceQMMKpidK')
        .then(data => data.json())
        .then(data => dataArr.push(data));
    })
    .then(() => console.log(dataArr));
};

sequentialGetData();

const parallelGetData = () => {
  const urls = [
    'http://www.json-generator.com/api/json/get/cevhxOsZnS',
    'http://www.json-generator.com/api/json/get/cguaPsRxAi',
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
    'http://www.json-generator.com/api/json/get/ceQMMKpidK',
  ];

  const requests = urls.map(url => fetch(url));

  Promise.all(requests)
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(users => console.log(users));
};

parallelGetData();
