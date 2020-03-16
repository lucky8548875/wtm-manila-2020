<template>
    <div class="WTMNav" id="WTMNav" ref="appBar">
        <!-- Mobile only navigation bar-->
        <header class="WTMNav__header container">
            <div class="WTMNav__section">
                <!-- Main Logo -->
                <div class="WTMNav__logo">
                    <WTMLogo class="WTMNav__logo-image"></WTMLogo>
                    <div>
                        Women Techmakers
                        <br>
                        Manila 2020
                    </div>
                </div>
                <!-- Navigation links -->
                <ul class="WTMNav__links hide-to-phone">
                    <li>
                <a href="#schedule" class="WTMNav__link">SCHEDULE</a>
            </li>
            <li>
                <a href="#speakers" class="WTMNav__link">SPEAKERS</a>
            </li>
                </ul>
            </div>
            <div class="WTMNav__section">
            <!-- Menu button -->
            <button @click="menuSync = !menuSync" class="WTMNav__menu-button hide-from-tablet">
                <transition name="button-rotate">
                <svg key="1" v-if="!menuSync" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                <svg key="2" v-else xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </transition>
            </button>
            <a target="_blank" class="button WTMNav__register-button button button--primary button--disabled hide-to-phone" disabled>
                Registration Closed
            </a>
            </div>
        </header>
        <transition name="menu-slide">
            <aside  v-show="menuSync" class="WTMNav__menu-drawer  hide-from-tablet">
                <ul class="WTMNav__aside-links">
                    <li>
                    <a @click="menuSync = !menuSync" href="#schedule" class="WTMNav__aside-link">Schedule</a>
                </li>
                <li>
                    <a @click="menuSync = !menuSync" href="#speakers" class="WTMNav__aside-link">Speakers</a>
                </li>
                </ul>
                <a class="WTMNav__register-button WTMNav__register-button--aside button button--primary button--disabled" disabled>
                    Registration Closed
                </a>
            </aside>
        </transition>
    </div>
</template>

<script>
import WTMLogo from './WTMLogo'

export default {
    components: {
        WTMLogo
    },
    data: function(){
        return {
            menuSync: false
        }
    },
    watch: {
    appBarDisplay: {
      immediate: true,
      handler: function(value) {
        window.addEventListener(
          "scroll",
          () => {
            // or window.addEventListener("scroll"....
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

            this.lastRelativePosition = st <= 0 ? 0 : st;
            this.$refs.appBar.classList.add("nav--fill");
            // }
            this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
            if (st === 0) {
              this.$refs.appBar.classList.remove("nav--fill");
            } else {
              this.$refs.appBar.classList.add("nav--fill");
            }
          },
          false
        );
      }
    }
  }
}
</script>

<style lang="sass">
@import '../assets/style/responsive'
.WTMNav
    position: fixed
    top: 0
    width: 100%
    z-index: 10
    padding-top: 0
    background-color: transparent
    box-shadow: 0px 4px 4rem rgba(0,0,0,0)
    will-change: padding-top, background-color, box-shadow-color
    transition: 0.2s padding-top, 0.2s background-color, 0.2s box-shadow
    

    @include from($tablet)
        padding-top: 0.75rem
    @include from($large-desktop)
        padding-top: 1.25rem
        

    &.nav--fill
        padding-top: 0
        background-color: white
        box-shadow: 0px 4px 4rem rgba(0,0,100,0.075)

    &__menu-button
        background-color: transparent
        border: none
        padding: 1rem 1.5rem

    &__header
        display: flex
        align-items: center
        justify-content: space-between

    &__section
        display: flex
        align-items: center

    &__logo
        display: flex
        align-items: center
        font-size: 0.8rem
        margin-right: 1rem
        @include to($phone)
            padding: 0rem 1rem
        @include from($tablet)
            font-size: 0.9rem
            margin-right: 2rem
        @include from($large-desktop)
            font-size: 1.2rem

    &__logo-image
        width: 2.25rem
        margin-right: 0.8rem
        @include from($tablet)
            margin-right: 1rem
            width: 3rem
        @include from($large-desktop)
            width: 3.5rem

    &__links
        display: flex
        padding: 0.75rem 0

    &__link
        transition: 0.2s color
        padding: 1.5rem
        font-size: 0.9rem
        &:hover
            color: black
    
    &__menu-drawer
        position: fixed
        top: 0
        left: 0
        width: 80vw
        height: 100%
        max-width: 15rem
        display: inline-block
        background-color: white
        box-shadow: -4px 0px 4rem rgba(0,0,100,0.075)

    &__aside-link
        padding: 0.75rem 2rem
        display: inline-block
        width: 100%

    &__register-button
        margin-top: 0.75rem
        margin-bottom: 0.75rem
        position: relative
        @include from($large-desktop)
            font-size: 1.2rem
            margin-top: 1.25rem
            margin-bottom: 1.25rem
        @include to($phone)
            margin-right: 1rem
            padding: 0.5rem 1.5rem !important
            margin-top: 1rem
            margin-bottom: 1rem
            font-size: 0.9rem
       

    &__register-button--aside
        margin-left: 2rem
        margin-top: 2rem
        width: calc(100% - 4rem)
        display: block
        text-align: center

.button--disabled
    background-color: transparent !important
    cursor: not-allowed
    color: #aaa !important
    border: 1.5px solid gainsboro !important
</style>