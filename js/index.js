setInterval(function(){
		document.getElementById("time").innerHTML = new Date().toLocaleString();
	},1000)

/*const关键字声明变量（常量）定义方式：const+变量名*/
/*document.querySelector()仅返回选择器的第一个元素  此处container前加'.'是因为这是一个类元素*/
const container=document.querySelector('.container');
const left=document.querySelector('.left');
const right=document.querySelector('.right');

/*当鼠标放上去显示效果*/
/*addEventListener() 方法用于向指定元素调用监听事件。且同一元素目标可重复添加，不会覆盖之前相同事件*/
left.addEventListener('mouseenter',()=>{
	container.classList.add('hover-left');
})

/*当鼠标离开把效果移除掉*/
left.addEventListener('mouseleave',()=>{
	container.classList.remove('hover-left');
})

right.addEventListener('mouseenter',()=>{
	container.classList.add('hover-right');
})

right.addEventListener('mouseleave',()=>{
	container.classList.remove('hover-right');
})

