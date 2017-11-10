import _ from 'lodash';
import './style';
import Images from '../img/test.jpg';
import '../font.scss';
import printMe from './print';

function component (){
	var element = document.createElement('div');
	element.innerHTML ='使用resolve.extensions省略引入模块后缀名.js.css';
	element.classList.add('hello');
	var span = document.createElement('span');
	span.classList.add('icon-icon_jishushili');
	span.classList.add('iconStyle');
	element.appendChild(span);
	var btn = document.createElement('button');
	btn.innerHTML='click me';
	btn.onclick=printMe;
	element.appendChild(btn);
	return element ;
}
document.body.appendChild(component());

/*
	var image=new Image();
	image.src=Images;
	element.appendChild(image);
*/