var config = {
    apiKey: "AIzaSyCAKNhHVoGUJLvTkCVYFP1NhtVC_3rFrwk",
    authDomain: "blog-8844e.firebaseapp.com",
    databaseURL: "https://blog-8844e.firebaseio.com",
    projectId: "blog-8844e",
    storageBucket: "blog-8844e.appspot.com",
    messagingSenderId: "841236522958"
  };
  firebase.initializeApp(config);

var messageRef=firebase.database().ref('comments');

document.getElementById('blog').addEventListener('submit', submitForm);

function submitForm(e){
	e.preventDefault();

	var comment=getInputVal('comment');
	var selectedGender;
	document.getElementsByName("check").forEach(function(elm) {
	  if (elm.checked) {
	    selectedGender = elm.value;
	  }
	})
	// console.log(comment);
	saveMessage(comment, selectedGender);
	window.location.href="";
}

function getInputVal(id){
	return document.getElementById(id).value;


}

function saveMessage(comment, selectedGender){
	var newmessageRef=messageRef.push();
	newmessageRef.set({
		comment:comment,
		checked: selectedGender
	});
}




