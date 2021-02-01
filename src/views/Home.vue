<template>
  <div class="home">
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

    <div class="main">
      <div class="main_left">
        <img class="main_left_first" src="../assets/car.png" alt="">
        <img class="main_left_second" src="../assets/vector_photo.png" alt="">
        <img class="main_left_third" src="../assets/vector_photo_inner.png" alt="">
      </div>

      <div class="main_right">
        <div class="main_right_first_block">
          <div class="main_right_first_block_1">
            <strong>Модель-тип</strong>
            <p>Гусеничный экскаватор Komatsu PC 300</p>

          </div>

          <div class="main_right_first_block_2">
            <p>Расписание обслуживания</p>
          </div>

          <div class="main_right_first_block_3">
            <p>Купить запчасти</p>
          </div>
        </div>



        <div class="main_right_second_block">
          <div class="main_right_second_block_1">
            <p>Текущий статус</p>

            <div class="main_right_second_block_1_check">
              <div></div>
              <p>На линии</p>
            </div>
          </div>

          <div class="main_right_second_block_2">
            <p>Серийный номер</p>
            <small>Y300363</small>
          </div>

          <div class="main_right_second_block_3">
            <div class="main_right_second_block_3_1">
              <p class="main_right_second_block_3_1_text1">SMR</p>
              <small>1000.0</small>
              <p class="main_right_second_block_3_1_text2">18.12.2020</p>
            </div>
            <div class="main_right_second_block_3_2">
              <img src="../assets/vector_pen.png" alt="pen">
            </div>
          </div>

          <div class="main_right_second_block_4">
            <p>Местоположение машины</p>
            <small>Алматы, Медеуский район</small><br>
            <span>18.12.2020 </span>
            <span> 13:23:00</span> 
            <img src="../assets/vector_pen.png" alt="pen">
          </div>

          <div class="main_right_second_block_5">
            <p>Следующее ТО </p>
            <small>40.0 мото часов</small>
          </div>

          <div class="main_right_second_block_6">
            <p>Предстоящие события </p>
            <img src="../assets/arrow_up.png" alt="">
          </div>
        </div>



        <div class="main_right_third_block">
          <span class="main_right_third_block_black">Выберите период: </span>
          <img src="../assets/vector_date.png" alt="date">
          <span class="main_right_third_block_blue"><span @click="openFirstForm">{{ convertDate1 }}</span> - <span @click="openSecondForm">{{ convertDate2 }}</span></span><br>
          <datepicker class="for_1_date" v-model="defaultValue1" :inline='true' @click="closeForm" :monday-first='true' :iconWidth="width" :iconHeight="height" :minimum-view="'day'" :maximum-view="'day'"></datepicker>
          <datepicker class="for_2_date" v-model="defaultValue2" :inline='true' @click="closeForm" :monday-first='true' :iconWidth="width" :iconHeight="height" :minimum-view="'day'" :maximum-view="'day'"></datepicker>



          <div class="main_right_third_block_1">
            <p>Количество простоев</p>
            <small>120 часов</small>
          </div>

          <div class="main_right_third_block_2">
            <p>Операционные расходы</p>
            <small>18 357 000 тг</small>
          </div>

          <div class="main_right_third_block_3">
            <p>SMR</p>
            <small>1000 Мото часов</small>
          </div>
        </div>
      </div>

    </div>



    <div class="elements_and_calendar"> 
      <div class="elements">
        <span>Дата последнего изменения данных:</span>
        <span style="margin-left: 8px;">18.12.2020</span>
        <span style="margin-left: 8px;">13:23:00</span>



        <div class="elements_first_row">
          <div class="elements_first_row_1">
            <p>История обслуживания</p>
            <strong>01.12.2020</strong>
            <small>Замена поршневой</small>
            <strong>12.12.2020</strong>
            <small>Замена стартера</small>
          </div>

          <div class="elements_first_row_2">
            <p>История обслуживания</p>
            <strong>01.12.2020</strong>
            <small>Замена поршневой</small>
            <strong>12.12.2020</strong>
            <small>Замена стартера</small>
          </div>
        </div>



        <div class="elements_first_row">
          <div class="elements_first_row_3">
            <p>Предупреждения</p>

            <img src="../assets/vector_danger.png" alt="danger">
            <small>5 предупреждений</small>
            <img class="elements_first_row_3_1" src="../assets/ellipse.png" alt="el">
            <img class="elements_first_row_3_2" src="../assets/ellipse_red.png" alt="el">
          </div>
        
        
          <div class="elements_first_row_4">
            <p>Тех. документация</p>
            <strong>Информация о технике</strong>
            <strong>Вложения</strong>
            <small>Ещё 3</small>
            <img class="elements_first_row_4_1" src="../assets/ellipse.png" alt="el">
            <img class="elements_first_row_4_2" src="../assets/ellipse_blue.png" alt="el">
          </div>
        </div>




        <div class="elements_first_row">
          <div class="elements_first_row_1 elements_first_row_5">
            <div class="elements_first_row_5_for_img">
              <img class="r1" src="../assets/rectangle.png" alt="r1">
              <img class="r2" src="../assets/rectangle2.png" alt="r2">
              <p>История закупок по технике</p>
            </div>
            <strong>01.12.2020</strong>
            <small>Стартер</small>
            <strong>12.12.2020</strong>
            <small>Генератор</small>
          </div>

          <div class="elements_first_row_2 elements_first_row_6">
            <router-link to="/resource">
            <div class="elements_first_row_6_for_img">
              <img class="r1" src="../assets/rectangle.png" alt="r1">
              <img class="r2" src="../assets/rectangle2.png" alt="r2">
              <p>Ресурсность</p>
            </div>
            </router-link>
            <strong>Двигатель</strong>
            <small>-3000 мото часов</small>
            <strong>Ходовая часть</strong>
            <small>300 мото часов</small><br>
            <small class="elements_first_row_2_etc">Ещё 3</small>
          </div>
        </div>





      </div>








      <div class="calendar">
        <div class="calendar_first_row">
          <div class="calendar_first_row_1">
            <p>Просроченные события</p>
            <div class="calendar_first_row_1_red">
              <strong>Замена стартера</strong>
              <small>Событие</small>
              <span>10 декабря</span>
            </div>

            <div class="calendar_first_row_1_red">
              <strong>Измерение ходовой</strong>
              <small>Событие</small>
              <span>21 декабря</span>
            </div>
          </div>

          <div class="calendar_first_row_2">
            <datepicker :value="defaultValue" :highlighted='highlighted' :inline='true' :monday-first='true' :iconWidth="width" :iconHeight="height" :minimum-view="'day'" :maximum-view="'day'"></datepicker>
          </div>
        </div>



        <div class="calendar_second_row">
          <div class="calendar_second_row_1">
            <p>Предстоящие события</p>
            <small>22 Декабря</small>

            <div class="calerdar_second_row_item">
              <strong>Тех.обслуживание</strong>
              <small>Событие</small>
              <span>22 декабря, вторник</span>
            </div>

            <div class="calerdar_second_row_item">
              <strong>Измерение ходовой</strong>
              <small>Событие</small>
              <span>22 декабря, вторник</span>
            </div>


            <div class="calerdar_second_row_item">
              <strong>Измерение ходовой</strong>
              <small>Событие</small>
              <span>22 декабря, вторник</span>
            </div>



            <div class="calerdar_second_row_item">
              <strong>Замена стартера</strong>
              <small>Событие</small>
              <span>22 декабря, вторник</span>
            </div>


            <div class="calerdar_second_row_item calerdar_second_row_item_green">
              <strong>Замена стартера</strong>
              <small>Событие</small>
              <span>23 декабря, среда</span>
            </div>


            <div class="calerdar_second_row_item calerdar_second_row_item_green">
              <strong>Замена стартера</strong>
              <small>Событие</small>
              <span>23 декабря, среда</span>
            </div>



            <span id="calerdar_second_row_small">Ещё 40</span>
        </div>



        </div>

      </div>

    </div>





  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Datepicker from 'vuejs3-datepicker';
import moment from 'moment';
import { ref } from 'vue';
export default {
  name: 'Home',
  setup(){
      const height = '0';
      const width = '0';
      const defaultValue1 = ref(new Date())
      const defaultValue2 = ref(new Date())
      const highlighted = {
        dates: [
          new Date(2020, 11, 10),
          new Date(2020, 11, 21)
        ]
      };
      return {width,height, highlighted, defaultValue1, defaultValue2}
  },
  data(){
    return{

    }
  },
  components: {
    Datepicker
  },
  methods:{
      openFirstForm(event){
        event.target.parentNode.parentNode.childNodes[4].style.display = 'inline-block'
      }, 
      openSecondForm(event){
        event.target.parentNode.parentNode.childNodes[5].style.display = 'inline-block'
      },
      closeForm(event){
        event.target.parentNode.parentNode.parentNode.parentNode.style.display='none'
      }
  },
  computed: {
      convertDate1() {
        return moment(this.defaultValue1).format('DD.MM.YYYY')
      },
      convertDate2() {
        return moment(this.defaultValue2).format('DD.MM.YYYY')
      },
  },
}
</script>

<style>
  .for_1_date, .for_2_date{
    display: none ;
    position: absolute !important;
    z-index: 9999 !important;
    box-sizing: border-box;
  }
  .for_2_date{
    left: 529px !important;
  }
  .vuejs3-datepicker__calendar-topbar{
    display: none;
  }
  .vuejs3-datepicker__calendar-actionarea .cell{
    font-size: 1.1em;
    height:17px;
    line-height: 17px;
  }
  .calendar_div{
    position: relative;
    font-size: 0.5em;
    display: none;
  }
  .vuejs3-datepicker__value{
    font-size: 0.5em;
    display: none;
  }
  .vuejs3-datepicker .vuejs3-green{
    font-size: 0.5em !important;
    position: relative;
    display: block;
    width: 200px;
  }
  .vuejs3-datepicker .for_1_date, .vuejs3-datepicker .for_2_date{
    display: none;
  }

  .vuejs3-datepicker__calendar-actionarea{
    font-size: 0.5em;
    width: 200px;
    height: auto;
  }
  .vuejs3-datepicker__calendar {
    position: absolute;
    z-index: 100;
    background: #fff;
    width: 100%;
    box-shadow: 0 0.2rem 1rem rgb(0 0 0 / 12%);
    border-radius: 4px;
    margin-top: 4px;
  }
  .datepicker{
    width: 100%;
  }
  .header{
    font-family: SF UI Text, sans-serif;
    width: 100%;
    margin: 0;
    background-color: #3C4858;
    height: 60px;
  }
  .header p{
    margin: 0;
    color: white;
  }
  .lines{
    display: inline-block;
    width: 18px;
    margin: 0;
    margin-left: 4%;
    padding-top: 0%;
  }
  .lines img{
    display: block;
    margin: 5px 0;
    padding: 0;
    
  }
  .header_logo {
    display: inline-block;
    margin-left: 2%;
    vertical-align: top;
    padding-top: 12px;
  }
  .header_notification{
    width: 18px;
    height: 22px;
    margin: 0;
    margin-left: 60%;
    margin-top: 0px;
    
  }
  .header_mail{
    width: 22px;
    height: 16px;
    margin-left: 2%;
    padding-top: 24px;
    vertical-align: top;
  }
  .header_user{
    margin-left: 2%;
    display: inline-block;
  }
  .header_user_img {
    float: left;
    margin-top: 7%;
    background-color: white;
    padding: 5px 7px;
    border-radius: 25px;
  }
  .header_user_img p{
    font-family: SF UI Text;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #3C4858;
  }
  .header_user_name{
    float: right;
    padding-left: 10px;
    padding-top: 10px;
    font-family: SF UI Text;
    font-style: normal;
  }
  .header_user_name strong{
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    color: #F9FAFC;
  }
  .header_user_name p{
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    color: #90A0B7;
  }
  .header_points{
    display: inline-block;
    vertical-align: top;
    width: 4px;
    height: 16px;
    margin-left: 1%;
    margin-top: 22px;
  }
  .header_notification_red_point, .header_mail_red_point {
    display: inline-block;
    width: 8px;
    height: 8px;
    position: relative;
    top: -13px;
    left: -8px;
    background-color: #FC3C5F;
    border-radius: 10px;
  }
  .header_mail_red_point {
    left: -5px;
  }




  /* main part/block */
  .main{
    font-family: SF UI Text, sans-serif;
    padding: 36px 44px 16px 44px;
    height: 230px;
  }


  /* left part/block of main block */
  .main_left {
    float: left;
    width: 18%;
  }
  .main_left_first{
    width: 252px;
    height: 244px;
  }
  .main_left_second{
    position: relative;
    top: -115px;
    width: 40px;
    height: 32px;
    left: -145px;
  }
  .main_left_third{
    position: relative;
    top: -120px;
    width: 16px;
    height: 16px;
    left: -173px;
  }



  /* right part/block of main block */

  .main_right {
    font-family: SF UI Text, sans-serif;
    float: right;
    width: 80%;
  }

  .main_right_first_block {
    width: 100%;
  }
  .main_right_first_block_1{
    display:inline-block;
    width: 59%;
  }
  .main_right_first_block_2{
    display:inline-block;
    width: 20%;
    margin: 0 3%;
    background: #5188E7;
    border: 2px solid #5188E7;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 12px 18px;
    vertical-align: top;
  }
  .main_right_first_block_3{
    display:inline-block;
    width: 15%;
    margin: 0 0% 0 0;
    background: #5188E7;
    border: 2px solid #5188E7;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 12px 18px;
    vertical-align: top;
  }


  /* text of first block oon right part*/
  .main_right_first_block_1 strong{
    font-size: 16px;
    font-style: normal;
    font-weight: 500; 
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #3C4858;
  }
  .main_right_first_block_1 p{
    margin: 0;
    margin-top: 5px;
    font-size: 22px;
    line-height: 80%;
    color: rgba(60, 72, 88, 0.7);
  }
  .main_right_first_block_2 p, .main_right_first_block_3 p{
    font-style: normal;
    width: 192px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    
    color: #FFFFFF;
    margin: 0;
  }
  .main_right_first_block_3 p{
    width: 158px;
    padding-left: 5px;
  }




  /* second block of right part */
  .main_right_second_block {
    width: 100%;
    margin-top: 13px;
   
  }
  .main_right_second_block_1{
    display: inline-block;
    width: 11%;
    margin: 0 1% 0 0;
    vertical-align: top;
    text-align: center;
  }
  .main_right_second_block_2{
    display: inline-block;
    width: 11%;
    margin: 0 1%;
    vertical-align: top;
  }
  .main_right_second_block_3{
    display: inline-block;
    width: 10%;
    margin: 0 1%;
    vertical-align: top;
  }
  .main_right_second_block_4{
    display: inline-block;
    width: 23%;
    margin: 0 1%;
    vertical-align: top;
  }
  .main_right_second_block_5{
    display: inline-block;
    width: 14%;
    margin: 0 1%;
    vertical-align: top;
  }
  .main_right_second_block_6{
    display: inline-block;
    width: 21%;
    margin: 0 0 0 1%;
    vertical-align: top;
    border: 2px solid #5188E7;
    padding: 10px 17px;
    box-sizing: border-box;
    border-radius: 4px;
  }
  .main_right_second_block p{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: #3C4858;
    margin: 0;
  }
  .main_right_second_block_1_check {
    background: #CDFFCD;
    margin-top: 6px;
    border-radius: 7px;
    padding: 6px 12px;
  }
  .main_right_second_block_1_check div{
    width: 10px;
    height: 10px;
    background-color: #007F00;
    border-radius: 10px;
    margin: 0px 5px;
    display: inline-block;
  }
  .main_right_second_block_1_check p{
    font-weight: 500;
    display: inline-block;
    font-size: 14px;
    line-height: 17px;
    margin: 0;
    color: #007F00;
  }
  .main_right_second_block_2 p{
    margin-bottom: 10px;
  }
  .main_right_second_block_2 small{
    font-size: 18px;
    line-height: 100%;
    color: rgba(60, 72, 88, 0.7)
  }


  .main_right_second_block_3_1{
    float: left;
    width: 60%;
  }
  .main_right_second_block_3_2{
    float: right;
    width: 40%;
  }
  .main_right_second_block_3_2 img{
    margin: 0;
    margin-top: 90%;
    margin-left: 0;
  }
  .main_right_second_block_3_1 .main_right_second_block_3_1_text1 {
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: #3C4858;
    margin: 0;
    margin-bottom: 7px;
    margin-top: 2px;
  }
  .main_right_second_block_3_1 .main_right_second_block_3_1_text2 {
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    color: rgba(60, 72, 88, 0.8);
    margin: 0;
    margin-top: 4px;
  }
  .main_right_second_block_3_1 small{
    font-size: 18px;
    line-height: 100%;
    color: rgba(60, 72, 88, 0.7);
  }

  .main_right_second_block_4 p{
    font-weight: 500;
    font-size: 14px;
    color: #3C4858;
    margin-bottom: 7px;
    margin-top: 2px;
  }
  .main_right_second_block_4 small{
    font-size: 18px;
    line-height: 100%;
    color: rgba(60, 72, 88, 0.7)
  }
  .main_right_second_block_4 span{
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    color: rgba(60, 72, 88, 0.8);
    margin: 0;
    margin-top: 2px;
  }
  .main_right_second_block_4 img{
    height: 18px;
    margin-left: 5%;

  }


  .main_right_second_block_5 p{
    font-weight: 500;
    font-size: 14px;
    color: #3C4858;
    margin-bottom: 7px;
    margin-top: 2px;
  }
  .main_right_second_block_5 small{
    font-size: 18px;
    line-height: 100%;
    color: rgba(60, 72, 88, 0.7)
  }
  
  .main_right_second_block_6 p{
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: #5188E7;
    display: inline-block;
    margin-left: 7%;
  }
  .main_right_second_block_6 img{
    display: inline-block;
    margin-left: 5%;
  }


  /* third block of right part
  third block of right part
  third block of right part
  third block of right part
  third block of right part
  third block of right part
   */

  .main_right_third_block{
    width: 51%;
    margin-top: 2%;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    height: 64px;
    padding: 18px 14px;
    font-family: SF UI Text;
  }
  .main_right_third_block img{
    vertical-align: top;
    margin: 0 5px;
  }
  .main_right_third_block p{
    font-weight: 500;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 100%;
    color: #3C4858;
  }
  .main_right_third_block small{
    font-size: 18px;
    line-height: 100%;  
    color: rgba(60, 72, 88, 0.7);
  }

  .main_right_third_block_black, .main_right_third_block_blue{
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: #3C4858;
  }
  .main_right_third_block_blue{
    color: #5188E7;
  }
  .main_right_third_block_1, .main_right_third_block_2, .main_right_third_block_3{
    display: inline-block;
    width: 32%;
  }




  /*   elements vidgets */
  /*   elements vidgets */
  /*   elements vidgets */
  /*   elements vidgets */
  /*   elements vidgets */
  /*   elements vidgets */
  /*   elements vidgets */
  /*   elements vidgets */


  .elements_and_calendar{
    width: 94%;
    font-family: SF UI Text, sans-serif;
    padding: 38px 44px;
  }

  .elements{
    display: inline-block;
    width: 50%;
    margin-right: 12%;
  }
  .elements span{
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    color: #3C4858;
  }
  .elements_first_row{
    width: 100%;
  }
  .elements_first_row_1, .elements_first_row_2, .elements_first_row_3, .elements_first_row_4{
    width: 47.8%;
    height: 155px;
    border-radius: 21.67px;
    margin-top: 3%;
    display: inline-block;
    background-color: white;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15));

  }
  .elements_first_row_1, .elements_first_row_3{
    margin-right: 4%;
  }
  .elements_first_row_1 p, .elements_first_row_2 p{
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    border-top-left-radius: 21.67px;
    border-top-right-radius: 21.67px;
    line-height: 18px;
    color: #FFFFFF;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
    background: linear-gradient(180deg, #FFD422 0%, #F2C800 100%);
    width: 95%;
    margin: 0;
    padding: 16px 0 16px 16px;
  }
  .elements_first_row_1 strong, .elements_first_row_2 strong{
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
    display: block;
    padding-left: 16px; 
    padding-top: 11px;
  }
  .elements_first_row_1 small, .elements_first_row_2 small{
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    color: #3C4858;
    padding-left: 16px; 
  }
  .elements_first_row_3{
    color: white;
    background: linear-gradient(180deg, #DB4B3D 0%, #D03728 100%);
  }
  .elements_first_row_3 p{
    font-weight: 600;
    padding-left: 16px;
    font-size: 16px;
    line-height: 19px;
  }
  .elements_first_row_4{
    vertical-align: top;
    color: white;
    background: #1B519C;  
  }
  .elements_first_row_4 p{
    font-weight: 600;
    padding-left: 16px;
    font-size: 16px;
    line-height: 19px;
  }
  .elements_first_row_4 strong{
    font-style: normal;
    font-weight: normal;
    padding-left: 16px;
    font-size: 15px;
    margin: 14px 0 0px 0;
    line-height: 18px;
    display: block;
  }
  .elements_first_row_4 small{
    font-size: 15px;
    padding-left: 16px;
    line-height: 1px;
    color: rgba(255, 255, 255, 0.57);
  }
  .elements_first_row_4_1{
    position: relative;
    left: 219px;
    top: 4px;
    width: 34px;
    height: 34px;
  }
  .elements_first_row_4_2{
    position: relative;
    left: 193px;
    top: -5px;
    height: 15.668037414550781px;
    width: 15.668037414550781px;
  }











  .elements_first_row_5, .elements_first_row_6{
    height: 177px;
    vertical-align: top;
  }
  .elements_first_row_5_for_img, .elements_first_row_6_for_img{
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    border-top-left-radius: 21.67px;
    border-top-right-radius: 21.67px;
    line-height: 18px;
    color: #FFFFFF;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
    background: linear-gradient(180deg, #89CB7E 0%, #84CD78 100%);
    width: 95%;
    margin: 0;
    padding: 16px 0 16px 16px;
  }
  .elements_first_row_5 p, .elements_first_row_6 p{
    width: 80%;
    display: inline-block;
    margin: 0;
    padding: 0;
    background: 0;
  }
  .elements_first_row_5 img, .elements_first_row_6 img{
    width: 20px;
    background: #C4C4C4;
    border-radius: 2px;
    display: inline-block;
  }

  .elements_first_row_5_for_img .r1, .elements_first_row_6_for_img .r1{
    position: relative;
    width: 24px;
    height: 16px;
    left: 2px;
    top: 5px;
  }
  .elements_first_row_5_for_img .r2, .elements_first_row_6_for_img .r2{
    position: relative;
    width: 11px;
    border-top-right-radius: 3px;
    height: 16px;
    left: -22px;
    top: 1px;
  }



  .elements_first_row_6 p, .elements_first_row_6_for_img{
    background: #40A8C4;
  }
  .elements_first_row_6 .elements_first_row_2_etc{
    font-size: 15px;
    line-height: 25px;
    color: #BEBEBE;
  }
  .elements_first_row_3 img{
    position: absolute;
    left: 42.55%;
    right: 42.25%;
    top: 34.84%;
    bottom: 34.73%;
  }
  .elements_first_row_3 small{
    position: absolute;
    width: 138px;
    height: 17px;
    left: 96px;
    top: 117px;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    display: block;
  
  }
  .elements_first_row_3 .elements_first_row_3_1 {
    position: absolute;   
    width: 34px;
    height: 34px;
    left: 277px;
    top: 105px;
  }
  .elements_first_row_3 .elements_first_row_3_2 {
    position: absolute;
    left: 88.06%;
    top: 74%;

  }



  












  /*   calendar vidgets */
  /*   calendar vidgets */
  /*   calendar vidgets */
  /*   calendar vidgets */
  /*   calendar vidgets */
  /*   calendar vidgets */
  /*   calendar vidgets */
  /*   calendar vidgets */



  .calendar{
    display: inline-block;
    width: 464px;
    border-radius: 21.67px;
    margin-top: 35px;
    height: auto;
    vertical-align: top;
    background: #FFFFFF;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15));
  }
 
  .calendar_first_row {
    display: block;
    height: auto;
    width: 100%;
    height: 200px;
  }
  .calendar_first_row_1{
    float: left;
    width: 200px;
    margin-right: 20px;
    border-top-left-radius: 21.67px;
    padding-top: 16px;
  }
  .calendar_first_row_1 p{
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: #5188E7;
    padding-left: 17px;
  }
  .calendar_first_row_1_red{
    margin-top: 12px;
    margin-left: 17px;
    padding-left: 6px;
    border-left: 2px solid #E7515A;
    border-radius: 1px;
  }
  .calendar_first_row_1_red strong{
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
  }
  .calendar_first_row_1_red small{
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
    display: block;
    margin-bottom: 4px;
  }
  .calendar_first_row_1_red span{
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: rgba(0, 0, 0, 0.5);
  }
  .calendar_first_row_2{
    float: right;
    width: 220px;
    height: auto;
    border-top-right-radius: 21.67px;
    padding-top: 16px;
  }

  .calendar_first_row_2 p{
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: #5188E7;
  }
  .calendar_second_row {
    width: 100%;
    display: block;
    padding-left: 17px;
  }
  .calendar_second_row p{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 6px;
    line-height: 100%;
    color: #5188E7;
  }
  .calendar_second_row small{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    margin: 0;
    line-height: 17px;
    color: #AAAAAA;
    display: block;
  }
  .calerdar_second_row_item{
    width: 220px;
    display: inline-block;
    margin-top: 13px;
    border-left: 2px solid #5188E7;
    padding-left: 6px;
    border-radius: 1px;
  }
  .calerdar_second_row_item_green{
    border-left: 2px solid #71B548;
  }
  .calerdar_second_row_item strong{
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
  }
  .calerdar_second_row_item small{
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
    margin: 2px 0;
  }
  .calerdar_second_row_item span{
    font-size: 12px;
    line-height: 14px;
    color: rgba(0, 0, 0, 0.5);
  }
  #calerdar_second_row_small {
    color: #BEBEBE;
    font-size: 15px;
    padding-left: 2px;
    margin-top: 10px;
    display: block;
  }

  


  

</style>