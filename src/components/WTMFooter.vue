<template>
    <div class="container footer-wrapper">
        <div style="display: flex; align-items: center">
        <WTMLogo style="filter: contrast(0); width: 2rem; margin-right: 0.5rem"></WTMLogo> WTM Manila
        <div style="height: 1px; width: 2rem"></div>
        <GDGLogoAlt style="filter: contrast(0); width: 2rem; margin-right: 0.5rem"></GDGLogoAlt> GDG Philippines
        </div>
        <ul class="HomeFooter__links" style="display: flex; align-items: center">
         <span style="margin-right: 0.75rem">Like us:</span> 
      <a target="_blank" href="https://www.facebook.com/wtmmanila" style="padding: 0.5rem 1rem; display: inline-block; border-radius: 3rem; background-color: #4B8BF5; color: white; display: inline-flex; align-items: center">
        <svg style="margin-right: 0.25rem" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        <span>Women Techmakers Manila</span>
        </a>
    </ul>
    </div>
</template>

<script>
import WTMLogo from './WTMLogo'
import GDGLogoAlt from './GDGLogoAlt'
export default {
    components: {
        WTMLogo,
        GDGLogoAlt
    }
}
</script>

<style lang="sass">
@import '../assets/style/responsive'

.footer-wrapper
    padding-bottom: 1rem
    display: flex
    margin-bottom: 2rem
    align-items: center
    flex-direction: column
    padding-top: 1.5rem

    @include from($tablet)
        flex-direction: row
        justify-content: space-between

.HomeFooter__links
    display: flex

.HomeFooter__link
    opacity: 0.5
    padding: 1rem
</style>