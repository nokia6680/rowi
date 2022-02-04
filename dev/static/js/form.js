const fileUploader = document.getElementById('file-input');

fileUploader.addEventListener('change', (event) => {
    const files = event.target.files;
    console.log('files', files);

    const filewrap = document.querySelector('.form__upload');
    const filename = document.getElementById('filename');
    const removeBtn = document.querySelector('.form__upload-delete');
    const msg = `${files[0].name}`;

    filewrap.classList.add('active');
    filename.innerHTML = msg;

    removeBtn.addEventListener('click', function () {
        filewrap.classList.remove('active');
        filename.innerHTML = '';
    });
});
