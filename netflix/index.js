
const users = ['Raza', 'Ali', 'Jutt', 'Haider',];
const memberDiv = document.querySelector('.memberDiv');
const icon = document.querySelector('.icon');
const userIcon = () => {
    users.reverse();
    users.map((curElem) => {
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"><span>${curElem}</span></button>`);
    });
};
icon.addEventListener('click', () => {
    let userName = prompt('Please enter your name?')
    if (userName != null && !users.includes(userName)) {
        users.push(userName);
        // console.log(users);
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"><span>${userName}</span></button>`);
    }
    else {
        alert('Username already exits!');
    }
});

userIcon();
