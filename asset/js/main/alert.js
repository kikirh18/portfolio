function showAlert(){
    Swal.fire({
        title: 'hello',
        text: 'thanks for download my CV',
    }).then(function (result) {
if (true) {
    window.open("https://drive.google.com/file/d/1uV4PGvyfRs9WYjnNYTxgqQ-1PKIVTewe/view?usp=sharing", '_blank');
}
})

}
