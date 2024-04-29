export function stringToHTML(inputString: string): HTMLElement {
  const template = document.createElement('template');
  template.innerHTML = inputString.trim();
  return template.content.firstChild as HTMLElement;
}
