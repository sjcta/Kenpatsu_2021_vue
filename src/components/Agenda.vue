<template>
    <div id="agendaArea" class="sidebar ja scrollbar--dark" :class="{'active':showAgenda}">
            <h2>Agenda</h2>
            <h3>プロゼテーション</h3>
            <dl>
                <dt>13:00 ~ 13:00</dt>
                <dd>
                    <ul>
                        <li>
                            <strong>开会のご挨拶</strong>
                            <span>铃木教洋<br>
                            日立制作所执行役常务.CTO兼<br />（研开）グループ長</span>
                        </li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>13:00 ~ 13:00</dt>
                <dd>
                    <ul>
                        <li><strong>中国地域战略</strong>
                            <span>依田隆 日立制作所执行役常务.<br />中国总代表</span>
                        </li>

                    </ul>
                </dd>
            </dl>
            <h3>セッション1  中国における研究开发の取り組み</h3>
            <dl>
                <dt>13:00 ~ 13:00</dt>
                <dd>
                    <ul>
                        <li>HCR＆Dの战略<br>
                            陈杨秋 <span>HCR&D总经理</span>
                        </li>
                        <li>ポストコロナの中国デジタルスマート
                            <br>シティポストコロナの中国デジタルス <br>マートシティソリューション创生 <br>库鲁时雨 <span>DS部 资深研究员</span>
                        </li>
                        <li>中国SIB事业に向けたデジタル技術開発
                            プロダクト事業贡献 <br> 马元琛   <span>ST 部门长</span></li>
                        <li>现地モノつくり技術の进化による
                            プロダクト事業贡献<br />秦明<span> PT 部门长 </span></li>
                    </ul>
                </dd>
            </dl> 

            <h3>セッション2  招待演讲</h3>
            <dl>
                <dt>13:00 ~ 13:00</dt>
                <dd>
                    <ul>
                        <li>第十四次五が年计画を见据えた、
                            中国エネルギー分野の変化と新机会 <br>清华大学教授 </li> 
                    </ul>
                </dd>
            </dl>

            <h3>セッション3  パネルディスカッション</h3>
            <dl>
                <dt>13:00 ~ 13:00</dt>
                <dd>
                    <ul>
                        <li>ポストコロナの中国における <br>イノベーション机会と <br> オープンイノベーションの推进 <br>耿璐 <span>HCR&D部 资深研究员 大学、インキュベーター、スタートアップ、 HCR＆D代表者</span> </li>
                    </ul>
                </dd>
            </dl>
        
    </div>
</template>

<script>
export default {
    props: ['showAgenda']
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
    padding: 60px 30px 30px;
    background-color: rgb(0, 0, 0, .8);
    box-sizing: border-box;
    font-size: 14px;
    z-index: 99;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    transition: margin 250ms ease-in-out;
}

#agendaArea::after {
    content: "AGENDA";
    display: inline-block;
    position: fixed;
    bottom: 0%;
    left: 0;
    z-index: -1;
    color: rgba(255, 255, 255, .1);
    font-size: 80px;
    font-weight: 900;
    transform: rotate(-90deg);
    transform-origin: 0 0;
    filter:blur(3px);
    -webkit-filter:blur(3px);
    transition: all 300ms ease-in-out;
}
#agendaArea h2 {
    color: #FFF;
}
#agendaArea h3 {
    padding: 5px 5px 5px 25px;
    margin: 0 auto;
    border-radius: 25px;
    background: rgba(255, 255, 255, .9);
    text-align: left;
    font-size: 14px;
}

#agendaArea dl {
    position: relative;
    padding: 0;
    margin: 0;
}
#agendaArea h3 + dl {
    padding: 15px 0 0;
}

#agendaArea dl::before {
    content: "";
    display: block;
    position: absolute;
    width: 1px;
    top: 0;
    left: 30.3%;
    height: 100%;
    background-color: #A9A9A9;
    z-index: 0;
}
#agendaArea dl dt {
    display: block;
    position: absolute;
    width: 30%;
    min-width: 100px;
    left: 0;
    font-size: 10px;
    color: #FFF;
}
#agendaArea dl dd {
    position: relative;
    width: 60%;
    padding: 0;
    margin-left: 35%;
    box-sizing: border-box;
    font-size: 10px;
}
#agendaArea dl dd h4 {
    padding: 0;
    margin: 0 0 15px;
    line-height: 1;
}

#agendaArea dl dd ul {
    padding-left: 3px;
    padding-bottom: 15px;
    margin: 0;
}
#agendaArea dl dd ul li {
    margin-bottom: 15px;
    list-style: none;
    color: #FFF;
    font-size: 12px;
}
#agendaArea dl dd ul li strong {
    display: block;
}
#agendaArea dl dd ul li:last-child {
    margin-bottom: 0;
}
#agendaArea dl dd ul li::before {
    content: "";
    display: block;
    position: absolute;
    left: -24px;
    width: 9px;
    height: 9px;
    border-radius: 10px;
    border: 3px solid rgba(0, 0, 0, .8);
    background: #FFF;
    z-index: 1;
}
#agendaArea dl dd ul li span{
    font-size: 12px;
}


@media screen and (max-width: 1200px){
    .sidebar {
        display: block;
        margin-left: -420px;
        transition: all 400ms 200ms;
    }
    #agendaArea::after {
        left: -420px;
        transition: all 400ms 200ms;
    }
    #agendaArea.active {
        margin-left: 0px;
        height: 100vh;
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        box-shadow: 0 0 50px rgba(0, 0, 0, .8);
        transition: all 400ms 200ms;
        z-index: 99;
    }
    #agendaButton {
        display: flex;
    }
}

@media screen and (max-width: 720px){
    .sidebar {
        padding: 60px 20px 100px;
    }
    #agendaArea.active {
        width: 100%;
    }
    #agendaArea.active::after {
        left:0;
    }
    #agendaArea * {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
}




</style>
