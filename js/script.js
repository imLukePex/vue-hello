const { createApp } = Vue;

createApp({
    data() {
        return {
            bigTitle: "Hello VueJS!!!",
            myClass: "lightblue"
        }
    },    
    methods: {
        changeColor() {
            if(this.myClass === "lightblue") {
                this.myClass = "lightgreen";
            } else {
                this.myClass = "lightblue";
            }
        },
    }
}).mount('#title')