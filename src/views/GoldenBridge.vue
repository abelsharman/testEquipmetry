<template>
  <div>
    <Header />
    <SideBar />

    <Table title="Заполняемость"></Table>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import SideBar from '../components/SideBar.vue'
import Table from '../components/Table.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    Header,
    SideBar,
    Table
  },
  methods: {
      
  },
  mounted(){
      /*
        fetch('https://drive.google.com/file/d/15bk3xPWOgnuK0Td-rySTVy1eESW9k2VH/view?usp=sharing', {mode: 'no-cors'})
        .then(async response => {
            const blob = await response.blob()
            var file = new File([blob], 'LCL.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
            console.log(file)
            
            var reader = new FileReader();
            reader.onload = function (e) {
                var data = e.target.result;
                data = new Uint8Array(data);
                var workbook = XLSX.read(data, {
                    type: "array"
                });

             
                var first_sheet_name = workbook.SheetNames[1];
            
                var worksheet = workbook.Sheets[first_sheet_name];
                var json = XLSX.utils.sheet_to_json(worksheet, {
                    header: 1
                });
                console.log(json);
          
            }
            reader.readAsArrayBuffer(file);
        })
        
       */

        
  },
  created(){

  },
}
</script>

<style>
</style>