<template>
    <div class="resource">
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



        <div class="resource_main">
            <div class="resource_main_back">
                <router-link to="/">
                    <img class="resource_main_back_img" src="../assets/vector_arrow_left.png" alt="arrow_left">
                    <p class="resource_main_back_p">Вернуться в Профиль техники</p>
                </router-link>
            </div>


            <p class="resource_main_name_of_car">Гусеничный экскаватор Komatsu PC 300</p>

            <p class="resource_main_name">Ресурсность</p>


            <div class="resource_main_spent_details">
                <p class="resource_main_spent_details_paragraph">Истекающие/Приближающиеся</p>

                <table class="resource_main_spent_details_table">
                    <tr class="resource_main_spent_details_table_row">
                        <th class="resource_main_spent_details_table_row_1">№</th>
                        <th class="resource_main_spent_details_table_row_2">Наименование запчасти</th>
                        <th class="resource_main_spent_details_table_row_3">Группа запчастей</th>
                        <th class="resource_main_spent_details_table_row_4">Срок эксплуатации</th>
                        <th class="resource_main_spent_details_table_row_5 resource_main_spent_details_table_row_5">Остаточный ресурс</th>
                    </tr>


                    <tr class="resource_main_spent_details_table_row" v-for="(item, index) in spent" :key="index">
                        <td class="resource_main_spent_details_table_row_1">{{ item.id }}</td>
                        <td class="resource_main_spent_details_table_row_2">{{ item.name }}</td>
                        <td class="resource_main_spent_details_table_row_3">{{ item.group }}</td>
                        <td class="resource_main_spent_details_table_row_4">{{ item.srok }}</td>
                        <td v-if="item.stay < 0" class="resource_main_spent_details_table_row_5 resource_main_spent_details_table_row_5_red">{{ item.stay }}</td>
                        <td v-if="item.stay > 0" class="resource_main_spent_details_table_row_5 resource_main_spent_details_table_row_5_yellow">{{ item.stay }}</td>
                    </tr>
                </table>
            </div>



            <div class="resource_main_list_of_elements">
                <div class="resource_main_elements" v-for="(item, index) in tools" :key="index">
                    <img src="../assets/arrow_down.png" alt="arrow_down" @click="openElementDetais">
                    <p @click="openElementDetais">{{ index }}</p>

                    <div class="resource_main_certain_elements">
                    <div class="resource_main_certain_element" v-for="(i, index2) in item.details" :key="index2">
                        <p>{{ index2 }}</p>

                        <table class="resource_main_certain_element_table">
                            <tr>
                                <th class="resource_main_certain_element_table_1">Наименование запчасти</th>
                                <th class="resource_main_certain_element_table_2">Текующая наработка</th>
                                <th class="resource_main_certain_element_table_3">Срок службы</th>
                                <th class="resource_main_certain_element_table_4">Остаточный ресурс</th>
                                <th class="resource_main_certain_element_table_5">Дата последнего ремонта</th>
                                <th class="resource_main_certain_element_table_6">Кол-во замен</th>
                            </tr>

                            <tr v-for="(detail, index3) in i" :key="index3">
                                <td class="resource_main_certain_element_table_1">{{ detail.name }}</td>
                                <td class="resource_main_certain_element_table_2">{{ detail.now }}</td>
                                <td class="resource_main_certain_element_table_3">{{ detail.life }}</td>
                                <td v-if="detail.left < 0" class="resource_main_certain_element_table_4 resource_main_certain_element_table_4_red">{{ detail.left }}</td>
                                <td v-if="detail.left > 0" class="resource_main_certain_element_table_4 resource_main_certain_element_table_4_yellow">{{ detail.left }}</td>
                                <td class="resource_main_certain_element_table_5"><span>{{ detail.data }}</span><img @click="openForm" src="../assets/vector_pen.png" alt="pen"></td>
                                <td class="resource_main_certain_element_table_6">{{ detail.replace }}</td>
                                <div class="datepicker_block">
                                    <datepicker class="datepicker_block_date" :inline='true' v-model="value1"></datepicker>
                                    <div class="datepicker_form">
                                        <p id="datepicker_form_p">Наработка на момент замены:</p>
                                        <input class="datepicker_form_input" type="text">
                                    </div>

                                    <p @click="closeForm" id="datepicker_form_cancel">Отменить</p>
                                    <button @click="submitForm" id="datepicker_form_button">Сохранить</button>
                                </div>
                            </tr>
                        </table>

                        <router-link to="/engine">
                        <div class="resource_main_certain_element_add">
                            <img src="../assets/vector_plus.png" alt="plus"><span> Добавить запчасть</span>
                        </div>
                        </router-link>
                    </div>
                    </div>
                </div>

        

                
            </div>
          

        </div>
    </div>
</template>


<script>
import Datepicker from 'vuejs3-datepicker';
import { ref } from 'vue';
import moment from 'moment';

export default {
    name: 'resource',
    data() {
        return{
            spent: {
                1:{id:1,name:'Поршень',group:'ДВС',srok: 2100,stay:-300}, 
                2:{id:2,name:'Поршень',group:'ДВС',srok:1000,stay:-1000},
                3:{id:3,name:'Кулак',group:'Ходовая',srok:3000,stay:300},
                4:{id:4,name:'Вал',group:'АКПП',srok:5000, stay:-2000},
                },
            tools: {
                'Двигатель':{
                    details:{
                        'Поршневая группа':[
                            {name:'Поршень', now: '7500,00', life: '16 000,00', left: -300, data: '01.12.2020', replace:1},
                            {name:'Палец', now: '7500,00', life: '16 000,00', left: -300, data: '02.12.2020', replace:1},
                            {name:'Кольца', now: '7500,00', life: '16 000,00', left: 300, data: '03.12.2020', replace:1},
                            {name:'Кольца', now: '7500,00', life: '16 000,00', left: -2000, data: '04.12.2020', replace:1},
                        ],
                        'Головка блока цилиндров':[
                            {name:'Поршень', now: '7500,00', life: '16 000,00', left: -300, data: '01.12.2020', replace:1},
                            {name:'Палец', now: '7500,00', life: '16 000,00', left: -300, data: '02.12.2020', replace:1},
                            {name:'Кольца', now: '7500,00', life: '16 000,00', left: 300, data: '03.12.2020', replace:1},
                            {name:'Кольца', now: '7500,00', life: '16 000,00', left: -2000, data: '04.12.2020', replace:1},
                        ],
                    }
                },
                'Ходовая':{
                    details:{
                    'Поршневая группа':[
                        {name:'Поршень', now: '7500,00', life: '16 000,00', left: -300, data: '01.12.2020', replace:1},
                        {name:'Палец', now: '7500,00', life: '16 000,00', left: -300, data: '02.12.2020', replace:1},
                        {name:'Кольца', now: '7500,00', life: '16 000,00', left: 300, data: '03.12.2020', replace:1},
                        {name:'Кольца', now: '7500,00', life: '16 000,00', left: -2000, data: '04.12.2020', replace:1},
                    ],
                    'Головка блока цилиндров':[
                        {name:'Поршень', now: '7500,00', life: '16 000,00', left: -300, data: '01.12.2020', replace:1},
                        {name:'Палец', now: '7500,00', life: '16 000,00', left: -300, data: '02.12.2020', replace:1},
                        {name:'Кольца', now: '7500,00', life: '16 000,00', left: 300, data: '03.12.2020', replace:1},
                        {name:'Кольца', now: '7500,00', life: '16 000,00', left: -2000, data: '04.12.2020', replace:1},
                    ],}
                },
                'Коробка':{
                    details:{
                    'Поршневая группа':[
                        {name:'Поршень', now: '7500,00', life: '16 000,00', left: -300, data: '01.12.2020', replace:1},
                        {name:'Палец', now: '7500,00', life: '16 000,00', left: -300, data: '02.12.2020', replace:1},
                        {name:'Кольца', now: '7500,00', life: '16 000,00', left: 300, data: '03.12.2020', replace:1},
                        {name:'Кольца', now: '7500,00', life: '16 000,00', left: -2000, data: '04.12.2020', replace:1},
                    ],
                    'Головка блока цилиндров':[
                        {name:'Поршень', now: '7500,00', life: '16 000,00', left: -300, data: '01.12.2020', replace:1},
                        {name:'Палец', now: '7500,00', life: '16 000,00', left: -300, data: '02.12.2020', replace:1},
                        {name:'Кольца', now: '7500,00', life: '16 000,00', left: 300, data: '03.12.2020', replace:1},
                        {name:'Кольца', now: '7500,00', life: '16 000,00', left: -2000, data: '04.12.2020', replace:1},
                    ],}
                },
                'Расходники':{
                    details:{
                    'Поршневая группа':[
                        {name:'Поршень', now: '7500,00', life: '16 000,00', left: -300, data: '01.12.2020', replace:1},
                        {name:'Палец', now: '7500,00', life: '16 000,00', left: -300, data: '02.12.2020', replace:1},
                        {name:'Кольца', now: '7500,00', life: '16 000,00', left: 300, data: '03.12.2020', replace:1},
                        {name:'Кольца', now: '7500,00', life: '16 000,00', left: -2000, data: '04.12.2020', replace:1},
                    ],
                    'Головка блока цилиндров':[
                        {name:'Поршень', now: '7500,00', life: '16 000,00', left: -300, data: '01.12.2020', replace:1},
                        {name:'Палец', now: '7500,00', life: '16 000,00', left: -300, data: '02.12.2020', replace:1},
                        {name:'Кольца', now: '7500,00', life: '16 000,00', left: 300, data: '03.12.2020', replace:1},
                        {name:'Кольца', now: '7500,00', life: '16 000,00', left: -2000, data: '04.12.2020', replace:1},
                    ],}
                },
                'Гидравлика':{
                    details:{
                    'Поршневая группа':[
                        {name:'Поршень', now: '7500,00', life: '16 000,00', left: -300, data: '01.12.2020', replace:1},
                        {name:'Палец', now: '7500,00', life: '16 000,00', left: -300, data: '02.12.2020', replace:1},
                        {name:'Кольца', now: '7500,00', life: '16 000,00', left: 300, data: '03.12.2020', replace:1},
                        {name:'Кольца', now: '7500,00', life: '16 000,00', left: -2000, data: '04.12.2020', replace:1},
                    ],
                    'Головка блока цилиндров':[
                        {name:'Поршень', now: '7500,00', life: '16 000,00', left: -300, data: '01.12.2020', replace:1},
                        {name:'Палец', now: '7500,00', life: '16 000,00', left: -300, data: '02.12.2020', replace:1},
                        {name:'Кольца', now: '7500,00', life: '16 000,00', left: 300, data: '03.12.2020', replace:1},
                        {name:'Кольца', now: '7500,00', life: '16 000,00', left: -2000, data: '04.12.2020', replace:1},
                    ],}
                }
            }
        }
    },
    components: {
        Datepicker
    },
    setup(){
      const value1 = ref(new Date())

      return {value1}
  },
    methods: {
        openForm(event){
            event.target.parentNode.parentNode.childNodes[7].style.display = 'block'
        },
        closeForm(event){
            event.target.parentNode.style.display = 'none'
        },
        openElementDetais(event){
            if(event.target.parentNode.childNodes[2].classList[1] == ('resource_main_certain_elements_new')){
                event.target.parentNode.childNodes[2].classList.remove('resource_main_certain_elements_new')
                event.target.parentNode.childNodes[0].style.transform = 'rotate(0deg)'
            }
            else{
                event.target.parentNode.childNodes[2].classList.add('resource_main_certain_elements_new')
                event.target.parentNode.childNodes[0].style.transform = 'rotate(180deg)'
            }
            //event.target.parentNode.childNodes[2].classList.add('resource_main_certain_elements_new')
            console.log(event.target.parentNode.childNodes[2].classList)
        },
        openElementDetais2(event){
            if(event.target.parentNode.childNodes[2].classList[1] == ('resource_main_certain_elements_new')){
                event.target.parentNode.childNodes[2].classList.remove('resource_main_certain_elements_new')
                event.target.parentNode.childNodes[0].style.transform = 'rotate(0deg)'
            }
            else{
                event.target.parentNode.childNodes[2].classList.add('resource_main_certain_elements_new')
                event.target.parentNode.childNodes[0].style.transform = 'rotate(180deg)'
            }
            //event.target.parentNode.childNodes[2].classList.add('resource_main_certain_elements_new')
            console.log(event.target.parentNode.childNodes[2].classList)
        },
        submitForm(event){          
            event.target.parentNode.parentNode.childNodes[1].innerHTML = Number.parseInt(event.target.parentNode.parentNode.childNodes[1].innerHTML) - Number.parseInt(event.target.parentNode.childNodes[1].childNodes[1].value)
            event.target.parentNode.parentNode.childNodes[5].childNodes[0].innerHTML = this.convertDate1
            event.target.parentNode.parentNode.childNodes[6].innerHTML = Number.parseInt(event.target.parentNode.parentNode.childNodes[6].innerHTML) + 1
            event.target.parentNode.style.display = 'none'
        },
    },
    computed: {
      convertDate1() {
        return moment(this.value1).format('DD.MM.YYYY')
      },
    }
}
</script>


<style>
    .resource_main{
        font-family: SF UI Text, sans-serif;
        font-style: normal;
        line-height: 100%;
        font-weight: 500;

        width: 925px;
        margin-left: 18%;
        height: 300px;
        background: #FFFFFF;
        border-radius: 7px;
    }
    .resource_main_back_img, .resource_main_back_p{
        color:  #5188E7;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        display: inline-block; 
        padding-left: 10px;
    }
    .resource_main_back_img{
        width: 16px;
    }
    .resource_main_name_of_car{
        font-size: 16px;
        margin-top: 20px;
        margin-bottom: 16px;
        color: rgba(60, 72, 88, 0.7);
    }
    .resource_main_name{
        font-size: 18px;
        line-height: 21px;
        color: #3C4858;
        margin-bottom: 20px;
    }
    .resource_main_spent_details{
        width: 100%;
        height: 356px;
        line-height: 100%;
        font-weight: 500;
        box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.1);
        margin-bottom: 34px;
        
    }
    .resource_main_spent_details_paragraph{
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        margin: 0;
        color: #3C4858;
        padding: 20px 27px 10px 27px;
    }
    .resource_main_spent_details_table{
        width: 94%;
        margin-left: 3%;
        margin-top: 0;
        border-collapse: collapse;
    }
    .resource_main_spent_details_table_row{
        border: 0px;
        border-bottom: 1px solid #DADADA;
        height: 55px;
    }
    .resource_main_spent_details_table_row th{
        font-weight: 500;       
        font-size: 14px;
        line-height: 100%;
        color: #ADADAD;
        margin: 0;
    }
    .resource_main_spent_details_table_row td{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #3C4858;
        margin: 0;
    }
    .resource_main_spent_details_table_row_1{
        width: 51px;
        text-align: center;
    }
    .resource_main_spent_details_table_row_2{
        width: 245px;
        text-align: left;
    }
    .resource_main_spent_details_table_row_3{
        width: 206px;
        text-align: left;
    }
    .resource_main_spent_details_table_row_4{
        width: 138px;
        text-align: right;
    }
    .resource_main_spent_details_table_row_5{
        width: 138px;
        text-align: right;
        padding-right: 15px;
    }
    .resource_main_spent_details_table_row .resource_main_spent_details_table_row_5_yellow{
        color: #F8C700;
    }
    .resource_main_spent_details_table_row .resource_main_spent_details_table_row_5_red{
        color: #D30000;
    }
    .resource_main_list_of_elements{
        padding-bottom: 56px;
    }






    .resource_main_certain_elements{
        opacity: 0;
        visibility: hidden;
        height: 0px;
        transition: 0.3s all ease;
    }
    .resource_main_certain_elements_new{
        opacity: 1;
        visibility: visible;
        height: auto;
    }

    .resource_main_elements{
        width: 100%;
        margin: 10px 0;
        background: #FFFFFF;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
    }
    .resource_main_elements img{
        display: inline-block;
        margin: 22px 11px 22px 18px;
        vertical-align: top;
        cursor:pointer;
        transition: 0.3s all ease;
    }
    .resource_main_elements p{
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 25px;
        color: #5188E7;
        display: inline-block;
        cursor:pointer;
    }
    .resource_main_certain_element p{
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        margin: 0;
        line-height: 19px;
        color: #3C4858;
        padding-left: 18px;
    }
    .resource_main_certain_element_table{
        border-collapse: collapse;
        width: 94%;
        margin-left: 3%;
    }
    .resource_main_certain_element_table tr{
        border: 0px;
        border-bottom: 1px solid #DADADA;
        height: 55px;
    }
    .resource_main_certain_element_table th{
        font-weight: 500;
        font-size: 14px;
        line-height: 100%;
        color: #ADADAD;
    }
    .resource_main_certain_element_table td{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #3C4858;
    }
    .resource_main_certain_element_table_1{
        margin-left: 9px;
        width: 175px;
        text-align: left;
    }
    .resource_main_certain_element_table_2{
        width: 136px;
        text-align: right;
    }
    .resource_main_certain_element_table_3{
        width: 129px;
        text-align: right;
    }
    .resource_main_certain_element_table_4{
        width: 172px;
        text-align: right;
    }
    .resource_main_certain_element_table_5{
        width: 152px;
        text-align: right;
    }
    .resource_main_certain_element_table_5 img{
        display: inline-block;
        vertical-align: middle;
        margin: 0;
        margin-left: 6.83px;
        margin-bottom: 7px;
    }
    .resource_main_certain_element_table .resource_main_certain_element_table_4_red{
        color: #D30000; 
    }
    .resource_main_certain_element_table .resource_main_certain_element_table_4_yellow{
        color: #F8C700;
    }
    
    .resource_main_certain_element_table_6{
        width: 86px;
        text-align: right;
        margin-right: 17px;
    }
    .resource_main_certain_element_add{
        margin: 17px 0px 19px 18px; 
        padding-bottom: 19px;
    }
    .resource_main_certain_element_add img{
        margin: 0px;
        width: 14px;
        vertical-align: middle;
    }
    .resource_main_certain_element_add span{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #4379D6;
        margin-left: 6px;
    }
    .resource_main_certain_element a{
        text-decoration: none;
    }



    .datepicker_block{
        display: none;
        position: absolute;
        width: 230px;
        background: #FCFCFC;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 0 10px;
        height: auto;
        margin-top: 50px;
        margin-left: -230px;

    }
    .datepicker_form{
        display: block;
        background-color: white;
        width: 90%;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        margin-left: 5%;
        margin-top: 20px;
    }
    #datepicker_form_p{
        width: 115px;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        color: #3C4858;
        display: inline-block;
        cursor: text;
        vertical-align: middle;
        margin: 0;
    }
    .datepicker_form .datepicker_form_input{
        background: #FFFFFF;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        width: 64px;
        margin-top: 11px;
        margin-bottom: 7px;
        height: 24px;
        border: 0px;
        display: inline-block;
    }
    #datepicker_form_cancel{
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        color: #3C4858;
        margin-left: 40px;
        margin-top: 10px;
        margin-right: 10px;
    }
    #datepicker_form_button{
        width: 90px;
        padding: 7px 0;
        background: #5188E7;
        border-radius: 3px;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        color: #FFFFFF;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 12px;
        
        
    }
    .datepicker_block_date{
        margin-left: 20px !important;
    }
</style>