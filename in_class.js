(function(){
  function serviceImage(imageURL, callback){
    setTimeout(function() {
      // //TODO: CONSEGUIR LA IMAGEN DESDE imageURL
      var image;
      switch (imageURL) {
        case "IMAGE_URL_1":
          image = "IMAGE 1";
          break;
        case "IMAGE_URL_2":
          image = "IMAGE 2";
          break;
        case "IMAGE_URL_3":
          image = "IMAGE 3";
          break;
        case "IMAGE_URL_4":
          image = "IMAGE 4";
          break;
      }
      callback(image);
    }, 1000);
  }

  function serviceUsers(callback) {
    setTimeout(function(){
      var users = [
        {
          id:1,
          name: 'NAME_1',
          imageUrl:'IMAGE_URL_1'
        },
        {
          id:2,
          name: 'NAME_2',
          imageUrl:'IMAGE_URL_2'
        },
        {
          id:3,
          name: 'NAME_3',
          imageUrl:'IMAGE_URL_3'
        },
        {
          id:4,
          name: 'NAME_4',
          imageUrl:'IMAGE_URL_4'
        },
      ];

      callback(users);
    },1000);
  }

  function wraper(i, users, list, userItem, callback) {
    return (function(){
      serviceImage(users[i].imageUrl, function(image){
        userItem.avatar = image;
        list.push(userItem);
        if(list.length == users.length) {
          callback(list);
        }
      });
    });
  }

  function userList(callback) {
    serviceUsers(function(users){
      var list = [];
      for (var i=0; i<users.length; i++) {
        var userItem = {
          avatar: "",
          username: users[i].name
        }
        console.log(this);
        wraper(i, users, list, userItem, callback)();
      }
    });
  }

  userList(function(list){
    console.log(list);
  });
})();
