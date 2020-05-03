<template>
<div class="WTMLanding">
    <div class="background-art-1"></div>
    <div class="background-art-2"></div>
    
    <div class="wtm_section container landing-area">
        <div class="landing-grid">
            <div class="q1">
                <clazy-load
            src="https://firebasestorage.googleapis.com/v0/b/womentechmakers-5d23b.appspot.com/o/artwork.png?alt=media&token=544ff83a-8642-4e9d-b99b-e04798b9f51c"
          >
            <transition name="fade" appear>
            <div class="art-container">

              <div class="background-art-3"></div>

            </div>
            </transition>
            <div class="preloader art-container" style="background: none !important" slot="placeholder"></div>
          </clazy-load>
            </div>
            <div class="q2">
                <h1 class="hashtag-wrapper">

                        <div class="hashtag-line">#HeadsUp</div>

                        <div class="hashtag-line">Filipina</div>

                </h1>
            </div>
            <div class="q3">
                <div class="detail-lines">

                    <div class="detail-line">
                        <!-- <svg class="detail-icon" id="Group_12" data-name="Group 12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.493 38.509">
                            <path id="Path_12" data-name="Path 12" d="M-690.023-650.65h-18.612c-.587,0-.589,0-.589-.59q0-16.6,0-33.195c0-.587,0-.588.589-.589,1.472,0,2.945-.008,4.418,0,.324,0,.467-.062.5-.437a4.121,4.121,0,0,1,4.059-3.685,4.114,4.114,0,0,1,4.2,3.673c.035.357.153.451.493.45q5-.015,9.993,0c.312,0,.448-.06.471-.418a4.207,4.207,0,0,1,3.909-3.713,4.173,4.173,0,0,1,4.366,3.827c.024.333.231.3.446.3q2.209,0,4.417,0c.629,0,.632,0,.632.636q0,16.533,0,33.066c0,.673,0,.676-.679.676h-18.613Zm.047-2.805h15.824c.611,0,.613,0,.613-.606q0-9.006.01-18.011c0-.447-.141-.547-.564-.546q-15.824.016-31.648.008c-.676,0-.678,0-.678.671q0,8.941,0,17.882c0,.6,0,.6.619.6Zm0-21.961h5.79q5.1,0,10.207,0c.328,0,.453-.083.45-.432-.014-1.987-.009-3.974,0-5.961,0-.276-.057-.427-.377-.418q-.942.027-1.887,0c-.31-.009-.409.095-.438.411a4.135,4.135,0,0,1-4.038,3.711,4.112,4.112,0,0,1-4.23-3.729c-.027-.293-.121-.394-.413-.393q-5.082.011-10.164,0c-.252,0-.342.085-.367.343a4.113,4.113,0,0,1-4.105,3.775,4.113,4.113,0,0,1-4.169-3.752c-.027-.276-.114-.374-.388-.368-.615.013-1.23.02-1.844,0-.349-.013-.474.1-.471.458.016,1.944.02,3.888,0,5.833,0,.418.127.527.535.526Q-697.936-675.426-689.98-675.417Zm-8.265-8.124c0-.519.011-.934,0-1.347a1.372,1.372,0,0,0-1.385-1.436,1.365,1.365,0,0,0-1.29,1.44c-.013.828-.009,1.656,0,2.484a2.012,2.012,0,0,0,.074.506,1.3,1.3,0,0,0,1.307.966,1.291,1.291,0,0,0,1.236-1.052A9.266,9.266,0,0,0-698.245-683.54Zm19.214-.079h0v-1.071c0-.057,0-.114,0-.171a1.368,1.368,0,0,0-1.319-1.456,1.338,1.338,0,0,0-1.354,1.412c-.03.87-.028,1.742,0,2.613a1.352,1.352,0,0,0,1.355,1.376,1.371,1.371,0,0,0,1.316-1.417C-679.02-682.762-679.031-683.191-679.031-683.619Z" transform="translate(709.224 689.156)" fill="#4b8bf5"/>
                        </svg> -->
                        <div class="sched">
                            <p>{{$parent.data.event.date}}</p>
                            <small>{{$parent.data.event.time}}</small>
                            <img src="../../public/img/icons/youtube_live-logo.png" width="100" height="50">
                        </div>
                    </div>

                    <div class="detail-line">
                        <!-- <svg class="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.534 46.66">
                            <g id="Group_11" data-name="Group 11" transform="translate(0 0)">
                                <path id="Path_10" data-name="Path 10" d="M-816.144-682.6a16.7,16.7,0,0,1,15.586,22.722c-2.331,6.24-5.888,11.76-9.78,17.092-1.536,2.1-3.2,4.115-4.8,6.169-.6.765-1.112.994-1.888.086-5.881-6.878-11.121-14.172-14.488-22.643-2.516-6.33-1.834-12.295,2.622-17.584A16.2,16.2,0,0,1-816.144-682.6Zm-.468,2.778c-.656.1-1.8.195-2.894.464a13.593,13.593,0,0,0-9.956,17.348c2.524,8.169,7.681,14.838,12.81,21.492.6.784.853.084,1.141-.28a105.533,105.533,0,0,0,8.822-12.721,38.714,38.714,0,0,0,3.806-8.4C-800.237-670.906-806.81-679.78-816.612-679.823Z" transform="translate(832.967 682.601)" fill="#4b8bf5"/>
                                <path id="Path_11" data-name="Path 11" d="M-803.362-646.562a6.348,6.348,0,0,1-6.469-6.59,6.343,6.343,0,0,1,6.509-6.4,6.372,6.372,0,0,1,6.485,6.588A6.374,6.374,0,0,1-803.362-646.562Zm.057-2.784a3.764,3.764,0,0,0,3.684-3.745,3.762,3.762,0,0,0-3.748-3.68,3.763,3.763,0,0,0-3.682,3.74A3.761,3.761,0,0,0-803.305-649.347Z" transform="translate(820.13 669.815)" fill="#4b8bf5"/>
                            </g>
                        </svg> -->
                        <div>
                            <p>{{$parent.data.event.venue}}</p>
                            <small>{{$parent.data.event.address}}</small>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style lang="sass">
@import '../assets/style/responsive'
@import '../assets/style/_variables'
.landing-area
    display: flex
    align-items: center
    justify-content: center

.landing-grid
    margin-top: 3rem
    display: grid
    grid-template-areas: 'q2' 'q3' 'q1'
    grid-template-columns: 1fr
    @include from($tablet)
        grid-template-areas: 'q2 q1' 'q3 q1'
        grid-template-columns: 1fr 1fr
    @include from($desktop)
        width: 95%
    @include from($large-desktop)
        width: 100%

.q1
    position: relative
    grid-area: q1
    display: flex
    justify-content: center
    @include from($tablet)
        justify-content: flex-end
        align-items: center

.q2
    position: relative
    grid-area: q2
    display: flex
    justify-content: center

    @include from($tablet)
        display: flex
        align-items: center
        justify-content: flex-start

.q3
    position: relative
    grid-area: q3
    display: flex
    justify-content: center
    @include from($tablet)
        justify-content: flex-start


.hashtag-wrapper
    text-align: right
    display: inline-block
    @include from($tablet)
        margin-right: 1rem

.hashtag-line
    font-size: calc(0.5rem + 10vw)
    background: linear-gradient(125deg, #4b8bf5, #5bc7f8, #22eab8, #04c0a6)
    -webkit-background-clip: text; -webkit-text-fill-color: transparent

    @include from($tablet)
        font-size: calc(3rem + 2vw)
    @include from($desktop)
        font-size: 5.75rem
    @include from($large-desktop)
        font-size: 7.5rem

.detail-lines
    @include to($phone)
        margin-top: calc(0.5rem + 1vh)
        margin-bottom: calc(0.5rem + 1vh)
    @media screen and (min-height: 700px)
        margin-bottom: 2rem
        margin-top: 2rem

.detail-line
    display: flex
    margin-bottom: 1rem
    font-size: calc(0.4rem + 2vw)
    line-height: calc(0.6rem + 2vw)
    @include from($tablet)
        font-size: 1rem
        margin-bottom: 1.5rem
        line-height: initial
    @include from($large-desktop)
        font-size: 1.5rem
        margin-bottom: 1.75rem

.detail-icon
    width: 24px
    height: 28px
    margin-right: 1rem
    @include from($tablet)
        width: 30px
        height: 35px
    @include from($large-desktop)
        width: 35px
        height: 42px
        margin-right: 2rem

.art-container
    // width: 21rem
    // height: 22rem
    position: relative
    width: calc(147vw * 0.5)
    height: calc(154vw * 0.5)
    @include to($phone)
        max-width: 21rem
        max-height: 22rem
    @include from($tablet)
        width: calc(8rem + (25vw))
        height: calc(10rem + (25vw))
        max-width: 33rem
        max-height: 41rem
    @include from($large-desktop)
        width: calc(12rem + (25vw))
        height: calc(15.5rem + (25vw))
        max-width: 44rem
        max-height: 57rem
    background-image: url('https://firebasestorage.googleapis.com/v0/b/womentechmakers-5d23b.appspot.com/o/artwork.png?alt=media&token=544ff83a-8642-4e9d-b99b-e04798b9f51c')
    background-size: contain
    background-repeat: no-repeat

.background-art-1
    z-index: -1
    position: absolute
    top: -50vw
    left: -35vw
    width: 110vw
    height: 120vw
    background-color: #EFF8FF
    border-radius: 50%
    @include from($tablet)
        top: -25vw
        left: -10vw
        width: 50vw
        height: 50vw

.background-art-2
    z-index: -1
    position: absolute
    top: 55vw
    left: -27vw
    width: 36vw
    height: 18vw
    background-color: $color-accent
    border-bottom-left-radius: 18vw
    border-bottom-right-radius: 18vw
    @include from($tablet)
        top: 20vw
        width: 12vw
        height: 6vw
        left: -8vw
        border-bottom-left-radius: 6vw
        border-bottom-right-radius: 6vw
.background-art-3
    z-index: -1
    position: absolute
    width: 14rem
    height: 12rem
    bottom: -4rem
    right: -4rem
    background-image: url('https://firebasestorage.googleapis.com/v0/b/womentechmakers-5d23b.appspot.com/o/artwork-2.png?alt=media&token=2cbc2d07-16d8-48e5-a8fc-91c1fa9327eb')
    background-size: cover
    background-position: center

    @include from($tablet)
        width: 22rem
        height: 24rem
        right: -10rem
        bottom: -10rem

    @include from($desktop)
        width: 35rem
        height: 25rem
        right: -18rem
    

        


</style>