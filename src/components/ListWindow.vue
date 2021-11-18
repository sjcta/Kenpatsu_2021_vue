<template>
    <div class="sidebar listWindow scrollbar--dark">
                    
        <dl class="active">
            <dt>
                <p class="pic">
                    <img src="@/assets/image/navi/userHead.svg" alt="">
                    <span>LIVE</span>
                </p>
                <h3>开会のご挨拶</h3>
            </dt>
            <dd>
                <strong>依田隆</strong>日立制作所执行役常务.CTO兼（研开）グループ長
            </dd>
        </dl>
        <dl>
            <dt>
                <p class="pic">
                    <img src="@/assets/image/navi/userHead.svg" alt="">
                    <span>LIVE</span>
                </p>
                <h3>开会のご挨拶</h3>
            </dt>
            <dd>
                <strong>依田隆</strong>日立制作所执行役常务.CTO兼（研开）グループ長
            </dd>
        </dl>
        <dl>
            <dt>
                <p class="pic">
                    <img src="@/assets/image/navi/userHead.svg" alt="">
                    <span>LIVE</span>
                </p>
                <h3>开会のご挨拶</h3>
            </dt>
            <dd>
                <strong>依田隆</strong>日立制作所执行役常务.CTO兼（研开）グループ長
            </dd>
        </dl>
        <dl>
            <dt>
                <p class="pic">
                    <img src="@/assets/image/navi/userHead.svg" alt="">
                    <span>LIVE</span>
                </p>
                <h3>开会のご挨拶</h3>
            </dt>
            <dd>
                <strong>依田隆</strong>日立制作所执行役常务.CTO兼（研开）グループ長
            </dd>
        </dl>
        <dl>
            <dt>
                <p class="pic">
                    <img src="@/assets/image/navi/userHead.svg" alt="">
                    <span>LIVE</span>
                </p>
                <h3>开会のご挨拶</h3>
            </dt>
            <dd>
                <strong>依田隆</strong>日立制作所执行役常务.CTO兼（研开）グループ長
            </dd>
        </dl>
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

.sidebar {
    display: block;
    position: fixed;
    width: 420px;
    height: 100vh;
    flex-shrink: 0;
    left: 0;
    top: 0;
    padding: 110px 15px 15px;
    background-color: rgb(0, 0, 0, .8);
    box-sizing: border-box;
    font-size: 14px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    z-index: 10;
    transition: left 150ms;
}
.sidebar dl {
    background-image: linear-gradient(0,#EEF8F8,#E8E8E8);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    position: relative;
    opacity: .7;
}
.sidebar dl.active {
    opacity: 1;
}

.sidebar dl dt{
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
}
.sidebar dl dt p.pic{
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 70px;
    min-width: 50px;
    margin: 0 10px;
    border-radius: 50%;
    background: #A0A0A0;
}
.sidebar dl dt h3{
    font-size: 20px;
    font-weight: 400;
    font-family: "Hiragino Sans GB";
}
.sidebar dl dt p.pic img{
    width: 100%;
}
.sidebar dl dt p.pic span{
    display: flex;
    align-items: center;
    position: absolute;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    bottom: 0;
    padding: 3px 10px;
    margin-left: 0;
    margin-right: 0;
    background: #39BD5C;
    color: #FFF;
    border-radius: 7px;
    font-size: 8px;
    line-height: 8px;
}
.sidebar dl dt p.pic span::before{
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #FFF;
    margin-right: 5px;
}
.sidebar dl dd {
    position: relative;
    font-size: 12px;
    margin: 5px 0 0;
    background: #288289;
    padding: 5px 15px;
    color: #FFF;
    border-radius: 10px;
    z-index: 0;
}
.sidebar dl dd strong {
    font-weight: 100;
    font-size: 14px;
    margin-right: 10px;
}


@media screen and (max-width: 1200px){
    .sidebar {
        display: block;
        margin-left: -420px;
        transition: margin 150ms 100ms;
    }
    .sidebar.active {
        position: fixed;
        left: 0;
        margin-left: 0;
    }
    
}
@media screen and (max-width: 720px){
    .sidebar {
        order: 9;
        position: absolute;
        margin-left: 0;
        width: 100vw;
        height: auto;
        bottom: 0;
        top: 0;
        left:0;
        right: 0;
        margin: 0 auto;
        padding: 0 15px 80px;
        overflow-y: scroll;
    }

    .sidebar.active {
        display: block;
        position: absolute;
    }


}
</style>