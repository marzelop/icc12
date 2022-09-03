function share(anchorID) {
    let link = document.querySelector(`#${anchorID}`).href;
    navigator.clipboard.writeText(link);
    alert('O link do post foi copiado para a área de transferência.');
}