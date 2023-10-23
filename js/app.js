const { createApp } = Vue;
createApp({
	data() {
		return {
			message: "Hello World",
			num: 26,
		};
	},
    methods: {
        test() {
            this.num++;
        }
    }
}).mount("#app");