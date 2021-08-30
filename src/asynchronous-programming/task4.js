const getUsersData = () => {
  fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
    .then(response => response.json())
    .then(obj => obj.getUsersData)
    .then(data => {
      if (data) {
        fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
          .then(response => response.json())
          .then(users => console.log(users));
      }
    });
};

getUsersData();
