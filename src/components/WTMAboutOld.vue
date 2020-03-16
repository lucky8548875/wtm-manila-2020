<template>
    <div class="wtm_section container">
            <countdown :time="new Date(new Date().getFullYear(), 2, 21) - new Date()">
                <template slot-scope="props">
            <div style="background-color: white; display: flex; justify-content: center; padding: 2rem; margin: 5rem 0">
            <div style="text-align: center;"> 
                
                    <h1 style="font-size: 5.75rem; color: #22EAB8; width: 10rem;" :key="props.days">{{props.days}}</h1>
                
                <span>DAYS</span>
            </div>
            <div style="text-align: center;"> 
                <h1 style="font-size: 5.75rem; width: 10rem; color: #22EAB8">{{props.hours}}</h1>
                <span>HOURS</span>
            </div>
            <div style="text-align: center;"> 
                <h1 style="font-size: 5.75rem; width: 10rem; color: #22EAB8">{{props.minutes}}</h1>
                <span>MINUTES</span>
            </div>
            <div style="text-align: center;">
                <div style="position: relative; width: 10rem; overflow: hidden; height: 7rem"> 
                    <transition name="counter-slide">
                    <h1 style="font-size: 5.75rem; color: #22EAB8; position: absolute; left: 50%; transform: translate(-50%, 0)" :key="props.seconds">{{props.seconds}}</h1>
                    </transition>
                </div>
                <span>SECONDS</span>
            </div>
            </div>
            </template>
            </countdown>
        <br><br><br>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)); align-items: center">
            <div>
            <div style="margin-bottom: 1rem; display: flex; align-items: center">
                <span>ABOUT</span>
                <div style="width: 5rem; height: 0.15rem; background-color: #22EAB8; margin-left: 1rem"></div>
                </div>
            <h1 style="font-size: 4rem; color: #4B8BF5">Women<br>Techmakers</h1>
            </div>
            <div style="width: 80%">
            <p style="line-height: 2rem; font-size: 1.25rem">
                {{$parent.data.strings.about}}
            </p>
            <br>
            <p style="line-height: 2rem; font-size: 1.25rem">
                To know more visit <a style="color: #4B8BF5; font-weight: bold" href="https://www.womentechmakers.com" target="_blank" rel="noreferrer">womentechmakers.com</a>
            </p>
            </div>
        </div>
        
    </div>
</template>