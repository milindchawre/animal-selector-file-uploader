document.addEventListener('DOMContentLoaded', () => {
    const animalForm = document.getElementById('animalForm');
    const imageContainer = document.getElementById('imageContainer');

    animalForm.addEventListener('change', async (e) => {
        const formData = new FormData(animalForm);
        const animal = formData.get('animal');

        if (animal) {
            const response = await fetch(`/get_image/${animal}`);
            const imagePath = await response.text();
            imageContainer.innerHTML = `<img src="${imagePath}" alt="${animal}">`;
        }
    });

    const fileForm = document.getElementById('fileForm');
    const fileInfo = document.getElementById('fileInfo');

    fileForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(fileForm);

        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        fileInfo.innerHTML = `
            <p>File Name: ${result.filename}</p>
            <p>File Size: ${result.size} bytes</p>
            <p>File Type: ${result.type}</p>
        `;
    });
});
