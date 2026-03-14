# YoCanChef

Una aplicación web minimalista diseñada para nómadas digitales que quieren saber si pueden cocinar sus recetas favoritas en cualquier ciudad del mundo.

## Características

- Analiza listas de ingredientes con IA (Google Gemini)
- Evalúa la disponibilidad local de ingredientes
- Interfaz limpia y mobile-first
- Indicadores visuales de disponibilidad (fácil, difícil, casi imposible)

## Configuración

### 1. Obtén tu API Key de Google Gemini

1. Visita [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Crea una cuenta o inicia sesión
3. Genera una nueva API Key

### 2. Configura la API Key

Tienes dos opciones:

**Opción A: Usando el archivo .env (recomendado para desarrollo)**

1. Edita el archivo `.env` en la raíz del proyecto
2. Reemplaza `your_gemini_api_key_here` con tu API Key real:
   ```
   VITE_GEMINI_API_KEY=tu_api_key_aqui
   ```

**Opción B: Usando el panel de configuración en la app**

1. Inicia la aplicación
2. Haz clic en el icono de configuración (⚙️) en la esquina superior derecha
3. Pega tu API Key
4. Haz clic en "Guardar"

## Uso

1. Pega la lista de ingredientes de tu receta en el área de texto
2. Escribe tu ubicación actual (ciudad y país)
3. Haz clic en "¿Puedo cocinar esto aquí?"
4. Revisa la tabla de resultados para ver la disponibilidad de cada ingrediente

## Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## Tecnologías

- React + TypeScript
- Vite
- Tailwind CSS
- Google Generative AI (Gemini 1.5 Flash)
- Lucide React (iconos)

## Paleta de Colores

- Verde oliva (#575f40) - Color principal
- Naranja tierra (#dc7744) - Acentos
- Crema (#fdfcfa) - Fondos
