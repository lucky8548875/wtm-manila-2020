<template>
  <div style="position: relative">
    <div class="WTMHighlights__grid">
      <div class="WTMHighlights__bg"></div>
      <div class="WTMHighlights__img1"></div>
      <div class="WTMHighlights__img2"></div>
      <div class="WTMHighlights__img3"></div>
      <div class="WTMHighlights__buttonContainer">
        <a
          class="button WTMHighlights__button"
          href="https://photos.app.goo.gl/K19HeyGcHMumg8ks5"
          target="_blank"
          rel="noreferrer"
        >
          <span>2019 <span class="hide-from-tablet">Highlights </span><span class="hide-to-phone">Highlight Photos</span></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style="margin-left: 0.5rem"
            width="10.021"
            height="10.453"
            viewBox="0 0 17.021 19.453"
          >
            <path
              id="Polygon_1"
              data-name="Polygon 1"
              d="M9.726,0l9.726,17.021H0Z"
              transform="translate(17.021) rotate(90)"
              fill="#fff"
            />
          </svg>
        </a>
      </div>
    </div>
    <!-- <img v-for="url in $parent.data.highlights" :key="url" :src="url">
    <a href="https://photos.app.goo.gl/K19HeyGcHMumg8ks5" target="_blank" rel="noreferrer">2019 Highlight Photos</a>-->
    <br><br><br>
    <a name="schedule" style="position: absolute; bottom: 7rem"></a>
  </div>
</template>

<style lang="sass">
@import '../assets/style/_variables'
@import '../assets/style/_responsive'
.WTMHighlights
    &__grid
        display: grid
        @include from($phone)
            grid-template-columns: 1rem 1fr 6fr 1.5fr 2fr 1fr 4fr 3fr 1rem
            grid-template-rows: 2fr 1fr 2fr 1fr 2fr 3fr 2fr 1.5fr 1fr 1fr
            height: 12.5rem
        @include from($tablet)
            grid-template-columns: calc(3rem + 2vw) 1fr 6fr 1.5fr 2fr 1fr 4fr 3fr calc(3rem + 2vw)
            
            height: 25rem
        @include from($desktop)
            grid-template-columns: calc((100vw - 68rem)/2) 1fr 6fr 2fr 2fr 1fr 2fr 3fr calc((100vw - 68rem)/2)
            
            height: 35rem

        @include from($large-desktop)
            grid-template-columns: calc((100vw - (75rem + 10vw))/2) 1fr 6fr 2fr 2fr 1fr 2fr 3fr calc((100vw - (75rem + 10vw))/2)
            height: 45rem
        

    &__bg
        background-color: $color-primary
        grid-column-start:  1
        grid-column-end: 10
        grid-row-start: 2
        grid-row-end: 8

    &__buttonContainer
        grid-column-start: 5
        grid-column-end: 9
        grid-row-start: 3
        grid-row-end: 4
        display: flex
        align-items: center
        justify-content: flex-end
        @include from($tablet)
            grid-column-start: 7
            justify-content: center
        @include from($desktop)
            grid-column-start: 6
        @include from($large-desktop)
            grid-column-start: 7

    &__button
        font-size: 0.8rem
        background-color: transparent
        border: 2px solid transparentize(white, 0.8) !important
        color: white
        display: flex
        align-items: center
        padding: 0.5rem 0.75rem !important

        @include from($tablet)
            padding: 0.75rem 2rem !important
            font-size: 1rem

        @include from($large-desktop)
            font-size: 1.5rem

        &:hover
            border: 2px solid white !important

        &:active
          background-color: transparentize(white, 0.9)  

            
    
    &__img1
        background-color: rgba(255,255,255,0.1)
        grid-column-start: 3
        grid-column-end: 6
        grid-row-start: 1
        grid-row-end: 7
        background-image: url('https://firebasestorage.googleapis.com/v0/b/womentechmakers-5d23b.appspot.com/o/highlight1.png?alt=media&token=3bcb9c13-fee1-4682-9ab9-fefdf8e0aef5')
        background-size: cover
        background-position: center

    &__img2
        background-color: rgba(255,255,255,0.1)
        grid-column-start: 2
        grid-column-end: 4
        grid-row-start: 6
        grid-row-end: 10
        background-image: url('https://firebasestorage.googleapis.com/v0/b/womentechmakers-5d23b.appspot.com/o/highlight2.png?alt=media&token=0362ea25-0e46-4769-8802-e15189c9b453')
        background-size: cover
        background-position: center

    &__img3
        background-color: rgba(255,255,255,0.1)
        grid-column-start: 5
        grid-column-end: 9
        grid-row-start: 5
        grid-row-end: 9
        background-image: url('https://firebasestorage.googleapis.com/v0/b/womentechmakers-5d23b.appspot.com/o/highlight3.png?alt=media&token=fe641341-2efa-495f-a0ca-6f3e931582e5')
        background-size: cover
        background-position: center
        
</style>