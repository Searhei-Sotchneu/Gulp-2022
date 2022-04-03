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

//выполнение сценария по умолчанию
gulp.task('default', copy);