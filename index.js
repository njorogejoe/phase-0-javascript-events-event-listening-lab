function addingEventListener() {
    const input = document.getElementById('input');
    const button = document.getElementById('button');
    
    button.addEventListener('click', function() {
        alert(input.value);
    });
}
