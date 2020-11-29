const firebaseConfig = {
  apiKey: "AIzaSyC24HT6kDsCPEanxpghympi1exgzcOIFtA",
  authDomain: "t-confess.firebaseapp.com",
  databaseURL: "https://t-confess.firebaseio.com",
  projectId: "t-confess",
  storageBucket: "t-confess.appspot.com",
  messagingSenderId: "1089820442716",
  appId: "1:1089820442716:web:b1c20556ecef8dc36a2699",
  measurementId: "G-8TPMGG146M"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  const db = firebase.firestore();
  var email = document.querySelector("#Email1");
  var forName = document.querySelector("#abcd");
  var message = document.querySelector("#confmess");
  var v1 = document.querySelector("#view").classList;
  function publishMessage(){
    var d = new Date();
    var n = d.getTime();
    if(email.value!=""&&forName.value!=""&&message.value!="")
  {
      if(email.value.includes('thapar.edu')&&email.value.includes('_be'))
      {
          db.collection('confessions').add({
            email: email.value,
            for:forName.value,
            message: message.value,
            time: 0-n

          })
        
          alert("Confession added")
      }
      else
      {
        alert("You have to enter only your Thapar email")
      }
  }
  else
  {
    alert("You need to enter all the fields");
  }
  console.log(email,n,forName,message)
  }
  var i=0;
  function view(){
    v1.add("hide");
    console.log("clicked");
    if(i==0)
    {
      db.collection("confessions").orderBy("time","asc").limit(100).onSnapshot(function(querySnapshot){
        querySnapshot.docChanges().forEach(function(change){
            if(change.type=="added"){
                console.log(change.doc.data());
              
                document.querySelector(".mystyle").innerHTML += "<div class='messages animate__animated animate__fadeIn '><h5 class='forWhom' >"+ "For: " + change.doc.data().for + "</h5><p>" + change.doc.data().message + "</p></div>"    
            }
        })
    })
    
    i=1;
    }
   
}  
 
  