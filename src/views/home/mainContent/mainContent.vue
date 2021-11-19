<template>
    <div id="mainContent">
            <div class="title">
                <span>Welcome to</span>
                <h2>HCH R&D <span>Kenpatsu 2021</span></h2>
                <p>日立(中国)有限公司 2021年度 研究发表会</p>
                <ul>
                    <li><i class="icon location"></i>Beijing</li>
                    <li><i class="icon date"></i>2021.12.1</li>
                </ul>
            </div>

            <div class="flexBox cards">
                <!------------
                    default: dl.live
                    LIVE active: dl.live.on
                -------------->
                <dl class="live on">
                    <dt>
                        <h3>Live Speech</h3>
                        <P>2021 Kenpatsu Online Live</P>
                    </dt>
                    <dd>
                        <div class="card"><i>LIVE</i><a>Speech<span>Kenpatsu 2021</span></a></div>
                    </dd>
                </dl>
                <dl class="board">
                    <dt>
                        <h3>R&D Board</h3>
                        <P> SIB creation, Common technology / platform</P>
                    </dt>
                    <dd class="swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide card style1"><a href="#">SIB creation</a></div>
                            <div class="swiper-slide card style2"><a href="#">Common technology / platform</a></div>
                        </div>
                    </dd>
                </dl>
            </div>

            <div class="footer flexBox">
                <dl>
                    <dt>Wechat<br />Offical Account</dt>
                    <dd><img src="/assets/image/home/qr_code.png"></dd>
                </dl>

                <dl>
                    <dt><a href="http://www.hitachi.com.cn/hcrd/">HCH R&D<br />Website</a></dt>
                    <dd><img src="/assets/image/home/website.png"></dd>
                </dl>

            </div>
    </div>
</template>

<script>

</script>

<style scoped>
#mainArea {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
}

#mainArea #mainContent {
    display: block;
    position: relative;
    flex-grow: 2;
    z-index: 9;
    width: auto;
    padding: 140px 60px 60px;
    overflow: hidden;
    transition: margin 250ms ease-in-out;
}

#mainContent {
    margin-left: 420px;
}


#mainContent div.title > span {
    display: block;
}
#mainContent div.title h2 {
    display: inline-block;
    font-family: 'Times New Roman', Times, serif;
    font-size: 300%;
    line-height: 1.5;
    margin: 0px 0 15px 0;
    border-bottom: 8px solid #E85857;
}
#mainContent div.title h2 span {
    font-family: 'Times New Roman', Times, serif;
}
#mainContent div.title p {
    font-size: 16px;
    color: #666;
    margin-bottom: 30px;
}
#mainContent div.title ul {
    display: flex;
    padding: 0;
}
#mainContent div.title ul li {
    display: inline-flex;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    margin-right: 20px;
}
#mainContent div.title ul li i.icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
}


#mainContent div.flexBox {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
}
#mainContent div.flexBox dl {
    display: flex;
    justify-content: space-between;
    width: 46%;
}
#mainContent div.flexBox dl dt {
    width: 25%;
}
#mainContent div.flexBox dl dt h3 {
    position: relative;
    margin-bottom: 40px;
    padding: 0;
    margin: 0 0 40px;
}
#mainContent div.flexBox dl dt h3::after {
    content:"";
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 50px;
    height: 3px;
    background: #FF0000;
}
#mainContent div.flexBox dl dt p {
    color: #666;
    font-size: 12px;
}

#mainContent div.flexBox dl dd {
    display: block;
    width: 70%;
    margin-left: 5%;

}
#mainContent div.flexBox dl dd div.card {
    display: block;
    position: relative;
    height: 0;
    padding-top: 60%;
    border-radius: 15px;
    box-shadow: 0 20px 20px -20px rgba(0, 0, 0, .6);
    cursor: pointer;
    z-index: 1;
}
#mainContent  div.flexBox dl.live div.card {
    background: linear-gradient(180deg, #e6e6e6, #BFBFBF);
    transition: all 400ms;
}
#mainContent  div.flexBox dl.live div.card i {
    display: block;
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 12px;
    font-style: normal;
    color: #333;
    opacity: 0;
}
#mainContent  div.flexBox dl.live.on div.card i {
    opacity: 1;
}
#mainContent  div.flexBox dl.live.on div.card i::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #F00;
    margin-right: 5px;
    border-radius: 5px;
    transition: 0ms;
    animation: twinkle 1.5s linear infinite;
}

#mainContent  div.flexBox dl.live div.card a {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    font-size: 300%;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 900;
    z-index: 1;
    text-shadow: 0 2px 2px rgba(255, 255, 255, 1);
    transition: all 500ms;
}
#mainContent  div.flexBox dl.live div.card a > span {
    display: block;
    clear: both;
    font-size: 11px;
}
#mainContent  div.flexBox dl.live div.card a::after {
    content: "";
    background: url("/assets/image/home/card_live.svg") center center no-repeat;
    position: absolute;
    display: block;
    width: 100px;
    height: 100px;
    background-size: 70%;
    z-index: -1;
}
#mainContent  div.flexBox dl.live div.card:hover {
    box-shadow: 0 20px 45px -5px rgba(0, 0, 0, .4);
    background: rgba(255, 255, 255, .5);
}
#mainContent  div.flexBox dl.live div.card:hover a {
    padding: 0 0 5px 0;
    text-shadow: 0px -2px 1px rgba(255, 255, 255, 1), 2px 4px 10px rgba(0, 0, 0, .5);
    letter-spacing: 2px;
}

#mainContent  div.flexBox dl.board div.card.style1 {
    background: linear-gradient(90deg, #318D89, #87D2D3);
    background-size: contain;
}
#mainContent  div.flexBox dl.board div.card.style2 {
    background: linear-gradient(90deg,#367FB2, #67B8F1);
    background-size: contain;
}
#mainContent  div.flexBox dl.board div.card::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: url("/assets/image/home/card_board.png") top right no-repeat;
    background-size: contain;
}
#mainContent  div.flexBox dl.board div.card a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    left: 0;
    top: 0;
    padding: 20px;
    width: 100%;
    height: 100%;
    font-size: 18px;
    box-sizing: border-box;
    color: #FFF;
}

#mainContent  div.flexBox dl.board div.card a::before {
    content: "";
    display: block;
    position: relative;
    width: 50px;
    height: 30px;
    transition: all 500ms;
    background: url("/assets/image/home/arrow_right.svg") left center no-repeat;
}
#mainContent  div.flexBox dl.board div.card:hover a::before {
    animation: gogo 1s linear infinite;
}

#mainContent div.footer {
    display: flex;
    padding: 15px 40px;
    background: rgba(255, 255, 255, .5);
    border-radius: 15px;
    margin-top: 60px;
    box-shadow: 0 0 30px rgba(0, 0, 0, .1);
}

#mainContent div.footer dl {
    width: 50%;
    margin: 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content:flex-end;
    align-content: center;
}
#mainContent div.footer dl:hover a {
    color: #F00;
}


#mainContent div.footer dl dd img {
    width: 60px;
    height: 60px;
}
#mainContent div.footer dl dt {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    flex-grow: 1;
}
#mainContent div.footer dl dt a {
    color: #333;
}
#mainContent div.footer dl dd {
    width: auto;
    margin: 0 30px 0 0;
}
#mainContent div.footer dl dd img {
    border-radius: 5px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, .2);
}

@media screen and (max-width: 1200px){
    #mainContent {
        margin-left: 0;
    }
}
@media screen and (max-width: 996px){
    #mainContent div.flexBox.cards dl {
        flex-direction: column;
    }
    #mainContent div.flexBox.cards dl dt {
        width: 100%;
    }
    #mainContent div.flexBox.cards dl dd {
        width: 100%;
        margin: 20px 0 0;
    }
    #mainContent div.flexBox dl dt h3 {
        margin: 0 0 20px;
    }
    #mainContent div.flexBox dl dt h3::after {
        bottom: -10px;
    }
}


@media screen and (max-width: 540px){
    #mainArea #mainContent {
        padding: 100px 30px 120px;
    }
    #mainContent div.title > span {
        font-size: 11px;
    }
    #mainContent div.title h2 {
        font-size: 50px;
        margin: 0 0 10px;
        line-height: 50px;
        border-bottom:0;
        font-family: 'Times New Roman', Times, serif;
        font-weight: 900;
    }
    #mainContent div.title h2 span {
        display: block;
        font-weight: 100;
        font-size: 90%;
        font-family: 'Times New Roman', Times, serif;
    }
    #mainContent div.title p {
        display: none;
    }

    #mainContent div.title ul {
        padding-bottom: 10px;
        border-bottom: 1px solid rgb(177, 27, 27);
    }
    #mainContent div.flexBox {
        margin-top: 30px;
    }
    #mainContent div.flexBox.cards {
        flex-direction: column;
    }
    #mainContent div.flexBox.cards > dl {
        width: 100%;
        flex-direction: row;
    }
    #mainContent div.flexBox.cards > dl dt {
        width: 30%;
        font-size: 12px;
    }
    #mainContent div.flexBox.cards > dl dd {
        width: 70%;
        margin: 0;
        padding-left: 15px;
        box-sizing: border-box;
    }
    #mainContent div.flexBox dl.live div.card a {
        font-size: 250%;

    }
    #mainContent div.flexBox dl.live div.card a span {
        font-weight: 100;
    }
    #mainContent div.flexBox dl.board div.card a {
        font-size: 14px;
    }
    #mainContent div.flexBox.footer {
        justify-content: space-between;
        padding: 15px;
    }
    #mainContent div.footer dl {
        width: 40%;
    }
    #mainContent div.footer dl dd {
        margin: 0 10px 0 0;
    }
    #mainContent div.footer dl dt {
        font-size: 11px;
    }
}
</style>