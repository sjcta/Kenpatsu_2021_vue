<template>
    <div class="chatWindow scrollbar--light">
        <div class="chatWindowTitle">
            <h3>28条互动评论</h3>
            <i class="icon close" @click="showChatWindow=!showChatWindow"></i>
        </div>
        
        <dl>
            <dt>
                <p>
                    <img src="@/assets/image/navi/userHead.svg" alt="">
                </p>
            </dt>
            <dd>
                <div class="title">
                    <p><span>我  ~1小时前</span><br> 测试一下留言功能是否可用...</p>
                    <span><i class="icon chatMessage"></i> 3</span>
                </div>
                <div class="block">
                    <p><span class="fontColor">版主:</span> 针对您这个测试，我感觉没问题</p>
                    <p><span>我:</span> 测试一下留言功能是否可用...</p>
                    <p><span class="fontColor">版主:</span> 针对您这个测试，我感觉没问题</p>
                    <p><span>我:</span> 测试一下留言功能是否可用...</p>
                    
                </div>
            </dd>
        </dl>
        <dl>
            <dt>
                <p>
                    <img src="@/assets/image/navi/userHead.svg" alt="">
                </p>
            </dt>
            <dd>
                <div class="title">
                    <p><span>我  ~1小时前</span><br> 测试一下留言功能是否可用...</p>
                    <span><i class="icon chat"></i> 0</span>
                </div>
            </dd>
        </dl>

        <dl>
            <dt>
                <p>
                    <img src="@/assets/image/navi/userHead.svg" alt="">
                </p>
            </dt>
            <dd>
                <div class="title">
                    <p><span>我  ~1小时前</span><br> 测试一下留言功能是否可用...</p>
                    <span><i class="icon chat"></i> 0</span>
                </div>
            </dd>
        </dl>
        <dl>
            <dt>
                <p>
                    <img src="@/assets/image/navi/userHead.svg" alt="">
                </p>
            </dt>
            <dd>
                <div class="title">
                    <p><span>我  ~1小时前</span><br> 测试一下留言功能是否可用...</p>
                    <span><i class="icon chat"></i> 0</span>
                </div>
            </dd>
        </dl>

        <form>
            <input type="text" placeholder="留言内容">
            <button>发送</button>
        </form>

        
    </div>
</template>


<script>

export default {
    data(){
        return{
        }
    }
}
</script>


<style scoped>
/* 评论 */
.chatWindow {
    display: block;
    position: fixed;
    background: #FFF;
    width: 420px;
    max-width: 100%;
    left: -420px;
    top: 0;
    bottom: 0;
    opacity: 0;
    height: 100vh;
    z-index: 11;
    padding: 120px 20px 20px;
    box-shadow: 0 0 30px rgba(0,0,0,.8);
    /* transition: all 400ms 200ms; */
    transition: all 150ms 100ms;
}

.chatWindow.active {
    left: 0;
    z-index: 11;
    opacity: 1;
    transition: all 150ms 100ms;
}
.chatWindow dl{
    margin: 0;
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
}
.chatWindow dl:last-child{
    border:none;
}
.chatWindow dl dt p{
    width: 40px;
    height: 40px;
    background: #3174B8;
    border-radius: 50%;
}
.chatWindow dl p img{
    width: 100%;
}
.chatWindow dl dd{
    margin-left: 20px;
    width: 100%;
}
.chatWindow dl dd div.title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
.chatWindow dl dd div.title > span {
    display: flex;
    position: absolute;
    right: 5px;
    align-items: center;
    line-height: 20px;
}
.chatWindow dl dd div.title span i.icon{
    display: inline-block;
    width: 20px;
    height: 20px;
    cursor: pointer;
    background-position: center center;
    background-size: contain;
    margin-right: 3px;
}
.chatWindow dl dd div.title p span{
    font-size: 12px;
}
.chatWindow dl dd div p{
    font-size: 14px;
}
.chatWindow dl dd div.block{
    width: 100%;
    background: #F7F2F2;
    border-radius: 8px;
    margin-top: 15px;
    padding: 15px;
}
.chatWindow dl dd div.block p{
    margin-top: 4px;
}
.chatWindow dl dd div p span{
    font-size: 14px;
    color: #999999;
}
.chatWindow dl dd div p span.fontColor{
    color: #F2B463;
}
.chatWindow .chatWindowTitle{
    position: relative;
}
.chatWindow .chatWindowTitle h3{
    font-weight: 100;
    text-align: center;
    font-size: 16px;
    margin: 0;
}

.chatWindow .chatWindowTitle i{
    position: absolute;
    top: 4px;
    right: 0;
    width: 15px;
    height: 15px;
    background: url("/assets/image/speech/close.svg") no-repeat;
    background-size: 15px 15px;
    cursor: pointer;
}
.chatWindow .chatWindowTitle i:hover{
    opacity: .5;
    transition: 200ms;
}


.chatWindow form{
    display: flex;
    position: absolute;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 0;
    bottom: 20px;
    left: 15px;
    right: 15px;
}
.chatWindow form input{
    border: 0;
    outline: none;
    width: 70%;
    border-radius: 30px;
    background: #ECECEC;
    padding: 10px 5px 10px 30px;
    font-size: 16px;
    line-height: 1;
}
.chatWindow form button{
    border: 0;
    outline: none;
    width: 25%;
    padding: 12px;
    border-radius: 30px;
    color: #FFF;
    font-size: 16px;
    line-height: 1;
    background: #F2B463;
}

@media screen and (max-width: 720px){
    .chatWindow {
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: scroll;
        top: 100vh;
        padding: 15px 15px 100px;
        width: 100vw;
        height: auto;
        transition: top 150ms 50ms;
    }
    
    .chatWindow.active {
        top: 0;
        transition: top 150ms 50ms;
    }

    .chatWindow.active + .sidebar {
        transform: scale(.9), blur(5px);
        transition: top 150ms 50ms;
    }

    .chatWindow form {
        position: relative;
        bottom: auto;
        left: auto;
        right: auto;
    }
}
</style>