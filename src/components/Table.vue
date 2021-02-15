<template>
    <div class="fill">
        <p>{{ title }}</p>
        <table>
            
        </table>
    </div>
</template>


<script>
export default {
    name: 'Table',
    props: {
        'title': String,
    },
    data(){
        return{
        }
    }
}
</script>


<style>
    .fill{
        display: inline-block;
        margin-top: 63px;
        margin-left: 210px;
        padding-left: 20px;
        transition: 0.5s all ease;
    }
    .fill p{
        font-family: SF UI Text, sans-serif;
        font-size: 25px;
        font-weight: 600;
        margin: 0;
        margin-top: 10px;
        line-height: 29px;
        color: #000000;
    }
</style>