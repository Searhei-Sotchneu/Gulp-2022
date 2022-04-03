//основной модуль
import gulp from "gulp";
//импорт путей
import { path } from "./gulp/config/path.js";

//передаем общие значения в глобальную переменную
global.app = {
	path: path,
	gulp: gulp
}


//импорт задач
import { copy } from "./gulp/tascs/copy.js";
import { reset } from "./gulp/tascs/reset.js";

//наблюдатель за изменениями в файлах
function watcher() {
	gulp.watch(path.watch.files, copy)
}

//построение сценария выполнения задач
const dev = gulp.series(reset, copy, watcher);

//выполнение сценария по умолчанию
gulp.task('default', dev);