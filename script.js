const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para1 = document.createElement('p');
para1.textContent = "Hey I'm red!";

container.appendChild(para1);
para1.setAttribute('style', 'color: red');

const head = document.createElement('h3');
head.textContent = "I'm a blue h3!";

container.appendChild(head);
head.setAttribute('style', 'color: blue');

const div2 = document.createElement('div');


const head2 = document.createElement('h1');
head2.textContent = "I'm in a div";
div2.appendChild(head2)

const para2 = document.createElement('p');
para2.textContent = "ME TOO!";
div2.appendChild(para2)

container.appendChild(div2);
div2.setAttribute('style', 'background-color: pink; border: 5px solid black;');