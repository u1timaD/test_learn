const fs = require('fs');
const path = require('path');

const filesFolder = `${__dirname}/files`;
const filesCopyFolder = `${__dirname}/files-copy`;

// Создаем папку files-copy, если она еще не существует
fs.mkdir(filesCopyFolder, (err) => {
  if (err && err.code !== 'EEXIST') {
    console.log(`Failed to create ${filesCopyFolder}: ${err}`);
    return;
  }

  // Копируем все файлы из папки files в папку files-copy
  fs.readdir(filesFolder, (err, files) => {
    if (err) {
      console.log(`Failed to read directory ${filesFolder}: ${err}`);
      return;
    }

    files.forEach((file) => {
      const filesFolderPath = path.join(filesFolder, file);
      const filesCopyFolderPath = path.join(filesCopyFolder, file);

      fs.copyFile(filesFolderPath, filesCopyFolderPath, (err) => {
        if (err) {
          console.log(`Failed to copy ${filesFolderPath} to ${filesCopyFolderPath}: ${err}`);
          return;
        }
        console.log(`Copied ${filesFolderPath} to ${filesCopyFolderPath}`);
      });
    });
  });
});

// Отслеживаем изменения в папке files
fs.watch(filesFolder, { recursive: true }, (eventType, filename) => {
  const filesFolderPath = path.join(filesFolder, filename);
  const filesCopyFolderPath = path.join(filesCopyFolder, filename);

  if (eventType === 'change') {
    // Обновляем файл в папке files-copy при изменении
    fs.copyFile(filesFolderPath, filesCopyFolderPath, (err) => {
      if (err) {
        console.error(`Failed to update ${filesCopyFolderPath}: ${err}`);
        return;
      }
      console.log(`Updated ${filesCopyFolderPath}`);
    });
  } else if (eventType === 'rename') {
    // Если файл был удален, удаляем его из папки files-copy
    fs.access(filesFolderPath, fs.constants.F_OK, (err) => {
      if (err) {
        fs.unlink(filesCopyFolderPath, (err) => {
          if (err) {
            console.error(`Failed to delete ${filesCopyFolderPath}: ${err}`);
            return;
          }
          console.log(`Deleted ${filesCopyFolderPath}`);
        });
      } else {
        // Если файл был добавлен, копируем его в папку files-copy
        fs.copyFile(filesFolderPath, filesCopyFolderPath, (err) => {
          if (err) {
            console.error(`Failed to add ${filesCopyFolderPath}: ${err}`);
            return;
          }
          console.log(`Added ${filesCopyFolderPath}`);
        });
      }
    });
  }
});

console.log('Watching for changes in the "files" directory...');