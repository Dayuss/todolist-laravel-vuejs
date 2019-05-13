<template>
    <div class='table-responsive'>
        <b-table striped hover :items="todos.data" :fields="fields" show-empty>
            <template slot="jadwal" slot-scope="row">
                {{row.item.name}}
            </template>
            <template slot="deskripsi" slot-scope="row">
                {{row.item.note}}
            </template>
            <template slot="berakhir" slot-scope="row">
                {{row.item.due_date}}
            </template>
            <template slot="status" slot-scope="row">
                <span class='badge badge-success' v-if="row.item.status==1">Selesai</span>
                <span class='badge badge-danger' v-else>Aktif</span>
            </template>
        </b-table>
        <div class='float-right'>
            <b-pagination
                v-model="pages"
                :total-rows="todos.total"
                :per-page="todos.per_page"
                aria-controls="my-table"
                v-if="todos.data.length > 0"
            ></b-pagination>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
    export default {
        name: 'TodoIndex',
        created(){
            this.getTodos()
        },
        data(){
            return{
                fields: ['jadwal','deskripsi','berakhir','status','created_at']
            }
        },
        watch: {
            pages: function(){
                console.log('eje')
                this.getTodos()
            }
        },
        computed:{
            ...mapState('todo', {
                todos: state => state.todos
            }),
            pages: {
                get() {
                    return this.$store.state.todo.pages
                },
                set(val){
                    console.log(val)
                    this.$store.state.todo.pages = val
                }
            }
        },
        methods:{
            ...mapActions('todo',['getTodos'])
        }
    }
</script>
