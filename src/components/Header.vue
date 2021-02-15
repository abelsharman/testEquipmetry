<template>
    <div class="head">
        <div class="head_img">
        </div>


        <div class="head_person">
            <div class="header_person_img">
                <p>YI</p>
            </div>

            <div class="header_person_name">
                <p>Yelnur Idekeyev</p>
                <strong>TOO Resolut</strong>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',

}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Shanti&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    .head{
        margin: 0;
        width: 100%;
        height: 63px;
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: #5B919D;
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    }
    .head_img{
        float: left;
        width: 100px;
        height: 56px;
        margin: 4px 0 3px 0;
        background: url("../assets/logogb.png") no-repeat 100% center;
    }
    .head_person{
        float: right;
        width: 10%;
        min-width: 139px;
        height: 38px;
        margin: 13px 11px 12px 0;
    }
    .header_person_img{
        float: left;
        width: 35px;
        height: 35px;
        background: #41597E;
        border-radius: 35px;
        margin-left: 4px;
    }
    .header_person_img p{
        font-family: 'Shanti', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.2px;
        color: #EFF2F7;
        opacity: 0.75;
        margin: 0;
        margin-top: 7px;
    }
    .header_person_name{
        float: right;
        width: 86px;
        text-align: left;
        margin-top:3px;
        margin-bottom: 6px;
        margin-left: 4px;
        margin-right: 10px;
    }
    .header_person_name p{
        font-family: 'Shanti', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 10px;
        color: #192A3E;
        margin: 0;
    }
    .header_person_name strong{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 10px;
        letter-spacing: 0.01em;
        color: #FFFFFF;
        margin: 0;
    }

</style>