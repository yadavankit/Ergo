$(document).ready(function() {
	$('#searchDoctorForm').submit(function(event) {
		if($('#pac_input').val() == ""){
			swal('Warning','Please Enter Address','error');
			return false; 
		}else{
			return true;
		}
	});
	$('#loginForm').submit(function(event) {
		event.preventDefault();
		if($('#login_email').val() == ""){
			swal('Warning','Please Enter Email','error');
			return false; 
		}else if($('#login_password').val() == ""){
			swal('Warning','Please Enter Password','error');
			return false; 
		}else{
			$.ajaxSetup({
				headers: {'X-CSRF-Token': $('meta[name=_token]').attr('content')}
			});
			var url  = $('#loginForm').attr('action');
			$.ajax({
				url: url,
				type: 'POST',
				data: $('#loginForm').serialize(),
				success: function (data) {
					console.log(data);
					if(data.flag){
						window.location.href = data.next_url;
					}else{
						$('.loginModal').modal('toggle');
						swal('Oops',data.message,'error');  
					}
				}
			});
		}	
	});
	$('#registerForm').submit(function(event) {
		event.preventDefault();
		if($('#reg_name').val() == ""){
			swal('Warning','Please Enter Name','error');
			return false; 
		}else if($('#reg_mobile').val() == ""){
			swal('Warning','Please Enter Mobile Number','error');
			return false; 
		}else if($('#reg_email').val() == ""){
			swal('Warning','Please Enter Email','error');
			return false; 
		}else if($('#reg_password').val() == ""){
			swal('Warning','Please Enter Password','error');
			return false; 
		}else if($('#reg_role').val() == ""){
			swal('Warning','Please Select User type','error');
			return false; 
		}else{
			$.ajaxSetup({
				headers: {'X-CSRF-Token': $('meta[name=_token]').attr('content')}
			});
			var url  = $('#registerForm').attr('action');
			$.ajax({
				url: url,
				type: 'POST',
				data: $('#registerForm').serialize(),
				success: function (data) {
					console.log(data);
					if(data.flag){
						$('.loginModal').modal('toggle');
						swal('Success',data.message,'success');
					}else{
						$('.loginModal').modal('toggle');
						swal('Oops',data.message,'error');  
					}
				}
			});
		}
	});
	$('#doctorEditForm').submit(function(event) {
		if($('#name').val() == ""){
			swal('Warning','Please Enter Name','error');
			return false; 
		}else if($('#spacialization').val() == null){
			swal('Warning','Please Select Specialization','error');
			return false; 
		}else if($('#profile_pic').val() == ""){
			swal('Warning','Please Upload Profile Image','error');
			return false; 
		}else if($('#primary_contact').val() == ""){
			swal('Warning','Please Enter Primary Contact Number','error');
			return false; 
		}else if($('#address1').val() == ""){
			swal('Warning','Please Enter Address1','error');
			return false; 
		}else if($('#operational_days1').val() == null){
			swal('Warning','Please Select operational days for Address 1','error');
			return false; 
		}else if($('#clinic_images').val() == ""){
			swal('Warning','Please Select Clinic images','error');
			return false; 
		}else if($('#address2').val() != ""){
			if($('#operational_days2').val() == null){
				swal('Warning','Please Select operational days for Address 2','error');
				return false; 
			}
		}else{
			return true;
		}
	});
});