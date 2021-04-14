$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

function initMap() {
    let pos = {lat: 48.8398316494406,lng: 2.481526103728035};
    let opt = {
    	center: pos,
    	zoom: 17,
    };

    let myMap = new google.maps.Map(document.getElementById("map"), opt);

	let marker = new google.maps.Marker({
		position: pos,
		map: myMap,
	})
}
 
$(function() {
	$('.rev-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
	});
});

$('.back-to-top').click(function() {
	$('body').animate({'scrollTop': 0}, 1000);
	$('html').animate({'scrollTop': 0}, 1000);
});

$(window).scroll(function() {
	if($(window).scrollTop() > 200) {
		$('.back-to-top').addClass('active');
	}
	else {
		$('.back-to-top').removeClass('active');
	}
});

let contact = document.getElementById('myContact');
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
	contact.style.display = "block";
}

span.onclick = function() {
	contact.style.display = "none";
}

window.onclick = function(event) {
	if(event.target == contact) {
		contact.style.display = "none";
	}
}