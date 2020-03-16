<template>
    <div style="position: fixed; top: 0; left: 0; background-color: gray">
        <h1>{{speaker.name}}</h1>
        <div v-for="role in speaker.roles" :key="role.company">{{role.position}}, {{role.company}}</div>
        <p>{{speaker.bio}}</p>
        <button @click="$parent.speakerDialogSync = null">Close</button>
    </div>
</template>

<script>
export default {

    computed: {
        speaker: function(){
            return this.$parent.data.speakers.find(speaker => speaker.id == this.$parent.speakerDialogSync)
        }
    }
}
</script>