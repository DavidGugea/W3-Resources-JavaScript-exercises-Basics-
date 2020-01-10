/*
2. Write a JavaScript program to print the contents of the current window.  Go to the editor
Click me to see the solution
*/
function print_current_page()
{
    window.print();
}

document.addEventListener("DOMContentLoaded", print_current_page);