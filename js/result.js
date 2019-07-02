/**
 * Created by Echo on 2018/3/2.
 */
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
            itemArr[2].setAttribute('id','current');
        };
        itemArr[v].onmouseout = function(){
            for (var j= 0; j<itemArr.length; j++){
                itemArr[j].removeAttribute('id');
            }
            itemArr[2].setAttribute('id','current')
        };
    }

}