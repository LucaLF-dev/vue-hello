const { createApp } = Vue;
createApp({
	data() {
		return {
			message: "Hello World",
            messageWorld: "Cosa pensi del mondo in cui viviamo?",
			num: 26,
            photo: "https://picsum.photos/200/300",
		};
	},
    methods: {
        test() {
            this.num++;
        }
    }
}).mount("#app");