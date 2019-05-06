let gulp=require('gulp');
let webserver=require('gulp-webserver')

gulp.task('webserver',function(){
	return gulp.src('./src')
	.pipe(webserver({
		post:8080,
		leaverload:true,
		open:true,
		proxies:[
			{source:"/api/getData",target:"http://localhost:3000/api/getData"},
			{source:"/api/find",target:"http://localhost:3000/api/find"}
		]
	}))
})