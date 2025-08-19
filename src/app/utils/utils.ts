export class Utils {
  static downloadPdf(data: Blob, fileName: string): void {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank'; // Força a abertura em uma nova aba
    // a.download = `${fileName}.pdf`; // Opcional, pode ser removido se não quiser baixar em alguns navegadores

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 1000);
  }
}