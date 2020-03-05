console.log('It works')

$(document).ready(function () {
	$('.submit').click(function (event) {
		
		console.log('Clicked button')

		var name = $('#Name').val()
		var address = $('#Address').val()
		var city = $('#City').val()
		var email = $('#Email').val()
		var typeOfEvent = $('#Event').val()
		var numberOfParty = $('#Party').val()
		var message = $('#Message').val()
		var statusElm = $('.status')
		statusElm.empty()

		if (name.length > 2) {
			statusElm.append('<div>name is valid</div>')
		}else {
			event.preventDefault()
			statusElm.append('<div>name is not valid</div>')
		}

		if (address.length > 5) {
			statusElm.append('<div>Address is valid</div>')
		}else {
			event.preventDefault()
			statusElm.append('<div>Address is not valid</div>')
		}

		if (city.length > 5) {
			statusElm.append('<div>City is valid</div>')
		}else {
			event.preventDefault()
			statusElm.append('<div>City is not valid</div>')
		}

		if (email.length > 5 && email.includes('@') && email.includes('.')) {
			statusElm.append('<div>Email is valid</div>')
		}else {
			event.preventDefault()
			statusElm.append('<div>Email is not valid</div>')
		}

		if (typeOfEvent.length > 2) {
			statusElm.append('<div>typeOfEvent is valid</div>')
		}else {
			event.preventDefault()
			statusElm.append('<div>typeOfEvent is not valid</div>')
		}

		if (numberOfParty.length >= 1) {
			statusElm.append('<div>numberOfParty is valid</div>')
		}else {
			event.preventDefault()
			statusElm.append('<div>numberOfParty is not valid</div>')
		}

		if (message.length >= 10) {
			statusElm.append('<div>message is valid</div>')
		}else {
			event.preventDefault()
			statusElm.append('<div>message is not valid</div>')
		}
	})
})