/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
  name: "Mamede Lessa",        
  friends: 300,            
  messages: ["Hello world!", "Having a great day!"],

  
  postMessage: function(message) {
    this.messages.push(message);
  },

  
  deleteMessage: function(index) {
    if (index >= 0 && index < this.messages.length) {
      this.messages.splice(index, 1);
    } else {
      console.log("Invalid Indice!");
    }
  },

  
  addFriend: function() {
    this.friends++;
  },

  
  removeFriend: function() {
    if (this.friends > 0) {
      this.friends--;
    }
  }
};


facebookProfile.postMessage("This is my new post!");
facebookProfile.deleteMessage(0);
facebookProfile.addFriend();
facebookProfile.removeFriend();

console.log(facebookProfile);
