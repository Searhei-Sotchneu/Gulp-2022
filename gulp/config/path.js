//получаем имя из папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFoler = `./src`;

export const path = {
	build: {
		files: `${buildFolder}/files/`
	},
	src: {
		files: `${srcFoler}/files/**/*.*`,
	},
	watch: {
		files: `${srcFoler}/files/**/*.*`
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	rootFolder: rootFolder,
	ftp: ``
}