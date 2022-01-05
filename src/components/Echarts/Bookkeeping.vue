<template>
  <div style="text-align: left">
    <el-button class="add-button" type="success" @click="dialogFormVisible = true">记账</el-button>
    <el-dialog
      title="账单信息"
      :visible.sync="dialogFormVisible"
      width="560px">
      <el-form :label-position="labelPosition" ref="FormRef" :model="Form" :rules="FormRules" label-width="120px" class="login_form" >
        <el-form-item  label="内容">
          <el-input v-model="Form.name" ></el-input>
        </el-form-item>
        <el-form-item label="消费时间">
          <el-date-picker
            v-model="Form.date"
            type="date"
            placeholder="选择日期时间"
            value-format="yyyy-MM-dd"
            align="right"
            :picker-options="pickerOptions">
          </el-date-picker>
        </el-form-item>
        <el-form-item  label="金额">
          <el-slider
            show-input
            :max="100000"
            v-model="Form.amount">
          </el-slider>
        </el-form-item>
        <el-form-item  label="类型">
          <el-radio-group v-model="Form.type">
            <el-radio label="food">食品</el-radio>
            <el-radio label="education">教育</el-radio>
            <el-radio label="entertainment">娱乐</el-radio>
            <el-radio label="dotc">通勤</el-radio>
            <el-radio label="medical">医疗保健</el-radio>
            <el-radio label="dailyNecessities">生活必需品</el-radio>
            <el-radio label="clothes">服装</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <!--      <date-picker></date-picker>-->
      <div slot="footer" class="dialog-footer">
        <el-button type="info" @click="clear">取消</el-button>
        <el-button type="primary" @click="create">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Bookkeeping",
  data () {
    return {
      // 表单的数据绑定对象
      dialogFormVisible: false,
      labelPosition: 'right',
      Form: {
        name:'',
        type: 'food',
        date:'',
        amount:0.0
      },
      // 这是表单的验证规则对象
      FormRules: {
        name: [
          { required: true, message: '内容为必填项', trigger: 'blur' },
        ],
      },
      pickerOptions: {
        disabledDate(date){
          return date.getTime() > new Date();
        },
      }

    }
  },
  methods: {
    clear () {
      this.Form = {
        name:'',
        type: 'food',
        date:'',
        amount:0.0
      }
      this.dialogFormVisible = false
    },
    create () {
      let _this = this
      this.$refs.FormRef.validate(async valid =>{
        if(!valid) return
        console.log(this.Form)
        // await fetch('http://localhost:8080/finance/finance/addBill', {
        //   method: 'POST',
        //   mode: 'no-cors',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     name:this.Form.name,
        //     type: this.Form.type,
        //     date:this.Form.date,
        //     amount:this.Form.amount,
        //     familyId: this.$store.state.user
        //   })
        // })
        //   .then(result => {
        //     // alert(result);
        //     console.log(result);
        //   })
        //   .catch(error => console.log('error', error));

        this.$axios
          .post('http://localhost:9208/finance/addBill', {
            name:this.Form.name,
            type: this.Form.type,
            date:this.Form.date,
            amount:this.Form.amount,
            familyId: this.$store.state.user
            // familyId:1
          })
          .then(resp => {
            if (resp.data.code === 200) {
              this.$message("记录完毕")
              this.clear()
              this.dialogFormVisible = false
            }
            this.$emit('update')
          })
          .catch(failResponse => {this.$alert(failResponse)})
      })

    }
  }
}
</script>

<style scoped>
/*.add-button {*/
/*  margin: 18px 0 0 10px;*/
/*}*/
</style>
