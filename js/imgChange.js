var objStyle = document.getElementById("p2").style; //获取图片figure元素的style
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
	// 获取输入的自定义属性名称
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



//创建二维数组

var tArray = new Array(); //先声明一维
for (var k = 0; k < 200; k++) { //一维长度为i,i为变量，可以根据实际情况改变

	tArray[k] = new Array(); //声明二维，每一个一维数组里面的一个元素都是一个数组；

	for (var j = 0; j < 10; j++) { //一维数组里面每个元素数组可以包含的数量p，p也是一个变量；

		tArray[k][j] = ""; //这里将变量初始化，我这边统一初始化为空，后面在用所需的值覆盖里面的值
	}
}

//检查二维数组是否正确
function showarray() {
	for (var i = 0; i < tArray.length; i++) {

		for (j = 0; j < tArray[i].length; j++) {
			document.write(tArray[i][j] + "<br />");

		}
	}
}




//计数器（图片张数）
var imagenum = 0;

function downloadpicture() {
	//将原图片编号存储到二维数组中
	tArray[imagenum][0] = bossnum;
	//将原图片blur参数存储到二维数组中
	tArray[imagenum][1] = 0;
	//将原图片brightness参数存储到二维数组中
	tArray[imagenum][2] = 1;
	//将原图片contrast参数存储到二维数组中
	tArray[imagenum][3] = 1;
	//将原图片grayscale参数存储到二维数组中
	tArray[imagenum][4] = 0;
	//将原图片hueRotate参数存储到二维数组中
	tArray[imagenum][5] = 0;
	//将原图片invert参数存储到二维数组中
	tArray[imagenum][6] = 0;
	//将原图片opacity参数存储到二维数组中
	tArray[imagenum][7] = 1;
	//将原图片saturate参数存储到二维数组中
	tArray[imagenum][8] = 1;
	//将原图片sepia参数存储到二维数组中
	tArray[imagenum][9] = 0;

}


//图片计数器+1
var bossimagenum;

function downloadnewpicture() {

	var newimagenum = imagenum + 1;

	bossimagenum = newimagenum;
	//	alert(bossimagenum);
	//	alert(newimagenum);
	//将new图片编号存储到二维数组中
	tArray[newimagenum][0] = bossnum;
	//	alert(bossnum);
	//将new图片blur参数存储到二维数组中
	tArray[newimagenum][1] = blur;
	//	alert(blur);
	//将new图片brightness参数存储到二维数组中
	tArray[newimagenum][2] = brightness;
	//将new图片contrast参数存储到二维数组中
	tArray[newimagenum][3] = contrast;
	//	alert(contrast);
	//将new图片grayscale参数存储到二维数组中
	tArray[newimagenum][4] = grayscale;
	//将new图片hueRotate参数存储到二维数组中
	tArray[newimagenum][5] = hueRotate;
	//将new图片invert参数存储到二维数组中
	tArray[newimagenum][6] = invert;
	//将new图片opacity参数存储到二维数组中
	tArray[newimagenum][7] = opacity;
	//将new图片saturate参数存储到二维数组中
	tArray[newimagenum][8] = saturate;
	//将new图片sepia参数存储到二维数组中
	tArray[newimagenum][9] = sepia;

}


//全局随机数
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


var image_index = new Array(); //先声明一维

//64张图像的操作
var count = 150;
var picture_Array = new Array(); //声明展示图像的一维数组

var shuffle = function(v){
    for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
};

for(var i=0;i<count;i++){
	picture_Array[i] = i+1;
};

picture_Array = shuffle(picture_Array);
// alert(picture_Array)
// for(i=0;i<count;i++){
// 	var index = Math.floor(Math.random()*picture_Array.length);
// 	picture_Array.splice(index,1);
	
// };


function newbody(){

	//随机产生图片的编号 随机种子版本
	// var num1 = Math.ceil(Math.seededRandom());
	
	// 随机产生版本 64
	// var num1 = Math.ceil(Math.random() * 10);
	
	// alert(num1);
	// alert(picture_Array[0])
	var num1 = picture_Array[0];
	// alert(num1);
	
	// #64的版本
	document.getElementById("p1").src = "img/im" + num1 + ".jpg";
	document.getElementById("p2").src = "img/im" + num1 + ".jpg";
	
	// 25000的版本
	// document.getElementById("p1").src = "img/im" + num1 + ".jpg";
	// document.getElementById("p2").src = "img/im" + num1 + ".jpg";

	bossnum = num1;


}

// function newbody(){
// 	//随机产生图片的编号
// 	var num1 = Math.ceil(Math.random() * 25000);

// 	document.getElementById("p1").src = "img/im" + num1+ ".jpg";
// 	document.getElementById("p2").src = "img/im" + num1 + ".jpg";

// 	bossnum=num1;
// }


//将已经评分过的图片数组
var mypicture = new Array();
var numpicture = 0;

//评分图片号码
var newbossnum;
//将已经评分过的图片计数器
var afternum = 0;

//判断是否是原图
//var ispicture;

function newnewbody() {

	var num1 = bossimagenum;
	var newnum1 = num1 + 1;
	//随机产生图片的在数组中编号
	var num2 = Math.floor(Math.random() * newnum1);
	//判断是否是修饰后的图片
	//	alert(num2);
	//进入循环直至产生是修饰后图片的随机数
	var newflag = 0;
	while (newflag == 0) {
		//		alert("进入循环");
		if (num2 % 2 == 0) {
			num2 = Math.floor(Math.random() * newnum1);
			//			alert(num2);
		} else {
			newflag = 1;
			break;
		}
	}
	var num3 = tArray[num2][0];
	//	alert(num3);
	//	alert(num2);
	//	alert(bossimagenum);
	//将已经评分过的图片编码放置在数组中
	newbossnum = num3;

	//判断是否是原图
	//	if(num2%2 == 0){
	//		ispicture='original';
	//	}else{
	//		ispicture='retouchen';
	//	}




	mypicture[numpicture] = num2;
	numpicture = numpicture + 1;
	//	alert(numpicture);

	afternum = afternum + 2;
	//	alert(afternum);
	//	alert(bossimagenum);
	
	// 64的版本
	document.getElementById("newpicture1").src = "img/im" + num3 + ".jpg";
	
	// 25000的版本
	// document.getElementById("newpicture1").src = "img/im" + num3 + ".jpg";
	
	newon(num2);



}


function newchangePic() {

	if (afternum > bossimagenum) {
		newnewdownload();
		alert("已经评分完所有图片！");
	} else {

		newnewdownload();
		var num1 = bossimagenum;
		var newnum1 = num1 + 1;
		//随机产生图片的在数组中编号
		var num2 = Math.floor(Math.random() * newnum1);
		//		alert(num2);
		//		var i=0;
		//判断下一张图片是否为修饰后的图片
		var changeflag = 0;
		while (changeflag == 0) {
			//			alert("产生新随机数");
			//			alert(i++);
			if (num2 % 2 == 0) {
				num2 = Math.floor(Math.random() * newnum1);
				//				alert("重新产生的随机数" + num2);
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
					//					alert(num2);
					newbossnum = num3;
					document.getElementById('inputcore').value = " ";
					
					// 64的版本
					document.getElementById("newpicture1").src = "img/im" + num3 + ".jpg";
					
					// 25000的版本
					// document.getElementById("newpicture1").src = "img/im" + num3 + ".jpg";
					
					newon(num2);
					afternum = afternum + 2;
					//					flag=0;
					changeflag = 1;
					//					alert(afternum);
					//					alert(bossimagenum);

				} else {
					num2 = Math.floor(Math.random() * newnum1);
				}

			}
		}


	}


}
var double_i =1;

//切换图片
function changePic() {

	//	downloadpicture();
	////	alert(bossnum);
	//	downloadnewpicture();



	//随机产生1-6随机数
	// Math.seededRandom()
	
	// 随机种子的版本 2500
	// var num = Math.ceil(Math.seededRandom());
	
	// 随机产生版本 25000
	// var num = Math.ceil(Math.random() * 25000);
	
	// 随机产生版本 64
	// var num = Math.ceil(Math.random() * 10);
	if(picture_Array[double_i] == null){
		alert('已完成所有图片')
		
	}else{
		var num = picture_Array[double_i];
		// alert(num);
		double_i=double_i+1;
		//修改src路径
		
		// 64 的版本
		document.getElementById("p1").src = "img/im" + num + ".jpg";
		document.getElementById("p2").src = "img/im" + num + ".jpg";
		
		// 25000的版本
		// document.getElementById("p1").src = "img/im" + num + ".jpg";
		// document.getElementById("p2").src = "img/im" + num + ".jpg";
		
		
		bossnum = num;
		
		//重置图片参数
		newScreen();
		document.getElementById('inputcore1').value = '';
		document.getElementById('inputcore2').value = '';
		
		//	alert(imagenum);
		//	alert(bossimagenum);
		
		//	//计数器加一
		//	imagenum=imagenum+2;
		
		//	showarray();
		//	alert(imagenum);
		
	}

	

	
	// //修改src路径
	
	// // 64 的版本
	// document.getElementById("p1").src = "img/img" + num + ".jpg";
	// document.getElementById("p2").src = "img/img" + num + ".jpg";
	
	// // 25000的版本
	// // document.getElementById("p1").src = "img/im" + num + ".jpg";
	// // document.getElementById("p2").src = "img/im" + num + ".jpg";


	// bossnum = num;

	// //重置图片参数
	// newScreen();
	// document.getElementById('inputcore1').value = '';
	// document.getElementById('inputcore2').value = '';

	// //	alert(imagenum);
	// //	alert(bossimagenum);

	// //	//计数器加一
	// //	imagenum=imagenum+2;

	// //	showarray();
	// //	alert(imagenum);


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




// DOM转图片的方法
var domToImg = (function() {
	// 转png需要的canvas对象及其上下文
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');

	// canvas绘制图片元素方法
	var draw = function(img) {
		var width = img.width,
			height = img.height;
		// canvas绘制
		canvas.width = width;
		canvas.height = height;
		// 画布清除
		context.clearRect(0, 0, width, height);
		// 绘制图片到canvas
		context.drawImage(img, 0, 0);
	};

	// canvas画布绘制的原图片
	var img = new Image();
	// 回调
	var callback = function() {};

	// 图片回调
	img.onload = function() {
		draw(this);
		// 回调方法
		callback();
	};
	// 图片出处
	img.onerror = function(e) {
		console.error('图片生成出错了');
	};

	var exports = {
		dom: null,
		// DOM变成svg，并作为图片显示
		dom2Svg: function() {
			var dom = this.dom;
			if (!dom) {
				return this;
			}

			// 复制DOM节点
			var cloneDom = dom.cloneNode(true);
			cloneDom.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
			cloneDom.classList.remove('outline');

			// 如果有图片，变成base64
			var imgDom = null;
			if (cloneDom.tagName.toLowerCase() == 'img') {
				imgDom = cloneDom;
			} else {
				// 这里就假设一个图片，多图自己遍历转换下就好了
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

			// 图片地址显示为DOM转换的svg
			img.src = htmlSvg;

			return this;
		},
		// 作为图片下载，JS前端下载可参考这篇文章：JS前端创建html或json文件并浏览器导出下载 - http://www.zhangxinxu.com/wordpress/?p=6252
		download: function() {
			// 创建隐藏的可下载链接
			var eleLink = document.createElement('a');
			// 下载图片文件名就按照时间戳来
			eleLink.download = 'original-' + bossnum +'-' + submitcorenum1 +'.png';
			eleLink.style.display = 'none';

			// 触发图片onload是个异步过程，因此，需要在回调中处理
			callback = function() {
				eleLink.href = canvas.toDataURL();
				// 触发点击
				document.body.appendChild(eleLink);
				eleLink.click();
				// 然后移除
				document.body.removeChild(eleLink);
			};

			// dom变图片
			this.dom2Svg();
		}
	};

	return exports;
})();






// DOM转图片的方法
var newdomToImg = (function() {
	// 转png需要的canvas对象及其上下文
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');

	// canvas绘制图片元素方法
	var draw = function(img) {
		var width = img.width,
			height = img.height;
		// canvas绘制
		canvas.width = width;
		canvas.height = height;
		// 画布清除
		context.clearRect(0, 0, width, height);
		// 绘制图片到canvas
		context.drawImage(img, 0, 0);
	};

	// canvas画布绘制的原图片
	var img = new Image();
	// 回调
	var callback = function() {};

	// 图片回调
	img.onload = function() {
		draw(this);
		// 回调方法
		callback();
	};
	// 图片出处
	img.onerror = function(e) {
		console.error('图片生成出错了');
	};

	var exports = {
		dom: null,
		// DOM变成svg，并作为图片显示
		dom2Svg: function() {
			var dom = this.dom;
			if (!dom) {
				return this;
			}

			// 复制DOM节点
			var cloneDom = dom.cloneNode(true);
			cloneDom.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
			cloneDom.classList.remove('outline');

			// 如果有图片，变成base64
			var imgDom = null;
			if (cloneDom.tagName.toLowerCase() == 'img') {
				imgDom = cloneDom;
			} else {
				// 这里就假设一个图片，多图自己遍历转换下就好了
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

			// 图片地址显示为DOM转换的svg
			img.src = htmlSvg;

			return this;
		},
		// 作为图片下载，JS前端下载可参考这篇文章：JS前端创建html或json文件并浏览器导出下载 - http://www.zhangxinxu.com/wordpress/?p=6252
		download: function() {
			// 创建隐藏的可下载链接
			var eleLink = document.createElement('a');
			// 下载图片文件名就按照时间戳来
			eleLink.download = 'retouched-' + bossnum +'-' + submitcorenum2 + '.png';
			eleLink.style.display = 'none';

			// 触发图片onload是个异步过程，因此，需要在回调中处理
			callback = function() {
				eleLink.href = canvas.toDataURL();
				// 触发点击
				document.body.appendChild(eleLink);
				eleLink.click();
				// 然后移除
				document.body.removeChild(eleLink);
			};

			// dom变图片
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


// DOM转图片的方法
var newnewdomToImg = (function() {
	// 转png需要的canvas对象及其上下文
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');

	// canvas绘制图片元素方法
	var draw = function(img) {
		var width = img.width,
			height = img.height;
		// canvas绘制
		canvas.width = width;
		canvas.height = height;
		// 画布清除
		context.clearRect(0, 0, width, height);
		// 绘制图片到canvas
		context.drawImage(img, 0, 0);
	};

	// canvas画布绘制的原图片
	var img = new Image();
	// 回调
	var callback = function() {};

	// 图片回调
	img.onload = function() {
		draw(this);
		// 回调方法
		callback();
	};
	// 图片出处
	img.onerror = function(e) {
		console.error('图片生成出错了');
	};

	var exports = {
		dom: null,
		// DOM变成svg，并作为图片显示
		dom2Svg: function() {
			var dom = this.dom;
			if (!dom) {
				return this;
			}

			// 复制DOM节点
			var cloneDom = dom.cloneNode(true);
			cloneDom.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
			cloneDom.classList.remove('outline');

			// 如果有图片，变成base64
			var imgDom = null;
			if (cloneDom.tagName.toLowerCase() == 'img') {
				imgDom = cloneDom;
			} else {
				// 这里就假设一个图片，多图自己遍历转换下就好了
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

			// 图片地址显示为DOM转换的svg
			img.src = htmlSvg;

			return this;
		},
		// 作为图片下载，JS前端下载可参考这篇文章：JS前端创建html或json文件并浏览器导出下载 - http://www.zhangxinxu.com/wordpress/?p=6252
		download: function() {
			// 创建隐藏的可下载链接
			var eleLink = document.createElement('a');
			// 下载图片文件名就按照时间戳来
			eleLink.download = 'aftered-' + newbossnum +'-'+ submitcorenum + '.png';
			eleLink.style.display = 'none';

			// 触发图片onload是个异步过程，因此，需要在回调中处理
			callback = function() {
				eleLink.href = canvas.toDataURL();
				// 触发点击
				document.body.appendChild(eleLink);
				eleLink.click();
				// 然后移除
				document.body.removeChild(eleLink);
			};

			// dom变图片
			this.dom2Svg();
		}
	};

	return exports;
})();






// 实例页面的交互代码
var eleBox = document.getElementById('p2');
// 点击并下载图片

var protoeleBox = document.getElementById('p1');

var aftereleBox = document.getElementById('newpicture1');

function protodownload() {
	// alert(protoeleBox)
	domToImg.dom = protoeleBox;
	domToImg.download();

}

function newdownload() {
	downloadpicture();
	//	alert(bossnum);
	downloadnewpicture();
	//计数器加一
	imagenum = imagenum + 2;

	newdomToImg.dom = eleBox;
	newdomToImg.download();

}

function newnewdownload() {

	newnewdomToImg.dom = aftereleBox;
	newnewdomToImg.download();

}


// eleBox.addEventListener('click', function(event) {
// 	var eleTarget = event.target;
// 	alert(eleTarget)
// 	if (eleTarget !== this) {
// 		domToImg.dom = eleTarget;
// 		domToImg.download();
// 	}
// });


function downloadparasite() {
	if (!window.localStorage) {
		alert("浏览器不支持localstorage");
	} else {

		//写入编辑图片总数
		storage.setItem("num", bossimagenum);
		var num = storage.getItem("num");
		alert(num);

		//写入图片信息数组
		localStorage.setItem('tArray', JSON.stringify(tArray));

	}


}

function downloadproto() {
	protodownload();
	newdownload();
}
