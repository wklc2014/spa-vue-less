'use strict';

module.exports = {
	// browser-sync server
	server: {
		host: "localhost",
		root: "dist/",
		port: 8200,
		browser: "chrome",
		open: true,
		notify: false,
		directory: true
	},
	static: {
		root: "src/",
		start: "static/"
	},
	html: {
		src: "src/index.html",
		dist: "dist/"
	},
	less: {
		src: ["src/less/**/*.less", "src/less/*.less"],
		tag: "src/less/main.less",
		dist: "src/css/"
	},
	image: {
		src: ["src/img/*", "src/img/**/*"],
		dist: "dist/asset/img"
	},
	css: {
		dist: "dist/asset/css/",
		dist_name: "main.css",
		concat: [""],
		concat_name: "concat.css"
	},
	js: {
		src: "src/js/main.js",
		dist: "dist/asset/js",
		dist_name: "main.js",
		public: "/asset/js/",
		concat: [""],
		concat_name: "concat.js"
	},
	font: {
		src: [""],
		dist: "/asset/fonts/"
	}
};