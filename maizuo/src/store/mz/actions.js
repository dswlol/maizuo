import state from './state';
import axios from 'axios';
export default {
	getdata(){
		axios.get("/findInfo").then((res)=>{			
			res.data.forEach((item)=>{
				//处理演员列表
				item.yy=item.yy.split(",")
				for(var i=0;i<item.yy.length;i++){
					item.yy[i]=item.yy[i].slice(1,-1)
				}
				//处理演员名字
				item.act=item.act.split(",")
				//将电影对象压入now
				state.now.push(item)
			})
		})
	}
};
