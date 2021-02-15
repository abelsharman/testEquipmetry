<template>
    <!-- left side -->
    <div class="side_bar" ref="side">
        <!-- button to hide -->
        <div class="side_bar_hide">
            <img src="../assets/arrow_left.png" alt="arrow_left" @click="hideSide"> 
            <p @click="hideSide">Скрыть</p>
        </div>

        <!-- static info -->
        <div class="side_bar_info">
            <div class="side_bar_info_nav">
                <div class="side_bar_info_nav_link">
                    <p>Города списки</p>
                </div>
                <div class="side_bar_info_nav_edit">
                    <img src="../assets/edit.png" alt="edit">
                </div>
            </div>

            <div class="side_bar_info_nav side_bar_info_nav_clickable">
                <div class="side_bar_info_nav_link">
                    <p>Заполняемость</p>
                </div>
                <div class="side_bar_info_nav_edit">
                    <img src="../assets/edit.png" alt="edit">
                </div>
            </div>

            <div class="side_bar_info_nav">
                <div class="side_bar_info_nav_link">
                    <p>Градация вес и плотн.</p>
                </div>
                <div class="side_bar_info_nav_edit">
                    <img src="../assets/edit.png" alt="edit">
                </div>
            </div>

            
            <div class="side_bar_info_nav_add">
                <img src="../assets/plus.png" alt="plus">
                <p>Добавить раздел</p>
            </div>
            
        </div>


        <!-- dynamic info about prices -->
        <div class="side_bar_price">
            <div class="side_bar_info_nav">
                <div class="side_bar_info_nav_link">
                    <p>Города списки</p>
                </div>
                <div class="side_bar_info_nav_edit">
                    <img src="../assets/edit.png" alt="edit">
                </div>
            </div>

            <div class="side_bar_info_nav side_bar_info_nav_passive">
                <div class="side_bar_info_nav_link">
                    <p>Транзитная декл.</p>
                </div>
                <div class="side_bar_info_nav_edit">
                    <img src="../assets/editgrey.png" alt="edit">
                </div>
            </div>

            <div class="side_bar_info_nav side_bar_info_nav_passive">
                <div class="side_bar_info_nav_link">
                    <p>Экспортная декл.</p>
                </div>
                <div class="side_bar_info_nav_edit">
                    <img src="../assets/editgrey.png" alt="edit">
                </div>
            </div>

            <img class="side_bar_price_separator" src="../assets/separator.png" alt="separator">


            <div class="side_bar_info_nav">
                <div class="side_bar_info_nav_link">
                    <p>Автозабор прайс </p>
                </div>
                <div class="side_bar_info_nav_edit">
                    <img src="../assets/edit.png" alt="edit">
                </div>
            </div>


            <div class="side_bar_info_nav">
                <div class="side_bar_info_nav_link">
                    <p>Авто (LCL)</p>
                </div>
                <div class="side_bar_info_nav_edit">
                    <img src="../assets/edit.png" alt="edit">
                </div>
            </div>


            <div class="side_bar_info_nav">
                <div class="side_bar_info_nav_link">
                    <p>Сиань-Алматы (LCL)</p>
                </div>
                <div class="side_bar_info_nav_edit">
                    <img src="../assets/edit.png" alt="edit">
                </div>
            </div>


            <div class="side_bar_info_nav side_bar_info_nav_passive">
                <div class="side_bar_info_nav_link">
                    <p>Авиа (FCL)</p>
                </div>
                <div class="side_bar_info_nav_edit">
                    <img src="../assets/editgrey.png" alt="edit">
                </div>
            </div>


            <div class="side_bar_info_nav side_bar_info_nav_passive">
                <div class="side_bar_info_nav_link">
                    <p>Авто целиком (FCL)</p>
                </div>
                <div class="side_bar_info_nav_edit">
                    <img src="../assets/editgrey.png" alt="edit">
                </div>
            </div>



            <div class="side_bar_info_nav side_bar_info_nav_passive">
                <div class="side_bar_info_nav_link">
                    <p>ЖД контейнером (FCL)</p>
                </div>
                <div class="side_bar_info_nav_edit">
                    <img src="../assets/editgrey.png" alt="edit">
                </div>
            </div>


            <div class="side_bar_info_nav_add">
                <img src="../assets/plus.png" alt="plus">
                <p>Добавить раздел</p>    
            </div>



        </div>



        <!-- static calculator -->
        <div class="side_bar_calc">
            <div class="side_bar_info_nav">
                <div class="side_bar_info_nav_link">
                    <p>Калькулятор</p>
                </div>
            </div>

       

            <div class="side_bar_info_nav side_bar_info_nav_passive">
                <div class="side_bar_info_nav_link">
                    <p>Курсы валют</p>
                </div>
            </div>

            
    
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    methods: {
        hideSide(){
            this.$refs.side.style.left = '-400px'
            this.$refs.side.parentNode.children[2].style.marginLeft = '0px'
            //event.target.parentNode.parentNode.style.left = '-400px'
        },
    },
}
</script>

<style>
    .side_bar{
        position: fixed;
        display: inline-block;
        left: 0px;
        margin-top: 63px;   
        width: 200px;
        height: calc(100vh - 63px);
        background: #97CBD7;     
        transition: 0.5s all ease;
        padding-left: 10px;
    }



    /* button to hide */
    /* button to hide */
    /* button to hide */
    /* button to hide */
    /* button to hide */
    /* button to hide */
    /* button to hide */
    .side_bar_hide{
        width: 68px;
        margin: 0;
        margin-left: 131px;
    }
    .side_bar_hide img{
        display: inline-block;
        vertical-align: middle;
        width: 8.4px;
        cursor: pointer;
    }
    .side_bar_hide p{
        display: inline-block;
        font-family: SF UI Text, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: #41597E;
        margin: 0;
        margin-left: 4.8px;
        margin-top: 10px;
        cursor: pointer;
    }






    /* static info */
    /* static info */
    /* static info */
    /* static info */
    /* static info */
    /* static info */
    .side_bar_info{
        margin-top: 17px;
        width: 189px;
        padding-bottom: 17px;
        border-bottom: 2px solid #468C9B;
    }
    .side_bar_info_nav{
        margin-top: 8px;
    }
    .side_bar_info_nav_link{
        display: inline-block;
        width: 170px;
        height: 25px;
        background: #D2D2D2;
        box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        cursor: pointer;
        background: url('../assets/3points.png') no-repeat 90% 55% #D2D2D2;
    }
    .side_bar_info_nav_link p{
        margin: 0;
        float: left;
        font-family: SF UI Text, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: #000000;
        margin: 5.5px 10px;
    }
    .side_bar_info_nav_link img{
        float: right;
        margin-top: 6.5px;
        margin-right:16.5px;
    }

    .side_bar_info_nav_edit{
        display: inline-block;
        height: 25px; 
        vertical-align: top;
    }
    .side_bar_info_nav_edit img{
        margin-left: 5.88px;
        vertical-align: middle;
        padding-top: 3px;
        cursor: pointer;
    }
    .side_bar_info_nav_add{
        margin: 0;
    }
    .side_bar_info_nav_add img{
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
        
    }
    .side_bar_info_nav_add p{
        display:inline-block;
        font-family: SF UI Text, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #41597E;
        margin: 0;
        margin-left: 6px;
        cursor: pointer;
    }





    /* clickable button */
    /* clickable button */
    /* clickable button */
    /* clickable button */
    .side_bar_info_nav_clickable .side_bar_info_nav_link{
        background-color: #41597E;
    }
    .side_bar_info_nav_clickable .side_bar_info_nav_link p{
        color: white;
    }


    /* passive button */
    /* passive button */
    /* passive button */
    /* passive button */
    .side_bar_info_nav_passive .side_bar_info_nav_link{
        box-shadow: none;
        cursor: not-allowed;
        background: url('../assets/3greypoints.png') no-repeat 90% 55% #C9C9C9;
    }
    .side_bar_info_nav_passive .side_bar_info_nav_link p{
        color: #9E9E9E;
    }
    .side_bar_info_nav_passive .side_bar_info_nav_edit img{
        cursor: not-allowed;
        
    }


    /* dynamic info about prices */
    /* dynamic info about prices */
    /* dynamic info about prices */
    /* dynamic info about prices */
    /* dynamic info about prices */
    /* dynamic info about prices */
    /* dynamic info about prices */
    /* dynamic info about prices */
    /* dynamic info about prices */
    /* dynamic info about prices */
    .side_bar_price{
        width: 189px;
        margin-top:10px;
    }
    .side_bar_price_separator {
        border-radius: 2px;
    }


    /* calculator */
    /* calculator */
    /* calculator */
    /* calculator */
    /* calculator */
    /* calculator */
    .side_bar_calc{
        margin-top: 30px;
    }

</style>