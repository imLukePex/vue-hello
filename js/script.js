const { createApp } = Vue;

createApp({
    data() {
        return {
            bigTitle: "Hello VueJS!!!",
            myClass: "lightblue",
            image: "https://ositcom.com/static/images/images/HIMBVvhNz2kLVA8q1Ov2K5QCX4aCW9cDLgMJ1XST.png"
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