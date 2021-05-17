declare module '*.scss';

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
