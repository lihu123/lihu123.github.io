$(function(){
    let top=$(".top")[0],
        song=$(".song")[0],
        name=$(".name")[0],
        ly=$(".lyric")[0],
        audio=$("audio")[0],
        bofang=$(".bofang")[0],
        current=$(".current")[0],
        dur=$(".dur")[0],
        con=$(".con")[0],
        title=$(".title")[0],
        title1=$(".title1")[0],
        number=0,
        prev=$(".prev")[0],
        next=$(".next")[0];
    let imgs=$("img")[0];
    var photo = [
        {src:"images/mww.jpg"},
        {src:"images/rz.jpg"},
        {src:"images/lyj.jpg"},
        {src:"images/yzw.jpg"},
        {src:"images/zxy.jpg"}
    ]
    //初始化
    init(database[number])
    function init(obj){
            ly.innerHTML="";
            song.innerText=obj['songs'];
            name.innerText=obj['name'];
            title.innerText=obj['songs'];
            title1.innerText=obj['name'];
            dur.innerText=obj['alltime'];
            audio.src=obj.src;
            imgs.src=photo[number].src;
            let str='';
            obj['lyrics'].forEach(function(value,index){
            str+=`
                <li>${value.lyric}</li>
            `;
            })
            ly.innerHTML=str;
    }

    //播放暂停
    bofang.onclick=function(){
        if(audio.paused){
            audio.play();
            bofang.classList.toggle("bofangzanting02");
        }else{
            audio.pause();
            bofang.classList.toggle("bofangzanting02");
        }
    }

    //时间,歌词
    let i=0,x=0;

    audio.ontimeupdate=function(){
        //时间
        let second=time(audio.currentTime);
        let dura=time(audio.duration);
        current.innerText=second;

        //歌词
        database[number]['lyrics'].forEach(function(value,index){
            if(value.time==second){
                x=i=index;
            }
        })
        if(x<5){
            i=0;
        }else{
            i=x-5;
        }
        let stri="";
        for(let j=i;j<database[number]['lyrics'].length;j++){
            if(j==x){
                stri+=`
                  <li class="hot">
                    ${database[number]['lyrics'][j]['lyric']}
                  </li>  
                `;
            } else{
                stri+=`
                  <li>
                    ${database[number]['lyrics'][j]['lyric']}
                  </li>  
                `;
            }
        }
        ly.innerHTML="";
        ly.innerHTML=stri;


        //进度条
        con.style.width=audio.currentTime/audio.duration*100+'%';

        //播放结束自动切换
        if(audio.ended){
            number++;
            if(number>=database.length){
                number=0;
            }
            init(database[number]);
            audio.autoplay=true;
        }
    }

    //时间函数
    function  time(num){
        let m=Math.floor(num/60)>=10?Math.floor(num/60):'0'+Math.floor(num/60);
        let s=Math.floor(num%60)>=10?Math.floor(num%60):'0'+Math.floor(num%60);
        return `${m}:${s}`;
    }



    //下一首
    prev.onclick=function(){
        number--;
        if (number < 0) {
            number = database.length - 1;
        }
        music(number);
    }
    console.log(database.length)
    next.onclick=function(){
        number++;
        if(number>database.length-1){
            number=0;
        }
        music(number);
    }
    //切换
    function music(number){
        let flag=audio.paused;
        x=0;
        con.style.width=0;
        init(database[number])
        if(!flag){
            audio.autoplay=true;
        }else{
            audio.autoplay=false;
        }
    }

    //音量
    let laba=$('.yinliang001')[0];
    let first=$('.first')[0];
    let second=$('.second')[0];
    let yuan=$('.yuan')[0];
    let width=second.offsetWidth;
    let sond;
    laba.onclick=function(){
            if(audio.volume){
//              把当前的音量赋给sond
                sond=audio.volume;
                //当TRUE时 把0赋给当前音量
                audio.volume=0;
//              圆点的位置为0
                laba.html('&#xe621;')
            }else{
//              把保存的音量赋给audio volume
                audio.volume=sond;
                laba.html('&#xe654;')

            }
        
        }
        
        first.onclick=function(e){
//          求出当前音量
            audio.volume=e.offsetX/first.offsetWidth*1;
//          当改变音量时触发
            console.log(audio.volume)
            
        }
     
        audio.onvolumechange=function(){
                yuan.style.left=audio.volume*first.offsetWidth+'px'
                second.style.width=audio.volume*first.offsetWidth+'px'
            }
     
     let pregress=$(".pregress")[0]
     pregress.onclick=function(e){
//      把音频的时间长度赋给一个变量
        let zongtime=audio.duration;
//      当前的时间
        audio.currentTime=e.offsetX/pregress.offsetWidth*zongtime;
        con.style.width=e.offsetX+'px';
        console.log(pregress)
        
    }

})