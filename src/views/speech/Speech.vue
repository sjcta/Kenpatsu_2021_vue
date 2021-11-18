<template>
    <div id="speech">
        <HeadBar current="speech"></HeadBar>
        <div id="mainArea">
            <div class="speechTitle">
                <h4>HCH R&D KENPATSU 2021</h4>
                
                <div>
                    <i class="icon list" 
                        :class="{'active': showListWindow}" 
                        @click="windowSwitcher('list')" 
                        data-ref="listWindow"></i>
                    <i class="icon chat " 
                        :class="{'active': showChatWindow, 'alert': newMessage}" 
                        @click="windowSwitcher('chat')" 
                        data-ref="chatWindow"></i>
                </div>
            </div>
            <div id="mainContent" class="cn">
                <div class="speechMain">
                    <img src="../../assets/image/speech/video_Img.png" width="100%" alt="" />
                    </div>
            </div>

            <section>
                <chat-window :class="{'active': showChatWindow}"></chat-window>
                <list-window :class="{'active': showListWindow}"></list-window>
            </section>
        </div>
    </div>
</template>

<script>
import HeadBar from "@/components/HeadBar.vue";
import ChatWindow from "@/components/ChatWindow.vue";
import ListWindow from "@/components/ListWindow.vue";

export default {
    components:{
        HeadBar, ChatWindow, ListWindow
    },
    data() {
        return {
            showListWindow: true, // 直播列表窗口控制
            showChatWindow: false, // 留言窗口控制
            newMessage: true, // 新消息标记
            wSize: this.getWindowSize() // 窗口尺寸
        }
    },
    mounted() {
        let the = this;
        window.addEventListener("resize", function(){
            the.wSize = the.getWindowSize();

            if(the.wSize != 'middle') {
                the.showListWindow = the.showChatWindow==true ? false : true;
            }else{
                the.showListWindow = false;
            }
        });
    },
    methods: {
        getWindowSize() {
            if(window.innerWidth > 1200) {
                return 'large'
            }else if(window.innerWidth < 720){
                return 'small'
            }else{
                return 'middle'
            }
        },
        windowSwitcher(vm) {

            if(this.wSize == 'middle') {
                if(vm=='list'){
                     this.showListWindow = !this.showListWindow;
                }else{
                     this.showChatWindow = !this.showChatWindow;
                }
            }else{
                if(vm=='chat' && this.showChatWindow) {
                    this.showListWindow = !this.showListWindow;
                }else{
                    this.showListWindow = !this.showListWindow;
                    this.showChatWindow = !this.showChatWindow;
                }
                if(vm=='list' && !this.showListWindow) {
                    this.showListWindow = !this.showListWindow;
                    this.showChatWindow = !this.showChatWindow;
                }
            }
        }
    },
    watch:{
        showListWindow() {
           if(this.showListWindow==true) {
               this.showChatWindow = false;
           }
        },
        showChatWindow() {
           if(this.showChatWindow==true) {
               this.showListWindow = false;
           }
        }
    }
}
</script>

<style scoped>


#speech #naviArea #agendaButton{
    display: none;
}


#speech #mainArea{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: #222;
}
#speech #mainArea .speechTitle{
    position: relative;
    width: 100%;
    height: 50px;
    font-family: 'Times New Roman', Times, serif;
    background: #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    margin-top: 50px;
    z-index: 21;
    transition: all 200ms;
}
#speech #mainArea .speechTitle h4{
    color: #8A8A8A;
    font-size: 20px;
    font-weight: 400;
    line-height: 1;
}
#speech #mainArea .speechTitle i.icon {
    cursor: pointer;
    transition: opacity 300ms;
}

#speech #mainArea .speechTitle i.icon:hover {
    opacity: .7;
}
#speech #mainArea .speechTitle i.icon.list{
    position: relative;
    width: 25px;
    height: 25px;
    margin-right: 10px;
}

#speech #mainArea .speechTitle i.icon.chat{
    position: relative;
    width: 25px;
    height: 25px;
}

#speech #mainArea .speechTitle i.icon.chat.alert::after {
    content: "";
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #F00;
    right: -3px;
    top: -3px;
}


#speech #mainContent {
    margin-left: 420px;
    padding: 0px;
    flex-grow:0;
}








@media screen and (max-width: 1200px){
    #speech #mainContent {
        margin-left: 0;
    }
    #speech #mainArea .speechTitle i.icon.list{
        display: inline-block;
    }
}


@media screen and (max-width: 720px){
    #speech #mainArea {
        flex-direction: column;
        justify-content: flex-start;
    }
    #speech #mainArea #mainContent {
        flex-grow: 0;
    }

    #speech #mainArea .speechTitle h4 {
        font-size: 16px;
        line-height: 1;
    }
    #speech #mainArea .speechTitle i.icon.list,
    #speech #mainArea .speechTitle i.icon.chat {
        width: 20px;
        height: 20px;
    }
    #speech #mainArea > section {
        display: block;
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        flex-shrink: 100;
        flex-grow: 1;
        background: #000;
    }
    #speech #mainArea .speechTitle {
        height: 40px;
        background: #222;
        padding: 0 15px;
    }
}

</style>