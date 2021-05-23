var objStyle = document.getElementById("p2").style;
var blur = 0;
var brightness = 1;
var contrast = 1;
var grayscale = 0;
var hueRotate = 0;
var invert = 0;
var opacity = 1;
var saturate = 1;
var sepia = 0;
function Change(v) {
	if (v.id == "filter-blur") {
		blur = v.value;
		on();
	} else if (v.id == "filter-brightness") {
		brightness = v.value;
		on();
	} else if (v.id == "filter-contrast") {
		contrast = v.value;
		on();

	} else if (v.id == "filter-grayscale") {
		grayscale = v.value;
		on();
	} else if (v.id == "filter-hue-rotate") {
		hueRotate = v.value;
		on();
	} else if (v.id == "filter-invert") {
		invert = v.value;
		on();
	} else if (v.id == "filter-opacity") {
		opacity = v.value;
		on();
	} else if (v.id == "filter-saturate") {
		saturate = v.value;
		on();
	} else if (v.id == "filter-sepia") {
		sepia = v.value;
		on();
	}
}
function on() {
	var str = "blur(" + blur + "px) brightness(" + brightness + ") contrast(" + contrast + ") grayscale(" + grayscale +
		") hue-rotate(" + hueRotate + "deg) invert(" + invert + ") opacity(" + opacity + ") saturate(" + saturate +
		") sepia(" + sepia + ")";
	objStyle.filter = str;
	objStyle.webkitFilter = str;
}
function updateFilterVal(e) {
	const val = e.target.value;
	const prop = `--${e.target.id.replace(/filter-/, "")}`;
	const text = e.target.parentNode.querySelector(".filter-val");
	changeProp(document.documentElement, prop, val);
	text.textContent = val;
}
function changeProp(el, prop, val) {
	el.style.setProperty(prop, val);
	console.log(el, prop, val);
}
const filterInputs = [...document.querySelectorAll('[id^="filter-"]')];
filterInputs.forEach(input => input.addEventListener("input", updateFilterVal));
function newScreen() {
	blur = 0;
	brightness = 1;
	contrast = 1;
	grayscale = 0;
	hueRotate = 0;
	invert = 0;
	opacity = 1;
	saturate = 1;
	sepia = 0;
	str = "blur(" + blur + "px) brightness(" + brightness + ") contrast(" + contrast + ") grayscale(" + grayscale +
		") hue-rotate(" + hueRotate + "deg) invert(" + invert + ") opacity(" + opacity + ") saturate(" + saturate +
		") sepia(" + sepia + ")";
	objStyle.filter = str;
	objStyle.webkitFilter = str;
	document.getElementById("filter-blur").value=blur;
	document.getElementById("f1").innerHTML=blur;
	document.getElementById("filter-brightness").value = brightness;
	document.getElementById("f2").innerHTML = brightness;
	document.getElementById("filter-contrast").value = contrast;
	document.getElementById("f3").innerHTML = contrast;
	//	document.getElementById("filter-grayscale").value=grayscale;
	//	document.getElementById("f4").innerHTML=grayscale;
	document.getElementById("filter-hue-rotate").value = hueRotate;
	document.getElementById("f5").innerHTML = hueRotate;
	//	document.getElementById("filter-invert").value=invert;
	//	document.getElementById("f6").innerHTML=invert;
	//  document.getElementById("filter-opacity").value = opacity;
	//  document.getElementById("f7").innerHTML = opacity;
	document.getElementById("filter-saturate").value = saturate;
	document.getElementById("f8").innerHTML = saturate;
	//	document.getElementById("filter-sepia").value=sepia;
	//	document.getElementById("f9").innerHTML=sepia;
	document.getElementById("inputcore1").value = " ";
	document.getElementById("inputcore2").value = " ";

}
var tArray = new Array();
for (var k = 0; k < 200; k++) { 
	tArray[k] = new Array(); 
	for (var j = 0; j < 10; j++) { 
		tArray[k][j] = ""; 
	}
}
function showarray() {
	for (var i = 0; i < tArray.length; i++) {
		for (j = 0; j < tArray[i].length; j++) {
			document.write(tArray[i][j] + "<br />");
		}
	}
}
var imagenum = 0;
function downloadpicture() {
	tArray[imagenum][0] = bossnum;
	tArray[imagenum][1] = 0;
	tArray[imagenum][2] = 1;
	tArray[imagenum][3] = 1;
	tArray[imagenum][4] = 0;
	tArray[imagenum][5] = 0;
	tArray[imagenum][6] = 0;
	tArray[imagenum][7] = 1;
	tArray[imagenum][8] = 1;
	tArray[imagenum][9] = 0;

}
var bossimagenum;
function downloadnewpicture() {
	var newimagenum = imagenum + 1;
	bossimagenum = newimagenum;
	tArray[newimagenum][0] = bossnum;
	tArray[newimagenum][1] = blur;
	tArray[newimagenum][2] = brightness;
	tArray[newimagenum][3] = contrast;
	tArray[newimagenum][4] = grayscale;
	tArray[newimagenum][5] = hueRotate;
	tArray[newimagenum][6] = invert;
	tArray[newimagenum][7] = opacity;
	tArray[newimagenum][8] = saturate;
	tArray[newimagenum][9] = sepia;

}
var bossnum;
var newobjStyle = document.getElementById("newpicture1").style; //获取图片figure元素的style
function newon(num) {
	var blur1 = tArray[num][1];
	var brightness1 = tArray[num][2];
	var contrast1 = tArray[num][3];
	var grayscale1 = tArray[num][4];
	var hueRotate1 = tArray[num][5];
	var invert1 = tArray[num][6];
	var opacity1 = tArray[num][7];
	var saturate1 = tArray[num][8];
	var sepia1 = tArray[num][9];
	var str = "blur(" + blur1 + "px) brightness(" + brightness1 + ") contrast(" + contrast1 + ") grayscale(" + grayscale1 +
		") hue-rotate(" + hueRotate1 + "deg) invert(" + invert1 + ") opacity(" + opacity1 + ") saturate(" + saturate1 +
		") sepia(" + sepia1 + ")";
	newobjStyle.filter = str;
	newobjStyle.webkitFilter = str;
}
Math.seed = 6;
Math.seededRandom = function(max, min) {
	max = max || 25000;
	min = min || 1;
	Math.seed = (Math.seed * 9301 + 49297) % 233280;
	var rnd = Math.seed / 233280.0;
	return min + rnd * (max - min);
};
var image_index = new Array(); 
var count = 150;
var picture_Array = new Array(); 
var shuffle = function(v){
    for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
};
for(var i=0;i<count;i++){
	picture_Array[i] = i+1;
};
picture_Array = shuffle(picture_Array);
function newbody(){
	var num1 = picture_Array[0];
	document.getElementById("p1").src = "img/im" + num1 + ".jpg";
	document.getElementById("p2").src = "img/im" + num1 + ".jpg";
	bossnum = num1;
}
var mypicture = new Array();
var numpicture = 0;
var newbossnum;
var afternum = 0;
function newnewbody() {
	var num1 = bossimagenum;
	var newnum1 = num1 + 1;
	var num2 = Math.floor(Math.random() * newnum1);
	var newflag = 0;
	while (newflag == 0) {
		if (num2 % 2 == 0) {
			num2 = Math.floor(Math.random() * newnum1);
		} else {
			newflag = 1;
			break;
		}
	}
	var num3 = tArray[num2][0];
	newbossnum = num3;
	mypicture[numpicture] = num2;
	numpicture = numpicture + 1;
	afternum = afternum + 2;
	document.getElementById("newpicture1").src = "img/im" + num3 + ".jpg";
	newon(num2);
}
function newchangePic() {
	if (afternum > bossimagenum) {
		newnewdownload();
		alert("All images have been scored!");
	} else {
		newnewdownload();
		var num1 = bossimagenum;
		var newnum1 = num1 + 1;
		var num2 = Math.floor(Math.random() * newnum1);
		var changeflag = 0;
		while (changeflag == 0) {
			if (num2 % 2 == 0) {
				num2 = Math.floor(Math.random() * newnum1);
			} else {
				var flag = 1;
				for (var i = 0; i < mypicture.length; i++) {
					if (mypicture[i] == num2) {
						flag = 0;
					}
				}
				if (flag == 1) {
					mypicture[numpicture] = num2;
					numpicture = numpicture + 1;
					var num3 = tArray[num2][0];
					newbossnum = num3;
					document.getElementById('inputcore').value = " ";
					document.getElementById("newpicture1").src = "img/im" + num3 + ".jpg";
					newon(num2);
					afternum = afternum + 2;
					changeflag = 1;
				} else {
					num2 = Math.floor(Math.random() * newnum1);
				}
			}
		}
	}
}
var double_i =1;
function changePic() {
	if(picture_Array[double_i] == null){
		alert('All images have been scored!')		
	}else{
		var num = picture_Array[double_i];
		double_i=double_i+1;
		document.getElementById("p1").src = "img/im" + num + ".jpg";
		document.getElementById("p2").src = "img/im" + num + ".jpg";		
		bossnum = num;
		newScreen();
		document.getElementById('inputcore1').value = '';
		document.getElementById('inputcore2').value = '';		
	}
}
var submitcorenum1;
function submitcore1() {
	var newsubmitcorenum = document.getElementById('inputcore1').value;
	submitcorenum1 = newsubmitcorenum;
}
var submitcorenum2;
function submitcore2() {
	var newsubmitcorenum = document.getElementById('inputcore2').value;
	submitcorenum2 = newsubmitcorenum;
}
var domToImg = (function() {
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	var draw = function(img) {
		var width = img.width,
			height = img.height;
		canvas.width = width;
		canvas.height = height;
		context.clearRect(0, 0, width, height);
		context.drawImage(img, 0, 0);
	};
	var img = new Image();
	var callback = function() {};
	img.onload = function() {
		draw(this);
		callback();
	};
	img.onerror = function(e) {
		console.error('image error');
	};
	var exports = {
		dom: null,
		dom2Svg: function() {
			var dom = this.dom;
			if (!dom) {
				return this;
			}
			var cloneDom = dom.cloneNode(true);
			cloneDom.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
			cloneDom.classList.remove('outline');
			var imgDom = null;
			if (cloneDom.tagName.toLowerCase() == 'img') {
				imgDom = cloneDom;
			} else {
				imgDom = cloneDom.querySelector('img');
			}
			if (imgDom) {
				draw(imgDom);
				imgDom.src = canvas.toDataURL();
			}
			var htmlSvg = 'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="' + dom.offsetWidth +
				'" height="' + dom.offsetHeight + '"><foreignObject x="0" y="0" width="100%" height="100%">' +
				new XMLSerializer().serializeToString(cloneDom) +
				document.querySelector('style').outerHTML +
				'</foreignObject></svg>';
			htmlSvg = htmlSvg.replace(/\n/g, '').replace(/\t/g, '').replace(/#/g, '%23');
			img.src = htmlSvg;
			return this;
		},
		download: function() {
			var eleLink = document.createElement('a');
			eleLink.download = 'original-' + bossnum +'-' + submitcorenum1 +'.png';
			eleLink.style.display = 'none';
			callback = function() {
				eleLink.href = canvas.toDataURL();
				document.body.appendChild(eleLink);
				eleLink.click();
				document.body.removeChild(eleLink);
			};
			this.dom2Svg();
		}
	};
	return exports;
})();

var newdomToImg = (function() {
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	var draw = function(img) {
		var width = img.width,
			height = img.height;
		canvas.width = width;
		canvas.height = height;
		context.clearRect(0, 0, width, height);
		context.drawImage(img, 0, 0);
	};
	var img = new Image();
	var callback = function() {};
	img.onload = function() {
		draw(this);
		callback();
	};
	img.onerror = function(e) {
		console.error('image error');
	};
	var exports = {
		dom: null,
		dom2Svg: function() {
			var dom = this.dom;
			if (!dom) {
				return this;
			}
			var cloneDom = dom.cloneNode(true);
			cloneDom.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
			cloneDom.classList.remove('outline');
			var imgDom = null;
			if (cloneDom.tagName.toLowerCase() == 'img') {
				imgDom = cloneDom;
			} else {
				imgDom = cloneDom.querySelector('img');
			}
			if (imgDom) {
				draw(imgDom);
				imgDom.src = canvas.toDataURL();
			}
			var htmlSvg = 'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="' + dom.offsetWidth +
				'" height="' + dom.offsetHeight + '"><foreignObject x="0" y="0" width="100%" height="100%">' +
				new XMLSerializer().serializeToString(cloneDom) +
				document.querySelector('style').outerHTML +
				'</foreignObject></svg>';
			htmlSvg = htmlSvg.replace(/\n/g, '').replace(/\t/g, '').replace(/#/g, '%23');
			img.src = htmlSvg;
			return this;
		},
		download: function() {
			var eleLink = document.createElement('a');
			eleLink.download = 'retouched-' + bossnum +'-' + submitcorenum2 + '.png';
			eleLink.style.display = 'none';
			callback = function() {
				eleLink.href = canvas.toDataURL();
				document.body.appendChild(eleLink);
				eleLink.click();
				document.body.removeChild(eleLink);
			};
			this.dom2Svg();
		}
	};
	return exports;
})();
var submitcorenum;
function submitcore() {
	var newsubmitcorenum = document.getElementById('inputcore').value;
	submitcorenum = newsubmitcorenum;
}
var newnewdomToImg = (function() {
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	var draw = function(img) {
		var width = img.width,
			height = img.height;
		canvas.width = width;
		canvas.height = height;
		context.clearRect(0, 0, width, height);
		context.drawImage(img, 0, 0);
	};
	var img = new Image();
	var callback = function() {};
	img.onload = function() {
		draw(this);
		callback();
	};
	img.onerror = function(e) {
		console.error('image error');
	};
	var exports = {
		dom: null,
		dom2Svg: function() {
			var dom = this.dom;
			if (!dom) {
				return this;
			}
			var cloneDom = dom.cloneNode(true);
			cloneDom.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
			cloneDom.classList.remove('outline');
			var imgDom = null;
			if (cloneDom.tagName.toLowerCase() == 'img') {
				imgDom = cloneDom;
			} else {
				imgDom = cloneDom.querySelector('img');
			}
			if (imgDom) {
				draw(imgDom);
				imgDom.src = canvas.toDataURL();
			}
			var htmlSvg = 'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="' + dom.offsetWidth +
				'" height="' + dom.offsetHeight + '"><foreignObject x="0" y="0" width="100%" height="100%">' +
				new XMLSerializer().serializeToString(cloneDom) +
				document.querySelector('style').outerHTML +
				'</foreignObject></svg>';
			htmlSvg = htmlSvg.replace(/\n/g, '').replace(/\t/g, '').replace(/#/g, '%23');
			img.src = htmlSvg;
			return this;
		},
		download: function() {
			var eleLink = document.createElement('a');
			eleLink.download = 'aftered-' + newbossnum +'-'+ submitcorenum + '.png';
			eleLink.style.display = 'none';
			callback = function() {
				eleLink.href = canvas.toDataURL();
				document.body.appendChild(eleLink);
				eleLink.click();
				document.body.removeChild(eleLink);
			};
			this.dom2Svg();
		}
	};
	return exports;
})();
var eleBox = document.getElementById('p2');
var protoeleBox = document.getElementById('p1');
var aftereleBox = document.getElementById('newpicture1');
function protodownload() {
	domToImg.dom = protoeleBox;
	domToImg.download();
}
function newdownload() {
	downloadpicture();
	downloadnewpicture();
	imagenum = imagenum + 2;
	newdomToImg.dom = eleBox;
	newdomToImg.download();
}
function newnewdownload() {
	newnewdomToImg.dom = aftereleBox;
	newnewdomToImg.download();
}
function downloadparasite() {
	if (!window.localStorage) {
		alert("browser no support localstorage");
	} else {
		storage.setItem("num", bossimagenum);
		var num = storage.getItem("num");
		alert(num);
		localStorage.setItem('tArray', JSON.stringify(tArray));
	}
}
function downloadproto() {
	protodownload();
	newdownload();
}
