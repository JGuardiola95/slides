p5 es una libreria muy popular y tiene una comunidad bastante buena.
Parece que se comporta bien con react, pero puede ser algo frustrante aveces, ya que parece que
la documentacion no esta del todo bien.

Hay que ser cuidadoso, pues parece que casi todo se manejara dentro de los metodos de setup y draw, para cambiar dinamicamente las cosas se tendran que utilizar refs para "escapar" de react y poder manipular correctamente el canvas.
(Investigar mas sobre esto)

Recordar que p5 no se puede procesar con "SSR". Si es el caso del proyecto, utilizar algun tipo de lazy loading. En el caso de next utilize dynamic imports pages/sketch.

Recursos utiles:
Aqui se encuentra todo, pero personalmente no me gusta como esta estructurada y parece que algunas cosas estan outdated.
https://p5js.org/

Aqui viene buena informacion para enter p5 generalmente y saber como utilizar p5 en modo de instancia. El modo instancia es el que estoy utilizando para utilizarlo con react.
https://github.com/processing/p5.js/wiki/p5.js-overview

Otro shot a excalidraw?

Creo que podriamos hacer un fork de excalidraw y "tweakear" el codigo a nuestras necesidades. Parece que si es un canvas y el borrador que tienen es un feature para borrar el trazo completo.

Revisar si funciona correctamente.

Recursos utiles:
https://docs.excalidraw.com/docs/

Ir a /excalidraw
