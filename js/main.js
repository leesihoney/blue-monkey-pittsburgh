const initializeTabs = () => {
	let tabs = document.querySelectorAll('.tabs');
	for (let i = 0; i < tabs.length; i++) {
		M.Tabs.init(tabs[i]);
	}
};

const mailingListFormValidation = () => {
	const mailingListForm = document.querySelector("#mailing-list-signup-form");
	if (mailingListForm) {
		mailingListForm.addEventListener("submit", handleSubmit);
	};
}

const handleSubmit = () => {
	const mailingListForm = document.querySelector("#mailing-list-signup-form");
	const phoneNumberInput = mailingListForm["phone-number"].value;
	if (isNaN(phoneNumberInput) || phoneNumberInput.length !== 10) {
		alert("Please Enter Your Phone Number with 10 digits without spaces or hyphens");
		return false;
	}
	const zipcodeInput = mailingListForm["zipcode"].value;
	if (isNaN(zipcodeInput) || zipcodeInput.length !== 5) {
		alert("Please Enter Your 5-digit zipcodes");
		return false;

	}
	alert("Your form has been successfully submitted");
	mailingListForm["first-name"].value = "";
	mailingListForm["last-name"].value = "";
	mailingListForm["email"].value = "";
	mailingListForm["zipcode"].value = "";
	mailingListForm["phone-number"].value = "";
	return true;
} 

/*
	initializeCarousel code is from https://materializecss.com/carousel.html#five!
*/

const initializeGraph = () => {
	$(function() {
		$('#popular-hours-graph').highcharts({
			chart: {
				type: 'line'
			},
			title: {
				text: 'Popular Hours of Blue Monkey Shop'
			},
			subtitle: {
				text: 'Weekends are more crowded than weekdays'
			},
			xAxis: {
				categories: ['11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM']
			},
			yAxis: {
				title: {
					text: 'Average Number of Customers Visited Blue Monkey Pittsburgh'
				}
			},
			plotOptions: {
				line: {
					dataLabels: {
						enabled: true
					},
					enableMouseTracking: false
				}
			},
			series: [
				{
					name: 'Monday ~ Saturday',
					data: [5, 10, 8, 24, 5, 7, 32, 16]
				},
				{
					name: 'Sunday',
					data: [null, 50, 48, 25, 28, 27]
				}
			]

		});
	})
}

const initializeGallery = () => {
	$(function() {
		$('#history-tab .tab-container-image-link').lightBox();
		$('#about-tab .tab-container-image-link').lightBox();
		$('#owner-tab .tab-container-image-link').lightBox();
		$('#owner-tab .owner-container-image-link').lightBox();
	});
}

const handleUpdate = event => {
	if (event) {
		event.preventDefault();
	}
	const priceText = document.querySelector('#price').innerText;
	const price = parseInt(priceText.substring(1, priceText.length));
	const quantity = document.querySelector('#quantity').value;
	const totalPrice = document.querySelector('#total-price');
	totalPrice.innerText = `$${(price * quantity)/1.00}`;
}

const updateTotalPrice = () => {
	handleUpdate();
	const quantityInput = document.querySelector('#quantity');
	if (quantityInput) {
		quantityInput.addEventListener('change', handleUpdate);
	};

}


const main = () => {
	initializeTabs();
	initializeGallery();
	mailingListFormValidation();
	initializeGraph();
	updateTotalPrice();
}

main();