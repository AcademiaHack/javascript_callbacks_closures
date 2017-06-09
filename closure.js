function serviceImage(imageURL, callback){
  //console.log(callback);
  setTimeout(function() {
    //TODO: CONSEGUIR LA IMAGEN DESDE imageURL
    var image;
    //console.log(callback);
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
  setTimeout(function() {
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
  }, 1000);
}

function userList(callback) {
  var list = [];
  serviceUsers(function(users){
    for(user of users) {
      var listUser = {
        avatar: "",
        user_name: user.name
      };
      imageWraper(user, users, list, listUser, callback)();
    }
  });
}

function imageWraper(user, users, list, listUser, callback) {
  return (function() {
    serviceImage(user.imageUrl, function(image) {
      listUser.avatar = image;
      list.push(listUser);
      if(users.length == list.length) {
        callback(list);
      }
    });
  });
}

userList(function(list){
  console.log(list);
});
