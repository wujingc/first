window.onload=function(){
  nice.init();
  getnubmer();
  getnubmer();
  getcolor();
}
var nice={
	
	init:function(){
			for (var i = 0; i < 4; i++) {
				for (var j = 0; j < 4; j++) {
					
				$("#grid-cell-"+i+"-"+j).css("top",i*1.2+0.2+"rem");   //先遍历16个元素，container使用相对定位，grid是绝对定位，所以就是相对container的位置 top在相对定位中是距离原图像上方距离
				$("#grid-cell-"+i+"-"+j).css("left",j*1.2+0.2+"rem");   //不是减号，是连接号

			};
			};			
            }   
}

 var getnubmer=function(){
 	var everyone=[];  //创建新数组
 	var everytwo=[];
 	var k=0,m,n;
 	var f=0;
 	var c=Math.random()>0.5?4:2;      //产生一个0-1的随机数
    var a = parseInt( Math.floor( Math.random()  * 17 ) );     //parseInt(“10”,8)  第一个10是他的数值，第二个8是指8进制，结果是8
   //floor() 方法执行的是向下取整计算，它返回的是小于或等于函数参数，并且与之最接近的整数。
    	for (var i = 0; i < 4; i++) {
				for (var j = 0; j < 4; j++) {			
					
				if($("#grid-cell-"+i+"-"+j).text()==""){
					everyone[k]=i;
					everytwo[k]=j;
                    f=1;
                    k++;					
				}

			};
			};
			if (f==1) {
				for (var t = 0; t < 300000; t++) {
					if (everyone[a]==undefined) {
			           
			 	                  a = parseInt( Math.floor( Math.random()  * 17 ) );
			                    
		       }
		       
			       else  {
			       	break;
					}
		      }
          };

    	m=everyone[a];
    	n=everytwo[a];
    	$("#grid-cell-"+m+"-"+n).text(c);
        
    }

var getcolor=function(){
	for (var i = 0; i < 4; i++) {
				for (var j = 0; j < 4; j++) {	
	switch($("#grid-cell-"+i+"-"+j).text()){
		case "" :$("#grid-cell-"+i+"-"+j).css({"background":"#ccc0b3","font-size":"0.6rem",});break;
		case "2":$("#grid-cell-"+i+"-"+j).css({"background":"#FDF5E6","font-size":"0.6rem",});break;
		case "4":$("#grid-cell-"+i+"-"+j).css({"background":"#F5DEB3","font-size":"0.6rem",});break;
		case "8":$("#grid-cell-"+i+"-"+j).css({"background":"#FFE4B5","font-size":"0.6rem",});break;
		case "16":$("#grid-cell-"+i+"-"+j).css({"background":"#DEB887","font-size":"0.6rem",});break;
		case "32":$("#grid-cell-"+i+"-"+j).css({"background":"#D2B48C","font-size":"0.6rem",});break;
		case "64":$("#grid-cell-"+i+"-"+j).css({"background":"#DAA520","font-size":"0.6rem",});break;
		case "128":$("#grid-cell-"+i+"-"+j).css({"background":"YELLOW","font-size":"0.5rem",});break;
		case "256":$("#grid-cell-"+i+"-"+j).css({"background":"#FFD700","font-size":"0.5rem",});break;
		case "512":$("#grid-cell-"+i+"-"+j).css({"background":"#BDB76B","font-size":"0.5rem",});break;
		case "1024":$("#grid-cell-"+i+"-"+j).css({"background":"#6B8E23","font-size":"0.4rem",});break;
		case "2048":$("#grid-cell-"+i+"-"+j).css({"background":"#ff7f50","font-size":"0.4rem",});break;
	}
   }
  }
}
 
        
var z=0;
var moveleft=function(){
	var total=function(){
		
	for (var i = 0; i < 4; i++) {
		for (var j = 1; j <4; j++) {
			         var k=j-1;
		    if($("#grid-cell-"+i+"-"+j).text()==$("#grid-cell-"+i+"-"+k).text()
		    	&&$("#grid-cell-"+i+"-"+j).text()!=""){
		    	       
						var b=parseInt($("#grid-cell-"+i+"-"+j).text())*2;
						$("#grid-cell-"+i+"-"+k).text(b);
						$("#grid-cell-"+i+"-"+j).text("");
						z=z+50;
                $("#score").text(z);
                
              }
}
}
}
var movel=function(){
	for (var i = 0; i < 4; i++) {
		for (var j = 3; j > 0; j--) {
			         var k=j-1;
		     if($("#grid-cell-"+i+"-"+k).text()==""){               
                $("#grid-cell-"+i+"-"+k).text($("#grid-cell-"+i+"-"+j).text());
                $("#grid-cell-"+i+"-"+j).text("");
              }    
              }
	     };
	

}
	movel();
	total();
	movel();
	total();
	movel();
	total();
	movel();
	total();
    getnubmer();
    getcolor();
	over();
	win();
}


var moveright=function(){
			var total=function(){
			for (var i = 0; i < 4; i++) {
				for (var j = 2; j >-1; j--) {
			         var k=j+1;
		    if($("#grid-cell-"+i+"-"+j).text()==$("#grid-cell-"+i+"-"+k).text()&&$("#grid-cell-"+i+"-"+j).text()!=""){
		    	var b=parseInt($("#grid-cell-"+i+"-"+j).text())*2;
                $("#grid-cell-"+i+"-"+k).text(b);
                z=z+50;
                $("#score").text(z);
                $("#grid-cell-"+i+"-"+j).text("");
               
				              }
				}
				}
				}

				var movel=function(){
					for (var i = 0; i < 4; i++) {
						for (var j = 0; j < 3; j++) {
							         var k=j+1;
						     if($("#grid-cell-"+i+"-"+k).text()==""){             
				                $("#grid-cell-"+i+"-"+k).text($("#grid-cell-"+i+"-"+j).text());
				                $("#grid-cell-"+i+"-"+j).text("");
				                
				              }   
				              }
					     };
				}
	movel();
	total();
	movel();
	total();
	movel();
	total();
	movel();
	total();
	getnubmer();
   getcolor();
    over();
    win();
	
}

var moveup=function(){
			var total=function(){
			for (var i = 1; i <4; i++) {
				for (var j = 0; j < 4; j++) {
			         var k=i-1;
		    if($("#grid-cell-"+i+"-"+j).text()==$("#grid-cell-"+k+"-"+j).text()&&$("#grid-cell-"+i+"-"+j).text()!=""){
		    	var b=parseInt($("#grid-cell-"+i+"-"+j).text())*2;
                $("#grid-cell-"+k+"-"+j).text(b);
                z=z+50;
                $("#score").text(z);
                $("#grid-cell-"+i+"-"+j).text("");
               
				              }
				}
				}
				}

				var movel=function(){
					for (var i = 3; i >0; i--) {
						for (var j = 0; j < 4; j++) {
							         var k=i-1;
						     if($("#grid-cell-"+k+"-"+j).text()==""){             
				                $("#grid-cell-"+k+"-"+j).text($("#grid-cell-"+i+"-"+j).text());
				                $("#grid-cell-"+i+"-"+j).text("");
				                
				              }   
				              }
					     };
				}
	movel();
	total();
	movel();
	total();
	movel();
	total();
	movel();
	total();
	getnubmer();
   getcolor();
    over();
    win();
	
}
var movedown=function(){
			var total=function(){
			for (var i = 2; i>-1; i--) {
				for (var j = 0; j < 4; j++) {
			         var k=i+1;
		    if($("#grid-cell-"+i+"-"+j).text()==$("#grid-cell-"+k+"-"+j).text()&&$("#grid-cell-"+i+"-"+j).text()!=""){
		    	var b=parseInt($("#grid-cell-"+i+"-"+j).text())*2;
                $("#grid-cell-"+k+"-"+j).text(b);
                z=z+50;
                $("#score").text(z);
                $("#grid-cell-"+i+"-"+j).text("");
               
				              }
				}
				}
				}

				var movel=function(){
					for (var i = 0; i<3; i++) {
						for (var j = 0; j < 4; j++) {
							         var k=i+1;
						     if($("#grid-cell-"+k+"-"+j).text()==""){             
				                $("#grid-cell-"+k+"-"+j).text($("#grid-cell-"+i+"-"+j).text());
				                $("#grid-cell-"+i+"-"+j).text("");
				                
				              }   
				              }
					     };
				}
	movel();
	total();
	movel();
	total();
	movel();
	total();
	movel();
	total();
	getnubmer();
	getcolor();
	over();
	win();
}
var over=function(){
	var k=0,c=0,d=0;
	for (var i = 0; i<4; i++) {
				for (var j = 0; j < 4; j++) {
			         var a=i+1,b=j+1;
						    if($("#grid-cell-"+i+"-"+j).text()!=""){
						    	k++;
						    	
				              }
				            if ($("#grid-cell-"+i+"-"+j).text()!=$("#grid-cell-"+a+"-"+j).text()&&
				            	$("#grid-cell-"+i+"-"+j).text()!=$("#grid-cell-"+i+"-"+b).text()) {
                                    c++;
                                    
				            };
				            if ($("#grid-cell-"+i+"-"+j).text()!="2048") { 
				                  d++;
                                    
				            };
				      if (k==16&&c==16&&d==16) {
				      	$(".over").css("display","block");
				      };
				}
				}
				
}

var win=function(){
	for (var i = 0; i<4; i++) {
				for (var j = 0; j < 4; j++) {
                       if ($("#grid-cell-"+i+"-"+j).text()=="2048") {
                       	     $(".win").css("display","block");
                       };
				}
	}
}




$(function(){
    $(document).keydown( function( event ){
    switch( event.keyCode ){
        case 65: //left
             moveleft() ;
            break;
        case 87: //up
             moveup();
            break;
        case 68: //right
            moveright();
            break;
        case 83: //down
         movedown() ;
            break;
        default: //default
            break;
    }
});

   //全局变量，触摸开始位置  
            var startX = 0, startY = 0;  
              
            //touchstart事件  
            function touchSatrtFunc(evt) {  
               
                    evt.preventDefault();  
  
                    var touch = evt.touches[0]; //获取第一个触点  
                    var x = Number(touch.pageX); //页面触点X坐标  
                    var y = Number(touch.pageY); //页面触点Y坐标  
                    //记录触点初始位置  
                    startX = x;  
                    startY = y;  
  
            }
  
            //touchmove事件，这个事件无法获取坐标  
            function touchendFunc(evt) {  
                    evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  
                    var touch = evt.changedTouches[0]; //获取第一个触点  
                    var x = Number(touch.pageX); //页面触点X坐标  
                    var y = Number(touch.pageY); //页面触点Y坐标 
                    var k=(y-startY)/(x-startX);
                    if(k<1&&k>-1){
                        if (x-startX>20) {
                           moveright();
                        };
                        if (x-startX<-20) {
                            moveleft();
                        };
                  }else {
                         if (y-startY>20) {
                           movedown();
                        };
                        if (y-startY<-20) {
                            moveup();
                        };
                 }
            }
            //绑定事件  
                
    document.getElementById('grid-container').addEventListener('touchstart', touchSatrtFunc, false); 
    document.getElementById('grid-container').addEventListener('touchend', touchendFunc, false);  
     
    //自适应

})

