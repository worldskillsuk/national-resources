//YOUR CODE HERE
/* global JSZip */
document.getElementById('compressBtn').addEventListener('click', function () {
  const folderInput = document.getElementById('folderInput').files;

  if (folderInput.length === 0) {
    alert('Please select a folder.');
    return;
  }

  const folder = {};
  for (let i = 0; i < folderInput.length; i++) {
    const file = folderInput[i];
    const path = file.webkitRelativePath;

    if (file.size > 0) {
      // Exclude empty files
      folder[path] = file;
    }
  }

  if (Object.keys(folder).length === 0) {
    alert('The folder contains only empty files or folders!');
    return;
  }

  compressFolder(folder);
});

function compressFolder(folder) {
  const zip = new JSZip();
  const folderName = Object.keys(folder)[0].split('/')[0];

  for (let path in folder) {
    const file = folder[path];
    const relativePath = path.replace(folderName + '/', '');
    zip.file(relativePath, file);
  }

  zip.generateAsync({ type: 'blob' }).then(function (content) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(content);
    a.download = folderName + '.zip';
    document.getElementById('status').innerText =
      'Folder compressed successfully!';
    a.click();
  });
}
