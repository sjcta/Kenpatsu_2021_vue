<template>
    <div id="naviArea" ref="naviArea" :class="{'hidden': hideNavi}">
        <div class="logo">
                <img src="@/assets/image/navi/logo.svg" alt="">
        </div>
        
        <div class="nav" v-if="current!=''">
            <router-link 
            v-for="(item,idx) in navlist" 
            :key="idx" 
            :to="'/'+item.toLowerCase()" class="navList" :class="{'active': current==item}">
                <i class="icon" :class="item.toLowerCase()"></i>
                <span>{{item}}</span>
            </router-link>
        </div>

        <div class="language en">
                <p>
                    <a href="#javascript:;" :class="{'active':currentLang=='cn'}">中<span>文</span></a>
                    <a href="#javascript:;">日<span>本語</span></a>
                    <a href="#javascript:;">En<span>glish</span></a>
                </p>
                <router-link :to="{name:'login'}" class="login">
                    <img src="@/assets/image/navi/user.png" alt="">
                </router-link>
        </div>

        <div id="agendaButton" v-if="showAgendaButton" :class="{'active': showAgenda}" @click="agendaChange">
            <i class="icon agenda"></i><span>Agenda</span>
        </div>

        <div class="tools">
                <div class="button comment" @click="showChatWindow" :class="{'close':this.$parent.showChatWindow}"></div>
                <router-link to="/board" class="button return"></router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['current','showAgendaButton'],
    data(){
        return{
            navlist:["Home","Speech","Board","Message"],
            currentLang: 'cn',
            showAgenda: false,
            hideNavi: false,
            naviHeight: 50
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    mounted() {
        this.naviHeight = this.$refs.naviArea.offsetHeight;
    },
    methods: {
        handleScroll (event) {

            //console.log(window.pageYOffset, this.naviHeight)
            if(window.pageYOffset > this.naviHeight && window.innerWidth <= 720) {
                this.hideNavi = true;
            }else{
                this.hideNavi = false;
            }
        },
        agendaChange () {
            this.showAgenda = !this.showAgenda;
            this.$emit('showAgenda', this.showAgenda);
        },
        showChatWindow () {
            this.$parent.showChatWindow = !this.$parent.showChatWindow;
        }
    },
}
</script>


<style>
#naviArea {
    display: block;
    position: fixed;
    transition: all 150ms;
    top: 0;
    width: 100%;
    height: 50px;
    padding: 0 25px;
    box-sizing: border-box;
    background-color: #101010;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 30px rgba(0, 0, 0, .5);
}
#naviArea .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 60%;
    min-width: 550px;
}
#naviArea .nav a {
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    margin-right: 5%;
    height: 100%;
    width: 23%;
    max-width: 150px;
    overflow: hidden;
    box-sizing: border-box;
}
#naviArea .nav a:nth-last-child(1){
    margin-right: 0;
}
#naviArea .nav a::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: auto;
    right: auto;
    width: 0%;
    height: 3px;
    background: #00D6FF;
    transition: all 250ms ease-in-out;
}

#naviArea .nav a::before {
    content: "";
    position: absolute;
    width: 100%;
    top: 0;
    height: 0;
    padding-top: 50%;
    transition: all 600ms;
    opacity: 0;
    border-radius: 50%;
    background: radial-gradient(rgb(66, 235, 250) 0%, rgba(0,0,0,0) 70%);
}
#naviArea .nav a:hover::before {
    opacity: .3;
}

#naviArea .nav a i.icon,
#naviArea .nav a i.icon::after {
    position: relative;
    width: 35px;
    height: 35px;
    display: inline-block;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: all 300ms;
}

#naviArea .nav a i.icon::after {
    content: "";
    opacity: 0;
}
#naviArea .nav a i.icon.home{ background-image:url('../assets/image/navi/home_off.png');}
#naviArea .nav a i.icon.home::after{ background-image:url('../assets/image/navi/home_on.png');}
#naviArea .nav a i.icon.speech{ background-image:url('../assets/image/navi/live_off.png');}
#naviArea .nav a i.icon.speech::after{ background-image:url('../assets/image/navi/live_on.png');}
#naviArea .nav a i.icon.board{ background-image:url('../assets/image/navi/board_off.png');}
#naviArea .nav a i.icon.board::after{ background-image:url('../assets/image/navi/board_on.png');}
#naviArea .nav a i.icon.message{ background-image:url('../assets/image/navi/message_off.png');}
#naviArea .nav a i.icon.message::after{ background-image:url('../assets/image/navi/message_on.png');}
#naviArea .nav a span {
    font-size: 14px;
    color: #ACACAC;
    padding-left: 15px;
    transition: all 300ms;
    font-family: Arial, Helvetica, sans-serif;
}
#naviArea .nav a.router-link-active span,
#naviArea .nav a:hover span {
    color: #FFF;
    text-shadow: 0 2px 15px rgb(66, 235, 250), 0 0 35px rgb(66, 235, 250, .8), 0 0 52px rgb(66, 235, 250, .5);
}
#naviArea .nav a.router-link-active::after,
#naviArea .nav a:hover::after {
    width: 100%;
}
#naviArea .nav a.router-link-active i.icon::after,
#naviArea .nav a:hover i.icon::after {
    opacity: 1;
}

#naviArea .language{
    display: flex;
    align-items: center;
}
#naviArea .language p{
    font-size: 14px;
    display: flex;
}

#naviArea .language p a.active,
#naviArea .language p a.hover{
    color: #FFF;
}
#naviArea .language p a.active span,
#naviArea .language p a.hover span{
    color: #FFF;
}

#naviArea .language p a span{
    color: #818181;
}

#naviArea .language p a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 5px;
    margin: 0 5px;
    font-size: 14px;
    line-height: 14px;
    color: #818181;
}
#naviArea .language p a:hover {
    background: #333;
    border-radius: 5px;
}

#naviArea .language p a::after{
    content: "";
    position: absolute;
    height: 18px;
    width: 0;
    border-right: 1px solid #818181;
    right: -5px;
}
#naviArea .language p a:last-child::after{
    display: none;
}


#naviArea .language>a.login{
    width: 38px;
    height: 38px;
    background-color: #1276BD;
    border-radius: 50px;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin-left: 20px;
    transition: background 250ms;
}
#naviArea .language>a.login img{
    width: 100%;
    margin-left: 2px;  
}
#naviArea .language>a.login:hover {
    background-color: rgba(18, 118, 189, .7);
}

#naviArea.hidden {
    margin-top: -50px;
    box-shadow: 0 0 0px rgba(0, 0, 0, .5);
}

#naviArea .logo{
    width: 100px;
}
#naviArea .logo img{
    width: 100%;
    display: flex;
    align-items: center;
}

#agendaButton {
    position: absolute;
    display: none;
    justify-content: center;
    align-items: center;
    height: 30px;
    right: 10px;
    top: 70px;
    border-radius: 15px;
    padding: 3px 10px;
    font-size: 8px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    transition: all 250ms;
    background: #7AC4C3;
    z-index: 2;
    cursor: pointer;
}

#agendaButton i.icon.agenda {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: url("../assets/image/home/time.svg") center center no-repeat;
    background-size: 80%;
    transition: background-image 150ms;
}

#agendaButton span {
    margin-left: 5px;
}

#agendaButton.active i.icon.agenda {
    background: url("../assets/image/icon/icon_close.svg") center center no-repeat;
}
#agendaButton.active span {
    display: none;
}

#naviArea .tools {
    display: none;
}

#naviArea .tools .button.comment.close::before {
    background: url("../assets/image/speech/close_light.svg") center center no-repeat;
    background-size: 80%;
}


@media screen and (max-width: 1200px){
    #agendaButton {
        display: flex;
    }
}

@media screen and (max-width: 996px){
    /* 公共 */
    #naviArea .logo{
        width: 85px;
    }
    #naviArea .nav{
        width: 55%;
        min-width: 475px;
        justify-content: center;
    }
    #naviArea .nav a{
        width: 21%;
        margin-right: 20px;
        padding: 0;
        text-align: center;
    }
    #naviArea .nav a:last-child{
        margin-right: 0;
    }
    #naviArea .nav a span{
        padding: 0;
        text-align: center;
    }
    #naviArea .nav a i.icon,
    #naviArea .nav a i.icon::after {
        width: 30px;
        height: 30px;
    }
    #naviArea .nav a span{
        font-size: 11px;
        margin: 0 5px;
    }
#naviArea .language p{
        font-size: 13px;
    }
    #naviArea .language p span{
        margin: 0 4px;
    }
    #naviArea .language p a {
        text-transform:uppercase;
    }
    #naviArea .language p a span{
        display: none;
    }


    #naviArea .language>a.login{
        width: 33px;
        height: 33px;
        margin-left: 10px;
    }
    #naviArea .language > a.login img{
        width: 100%;
        margin-left: 1px;  
    }



    #naviArea .tools {
        position: absolute;
        display: none;
        justify-content: space-between;
        width: 100%;
        left: 0;
        padding: 0 30px;
        box-sizing: border-box;
        bottom: -80px;
    }
    

    #naviArea .tools .button {
        display: block;
        width: 60px;
        height: 60px;
        margin: 0;
        background-color: rgba(0, 0, 0, .2);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        box-shadow: 0 0 50px rgba(0, 0, 0, .1);
    }


    #naviArea .tools .button:hover {
        box-shadow: 0 0 20px rgba(255, 255, 255, .9);
    }

    #naviArea .tools .button.comment span{
        display: none;
    }
    #naviArea .tools .button.comment::before {
        width: 50%;
        height: 50%;
    }

    #naviArea .tools .button.comment {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        display: flex;
        order:2;
    }
    #naviArea .tools .button.return {
        order:1;
    }

}

@media screen and (max-width: 800px){
    #naviArea{
        padding: 0 15px;
        box-sizing: border-box;
    }

    #naviArea .nav {
        min-width: 448px;
    }
    #naviArea .nav a{
        margin-right: 15px;
        width: auto;
    }

}


@media screen and (max-width: 720px){
    #naviArea {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }
    #naviArea .nav{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: auto;
        min-height: 60px;
        background: #FFF;
        background-image: linear-gradient(180deg,rgba(255,255,255,.5), rgba(255,255,255,.9));
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        box-shadow: 0 0 30px rgba(0, 0, 0, .1);
        display: flex;
        justify-content: space-around;
        min-width: auto;
        -webkit-overflow-scrolling: touch;
        transform: rotateZ(0);
        -webkit-transform: rotateZ(0);
    }
    #naviArea .nav a {
        display: flex;
        width: 25%;
        padding: 10px 10px 20px;
        flex-direction: column;
        align-items: center;
        margin: 0;
    }
    #naviArea .nav a.router-link-active {
        background:linear-gradient(180deg,rgba(0, 193, 230, .5) 10%, rgba(255,255,255,1));
    }
    #naviArea .nav a.router-link-active span,
    #naviArea .nav a:hover span {
        color: #095D6D;
    }
    #naviArea .nav a::after{
        background: transparent;
    }
    #naviArea .nav a span{
        padding-top: 5px;
        font-size: 11px;
    }
    #naviArea .nav a i.icon, #naviArea .nav a i.icon::after {
        width: 20px;
        height: 20px;
    }
    
}

</style>