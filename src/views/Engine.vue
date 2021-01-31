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
                <p @click="selectOneOfList">Двигатель в сбор</p>
                <p @click="selectOneOfList">Поршневая группа</p>
                <p @click="selectOneOfList">Головка блока цилиндров (ГБЦ)</p>
                <p @click="selectOneOfList">Блок цилиндров</p>
                <p @click="selectOneOfList">Каленвал</p>
                <p @click="selectOneOfList">Масляный насос</p>
                <p @click="selectOneOfList">Датчики</p>
                <p @click="selectOneOfList">Топливная система</p>
                <p @click="selectOneOfList">Фильтра</p>
                <p @click="selectOneOfList">Передняя крышка ДВС</p>
                <p @click="selectOneOfList">Маховик</p>
                <p @click="selectOneOfList">Навесное оборудование</p>
                <p @click="selectOneOfList">Фильтра</p>
                <p @click="selectOneOfList">Наборы прокладок</p>
            </div>


            <div class="engine_inner_big_image">
                <img src="../assets/details.png" alt="details">
            </div>

            <div class="engine_inner_details">
            <div class="engine_inner_details_inner">
                <table>
                    <tr>
                        <th class="engine_inner_detail_1"></th>
                        <th class="engine_inner_detail_2">№</th>
                        <th class="engine_inner_detail_3">Наименование запчасти</th>
                        <th class="engine_inner_detail_4">Номер запчасти</th>
                        <th class="engine_inner_detail_5">Кол-во</th>
                        <th class="engine_inner_detail_6">Ресурсность</th>
                    </tr>



                    <tr>
                        <td class="engine_inner_detail_1">
                            <label class="input_check">
                                <input type="checkbox" checked="checked">
                                <span class="checkmark"></span>
                            </label>
                        </td>
                        <td class="engine_inner_detail_2">1</td>
                        <td class="engine_inner_detail_3">Поршень</td>
                        <td class="engine_inner_detail_4">256-6325</td>
                        <td class="engine_inner_detail_5">12</td>
                        <td class="engine_inner_detail_6 engine_inner_detail_6_green">12000</td>
                    </tr>


                    <tr>
                        <td class="engine_inner_detail_1">
                            <label class="input_check">
                                <input type="checkbox" checked="checked">
                                <span class="checkmark"></span>
                            </label>
                        </td>
                        <td class="engine_inner_detail_2">2</td>
                        <td class="engine_inner_detail_3">Палец поршня</td>
                        <td class="engine_inner_detail_4">256-6325</td>
                        <td class="engine_inner_detail_5">10</td>
                        <td class="engine_inner_detail_6 engine_inner_detail_6_green">12000</td>
                    </tr>



                    <tr>
                        <td class="engine_inner_detail_1">
                            <label class="input_check">
                                <input type="checkbox" checked="checked">
                                <span class="checkmark"></span>
                            </label>
                        </td>
                        <td class="engine_inner_detail_2">3</td>
                        <td class="engine_inner_detail_3">Кольцо стопорное пальца</td>
                        <td class="engine_inner_detail_4">256-6325</td>
                        <td class="engine_inner_detail_5">1</td>
                        <td class="engine_inner_detail_6 engine_inner_detail_6_green">12000</td>
                    </tr>



                    <tr>
                        <td class="engine_inner_detail_1">
                            <label class="input_check">
                                <input type="checkbox" checked="checked">
                                <span class="checkmark"></span>
                            </label></td>
                        <td class="engine_inner_detail_2">4</td>
                        <td class="engine_inner_detail_3">Кольцо маслосъемное </td>
                        <td class="engine_inner_detail_4">256-6325</td>
                        <td class="engine_inner_detail_5">2</td>
                        <td class="engine_inner_detail_6 engine_inner_detail_6_green">12000</td>
                    </tr>


                    <tr>
                        <td class="engine_inner_detail_1">
                            <label class="input_check">
                                <input type="checkbox" checked="checked">
                                <span class="checkmark"></span>
                            </label>
                        </td>
                        <td class="engine_inner_detail_2">2</td>
                        <td class="engine_inner_detail_3">Кольцо компрессионное верхняя </td>
                        <td class="engine_inner_detail_4">256-6325</td>
                        <td class="engine_inner_detail_5">4</td>
                        <td class="engine_inner_detail_6 engine_inner_detail_6_green">12000</td>
                    </tr>


                    <tr>
                        <td class="engine_inner_detail_1">
                            <label class="input_check">
                                <input type="checkbox" checked="checked">
                                <span class="checkmark"></span>
                            </label>
                        </td>
                        <td class="engine_inner_detail_2">3</td>
                        <td class="engine_inner_detail_3">Шатун</td>
                        <td class="engine_inner_detail_4">256-6325</td>
                        <td class="engine_inner_detail_5">12</td>
                        <td class="engine_inner_detail_6 engine_inner_detail_6_green">12000</td>
                    </tr>



                    <tr>
                        <td class="engine_inner_detail_1">
                            <label class="input_check">
                                <input type="checkbox" checked="checked">
                                <span class="checkmark"></span>
                            </label>
                        </td>
                        <td class="engine_inner_detail_2">4</td>
                        <td class="engine_inner_detail_3">Втулка шатуна</td>
                        <td class="engine_inner_detail_4">256-6325</td>
                        <td class="engine_inner_detail_5">10</td>
                        <td class="engine_inner_detail_6 engine_inner_detail_6_green">12000</td>
                    </tr>
                </table>
            </div>

                <button type="submit">Сохранить</button>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Engine',
    //list: ['Двигатель в сбор', 'Поршневая группа', 'Головка блока цилиндров (ГБЦ)', 'Блок цилиндров', 'Каленвал', 'Масляный насос', 'Датчики', 'Топливная система', 'Фильтра', 'Передняя крышка ДВС', 'Маховик', 'Навесное оборудование', 'Фильтра', 'Наборы прокладок']
    methods: {
        selectOneOfList(event){
            for(let i = 1; i < event.target.parentNode.children.length; i++){
                if(event.target.parentNode.childNodes[i].innerHTML == event.target.innerHTML){
                    event.target.style.color = '#5188E7'
                    event.target.parentNode.parentNode.childNodes[3].style.display = 'inline-block'
                    event.target.parentNode.parentNode.childNodes[4].style.display = 'inline-block'
                }
                else{
                    event.target.parentNode.childNodes[i].style.color = '#3C4858'
                }
            }
        }
    },
}
</script>

<style>
    .input_check {
        position: relative;
        cursor: pointer;
    }

    .input_check input {
        opacity: 0;
        cursor: pointer;
    }

    .checkmark {
        position: absolute;
        top: -1px;
        left: 6px;
        height: 15px;
        width: 15px;
        background-color: white;
        border-radius: 2.5px;
        border: 1px solid rgba(153, 153, 153, 0.5);
    }

    .input_check input:checked ~ .checkmark {
        background-color: white;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    .input_check input:checked ~ .checkmark:after {
        display: block;
    }

    .input_check .checkmark:after {
        left: 5px;
        top: 2px;
        width: 3px;
        height: 6px;
        
        border: solid #3C4858;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
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
        cursor: pointer;
        transition: 0.3s all ease;
    }
    .engine_inner_big_image{
        display: inline-block;
        vertical-align: top;
        width: 465px;
        margin: 13px 0 0 21px;
        height: 453px;
        border-radius: 8%;
        filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1));
        display: none;
    }
    .engine_inner_big_image img{
        border-radius:8%;
        margin: 0;
        padding: 0;
        width: 100%;
    }


    .engine_inner_details_inner{
        box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.1);
        background: #FFFFFF;
        height: 346px;
        padding-top: 10px;
        border-radius: 7px;
    }

    .engine_inner_details{
        display: inline-block;
        width: 566px;
        border-radius: 7px;
        vertical-align: top;
        margin: 21px 0 0 21px;
        display: none;
    }
    .engine_inner_details button{
        background: #4379D6;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
        border: 0px;
        padding: 12px 23.5px;
        margin: 20px 0; 
        float: right;
        outline: none;
        cursor: pointer;
        transition: 0.3s all ease;
    }
    .engine_inner_details button:hover{
        background-color: #316fdb
    }

    .engine_inner_details table{
        border-collapse: collapse;
        width: 97%;
        margin-left: 2%;
    }
    .engine_inner_details tr{
        height: 41px;
        border-bottom: 1px solid #DADADA;
    }
    .engine_inner_details th{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 100%;
        color: #ADADAD;
    }
    .engine_inner_details td{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #3C4858;
    }



    .engine_inner_detail_1{
        width: 20px;
    }
    .engine_inner_detail_1 input{
        width: 100%;
    }
    .engine_inner_detail_1 input:checked{
        background-color: lightgrey
    }

    .engine_inner_detail_2{
        width: 44px;
        text-align: center;
    }
    .engine_inner_detail_3{
        width: 190px;
        text-align: left;
    }
    .engine_inner_detail_4{
        width: 110px;
        text-align: right;
    }
    .engine_inner_detail_5{
        width: 71px;
        text-align: right;
    }
    .engine_inner_detail_6{
        width: 108px;
        text-align: right;
        padding-right: 8px;
    }
    .engine_inner_details .engine_inner_detail_6_green{
        color: #83C578;
    }

</style>