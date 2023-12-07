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
            if(this.myClass === "red") {
                this.myClass = "blu";
            } else {
                this.myClass = "red";
            }
        },
    }
}).mount('#title')