import 'magnific-popup';

class Magnific {
	constructor() {
		$('.js-popup').magnificPopup({type:'inline'});
		
		$('.js-popup-video').magnificPopup({type:'iframe'});

		$(".blocks-gallery-item").magnificPopup({
			type: "image",
			delegate: "a",
			gallery: {
			  enabled: true
			}
		});
	}

};

export default Magnific;