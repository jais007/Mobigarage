  
    var uid =fireabase.auth().currentuser.uid
    firebase.database().ref('/users/' + uid).once('value').then(function(snapshot) {
        //var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
          document.getElementById("userMobile").innerText =  snapshot.val().mobile;
          document.getElementById("userAge").innerText = snapshot.val().age;
          document.getElementById("userGender").innerText = snapshot.val().gender;      
      });
      


      user.updateProfile({
        displayName: document.getElementById('fullname').value,
        photoURL: "https://image.flaticon.com/icons/png/512/64/64572.png"
      }).then(function() {
        // Update successful.
      }).catch(function(error) {
        // An error happened.
      });  