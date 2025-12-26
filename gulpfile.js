var gulp = require('gulp');
var inlineFonts = require('gulp-inline-fonts');
var imageDataURI = require('gulp-image-data-uri');
var concat = require('gulp-concat');

function generateInlineFont(family, style) {
    return gulp.src([`theme/fonts/${family}/${family}-${style}*`])
        .pipe(inlineFonts({ name: `${family}-${style}` }))
        .pipe(gulp.dest(`theme/css/fonts/${family}`));
}
gulp.task('poppins', function() {
    return generateInlineFont("poppins", "semibold");
});

gulp.task('inline-img', function() {
    gulp.src('./theme/images/*')
        .pipe(imageDataURI({
            template: {
                file: './theme/scss/config.scss.tpl'
            }
        }))
        .pipe(concat('config.scss'))
        .pipe(gulp.dest('./theme/scss'));
});
