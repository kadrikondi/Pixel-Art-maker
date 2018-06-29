





function makeGrid() {
	console.log("makeGrid is running!")
	
	// Select size input
	
	
	const canvas = $('#pixelCanvas');
	const inputHeight = $('#inputHeight').val();
	const inputWidth = $('#inputWidth').val();
	
	canvas.children().remove()
	
	for (x = 0; x < inputHeight; x++) {
	canvas.append('<tr></tr>');
	}
	
	rows = $('tr');
	
	for (y = 0; y < inputWidth; y++) {
	rows.append('<td></td>');
	} 
	
	cell = canvas.find('td');
	
	// When td is clicked by the user, change color of td
	cell.click(function() {
		// Select color input
		console.log("changeColor is running!");
		let color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}

// When size is submitted by the user, call makeGrid()


const submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});

