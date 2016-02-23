			var hi = new Vivus('hi-there', {type: 'scenario-sync', duration: 20, start: 'autostart', forceRender: false, dashGap: 20}, function () {
					if (window.console) {
						console.log('Animation finished. [log triggered from callback]');
					}
				}),
				obt1 = new Vivus('obturateur1', {type: 'delayed', duration: 150}),
				obt2 = new Vivus('obturateur2', {type: 'async', duration: 150}),
				obt3 = new Vivus('obturateur3', {type: 'oneByOne', duration: 150}),
				pola = new Vivus('polaroid', {type: 'scenario-sync', duration: 20, forceRender: false});


//    function clock(){
//        var d, h, m, s;
//        d = new Date
//
//        h = 30 * ((d.getHours() % 12) + d.getMinutes()/60);
//        m = 6 * d.getMinutes();
//        s = 6 * d.getSeconds();

//        secAttr('h-hand',h);
//        secAttr('m-hand',m);
//        secAttr('s-hand',s);
//        secAttr('s-tail',s+180);

//        h = d.getHours();
//        m = d.getMinutes();
//        s = d.getSeconds();
//
//        if(h >= 12) {
//        	setText('suffix','PM');
//        }else{
//        	setText('suffix',"AM")
//        }

//        if(h != 12){
//        	h %= 12;
//        }

//        setText('sec', s);
//        setText('min', m);
//        setText('hr', h);
//     };


//    function secAttr(id, val) {
//    	var v = 'rotate(' + val + ', 70, 70)';
//    	document.getElementById(id).secAttribute('transfrom', v);
//    };

 //   function setText(id, val){
 //   	if(val<10){
 //   		val ='0' + val;
 //   	}
 //   	document.getElementById(id).innerHTML = val;
 //   };

 //   window.onload=clock;
