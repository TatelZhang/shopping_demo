<template>
  <ul class="pagination" id="pager">
    <li  :class="{disabled: prev_page}"><a :href="'/?tab='+tab+'page=1'" @click.prevent="jump(1)"><span>&laquo;</span></a></li>
    <li v-for="page in pages" @click.prevent="jump(page.index)" :key="page.id"  :class="{disabled: curr_page===page.index}"><a :href="page.page_path">{{page.index}}</a></li>
    <li :class="{disabled: next_page}"><a :href="next_page"><span>&raquo;</span></a></li>
  </ul>
</template>
<script>
    import solve from '../../../utils/solvefunc'
    // import eventHub from "../communicate"
    export default {
        data(){
            return {
                pages: null,
                curr_page: 1,
                prev_page: true,
                next_page: false,
                // tab: 'all'
            }
        },
        props:["tab"],
        methods:{
            jump: function(index){
                if(typeof(index) === "number"){
                    this.curr_page = index;
                }
            }
        },
        mounted:function(){
            this.pages = solve.makepage(this.curr_page, this.tab);
        },
        watch:{
            curr_page: function(){
                 if(this.curr_page ===1){
                    this.prev_page = true;
                }else{
                    this.prev_page = false;
                }
                this.pages = solve.makepage(this.curr_page, this.tab);
                var tab = this.tab,curr_page = this.curr_page;
                // eventHub.$emit("fresh",  `/?tab=${tab}&page=${curr_page}`);
            },
            tab: function(){
                this.pages = solve.makepage(1, this.tab);
            }
        }
    }
</script>