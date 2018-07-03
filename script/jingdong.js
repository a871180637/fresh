// var select=document.getElementById('select');//定位
// var content=document.getElementById('content');//定位
// var select1=document.getElementById('iconfont');//企业采购
// var content1=document.getElementById('iconfont-content');//企业采购
// var select2=document.getElementById('iconfont-content1');//客户服务
// var content2=document.getElementById('iconfont-customerService');//客户服务
// var select3=document.getElementById('myjingdong');//我的京东
// var content3=document.getElementById('myjingdong-content');//我的京东
// var select4=document.getElementById('navigation');//网站导航
// var content4=document.getElementById('navigation-content');//网站导航
// var select5=document.getElementById('search-content5');//购物车
// var content5=document.getElementById('search-content6');//购物车
// var select6=document.getElementById('search-content7');//二维码
// var content6=document.getElementById('search-content8');//二维码













var menu=document.querySelectorAll(".goods-11"),
    menuSub=document.querySelectorAll(".goods-117"),
    oncontent=document.querySelector(".goods-img-1"),
    oncontent1=document.querySelectorAll(".goods-img-1 li"),
    next=document.getElementById('next'),
    btn=document.querySelectorAll(".dots ul li"),
    bbc=document.querySelectorAll(".dao-3 li"),
    prev=document.getElementById('prev'),
    tp=document.getElementById(".tp")
    dao=document.querySelector(".dao"),
    daoOnMove=document.querySelectorAll(".dao-42-11"),
    daoOnMove1=document.querySelectorAll(".dao-42-13"),
    speed=0,
    iTarget=0,
    index=0,
    key=0,
    timer=null,
    len=menu.length;
 
    for(var i=0;i<len;i++){
      menu[i].index = i;
  menu[i].onmouseover=function(){
      menuSub[this.index].style.display="block";
  }
  menu[i].onmouseout=function(){
      menuSub[this.index].style.display="none";
  }
}  

    for(i=0;i<btn.length;i++){
       btn[i].index=i;
       btn[i].onclick=function(){   
        for(i=0;i<btn.length;i++){
              btn[i].className="";
        }
     this.className="active";
      iTarget=this.index * -800;
         key=this.index;
      move(iTarget);
  }
}


for(i=0;i<bbc.length;i++){
  bbc[i].index=i;
  bbc[i].onclick=function(){
    k=this.index;
    for(i=0;i<bbc.length;i++){
      bbc[i].className="";
    }
    this.className="active1";
    iTarget=597+k*300;
    onmove(iTarget)
  }
}

    // 生鲜秒杀图片渐变出现
// for(i=0;i<daoOnMove.length;i++){
//   daoOnMove[i].index=i;
//   daoOnMove[i].onmouseover=function(){
//     daoOnMove[index].classList.remove("active3");
//     daoOnMove1[index].classList.remove("active4");
//     index=this.index;
//     daoOnMove[this.index].classList.add('active3');
//     daoOnMove1[this.index].classList.add('active4');
//   }
//   daoOnMove[i].onmouseout=function(){
//     daoOnMove[index].classList.remove("active3");
//     daoOnMove1[index].classList.remove("active4");
//   }
// }



function onmove(iTarget){
     clearInterval(timer)
       timer=setInterval(function () {
           var scrollH=scroll().top;
           speed = (iTarget - scrollH) / 10;
           speed = speed > 0 ? Math.ceil(speed) : Math.round(speed)
           scrollTo(0,speed+scrollH);//
           if (!speed) clearInterval(timer);
       },30)
   }
          //兼容写法   获取滚动距离
function scroll(){
    if (document.documentElement.scrollTop){
        return {
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }
    else{
        return {
            top:document.body.scrollTop,
            left:document.body.scrollLeft
        }
    }
}



      // 下一张
      next.onclick=function(){
       key=++key % 4;
       var iTarget = key * -800;
       move(iTarget);
   }
     // 上一张
      prev.onclick=function(){
     key <=0 ? key = 4 : key;
       key--;
       var iTarget = key * -800;
       move(iTarget);
   }


      // 图片轮播缓速运动

function move(iTarget){
       clearInterval(timer)
       timer=setInterval(function () {
           speed = (iTarget - oncontent.offsetLeft) / 10;
           speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
           oncontent.style.left= oncontent.offsetLeft + speed + "px";
          
       },30)
   }
           // 
window.onscroll=function(){
if(document.documentElement.scrollTop>=397){
    dao.classList.add('dao-active');

}
else{
 dao.classList.remove('dao-active');
}
 }





// function $(id,all) {
//     return all ? document.querySelectorAll(all) : document.querySelector(id);
// }




new Vue({
  el:"#list",
  data:{
    changeBoxNum:1,
  },
  methods:{
      change: function(box_num){
        this.changeBoxNum=box_num;
      },
    },
})






                 //左边伸缩菜单




                        // 上部显示与隐藏函数
      // 定位显示与隐藏
   
   // select.onmouseover=function () {
   // 	content.style.display="block";   
   // }
   // select.onmouseout=function(){
   // 	content.style.display="none";
   // }
   // 	content.onmouseover=function(){
   // 	content.style.display="block";
   // }
   //  content.onmouseout=function(){
   // 	content.style.display="none";
   // }
   //          // 企业采购显示与隐藏
   //  select1.onmouseover=function () {
   // 	content1.style.display="block";   
   // }
   // select1.onmouseout=function(){
   // 	content1.style.display="none";
   // }
   // 	content1.onmouseover=function(){
   // 	content1.style.display="block";
   // }
   //  content1.onmouseout=function(){
   // 	content1.style.display="none";
   // }
   //    // 客户服务
   //   select2.onmouseover=function () {
   //  content2.style.display="block";   
   // }
   //  select2.onmouseout=function(){
   //  content2.style.display="none";
   // }
   //  content2.onmouseover=function(){
   //  content2.style.display="block";
   // }
   //  content2.onmouseout=function(){
   //  content2.style.display="none";
   // }
   //   // 我的京东
   //    select3.onmouseover=function () {
   //  content3.style.display="block";   
   // }
   //  select3.onmouseout=function(){
   //  content3.style.display="none";
   // }
   //  content3.onmouseover=function(){
   //  content3.style.display="block";
   // }
   //  content3.onmouseout=function(){
   //  content3.style.display="none";
   // }
   //  //网站导航
   //        select4.onmouseover=function () {
   //  content4.style.display="block";   
   // }
   //  select4.onmouseout=function(){
   //  content4.style.display="none";
   // }
   //  content4.onmouseover=function(){
   //  content4.style.display="block";
   // }
   //  content4.onmouseout=function(){
   //  content4.style.display="none";
   // }
   //   //购物车
   //  select5.onmouseover=function () {
   //  content5.style.display="block";   
   // }
   //  select5.onmouseout=function(){
   //  content5.style.display="none";
   // }
   //  content5.onmouseover=function(){
   //  content5.style.display="block";
   // }
   //  content5.onmouseout=function(){
   //  content5.style.display="none";
   // }

   //   //二维码
   //       select6.onmouseover=function () {
   //  content6.style.display="block";   
   // }
   //  select6.onmouseout=function(){
   //  content6.style.display="none";
   // }
   //  content6.onmouseover=function(){
   //  content6.style.display="block";
   // }
   //  content5.onmouseout=function(){
   //  content6.style.display="none";
   // }