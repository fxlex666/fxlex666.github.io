import{g as a,s as t,a as s,o as e,c as n,w as l,b as o,n as i,d as c,e as d,r as h,F as u,f as w,t as y,i as p,S as r,I as f,h as g,j as _}from"./index.a7b20834.js";var x=((a,t)=>{const s=a.__vccOpts||a;for(const[e,n]of t)s[e]=n;return s})({data:()=>({title:"Hello",hang:30,lie:30,nowsize:3,window:null,nowdata:[{x:6,y:8,type:1}],nowtype:null}),onLoad(){},created(){this.window=a(),console.log(window)},methods:{checkqiang(a,t){for(let s in this.nowdata){if(this.nowdata[s].x==a&&this.nowdata[s].y==t&&0==this.nowdata[s].type)return"qiang";if(this.nowdata[s].x==a&&this.nowdata[s].y==t&&1==this.nowdata[s].type)return"lu";if(this.nowdata[s].x==a&&this.nowdata[s].y==t&&2==this.nowdata[s].type)return"dou";if(this.nowdata[s].x==a&&this.nowdata[s].y==t&&99==this.nowdata[s].type)return"end"}return""},changetype(a,t){this.nowtype=t},gezifn(a,s,e){if(null==this.nowtype)return void t({title:"请先选择",icon:"none"});for(let t in this.nowdata)this.nowdata[t].x==s&&this.nowdata[t].y==e&&this.nowdata.splice(t,1);let n={x:s,y:e,type:this.nowtype};this.nowdata.push(n)},copyfn(){s({data:JSON.stringify(this.nowdata),success:function(){t({title:"复制成功"})}})},putdata(){this.nowdata=JSON.parse(this.shurudata),this.shurudata="",t({title:"填充成功"})},changesize(a,t){this.nowsize=t}}},[["render",function(a,t,s,x,k,z){const C=p,b=_,m=r,v=f;return e(),n(C,{class:"content"},{default:l((()=>[o(C,{class:"choose"},{default:l((()=>[o(C,{class:i(["kong",3==k.nowtype?"on":""]),onClick:t[0]||(t[0]=a=>z.changetype(a,3))},{default:l((()=>[c("空")])),_:1},8,["class"]),o(C,{class:i(["lvse",1==k.nowtype?"on":""]),onClick:t[1]||(t[1]=a=>z.changetype(a,1))},{default:l((()=>[c("路")])),_:1},8,["class"]),o(C,{class:i(["hongse",0==k.nowtype?"on":""]),onClick:t[2]||(t[2]=a=>z.changetype(a,0))},{default:l((()=>[c("墙")])),_:1},8,["class"]),o(C,{class:i(["jingbi",2==k.nowtype?"on":""]),onClick:t[3]||(t[3]=a=>z.changetype(a,2))},{default:l((()=>[c("豆")])),_:1},8,["class"]),o(C,{class:i(["end",99==k.nowtype?"on":""]),onClick:t[4]||(t[4]=a=>z.changetype(a,99))},{default:l((()=>[c("end")])),_:1},8,["class"]),o(C,{class:"sizec",onClick:t[5]||(t[5]=a=>z.changesize(a,.5))},{default:l((()=>[c(" 小 ")])),_:1}),o(C,{class:"sizec",onClick:t[6]||(t[6]=a=>z.changesize(a,1))},{default:l((()=>[c(" 中 ")])),_:1}),o(C,{class:"sizec",onClick:t[7]||(t[7]=a=>z.changesize(a,3))},{default:l((()=>[c(" 大 ")])),_:1})])),_:1}),o(C,{class:"h100"}),o(m,{class:"geziList","scroll-x":"true","scroll-y":"true",style:w("height:"+.7*k.window.windowHeight+"px")},{default:l((()=>[(e(!0),d(u,null,h(k.hang,((a,t)=>(e(),n(C,{class:"gezili",key:t},{default:l((()=>[(e(!0),d(u,null,h(k.lie,((a,s)=>(e(),n(C,{class:i(["gezi",z.checkqiang(s,t)]),style:w("width:"+10*k.nowsize+"px;height:"+10*k.nowsize+"px"),key:s,onClick:a=>z.gezifn(a,s,t)},{default:l((()=>[s==k.nowdata[0].x&&t==k.nowdata[0].y?(e(),n(b,{key:0,src:"./assets/xiaozhu.be14ba78.png",mode:"widthFix"})):g("",!0)])),_:2},1032,["class","style","onClick"])))),128))])),_:2},1024)))),128))])),_:1},8,["style"]),o(C,{class:"resultbox"},{default:l((()=>[o(C,{class:"text"},{default:l((()=>[c(y(k.nowdata),1)])),_:1}),o(C,{class:"btn",onClick:z.copyfn},{default:l((()=>[c(" 复制数据 ")])),_:1},8,["onClick"])])),_:1}),o(C,{class:"inputbox"},{default:l((()=>[o(v,{type:"text",modelValue:a.shurudata,"onUpdate:modelValue":t[8]||(t[8]=t=>a.shurudata=t),maxlength:"-1"},null,8,["modelValue"]),o(C,{class:"btn",onClick:z.putdata},{default:l((()=>[c(" 填充数据 ")])),_:1},8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-5b7a83f0"]]);export{x as default};
