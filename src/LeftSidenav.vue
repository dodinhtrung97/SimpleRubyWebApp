x`<template lang="html">
  <div class="left-sidenav">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">Homework 2</h2>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Navigate</h3>
        </div>
      </md-toolbar>
      <md-content flex role="navigation">
             <md-list>
                <md-list-item>
                    <md-button href="#/posts">Post Index</md-button>
                </md-list-item>
                <md-list-item>
                    <md-button href="#/posts/new">New Post</md-button>
                </md-list-item>
                <md-list-item>
                    <md-button @click.native="logout">Logout</md-button>
                </md-list-item>
            </md-list>
        </md-content>
    </md-sidenav>
  </div>
</template>

<script>
import UsersApi from './api/users.js'
import router from './router'

export default {
  name: 'sign-out',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    logout () {
      console.log('methods.logout')
      UsersApi.logout(function (_response) {
        router.push({ name: 'Posts.index' })
      })
    },
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    }
  }
}
</script>

<style lang="css">
</style>
