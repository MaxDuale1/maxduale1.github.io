document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('introForm').addEventListener('submit', handleSubmit);
    document.getElementById('introForm').addEventListener('reset', resetForm);
});

function addCourse() {
    const container = document.getElementById('coursesContainer');

    const div = document.createElement('div');
    div.className = 'course-entry';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Course name and ID';

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = 'Delete';
    removeBtn.onclick = () => div.remove();

    div.appendChild(input);
    div.appendChild(removeBtn);
    container.appendChild(div);
}

function resetForm() {
    document.getElementById('result').innerHTML = '';
}

function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const mascot = document.getElementById('mascot').value.trim();
    const image = document.getElementById('image').files[0];
    const caption = document.getElementById('caption').value.trim();
    const personal = document.getElementById('personal').value.trim();
    const professional = document.getElementById('professional').value.trim();
    const academic = document.getElementById('academic').value.trim();
    const web = document.getElementById('web').value.trim();
    const platform = document.getElementById('platform').value.trim();
    const funny = document.getElementById('funny').value.trim();
    const anythingElse = document.getElementById('else').value.trim();
    const agree = document.getElementById('agree').checked;

    if (!name || !mascot || !image || !caption || !personal || !professional ||
        !academic || !web || !platform || !agree) {
        alert("Please fill out all required fields and check the agreement.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const imageURL = e.target.result;

        const resultHTML = `
            <h2>${name}'s Intro Page</h2>
            <h3>Meet ${mascot}</h3>
            <figure>
                <img src="${imageURL}" alt="${caption}" width="300">
                <figcaption>${caption}</figcaption>
            </figure>
            <ul>
                <li><strong>Personal Background:</strong> ${personal}</li>
                <li><strong>Professional Background:</strong> ${professional}</li>
                <li><strong>Academic Background:</strong> ${academic}</li>
                <li><strong>Background in Web Development:</strong> ${web}</li>
                <li><strong>Primary Computer Platform:</strong> ${platform}</li>
                <li><strong>Courses Currently Taking:</strong>
                    <ul>
                        ${Array.from(document.querySelectorAll('.course-entry input')).map(input =>
                            `<li><strong>${input.value}</strong></li>`).join('')}
                    </ul>
                </li>
                ${funny ? `<li><strong>Funny Thing:</strong> ${funny}</li>` : ''}
                ${anythingElse ? `<li><strong>Anything Else:</strong> ${anythingElse}</li>` : ''}
            </ul>
            <button onclick="location.reload()">Reset and Try Again</button>
        `;
        document.getElementById('introForm').style.display = 'none';
        document.getElementById('result').innerHTML = resultHTML;
    };

    reader.readAsDataURL(image);
}
