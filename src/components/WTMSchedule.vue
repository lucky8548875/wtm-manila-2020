<template>
    <div style="position: relative">
        
    
    <div class="container">
        
        <div class="WTMSchedule__wrapper">
        <h1 class="WTMSchedule__title">Schedule</h1>
        <br><br>
        <ul>
            <!--  @click="getSession(item.session_id).speaker_id ? $parent.speakerDialogSync = getSession(item.session_id).speaker_id : ''" -->
            <!-- :class="getSession(item.session_id).speaker_id ? 'WTMSchedule__item-wrapper--selectable' : ''" -->
            <li  class="WTMSchedule__item-wrapper" v-for="item in $parent.data.schedule" :key="item.session_id">
                <!-- [{{item.time}} {{item.period}}]
                <br>
                {{getSession(item.session_id).title}}
                <br>
                {{getSession(item.session_id).duration}}
                {{getSession(item.session_id).speaker_id ? ' / ' + getSpeaker(getSession(item.session_id).speaker_id).name : ""}} -->
                <div class="WTMSchedule__time-wrapper">
                    <div class="WTMSchedule__time">{{item.time}}</div>
                    <div class="WTMSchedule__period">{{item.period}}</div>
                </div>
                <div class="WTMSchedule__detail-wrapper">
                    <h2 class="WTMSchedule__session-title">{{getSession(item.session_id).title}}</h2>
                    <div class="WTMSchedule__session-description">{{getSession(item.session_id).duration}}{{getSession(item.session_id).description ? ' / ' + getSession(item.session_id).description : '' }}{{getSession(item.session_id).speaker_id ? ' / ' + getSpeaker(getSession(item.session_id).speaker_id).name: ""}}</div>
                </div>
            </li>
        </ul>
        <br><br>
        </div>
    </div>
    <a name="speakers" style="position: absolute; bottom: 7rem"></a>
    </div>
</template>

<script>
export default {
    methods: {
        getSession(session_id){
            return this.$parent.data.sessions.find(session => session.id == session_id)
        },
        getSpeaker(speaker_id){
            return this.$parent.data.speakers.find(speaker => speaker.id == speaker_id)
        },
    }
}
</script>

<style lang="sass">
@import '../assets/style/responsive'
@import '../assets/style/_variables'

.WTMSchedule
    &__title
        text-align: center
        color: $color-primary
        @include from($large-desktop)
            font-size: 3rem
    &__wrapper
        font-size: 14px
        @include to($phone)
            max-width: calc(100vw - 2rem)
            margin: auto
        @include from($tablet)
            font-size: 16px
    &__item-wrapper
        display: flex
        margin-bottom: 2rem
        @include from($large-desktop)
            margin-bottom: 2.75rem
            line-height: 2rem
        &--selectable
            cursor: pointer
            &:hover
                opacity: 0.7
    &__time-wrapper
        flex: 0 0 1px
        margin-right: 2rem
        min-width: 4rem
        @include from($tablet)
            margin-right: 3rem
    &__time
        font-size: 18px
        color: $color-primary
        text-align: right
        font-weight: bold
        @include from($tablet)
            font-size: 22px
        @include from($large-desktop)
            font-size: 30px
    &__period
        font-size: 14px
        text-align: right
        @include from($large-desktop)
            font-size: 18px
    &__detail-wrapper
    &__session-title
        font-size: 18px
        @include from($tablet)
            font-size: 22px
        @include from($large-desktop)
            font-size: 30px
    &__session-description
        opacity: 0.7
        @include from($large-desktop)
            font-size: 20px
</style>