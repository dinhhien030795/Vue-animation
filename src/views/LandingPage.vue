<template>
    <header>
        <nav id="nav">
            <h3 id="logo">Bong Da Nam Viet</h3>
            <img class="hamburger" src="../assets/img/menu-burger.svg" alt="hamburger">
        </nav>
        <section>
            <div class="hero">
                <img src="../assets/img/landing_page_2_upscaled.jpg" alt="">
                <h1 class="headline">Sport 2 Life</h1>
                <p class="hero-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repudiandae ab iusto ea adipisci nisi quas consequatur deleniti culpa quaerat voluptas sunt, mollitia expedita dolorum corporis animi doloribus rem temporibus.</p>
            </div>
        </section>
    </header>
    <div class="slider">

    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import {gsap, Power2} from 'gsap';
    export default {
        setup() {

            let animation = null;

            onMounted(() => {
            animation = gsap
                .timeline()
                .fromTo('.hero', {height: '0%'}, {height: '80%', duration: 1, ease: Power2.easeInOut})
                .fromTo('.hero', {width: '100%'}, {width: '80%', duration: 1.2, ease: Power2.easeInOut})
                .fromTo('.slider', {x: '-100%'}, {x: '0%',duration: 1.2, ease: Power2.easeInOut}, "=-1.2")
                .fromTo('#logo', {opacity: 0, x: '30%'}, {opacity: 1, x: '0%', duration: 0.8, ease: Power2.easeIn}, "=-1.2")
                .fromTo('.hamburger', {opacity: 0, x: '-30%'}, {opacity: 1, x: '0%', duration: 0.8, ease: Power2.easeIn}, "=-0.8")
                .fromTo('.headline', {opacity: 0, y: '0%'}, {opacity: 1, y: '-300%', duration: 0.8, ease: Power2.easeInOut})
                .fromTo('.hero-text', {opacity: 0, y: '0%'}, {opacity: 1, y: '-500%', duration: 0.8, ease: Power2.easeInOut})


            });

            return {
                animation
            };
        }
        
    }
</script>

<style scoped>
.slider {
    position: absolute;           
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to left, #1a0419, #230a1f, #2e0d25, #3a0d2a, #470d2d, #571534, #671d3b, #772642, #8f3950, #a74c5e, #bf5f6d, #d8737b);    z-index: -1;
}

#nav {
    display: grid;
    grid-template-columns: 10% 1fr 1fr 10%;
    min-height: 10vh;
    color: #fff;
    align-items: center;
}
#logo {
    grid-column: 2/3;
    font-size: 24px;
    justify-self: start;
}
.hamburger {
    justify-self: end;
}

section {
    display: flex;
    height: 80vh;
    justify-content: center;
    align-items: center;

}
.hero {
    width: 100%;
    height: 80%;
    position: relative;
}
section img {
    width: 100%;
    height: 80%;
    object-fit: cover;
}
.headline {
    position: absolute;
    top: 70%;
    left: 10%;
    font-size: 100px;
    transform: translate(-20%, -70%);
    color: whitesmoke;
}
.hero-text {
    position: absolute;
    width: 40%;
    left: 1%;
}
</style>