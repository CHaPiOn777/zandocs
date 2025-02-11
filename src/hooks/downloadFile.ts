export async function downloadFileFromResponse(
  response: Response,
  fileName: string
): Promise<void> {
  // Получаем Blob из ответа
  const blob: Blob = await response.blob();
  // Создаем объект URL для Blob
  const url: string = window.URL.createObjectURL(blob);
  // Создаем временный элемент <a>
  const link: HTMLAnchorElement = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  // Инициируем скачивание
  link.click();
  // Удаляем элемент <a> после клика
  link.remove();
  // Опционально: освобождаем выделенные ресурсы
  window.URL.revokeObjectURL(url);
}
