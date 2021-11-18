<template>
    <div id="login">
        <HeadBar current=""></HeadBar>
        <BgAnimation></BgAnimation>
        <div id="mainArea">
            <div id="particles-js"></div>
            <div class="signBox">
                <small>{{titleSmall}}</small>
                <h2>{{titleName}}<span>{{titleTime}}</span></h2>
                <form method="POST" action="/home/">
                    <input type="text" placeholder="Name">
                    <input type="text" placeholder="Password">
                    <router-link :to="{name:'home'}">
                        <button type="button">{{btn}}</button>
                    </router-link>
                </form>
                <a href="">
                    {{clause}}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import HeadBar from "@/components/HeadBar.vue";
import BgAnimation from '@/components/BgAnimation.vue';

// import particles from 'particles.js'
export default {
    name:"Login",
    data(){
        return{
            // navHide:false,
            titleSmall:'Welcome to',
            titleName:'HCH R&D',
            titleTime:'Kenpatsu 2021',
            btn:'登录',
            clause:'隐私条款'
        }
    },
    mounted(){
        this.initParticleJS
    },
    components:{
        HeadBar,BgAnimation
    },
    methods:{
        initParticleJS () {
            //particles.load('particles-js','/particles.json');
        }
    }

    

}
</script>



<style scoped>

#login #mainArea{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: relative;
}

#login #mainArea .signBox {
    width: calc(100% - 40px);
    max-width: 540px;
    padding: 60px;
    box-sizing: border-box;
    border-radius: 25px;
    background: rgba(255, 255, 255, .5);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    box-shadow: 0 0 50px rgba(0, 0, 0, .1);
}

#login #mainArea .signBox small {
    font-size: 22px;
    margin: 0;
    color: #5B5B5B;
}
#login #mainArea .signBox h2 {
    font-size: 45px;
    margin: 0;
    font-weight: 100;
}

#login #mainArea .signBox h2 span {
    display: block;
}
#login #mainArea .signBox p:nth-child(3){
    font-size: 45px;
}
#login #mainArea .signBox form{
    display: flex;
    flex-direction: column;
    margin: 30px 0 0;
}

#login #mainArea .signBox form input{
    border: none;
    border-bottom: 1px solid #818181;
    color: #818181;
    outline: none;
    padding: 15px 0;
    margin-bottom: 15px;
    font-size: 23px;
    border-radius: 0;
    background: transparent;
}
#login #mainArea .signBox button {
    display: block;
    margin: 30px 0;
    width: 100%;
    height: 50px;
    background: #095D6D;
    border-radius: 59px;
    outline: none;
    border: none;
    color: #FFF;
    font-size: 25px;
    cursor: pointer;
    transition: all 300ms;
}
#login #mainArea .signBox button:hover {
    opacity: .8;
}

#login #mainArea .signBox a{
    display: block;        
    text-align: center;
    color: #666666;
    font-size: 12px;
}
#login #mainArea .signBox a:hover{
    color: #FF0000;
}

@media screen and (max-width: 540px){
    #login #mainArea {
        flex-direction: column;
        justify-content: flex-start;
    }
    #login #mainArea .signBox {
        padding: 30px;
        margin-top: 120px;
        min-height: 50vh;
        background: none;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        box-shadow: none;
    }
    #login #mainArea .signBox small {
        font-size: 16px;
    }
    #login #mainArea .signBox h2 {
        font-size: 35px;
    }
    #login #mainArea .signBox h2 span {
        display: block;
        font-size: 35px;
    }
    #login #mainArea .signBox form {
        margin: 25px 0 0;
    }
    #login #mainArea .signBox form input{
        font-size: 16px;
    }
    #login #mainArea .signBox button{
        height: 40px;
        font-size: 18px;
    }
}
</style>