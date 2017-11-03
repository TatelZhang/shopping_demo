<template>
    <div>
        <form>
            <div class="form-group">
                <label>用户名</label>{{account.username}}
                <input type="text" v-model="account.username" class="form-control">
            </div>
            <div class="form-group">
                <label>密码</label>{{account.passwd}}
                <input type="text" v-model="account.passwd" class="form-control">
            </div>
            <button @click.prevent="changeThis">点击</button>
        </form>
        <button @click="changeWeb">改变网址</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                account: {
                    username: '',
                    passwd: ''
                }
            }
        },
        methods: {
            changeThis(){
                this.account.username = 'Tatel';
                this.account.passwd = '123456';
            },
            changeWeb(){
                // this.$router.push('/');
                // this.$router.push({name: 'index'});
                console.log(this.$route);
            }
        }
    }
</script>
