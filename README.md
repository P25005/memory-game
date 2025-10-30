# 🃏 Juego de Memoria con Angular

[![Deploy with Vercel](https://vercel.com/button)](https://memory-game-mauve-two.vercel.app/)

¡Bienvenido a mi proyecto de Juego de Memoria! Este no es solo un simple juego, sino una demostración completa de mis habilidades como desarrollador Frontend con un enfoque en el ecosistema de Angular y las prácticas modernas de DevOps (CI/CD).

## 🚀 Demo en Vivo

**Puedes jugar la versión en vivo aquí:**
https://memory-game-mauve-two.vercel.app


---

## 🎯 Sobre el Proyecto

Este proyecto fue desarrollado como parte de mi portfolio para demostrar mis competencias técnicas en **Angular** y mi comprensión del **ciclo de vida de despliegue de software**. El objetivo era construir una aplicación de página única (SPA) funcional, limpia y desplegarla siguiendo las mejores prácticas de la industria.

### ✨ Características Principales

* Tablero de juego dinámico.
* Lógica de "volteo" de cartas con animaciones CSS.
* Sistema de emparejamiento y puntuación.
* Botón para reiniciar la partida.

---

## 🛠️ Stack Tecnológico y Herramientas

Este proyecto combina un stack de frontend moderno con un flujo de trabajo de DevOps profesional.

* **Frontend:**
    * **Angular 20+:** Utilizado para construir una SPA robusta y modular.
    * **TypeScript:** Para un código fuertemente tipado y mantenible.
    * **SCSS:** Para una arquitectura de estilos CSS más limpia y escalable.
* **DevOps (CI/CD):**
    * **Vercel:** Plataforma de despliegue seleccionada por su integración nativa con SPAs de Angular y su CI/CD automático.
    * **Git y GitHub:** Para el control de versiones y como disparador (trigger) del despliegue.

---

## ☁️ El Flujo de Despliegue (CI/CD)

Como desarrollador con mentalidad DevOps, mi objetivo no era solo "subir archivos a un servidor". He implementado un flujo de trabajo de **Integración Continua y Despliegue Continuo (CI/CD)**.

1.  **Desarrollo:** Realizo cambios en el código localmente.
2.  **Push a GitHub:** Envío mis cambios (`git push`) a la rama `main` del repositorio.
3.  **Trigger de Vercel:** GitHub notifica a Vercel que hay un nuevo *push*.
4.  **Build:** Vercel clona el repositorio, instala las dependencias (`npm install`) y ejecuta el *build* de producción (`ng build`).
5.  **Despliegue:** Vercel toma la carpeta de salida (`dist/memory-game/browser`) y la despliega en su CDN global, invalidando la caché anterior.
6.  **¡En Vivo!:** La nueva versión está disponible para los usuarios en segundos.

Este enfoque automatizado garantiza que la demo en vivo esté siempre sincronizada con la última versión estable del código, sin intervención manual y eliminando el riesgo de error humano.

---

## 📦 Instalación y Uso Local

Si deseas ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/](https://github.com/)[TU_USUARIO_GITHUB]/[TU_REPO].git
    ```

2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd [NOMBRE_DE_TU_REPO]
    ```

3.  **Instala las dependencias:**
    ```bash
    npm install
    ```

4.  **Ejecuta el servidor de desarrollo:**
    ```bash
    ng serve -o
    ```
    La aplicación se abrirá automáticamente en `http://localhost:4200/`.

---
