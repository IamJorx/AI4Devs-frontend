# Prompts

| Author | Jorge Luis Sánchez Ocampo |
| --- | --- |
| Ui Generator | v0.dev |
| AI Assistant | GitHub Copilot |
| LLM | Claude 3.5 sonnet (preview) |
1. Chat Gpt - Mejora de prompt inicial

```markdown
Mejora el siguiente prompt que voy a utilizar para generar un componente ui, con la herramienta v0.dev de vercel, para que genere un mejor resultado: Como usuario de RRHH del ATS quiero visualizar una posición de trabajo estilo kanban, donde se muestren los pasos de la entrevista de esa posición como columnas, y cada candidato posicionado en el step correspondiente, para poder actualizar el step de cada candidato arrastrando el card hacia el step designado.

Crea una dashboard estilo kanban, para una vista de position, de un AST, ten en cuenta los siguientes puntos: 

1. cada posición tiene un flujo en cual hay una serie de steps, que corresponden a etapas de la entrevista que se realiza a los candidatos. 
2. Cada step se debe representar como una columna en el dashboard estilo kanban. 
3. Luego tenemos otra estructura que trae los candidatos de una posición, en esta se indica el currentStep de cada candidato, estos se deben representar como cards en el step adecuado.
4. El componente kanban debe ser reusable, y adaptarse a la estructura de position y de candidates

Especificaciones técnicas: 

1. framework: React + typescript
2. Librerías: tailwind

Criterios de estilo:

1. Usa diseño web moderno
2. Responsive design
3. Minimalism
4. ux/ui best practices
5. neumorphism 
6. glass effects
7. Animations

Estructura de datos: 

1. Position: 

```markdown
GET /positions/:id/interviewFlow

{
      "positionName": "Senior backend engineer",
      "interviewFlow": {
              
              "id": 1,
              "description": "Standard development interview process",
              "interviewSteps": [
                  {
                      "id": 1,
                      "interviewFlowId": 1,
                      "interviewTypeId": 1,
                      "name": "Initial Screening",
                      "orderIndex": 1
                  },
                  {
                      "id": 2,
                      "interviewFlowId": 1,
                      "interviewTypeId": 2,
                      "name": "Technical Interview",
                      "orderIndex": 2
                  },
                  {
                      "id": 3,
                      "interviewFlowId": 1,
                      "interviewTypeId": 3,
                      "name": "Manager Interview",
                      "orderIndex": 2
                  }
              ]
          }
  }
```

1. candidates: 

```markdown
GET /positions/:id/candidates

[
      {
           "fullName": "Jane Smith",
           "currentInterviewStep": "Technical Interview",
           "averageScore": 4
       },
       {
           "fullName": "Carlos García",
           "currentInterviewStep": "Initial Screening",
           "averageScore": 0            
       },        
       {
           "fullName": "John Doe",
           "currentInterviewStep": "Manager Interview",
           "averageScore": 5            
      }    
 ]
```

```

```markdown
genera el resultado en texto plano, asegúrate de que los estilos del prompt no sean interpretados por el chat, a veces pasa que se rompe cuando hay cuadros de código
```

1. [v0.dev](http://v0.dev) - Generación de ui con v0

```markdown
Crea un componente interactivo estilo dashboard kanban que visualice y administre el flujo de entrevistas de una posición en un ATS (Applicant Tracking System). Este componente debe permitir a los usuarios de RRHH realizar las siguientes acciones de forma eficiente y visualmente atractiva:

Requerimientos Funcionales:

1. Representación del Flujo de Entrevistas:
   - Cada etapa del proceso de entrevista (steps) debe ser una columna en el tablero kanban.
   - El flujo de entrevistas está definido en la estructura de datos Position.interviewFlow.

2. Representación de los Candidatos:
   - Cada candidato debe ser representado como una tarjeta (card) colocada en la columna correspondiente al currentInterviewStep.
   - Las tarjetas deben mostrar información clave del candidato como:
     - Nombre completo (fullName)
     - Paso actual (currentInterviewStep)
     - Promedio de puntuación (averageScore)

3. Interacción:
   - Permitir arrastrar y soltar (drag-and-drop) las tarjetas de los candidatos para moverlos entre etapas del flujo de entrevistas.
   - Actualizar dinámicamente el currentInterviewStep del candidato al soltarlo en una nueva columna.

4. Reusabilidad:
   - El componente debe ser genérico y adaptable a cualquier flujo de entrevistas (Position.interviewFlow) y lista de candidatos (Candidates).

Especificaciones Técnicas:

1. Framework y Lenguaje:
   - React + TypeScript

2. Librerías y Herramientas:
   - Estilos: TailwindCSS
   - Drag-and-drop: React DnD (o una alternativa compatible con React + TypeScript)
   - Animaciones: Framer Motion (o equivalente compatible)
   - Consumo de Datos:
     - API para obtener flujo de entrevistas: GET /positions/:id/interviewFlow
     - API para obtener candidatos: GET /positions/:id/candidates
     - Actualización del paso del candidato: Integrar con la API adecuada si se especifica.

Criterios de Estilo y Diseño:

1. Diseño Moderno:
   - Uso de minimalismo, glassmorphism y efectos de neomorfismo para lograr una estética limpia y atractiva.

2. Responsive Design:
   - Optimizado para pantallas de diferentes tamaños, desde escritorio hasta dispositivos móviles.

3. Mejores Prácticas de UX/UI:
   - Foco en la claridad, facilidad de uso y animaciones suaves para transiciones (e.g., al arrastrar y soltar).

4. Accesibilidad:
   - Asegúrate de que el componente sea accesible (e.g., soporte para teclado, etiquetas ARIA).

Estructura de Datos:

1. Position (Flujo de entrevistas):
   - positionName: string
   - interviewFlow: {
       id: number,
       description: string,
       interviewSteps: [
         {
           id: number,
           interviewFlowId: number,
           interviewTypeId: number,
           name: string,
           orderIndex: number
         }
       ]
     }

2. Candidates:
   - fullName: string
   - currentInterviewStep: string
   - averageScore: number

Detalles Adicionales:

- Columnas del Kanban:
  - Ordenadas por orderIndex en el flujo de entrevistas.
  - Deberían tener un diseño visual que destaque el nombre de la etapa (e.g., encabezado flotante con efecto glassmorphism).

- Tarjetas de los Candidatos:
  - Diseño de tarjeta con información clave resaltada.
  - Usa efectos sutiles al arrastrar (hover, sombras dinámicas).
  - Colores o insignias que indiquen el averageScore (e.g., rojo para puntajes bajos, verde para altos).

- Indicadores Visuales:
  - Resaltar la columna destino al arrastrar una tarjeta.
  - Mostrar un mensaje o animación cuando se suelte una tarjeta con éxito.

- Ejemplo de Implementación:
  - Usa React DnD para la lógica de drag-and-drop.
  - Combina Framer Motion con TailwindCSS para animaciones fluidas.
  - Adapta los estilos de columnas y tarjetas al diseño solicitado.
```

```markdown
usa los siguientes mocks de los servicios de la api, para position y canditates:

1. position:
{
      "positionName": "Senior backend engineer",
      "interviewFlow": {
              
              "id": 1,
              "description": "Standard development interview process",
              "interviewSteps": [
                  {
                      "id": 1,
                      "interviewFlowId": 1,
                      "interviewTypeId": 1,
                      "name": "Initial Screening",
                      "orderIndex": 1
                  },
                  {
                      "id": 2,
                      "interviewFlowId": 1,
                      "interviewTypeId": 2,
                      "name": "Technical Interview",
                      "orderIndex": 2
                  },
                  {
                      "id": 3,
                      "interviewFlowId": 1,
                      "interviewTypeId": 3,
                      "name": "Manager Interview",
                      "orderIndex": 2
                  }
              ]
          }
  }


2. candidates: 
[
      {
           "fullName": "Jane Smith",
           "currentInterviewStep": "Technical Interview",
           "averageScore": 4
       },
       {
           "fullName": "Carlos García",
           "currentInterviewStep": "Initial Screening",
           "averageScore": 0            
       },        
       {
           "fullName": "John Doe",
           "currentInterviewStep": "Manager Interview",
           "averageScore": 5            
      }    
 ]
```
```

```markdown
Ahora aplica los estilos de la siguiente imagen y has que soporte modo oscuro y claro
```

```markdown
Ahora has los siguientes ajustes:

1. Cuando cambio un candidato de step se actualizan algunos valores de los candidatos
2. Elimina datos de la card de candidatos que no se pidieron como document y comentarios. Solo muestra el nombre del candidato y el puntaje
3. La animación de la card de candidato cuando se cambia de step falla cuando hay varias cards ya en el step, se aplica la animación a la primera card y no a la que se acaba de añadir al step
4. Añade un padding a cada columna, ya que cuando se hace hover sobre una card y se activa la animación de scale up, se corta la imagen con los bordes de la columna
5. El botón para cambiar el tema oscuro/claro no funciona
```

```markdown
Ahora ajusta que el título de cada columna tome el color oscuro cuando se activa el tema claro
```

```markdown
has que cada columna tenga un color con transparencia y con un borde del mismo color menos transparente. quita el badge que tiene cada columna. y has que la funcionalidad de drag and drop funcione en modo responsive
```

```markdown
prefecto. Ahora ajusta que la card se vea que estoy arrastrandola hacia la siguiente columna
```

```markdown
Ajusta lo siguiente: 
1. Quita el border que se ve en la columna cuando hago hover sobre una columna mientra arrastro una card
2. Has que la card se arrastre tomando la posición el mouse mientras la mantengo seleccionada, hasta que la suelte sobre una columna
```

```markdown
Perfecto, ahora añade un botón a la izquierda del título principal, el cual permita hacer back hacia la ruta de navegación anterior. Mantén lo demás intacto
```

- Se exportan los componentes a nuestro proyecto frontend
- Se instalan algunas dependencias

1. GitHub Copilot

```markdown
#file:App.js añade una nueva ruta a la navegación para /position que reciba un atributo id, correspondiente al id de position
```

```markdown
#file:Positions.tsx  añade el atributo id a los items de la lista mockPositions: 1,2 y 3 respectivamente, y añade un handler al botón "Ver proceso" que reciba en id de position
```

Aquí se comienza a integrar la solución que conseguimos con [v0.dev](http://v0.dev), siguiendo los siguientes pasos:

1. Instalación de tailwind
2. Instalación de dependencias necesarias para shadcn

```markdown
#codebase el front no está tomando correctamente la configuración de tailwind, arreglalo
```

Se realizaron algunos ajustes en los imports de types, y definición de tipos dentro de los componentes importados desde v0

También se añadió la solución dentro de feature/position para dar una mejor estructura al proyecto

Empezamos a integrar la solución en la nueva vista “position/:id”

```markdown
importa el componente #file:KanbanBoard.tsx dentro de #file:PositionDetail.tsx
```

Se realiza ajuste manual en la posición del card preview mientras se está arrastrando con el mouse

```markdown
ajusta el color de la card cuando se activa el tema oscuro
```

Creación de servicios para consumir los endpoints

```markdown
Vamos a crear un nuevo servicio que va a ser utilizado por #file:usePositionData.ts, el endpoint es el siguiente: GET /positions/:id/interviewFlow. Básate en #file:candidateService.js 
```

```markdown
Crea un nuevo archivo llamado positionService
```

```markdown
Dame el shell script para crear el archivo base
```

```markdown
ahora implementa el nuevo servicio #sym:getPositionInterviewFlow dentro de #file:usePositionData.ts
```

```markdown
ten en cuenta que el servicio solo devuelve la información de position, la información de candidates la vamos a obtener de otro servicio, mientras tanto sigue devolviendo mockCandidates
```

```markdown
Module not found: Error: Can't resolve 'axios' in '/Users/macbook/Documents/development/ia4devs/sessions/session_10/AI4Devs-frontend/frontend/src/services'
```

```markdown
Crea un nuevo servicio para obtener los candidatos de una position, el endpoint es: GET /positions/:id/candidates
```

```markdown
Implementa #sym:getPositionCandidates en #file:usePositionData.ts para traer la información de candidates.
```

```markdown
Cannot GET /positions/1/candidates. Revisa que el endpoint en #file:positionRoutes.ts esté correcto, sino ha el ajuste sobre #file:positionService.js
```

Se incluye el id del candidato en el servicio del back, que trae los candidatos a una posición

```markdown
Incluye el id del candidate en el servicio #sym:getCandidatesByPositionService
```

```markdown
actualiza el servicio #sym:updateCandidateStage para recibir el candidateId y actualizar el stage de el candidateId
```

```markdown
revisa el error de tipo en "step" en el #sym:updateCandidateStage, toma como base el modelo #file:Application.ts
```

```markdown
Crea el servicio para actualizar el step de un candidato
1. Endpoint: /candidates/:id/stage
2. Method: PUT
3. Body: {
     "applicationId": "1",
     "currentInterviewStep": "3"
 }
4. Result: {    
    "message": "Candidate stage updated successfully",
     "data": {
         "id": 1,
         "positionId": 1,
         "candidateId": 1,
         "applicationDate": "2024-06-04T13:34:58.304Z",
         "currentInterviewStep": 3,
         "notes": null,
         "interviews": []    
     }
 }
```

```markdown
implementa la función #sym:updateCandidateStage en el hook #file:usePositionData.ts y exportala
```

```markdown
implementa optimistic update en #sym:handleCandidateDrop para actualizar el stage de un candidato, usa #sym:updateStage
```

```markdown
importa updateStage desde el hook usePositionData
```

```markdown
#codebase el servicio updateCandidateStage si el endpoint corresponde con el que está definido en el back
```