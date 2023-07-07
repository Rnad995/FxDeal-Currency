
	window.onload = function(){
	
		var currencies = document.getElementById("selectOriginDeal");
		var currenciesto = document.getElementById("selectCurrencyDeal");
		function getAll(dropdown){
			fetch('/getAllCurrencies')
		  .then(response => {
		    if (response.ok) {
		      return response.json();
		    } else {
		      throw new Error('Request failed.');
		    }
		  })
		  .then(list => {			
			
			// Check if dropdown element exists
			if (dropdown) {
			  // Loop through the list and create dropdown options
			  for (let i = 0; i < list.length; i++) {
			    const option = document.createElement('option');
			    option.text = list[i].name;
			    option.value = list[i].value;
			    dropdown.add(option);
			    selectCurrencyDeal = dropdown;
			  }
			
			} else {
			  console.error('Dropdown element not found');
			}

		  })
		  .catch(error => {
		    // Handle any errors
		    alert(error);
		  });
		}
		getAll(currencies)
		getAll(currenciesto)
		
	}
	function validateRegisterDate(input){
		var selectedDate = new Date(input.value);
	  var today = new Date();
	
	  // Set the time to midnight for both dates to compare only the dates
	  selectedDate.setHours(0, 0, 0, 0);
	  today.setHours(0, 0, 0, 0);
	
	  if (selectedDate < today) {
	    return false;
	}
	}
	function validateDate(input, errorId) {
	  var selectedDate = new Date(input.value);
	  var today = new Date();
	
	  // Set the time to midnight for both dates to compare only the dates
	  selectedDate.setHours(0, 0, 0, 0);
	  today.setHours(0, 0, 0, 0);
	
	  if (selectedDate < today) {
	    document.getElementById(errorId).textContent = "Selected date must be today or later";
	    input.setCustomValidity("Selected date must be today or later");
    	document.getElementById("submitButton").disabled = true;
	
	  } else {
	    document.getElementById(errorId).textContent = "";
	    input.setCustomValidity("");
	     document.getElementById("submitButton").disabled = false; 

	  }
	}
	
