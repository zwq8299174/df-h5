


export default {
	name: 'nav-header',
	data() {
		return {
			navList: this.$store.state.app.appRouter.children,
			beginAC : 0,
			endAC : 400,
			beginB : 0,
			endB : 400,
			toCloseIcon : true,
			pathD : undefined,
			pathE : undefined,
			pathF : undefined,
			segmentD : undefined,
			segmentE : undefined,
			segmentF : undefined,
			wrapper : undefined,
			trigger : undefined,
			nav : undefined,
			header : undefined
		}
	},
	watch: {
		'$route' (to) {
			console.log(window);
			this.close();
			window.scrollTo(0,0);
		}
	},
	mounted() {
		this.pathD = document.querySelector('#pathD');
		this.pathE = document.querySelector('#pathE');
		this.pathF = document.querySelector('#pathF');
		this.segmentD = new Segment(this.pathD, this.beginAC, this.endAC);
		this.segmentE = new Segment(this.pathE, this.beginB, this.endB);
		this.segmentF = new Segment(this.pathF, this.beginAC, this.endAC);
		this.wrapper = document.querySelector('#menu-icon-wrapper');
		this.trigger = document.querySelector('#menu-icon-trigger');
		this.nav = document.querySelector('.nav-wrapper');
		this.header = document.querySelector('.main-nav');
		this.init();
	},
	methods: {
		inAC(s) {
			s.draw('80% - 400', '80%', 0.3, {
				delay: 0.1,
				callback: ()=>{
					this.inAC2(s)
				}
			});
		},
		inAC2(s) {
			s.draw('100% - 645', '100% - 215', 0.6, {
				easing: ease.ease('elastic-out', 1, 0.3)
			});
		},
		inB(s) {
			s.draw(this.beginB - 100, this.endB + 100, 0.1, {
				callback: ()=>{
					this.inB2(s)
				}
			});
		},
		inB2(s) {
			s.draw(this.beginB + 200, this.endB - 200, 0.3, {
				easing: ease.ease('bounce-out', 1, 0.3)
			});
		},
		outAC(s) {
			s.draw('90% - 400', '90%', 0.1, {
				easing: ease.ease('elastic-in', 1, 0.3),
				callback: ()=>{
					this.outAC2(s)
				}
			});
		},
		outAC2(s) {
			s.draw('20% - 400', '20%', 0.3, {
				callback: ()=>{
					this.outAC3(s);
				}
			});
		},
		outAC3(s) {
			s.draw(this.beginAC, this.endAC, 0.7, {
				easing: ease.ease('elastic-out', 1, 0.3)
			});
		},
		outB(s) {
			s.draw(this.beginB, this.endB, 0.7, {
				delay: 0.1,
				easing: ease.ease('elastic-out', 2, 0.4)
			});
		},
		addScale(m) {
			m.className = 'menu-icon-wrapper scaled';
		},
		removeScale(m) {
			m.className = 'menu-icon-wrapper';
		},
		open(){
			this.inAC(this.segmentD);
			this.inB(this.segmentE);
			this.inAC(this.segmentF);
			this.nav.style.display = 'flex';
			setTimeout(()=>{
				this.nav.className = 'nav-wrapper show';
			}, 0);
			this.header.className = 'main-nav open';
			if(this.toCloseIcon){
				this.toCloseIcon = false;
			}
		},
		close(){
			this.outAC(this.segmentD);
			this.outB(this.segmentE);
			this.outAC(this.segmentF);
			this.nav.className = 'nav-wrapper white';
			setTimeout(()=>{
				this.nav.className = 'nav-wrapper';
			}, 500);
			setTimeout(()=>{
				this.nav.style.display = 'none';
			}, 700);
			this.header.className = 'main-nav';
			if(!this.toCloseIcon){
				this.toCloseIcon = true;
			}
		},
		init(){
			this.wrapper.style.visibility = 'visible';
			this.trigger.onclick = ()=>{
				this.addScale(this.wrapper);
				if(this.toCloseIcon) {
					this.open();
				} else {
					this.close();
				}
				setTimeout(()=>{
					this.removeScale(this.wrapper)
				}, 450);
			};
		}
	}
}

//var beginAC = 0,
//	endAC = 400,
//	beginB = 0,
//	endB = 400;
//
//function inAC(s) {
//	s.draw('80% - 400', '80%', 0.3, {
//		delay: 0.1,
//		callback: function() {
//			inAC2(s)
//		}
//	});
//}
//
//function inAC2(s) {
//	s.draw('100% - 645', '100% - 215', 0.6, {
//		easing: ease.ease('elastic-out', 1, 0.3)
//	});
//}

//function inB(s) {
//	s.draw(beginB - 100, endB + 100, 0.1, {
//		callback: function() {
//			inB2(s)
//		}
//	});
//}

//function inB2(s) {
//	s.draw(beginB + 200, endB - 200, 0.3, {
//		easing: ease.ease('bounce-out', 1, 0.3)
//	});
//}

/* Out animations (to burger icon) */

//function outAC(s) {
//	s.draw('90% - 400', '90%', 0.1, {
//		easing: ease.ease('elastic-in', 1, 0.3),
//		callback: function() {
//			outAC2(s)
//		}
//	});
//}

//function outAC2(s) {
//	s.draw('20% - 400', '20%', 0.3, {
//		callback: function() {
//			outAC3(s)
//		}
//	});
//}

//function outAC3(s) {
//	s.draw(beginAC, endAC, 0.7, {
//		easing: ease.ease('elastic-out', 1, 0.3)
//	});
//}

//function outB(s) {
//	s.draw(beginB, endB, 0.7, {
//		delay: 0.1,
//		easing: ease.ease('elastic-out', 2, 0.4)
//	});
//}

/* Scale functions */

//function addScale(m) {
//	m.className = 'menu-icon-wrapper scaled';
//}

//function removeScale(m) {
//	m.className = 'menu-icon-wrapper';
//}

/* Awesome burger scaled */

//var pathD = document.getElementById('pathD'),
//	pathE = document.getElementById('pathE'),
//	pathF = document.getElementById('pathF'),
//	segmentD = new Segment(pathD, beginAC, endAC),
//	segmentE = new Segment(pathE, beginB, endB),
//	segmentF = new Segment(pathF, beginAC, endAC),
//	wrapper = document.getElementById('menu-icon-wrapper'),
//	trigger = document.getElementById('menu-icon-trigger'),
//	toCloseIcon = true,
//	nav = document.querySelector('.nav-wrapper'),
//	header = document.querySelector('.main-nav');

//wrapper.style.visibility = 'visible';

