# Draw engine Research

## Testing
https://slides-three-pi.vercel.app/sketch
https://slides-three-pi.vercel.app/excalidraw

## P5 Research

I chose p5.js because it is a very popular library with a strong community. Despite this, it would be worth looking into other libraries as well.

### Overview

It seems to work well with React, but at times it can be a bit frustrating since the documentation is not entirely clear.
Care must be taken as almost everything is handled within the setup and draw methods. To change things dynamically, we'll need to use refs to "escape" from React and manipulate the canvas correctly. (Further investigation required).

### Note

Notice that p5.js cannot be server-side rendered (SSR). If edclub requires SSR, we will have to consider using some form of lazy loading. In the case of Next.js, I used dynamic imports.

### Useful Resources

The official p5.js website has everything, but personally, I find the structure a bit confusing, and some things seem outdated.
https://p5js.org/

Here's some useful information to understand p5.js in general and how to use p5.js in instance mode, which is what I'm using to integrate it with React.
https://github.com/processing/p5.js/wiki/p5.js-overview

It has a nice discord server, where some common topics and issues are discussed.
https://discord.gg/SHQ8dH25r9

## Still considering Excalidraw (?)

To see the demo, go to /excalidraw

Upon reviewing the project, it seems that it is a canvas, and their "native" eraser, which erases the entire stroke is a feature. We can use the white pencil as an eraser as well.

We can also investigate if their API https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api allows customization of components to suit our needs (it seems it does). If not, we can explore the codebase and see if it's worth forking the project and tweaking the code.

I believe Excalidraw could be a great integration since it has impressive features and we can take advantage of the active contributions from excellent developers.

### Useful Resources

Excalidraw Documentation:
https://docs.excalidraw.com/docs/

Excalidraw Blog:
https://blog.excalidraw.com/

Public Libraries for Excalidraw:
https://libraries.excalidraw.com/?theme=light&sort=default

---

I hope this helps!

BTW, Sorry if I didn't manage to have nice documentation on these, I ran out of time because of p5 bugs 😅
