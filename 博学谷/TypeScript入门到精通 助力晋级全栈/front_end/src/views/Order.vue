<template>
  <div class="about">
    <h1>订单列表</h1>
    <el-table
        :data="orderList"
        style="width: 100%">
      <el-table-column
          prop="order_no"
          label="订单号"
          width="180">
      </el-table-column>
      <el-table-column
          label="商品信息"
          width="180">
        <template slot-scope="scope">
          <el-image style="width: 100px;height: 100px;" :src="host+scope.row.items[0].item.pic"></el-image>
        </template>
      </el-table-column>
      <el-table-column
          label="订单状态"
          width="120">
        <template slot-scope="scope">
          <span>{{ statusMap[scope.row.status] }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="订单金额"
          width="120">
        <template slot-scope="scope">
          <span>{{ (scope.row.amount / 100).toFixed(2) }}</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="user.username"
          label="用户名"
          width="100">
      </el-table-column>
      <el-table-column
          label="创建时间">
        <template slot-scope="scope">
          <span>{{ $moment(scope.row.created_at).format('YYYY-MM-DD HH:mm:ss') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini" type="primary"
              @click="showDetail(scope.$index, scope.row)">详情
          </el-button>
          <el-button
              size="mini"
              v-if="role==='admin'"
              @click="changeStatus(scope.$index, scope.row)">设为已完成
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--  订单详情  -->
    <el-dialog title="订单详情" :visible.sync="dialogTableVisible">
      <div>
        <span>订单编号 {{ currentOrder.order_no }}</span>
        <el-divider direction="vertical"></el-divider>
        <span>总金额 {{ (currentOrder.amount / 100).toFixed(2) }}</span>
        <el-divider direction="vertical"></el-divider>
        <span>状态 {{ statusMap[currentOrder.status] }}</span>
        <el-divider direction="vertical"></el-divider>
        <span>创建时间 {{ $moment(currentOrder.created_at).format('YYYY-MM-DD HH:mm:ss') }}</span>
      </div>
      <el-divider>商品列表</el-divider>
      <el-table :data="gridData">
        <el-table-column label="名称" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.item.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品" width="200">
          <template slot-scope="scope">
            <el-image style="width: 100px;height: 100px;" :src="host+scope.row.item.pic"></el-image>
          </template>
        </el-table-column>
        <el-table-column label="单价">
          <template slot-scope="scope">
            <span>{{ (scope.row.unit_price / 100).toFixed(2) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="数量">
          <template slot-scope="scope">
            <span>{{ scope.row.quantity }}{{ scope.row.item.unit }}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import API from '../lib/api';

@Component
export default class App extends Vue {
  orderList: any[] = [];
  host = API.HOST;

  addToCart(index: number): void {
    console.log(index);
    this.$message({
      message: '已加入您的购物车',
      type: 'success'
    });
  }

  statusMap = {
    "handling": "未处理",
    "completed": "已完成"
  }

  dialogTableVisible = false;
  currentOrder = {};
  gridData: any[] = [];

  role = "customer";

  async created() {
    this.role = this.$store.state.user.role;
    let userid = this.$store.state.user ? this.$store.state.user._id : null;
    let result = await API.getOrders(this.role === 'customer' ? userid : null);
    console.log(result);
    if (result && result.data.code === 0) {
      this.orderList = result.data.data;
    }
  }

  showDetail(index: number, row: any): void {
    this.gridData = this.orderList[index].items;
    this.currentOrder = this.orderList[index];
    this.dialogTableVisible = true;
  }

  async changeStatus(index: number, row: any) {
    let orderId = this.orderList[index]._id;
    let result = await API.changeOrderStatus(orderId, 'completed');
    console.log(result);
    if (result && result.data.code === 0) {
      let userid = this.$store.state.user ? this.$store.state.user._id : null;
      let result = await API.getOrders(this.role === 'customer' ? userid : null);
      if (result && result.data.code === 0) {
        this.orderList = result.data.data;
      }
    }
  }
}
</script>