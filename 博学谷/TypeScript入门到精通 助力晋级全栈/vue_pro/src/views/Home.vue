<template>
  <div class="home">
    <Layout>
      <header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <MenuItem name="1">
            <Icon type="ios-paper"/>
            商品列表
          </MenuItem>
        </Menu>
      </header>
      <content>
        <router-view/>
      </content>
    </Layout>
  </div>
</template>
