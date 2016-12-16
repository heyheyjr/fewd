$(document).ready(function(){	
	/*********** PUT THINGS HERE ****************/
	$("#return5th_submit").click(function(){				
		var fifth = $("#return5th_input").val().charAt(4);
		$("#return5th_display").html(fifth);
	})

	/**** JR Notes: When clicking the submit button, 
	run a function which will store the fifth element of text by
	- Grabbing all text input
	- Selecting the fifth character
	Then replace the value in the display wiht the fifth var.****/

	$("#returnLast_submit").click(function(){				
		var text = $("#returnLast_input").val();
		var slast = text.charAt(text.length-2);
		$("#returnLast_display").html(slast);
	})

	/**** JR Notes: When clicking the submit button,
	run a funtion where you store all the text input to the text input
	then select the second to last letter from the input
	then replace the value in the display with the second to last letter as stored ***/

	$("#helloworld_submit").click(function(){
		var hello = "Hello World"
		$("#helloworld_display").html(hello);
	})
	
	/** JR Notes: When clicking the submit button run a function that inserts the html "Hello World" **/

	$("#greet1_submit").click(function(){
		var name = $("#greet1_input").val();
		var greet= "Hello " + name + " welcome to the website";
		$("#greet1_display").html(greet);
	})

	/**** ***/

	var nameA= "Alice"
	var nameB= "Bob"
	var nameJ= "Juliana"

	$("#greet2_submit").click(function(){
		
		var nameinput = $("#greet2_input").val();

		if(nameinput == nameA) {
			var greet = "Hello " + nameA + " welcome to the website";
			$("#greet2_display").html(greet);
		}

		else if (nameinput == nameB) {
			var greet = "Hello " + nameB + " welcome to the website";
			$("#greet2_display").html(greet);
		}

		else if (nameinput == nameJ) {
			var greet = "Hello " + nameJ + " welcome to the website";
			$("#greet2_display").html(greet);
		}

		else{
			$("#greet2_display").html("I don't know you.")
		}
	})

	/*** Take in the information from submit, and give the input a value
	if it is alice, display alice
	if it is bob, display bob
	if it is juliana, display juliana
	otherwise, say who are you **/


	$("#factoral_submit").click(function(){
		var factoral = $("#factoral_input").val();
		var solution = 1;
		for (var x = 1; x <= factoral; x++){
			solution = solution * x;
		}

		$("#factoral_display").html(solution);
		})


		/** Have the click and have the input as a value
		Make a variable to be the solution
		Then in a loop starting at one, up to the input factoral, w an increment of one
		The solution is multiplied by x which is every value between the factoral and one
	})

	/*** STOP PUTTING THINGS HERE *****/	
});	
