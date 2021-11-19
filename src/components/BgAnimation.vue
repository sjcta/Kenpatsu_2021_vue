<template>
    <div class="background">
        <div id="particles"></div>
        <div class="mov noisy2">
            <video id="backgroundAnimation" 
            muted 
            loop = "loop" 
            style="object-fit:fill" 
            autoplay = "autoplay"
            playsinline="true"
            webkit-playsinline="true"
            x-webkit-airplay="true"
            x5-video-player-type="h5"
            x5-video-orientation="h5"
            x5-video-player-fullscreen="true"
            preload="auto">
            <source src="../assets/image/bgImg/bg3.webm" type="video/webm">
            <source src="../assets/image/bgImg/bg3.mp4" type="video/mp4">
            </video>
        </div>
    </div>

</template>

<script>

export default {
    data(){
        return{

        }
    },
    mounted () {
        var the = this;
        this.$nextTick(() => {
            the.initParticleJS()	
        })
    },
    methods: {
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
    },
    components:{
        
    },
}
</script>

<style scoped>

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
@keyframes showUp {
    0% { width: 100%; transform: translateY(85px); }
  100% { width: 100%; transform: translateY(0);  }
}


/*****************************************************************
background animation
*****************************************************************/
#particles {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.background {
    display: flex;
    justify-content: flex-end;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url("../assets/image/bgImg/bg.png") top center no-repeat;
    background-size: cover;
    overflow: hidden;
}
.background::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0);
    z-index: 5;
}
.background > div.mov {
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

.background > div.mov > video {
    display: block;
    position: absolute;
    left: 50%; /* % of surrounding element */
    top: 50%;
    min-width: 100%; 
    min-height: 100%; 
    width: auto; 
    height: auto;
    transform: translate(-50%, -50%); /* % of current element */
}
div.circle {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 1400px;
    min-width: 600px;
    height: 100%;
    max-height: 1400px;
    min-height: 600px;
    right: -30%;
    top: -30%;
    z-index: 0;
}

div.circle:nth-child(2) {
    width: 50%;
    height: 50%;
    right: auto;
    left: 10%;
    right: auto;
    top: 60%;
}



div.circle i {
    position:absolute;
    display: block;
    opacity: 1;
    height: 0;
    border-radius: 50%;
}


div.circle i.color1{
    width: 100%;
    padding-top:100%;
    background-image: linear-gradient(0deg, rgba(187, 255, 132, 0.9), rgba(30, 146, 255, 0.8));
    animation: rotate 60s infinite linear, 
                poping 11s infinite reverse linear,
                transform 50s ease-in-out infinite;
    transform-origin: 52% 50%;
    opacity: .7;
}
div.circle i.color2{
    width: 95%;
    padding-top:95%;
    background-image: linear-gradient(0deg, rgba(195, 121, 255, 0.8), rgba(86, 255, 241, 0.9));
    animation: rotate 40s infinite reverse linear, 
                poping 21s infinite linear,
                transform 30s infinite reverse linear;
    transform-origin: 51% 49%;
    opacity: .7;
}
div.circle i.light1 {
    width: 60%;
    padding-top:68%;
    background-image: radial-gradient(rgba(255, 255, 255,.5),rgb(255, 255, 255,0));
    animation: rotate 35s infinite reverse linear, 
                transform 70s infinite reverse linear,
                poping 10s infinite linear;
    transform-origin: 50% 50%;
}
div.circle i.light2 {
    display: block;
    width: 70%;
    padding-top:70%;
    background-image: radial-gradient(rgba(255, 255, 255,.7),rgb(255, 255, 255,0));
    animation: rotate 45s infinite linear, 
    transform 38s infinite linear,
    poping 30s infinite reverse linear;
    transform-origin: 50% 50%;
}

div.circle:nth-child(2) i:nth-child(1) {
    width: 76%;
    padding-top:75%;
    animation: rotate 35s infinite reverse linear, poping 21s infinite linear;
}

div.circle:nth-child(2) i:nth-child(2) {
    width: 80%;
    height: 0;
    padding-top:79%;
    left: 5%;
    animation: rotate 25s infinite reverse linear, poping 11s infinite  linear;
}
div.circle:nth-child(2) i:nth-child(3) {
    width: 80%;
    height: 0;
    padding-top:80%;
    animation: rotate 35s infinite linear, poping 5s infinite linear;
}
#particles-js {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 6;
} 
.noisy2::before {
    content: "";
    position: fixed;
    display: block;
    width: 100vw;
    height: 100vh;
    background: url("../assets/image/bgImg/bg_mask2.png") center center;
    opacity: .5;
    z-index: 5;
}
.noisy1 {
    background: url(data:image/png;base64,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);  
} 


</style>