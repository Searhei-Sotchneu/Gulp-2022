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

//наблюдатель за изменениями в файлах
function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html);

//построение сценария выполнения задач
const dev = gulp.series(reset, mainTasks, watcher);

//выполнение сценария по умолчанию
gulp.task('default', dev);