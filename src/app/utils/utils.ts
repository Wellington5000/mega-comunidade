
export class Utils {
  static openPdf(data: Blob): void {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const pdfWindow = window.open();
    if (pdfWindow) {
      pdfWindow.location.href = url;
    }

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 5000);
  }
}