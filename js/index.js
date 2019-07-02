/**
 * Created by Echo on 2018/1/26.
 */
function addLoadEvent(func){
    var onLoad = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        onLoad();
        func();
    }

}

//function changePics(){
//    var inner = document.getElementById('inner');
//    var ul = inner.children[0];
//    var imageLength = inner.offsetWidth;
//    var spanArr = inner.children[1].children;
//    for (var v=0; v<spanArr.length; v++){
//        spanArr[v].index = v;
//        spanArr[v].onmouseover = function(){
//            for (var j=0; j<spanArr.length; j++){
//                spanArr[j].className = '';
//            }
//            this.className = 'show';
//            //移动盒子
//            animate(ul,-(this.index * imageLength));
//        }
//    }
//}

function changePics(){
    var inner = document.getElementById('inner');
    var ul = inner.children[0];
    var imageLength = inner.offsetWidth;
    var spanArr = inner.children[1].children;
    var index = 0;
    var timer = null;

    // 定义并调用自动播放函数
    if(timer){
        clearInterval(timer);
        timer = null;
    }
    timer = setInterval(autoPlay, 2000);

    // 定义图片切换函数
    function autoPlay(){
        index++;
        if(index >= spanArr.length ){
            index = 0;
        }
        changeOptions(index);
    }

    // 鼠标划过整个容器时停止自动播放
    inner.onmouseover = function(){
        clearInterval(timer);
    };

    // 鼠标离开整个容器时继续播放至下一张
    inner.onmouseout = function(){
        timer = setInterval(autoPlay, 2000);
    };

    // 遍历所有数字导航实现划过切换至对应的图片
    for (var v=0; v<spanArr.length; v++){
        spanArr[v].id = v;
        spanArr[v].onmouseover = function() {
            clearInterval(timer);
            changeOptions(this.id);
        };
    }

    function changeOptions(target){
        for (var j=0; j<spanArr.length; j++){
            spanArr[j].className = '';
        }
        spanArr[target].className = 'show';
        ul.style.left = -(target * imageLength) + 'px';
        index = target
    }
}

//function animate(ele, target){
//    //clearInterval(ele.timer);
//    var speed = target>ele.offsetLeft?10:-10;
//    //ele.timer =  setInterval(function(){
//    //    var step = target - ele.offsetLeft;
//    //    ele.style.left = ele.offsetLeft + speed + 'px';
//    //    if(Math.abs(step)<Math.abs(speed)){
//    //        ele.style.left = target + "px";
//    //        clearInterval(ele.timer);
//    //    }
//    //},10);
//    ele.style.left = target + 'px';
//}



function currentChoose(ele){
    var itemArr = ele.getElementsByClassName('itemName');
    for (var v=0; v<itemArr.length; v++){
        //itemArr[v].setAttribute('title',v);
        itemArr[v].onmouseover = function(){
            //将其它栏的current类去掉
            for (var j= 0; j<itemArr.length; j++){
                itemArr[j].removeAttribute('id');
            }
            this.setAttribute('id','current');
            itemArr[0].setAttribute('id','current');
        };
        itemArr[v].onmouseout = function(){
            for (var j= 0; j<itemArr.length; j++){
                itemArr[j].removeAttribute('id');
            }
            itemArr[0].setAttribute('id','current')
        };
    }

}

//function scroll(){
//    var product = document.getElementsByClassName('product')[0];
//    var ul = product.children[0];
//    var liArr = ul.children;
//    //var ulNewLi = ul.children[0].cloneNode(true);
//    //ul.appendChild(ulNewLi);
//    var timer;
//    ul.onmouseout = function(){
//        timer = setInterval(function(){
//            //alert(ul.offsetLeft);
//            if(Math.abs(ul.offsetLeft) / 195 == 0){
//                //ul.style.left = 0;
//
//                ulNewLi = ul.children[0].cloneNode(true);
//                ul.appendChild(ulNewLi);
//                ul.removeChild(liArr[0]);
//            }else{
//                ul.style.left = ul.offsetLeft - 5 + 'px';
//            }
//
//
//
//        }, 500);
//    };
//    ul.onmouseover = function(){
//        clearInterval(timer)
//    };
//
//
//
//}


function playImg() {
    var speed = 20;
    var tab = document.getElementsByClassName('product')[0];
    var tab1 = document.getElementById('demo1');
    var tab2 = document.getElementById('demo2');
    tab2.innerHTML = tab1.innerHTML;    //设置或返回表格行的开始和结束标签之间的 HTML
    //alert(tab1.innerHTML);
    function Marquee() {
        //alert(tab2.offsetWidth - tab.scrollLeft);   初始1146
        if (tab2.offsetWidth - tab.scrollLeft <= 960)
            tab.scrollLeft -= tab1.offsetWidth;
        else {
            tab.scrollLeft++;
        }
    }
    var MyMar = setInterval(Marquee, speed);
    tab.onmouseover = function(){
        clearInterval(MyMar)
    };
    tab.onmouseout = function(){
        MyMar = setInterval(Marquee, speed)
    }

}

