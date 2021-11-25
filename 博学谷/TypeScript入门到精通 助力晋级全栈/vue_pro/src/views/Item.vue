<template>
  <div class="item_list">
    <h1 style="padding-top: 50px;">商品列表</h1>
    <Row type="flex" justify="start" style="padding-top:20px;">
      <Col span="8"></Col>
      <Col span="8">
        <Input search placeholder="Enter something..."/>
      </Col>
      <Col span="4">
        <Select v-model="model1" style="width:200px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </Col>
      <Col span="4">

      </Col>
    </Row>

    <div class="main_area">
      <ul>
        <li style="width: 350px;padding: 5px">
          <Card style="width:345px">
            <div style="text-align:center">
              <img src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png">
              <div>
                <span style="font-size: 110%;">小米电视4S液晶平板电视</span>
                <div>
                  <span style="color: red;">4599.00元/台</span>
                  <Button type="text" style="color: #2d8cf0;">加入购物车</Button>
                </div>
              </div>
            </div>
          </Card>
        </li>
        <li style="width: 350px;padding: 5px">
          <Card style="width:345px">
            <div style="text-align:center">
              <img src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png">
              <div>
                <span style="font-size: 110%;">小米电视4S液晶平板电视</span>
                <div>
                  <span style="color: red;">4599.00元/台</span>
                  <Button type="text" style="color: #2d8cf0;">加入购物车</Button>
                </div>
              </div>
            </div>
          </Card>
        </li>
        <li style="width: 350px;padding: 5px">
          <Card style="width:345px">
            <div style="text-align:center">
              <img src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png">
              <div>
                <span style="font-size: 110%;">小米电视4S液晶平板电视</span>
                <div>
                  <span style="color: red;">4599.00元/台</span>
                  <Button type="text" style="color: #2d8cf0;">加入购物车</Button>
                </div>
              </div>
            </div>
          </Card>
        </li>
        <li style="width: 350px;padding: 5px">
          <Card style="width:345px">
            <div style="text-align:center">
              <img src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png">
              <div>
                <span style="font-size: 110%;">小米电视4S液晶平板电视</span>
                <div>
                  <span style="color: red;">4599.00元/台</span>
                  <Button type="text" style="color: #2d8cf0;">加入购物车</Button>
                </div>
              </div>
            </div>
          </Card>
        </li>
        <li style="width: 350px;padding: 5px">
          <Card style="width:345px">
            <div style="text-align:center">
              <img src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png">
              <div>
                <span style="font-size: 110%;">小米电视4S液晶平板电视</span>
                <div>
                  <span style="color: red;">4599.00元/台</span>
                  <Button type="text" style="color: #2d8cf0;">加入购物车</Button>
                </div>
              </div>
            </div>
          </Card>
        </li>
        <li style="width: 350px;padding: 5px">
          <Card style="width:345px">
            <div style="text-align:center">
              <img src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png">
              <div>
                <span style="font-size: 110%;">小米电视4S液晶平板电视</span>
                <div>
                  <span style="color: red;">4599.00元/台</span>
                  <Button type="text" style="color: #2d8cf0;">加入购物车</Button>
                </div>
              </div>
            </div>
          </Card>
        </li>
        <li style="width: 350px;padding: 5px">
          <Card style="width:345px">
            <div style="text-align:center">
              <img src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png">
              <div>
                <span style="font-size: 110%;">小米电视4S液晶平板电视</span>
                <div>
                  <span style="color: red;">4599.00元/台</span>
                  <Button type="text" style="color: #2d8cf0;">加入购物车</Button>
                </div>
              </div>
            </div>
          </Card>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
li {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  float: left;
  display: block;
}

.main_area {
  width: 75%;
  display: flex;
  padding-top: 20px;
  margin: 0 auto;
}
</style>
