
function AnnouncementsShowAndHide() {

    var elem = document.getElementById('AButton');
    var x = document.getElementById('Announcements');
    if (x.style.display == 'none') {
        x.style.display = 'block';
        elem.innerHTML = "Hide Announcements";
    } else {
        x.style.display = 'none';
        elem.innerHTML = "Show Announcements";
    }
    
}
