// Enhanced Math Translation System for MathProject5
class MathTranslatorEnhanced {
    constructor() {
        this.currentLanguage = 'en';
        this.isTranslating = false;
        this.translations = {};
        
        this.init();
    }

    init() {
        this.loadTranslations();
        this.setupLanguageSwitcher();
        this.detectLanguage();
    }

    // Load translations for your MathProject5 content
    loadTranslations() {
        this.translations = {
            en: {
                // Page titles and main content
                'page.title': 'Math Learning Platform',
                'page.main.title': 'Math Formula Explanations',
                'page.language.title': 'Language Selection',
                'page.language.current': 'Currently selected language:',
                'page.class.title': 'Class Selection',
                'page.class.select': 'Select Class:',
                'page.class.seven': 'Class 7',
                'page.class.eight': 'Class 8',
                'page.class.nine': 'Class 9',
                'page.class.ten': 'Class 10',
                'page.class.current': 'Currently selected class:',
                'page.formulas.title': 'Math Formula Explanations',
                'page.formulas.intro': 'Select a class above to see math formulas for that grade level.',
                'page.help.title': 'Need Additional Help?',
                'page.help.description': 'If you\'re having trouble understanding the formula or concept, we\'ve prepared some helpful resources for you.',
                'page.help.button': 'Didn\'t understand the formula?',
                'page.help.video.title': 'Video Explanation',
                'page.help.video.description': 'This video might help clarify the concept:',
                'page.help.video.title.content': 'Understanding Mathematical Formulas - Tutorial',
                'page.search.title': 'Search Results',
                'page.search.placeholder': 'Enter a search term above to see results.',
                'page.history.title': 'Search History',
                'page.history.description': 'Previously searched questions and answers',
                'page.history.clear': 'Clear History',
                'page.history.placeholder': 'Your search history will appear here.',
                'page.feedback.title': 'Help Us Improve',
                'page.feedback.description': 'Let us know what you couldn\'t find on our website',
                'page.feedback.placeholder': 'Please tell us what you were looking for but couldn\'t find...',
                'page.feedback.submit': 'Submit Feedback',
                'page.feedback.thankyou': 'Thank you for your feedback!',
                'page.feedback.response': 'We\'ve noted your request and will consider adding this information in future updates:',
                
                // UI Elements
                'ui.language.english': 'English',
                'ui.language.spanish': 'Español',
                'ui.language.french': 'Français',
                'ui.language.german': 'Deutsch',
                'ui.language.italian': 'Italiano',
                'ui.language.japanese': '日本語',
                'ui.language.chinese': '中文',
                'ui.search.placeholder': 'Search...',
                
                // Formula elements
                'formula.title': 'Formula Title',
                'formula.explanation': 'Formula explanation text goes here.',
                'formula.write': 'Write the formula:',
                'formula.input.placeholder': 'Write the formula here...',
                'formula.check': 'Check Answer',
                'formula.correct': 'Correct Formula:',
                
                // Math operations and terms
                'math.add': 'Add',
                'math.subtract': 'Subtract',
                'math.multiply': 'Multiply',
                'math.divide': 'Divide',
                'math.equals': 'Equals',
                'math.calculate': 'Calculate',
                'math.result': 'Result',
                'math.correct': 'Correct!',
                'math.wrong': 'Try Again',
                'math.great': 'Great Job!',
                'math.area': 'Area',
                'math.volume': 'Volume',
                'math.circumference': 'Circumference',
                'math.radius': 'Radius',
                'math.diameter': 'Diameter',
                'math.base': 'Base',
                'math.height': 'Height',
                'math.length': 'Length',
                'math.width': 'Width',
                
                // Encouragement
                'encourage.keep_going': 'Keep Going!',
                'encourage.you_can_do_it': 'You Can Do It!',
                'encourage.well_done': 'Well Done!',
                'encourage.fantastic': 'Fantastic!',
                'encourage.excellent': 'Excellent!',
                'encourage.perfect': 'Perfect!',
                
                // Formula translations - Class 7
                'formula.rectangle.area.title': 'Area of Rectangle',
                'formula.rectangle.area.explanation': 'The area of a rectangle is calculated by multiplying its length by its width.',
                'formula.triangle.area.title': 'Area of Triangle',
                'formula.triangle.area.explanation': 'The area of a triangle is calculated by multiplying half of the base length by the height.',
                'formula.circle.circumference.title': 'Circumference of Circle',
                'formula.circle.circumference.explanation': 'The circumference of a circle is calculated by multiplying pi (π) by the diameter, or 2 times pi (π) times the radius.',
                'formula.circle.area.title': 'Area of Circle',
                'formula.circle.area.explanation': 'The area of a circle is calculated by multiplying pi (π) by the square of the radius.',
                'formula.rectangle.perimeter.title': 'Perimeter of Rectangle',
                'formula.rectangle.perimeter.explanation': 'The perimeter of a rectangle is calculated by adding twice the length and twice the width.',
                'formula.square.area.title': 'Area of Square',
                'formula.square.area.explanation': 'The area of a square is calculated by squaring the length of one side.',
                'formula.square.perimeter.title': 'Perimeter of Square',
                'formula.square.perimeter.explanation': 'The perimeter of a square is calculated by multiplying the side length by 4.',
                'formula.parallelogram.area.title': 'Area of Parallelogram',
                'formula.parallelogram.area.explanation': 'The area of a parallelogram is calculated by multiplying the base length by the height.',
                
                // Formula translations - Class 8
                'formula.pythagorean.title': 'Pythagorean Theorem',
                'formula.pythagorean.explanation': 'In a right-angled triangle, the square of the length of the hypotenuse equals the sum of the squares of the lengths of the other two sides.',
                'formula.interest.simple.title': 'Simple Interest',
                'formula.interest.simple.explanation': 'Simple interest is calculated by multiplying the principal amount by the rate of interest and the time period.',
                'formula.cube.volume.title': 'Volume of Cube',
                'formula.cube.volume.explanation': 'The volume of a cube is calculated by cubing the length of one side.',
                'formula.rectangular.prism.volume.title': 'Volume of Rectangular Prism',
                'formula.rectangular.prism.volume.explanation': 'The volume of a rectangular prism is calculated by multiplying its length, width, and height.',
                'formula.cube.surface.title': 'Surface Area of Cube',
                'formula.cube.surface.explanation': 'The surface area of a cube is calculated by multiplying 6 by the square of the side length.',
                'formula.percentage.title': 'Percentage',
                'formula.percentage.explanation': 'To find a percentage of a number, multiply the number by the percentage and divide by 100.',
                'formula.speed.title': 'Speed, Distance, Time',
                'formula.speed.explanation': 'Speed is calculated by dividing distance by time. This formula can be rearranged to find distance or time.',
                'formula.rhombus.area.title': 'Area of Rhombus',
                'formula.rhombus.area.explanation': 'The area of a rhombus is calculated by multiplying the lengths of its two diagonals and dividing by 2.',
                
                // Formula translations - Class 9
                'formula.quadratic.title': 'Quadratic Formula',
                'formula.quadratic.explanation': 'The quadratic formula is used to solve a quadratic equation in the form ax² + bx + c = 0.',
                'formula.slope.title': 'Slope of a Line',
                'formula.slope.explanation': 'The slope of a line measures its steepness and is calculated using the coordinates of any two points on the line.',
                'formula.trapezoid.area.title': 'Area of a Trapezoid',
                'formula.trapezoid.area.explanation': 'The area of a trapezoid is calculated by multiplying the average of the parallel sides by the height.',
                'formula.midpoint.title': 'Midpoint Formula',
                'formula.midpoint.explanation': 'The midpoint formula finds the point exactly halfway between two given points in a coordinate plane.',
                'formula.cylinder.volume.title': 'Volume of Cylinder',
                'formula.cylinder.volume.explanation': 'The volume of a cylinder is calculated by multiplying pi (π) by the square of the radius and the height.',
                'formula.cylinder.surface.title': 'Surface Area of Cylinder',
                'formula.cylinder.surface.explanation': 'The surface area of a cylinder is the sum of the areas of its two circular bases and its curved surface.',
                'formula.linear.equation.title': 'Linear Equation (Slope-Intercept Form)',
                'formula.linear.equation.explanation': 'A linear equation in slope-intercept form shows the relationship between x and y, where m is the slope and b is the y-intercept.',
                
                // Formula translations - Class 10
                'formula.distance.title': 'Distance Formula',
                'formula.distance.explanation': 'The distance formula calculates the distance between two points in a coordinate plane.',
                'formula.interest.compound.title': 'Compound Interest',
                'formula.interest.compound.explanation': 'Compound interest is calculated when interest is added to the principal, so that from that moment on, the interest that has been added also earns interest.',
                'formula.sphere.volume.title': 'Volume of a Sphere',
                'formula.sphere.volume.explanation': 'The volume of a sphere is calculated using its radius.',
                'formula.sphere.surface.title': 'Surface Area of Sphere',
                'formula.sphere.surface.explanation': 'The surface area of a sphere is calculated by multiplying 4 times pi (π) by the square of the radius.',
                'formula.cone.volume.title': 'Volume of Cone',
                'formula.cone.volume.explanation': 'The volume of a cone is calculated by multiplying one-third of pi (π) by the square of the radius and the height.',
                'formula.cone.surface.title': 'Surface Area of Cone',
                'formula.cone.surface.explanation': 'The surface area of a cone includes the base area and the lateral surface area.',
                'formula.logarithm.title': 'Logarithm',
                'formula.logarithm.explanation': 'A logarithm is the exponent to which a base must be raised to produce a given number.',
                'formula.exponential.growth.title': 'Exponential Growth',
                'formula.exponential.growth.explanation': 'Exponential growth describes a quantity that increases at a rate proportional to its current value.'
            },
            
            es: {
                // Page titles and main content
                'page.title': 'Plataforma de Aprendizaje de Matemáticas',
                'page.main.title': 'Explicaciones de Fórmulas Matemáticas',
                'page.language.title': 'Selección de Idioma',
                'page.language.current': 'Idioma seleccionado actualmente:',
                'page.class.title': 'Selección de Clase',
                'page.class.select': 'Seleccionar Clase:',
                'page.class.seven': 'Clase 7',
                'page.class.eight': 'Clase 8',
                'page.class.nine': 'Clase 9',
                'page.class.ten': 'Clase 10',
                'page.class.current': 'Clase seleccionada actualmente:',
                'page.formulas.title': 'Explicaciones de Fórmulas Matemáticas',
                'page.formulas.intro': 'Selecciona una clase arriba para ver las fórmulas matemáticas de ese nivel.',
                'page.help.title': '¿Necesitas Ayuda Adicional?',
                'page.help.description': 'Si tienes problemas para entender la fórmula o concepto, hemos preparado algunos recursos útiles para ti.',
                'page.help.button': '¿No entendiste la fórmula?',
                'page.help.video.title': 'Explicación en Video',
                'page.help.video.description': 'Este video podría ayudar a aclarar el concepto:',
                'page.help.video.title.content': 'Entendiendo Fórmulas Matemáticas - Tutorial',
                'page.search.title': 'Resultados de Búsqueda',
                'page.search.placeholder': 'Ingresa un término de búsqueda arriba para ver resultados.',
                'page.history.title': 'Historial de Búsqueda',
                'page.history.description': 'Preguntas y respuestas buscadas anteriormente',
                'page.history.clear': 'Limpiar Historial',
                'page.history.placeholder': 'Tu historial de búsqueda aparecerá aquí.',
                'page.feedback.title': 'Ayúdanos a Mejorar',
                'page.feedback.description': 'Déjanos saber qué no pudiste encontrar en nuestro sitio web',
                'page.feedback.placeholder': 'Por favor dinos qué estabas buscando pero no pudiste encontrar...',
                'page.feedback.submit': 'Enviar Comentarios',
                'page.feedback.thankyou': '¡Gracias por tus comentarios!',
                'page.feedback.response': 'Hemos tomado nota de tu solicitud y consideraremos agregar esta información en futuras actualizaciones:',
                
                // UI Elements
                'ui.language.english': 'English',
                'ui.language.spanish': 'Español',
                'ui.language.french': 'Français',
                'ui.language.german': 'Deutsch',
                'ui.language.italian': 'Italiano',
                'ui.language.japanese': '日本語',
                'ui.language.chinese': '中文',
                'ui.search.placeholder': 'Buscar...',
                
                // Formula elements
                'formula.title': 'Título de Fórmula',
                'formula.explanation': 'El texto de explicación de la fórmula va aquí.',
                'formula.write': 'Escribe la fórmula:',
                'formula.input.placeholder': 'Escribe la fórmula aquí...',
                'formula.check': 'Verificar Respuesta',
                'formula.correct': 'Fórmula Correcta:',
                
                // Math operations and terms
                'math.add': 'Sumar',
                'math.subtract': 'Restar',
                'math.multiply': 'Multiplicar',
                'math.divide': 'Dividir',
                'math.equals': 'Igual a',
                'math.calculate': 'Calcular',
                'math.result': 'Resultado',
                'math.correct': '¡Correcto!',
                'math.wrong': 'Inténtalo de Nuevo',
                'math.great': '¡Buen Trabajo!',
                'math.area': 'Área',
                'math.volume': 'Volumen',
                'math.circumference': 'Circunferencia',
                'math.radius': 'Radio',
                'math.diameter': 'Diámetro',
                'math.base': 'Base',
                'math.height': 'Altura',
                'math.length': 'Longitud',
                'math.width': 'Ancho',
                
                // Encouragement
                'encourage.keep_going': '¡Sigue Así!',
                'encourage.you_can_do_it': '¡Puedes Hacerlo!',
                'encourage.well_done': '¡Bien Hecho!',
                'encourage.fantastic': '¡Fantástico!',
                'encourage.excellent': '¡Excelente!',
                'encourage.perfect': '¡Perfecto!',
                
                // Formula translations - Class 7
                'formula.rectangle.area.title': 'Área del Rectángulo',
                'formula.rectangle.area.explanation': 'El área de un rectángulo se calcula multiplicando su longitud por su ancho.',
                'formula.triangle.area.title': 'Área del Triángulo',
                'formula.triangle.area.explanation': 'El área de un triángulo se calcula multiplicando la mitad de la longitud de la base por la altura.',
                'formula.circle.circumference.title': 'Circunferencia del Círculo',
                'formula.circle.circumference.explanation': 'La circunferencia de un círculo se calcula multiplicando pi (π) por el diámetro, o 2 veces pi (π) por el radio.',
                'formula.circle.area.title': 'Área del Círculo',
                'formula.circle.area.explanation': 'El área de un círculo se calcula multiplicando pi (π) por el cuadrado del radio.',
                'formula.rectangle.perimeter.title': 'Perímetro del Rectángulo',
                'formula.rectangle.perimeter.explanation': 'El perímetro de un rectángulo se calcula sumando el doble de la longitud y el doble del ancho.',
                'formula.square.area.title': 'Área del Cuadrado',
                'formula.square.area.explanation': 'El área de un cuadrado se calcula elevando al cuadrado la longitud de un lado.',
                'formula.square.perimeter.title': 'Perímetro del Cuadrado',
                'formula.square.perimeter.explanation': 'El perímetro de un cuadrado se calcula multiplicando la longitud del lado por 4.',
                'formula.parallelogram.area.title': 'Área del Paralelogramo',
                'formula.parallelogram.area.explanation': 'El área de un paralelogramo se calcula multiplicando la longitud de la base por la altura.',
                
                // Formula translations - Class 8
                'formula.pythagorean.title': 'Teorema de Pitágoras',
                'formula.pythagorean.explanation': 'En un triángulo rectángulo, el cuadrado de la longitud de la hipotenusa es igual a la suma de los cuadrados de las longitudes de los otros dos lados.',
                'formula.interest.simple.title': 'Interés Simple',
                'formula.interest.simple.explanation': 'El interés simple se calcula multiplicando el capital por la tasa de interés y el período de tiempo.',
                'formula.cube.volume.title': 'Volumen del Cubo',
                'formula.cube.volume.explanation': 'El volumen de un cubo se calcula elevando al cubo la longitud de un lado.',
                'formula.rectangular.prism.volume.title': 'Volumen del Prisma Rectangular',
                'formula.rectangular.prism.volume.explanation': 'El volumen de un prisma rectangular se calcula multiplicando su longitud, ancho y altura.',
                'formula.cube.surface.title': 'Área Superficial del Cubo',
                'formula.cube.surface.explanation': 'El área superficial de un cubo se calcula multiplicando 6 por el cuadrado de la longitud del lado.',
                'formula.percentage.title': 'Porcentaje',
                'formula.percentage.explanation': 'Para encontrar un porcentaje de un número, multiplica el número por el porcentaje y divide por 100.',
                'formula.speed.title': 'Velocidad, Distancia, Tiempo',
                'formula.speed.explanation': 'La velocidad se calcula dividiendo la distancia por el tiempo. Esta fórmula se puede reorganizar para encontrar la distancia o el tiempo.',
                'formula.rhombus.area.title': 'Área del Rombo',
                'formula.rhombus.area.explanation': 'El área de un rombo se calcula multiplicando las longitudes de sus dos diagonales y dividiendo por 2.',
                
                // Formula translations - Class 9
                'formula.quadratic.title': 'Fórmula Cuadrática',
                'formula.quadratic.explanation': 'La fórmula cuadrática se usa para resolver una ecuación cuadrática de la forma ax² + bx + c = 0.',
                'formula.slope.title': 'Pendiente de una Línea',
                'formula.slope.explanation': 'La pendiente de una línea mide su inclinación y se calcula usando las coordenadas de dos puntos cualesquiera en la línea.',
                'formula.trapezoid.area.title': 'Área del Trapecio',
                'formula.trapezoid.area.explanation': 'El área de un trapecio se calcula multiplicando el promedio de los lados paralelos por la altura.',
                'formula.midpoint.title': 'Fórmula del Punto Medio',
                'formula.midpoint.explanation': 'La fórmula del punto medio encuentra el punto exactamente a la mitad entre dos puntos dados en un plano de coordenadas.',
                'formula.cylinder.volume.title': 'Volumen del Cilindro',
                'formula.cylinder.volume.explanation': 'El volumen de un cilindro se calcula multiplicando pi (π) por el cuadrado del radio y la altura.',
                'formula.cylinder.surface.title': 'Área Superficial del Cilindro',
                'formula.cylinder.surface.explanation': 'El área superficial de un cilindro es la suma de las áreas de sus dos bases circulares y su superficie curva.',
                'formula.linear.equation.title': 'Ecuación Lineal (Forma Pendiente-Intersección)',
                'formula.linear.equation.explanation': 'Una ecuación lineal en forma pendiente-intersección muestra la relación entre x e y, donde m es la pendiente y b es la intersección con el eje y.',
                
                // Formula translations - Class 10
                'formula.distance.title': 'Fórmula de Distancia',
                'formula.distance.explanation': 'La fórmula de distancia calcula la distancia entre dos puntos en un plano de coordenadas.',
                'formula.interest.compound.title': 'Interés Compuesto',
                'formula.interest.compound.explanation': 'El interés compuesto se calcula cuando el interés se suma al capital, de modo que a partir de ese momento, el interés que se ha sumado también genera interés.',
                'formula.sphere.volume.title': 'Volumen de la Esfera',
                'formula.sphere.volume.explanation': 'El volumen de una esfera se calcula usando su radio.',
                'formula.sphere.surface.title': 'Área Superficial de la Esfera',
                'formula.sphere.surface.explanation': 'El área superficial de una esfera se calcula multiplicando 4 veces pi (π) por el cuadrado del radio.',
                'formula.cone.volume.title': 'Volumen del Cono',
                'formula.cone.volume.explanation': 'El volumen de un cono se calcula multiplicando un tercio de pi (π) por el cuadrado del radio y la altura.',
                'formula.cone.surface.title': 'Área Superficial del Cono',
                'formula.cone.surface.explanation': 'El área superficial de un cono incluye el área de la base y el área de la superficie lateral.',
                'formula.logarithm.title': 'Logaritmo',
                'formula.logarithm.explanation': 'Un logaritmo es el exponente al que se debe elevar una base para producir un número dado.',
                'formula.exponential.growth.title': 'Crecimiento Exponencial',
                'formula.exponential.growth.explanation': 'El crecimiento exponencial describe una cantidad que aumenta a una tasa proporcional a su valor actual.'
            },
            
            fr: {
                // Page titles and main content
                'page.title': 'Plateforme d\'Apprentissage des Mathématiques',
                'page.main.title': 'Explications de Formules Mathématiques',
                'page.language.title': 'Sélection de Langue',
                'page.language.current': 'Langue actuellement sélectionnée:',
                'page.class.title': 'Sélection de Classe',
                'page.class.select': 'Sélectionner la Classe:',
                'page.class.seven': 'Classe 7',
                'page.class.eight': 'Classe 8',
                'page.class.nine': 'Classe 9',
                'page.class.ten': 'Classe 10',
                'page.class.current': 'Classe actuellement sélectionnée:',
                'page.formulas.title': 'Explications de Formules Mathématiques',
                'page.formulas.intro': 'Sélectionnez une classe ci-dessus pour voir les formules mathématiques de ce niveau.',
                'page.help.title': 'Besoin d\'Aide Supplémentaire?',
                'page.help.description': 'Si vous avez du mal à comprendre la formule ou le concept, nous avons préparé des ressources utiles pour vous.',
                'page.help.button': 'Vous n\'avez pas compris la formule?',
                'page.help.video.title': 'Explication Vidéo',
                'page.help.video.description': 'Cette vidéo pourrait aider à clarifier le concept:',
                'page.help.video.title.content': 'Comprendre les Formules Mathématiques - Tutoriel',
                'page.search.title': 'Résultats de Recherche',
                'page.search.placeholder': 'Entrez un terme de recherche ci-dessus pour voir les résultats.',
                'page.history.title': 'Historique de Recherche',
                'page.history.description': 'Questions et réponses recherchées précédemment',
                'page.history.clear': 'Effacer l\'Historique',
                'page.history.placeholder': 'Votre historique de recherche apparaîtra ici.',
                'page.feedback.title': 'Aidez-nous à Améliorer',
                'page.feedback.description': 'Faites-nous savoir ce que vous n\'avez pas pu trouver sur notre site web',
                'page.feedback.placeholder': 'Veuillez nous dire ce que vous cherchiez mais que vous n\'avez pas pu trouver...',
                'page.feedback.submit': 'Soumettre les Commentaires',
                'page.feedback.thankyou': 'Merci pour vos commentaires!',
                'page.feedback.response': 'Nous avons noté votre demande et envisagerons d\'ajouter cette information dans les futures mises à jour:',
                
                // UI Elements
                'ui.language.english': 'English',
                'ui.language.spanish': 'Español',
                'ui.language.french': 'Français',
                'ui.language.german': 'Deutsch',
                'ui.language.italian': 'Italiano',
                'ui.language.japanese': '日本語',
                'ui.language.chinese': '中文',
                'ui.search.placeholder': 'Rechercher...',
                
                // Formula elements
                'formula.title': 'Titre de Formule',
                'formula.explanation': 'Le texte d\'explication de la formule va ici.',
                'formula.write': 'Écrivez la formule:',
                'formula.input.placeholder': 'Écrivez la formule ici...',
                'formula.check': 'Vérifier la Réponse',
                'formula.correct': 'Formule Correcte:',
                
                // Math operations and terms
                'math.add': 'Ajouter',
                'math.subtract': 'Soustraire',
                'math.multiply': 'Multiplier',
                'math.divide': 'Diviser',
                'math.equals': 'Égal à',
                'math.calculate': 'Calculer',
                'math.result': 'Résultat',
                'math.correct': 'Correct !',
                'math.wrong': 'Essaie Encore',
                'math.great': 'Bon Travail !',
                'math.area': 'Aire',
                'math.volume': 'Volume',
                'math.circumference': 'Circonférence',
                'math.radius': 'Rayon',
                'math.diameter': 'Diamètre',
                'math.base': 'Base',
                'math.height': 'Hauteur',
                'math.length': 'Longueur',
                'math.width': 'Largeur',
                
                // Encouragement
                'encourage.keep_going': 'Continue !',
                'encourage.you_can_do_it': 'Tu Peux le Faire !',
                'encourage.well_done': 'Bien Fait !',
                'encourage.fantastic': 'Fantastique !',
                'encourage.excellent': 'Excellent !',
                'encourage.perfect': 'Parfait !'
            },
            
            de: {
                // Page titles and main content
                'page.title': 'Mathematik-Lernplattform',
                'page.main.title': 'Mathematische Formelerklärungen',
                'page.language.title': 'Sprachauswahl',
                'page.language.current': 'Aktuell ausgewählte Sprache:',
                'page.class.title': 'Klassenauswahl',
                'page.class.select': 'Klasse auswählen:',
                'page.class.seven': 'Klasse 7',
                'page.class.eight': 'Klasse 8',
                'page.class.nine': 'Klasse 9',
                'page.class.ten': 'Klasse 10',
                'page.class.current': 'Aktuell ausgewählte Klasse:',
                'page.formulas.title': 'Mathematische Formelerklärungen',
                'page.formulas.intro': 'Wählen Sie oben eine Klasse aus, um mathematische Formeln für diese Klassenstufe zu sehen.',
                'page.help.title': 'Brauchen Sie zusätzliche Hilfe?',
                'page.help.description': 'Wenn Sie Schwierigkeiten haben, die Formel oder das Konzept zu verstehen, haben wir hilfreiche Ressourcen für Sie vorbereitet.',
                'page.help.button': 'Formel nicht verstanden?',
                'page.help.video.title': 'Video-Erklärung',
                'page.help.video.description': 'Dieses Video könnte helfen, das Konzept zu klären:',
                'page.help.video.title.content': 'Mathematische Formeln verstehen - Tutorial',
                'page.search.title': 'Suchergebnisse',
                'page.search.placeholder': 'Geben Sie oben einen Suchbegriff ein, um Ergebnisse zu sehen.',
                'page.history.title': 'Suchverlauf',
                'page.history.description': 'Zuvor gesuchte Fragen und Antworten',
                'page.history.clear': 'Verlauf löschen',
                'page.history.placeholder': 'Ihr Suchverlauf wird hier angezeigt.',
                'page.feedback.title': 'Helfen Sie uns zu verbessern',
                'page.feedback.description': 'Lassen Sie uns wissen, was Sie auf unserer Website nicht finden konnten',
                'page.feedback.placeholder': 'Bitte teilen Sie uns mit, wonach Sie gesucht haben, aber nicht finden konnten...',
                'page.feedback.submit': 'Feedback senden',
                'page.feedback.thankyou': 'Vielen Dank für Ihr Feedback!',
                'page.feedback.response': 'Wir haben Ihre Anfrage notiert und werden erwägen, diese Informationen in zukünftigen Updates hinzuzufügen:',
                
                // UI Elements
                'ui.language.english': 'English',
                'ui.language.spanish': 'Español',
                'ui.language.french': 'Français',
                'ui.language.german': 'Deutsch',
                'ui.language.italian': 'Italiano',
                'ui.language.japanese': '日本語',
                'ui.language.chinese': '中文',
                'ui.search.placeholder': 'Suchen...',
                
                // Formula elements
                'formula.title': 'Formeltitel',
                'formula.explanation': 'Formelerklärungstext kommt hier.',
                'formula.write': 'Schreiben Sie die Formel:',
                'formula.input.placeholder': 'Schreiben Sie die Formel hier...',
                'formula.check': 'Antwort überprüfen',
                'formula.correct': 'Korrekte Formel:',
                
                // Math operations and terms
                'math.add': 'Addieren',
                'math.subtract': 'Subtrahieren',
                'math.multiply': 'Multiplizieren',
                'math.divide': 'Dividieren',
                'math.equals': 'Gleich',
                'math.calculate': 'Berechnen',
                'math.result': 'Ergebnis',
                'math.correct': 'Richtig!',
                'math.wrong': 'Versuche es nochmal',
                'math.great': 'Gut gemacht!',
                'math.area': 'Fläche',
                'math.volume': 'Volumen',
                'math.circumference': 'Umfang',
                'math.radius': 'Radius',
                'math.diameter': 'Durchmesser',
                'math.base': 'Basis',
                'math.height': 'Höhe',
                'math.length': 'Länge',
                'math.width': 'Breite',
                
                // Encouragement
                'encourage.keep_going': 'Weiter so!',
                'encourage.you_can_do_it': 'Du kannst das!',
                'encourage.well_done': 'Gut gemacht!',
                'encourage.fantastic': 'Fantastisch!',
                'encourage.excellent': 'Ausgezeichnet!',
                'encourage.perfect': 'Perfekt!'
            }
        };
    }

    // Setup language switcher - connects to your existing language dropdown
    setupLanguageSwitcher() {
        // Find your existing language dropdown options
        const languageOptions = document.querySelectorAll('.language-dropdown li[data-lang]');
        
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                const lang = option.getAttribute('data-lang');
                this.translatePage(lang);
                
                // Update the selected language display
                const languageLabel = document.querySelector('.language-label');
                if (languageLabel) {
                    languageLabel.textContent = option.textContent;
                }
                
                // Update the selected language display in the demo section
                const selectedLanguageDisplay = document.getElementById('selected-language-display');
                if (selectedLanguageDisplay) {
                    selectedLanguageDisplay.textContent = option.textContent;
                }
            });
        });
    }

    detectLanguage() {
        const userLang = navigator.language || navigator.userLanguage;
        const langCode = userLang.split('-')[0];
        
        if (this.translations[langCode]) {
            this.currentLanguage = langCode;
        }
    }

    // Main translation function - OPTIMIZED for speed
    async translatePage(targetLanguage) {
        if (this.isTranslating || targetLanguage === this.currentLanguage) {
            return;
        }

        this.isTranslating = true;
        
        // Only show loading for API translations, not pre-loaded ones
        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        const needsAPI = [];
        const translations = new Map();
        
        // First pass: collect all translations (fast, synchronous)
        elementsToTranslate.forEach(element => {
            const key = element.dataset.translate;
            if (!key) return;
            
            // Save original text if not already saved
            if (!element.dataset.originalText) {
                element.dataset.originalText = element.textContent.trim();
            }
            
            // Check if we have pre-loaded translation
            if (this.translations[targetLanguage] && this.translations[targetLanguage][key]) {
                translations.set(element, this.translations[targetLanguage][key]);
            } else {
                // Mark for API translation
                needsAPI.push({ element, key, text: element.dataset.originalText || element.textContent.trim() });
            }
        });
        
        // Apply pre-loaded translations instantly (synchronous, fast)
        translations.forEach((translatedText, element) => {
            element.textContent = translatedText;
        });
        
        // Handle API translations only if needed (async, but batched)
        if (needsAPI.length > 0) {
            this.showLoading();
            try {
                // Batch API calls for better performance
                const apiPromises = needsAPI.map(({ element, text }) => 
                    this.translateText(text, targetLanguage).then(translated => {
                        element.textContent = translated;
                    })
                );
                await Promise.all(apiPromises);
            } catch (error) {
                console.error('Translation API error:', error);
                // Keep original text if API fails
            } finally {
                this.hideLoading();
            }
        }

        this.currentLanguage = targetLanguage;
        this.updateDocumentLanguage(targetLanguage);
        this.saveLanguagePreference(targetLanguage);
        this.isTranslating = false;
    }

    // API translation fallback
    async translateText(text, targetLanguage) {
        if (!text.trim()) return text;

        try {
            const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=auto|${targetLanguage}`);
            const data = await response.json();
            
            if (data.responseStatus === 200 && data.responseData) {
                return data.responseData.translatedText;
            }
            
            return text;
        } catch (error) {
            console.error('Translation API error:', error);
            return text;
        }
    }

    updateDocumentLanguage(lang) {
        document.documentElement.lang = lang;
        
        // Update text direction for RTL languages
        const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
        if (rtlLanguages.includes(lang)) {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }
    }

    saveLanguagePreference(lang) {
        localStorage.setItem('math-translator-language', lang);
    }

    loadLanguagePreference() {
        const savedLang = localStorage.getItem('math-translator-language');
        if (savedLang && this.translations[savedLang]) {
            this.currentLanguage = savedLang;
            this.translatePage(savedLang);
        }
    }

    showLoading() {
        // Only show loading if not already showing
        if (document.getElementById('translator-loading')) return;
        
        // Add loading indicator (minimal, non-intrusive)
        const loadingDiv = document.createElement('div');
        loadingDiv.id = 'translator-loading';
        loadingDiv.innerHTML = '🔄';
        loadingDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            background: rgba(255,255,255,0.9);
            padding: 8px;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            font-size: 18px;
            animation: spin 1s linear infinite;
        `;
        document.body.appendChild(loadingDiv);
    }

    hideLoading() {
        const loadingDiv = document.getElementById('translator-loading');
        if (loadingDiv) {
            loadingDiv.remove();
        }
    }

    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff4444;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 1001;
            font-size: 14px;
        `;
        errorDiv.textContent = message;
        document.body.appendChild(errorDiv);

        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    }

    // Method to add new translations
    addTranslations(language, newTranslations) {
        if (!this.translations[language]) {
            this.translations[language] = {};
        }
        Object.assign(this.translations[language], newTranslations);
    }

    // Method to get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Initialize the translator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.mathTranslator = new MathTranslatorEnhanced();
    
    // Load saved language preference
    window.mathTranslator.loadLanguagePreference();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MathTranslatorEnhanced;
}




