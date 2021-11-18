<template>
    <div id="board">
        <HeadBar current="board"></HeadBar>
        <BgAnimation></BgAnimation>

        <div id="boardMind">
            <form class="search">
                <input type="text" placeholder="关键字搜索">
                <button class="icon"></button>         
            </form>

            <div v-for="(n,idx) in dataList" class="checkBox" :class="'type' + n.id" :key="idx">
                <div class="checkTitle">
                    <span>{{n.id}}</span>
                    <h2>{{n.name}}</h2>
                </div>
                
                <div class="checkBox_check">
                    <p v-for="(item, index) in n.board" :key="index">
                        <label><input type="checkbox">
                        {{ item.type }}</label>
                    </p>
                </div>
                <div class="boardList">
                    <div v-for="(item, index) in n.board" :key="index">
                        <router-link :to="'/board/details/' + n.id + '/' + item.sn ">
                            <p>{{ item.type }}</p>
                            <p>{{ item.title }}</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import HeadBar from "@/components/HeadBar.vue";
import BgAnimation from '@/components/BgAnimation.vue';

export default {
    components:{
        HeadBar,BgAnimation
    },
    data() {
        return {
            dataList: [],
            api: "/static/data/board.json"
        }
    },
    mounted() {
        let the = this;

        this.$axios
            .get(this.api)
            .then(function(response){
               the.dataList = response.data;
            })
            .catch(error => console.log(error))
    },
    methods: {
    }
}
</script>

<style scoped>
#board #boardMind{
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 1600px;
    box-sizing: border-box;
    margin: 0 auto;
    
}

#board #boardMind .search{
    width: 50%;
    margin: 0 auto;
    position: relative;
    margin-top: 100px;
    display: flex;

}
#board #boardMind .search input{
    width: 100%;
    color: #000000;
    padding: 15px 0;
    font-size: 18px;
    outline: none;
    border: none;
    border-bottom: 1px solid #383838;
    background: transparent;
    border-radius: 0;

}
#board #boardMind .search input::placeholder{
    color: black;
}
#board #boardMind .search button{
    width: 48px;
    height: 48px;
    background: transparent url("../../assets/image/board/search.svg") no-repeat 18% 43%; 
    border: none;
    outline: none;
    background-size: 65%;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: -12px;
}
#board #boardMind .checkBox div.checkTitle{
    display: flex;
    align-items: center;
}
#board #boardMind .checkBox div.checkTitle span{
    display: block;
    width: 40px;
    height: 40px;
    line-height:40px;
    border-radius: 50%;
    background-color: #36CDA0;
    text-align: center;
    color: #FFF;
    font-size: 24px;
    font-weight: 400;
    flex-basis: 40px;
    flex-shrink: 0;
}

#board #boardMind .checkBox div.checkTitle h2{
    margin-left: 15px;
    font-family: "Times New Roman";
}
#board #boardMind .checkBox div.checkBox_check{
    display: flex;
    flex-wrap: wrap;
}
#board #boardMind .checkBox div.checkBox_check p{
    margin-right: 50px;
    display: flex;
    align-items: center;

}
#board #boardMind .checkBox div.checkBox_check p label{
    font-size: 14px;
    padding-left: 5px;
}
#board #boardMind .checkBox div.checkBox_check p input{
    cursor: pointer;
}
#board #boardMind .checkBox div.checkBox_check p label{
    cursor: pointer;
}
#board #boardMind .checkBox .boardList{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 40px;
}

#board #boardMind .checkBox .boardList div{
    width: calc((100% - 60px) / 3);
    margin-right: 30px;
    margin-bottom: 30px;
    box-sizing: border-box;
    background: linear-gradient(135deg,#369591 30%, rgba(113, 194, 195, .3));
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    z-index: 10;
    box-shadow: 0 0px 40px -10px rgba(0, 0, 0, .3);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    transition: all 200ms;
}
#board #boardMind .checkBox .boardList div:nth-child(3n){
    margin-right: 0;
}


#board #boardMind .checkBox .boardList div p{
    color: #FFF;
    padding-bottom: 5px;
    font-size: 15px;
}
#board #boardMind .checkBox .boardList div a{
    display: block;
    width: 100%;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
    
}
#board #boardMind .checkBox .boardList div p{
    width: 70%;
    text-shadow: 0 1px 3px rgba(0, 0, 0, .3);
}
#board #boardMind .checkBox .boardList div p:first-child{
    font-size: 13px;
    color: #D0E7E6;
}
#board #boardMind .checkBox .boardList div::before{
    content:"A";
    display: block;
    color: rgba(255, 255, 255, .1);
    position: absolute;
    bottom: -27px;
    left: 20px;
    font-size: 100px;
    font-weight: 900;
    z-index: -4;
}
#board #boardMind .checkBox.typeB .boardList div::before{
    content: "B";
}
#board #boardMind .checkBox.typeC .boardList div::before{
    content: "C";
}
#board #boardMind .checkBox{
    margin-top: 50px;
    margin-bottom: 20px;
}
#board #boardMind .checkBox.typeB{
    margin-bottom: 100px;
}
#board #boardMind .checkBox.typeB .checkTitle span{
    background-color: #4B84CE;
}
#board #boardMind .checkBox.typeB .boardList div{
    background-image: linear-gradient(135deg,#3077AA 30%, rgba(108, 190, 248, .3));
    box-shadow: 0 10px 40px -10px rgba(0, 0, 0, .3);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
}

#board #boardMind .checkBox .boardList > div:hover {
    box-shadow: 0 0px 50px -10px rgba(0, 0, 0, .8);
}

/*-------------- 手机端 ---------------- */

@media screen and (max-width: 1600px){
    #board #boardMind{
        padding-left: 30px;
        padding-right: 30px;
        box-sizing: border-box;
    }
}

@media screen and (max-width: 1280px){
    #board #boardMind{
        padding-left: 30px;
        padding-right: 30px;
        box-sizing: border-box;
        min-width: 320px;
    }

}


@media screen and (max-width: 800px){
    #board #boardMind .checkBox .boardList div p{
        width: 85%;
    }
}

@media screen and (max-width: 720px){
    #board #boardMind{
        position: relative;
        padding: 0 15px;
        box-sizing: border-box;
    }
    #board #boardMind .checkBox .boardList div p{
        width: 85%;
    }
    #board #boardMind .search{
        width: 70%;
    }
    #board #boardMind .search input{
        width: 100%;
    }
}

@media screen and (max-width: 540px){
    #board #boardMind .checkBox .boardList div{
        width: 100%;
        margin-right: 0;
    }
    #board #boardMind .search {
        width: 100%;
    }

}


@media screen and (max-width: 376px){
    #board #boardMind .checkBox div.checkBox_check{
        display: flex;
        flex-direction: column;
    }
    #board #boardMind .checkBox div.checkBox_check p{
        margin-right: 0;
    }
    #board #boardMind .checkBox .checkTitle h2{
        font-size: 18px;
    }
}
</style>