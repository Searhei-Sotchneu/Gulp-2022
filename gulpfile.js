//основной модуль
import gulp from "gulp";
//импорт путей
import { path } from "./gulp/config/path.js";

// импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

//передаем общие значения в глобальную переменную
global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins
}


//импорт задач
import { copy } from "./gulp/tascs/copy.js";
import { reset } from "./gulp/tascs/reset.js";
import { html } from "./gulp/tascs/html.js";
import { server } from "./gulp/tascs/server.js";
import { scss } from "./gulp/tascs/scss.js";
import { js } from "./gulp/tascs/js.js";
import { images } from "./gulp/tascs/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tascs/fonts.js";


//наблюдатель за изменениями в файлах
function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
}

// последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// основные задачи:
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

//построение сценария выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

//выполнение сценария по умолчанию
gulp.task('default', dev);