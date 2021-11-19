<template>
    <div id="details" :class="'type' + boardType">
        <HeadBar current="message"></HeadBar>
        <div id ="mainArea" :class="{'lock': showChatWindow}">
            <chat-window :class="{'active':showChatWindow}"></chat-window>

            <div class="articleHead">
                <div id="particles"></div>
                <div class="titleArea">
                    <div class="title">
                        <div class="number">{{currentBoard.sn}}</div>
                        <h1>
                            <span>{{currentBoard.type}}</span>
                            <p>{{currentBoard.title}}</p>
                        </h1>
                    </div>

                    <div class="tools">
                        <div class="audioPlayer"></div>
                        <div class="button comment" 
                            :class="{'close':showChatWindow}" 
                            @click="showChatWindow=!showChatWindow"><span>评论</span></div>
                    </div>  
                </div>
            </div>

            <div class="journal">
                <div class="scrollbar--light">
                    <img :src="currentBoard.panel" alt=""/>
                </div>
            </div>

            <div class="data">
                <ul>
                    <li class="pdf" v-for="(item,index) in currentBoard.detail" :key="index" >
                        <a href="#javascript:;">
                            <img :src="item.img" alt="">
                        </a>
                        <h3>{{item.title}}</h3>
                        <p>{{item.desc}}</p>
                    </li>
                </ul>

            </div>

        </div>
    </div>
</template>

<script>
import HeadBar from "@/components/HeadBar.vue";
import ChatWindow from "@/components/ChatWindow.vue";

export default {
    components:{ HeadBar,ChatWindow },
    data() {
        return {
            dataList: [],
            boardList: [],
            currentBoard: "",
            api: "/static/data/board.json",
            boardType: this.$route.params.type,
            boardSN: this.$route.params.sn,
            showChatWindow: false
        }
    },
    mounted() {
        let the = this;

        this.$nextTick(() => {
            this.initParticleJS()	
        })
        
        this.$axios
            .get(this.api)
            .then(function(response){
               the.dataList = response.data;
               the.dataList.forEach(function(list){
                   if(the.boardType == list.id) {
                       the.boardList = list;
                       the.filteredItems(the.boardSN);
                   }
                })
            })
            .catch(error => console.log(error))
    },
    methods: {
        filteredItems(sn) {
            let the = this;
            return the.boardList.board.filter(function (item) {
                if (item.sn == sn) {
                    the.currentBoard = item;
                }
            })
        },
        initParticleJS () {
                particlesJS('particles', {
                    particles: {
                    number: { value: 40, density: { enable: true, value_area: 700 } },
                    color: { value: "#ffffff" },
                    shape: {
                        type: "circle",
                        polygon: { nb_sides: 7 }
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim: { enable: false, speed: .5, opacity_min: 0.3, sync: false }
                    },
                    size: {
                        value: 10,
                        random: true,
                        anim: {
                        enable: true,
                        speed: 5,
                        size_min: 5,
                        sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: .5,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: { enable: false, rotateX: 600, rotateY: 1200 }
                    }
                    },
                    interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: false, mode: "repulse" },
                        onclick: { enable: false, mode: "push" },
                        resize: true
                    },
                    modes: {
                        grab: { distance: 400, line_linked: { opacity: 1 } },
                        bubble: { distance: 400, size: 30, duration: 2, opacity: 8, speed: 3 },
                        repulse: { distance: 200, duration: 0.4 },
                        push: { particles_nb: 4 },
                        remove: { particles_nb: 2 }
                    }
                    },
                    retina_detect: true
                })
        }
    }
}
</script>


<style>


/*----------------- 详情页 ---------------------*/
#details{
    min-width: 320px;
}
#details #mainArea{
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
}

#details #mainArea .articleHead{
    position: relative;
    width: 100%;
    height: auto;
    background-image: linear-gradient(to right,#379692, rgba(141,214,215));
    z-index: 1;
    padding: 80px 0 30px;
}

#details.typeB #mainArea .articleHead{
    background-image:linear-gradient(to right,#327AAD,#6ABCF5);
}
#details .titleArea{
    width: 100%;
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 30px 30px 0px;
}

#details #particles {
    position: absolute;
    height: 100%;
    top: 0;
    width: 100%;
    z-index: -1;
    opacity: .5;
}
#details .titleArea .title{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
}
#details .titleArea .title .number{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: #FFF;
    font-size: 30px;
    min-width: 60px;
}
#details .titleArea .title .number::before {
    font-size: 70px;
    font-weight: 600;
    line-height: 1;
}
#details.typeA .titleArea .title .number::before {
    content: "A";
}
#details.typeB .titleArea .title .number::before {
    content: "B";
}

#details .titleArea .title h1{
    display: flex;
    flex-direction: column;
    color: #FFF;
    margin: 0 0 20px 40px;
    flex-wrap: wrap;
}
#details .titleArea .title h1 span{
    font-size: 20px;
    font-family: "Times New Roman";
}
#details .titleArea .title h1 p{
    font-size: 45px;
    font-weight: 600;
    font-family: "Times New Roman";
}


#details .titleArea > .tools{
    display: flex;
    margin-top: 10px;
    position: relative;
    z-index: 1;
}

#details .titleArea > .tools .audioPlayer{
    width: 100%;
    min-width: 350px;
    height: 40px;
    background: rgba(0, 0, 0, .2);
    border-radius: 30px;
}
#details .titleArea > .tools .button.comment.close::before {
    background: url("../../assets/image/speech/close_light.svg") center center no-repeat;
    background-size: 70%;
}


#details #mainArea .journal{
    width: 100%;
    background: #eee;
}
#details #mainArea .journal div{
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
    
}
#details #mainArea .journal div img{
    display: block;
    width: 100%;
    margin: 0 auto;
}


#details #mainArea .data{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}
#details #mainArea .data ul{
    display: inline-flex;
    width: 100%;
    max-width: 1280px;
    margin-top: 70px;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0;
}
#details #mainArea .data ul li{
    width: calc((100% - 150px) / 4);
    margin-right: 50px;
    margin-bottom: 50px;
}
#details #mainArea .data ul li.pdf a{
    background: #D1D5DA url("../../assets/image/board/details/pdf_img.png") no-repeat center center;
    background-size: 50%;
}
#details #mainArea .data ul li:last-child{
    margin-right: 0;
}
#details #mainArea .data ul li a{
    display: block;
    width: 100%;
    height: 0;
    padding: 35%;
    max-height: auto;
    position: relative;
    overflow: hidden;
    background-color: #D1D5DA;
    border-radius: 15px;
    transition: all 250ms;
    /* top: 0; */
}
#details #mainArea .data ul li a img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
}
#details #mainArea .data ul li a::before{
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: url("../../assets/image/board/details/play.svg") center center no-repeat;
    display: block;
    width: 20%;
    height: 20%;
    background-size: contain;
    z-index: 2;
    transition: all 200ms;
}
#details #mainArea .data ul li a:hover {
    box-shadow: 0 0 40px rgba(0, 0, 0, .5);
}
#details #mainArea .data ul li a:hover::before {
    width: 25%;
    height: 25%;
}

#details #mainArea .data ul li:nth-child(2n-1) a:before{
    display: none;
}
#details #mainArea .data ul li h3{
    margin: 30px 0 15px;
    font-size: 30px;
    font-family: "Times New Roman";
}

#details #mainArea .data ul li p{
    font-size: 14px;
    color: #666;
}

#details .chatWindow {
    padding: 90px 30px 90px;
}




@media screen and (max-width: 1280px){
    #details #mainArea .data ul li{
        width: calc((100% - 90px) / 4);
        margin-right: 30px;
    }
    #details #mainArea .data ul{
        padding: 0 30px;
        box-sizing: border-box;
    }
}


@media screen and (max-width: 996px){
    /*------- 详情页 ------ */
    #details #mainArea .articleHead{
        position: relative;
        display: flex;
        flex-wrap: wrap;
        height: auto;
    }
    #details .titleArea .title{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-top: 50px;
    }

    #details .titleArea .title .number{
        order: 1;
    }
    #details .titleArea .title h1{
        margin-left: 0;
    }
    #details .titleArea .title h1 span{
        width: 90%;
        margin-bottom: 5px;
    }
    #details .titleArea .title h1 p{
        width: 90%;
        font-size: 37px;
    }
    #details .titleArea .tools{
        margin-top: 0;
        width: 100%;
    }
    #details .titleArea .tools .button.comment {
        display: none;
    }

    #details #naviArea .tools {
        display: flex;
    }
    
    #details .chatWindow .chatWindowTitle i.icon.close {
        display: none;
    }


    
   
}

@media screen and (max-width: 800px){
    #details #mainArea .data ul{
        padding: 0 15px;
        box-sizing: border-box;
        margin-top: 50px;
    }
}


@media screen and (max-width: 720px){
    
#details #mainArea.lock {
    height: 100vh;
    overflow:hidden;
}

    #details #mainArea .journal div{
        height: 100vw;
        overflow-x: auto;
        overflow-y: hidden;
    }
    #details .titleArea{
        padding: 0 15px;
    }
    #details #mainArea .journal div img{
        height: 100%;
        width: auto;
    }

    #details #mainArea .data ul li{
        width: calc((100% - 30px) / 2);
        margin-right: 0px;
    }

    #details .titleArea .title {
        padding-top: 60px;
    }
    #details .titleArea .title h1 p {
        font-size: 30px;
    }
    #details .titleArea .title .number::before{
        font-size: 60px;
    }
    #details .titleArea .title .number {
        font-size: 25px;
    }
    
    #details #naviArea > .tools {
        position: absolute;
        z-index: -1;
        padding: 0 15px;
        bottom: -65px;
    }
    #details #naviArea .tools .button {
        display: flex;
        width: 50px;
        height: 50px;
    }
}

@media screen and (max-width: 540px){
    /*------ 详情页 ------*/
    #details .titleArea{
        padding: 0 15px;
    }
    #details .titleArea .tools .btnAudio{
        margin-top: 20px;
    }
    #details .titleArea .title h1 span{
        font-size: 16px;
    }
    #details .titleArea .title h1 p {
        font-size: 24px;
    }
    
    #details .titleArea .title .number span{
        font-size: 20px;
    }

    /*------ 详情页结束 ------*/
    
}

@media screen and (max-width: 376px){
    #details #mainArea .data ul{
        margin-bottom: 70px;
    }
    #details #mainArea .data ul li{
        width: 100%;
    }
}
</style>