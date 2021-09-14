var vm = new Vue({
    el: '#todo_list',
    data: {
        inputDate: "2021-09-14",
        inputText: "",
        count: 1,
        todoList: [],
    },
    computed: {
        isNotActive: function(){
            if(this.inputText.length === 0){
                return true;
            }else{
                return false;
            }
        },
    },
    methods: {
        inputTodo: function(){
            //テキストの入力を受け取り、todoListに保存
            // this.inputDate = this.inputDate.replace(/-/g, "/")
            this.todoList.push({ key:this.count, deadline:this.inputDate, text: this.inputText });
            this.count++;
            this.inputText = "";
        },
        deleteTodo: function(dKey){
            //ゴミ箱アイコンをクリックした時にその要素を削除する
            this.todoList = this.todoList.filter(todo => todo.key !== dKey);
        }

    },
})