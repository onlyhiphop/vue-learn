let name = '我是aaaaa中的name'
// 1、导出方法
function show(){
	console.log(name)
}
// 2、导出变量
export const flag = true

// 3、导出对象
export { 
	name,
	show
}

export class Person{
	run(){
		console.log('奔跑----')
	}
}

// 4、使用default导出,只能使用一次，它接受的时候不需要和导出的名字一致，支持重命名
// 所以当写 improt remarkName from './a.js' 时，使用的是export default的内容
export default function(){
	
}

