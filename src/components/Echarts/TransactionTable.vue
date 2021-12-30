<template>
  <el-table :data="list" stripe style="width: 100%;padding-top: 15px;">
    <el-table-column type="index" align="center" label="账单序号" width="120"></el-table-column>
    <el-table-column label="描述"  prop="name">
    </el-table-column>
    <el-table-column label="金额"  align="center" prop="amount">
    </el-table-column>
    <el-table-column label="日期"  align="center" prop="date" sortable>
    </el-table-column>
    <el-table-column label="分类"  align="center" prop="type">
    </el-table-column>
  </el-table>
</template>

<script>
// import { transactionList } from '@/api/remote-search'

export default {
  filters: {
    statusFilter (status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter (str) {
      return str.substring(0, 30)
    }
  },
  data () {
    return {
      list: null
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$axios.get('/finance/finance/bills/'+1).then(resp => {
        if (resp && resp.data.code === 200) {
          console.log(resp.data.object)
          this.list = resp.data.object
        }
      })
    }
  }
}
</script>
