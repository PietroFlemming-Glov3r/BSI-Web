const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },

    methods: {

        updateCart(action) {
            if(action[0] == 0){
                this.cart.push(action[1])
            }               
            else{
                index = this.cart.indexOf(action[1])
                this.cart.splice(index,1)
            }
        },
    },        
})
