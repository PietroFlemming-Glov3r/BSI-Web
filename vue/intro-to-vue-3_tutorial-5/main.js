const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green' },
              { id: 2235, color: 'blue' },
            ],
            sizes: [
                {id: 2555, label: 'S' },
                {id: 2556, label: 'M' },
                {id: 2557, label: 'L' },
                {id: 2558, label: 'XL' },
            ],
        }
    }
})