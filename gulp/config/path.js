//получаем имя из папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFoler = `./src`;

export const path = {
	build: {
		html: `${buildFolder}/`,
		files: `${buildFolder}/files/`
	},
	src: {
		html: `${srcFoler}/*.html`,
		files: `${srcFoler}/files/**/*.*`,
	},
	watch: {
		html: `${srcFoler}/**/*.html`,
		files: `${srcFoler}/files/**/*.*`
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	rootFolder: rootFolder,
	ftp: ``
}