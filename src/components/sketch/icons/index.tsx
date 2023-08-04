import { SVGProps } from 'react';

export function Pencil(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 5.63l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41z"
      ></path>
    </svg>
  );
}

export function Highlighter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M2 24v-4h20v4H2Zm8.6-16l5.4 5.425l-4 4q-.6.6-1.413.6t-1.412-.6L8.5 18h-5l3.15-3.125q-.6-.6-.625-1.438T6.6 12l4-4ZM12 6.575L16 2.6q.6-.6 1.413-.6t1.412.6l2.6 2.575q.6.6.6 1.413T21.425 8l-4 4L12 6.575Z"
      ></path>
    </svg>
  );
}

export function Ereaser(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <path
        fill="currentColor"
        d="m29.438 16.572l-7.985-7.986a2.001 2.001 0 0 0-2.829 0l-5.358 5.358L9 2H7L2 16h2l.999-3h6l.803 2.408l-7.216 7.216a2 2 0 0 0 0 2.829L9.132 30h9.59l10.716-10.717a1.917 1.917 0 0 0 0-2.712ZM5.665 11l2.331-7l2.336 7Zm12.23 17H9.96L6 24.038l6.312-6.311l7.928 7.927Zm3.76-3.76l-7.928-7.927L20.039 10l7.927 7.927Z"
      ></path>
    </svg>
  );
}
