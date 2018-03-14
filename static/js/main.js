
	/* In animations (to close icon) */

	var beginAC = 0,
	    endAC = 400,
	    beginB = 0,
	    endB = 400;

	function inAC(s) {
	    s.draw('80% - 400', '80%', 0.3, {
	        delay: 0.1,
	        callback: function() {
	            inAC2(s)
	        }
	    });
	}

	function inAC2(s) {
	    s.draw('100% - 645', '100% - 215', 0.6, {
	        easing: ease.ease('elastic-out', 1, 0.3)
	    });
	}

	function inB(s) {
	    s.draw(beginB - 100, endB + 100, 0.1, {
	        callback: function() {
	            inB2(s)
	        }
	    });
	}

	function inB2(s) {
	    s.draw(beginB + 200, endB - 200, 0.3, {
	        easing: ease.ease('bounce-out', 1, 0.3)
	    });
	}

	/* Out animations (to burger icon) */

	function outAC(s) {
	    s.draw('90% - 400', '90%', 0.1, {
	        easing: ease.ease('elastic-in', 1, 0.3),
	        callback: function() {
	            outAC2(s)
	        }
	    });
	}

	function outAC2(s) {
	    s.draw('20% - 400', '20%', 0.3, {
	        callback: function() {
	            outAC3(s)
	        }
	    });
	}

	function outAC3(s) {
	    s.draw(beginAC, endAC, 0.7, {
	        easing: ease.ease('elastic-out', 1, 0.3)
	    });
	}

	function outB(s) {
	    s.draw(beginB, endB, 0.7, {
	        delay: 0.1,
	        easing: ease.ease('elastic-out', 2, 0.4)
	    });
	}

	/* Scale functions */

	function addScale(m) {
		m.className = 'menu-icon-wrapper scaled';
	}

	function removeScale(m) {
		m.className = 'menu-icon-wrapper';
	}

	/* Awesome burger scaled */

	var pathD = document.getElementById('pathD'),
		pathE = document.getElementById('pathE'),
		pathF = document.getElementById('pathF'),
		segmentD = new Segment(pathD, beginAC, endAC),
		segmentE = new Segment(pathE, beginB, endB),
		segmentF = new Segment(pathF, beginAC, endAC),
		wrapper = document.getElementById('menu-icon-wrapper'),
		trigger = document.getElementById('menu-icon-trigger'),
		toCloseIcon = true,
		nav = document.querySelector('.nav-list'),
		header = document.querySelector('.main-nav');

	wrapper.style.visibility = 'visible';

	trigger.onclick = function() {
		addScale(wrapper);
		if (toCloseIcon) {
			inAC(segmentD);
			inB(segmentE);
			inAC(segmentF);

			
			nav.style.display = 'flex';
			setTimeout(function(){
				nav.className = 'nav-list show';
			},0);
			header.className = 'main-nav open';
		} else {
			outAC(segmentD);
			outB(segmentE);
			outAC(segmentF);

			nav.className = 'nav-list';
			setTimeout(function(){
				nav.style.display = 'none';
			},700);
			header.className = 'main-nav';
		}
		toCloseIcon = !toCloseIcon;
		setTimeout(function() {
			removeScale(wrapper)
		}, 450);
	};

