<template>
  <div id="app">
    <div class="warning-dialog" v-if="showWarn">
      <div class="warning-dialog__content">
        <h2 class="warning-dialog__header">EVENT POSTPONED</h2>
        <br>
        <p>Due to increasing number of cases of COVID-19, we will be postponing WTM Manila 2020 on March 21. <b style="color: #333">New date will be announced</b> as soon as everything is fine and everyone is safe.

Everyone's safety and health is our priority. We hope to still see you in WTM Manila 2020. Stay safe and wash your hands.</p>
<button @click="showWarn = false" style="padding: 0.75rem 3rem; background-color: #4B8BF5; color: white; border-radius: 2rem; border: none; font-weight: bold; margin-top: 1rem">OK</button>
      </div>
    </div>
    <WTMNav></WTMNav>
    <br>
    <br>
    <WTMLanding></WTMLanding>
    <br><br>
    <WTMAbout></WTMAbout>
    <br>
    <WTMHighlights></WTMHighlights>
    <WTMSchedule></WTMSchedule>
    <WTMSpeakers></WTMSpeakers>
    <WTMFaqs></WTMFaqs>
    <!-- -->
    
    
    <!-- <WTMSponsors></WTMSponsors> -->
    <WTMFooter></WTMFooter>

    <WTMSpeakerDialog v-if="speakerDialogSync"></WTMSpeakerDialog>
    
  </div>
</template>

<script>

import WTMNav from './components/WTMNav'
import WTMLanding from './components/WTMLanding'
import WTMAbout from './components/WTMAbout'
import WTMHighlights from './components/WTMHighlights'
import WTMSchedule from './components/WTMSchedule'
import WTMSpeakers from './components/WTMSpeakers'
import WTMSpeakerDialog from './components/WTMSpeakerDialog'
import WTMFaqs from './components/WTMFaqs'
import WTMSponsors from './components/WTMSponsors'
import WTMFooter from './components/WTMFooter'
import data from './assets/data/data'


export default {
  name: 'App',
  components: {
    WTMNav,
    WTMLanding,
    WTMAbout,
    WTMHighlights,
    WTMSchedule,
    WTMSpeakers,
    WTMSpeakerDialog,
    WTMFaqs,
    WTMSponsors,
    WTMFooter
  },
  data: function(){
    return {
      data,
      showWarn: true,
      speakerDialogSync: null
    }
  }
}
</script>

<style lang="sass">
@import 'assets/style'

body, html
  max-width: 100vw
  overflow-x: hidden
  scroll-behavior: smooth

.warning-dialog
  position: fixed
  top: 0
  width: 100%
  padding: 2rem
  box-shadow: 0px 4px 4rem rgba(0,0,0,0.2)
  z-index: 20
  background-color: white
  text-align: center
  display: flex
  align-items: center
  justify-content: center

  &__header
    color: #4B8BF5

  &__content
    width: 100%
    line-height: 1.5rem
    font-weight: normal
    max-width: 60rem
    margin: auto


</style>