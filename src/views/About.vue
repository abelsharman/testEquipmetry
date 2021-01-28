<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
  .header{
    position: absolute;
    height: 60px;
    left: 0px;
    right: 0px;
    top: 0px;
    background: #3C4858;
  }
  .header_lines{
    position: absolute;
    width: 24px;
    height: 24px;
    left: 40px;
    top: 18px;
  }
  .header_first_line{
    position: absolute;
    left: 12.5%;
    right: 12.5%;
    top: 25%;
    bottom: 75%;
    width: 18px;
  }
  .header_second_line{
    position: absolute;
    left: 12.5%;
    right: 12.5%;
    top: 50%;
    bottom: 50%;
    width: 18px;
  }
  .header_third_line{
    position: absolute;
    left: 12.5%;
    right: 12.5%;
    top: 75%;
    bottom: 25%;
    width: 18px;
  }
  .header_name {
    position: relative;
    width: 111.94px;
    height: 33px;
    left: 80px;
    top: 14px;
  }
  .header_name_inner{
    position: relative;
    width: 111.94px;
    height: 33px;
    left: 80px;
    top: 14px;
  }
  .header_name_white{
    position: relative;
    left: 5.56%;
    right: 92.92%;
    top: 25%;
    bottom: 44.68%;
  }
  .white_line1{
    position: absolute;
    left: -80px;
    top: -20px;    
  }

  .header_name_name {
    position: absolute;
    width: 79.83px;
    left: 112.11px;
    top: 23.33%;
    bottom: 21.67%;
    font-family: Montserrat Alternates;
    font-style: normal;
    font-weight: bold;
    font-size: 9px;
    line-height: 11px;
    color: #FFFFFF;
  }
  .header_right{
    position: absolute;
    width: 344px;
    height: 48px;
    left: 1055px;
    top: 6px;
  }
  .header_notifications{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

    position: absolute;
    width: 48px;
    right: 337px;
    top: 10%;
    bottom: 10%;
  }
  .header_notifications_icon{
    position: static;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 8px;
  }
  .header_notifications_icon_light{
    position: absolute;
    width: 24px;
    height: 24px;
    left: calc(50% - 24px/2);
    top: calc(50% - 24px/2);
  }
  .header_notifications_icon_dark{
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
  }
  .header_notifications_icon_dark img{
    position: absolute;
    left: 14.07%;
    right: 10.93%;
    top: 0%;
    bottom: 8.33%;

   
  }
  .header_notifications_icon_dark_not{
    position: absolute;
    left: 50%;
    right: 0%;
    top: 0%;
    bottom: 50%;
  }
  .header_notifications_icon_dark_not img{
    position: absolute;
    left: 11.48%;
    right: 21.85%;
    top: 0%;
    bottom: 33.33%;
    box-shadow: 1px 1px 4px rgba(14, 22, 88, 0.15);
  } 







  .header_mail{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

    position: absolute;
    width: 48px;
    height: 48px;
    right: 287px;
    top: 6px;
  }
  .header_mail_but{
    position: static;
    width: 48px;
    height: 48px;
    right: 0px;
    top: calc(50% - 48px/2);

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 8px;
  }
  .header_mail_but_icon{
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
  }
  .header_mail_but_icon_light{
    position: absolute;
    width: 24px;
    height: 24px;
    left: calc(50% - 24px/2);
    top: calc(50% - 24px/2);
  }
  .header_mail_but_icon_light_dark{
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
  }
  .header_mail_but_icon_light_dark img{
    position: absolute;
    left: 4.17%;
    right: 4.17%;
    top: -6.67%;
    bottom: 16.67%;
  }
  .header_mail_but_icon_light_dark_not{
    position: absolute;
    left: 60%;
    right: 0%;
    top: -30%;
    bottom: 0%;
  }
  .header_mail_but_icon_light_dark_not img{
    position: absolute !important;
    left: 25%;
    right: 8.33%;
    top: 0%;
    bottom: 53.33%;
    box-shadow: 1px 1px 4px rgba(14, 22, 88, 0.15);
  }













  .header_account{
    position: absolute;
    width: 202px;
    height: 30px;
    font-family: SF UI Text;
    right: 41px;
    top: 0px;
  }
  .header_account_admin{
    position: absolute;
    left: 18.32%;
    right: 63.37%;
    top: 60%;
    bottom: -6.67%;

    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;

    color: #90A0B7;
  }
  .header_account_name{
    position: absolute;
    left: 18.32%;
    right: 17.82%;
    top: 0%;
    bottom: 53.33%;

    font-family: SF UI Text;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;

    color: #F9FAFC;
  }
  .header_account_photo{
    position: absolute;
    left: 0%;
    right: 85.15%;
    top: 33%;
    bottom: 0%;
  }
  .header_account_photo img{
    position: absolute;
    left: 0%;
    right: 85.15%;
    top: 0%;
    bottom: 0%;
    

  }
  .header_account_photo p{
    position: absolute;
    left: 3.47%;
    right: 0%;
    top: -17%;
    bottom: 16.67%;
    z-index: 3;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 20px;

    text-align: center;
    letter-spacing: 0.2px;

    color: #3C4858;

    opacity: 0.75;
  }
  .header_account_icons{
    position: absolute;
    left: 0%;
    right: 0%;
    top: 000%;
    width: 190px;
    height: 20px;
  }
  .header_account_icons_group img{
    position: absolute;
    left: 90.67%;
    top: 90.5%;
  } 

  .main_left_first{
    position: absolute; 
    width: 244px;
    height: 252px;
    left: 44px;
    top: 96px;
    border: 1px solid #5188E7;
    box-sizing: border-box;
    border-radius: 20px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  .main_left_second{
    position: absolute;
    left: 146px;
    right: 0%;
    top: 198px;
  }
  .main_left_second2{
    position: absolute;
    left: 11px;
    right: 29%;
    top: 27.74%;
  }
  .main_left_second3{
    position: absolute;
    left: 7px;
    right: 29%;
    top: 27.74%;
  }
  .main_right_first_block_1 {
    font-family: SF UI Text;
  }
  .main_right_first_block_1 strong{
    position: absolute;
    left: 314px;
    top: 96px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;

    color: #3C4858;
  }
  .main_right_first_block_1 p{
    position: absolute;
    margin: 0;
    left: 314px;
    top: 120px;
    font-size: 22px;
    line-height: 100%;

    color: rgba(60, 72, 88, 0.7);
  }
  .main_right_first_block_2 p, .main_right_first_block_3 p{
    position: absolute;
    left: 939px;
    top: 96px;
    padding: 12px 18px;
    background: #5188E7;
    border: 2px solid #5188E7;
    box-sizing: border-box;
    border-radius: 4px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin: 0;
    text-align: center;
    color: #FFFFFF;
  }
  .main_right_first_block_3 p{
    left: 1179px;
    top: 96px;
  }
  .main_right_second_block{
    font-family: SF UI Text;
  }
  .main_right_second_block_1 p{
    position: absolute;
    width: 112px;
    height: 14px;
    left: 314px;
    top: 166px;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;

    color: #3C4858;
  }
  .main_right_second_block_1_check {
    position: absolute;
    height: 34px;
    left: 21.81%;
    right: 70.42%;
    top: 198px;

    background: #CDFFCD;
    border-radius: 7px;
  }
  .main_right_second_block_1_check p{
    position: relative;
    height: 17px;
    left: 24.17%;
    right: 71.25%;
    top: 1px;

    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: #007F00;
  }
  


























</style>
