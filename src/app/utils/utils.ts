
export class Utils {
  static downloadPdf(data: Blob, fileName: string): void {
    const novaAba = window.open('', '_blank');

    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    novaAba!.location.href = url;

    window.open(url);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 1000);
  }
}