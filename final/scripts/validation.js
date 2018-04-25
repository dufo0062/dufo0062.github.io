function validation_init(){

	$('#btn-submit').on('click', function(event){
		event.preventDefault();

		var required_error = required_check();
		var validate_error = validate_input();

		if(!required_error && !validate_error) {
			alert('Thank you for sending us a message. We will respond promptly to your inquiries.');
		} else {
			alert('Please review your message, and correct the indicated errors.');
		}
	});
}

// REQUIRED FIELD CHECK BEGINNING
function required_check() {

	//Used to check for presence/absence of required text in input boxes and text areas.
	var required_inputs = $('.required input, .required textarea');
	var has_error = false;

	$.each(required_inputs, function(input_index, req_input) {
		
		var required_container = $(req_input).closest('.input-container');
		var input_label = $(required_container).find('.label-text').text();
		var feedback = $(required_container).find('.feedback');
		var input_val = $(req_input).val().trim();

		// Feedback for presence/absence of text in input boxes and text areas
		$(feedback).fadeOut(0);
		if(input_val=='') {

			$(required_container).addClass('has-error');
			$(required_container).removeClass('has-success');
			has_error = true;

			$(feedback).text('Please complete the "'+input_label+'" field.');

		} else {

			$(required_container).addClass('has-success');
			$(required_container).removeClass('has-error');

			$(feedback).text('The "'+input_label+'" field has been properly completed.');
		}

		$(feedback).fadeIn(300);


	});

	//Used to check for completion of required checkboxes.
	var required_checkbox_containers = $('.required-checkbox');

	$.each(required_checkbox_containers, function(req_check_container_index, req_check_container){

		var required_checkboxes = $(req_check_container).find('input[type=checkbox]');
		var checkbox_feedback = $(req_check_container).find('.feedback');
		var checkbox_label = $(req_check_container).find('.label-text').text();
		var check_counter = 0;

		$(checkbox_feedback).fadeOut(0);

		// Feedback for copletion/lack of completion of checkboxes
		$.each(required_checkboxes, function(req_check_index, req_check){

			if($(req_check).prop('checked')) {
				check_counter++;
			}

		});

		if(check_counter>0) {
			$(req_check_container).addClass('has-success');
			$(req_check_container).removeClass('has-error');
			$(checkbox_feedback).text('This field has been properly completed.');

		} else {
			$(req_check_container).removeClass('has-success');
			$(req_check_container).addClass('has-error');
			$(checkbox_feedback).text('Please select one or more checkboxes.');
			has_error = true;

		}

		$(checkbox_feedback).fadeIn(300);
	});

	return has_error;
}
// REQUIRED FIELD CHECK END


// INPUT FORMAT VALIDATION BEGINNING
function validate_input() {

	var validate_inputs = $('.validate input');
	var validation_error = false;

	$.each(validate_inputs, function(input_index, validate_input) {

		var validate_container = $(validate_input).closest('.input-container');
		var input_label = $(validate_container).find('.label-text').text();
		var input_val = $(validate_input).val().trim();
		var feedback = $(validate_container).find('.feedback');
		var validation_type = $(validate_input).attr('data-validation-type');
		var feedback_text = "";
		var has_error = false;
 		

		if(input_val!='') {

			$(feedback).fadeOut(0);

			// Used to check for unwanted spaces in name fields.
			if(validation_type=='text') {

				if(input_val.match(/\s/g)) {
					feedback_text = 'Please remove spaces from the "'+input_label+'" field.';
					has_error = true;
				}
			}

			// Used to check for proper phone number format. 
			if(validation_type=='phone') {
				pattern =  /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
				if(!input_val.match(pattern)) {
					feedback_text = '"'+input_label+'" must be of the format 111-222-3333.';
					has_error = true;
				}
			}

			// Used to check for proper e-mail format. 
			if(validation_type=='email') {
				pattern = /(.+)@(.+){2,}\.(.+){2,}/;

				if(!input_val.match(pattern)) {
					feedback_text = 'The value entered in the "'+input_label+'" field is not valid.';
					has_error = true;

				}
			}

			// Validation error messages
			if(has_error) {
				$(validate_container).removeClass('has-success');
				$(validate_container).addClass('has-error');
				validation_error = true;
			} else {
				$(validate_container).removeClass('has-error');
				$(validate_container).addClass('has-success');
				feedback_text = 'The "'+input_label+'" field has been properly completed.';
 			}

			$(feedback).html(feedback_text);
			$(feedback).fadeIn(300);
		}

	});

	return validation_error;

}
// INPUT FORMAT VALIDATION END