const path = document.querySelector('.underlinePath');
const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;
