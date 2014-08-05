var gitHubProfile = [

  {
    userName: "rphuber",
    picture: "https://avatars.githubusercontent.com/u/8245890?v=2",
    name: "Ryan Huber",
    location: "Charleston, SC",
    repos: 7,
    followers: 6,
    following: 14
  },

  {
    userName: "calweb",
    picture: "https://avatars.githubusercontent.com/u/115030?v=2",
    name: "Calvin Webster",
    location: "Charleston, SC",
    repos: 37,
    followers: 64,
    following: 96
  },

  {
    userName: "CTFigueroa",
    picture: "https://avatars.githubusercontent.com/u/8238249?v=2",
    name: "Cory Figueroa",
    location: "Charleston, SC",
    repos: 6,
    followers: 7,
    following: 8
  },

  {
    userName: "crotten",
    picture: "https://avatars.githubusercontent.com/u/8238886?v=2",
    name: "Chris Otten",
    location: "",
    repos: 6,
    followers: 9,
    following: 40
  },

  {
    userName: "ansleyjones",
    picture: "https://avatars.githubusercontent.com/u/8247044?v=2",
    name: "Ansley Jones",
    location: "",
    repos: 6,
    followers: 8,
    following: 9
  }

  ];

  function cardCreate (arr, $target){

      var card = "";

    for (var i = 0; i < arr.length; i++) {

      card += "<div class=\"card\"><img src=\""
        + arr[i].picture
        + "\" alt=\"\"><h2>"
        + arr[i].name
        + "</h2><h3>@"
        + arr[i].userName
        + "</h3><ul><li>Location: "
        + arr[i].location
        + "</li><li>No. of repos: "
        + arr[i].repos
        + "</li><li>No. of followers: "
        + arr[i].followers
        + "</li><li>No. following: "
        + arr[i].following
        + "</li></ul></div>";
    };

    $target.append(card);
  };

  cardCreate (gitHubProfile, $('.main'));

  $(document).ready(function (){



  });
