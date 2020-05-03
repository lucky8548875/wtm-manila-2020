<template>
    <div class="WTMAbout ">
    <div class="artwork-3"></div>
    <div class="container">
        
        <!-- <countdown :time="time">
            <template slot-scope="props">
                <div class="timer">
                    <div class="timer-art-1"></div>
                    <div class="timer-art-2"></div>
                    
                    <div class="timer__wrapper">

                            <transition name="counter-slide">
                                <h1 class="timer__number" :key="props.days">-</h1>
                            </transition>
                        <div class="timer__label">DAYS</div>
                    </div>
                    <div class="timer__wrapper">
                            <transition name="counter-slide">
                                <h1 class="timer__number" :key="props.hours">-</h1>
                            </transition>

                        <div class="timer__label">HOURS</div>
                    </div>
                    <div class="timer__wrapper">
                            <transition name="counter-slide">
                                <h1 class="timer__number" :key="props.minutes">-</h1>
                            </transition>
                        <div class="timer__label">MINUTES</div>
                    </div>
                    <div class="timer__wrapper">
                            <transition name="counter-slide">
                                <h1 class="timer__number" :key="props.seconds">-</h1>
                            </transition>
                        <div class="timer__label">SECONDS</div>
                    </div>
                </div>
            </template>
        </countdown> -->
        <div class="WTMAbout__info">
        <header>
            <div class="header-accent">
                <span>ABOUT</span>
                <div class="line-accent"></div>
            </div>
            <span class="header-main">Women</span>
            <span class="header-main">Techmakers</span>
        </header>
        <p class="WTMAbout__paragraph">
            {{$parent.data.strings.about}}
            <br>
             <span style="margin-top: 0.75rem; display: block">To know more visit <a style="color: #4B8BF5; font-weight: bold" href="https://www.womentechmakers.com" target="_blank" rel="noreferrer">womentechmakers.com</a></span>

        </p>
        </div>
    </div>
    </div>
</template>

<style lang="sass">
@import '../assets/style/responsive'
@import '../assets/style/variables'

.WTMAbout
    position: relative
.timer
    position: relative
    display: flex
    justify-content: space-around
    background-color: white
    margin: auto
    padding: 1.5rem
    padding-top: 0
    @include to($phone)
        width: calc(100% - 4rem)
    @include from($tablet)
        justify-content: center
    &__wrapper
        width: 5rem
        height: calc(3rem + 5vw)
        position: relative
        display: flex
        justify-content: center
        align-items: center
        text-align: center
        @include from($tablet)
            padding: 2rem 1rem
            width: 10rem
            height: 7.5rem
            margin: 1rem 0
        @include from($desktop)
            width: 12rem
        @include from($large-desktop)
            width: 14rem
            margin: 1.5rem 0
            height: calc(6rem + 5vw)
    
    &__number
        font-size: calc(1rem + 6vw)
        color: #22EAB8
        position: absolute
        left: 50%
        transform: translate(-50%, 0)
        @include from($tablet)
            font-size: 5rem
        @include from($desktop)
            font-size: 6rem
        @include from($large-desktop)
            font-size: 7rem

    &__label
        position: absolute
        bottom: 0
        font-size: 0.6rem
        @include from($tablet)
            font-size: 1rem
            bottom: -0.5rem
        @include from($desktop)
            bottom: -1rem
        @include from($large-desktop)
            font-size: 1.25rem
            bottom: -0.25rem

.timer-art-1
    width: 7rem
    height: 5rem
    background-color: $color-primary
    position: absolute
    bottom: -1rem
    left: -1.5rem
    border-top-left-radius: 3rem
    z-index: -1
    @include from($tablet)
        width: 15rem
        height: 10rem
        bottom: -2rem
        left: -3rem
        border-top-left-radius: 6rem
    @include from($large-desktop)
        width: 22rem
        height: 15rem
        bottom: -3rem
        left: -4.5rem
        border-top-left-radius: 9rem


.timer-art-2

    width: 2rem
    height: 2rem
    right: 4rem
    bottom: -1rem
    background-color: $color-primary-alt
    position: absolute
    border-radius: 50%
    z-index: -1
    @include from($tablet)
        width: 4rem
        height: 4rem
        right: 4rem
        bottom: -2rem
    @include from($large-desktop)
        width: 6rem
        height: 6rem
        right: 6rem
        bottom: -3rem
        
.WTMAbout__info
    margin: 5rem 2rem 0rem
    display: flex
    flex-direction: column
    @include from($tablet)
        margin: 10rem 0
        flex-direction: row
        align-items: center
        justify-content: space-around
    @include from($large-desktop)
        justify-content: space-between

.line-accent
    width: 4rem
    height: 0.15rem
    background-color: $color-accent
    margin-left: 1rem

.header-accent
    display: flex
    align-items: center
    margin-bottom: 1rem
    font-size: 0.9rem
    @include from($tablet)
        font-size: 1rem
    @include from($large-desktop)
        font-size: 1.25rem

.header-main
    color: $color-primary
    font-size: calc(1.8rem + 2vw)
    display: block
    line-height: calc(1.8rem + 2vw)
    font-weight: bold
    @include from($tablet)
        font-size: 2.5rem
        line-height: 2.5rem
    @include from($desktop)
        font-size: 3rem
        line-height: 3rem
    @include from($large-desktop)
        font-size: 5rem
        line-height: 5rem

.WTMAbout__paragraph
    line-height: 1.75rem
    font-size: 0.9rem
    margin: 2rem 0
    
    @include from($tablet)
        font-size: 1.1rem
        line-height: 2rem
        margin: 2rem
        max-width: 30rem
    @include from($large-desktop)
        font-size: 1.5rem
        line-height: 2.5rem
        max-width: 40rem

.artwork-3
    z-index: -1
    position: absolute
    background-image: url('https://firebasestorage.googleapis.com/v0/b/womentechmakers-5d23b.appspot.com/o/artwork-3.png?alt=media&token=b7206a2e-3f1c-40a3-a332-bf5872f6d9aa')
    background-size: cover
    background-repeat: no-repeat

    top: 2rem    
    left: 0
    width: 20rem
    max-width: 80vw
    height: 18rem

    @include from($tablet)
        
        left: 0
        width: 40vw
        height: 80vh
        bottom: -1rem
        top: unset

    @include from($desktop)
        top: unset
        bottom: -18rem
        
        left: 0
        width: 40vw
        height: 40vw
    

</style>

<script>
export default {
    computed: {
        time: function(){
            // var eventDate = new Date("2020-03-21T07:00:00+08:00");
            // var today = new Date()
            // return (eventDate - today)
        }
    }
}
</script>