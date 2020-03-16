<template>
<div class="WTMFaqs__parent">
    <div class="WTMFaqs container">
        <br><br><br>
        <h1 class="WTMFaqs__header">Venue Policies</h1>
        <ul>
            <li v-for="faq in $parent.data.faqs">
                <details>
                    <summary>
                        <span>{{faq.question}}</span></summary>
                    <p>{{faq.answer}}</p>
                </details>
            </li>
        </ul>
        <br>
        <br>
        <br>
        <br>
    </div>
</div>
</template>

<style lang="sass">
@import '../assets/style/responsive'
@import '../assets/style/variables'
.WTMFaqs
    &__parent
        color: white
        background-color: $color-primary
    @include to($phone)
        width: calc(100vw - 4rem) !important
    &__header
        
        @include from($large-desktop)   
            font-size: 3rem
details
    border-bottom: 1px solid $color-accent
    padding-top: 1.5rem
    @include from($desktop) 
        padding-top: 2rem
    @include from($large-desktop) 
        padding-top: 3rem
    
summary
    display: flex
    flex-direction: row-reverse
    justify-content: space-between
    grid-template-columns: 1fr auto
    grid-template-rows: 1fr
    align-items: center
    padding-bottom: 1.5rem
    padding-left: 0rem
    font-size: 1rem
    font-weight: bold
    cursor: pointer
    @include from($tablet)
        font-weight: normal
        font-size: 1.25rem
    @include from($desktop) 
        padding-bottom: 2rem
    @include from($large-desktop)   
        font-size: 1.75rem
        padding-bottom: 3rem

summary + p
    margin-bottom: 1.5rem
    line-height: 1.5rem
    
    @include from($desktop)
        margin-bottom: 2rem
    @include from($large-desktop)   
        font-size: 1.5rem
        line-height: 2rem
        margin-bottom: 3rem

summary::-webkit-details-marker
    flex-basis: 1rem
    width: 1rem

summary > span
    max-width: 80vw
    flex-grow: 1
    
    
</style>