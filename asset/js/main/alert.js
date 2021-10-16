function showAlert(){
    Swal.fire({
        title: 'hello',
        text: 'thanks for download my CV',
    }).then(function (result) {
if (true) {
    window.open("https://drive.google.com/file/d/1gCBByAmBj4YEzGhg72P1MAn-rpnp4d1c/view?usp=sharing", '_blank');
}
})

}
