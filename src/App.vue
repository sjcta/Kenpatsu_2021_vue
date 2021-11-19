<template>

  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default{
    // name:'app',
}


</script>




<style>

#app {
    -webkit-overflow-scrolling: touch;
}

/* 公共样式 */
html,body{
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Verdana, "Microsoft YaHei","PingFang","SimSun";
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
}
body * {
    box-sizing: border-box;
}

a{
    text-decoration: none;
}
ul li{
    list-style: none;
}
p{
    margin: 0;
}
.cn,.cn * {
    font-family: "Microsoft YaHei", "PingFang", "SimSun", "SimHei";
}
.ja,.ja * {
    font-family: Meiryo, "ＭＳ Ｐゴシック", "MS PGothic";
}
.en,.en * {
    font-family: Arial, Helvetica, sans-serif;
}
i.icon {
    display: inline-block;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 20px;
    height: 20px;
}

i.icon.location {
    background-image: url("assets/image/home/icon_location.svg");
}
i.icon.date {
    background-image: url("assets/image/home/icon_date.svg");
}
i.icon.chatMessage {
    background-image: url("assets/image/icon/icon_chat_on.svg");
}
i.icon.chat {
    background-image: url("assets/image/icon/icon_chat_off.svg");
}
i.icon.chat.active {
    background-image: url("assets/image/icon/icon_chat_on.svg");
}
i.icon.list{
    background-image: url("assets/image/icon/icon_list_off.svg");
}
i.icon.list.active {
    background-image: url("assets/image/icon/icon_list_on.svg");
}
.button.comment{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    width: 108px;
    height: 40px;
    background: rgba(0, 0, 0, .2);
    border-radius: 35px;
    margin-left: 20px;
    cursor: pointer;
    color: #FFF;
    font-size: 14px;
    transition: all 150ms;
}

.button.comment span {
    margin-left: 5px;
}
.button.comment::before {
    content: "";
    display: inline-block;
    background: url(assets/image/board/details/comment.png) no-repeat center center;
    background-size: contain;
    width: 20px;
    height: 20px;
}
.button:hover {
    background: rgba(0, 0, 0, .4);
    box-shadow: 0 0 10px rgba(255, 255, 255, .9), 0 0 30px rgba(255, 255, 255, .7);
}

.button.return {
    display: block;
    background: url(assets/image/home/arrow_right.svg) no-repeat center center;
    background-size: 70%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 5px;
    transform: rotate(180deg);
}




.scrollbar--dark::-webkit-scrollbar-track {
    background-color: #333;
}
.scrollbar--dark {
    scrollbar-color: #999 #393939;
    scrollbar-width: 5px;
    background: rgba(0, 0, 0, 0.7);
}
.scrollbar--dark::-webkit-scrollbar {
    height: 6px;
    width: 6px;
}
.scrollbar--dark::-webkit-scrollbar-corner {
    background: #393939;
}
.scrollbar--dark::-webkit-scrollbar-thumb {
    background: #999;
    border: 1px solid #393939;
}
.scrollbar--dark::-webkit-scrollbar-thumb:hover {
    background: #868686;
}


.scrollbar--light::-webkit-scrollbar-track
{
    width: 6px;
	background-color: #F5F5F5;
}
.scrollbar--light::-webkit-scrollbar
{
	width: 6px;
    height: 6px;
	background-color: #F5F5F5;
}
.scrollbar--light::-webkit-scrollbar-thumb
{
    border-radius: 10px;
	background-color: #666;
}
.scrollbar--light::-webkit-scrollbar-thumb:hover
{
	background-color: #999;
}

@keyframes rotate {
    0%, 100%{
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(360deg);
    }
}
@keyframes poping {
    0%,50%,100% {
        zoom: 1
    } 25% {
        zoom: 1.2
    } 75% {
        zoom: .9
    }
}
@keyframes twinkle {
    0%, 100%{
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
}
@keyframes gogo {
    0%, 20%, 40%, 100%{
        margin-left: 0;
    }
    15%, 35%{
        margin-left: 5px;
    }

}

@keyframes transform {
    0%,
  100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; } 
   14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; } 
   28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; } 
   42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; } 
   56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; } 
   70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; } 
   84% { border-radius: 66% 54% 50% 30% / 35% 61% 39% 65%; } 
}


@keyframes movement {
    0%,
  100% { transform: none; }
   50% { transform: translateY(20%) rotateY(10deg); }
}

</style>
