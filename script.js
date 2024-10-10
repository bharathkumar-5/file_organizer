const files = [
    { id: 1 ,name: 'document1.txt',type: 'txt'},
    { id: 2 ,name: 'presentation1.pdf',type: 'pdf'},
    { id: 3 ,name: 'song1.mp3',type: 'mp3'},
    { id: 4 ,name: 'installer1.exe',type: 'exe'},
    { id: 5 ,name: 'archive1.rar',type: 'rar'},
    { id: 6 ,name: 'report1.docx',type: 'docx'},
    { id: 7 ,name: 'image1.jpg',type: 'jpg'},
    { id: 8 ,name: 'graphic1.png',type: 'png'},
    { id: 9 ,name: 'animation1.gif',type: 'gif'},
    { id: 10 ,name: 'compressed1.zip',type: 'zip'},

    { id: 11 ,name: 'document2.txt',type: 'txt'},
    { id: 12 ,name: 'presentation2.pdf',type: 'pdf'},
    { id: 13 ,name: 'song2.mp3',type: 'mp3'},
    { id: 14 ,name: 'installer2.exe',type: 'exe'},
    { id: 15 ,name: 'archive2.rar',type: 'rar'},
    { id: 16 ,name: 'report2.docx',type: 'docx'},
    { id: 17 ,name: 'image2.jpg',type: 'jpg'},
    { id: 18 ,name: 'graphic2.png',type: 'png'},
    { id: 19 ,name: 'animation2.gif',type: 'gif'},
    { id: 20 ,name: 'compressed2.zip',type: 'zip'},

    { id: 21 ,name: 'document3.txt',type: 'txt'},
    { id: 22 ,name: 'presentation3.pdf',type: 'pdf'},
    { id: 23 ,name: 'song3.mp3',type: 'mp3'},
    { id: 24 ,name: 'installer3.exe',type: 'exe'},
    { id: 25 ,name: 'archive3.rar',type: 'rar'},
    { id: 26 ,name: 'report3.docx',type: 'docx'},
    { id: 27 ,name: 'image3.jpg',type: 'jpg'},
    { id: 28 ,name: 'graphic3.png',type: 'png'},
    { id: 29 ,name: 'animation3.gif',type: 'gif'},
    { id: 30 ,name: 'compressed3.zip',type: 'zip'},

    { id: 31 ,name: 'document4.txt',type: 'txt'},
    { id: 32 ,name: 'presentation4.pdf',type: 'pdf'},
    { id: 33 ,name: 'song4.mp3',type: 'mp3'},
    { id: 34 ,name: 'installer4.exe',type: 'exe'},
    { id: 35 ,name: 'archive4.rar',type: 'rar'},
    { id: 36 ,name: 'report4.docx',type: 'docx'},
    { id: 37 ,name: 'image4.jpg',type: 'jpg'},
    { id: 38 ,name: 'graphic4.png',type: 'png'},
    { id: 39 ,name: 'animation4.gif',type: 'gif'},
    { id: 40 ,name: 'compressed4.zip',type: 'zip'},

    { id: 41 ,name: 'document5.txt',type: 'txt'},
    { id: 42 ,name: 'presentation5.pdf',type: 'pdf'},
    { id: 43 ,name: 'song5.mp3',type: 'mp3'},
    { id: 44 ,name: 'installer5.exe',type: 'exe'},
    { id: 45 ,name: 'archive5.rar',type: 'rar'},
    { id: 46 ,name: 'report5.docx',type: 'docx'},
    { id: 47 ,name: 'image5.jpg',type: 'jpg'},
    { id: 48 ,name: 'graphic5.png',type: 'png'},
    { id: 49 ,name: 'animation5.gif',type: 'gif'},
    { id: 50 ,name: 'compressed5.zip',type: 'zip'},
    
    { id: 51 ,name: 'document6.txt',type: 'txt'},
    { id: 52 ,name: 'presentation6.pdf',type: 'pdf'},
    { id: 53 ,name: 'song6.mp3',type: 'mp3'},
    { id: 54 ,name: 'installer6.exe',type: 'exe'},
    { id: 55 ,name: 'archive6.rar',type: 'rar'},
    { id: 56 ,name: 'report6.docx',type: 'docx'},
    { id: 57 ,name: 'image6.jpg',type: 'jpg'},
    { id: 58 ,name: 'graphic6.png',type: 'png'},
    { id: 59 ,name: 'animation6.gif',type: 'gif'},
    { id: 60 ,name: 'compressed6.zip',type: 'zip'},

    { id: 61 ,name: 'document7.txt',type: 'txt'},
    { id: 62 ,name: 'presentation7.pdf',type: 'pdf'},
    { id: 63 ,name: 'song7.mp3',type: 'mp3'},
    { id: 64 ,name: 'installer7.exe',type: 'exe'},
    { id: 65 ,name: 'archive7.rar',type: 'rar'},
    { id: 66 ,name: 'report7.docx',type: 'docx'},
    { id: 67 ,name: 'image7.jpg',type: 'jpg'},
    { id: 68 ,name: 'graphic7.png',type: 'png'},
    { id: 69 ,name: 'animation7.gif',type: 'gif'},
    { id: 70 ,name: 'compressed7.zip',type: 'zip'},

    { id: 71 ,name: 'document8.txt',type: 'txt'},
    { id: 72 ,name: 'presentation8.pdf',type: 'pdf'},
    { id: 73 ,name: 'song8.mp3',type: 'mp3'},
    { id: 74 ,name: 'installer8.exe',type: 'exe'},
    { id: 75 ,name: 'archive8.rar',type: 'rar'},
    { id: 76 ,name: 'report8.docx',type: 'docx'},
    { id: 77 ,name: 'image8.jpg',type: 'jpg'},
    { id: 78 ,name: 'graphic8.png',type: 'png'},
    { id: 79 ,name: 'animation8.gif',type: 'gif'},
    { id: 80 ,name: 'compressed8.zip',type: 'zip'},
    
    { id: 81 ,name: 'document9.txt',type: 'txt'},
    { id: 82 ,name: 'presentation9.pdf',type: 'pdf'},
    { id: 83 ,name: 'song9.mp3',type: 'mp3'},
    { id: 84 ,name: 'installer9.exe',type: 'exe'},
    { id: 85 ,name: 'archive9.rar',type: 'rar'},
    { id: 86 ,name: 'report9.docx',type: 'docx'},
    { id: 87 ,name: 'image9.jpg',type: 'jpg'},
    { id: 88 ,name: 'graphic9.png',type: 'png'},
    { id: 89 ,name: 'animation9.gif',type: 'gif'},
    { id: 90 ,name: 'compressed9.zip',type: 'zip'},

    { id: 91 ,name: 'document10.txt',type: 'txt'},
    { id: 92 ,name: 'presentation10.pdf',type: 'pdf'},
    { id: 93 ,name: 'song10.mp3',type: 'mp3'},
    { id: 94 ,name: 'installer10.exe',type: 'exe'},
    { id: 95 ,name: 'archive10.rar',type: 'rar'},
    { id: 96 ,name: 'report10.docx',type: 'docx'},
    { id: 97 ,name: 'image10.jpg',type: 'jpg'},
    { id: 98 ,name: 'graphic10.png',type: 'png'},
    { id: 99 ,name: 'animation10.gif',type: 'gif'},
    { id: 90 ,name: 'compressed10.zip',type: 'zip'}
];
const folders = [...new Set(files.map(file => file.type))]
const folderContainer = document.getElementById('folder-container')
const fileListContainer = document.getElementById('file-list')
const searchInput = document.getElementById('search-input')
const sortButton = document.getElementById('sort-toggle')

let currentFiles = []
let sortAsc = true;

function displayFolders(){
    folderContainer.innerHTML = '';
    folders.forEach(folder => {
        const div = document.createElement('div');
        div.className = 'folder';
        div.textContent = `${folder}`;
        div.onclick = () => displayFiles(folder);
        folderContainer.appendChild(div);
    });
}

function displayFiles(type){
    currentFiles = files.filter(file => file.type === type);
    updateFileList();
}
function updateFileList() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredFiles = currentFiles.filter(file => 
        file.name.toLowerCase().includes(searchTerm)
    )
    if (!sortAsc){
        filteredFiles.reverse();
    }
    fileListContainer.innerHTML = '';
    filteredFiles.forEach(file => {
        const li = document.createElement('li');
        li.textContent = `${file.name} `;
        fileListContainer.appendChild(li);
    })
}

searchInput.addEventListener('input',updateFileList);

sortButton.addEventListener('click',() => {
    sortAsc = !sortAsc;
    sortButton.textContent = sortAsc ? 'sort Ascending' : 'sort Descending';
    updateFileList();
})
displayFolders();