document.addEventListener('mousemove', function(e) {
    document.getElementById('light').style.left = e.pageX + 'px';
    document.getElementById('light').style.top = e.pageY + 'px';
});