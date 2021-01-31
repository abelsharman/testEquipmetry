<template>
    <div class="engine">
        <div class="header">
            <div class="lines">
                <img src="../assets/vector_line.png">
                <img src="../assets/vector_line.png">
                <img src="../assets/vector_line.png">
            </div>
   

            <div class="header_logo">
                <img src="../assets/logo.svg" alt="logo">
            </div>


            <img class="header_notification" src="../assets/notification.png" alt="notification">
            <div class="header_notification_red_point"></div>
            <img class="header_mail" src="../assets/mail.png" alt="mail">
            <div class="header_mail_red_point"></div>


            <div class="header_user">
                <div class="header_user_img">
                    <p>MA</p>
                </div>

                <div class="header_user_name">
                    <strong>Maksat Abdykadyr</strong>
                    <p>Админ</p>
                </div>
            </div>


            <div class="header_points">
                <img src="../assets/vector_point.png" alt="point">
            </div>
        </div>

        <div class="engine_inner">
            <router-link to="/resource">
                <img class="resource_main_back_img" src="../assets/vector_arrow_left.png" alt="arrow_left">
                <p class="resource_main_back_p">Вернуться в Ресурсность</p>
            </router-link>


            <p class="engine_inner_name">Гусеничный экскаватор Komatsu PC 300, VIN:60001-63028</p>



            <div class="engine_inner_list">
                <h3>Двигатель</h3>
                <p>Двигатель в сбор</p>
                <p>Поршневая группа</p>
                <p>Головка блока цилиндров (ГБЦ)</p>
                <p>Блок цилиндров</p>
                <p>Каленвал</p>
                <p>Масляный насос</p>
                <p>Датчики</p>
                <p>Топливная система</p>
                <p>Фильтра</p>
                <p>Передняя крышка ДВС</p>
                <p>Маховик</p>
                <p>Навесное оборудование</p>
                <p>Фильтра</p>
                <p>Наборы прокладок</p>
            </div>


            <div class="engine_inner_big_image">
                <img src="../assets/details.png" alt="details">
            </div>


            <div class="engine_inner_details">
                <table>

                </table>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Engine',
}
</script>

<style>
    .engine_inner{
        padding-left: 28px;
        font-family: SF UI Text, sans-serif;

    }
    .engine_inner_name{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 100%;
        color: #3C4858;
        margin: 0;
    }
    .engine_inner a img{
        padding-left: 0px;
    }
    .engine_inner_list{
        display: inline-block;
        margin-top: 20px;
        width: 309px;
        height: auto;
        padding: 0 0 0 16px;
        background: #FFFFFF;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }
    .engine_inner_list h3{
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #5188E7;
        padding: 15px 0 10px 0;
        margin: 0;
    }
    .engine_inner_list p{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #3C4858;
        border-bottom: 1px solid #DADADA;
        width: 255px;
        padding-bottom: 12px;
        padding-top: 10px;
        margin: 0;
    }
    .engine_inner_big_image{
        display: inline-block;
        vertical-align: top;
        width: 465px;
        margin: 13px 0 0 21px;
        height: 453px;
        border-radius: 8%;
        filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1));
    }
    .engine_inner_big_image img{
        border-radius:8%;
        margin: 0;
        padding: 0;
        width: 100%;
    }



    .engine_inner_details{
        display: inline-block;
        height: 356px;
        width: 566px;
        border-radius: 7px;
        background: #FFFFFF;
        box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.1);
        vertical-align: top;
        margin: 21px 0 0 21px;
    }

</style>