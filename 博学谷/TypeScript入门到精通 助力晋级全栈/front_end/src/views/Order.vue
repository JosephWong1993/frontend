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
          <el-image style="width: 100px;height: 100px;" :src="scope.row.items[0].item.pic"></el-image>
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
          <span>{{ scope.row.created_at }}</span>
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
        <span>创建时间 {{ currentOrder.created_at }}</span>
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
            <el-image style="width: 100px;height: 100px;" :src="scope.row.item.pic"></el-image>
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
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
  orderList = [
    {
      order_no: "11111111",
      items: [
        {
          item: {
            name: '美味的汉堡',
            unit: '个',
            pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
          },
          quantity: 10,
          unit_price: 1000
        }
      ],
      user: {
        _id: "111",
        username: "Jack"
      },
      amount: 200000,
      status: 'handling',
      created_at: '2020-01-01 18:30:00'
    },
    {
      order_no: "11111111",
      items: [
        {
          item: {
            name: '美味的汉堡',
            unit: '个',
            pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
          },
          quantity: 10,
          unit_price: 1000
        }
      ],
      user: {
        _id: "111",
        username: "Tom"
      },
      amount: 200000,
      status: 'completed',
      created_at: '2020-01-01 18:30:00'
    },
  ]

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

  showDetail(index: number, row: any): void {
    this.gridData = this.orderList[index].items;
    this.currentOrder = this.orderList[index];
    this.dialogTableVisible = true;
  }

  changeStatus(index: number, row: any) :void{
    // TODO：修改订单状态
  }
}
</script>