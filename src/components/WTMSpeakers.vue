<template>
  <div class="WTMSpeakers container">
    <div class="WTMSpeakers__wrapper">
      <h1 class="WTMSpeakers__title">Speakers</h1>
      <br />
      <br />
      <ul class="WTMSpeakers__speakers">
        <!-- add @click="$parent.speakerDialogSync = speaker.id" -->
        <li
          class="WTMSpeakers__item-wrapper"
          v-for="speaker in $parent.data.speakers"
          :key="speaker.id"
        >
          <clazy-load :src="speaker.photo">
            <transition name="fade" appear>
            <div class="WTMSpeakers__photo" :style="{backgroundImage: 'url(' + speaker.photo + ')'}"></div>
            </transition>
            <div class="preloader WTMSpeakers__photo" slot="placeholder"></div>
          </clazy-load>
         

          <span class="WTMSpeakers__name">{{speaker.name}}</span>
          <div
            class="WTMSpeakers__role"
            v-for="role in speaker.roles"
            :key="role.company"
          >{{role.position ? role.position + ', ' : ''}}{{role.company}}</div>
        </li>
      </ul>
      <br />
      <br />
    </div>
  </div>
</template>

<style lang="sass">
@import '../assets/style/responsive'
@import '../assets/style/_variables'

.WTMSpeakers
    &__title
        text-align: center
        color: $color-primary
        @include from($large-desktop)
            font-size: 3rem
    &__wrapper
        @include to($phone)
            max-width: calc(100vw - 2rem)
            margin: auto
        @include from($tablet)

    &__speakers
        display: flex
        flex-wrap: wrap
        align-items: center
        justify-content: center
    &__item-wrapper
        width: 13rem
        height: 17rem
        font-size: 1em
        display: flex
        flex-direction: column
        align-items: center
        padding: 0.5rem
        border-radius: 1rem
        margin: 1rem 1.5rem
        text-align: center
        // background-color: red

        @include from($large-desktop)
            font-size: 1.2em
            width: 16rem
            height: 20rem
        
    &__photo
        width: 7em
        height: 7em
        border-radius: 6em
        background-color: #eee
        margin-bottom: 1em
        background-size: cover

    &__name
        font-size: 1.5em
        margin-bottom: 0.15em

    &__role
        opacity: 0.75
        font-size: 0.9em
</style>