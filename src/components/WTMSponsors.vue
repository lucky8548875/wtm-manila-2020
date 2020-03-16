<template>
    <div>
        <h1 class="section-title">Sponsors</h1>
        <ul>
            <li v-for="category in $parent.data.sponsors" :key="category.label">
                <h3 class="category-label">{{category.label}}</h3>
                <ul class="sponsor-list">
                    <li class="sponsor-list-item" v-for="sponsor in category.items" :key="sponsor.name">
                        <a class="sponsor-item" :href="sponsor.url" target="_blank" rel="noreferrer"><img :src="sponsor.image" :alt="sponsor.name" :title="sponsor.name"></a>
                        
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style lang="sass" scoped>
@import '../assets/style/_responsive'
@import '../assets/style/_variables'

/**
    You can use the following mixins if you want the style to be breakpoint-dependent:

    @include from($tablet)  // styles will works starting tablet sized screens
    @include from($desktop) // styles will work on desktop and above
    @include from($large-desktop) // styles will work on large desktops and above
    @include to($phone) // styles will work on phone only
    @include to($tablet) // styles will work on phone and tablets
    @include to($desktop) // styles will work on phone, tablets and desktop, excluding large desktops

    Usage example
    
    .div
        color: red
        font-weight: bold
        @include from(desktop)
            color green             -> color will change from red to green when from desktop to larger screens
        @include to($tablet)
            font-weight: light      -> font weight will be light on smaller screens up to tablet size; defaults to red on desktop and larger screens
        

 */

.section-title
    text-align: center
    color: $color-primary
    margin-top: 3rem
    @include from($large-desktop)
        font-size: 3rem
        margin-top: 6rem


.category-label
    /** Sample styles; you can uncomment or replace/experiment with your own */
    // text-align: center

ul.sponsor-list
    // display: flex
    // justify-content: center
    // align-items: center

li.sponsor-list-item
    // margin: 1rem

a.sponsor-item
    // border: 1px solid gray
    // padding: 1rem
    // display: inline-block

</style>