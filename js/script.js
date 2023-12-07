const { createTitle } = Vue;

createTitle({
    data() {
        return {
            bigTitle: "Questa è una prova!",
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