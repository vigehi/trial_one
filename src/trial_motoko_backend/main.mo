import Http "mo:base/Http";
import Text "mo:base/Text";

actor {

  public query greet(name: Text): async Text {
    return "Hello, " # name # "!";
  };

  public query signIn(username: Text, password: Text): async Text {
    let url = "https://farm-x64x.onrender.com/users/signin";
    let requestBody = {
      "username": username,
      "password": password
    };

    try {
      let response = await Http.post(url, { body = Http.encodeJson(requestBody) });
    
      if (response.status == Http.StatusCodes.OK) {
        let responseBody = Http.decodeJson(response.body);
        let token = responseBody.token;
        return token;
      } else {
        return "Failed to sign in. Please try again.";
      }
    } catch {
      return "An error occurred while signing in. Please try again later.";
    }
  };


};
