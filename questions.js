// Banco de preguntas — Oposiciones Galicia, Educación Infantil
// 26 bloques, 677 preguntas en total, cada unha etiquetada
// coa propiedade "d": "facil", "media", "dificil" ou "moidificil".
const QUESTION_BANK = [
 {
  "id": "b01",
  "title": "Alimentación, Nutrición y Dietética",
  "questions": [
   {
    "d": "facil",
    "q": "¿Cuál de los siguientes NO es uno de los principios inmediatos básicos de la alimentación?",
    "o": [
     "Hidratos de carbono",
     "Proteínas",
     "Vitaminas liposolubles",
     "Grasas"
    ],
    "c": 2,
    "e": "Los tres principios inmediatos son hidratos de carbono, proteínas y grasas (lípidos): son los nutrientes que aportan energía y \"materiales de construcción\" al organismo. Las vitaminas y minerales son nutrientes reguladores, necesarios en pequeñas cantidades pero que no aportan calorías. Por ejemplo, un plato de lentejas con arroz aporta hidratos de carbono (arroz) y proteínas (lentejas), mientras que una naranja aporta sobre todo vitamina C, que regula procesos del organismo pero no es un principio inmediato."
   },
   {
    "d": "facil",
    "q": "Según las recomendaciones de la OMS, la lactancia materna exclusiva se recomienda hasta:",
    "o": [
     "3 meses",
     "6 meses",
     "9 meses",
     "12 meses"
    ],
    "c": 1,
    "e": "La OMS recomienda lactancia materna exclusiva hasta los 6 meses, momento en el que el sistema digestivo del bebé ya está preparado para tolerar otros alimentos. A partir de esa edad se introduce de forma progresiva la alimentación complementaria (purés de fruta o verdura, cereales...), manteniendo a la vez la lactancia materna o artificial hasta los 2 años o más, según la OMS."
   },
   {
    "d": "facil",
    "q": "En la etapa de Educación Infantil, el comedor escolar se concibe fundamentalmente como:",
    "o": [
     "Un espacio educativo más, donde se trabajan hábitos y autonomía",
     "Un mero servicio de custodia sin valor pedagógico",
     "Un lugar donde no debe intervenir el docente",
     "Un espacio ajeno al currículo"
    ],
    "c": 0,
    "e": "El comedor es un espacio educativo más, no un mero servicio de custodia: en él se trabajan hábitos de higiene (lavado de manos), autonomía (comer solo, usar cubiertos, servirse agua) y alimentación equilibrada. Por ejemplo, animar a un niño de 3 años a pelar él mismo un plátano o a servirse agua de una jarra pequeña convierte el momento de comer en una situación de aprendizaje de la vida cotidiana."
   },
   {
    "d": "media",
    "q": "¿Qué trastorno de conducta alimentaria es más frecuente detectar en la etapa infantil, ligado a la neofobia alimentaria?",
    "o": [
     "Anorexia nerviosa",
     "Rechazo o selectividad ante alimentos nuevos",
     "Bulimia",
     "Pica en adolescentes"
    ],
    "c": 1,
    "e": "La neofobia alimentaria (rechazo o desconfianza ante alimentos nuevos o desconocidos) es habitual entre los 2 y los 6 años y forma parte del desarrollo típico infantil, aunque debe abordarse educativamente para que no derive en una dieta muy restringida. Por ejemplo, un niño que come brócoli sin problema en casa puede rechazarlo la primera vez que se lo presentan en el comedor escolar simplemente por ser un contexto o una presentación distintos."
   },
   {
    "d": "facil",
    "q": "La 'pirámide alimentaria' se emplea en Infantil fundamentalmente como:",
    "o": [
     "Recurso decorativo del aula",
     "Recurso didáctico para clasificar alimentos y trabajar hábitos saludables",
     "Instrumento de evaluación psicomotriz",
     "Material exclusivo de matemáticas"
    ],
    "c": 1,
    "e": "La pirámide alimentaria es un recurso gráfico y didáctico que ayuda a clasificar los grupos de alimentos según la frecuencia de consumo recomendada (los de la base, como cereales, frutas y verduras, a diario; los de la cúspide, como dulces, de forma ocasional) y a iniciar la comprensión de una dieta equilibrada. En el aula puede usarse, por ejemplo, para que el alumnado clasifique recortes de alimentos según el escalón de la pirámide al que pertenecen."
   },
   {
    "d": "facil",
    "q": "¿Cuál de estas es una pauta correcta para el almuerzo de media mañana en el aula de Infantil?",
    "o": [
     "Priorizar bollería industrial por ser más atractiva",
     "Ofrecer variedad con fruta, lácteos o pan, evitando ultraprocesados",
     "Eliminar cualquier momento de alimentación en el centro",
     "Exigir que todos coman exactamente la misma cantidad"
    ],
    "c": 1,
    "e": "Para el almuerzo de media mañana se recomienda ofrecer variedad —fruta, lácteos, pan o cereales integrales— evitando bollería industrial y ultraprocesados ricos en azúcares y grasas de baja calidad. Por ejemplo, alternar a lo largo de la semana un día de fruta, otro de bocadillo integral y otro de yogur natural aporta variedad nutricional sin recurrir a productos envasados azucarados."
   },
   {
    "d": "dificil",
    "q": "La 'dieta mediterránea', modelo de referencia en la educación alimentaria infantil, se caracteriza por priorizar:",
    "o": [
     "Carnes rojas y grasas saturadas",
     "Aceite de oliva, verduras, fruta, legumbres y cereales",
     "Bollería y refrescos azucarados",
     "Alimentos ultraprocesados de fácil conservación"
    ],
    "c": 1,
    "e": "La dieta mediterránea, modelo de referencia en la educación alimentaria infantil, se basa en el aceite de oliva como grasa principal, un alto consumo de verduras, fruta, legumbres y cereales, y un consumo moderado de pescado, carne y lácteos. Un menú escolar mediterráneo típico podría ser, por ejemplo, lentejas con verduras, pescado a la plancha y fruta de postre."
   },
   {
    "d": "media",
    "q": "El 'método BLW' (Baby-Led Weaning) de introducción de la alimentación complementaria se caracteriza por:",
    "o": [
     "Ofrecer únicamente purés y papillas trituradas",
     "Dejar que el bebé se autoalimente con trozos de alimento sólido desde el inicio de la complementaria",
     "Prohibir cualquier alimento sólido hasta los 2 años",
     "Ser un método exclusivamente hospitalario"
    ],
    "c": 1,
    "e": "El método BLW (Baby-Led Weaning o \"destete dirigido por el bebé\") propone ofrecer alimentos en trozos blandos y manejables (no purés) para que sea el propio bebé quien se autoalimente desde el inicio de la alimentación complementaria, favoreciendo su autonomía, la exploración sensorial y la coordinación mano-boca. Por ejemplo, en lugar de un puré de calabacín se ofrece el calabacín cocido entero, en bastones, para que el bebé lo agarre y lo lleve él mismo a la boca."
   },
   {
    "d": "dificil",
    "q": "La obesidad infantil, como problema de salud pública, se relaciona en la etapa de Infantil principalmente con la prevención a través de:",
    "o": [
     "Restricciones alimentarias severas impuestas por el centro",
     "Educación en hábitos saludables, actividad física y alimentación equilibrada de forma normalizada",
     "La exclusión del alumnado con sobrepeso de las actividades",
     "La ausencia de cualquier intervención educativa"
    ],
    "c": 1,
    "e": "La prevención de la obesidad infantil en la etapa de Infantil se centra en fomentar hábitos saludables de forma normalizada —alimentación equilibrada, actividad física diaria, límites razonables al tiempo de pantalla— y nunca en restricciones severas o en señalar o excluir al alumnado con sobrepeso, lo que puede generar estigma y problemas de autoestima. Por ejemplo, es más adecuado programar juegos motores diarios para todo el grupo que apartar a un niño concreto de la merienda."
   },
   {
    "d": "facil",
    "q": "El desayuno se considera, desde el punto de vista nutricional, una comida:",
    "o": [
     "Prescindible y sin relevancia",
     "Importante para el rendimiento y la atención durante la jornada",
     "Solo necesaria en adultos",
     "Que debe eliminarse en Infantil"
    ],
    "c": 1,
    "e": "Un desayuno adecuado (que incluya, por ejemplo, lácteo, cereal y fruta) contribuye al rendimiento cognitivo, la capacidad de atención y el estado de ánimo durante las primeras horas de la jornada escolar, ya que el cerebro necesita un aporte constante de glucosa. Un niño que acude al centro sin desayunar suele mostrar más irritabilidad y menor concentración a media mañana que uno que sí lo ha hecho."
   },
   {
    "d": "media",
    "q": "Las alergias e intolerancias alimentarias en el aula de Infantil requieren, entre otras medidas, que el centro:",
    "o": [
     "Ignore la información sanitaria aportada por la familia",
     "Disponga de protocolos claros de actuación e información compartida entre familia, comedor y aula",
     "Excluya al niño del comedor escolar",
     "Aplique la misma dieta a todo el alumnado sin excepciones"
    ],
    "c": 1,
    "e": "Ante alergias e intolerancias alimentarias es imprescindible contar con protocolos claros de actuación, información compartida entre familia, comedor y aula, y formación básica del personal (por ejemplo, reconocer los síntomas de una reacción alérgica y saber cómo actuar). Un caso habitual es la alergia al huevo o a los frutos secos: el centro debe tener registrado qué alumnado la padece y garantizar que ningún menú ni actividad (como un taller de cocina) lo exponga por error."
   },
   {
    "d": "facil",
    "q": "El agua, como bebida de referencia en la etapa infantil, debe:",
    "o": [
     "Sustituirse siempre por zumos industriales",
     "Ser la bebida habitual, limitando refrescos y zumos azucarados",
     "Evitarse durante las comidas",
     "Ofrecerse solo en verano"
    ],
    "c": 1,
    "e": "El agua debe ser la bebida de referencia en la alimentación infantil, limitando el consumo de refrescos y zumos industriales azucarados, que aportan calorías vacías y favorecen hábitos poco saludables. Por ejemplo, en el aula es preferible tener siempre disponible una jarra de agua para que el alumnado beba libremente, en lugar de ofrecer zumo envasado en la merienda."
   },
   {
    "d": "dificil",
    "q": "El etiquetado nutricional tipo 'Nutri-Score', cada vez más presente en productos infantiles, tiene como finalidad:",
    "o": [
     "Sustituir la educación alimentaria en el aula",
     "Facilitar de forma visual la comparación del valor nutricional de los productos",
     "Indicar exclusivamente el precio del producto",
     "Certificar que un producto es ecológico"
    ],
    "c": 1,
    "e": "El Nutri-Score es un sistema de etiquetado nutricional frontal (de la A verde a la E roja) que facilita, de forma visual y rápida, la comparación del perfil nutricional de productos similares, sin sustituir la educación alimentaria que se realiza en el aula. Por ejemplo, permite comparar dos marcas de galletas y ver cuál tiene, en conjunto, menos azúcares, grasas saturadas y sal."
   },
   {
    "d": "facil",
    "q": "La higiene bucodental (cepillado de dientes) en Infantil se trabaja como parte de:",
    "o": [
     "Un contenido ajeno a la educación para la salud",
     "Los hábitos de autonomía y salud propios de la etapa",
     "Una actividad exclusiva del área de matemáticas",
     "Un contenido reservado a Primaria"
    ],
    "c": 1,
    "e": "El cepillado de dientes después de comer forma parte de los hábitos de higiene y autonomía personal que se trabajan de forma cotidiana en Infantil, dentro del área de educación para la salud. Establecer una rutina diaria de cepillado tras la comida del mediodía en el centro, con supervisión docente, es una forma habitual de trabajar este contenido."
   },
   {
    "d": "media",
    "q": "Respecto a las 'chucherías' o dulces en el aula (cumpleaños, celebraciones), un criterio educativo razonable es:",
    "o": [
     "Prohibirlas de forma absoluta sin ninguna alternativa",
     "Moderar su presencia y ofrecer alternativas saludables sin generar un discurso de prohibición ansiógena",
     "Fomentar su consumo diario como premio",
     "No intervenir en absoluto en este aspecto"
    ],
    "c": 1,
    "e": "Respecto a las chucherías o dulces en celebraciones de aula (cumpleaños), el criterio educativo razonable es moderar su presencia y ofrecer alternativas saludables (fruta, frutos secos triturados, batidos naturales), evitando tanto el consumo diario como un discurso de prohibición absoluta que genere ansiedad en torno a la comida. Por ejemplo, se puede proponer a las familias traer una macedonia de fruta o un bizcocho casero bajo en azúcar en lugar de bollería industrial."
   },
   {
    "d": "facil",
    "q": "El lavado de manos antes de comer se enseña en Infantil principalmente por motivos de:",
    "o": [
     "Estética exclusivamente",
     "Higiene y prevención de enfermedades",
     "Motricidad fina exclusivamente",
     "Disciplina de grupo"
    ],
    "c": 1,
    "e": "El lavado de manos antes de comer se enseña en Infantil principalmente por motivos de higiene y prevención de enfermedades, ya que reduce la transmisión de gérmenes por vía fecal-oral, muy frecuente a estas edades. Convertirlo en una rutina asociada siempre al mismo momento (antes de sentarse a la mesa) ayuda a automatizar el hábito."
   },
   {
    "d": "dificil",
    "q": "La 'neofobia alimentaria' tiende a disminuir principalmente cuando se aplica la estrategia de:",
    "o": [
     "Forzar al niño a comer el alimento nuevo de una sola vez",
     "Exposición repetida y sin presión al alimento nuevo, con modelado del adulto",
     "Eliminar definitivamente el alimento rechazado",
     "Castigar el rechazo del alimento"
    ],
    "c": 1,
    "e": "La neofobia alimentaria tiende a disminuir principalmente con la exposición repetida y sin presión al alimento nuevo, combinada con el modelado positivo del adulto (el niño ve comer el alimento a un adulto de referencia con actitud positiva). Por ejemplo, ofrecer una cucharadita de un alimento nuevo varias veces en distintos días, sin forzar ni castigar si no se come, suele ser más eficaz que insistir en que se termine el plato de una sola vez."
   },
   {
    "d": "facil",
    "q": "Los grupos de alimentos representados en la rueda de los alimentos incluyen, entre otros:",
    "o": [
     "Solo carnes y pescados",
     "Frutas y verduras, cereales, lácteos, proteínas y grasas",
     "Únicamente dulces y bollería",
     "Solo agua y bebidas"
    ],
    "c": 1,
    "e": "La rueda de los alimentos clasifica los alimentos en varios grupos —frutas y verduras, cereales, lácteos, proteínas (carnes, pescados, legumbres) y grasas— representados como porciones de una rueda, para facilitar de forma visual la comprensión de una dieta equilibrada. Es un recurso muy usado en el aula, por ejemplo, para que el alumnado pegue recortes de alimentos en el grupo correspondiente de una rueda mural."
   },
   {
    "d": "media",
    "q": "El papel de la familia y de la escuela en la educación alimentaria debe entenderse como:",
    "o": [
     "Ámbitos independientes sin necesidad de coordinación",
     "Complementario, con coherencia de mensajes entre el hogar y el centro",
     "Responsabilidad exclusiva de la escuela",
     "Responsabilidad exclusiva de la familia"
    ],
    "c": 1,
    "e": "El papel de la familia y de la escuela en la educación alimentaria debe entenderse como complementario, con coherencia de mensajes entre el hogar y el centro, ya que mensajes contradictorios (por ejemplo, fomentar la fruta en el centro mientras en casa se prioriza la bollería) dificultan la adquisición de hábitos estables. Por eso muchos centros comparten con las familias el menú escolar, sugiriendo cenas que no repitan lo ya comido a mediodía."
   },
   {
    "d": "dificil",
    "q": "La ingesta calórica recomendada para un niño o niña de Infantil, en comparación con la de un adulto, es:",
    "o": [
     "Proporcionalmente mayor en relación con su peso, por las necesidades de crecimiento",
     "Idéntica en términos absolutos",
     "Siempre menor en cualquier circunstancia",
     "Irrelevante para su desarrollo"
    ],
    "c": 0,
    "e": "Debido al crecimiento y al elevado gasto energético relativo a su tamaño, los niños y niñas de Infantil necesitan, en proporción a su peso corporal, un aporte calórico y de nutrientes (proteínas, calcio, hierro) mayor que un adulto, aunque en términos absolutos coman cantidades menores. Por ejemplo, un niño de 4 años necesita relativamente más calcio por kilo de peso que un adulto, precisamente porque sus huesos están en pleno crecimiento."
   }
  ]
 },
 {
  "id": "b02",
  "title": "Características Generales del Niño y la Niña hasta los Seis Años",
  "questions": [
   {
    "d": "facil",
    "q": "El desarrollo infantil sigue dos leyes fundamentales de maduración:",
    "o": [
     "Ley cefalocaudal y ley proximodistal",
     "Ley de la oferta y la demanda",
     "Ley del efecto y ley del ejercicio",
     "Ley de Piaget y ley de Freud"
    ],
    "c": 0,
    "e": "El desarrollo motor sigue dos leyes fundamentales: la ley cefalocaudal (el control se adquiere primero en la cabeza y va descendiendo hacia los pies) y la ley proximodistal (primero se controlan las partes cercanas al eje del cuerpo y después las más alejadas, como los dedos). Por ejemplo, un bebé controla antes el cuello (sostiene la cabeza) que las piernas, y controla antes el hombro y el brazo que la pinza fina de los dedos."
   },
   {
    "d": "media",
    "q": "El desarrollo infantil se considera un proceso:",
    "o": [
     "Lineal e idéntico en todos los niños",
     "Global e integrado, en el que interactúan todas las áreas",
     "Exclusivamente determinado por la genética",
     "Independiente entre las distintas dimensiones"
    ],
    "c": 1,
    "e": "El desarrollo es global e integrado: los avances en un área (motriz, cognitiva, afectiva, social, del lenguaje) se relacionan e influyen mutuamente, no son compartimentos estancos. Por ejemplo, cuando un niño aprende a caminar (desarrollo motor) gana autonomía para explorar el entorno, lo que a su vez estimula su desarrollo cognitivo y su seguridad afectiva."
   },
   {
    "d": "facil",
    "q": "¿Qué característica NO es propia del desarrollo evolutivo de 0 a 6 años?",
    "o": [
     "Gran plasticidad neuronal",
     "Ritmo de desarrollo idéntico entre individuos",
     "Dependencia inicial del adulto que evoluciona hacia la autonomía",
     "Egocentrismo propio del pensamiento preoperacional"
    ],
    "c": 1,
    "e": "Aunque existen hitos evolutivos generales y una secuencia común (gatear antes de andar, balbucear antes de hablar), el ritmo de desarrollo es individual: no todos los niños alcanzan cada hito exactamente en la misma edad, y esas diferencias dentro de un rango normal no son motivo de alarma. Por ejemplo, es normal que un niño empiece a andar a los 11 meses y otro a los 16, sin que ello indique ningún problema."
   },
   {
    "d": "dificil",
    "q": "El concepto de 'periodos sensibles' del desarrollo fue especialmente desarrollado por:",
    "o": [
     "B.F. Skinner",
     "Maria Montessori",
     "Sigmund Freud",
     "Ivan Pávlov"
    ],
    "c": 1,
    "e": "Montessori desarrolló especialmente el concepto de 'periodos sensibles': fases de especial receptividad en las que el niño está biológicamente predispuesto para adquirir con facilidad determinadas capacidades (el lenguaje, el orden, el movimiento, los detalles sensoriales...). Por ejemplo, el periodo sensible del lenguaje (aproximadamente hasta los 6 años) explica por qué los niños pequeños aprenden idiomas con una facilidad que disminuye notablemente en la edad adulta."
   },
   {
    "d": "facil",
    "q": "¿En cuántos ciclos se organiza legalmente la etapa de Educación Infantil en España?",
    "o": [
     "Un ciclo único de 0 a 6 años",
     "Dos ciclos: 0-3 y 3-6 años",
     "Tres ciclos de dos años cada uno",
     "Cuatro cursos sin ciclos diferenciados"
    ],
    "c": 1,
    "e": "La Educación Infantil se organiza legalmente en dos ciclos, cada uno con identidad pedagógica propia: el primer ciclo (0-3 años), centrado en los cuidados, el vínculo afectivo y las primeras experiencias sensoriomotoras, y el segundo ciclo (3-6 años), con mayor peso de la intervención educativa sistemática y de preparación para la Primaria."
   },
   {
    "d": "media",
    "q": "Según el enfoque bioecológico de Bronfenbrenner, el desarrollo infantil está influido por:",
    "o": [
     "Únicamente la genética individual",
     "La interacción de la persona con distintos sistemas anidados (micro, meso, exo, macrosistema)",
     "Solo el rendimiento escolar",
     "Exclusivamente el nivel socioeconómico familiar"
    ],
    "c": 1,
    "e": "Según el enfoque bioecológico de Bronfenbrenner, el desarrollo infantil resulta de la interacción de la persona con sistemas anidados: el microsistema (familia, aula), el mesosistema (relación entre esos entornos, por ejemplo familia-escuela), el exosistema (entornos que afectan indirectamente, como el trabajo de los padres) y el macrosistema (la cultura y valores de la sociedad). Por ejemplo, un cambio en el horario laboral de los padres (exosistema) puede alterar la rutina y el descanso del niño sin que este participe directamente en esa decisión."
   },
   {
    "d": "facil",
    "q": "El proceso mediante el cual el sistema nervioso alcanza su nivel funcional se denomina:",
    "o": [
     "Socialización",
     "Maduración",
     "Aprendizaje memorístico",
     "Evaluación"
    ],
    "c": 1,
    "e": "La maduración es el proceso biológico de desarrollo del sistema nervioso (y del resto del organismo) que hace posible, cuando llega su momento, determinadas conductas y aprendizajes, independientemente de que se practiquen o no. Por ejemplo, un bebé no puede aprender a caminar por mucho que se le entrene si su sistema nervioso y muscular aún no ha madurado lo suficiente; a partir de cierta edad, en cambio, camina con relativa facilidad tras pocos intentos."
   },
   {
    "d": "dificil",
    "q": "El 'principio de individualidad' del desarrollo hace referencia a que:",
    "o": [
     "Todos los niños alcanzan los hitos evolutivos exactamente en la misma fecha",
     "Cada niño sigue una secuencia general común pero con un ritmo y estilo propios",
     "El desarrollo no sigue ninguna secuencia predecible",
     "El entorno no influye en el desarrollo individual"
    ],
    "c": 1,
    "e": "El principio de individualidad indica que, aunque existe una secuencia general común de desarrollo (todos los niños gatean antes de andar, por ejemplo), cada niño la recorre con su propio ritmo, estilo e intensidad, fruto de la interacción entre su herencia genética y su ambiente. Así, dos hermanos pueden empezar a hablar con varios meses de diferencia sin que ninguno de los dos se aparte de la normalidad."
   },
   {
    "d": "facil",
    "q": "Los reflejos arcaicos (como el de succión o el de prensión palmar) están presentes:",
    "o": [
     "Solo en la etapa adulta",
     "Ya en el recién nacido, y desaparecen o se transforman con la maduración",
     "Únicamente a partir de los 3 años",
     "Nunca en el ser humano"
    ],
    "c": 1,
    "e": "Los reflejos arcaicos (como el de succión, prensión palmar, Moro o marcha automática) son conductas automáticas e involuntarias presentes ya en el recién nacido; con la maduración del sistema nervioso central se van inhibiendo o transformando en conductas voluntarias. Por ejemplo, el reflejo de prensión palmar (el bebé cierra la mano al tocarle la palma) desaparece hacia los 3-6 meses, cuando empieza a sustituirse por el agarre voluntario e intencional de objetos."
   },
   {
    "d": "media",
    "q": "La interacción entre herencia y ambiente en el desarrollo infantil se explica mejor mediante el concepto de:",
    "o": [
     "Determinismo genético puro",
     "Epigenética, es decir, la modulación de la expresión genética por factores ambientales",
     "Determinismo ambiental puro, sin ninguna influencia genética",
     "Ausencia total de interacción entre ambos factores"
    ],
    "c": 1,
    "e": "La epigenética explica cómo factores ambientales (nutrición, estrés, cuidados recibidos) pueden modular la expresión de la información genética sin alterar el ADN en sí, superando la vieja dicotomía entre herencia y ambiente. Por ejemplo, dos gemelos con la misma dotación genética pueden desarrollar capacidades distintas si uno crece en un entorno con estimulación afectiva y lingüística rica y el otro en un entorno de privación."
   },
   {
    "d": "facil",
    "q": "El peso y la talla del bebé al nacer se consideran indicadores de:",
    "o": [
     "Su futuro rendimiento académico",
     "Su estado de salud y desarrollo físico inicial",
     "Su tipo de personalidad definitiva",
     "Su nivel de inteligencia"
    ],
    "c": 1,
    "e": "El peso y la talla del bebé al nacer son indicadores relevantes de su estado de salud y desarrollo físico inicial (por ejemplo, permiten detectar precozmente un bajo peso al nacer que puede requerir seguimiento), pero no determinan por sí solos otros aspectos evolutivos como la inteligencia o la personalidad futura."
   },
   {
    "d": "dificil",
    "q": "El 'test de Apgar', aplicado al recién nacido, valora fundamentalmente:",
    "o": [
     "El nivel de desarrollo cognitivo del bebé",
     "Signos vitales básicos (frecuencia cardíaca, respiración, tono, reflejos, color) tras el nacimiento",
     "El coeficiente intelectual futuro",
     "El tipo de apego que desarrollará"
    ],
    "c": 1,
    "e": "El test de Apgar valora, al minuto y a los cinco minutos de vida, cinco signos vitales básicos —frecuencia cardíaca, esfuerzo respiratorio, tono muscular, respuesta a estímulos (reflejos) y color de la piel— puntuados de 0 a 2 cada uno, para dar una primera valoración rápida del estado general del recién nacido y detectar si necesita atención inmediata."
   },
   {
    "d": "facil",
    "q": "La etapa de 0 a 6 años se considera especialmente relevante para el desarrollo porque:",
    "o": [
     "No tiene ninguna relevancia especial respecto a otras etapas",
     "Es un periodo de gran plasticidad y rapidez de cambios evolutivos",
     "El cerebro deja de desarrollarse antes de esta etapa",
     "Solo importa el desarrollo físico"
    ],
    "c": 1,
    "e": "Los primeros seis años de vida se caracterizan por una gran plasticidad neuronal (el cerebro forma un enorme número de conexiones sinápticas) y una rapidez de cambios evolutivos que sientan las bases del desarrollo posterior, por lo que se consideran una etapa especialmente sensible para la intervención educativa temprana."
   },
   {
    "d": "media",
    "q": "El concepto de 'resiliencia' aplicado al desarrollo infantil hace referencia a:",
    "o": [
     "La incapacidad de superar situaciones adversas",
     "La capacidad de adaptarse positivamente pese a la exposición a circunstancias adversas",
     "Un trastorno del desarrollo",
     "La ausencia de vínculos afectivos"
    ],
    "c": 1,
    "e": "La resiliencia es la capacidad de un niño de desarrollarse de forma sana y adaptativa a pesar de haber vivido circunstancias adversas (una separación familiar, una enfermedad, una situación de riesgo social), gracias a la presencia de factores protectores como un vínculo afectivo seguro con al menos un adulto de referencia o un entorno escolar estable y acogedor."
   },
   {
    "d": "facil",
    "q": "Las 'necesidades básicas' del niño de 0 a 6 años incluyen, entre otras:",
    "o": [
     "Únicamente necesidades fisiológicas",
     "Necesidades fisiológicas, afectivas, de seguridad, de juego y de socialización",
     "Solo necesidades académicas",
     "Exclusivamente necesidades económicas"
    ],
    "c": 1,
    "e": "El niño de 0 a 6 años tiene necesidades básicas de distinto tipo —fisiológicas (alimentación, sueño), afectivas (vínculo, seguridad emocional), de seguridad, de juego y movimiento, y de socialización— y todas ellas resultan relevantes para un desarrollo integral y equilibrado; atender solo unas y desatender otras (por ejemplo, cubrir lo fisiológico pero no lo afectivo) perjudica el desarrollo global."
   },
   {
    "d": "dificil",
    "q": "El desarrollo prenatal se organiza en periodos; el periodo en el que se forman los principales órganos y sistemas se denomina:",
    "o": [
     "Periodo germinal",
     "Periodo embrionario",
     "Periodo fetal",
     "Periodo neonatal"
    ],
    "c": 1,
    "e": "El desarrollo prenatal se organiza en periodos: germinal (2 primeras semanas), embrionario (semanas 3 a 8 aproximadamente) y fetal (desde la semana 9 hasta el nacimiento). En el periodo embrionario tiene lugar la organogénesis, es decir, la formación de los principales órganos y sistemas, lo que lo convierte en el momento de mayor vulnerabilidad ante sustancias tóxicas, infecciones o carencias nutricionales."
   },
   {
    "d": "facil",
    "q": "El sueño en el bebé y el niño pequeño se considera fundamental porque:",
    "o": [
     "No influye en el desarrollo",
     "Favorece el desarrollo neurológico, la consolidación de la memoria y el crecimiento",
     "Solo tiene función de descanso físico sin relación cognitiva",
     "Debe evitarse durante el día"
    ],
    "c": 1,
    "e": "El sueño cumple funciones esenciales en el desarrollo neurológico, la consolidación de la memoria y los aprendizajes del día, y la secreción de hormona del crecimiento, que se libera principalmente durante el sueño profundo. Por eso una rutina de sueño estable y suficiente (siesta incluida en los primeros años) favorece tanto el aprendizaje como el crecimiento físico."
   },
   {
    "d": "media",
    "q": "Los llamados 'hitos del desarrollo' (sonreír, sentarse, caminar, hablar...) se utilizan en la práctica educativa y sanitaria principalmente para:",
    "o": [
     "Etiquetar de forma rígida a cada niño",
     "Orientar, de forma flexible, el seguimiento del desarrollo y detectar posibles señales de alerta",
     "Comparar y clasificar a los niños de forma competitiva",
     "Sustituir la observación directa del niño"
    ],
    "c": 1,
    "e": "Los hitos del desarrollo (sonreír socialmente, sentarse, caminar, decir las primeras palabras...) ofrecen una referencia orientativa y flexible —no rígida— para el seguimiento del desarrollo, y permiten detectar de forma temprana posibles señales de alerta (por ejemplo, la ausencia de lenguaje a los 2 años) que aconsejen una valoración especializada, sin que ello suponga etiquetar de forma definitiva al niño."
   },
   {
    "d": "facil",
    "q": "Un entorno afectivo estable y unos cuidados sensibles por parte del adulto favorecen fundamentalmente:",
    "o": [
     "Un desarrollo emocional y vincular saludable",
     "Únicamente el desarrollo motor",
     "Exclusivamente el desarrollo del lenguaje",
     "No tienen relación con el desarrollo integral"
    ],
    "c": 0,
    "e": "Un entorno afectivo estable y unos cuidados sensibles por parte del adulto (responder con calidez y prontitud a las necesidades del niño) son la base para un apego seguro y un desarrollo emocional saludable, con efectos positivos que se extienden también a otras áreas del desarrollo, como la exploración autónoma del entorno o la relación con los iguales."
   },
   {
    "d": "dificil",
    "q": "El 'crecimiento discontinuo o por 'estirones'', frente a una visión estrictamente lineal del desarrollo, hace referencia a que:",
    "o": [
     "El desarrollo avanza siempre de forma perfectamente uniforme y constante",
     "En determinados momentos se observan avances más rápidos y visibles, alternados con periodos de mayor estabilidad",
     "El desarrollo se detiene por completo entre hito e hito",
     "Solo el crecimiento físico presenta esta discontinuidad, nunca el cognitivo o social"
    ],
    "c": 1,
    "e": "El desarrollo infantil no avanza de forma perfectamente lineal y uniforme: se alternan periodos de avances más rápidos y visibles ('estirones' evolutivos, tanto físicos como cognitivos o del lenguaje) con otros de mayor estabilidad y consolidación de lo ya adquirido. Por ejemplo, es frecuente observar cómo el vocabulario de un niño se estanca durante semanas y después, en pocos días, incorpora muchas palabras nuevas."
   },
   {
    "d": "facil",
    "q": "¿Qué ley del desarrollo físico describe un crecimiento rápido al inicio que posteriormente se desacelera?",
    "o": [
     "Ley céfalo-caudal",
     "Ley de progresión y amortiguamiento",
     "Ley próximo-distal",
     "Ley de flexores-extensores"
    ],
    "c": 1,
    "e": "La ley de progresión y amortiguamiento describe cómo el crecimiento físico es muy rápido en los primeros meses de vida y va desacelerándose progresivamente con la edad. Por ejemplo, un bebé puede duplicar su peso de nacimiento en los primeros 4-5 meses, un ritmo de crecimiento que nunca volverá a repetirse en el resto de su vida."
   },
   {
    "d": "facil",
    "q": "¿Qué ley del desarrollo motor indica que el control se adquiere desde la cabeza hacia los pies?",
    "o": [
     "Ley próximo-distal",
     "Ley céfalo-caudal",
     "Ley de masa a específico",
     "Ley flexores-extensores"
    ],
    "c": 1,
    "e": "La ley céfalo-caudal indica que el control motor se adquiere en dirección de la cabeza hacia los pies: primero se controla el cuello y la cabeza, después el tronco y los brazos, y por último las piernas. Es la razón por la que un bebé sostiene la cabeza mucho antes de poder sentarse o caminar."
   },
   {
    "d": "facil",
    "q": "¿Qué autor formuló el concepto de zona de desarrollo próximo?",
    "o": [
     "Piaget",
     "Vygotski",
     "Wallon",
     "Bruner"
    ],
    "c": 1,
    "e": "La zona de desarrollo próximo (ZDP) es un concepto central de Vygotski: es la distancia entre lo que un niño puede hacer solo y lo que puede hacer con la ayuda de un adulto o de un compañero más competente. Por ejemplo, un niño que no consigue solo terminar un puzle pero sí lo logra con pequeñas pistas de la maestra está trabajando dentro de su zona de desarrollo próximo, y esa ayuda ajustada se conoce como 'andamiaje'."
   },
   {
    "d": "media",
    "q": "Según Piaget, ¿qué subetapa del período preoperatorio se caracteriza especialmente por el pensamiento simbólico y el egocentrismo?",
    "o": [
     "Operaciones concretas",
     "Preconceptual",
     "Sensoriomotora",
     "Operaciones formales"
    ],
    "c": 1,
    "e": "Dentro del período preoperatorio de Piaget (2-7 años), la subetapa preconceptual (aproximadamente de 2 a 4 años) se caracteriza especialmente por la aparición del pensamiento simbólico (el niño puede usar un palo como si fuera un caballo) y por el egocentrismo intelectual, es decir, la dificultad para ponerse en el punto de vista de otra persona distinto del propio."
   },
   {
    "d": "facil",
    "q": "¿Qué fase lingüística aparece aproximadamente alrededor del primer año y se caracteriza por primeras palabras simples?",
    "o": [
     "Balbuceo inicial",
     "Palabra-frase",
     "Habla telegráfica",
     "Discurso narrativo"
    ],
    "c": 1,
    "e": "La etapa de palabra-frase (holofrase) aparece aproximadamente alrededor del primer año de vida: el niño usa una sola palabra ('agua', 'mamá') para expresar lo que, en el habla adulta, requeriría una frase completa ('quiero agua'), apoyándose en el gesto y la entonación para completar el significado."
   },
   {
    "d": "media",
    "q": "¿Qué factor, junto con la maduración neurológica, resulta especialmente relevante para el desarrollo del lenguaje?",
    "o": [
     "La interacción social",
     "El tamaño corporal",
     "La lateralidad manual",
     "La dentición"
    ],
    "c": 0,
    "e": "Junto con la maduración neurológica, la interacción social y comunicativa con los adultos (hablarle al bebé, responder a sus vocalizaciones, nombrar los objetos que señala) resulta especialmente relevante para el desarrollo del lenguaje: un bebé necesita tanto un cerebro preparado como un entorno lingüístico rico y receptivo para aprender a hablar."
   },
   {
    "d": "media",
    "q": "¿Qué perspectiva entiende el desarrollo como resultado de la interacción entre factores biológicos y ambientales?",
    "o": [
     "Perspectiva exclusivamente innatista",
     "Perspectiva interaccionista",
     "Perspectiva exclusivamente ambientalista",
     "Perspectiva exclusivamente conductista"
    ],
    "c": 1,
    "e": "La perspectiva interaccionista entiende el desarrollo como resultado de la interacción constante entre factores biológicos (maduración, genética) y factores ambientales (estimulación, cultura, relaciones sociales), superando tanto las posturas exclusivamente innatistas como las exclusivamente ambientalistas."
   },
   {
    "d": "facil",
    "q": "¿Qué etapa psicosexual de Freud corresponde al primer año de vida?",
    "o": [
     "Oral",
     "Anal",
     "Fálica",
     "Latencia"
    ],
    "c": 0,
    "e": "En la teoría psicosexual de Freud, el primer año de vida corresponde a la etapa oral, en la que la boca (succión, mordisqueo) es la principal fuente de placer y de exploración del mundo, como se observa cuando un bebé se lleva a la boca prácticamente cualquier objeto que alcanza."
   },
   {
    "d": "media",
    "q": "¿Qué crisis psicosocial de Erikson se asocia principalmente al período aproximado de 18 meses a 3 años?",
    "o": [
     "Confianza frente a desconfianza",
     "Autonomía frente a vergüenza y duda",
     "Iniciativa frente a culpa",
     "Industria frente a inferioridad"
    ],
    "c": 1,
    "e": "Erikson sitúa la crisis psicosocial de autonomía frente a vergüenza y duda aproximadamente entre los 18 meses y los 3 años: el niño busca hacer cosas por sí mismo (vestirse, comer solo, controlar sus esfínteres) y, si se le permite ejercer esa autonomía con apoyo, desarrolla confianza en sus propias capacidades; si se le frena o se le exige demasiado pronto, puede desarrollar vergüenza o duda sobre sí mismo."
   },
   {
    "d": "media",
    "q": "¿Qué efecto describe la influencia de las expectativas del docente sobre el rendimiento del alumnado?",
    "o": [
     "Efecto halo",
     "Efecto Pigmalión",
     "Efecto placebo",
     "Efecto Zeigarnik"
    ],
    "c": 1,
    "e": "El efecto Pigmalión (descrito por Rosenthal y Jacobson) alude a cómo las expectativas del docente sobre un alumno pueden influir, de forma no intencionada, en su rendimiento real: si el docente espera más de un niño (por ejemplo, por creerlo más capaz), tiende a darle más atención y oportunidades, lo que a menudo mejora su desempeño real; lo contrario ocurre con expectativas bajas."
   }
  ]
 },
 {
  "id": "b03",
  "title": "Consecución de las Capacidades Generales de la Etapa mediante los Objetivos y Contenidos de las Áreas del Currículo",
  "questions": [
   {
    "d": "facil",
    "q": "Según el currículo LOMLOE (Decreto 150/2022 en Galicia), las áreas de Educación Infantil son:",
    "o": [
     "Identidad y autonomía personal, Medio físico y social, Comunicación y representación",
     "Crecimiento en armonía, Descubrimiento y exploración del entorno, Comunicación y representación de la realidad",
     "Lengua, Matemáticas y Conocimiento del medio",
     "Psicomotricidad, Lenguaje y Convivencia"
    ],
    "c": 1,
    "e": "El currículo LOMLOE sustituye las tres áreas clásicas (Identidad y autonomía personal, Medio físico y social, Comunicación y representación) por tres nuevas: Crecimiento en armonía, Descubrimiento y exploración del entorno, y Comunicación y representación de la realidad, con un enfoque más competencial y globalizador."
   },
   {
    "d": "facil",
    "q": "Los objetivos generales de la etapa de Educación Infantil se formulan en términos de:",
    "o": [
     "Contenidos a memorizar",
     "Capacidades a desarrollar",
     "Estándares de aprendizaje evaluables",
     "Competencias exclusivamente motrices"
    ],
    "c": 1,
    "e": "A diferencia de otras etapas educativas, los objetivos de Infantil se expresan como capacidades generales a desarrollar (por ejemplo, 'desarrollar la autonomía personal') y no como aprendizajes cerrados y evaluables de forma estandarizada, lo que refleja el carácter no propedéutico y globalizador de la etapa."
   },
   {
    "d": "media",
    "q": "Las áreas del currículo de Infantil se caracterizan por un enfoque:",
    "o": [
     "Disciplinar y compartimentado",
     "Globalizador e interdependiente",
     "Exclusivamente instrumental",
     "Centrado solo en contenidos conceptuales"
    ],
    "c": 1,
    "e": "Las áreas del currículo de Infantil no se trabajan de forma aislada ni por asignaturas separadas; se conciben como ámbitos de experiencia interrelacionados dentro de una perspectiva globalizadora, ya que el niño pequeño no percibe la realidad fragmentada por disciplinas. Por ejemplo, una actividad de cocina en el aula puede trabajar a la vez lenguaje (vocabulario), lógico-matemática (medidas, cantidades) y autonomía personal (lavarse las manos, usar utensilios)."
   },
   {
    "d": "facil",
    "q": "Los contenidos en Educación Infantil se organizan tradicionalmente en tres tipos, según su naturaleza:",
    "o": [
     "Conceptuales, procedimentales y actitudinales",
     "Verbales, no verbales y mixtos",
     "Obligatorios, optativos y libres",
     "Motrices, cognitivos y sociales"
    ],
    "c": 0,
    "e": "La clasificación clásica distingue tres tipos de contenidos según su naturaleza: conceptuales (saber, hechos y conceptos, por ejemplo conocer los colores), procedimentales (saber hacer, como recortar con tijeras) y actitudinales (saber ser/estar, como respetar el turno de palabra). En Infantil los tres tipos se trabajan de forma integrada en una misma actividad."
   },
   {
    "d": "dificil",
    "q": "¿Qué papel cumplen los objetivos de área respecto a los objetivos generales de etapa?",
    "o": [
     "Son independientes entre sí",
     "Concretan y desarrollan las capacidades generales de la etapa en cada ámbito",
     "Sustituyen a los objetivos generales",
     "Solo se aplican en el segundo ciclo"
    ],
    "c": 1,
    "e": "Los objetivos de cada área concretan y desarrollan, desde su ámbito específico, las capacidades generales establecidas para toda la etapa: no son independientes ni sustituyen a los objetivos generales, sino que son su desarrollo particular. Por ejemplo, la capacidad general de 'comunicarse con los demás' se concreta, en el área de Comunicación, en objetivos más específicos sobre lenguaje oral, plástico o musical."
   },
   {
    "d": "media",
    "q": "El principio de que los aprendizajes deben adquirirse a través de la actividad y la experimentación se relaciona con:",
    "o": [
     "Aprendizaje memorístico",
     "Aprendizaje significativo y globalizado",
     "Instrucción directa exclusivamente",
     "Evaluación sumativa"
    ],
    "c": 1,
    "e": "El principio de que los aprendizajes se adquieren a través de la actividad y la experimentación se relaciona con el aprendizaje significativo y globalizado: el niño construye su conocimiento manipulando, explorando y relacionando lo nuevo con lo que ya sabe, en lugar de memorizar información desconectada de su experiencia. Por ejemplo, aprender el concepto de 'flotar' experimentando con objetos en un cubo de agua resulta más significativo que una explicación oral abstracta."
   },
   {
    "d": "facil",
    "q": "La LOMLOE es la ley orgánica que regula actualmente el sistema educativo español y fue aprobada en:",
    "o": [
     "1990",
     "2006",
     "2020",
     "2013"
    ],
    "c": 2,
    "e": "La Ley Orgánica 3/2020 (LOMLOE), que modifica la LOE de 2006 y deroga la LOMCE de 2013, fue aprobada en diciembre de 2020 y es la ley orgánica que regula actualmente el sistema educativo español, incluida la etapa de Educación Infantil."
   },
   {
    "d": "dificil",
    "q": "El área 'Crecimiento en armonía' del currículo LOMLOE de Infantil se centra fundamentalmente en:",
    "o": [
     "El conocimiento del entorno físico y natural exclusivamente",
     "La construcción de la identidad personal, la autonomía y el bienestar emocional y corporal",
     "El lenguaje oral y escrito exclusivamente",
     "Las matemáticas y la lógica"
    ],
    "c": 1,
    "e": "El área 'Crecimiento en armonía' se centra en la construcción de la propia identidad personal, la autonomía (vestirse, comer solo, controlar esfínteres), el conocimiento y control del propio cuerpo, y el bienestar emocional; equivale, actualizada, a la antigua área de Identidad y autonomía personal. Un ejemplo de contenido de esta área sería trabajar el reconocimiento de las propias emociones básicas (alegría, tristeza, enfado) y estrategias sencillas para gestionarlas."
   },
   {
    "d": "media",
    "q": "El área 'Descubrimiento y exploración del entorno' del currículo LOMLOE se relaciona más directamente con la antigua área de:",
    "o": [
     "Identidad y autonomía personal",
     "Medio físico, natural, social y cultural",
     "Comunicación y representación",
     "Ninguna, es un área totalmente nueva sin relación previa"
    ],
    "c": 1,
    "e": "El área 'Descubrimiento y exploración del entorno' recoge y actualiza contenidos relacionados con el entorno físico, natural, social y cultural, la iniciación lógico-matemática y la curiosidad científica, y se corresponde con la antigua área de Medio físico, natural, social y cultural. Por ejemplo, observar el crecimiento de una planta sembrada en el aula o clasificar objetos por tamaño son actividades propias de esta área."
   },
   {
    "d": "facil",
    "q": "El Decreto 150/2022 es la norma que regula el currículo de Educación Infantil en:",
    "o": [
     "Toda España por igual",
     "La Comunidad Autónoma de Galicia",
     "Exclusivamente Cataluña",
     "El ámbito universitario"
    ],
    "c": 1,
    "e": "El Decreto 150/2022, de 8 de septiembre, es la norma autonómica que desarrolla el currículo de Educación Infantil en el ámbito de la Comunidad Autónoma de Galicia, en aplicación de la LOMLOE y del Real Decreto 95/2022 estatal."
   },
   {
    "d": "dificil",
    "q": "Las 'competencias clave' introducidas por la LOMLOE en el currículo, aunque se desarrollan de forma más explícita en etapas posteriores, en Infantil se trabajan de forma:",
    "o": [
     "Idéntica y con la misma terminología que en Primaria",
     "Adaptada, como precursoras, integradas en las capacidades y objetivos de la etapa",
     "No se contemplan en absoluto en Infantil",
     "Exclusivamente a través de exámenes"
    ],
    "c": 1,
    "e": "Aunque las competencias clave (como la competencia en comunicación lingüística o la competencia matemática) se desarrollan de forma más explícita y formal a partir de Educación Primaria, en Infantil se sientan sus bases de forma adaptada a la edad, integradas de manera implícita en los objetivos y capacidades de la etapa. Por ejemplo, cantar canciones y contar cuentos sienta las bases de la futura competencia en comunicación lingüística, sin trabajarla aún con esa etiqueta formal."
   },
   {
    "d": "facil",
    "q": "Los principios pedagógicos generales de la etapa de Infantil se recogen, dentro del currículo, en un apartado específico denominado habitualmente:",
    "o": [
     "Principios metodológicos y pedagógicos",
     "Anexo de evaluación externa",
     "Reglamento de régimen interno",
     "Programación de aula"
    ],
    "c": 0,
    "e": "El currículo recoge, dentro de su articulado, un apartado específico de principios pedagógicos y metodológicos generales (por ejemplo, sobre el juego, el enfoque globalizador o la atención a la diversidad) que orientan la práctica educativa a lo largo de toda la etapa, más allá de los objetivos y contenidos concretos de cada área."
   },
   {
    "d": "media",
    "q": "La 'transversalidad' de determinados contenidos en el currículo de Infantil (como la educación en valores o la igualdad) implica que:",
    "o": [
     "Se trabajan en un área exclusiva y separada del resto",
     "Deben impregnar el conjunto de áreas y de la práctica educativa diaria",
     "No forman parte del currículo oficial",
     "Solo se trabajan en fechas señaladas del calendario escolar"
    ],
    "c": 1,
    "e": "La transversalidad de determinados contenidos (educación en valores, igualdad de género, educación para la salud) implica que no se limitan a un área ni a un momento concreto del calendario escolar, sino que deben impregnar el conjunto de las áreas y de la práctica educativa diaria. Por ejemplo, trabajar la igualdad entre niños y niñas no se reduce a una sesión puntual el 8 de marzo, sino que debe reflejarse en el reparto de juegos, responsabilidades y materiales durante todo el curso."
   },
   {
    "d": "facil",
    "q": "El currículo de Educación Infantil, en comparación con el de Educación Primaria, se caracteriza por ser:",
    "o": [
     "Mucho más cerrado y rígido",
     "Más abierto y flexible, adaptable al contexto de cada centro",
     "Idéntico en su estructura y planteamiento",
     "Inexistente, ya que no hay currículo oficial"
    ],
    "c": 1,
    "e": "El currículo de Educación Infantil es más abierto y flexible que el de etapas posteriores, dejando un amplio margen de concreción a cada centro y docente para adaptarlo a su contexto, en contraste con currículos más cerrados y con estándares más definidos de otras etapas educativas."
   },
   {
    "d": "dificil",
    "q": "La 'autonomía pedagógica de los centros', principio recogido en la normativa educativa, permite que cada centro:",
    "o": [
     "Ignore por completo el currículo oficial",
     "Concrete y adapte el currículo oficial a su contexto a través de sus documentos institucionales",
     "Elabore un currículo totalmente distinto sin ninguna referencia oficial",
     "Delegue toda la programación en las familias"
    ],
    "c": 1,
    "e": "La autonomía pedagógica de los centros permite a cada uno concretar y adaptar el currículo oficial —siempre dentro del marco normativo vigente— a través de sus documentos institucionales, como el Proyecto Educativo de Centro o las programaciones didácticas, adaptándolo a las características de su alumnado y de su entorno."
   },
   {
    "d": "facil",
    "q": "Los objetivos de la etapa de Infantil deben contribuir a que niños y niñas desarrollen, entre otras, capacidades relacionadas con:",
    "o": [
     "Exclusivamente contenidos académicos formales",
     "El conocimiento de su propio cuerpo, la autonomía y las relaciones con los demás",
     "Solo la lectoescritura formal",
     "Únicamente el cálculo matemático"
    ],
    "c": 1,
    "e": "Los objetivos de la etapa de Infantil abarcan capacidades relacionadas con el conocimiento de sí mismo y del propio cuerpo, la autonomía personal, las relaciones con los demás, el descubrimiento del entorno y el desarrollo de las capacidades de comunicación, y no se centran en contenidos académicos formales como la lectoescritura o el cálculo."
   },
   {
    "d": "media",
    "q": "La secuenciación de contenidos dentro de una programación didáctica en Infantil debe atender fundamentalmente a:",
    "o": [
     "El orden alfabético de los contenidos",
     "Criterios de complejidad creciente y coherencia con el desarrollo evolutivo del alumnado",
     "Un orden aleatorio sin ningún criterio",
     "La disponibilidad de materiales del centro exclusivamente"
    ],
    "c": 1,
    "e": "La secuenciación de contenidos dentro de una programación didáctica debe seguir un criterio de complejidad creciente y ser coherente con las características evolutivas y los aprendizajes previos del alumnado, y no responder a criterios arbitrarios como el orden alfabético o la mera disponibilidad de materiales. Por ejemplo, antes de trabajar la suma con niños de 5 años conviene haber consolidado la comprensión del conteo y la cantidad."
   },
   {
    "d": "facil",
    "q": "El área de 'Comunicación y representación de la realidad' del currículo LOMLOE incluye, entre otros, contenidos relacionados con:",
    "o": [
     "El lenguaje verbal, corporal, plástico, musical y las TIC",
     "Únicamente el lenguaje matemático",
     "Solo la psicomotricidad gruesa",
     "Exclusivamente la educación para la salud"
    ],
    "c": 0,
    "e": "El área de 'Comunicación y representación de la realidad' integra los distintos lenguajes de expresión y comunicación: verbal (oral y aproximación a la escritura), corporal, plástico, musical, audiovisual y las tecnologías de la información y la comunicación (TIC), y no se limita a un único lenguaje."
   },
   {
    "d": "dificil",
    "q": "El 'currículo oculto' en Educación Infantil hace referencia a:",
    "o": [
     "Los contenidos oficiales publicados en el diario oficial",
     "Aprendizajes y valores que se transmiten de forma implícita a través de la organización y dinámica del aula",
     "Un documento secreto solo accesible a la inspección educativa",
     "Los contenidos que se evalúan mediante examen"
    ],
    "c": 1,
    "e": "El 'currículo oculto' se refiere a los aprendizajes y valores que se transmiten de forma implícita, no explícita, a través de la organización del espacio, las normas de convivencia, las actitudes del docente y la dinámica cotidiana del aula, más allá de lo recogido en el currículo oficial. Por ejemplo, si sistemáticamente se eligen niños para tareas de fuerza y niñas para tareas de orden, se transmite un currículo oculto de roles de género aunque nadie lo diga explícitamente."
   },
   {
    "d": "facil",
    "q": "Las áreas de conocimiento en Educación Infantil se relacionan entre sí de forma:",
    "o": [
     "Totalmente independiente y sin conexión",
     "Estrecha e interrelacionada, dado el enfoque globalizador de la etapa",
     "Jerárquica, siendo unas más importantes que otras",
     "Aleatoria, sin ningún criterio pedagógico"
    ],
    "c": 1,
    "e": "Dado el enfoque globalizador de la etapa, las áreas de conocimiento se relacionan entre sí de forma estrecha e interrelacionada, ya que el niño percibe y aprende sobre la realidad de manera global, no fragmentada en disciplinas independientes ni jerarquizadas entre sí."
   },
   {
    "d": "media",
    "q": "¿Cómo se organizan las enseñanzas de Educación Infantil en Galicia según la Orden de 30 de mayo de 2023?",
    "o": [
     "Por asignaturas independientes",
     "En áreas correspondientes a ámbitos propios de la experiencia y del desarrollo infantil",
     "Por materias instrumentales",
     "Por niveles de competencia"
    ],
    "c": 1,
    "e": "Según la Orden de 30 de mayo de 2023, las enseñanzas de Educación Infantil en Galicia se organizan en áreas correspondientes a ámbitos propios de la experiencia y del desarrollo infantil (y no por asignaturas independientes ni materias instrumentales al estilo de etapas posteriores), en coherencia con el enfoque globalizador del Decreto 150/2022."
   },
   {
    "d": "facil",
    "q": "¿Qué norma estatal establece la ordenación y las enseñanzas mínimas de Educación Infantil?",
    "o": [
     "Real Decreto 95/2022",
     "Decreto 150/2022",
     "Orden de 30 de mayo de 2023",
     "Ley 39/2015"
    ],
    "c": 0,
    "e": "El Real Decreto 95/2022, de 1 de febrero, establece a nivel estatal la ordenación y las enseñanzas mínimas de Educación Infantil, marco básico que cada comunidad autónoma (en Galicia, mediante el Decreto 150/2022) debe desarrollar y completar."
   },
   {
    "d": "facil",
    "q": "¿Qué norma gallega desarrolla el Decreto 150/2022 y regula la evaluación de Educación Infantil?",
    "o": [
     "Orden de 30 de mayo de 2023",
     "Orden de 25 de junio de 2009",
     "Decreto 229/2011",
     "Real Decreto 95/2022"
    ],
    "c": 0,
    "e": "La Orden de 30 de mayo de 2023 desarrolla el Decreto 150/2022 y regula, entre otros aspectos, la evaluación de la etapa de Educación Infantil en Galicia, concretando técnicas, instrumentos y momentos de evaluación."
   },
   {
    "d": "facil",
    "q": "¿Cuál es el mínimo semanal de actividades escolares en el segundo ciclo de Educación Infantil en Galicia?",
    "o": [
     "20 horas",
     "25 horas",
     "30 horas",
     "35 horas"
    ],
    "c": 1,
    "e": "La Orden de 30 de mayo de 2023 establece un mínimo de 25 horas semanales de actividades escolares en el segundo ciclo de Educación Infantil en Galicia, sin perjuicio de que los centros puedan ampliarlas dentro de su horario general."
   },
   {
    "d": "media",
    "q": "¿Qué profesional es responsable de la atención y seguimiento personalizado del alumnado?",
    "o": [
     "La persona tutora",
     "El director exclusivamente",
     "El jefe de estudios exclusivamente",
     "La inspección educativa"
    ],
    "c": 0,
    "e": "La persona tutora tiene, entre sus funciones, la atención y el seguimiento personalizado del alumnado de su grupo, siendo el referente principal para la coordinación con las familias y con el resto del equipo docente, sin que esta función corresponda de forma exclusiva a la dirección o a la jefatura de estudios."
   },
   {
    "d": "media",
    "q": "¿Cómo debe garantizarse la continuidad del proceso educativo y la transición entre etapas?",
    "o": [
     "Mediante coordinación e intercambio de información entre los profesionales",
     "Sin coordinación para favorecer la autonomía de cada etapa",
     "Únicamente mediante un examen final",
     "Solo mediante reuniones con las familias"
    ],
    "c": 0,
    "e": "La continuidad del proceso educativo y la transición entre etapas (por ejemplo, entre el primer y el segundo ciclo de Infantil, o entre Infantil y Primaria) exige coordinación y transmisión de información relevante entre los profesionales implicados, más allá de una simple reunión puntual con las familias o de una prueba final."
   },
   {
    "d": "facil",
    "q": "¿En qué debe basarse la metodología didáctica de Educación Infantil según la normativa gallega?",
    "o": [
     "En clases magistrales",
     "En experiencias de aprendizaje significativas y en el juego",
     "En libros de texto como recurso exclusivo",
     "En exámenes periódicos"
    ],
    "c": 1,
    "e": "Según la normativa gallega, la metodología didáctica de Educación Infantil debe basarse en experiencias de aprendizaje significativas y en el juego como actividad propia de la etapa, y no en clases magistrales, libros de texto como recurso exclusivo o exámenes periódicos, poco adecuados a esta edad."
   },
   {
    "d": "media",
    "q": "¿Cuál es la principal técnica de evaluación señalada por la normativa gallega para Educación Infantil?",
    "o": [
     "Observación directa y sistemática",
     "Examen escrito",
     "Prueba estandarizada única",
     "Autoevaluación numérica"
    ],
    "c": 0,
    "e": "La observación directa y sistemática constituye la principal técnica de evaluación señalada por la normativa gallega para Educación Infantil, complementada por otras técnicas e instrumentos (entrevistas con la familia, análisis de producciones del alumnado...), en lugar de exámenes escritos o pruebas estandarizadas."
   }
  ]
 },
 {
  "id": "b04",
  "title": "Desarrollo Cognitivo hasta los Seis Años",
  "questions": [
   {
    "d": "facil",
    "q": "Según Piaget, el niño de 0 a 6 años atraviesa, sucesivamente, los estadios:",
    "o": [
     "Sensoriomotor y preoperacional",
     "Operaciones concretas y formales",
     "Solo el estadio preoperacional",
     "Sensoriomotor y operaciones formales"
    ],
    "c": 0,
    "e": "Piaget describe cuatro estadios de desarrollo cognitivo, de los cuales el niño de 0 a 6 años atraviesa los dos primeros: el sensoriomotor (0-2 años), en el que conoce el mundo a través de los sentidos y la acción motriz, y el preoperacional (2-6/7 años), en el que aparece el pensamiento simbólico pero aún sin operaciones lógicas; las operaciones concretas (7-11) y formales (a partir de 11-12) llegan después."
   },
   {
    "d": "media",
    "q": "El 'egocentrismo intelectual' propio del pensamiento preoperacional se refiere a:",
    "o": [
     "El niño no puede jugar con otros",
     "La dificultad para adoptar el punto de vista de otra persona",
     "Un trastorno de conducta",
     "La incapacidad de hablar"
    ],
    "c": 1,
    "e": "El egocentrismo intelectual (que no debe confundirse con el egoísmo, que es un rasgo de carácter) es la dificultad del niño preoperacional para descentrarse de su propio punto de vista y considerar el de otra persona. Por ejemplo, un niño de 4 años puede describir a alguien por teléfono señalando un objeto con la mano, como si su interlocutor pudiera ver el gesto, sin darse cuenta de que no comparte su misma perspectiva visual."
   },
   {
    "d": "facil",
    "q": "La noción de 'permanencia del objeto' se adquiere durante el estadio:",
    "o": [
     "Preoperacional",
     "Sensoriomotor",
     "Operaciones concretas",
     "Operaciones formales"
    ],
    "c": 1,
    "e": "La permanencia del objeto (saber que un objeto sigue existiendo aunque desaparezca de la vista) se consolida durante el periodo sensoriomotor, en torno a los 8-12 meses. Antes de adquirirla, un bebé deja de buscar un juguete si se tapa con una manta; después, lo busca activamente porque sabe que sigue estando ahí aunque no lo vea."
   },
   {
    "d": "facil",
    "q": "La 'zona de desarrollo próximo' (ZDP) es un concepto clave de:",
    "o": [
     "Jean Piaget",
     "Lev Vygotski",
     "B.F. Skinner",
     "Sigmund Freud"
    ],
    "c": 1,
    "e": "Vygotski definió la zona de desarrollo próximo (ZDP) como la distancia entre lo que el niño puede hacer de forma autónoma y lo que puede lograr con la ayuda de un adulto o de un compañero más competente. Por ejemplo, un niño que no logra abrocharse los botones solo pero sí con pequeñas indicaciones de la maestra ('empieza por el de arriba') está actuando dentro de su ZDP."
   },
   {
    "d": "dificil",
    "q": "El fenómeno de 'no conservación' (creer que hay más líquido en un vaso alto y estrecho que en uno bajo y ancho) es típico de:",
    "o": [
     "El estadio sensoriomotor",
     "El pensamiento preoperacional",
     "Las operaciones concretas",
     "Las operaciones formales"
    ],
    "c": 1,
    "e": "La falta de conservación de cantidad, masa o número (creer que hay más líquido en un vaso alto y estrecho que en uno bajo y ancho, aunque la cantidad sea la misma) es característica del pensamiento preoperacional, y se explica por el centramiento (el niño se fija solo en la altura del líquido) y la irreversibilidad de su pensamiento (no puede imaginar mentalmente el proceso inverso de trasvasar el líquido de vuelta)."
   },
   {
    "d": "media",
    "q": "El concepto de 'andamiaje' (scaffolding), ligado a la ZDP de Vygotski, fue desarrollado por:",
    "o": [
     "Jerome Bruner",
     "Jean Piaget",
     "Ovide Decroly",
     "Henri Wallon"
    ],
    "c": 0,
    "e": "Bruner acuñó el término 'andamiaje' (scaffolding) para describir el apoyo ajustado que un adulto ofrece al niño dentro de su zona de desarrollo próximo, retirándolo progresivamente a medida que el niño gana autonomía, igual que un andamio de construcción se va desmontando cuando el edificio ya se sostiene solo. Por ejemplo, al enseñar a hacer un puzle, el adulto primero señala dónde va cada pieza, después solo da pistas verbales, y finalmente el niño lo resuelve sin ayuda."
   },
   {
    "d": "facil",
    "q": "Los seis subestadios del periodo sensoriomotor descritos por Piaget abarcan desde el nacimiento hasta aproximadamente:",
    "o": [
     "Los 6 meses",
     "Los 2 años",
     "Los 4 años",
     "Los 7 años"
    ],
    "c": 1,
    "e": "El estadio sensoriomotor de Piaget, dividido en seis subestadios (desde los reflejos innatos hasta la combinación mental de esquemas), se extiende desde el nacimiento hasta aproximadamente los 2 años, momento en que da paso al estadio preoperacional con la consolidación de la función simbólica."
   },
   {
    "d": "dificil",
    "q": "La 'función simbólica', que aparece hacia el final del periodo sensoriomotor, permite al niño:",
    "o": [
     "Representar mentalmente objetos, personas o situaciones ausentes",
     "Solo reaccionar a estímulos presentes",
     "Realizar operaciones matemáticas abstractas",
     "Desarrollar el habla telegráfica exclusivamente"
    ],
    "c": 0,
    "e": "La función simbólica, que aparece hacia el final del periodo sensoriomotor, es la capacidad de representar mentalmente objetos, personas o situaciones ausentes mediante significantes como imágenes mentales, el lenguaje, el juego simbólico o la imitación diferida. Por ejemplo, cuando un niño usa una caja de cartón para representar un coche, está utilizando esta capacidad de representación mental."
   },
   {
    "d": "media",
    "q": "El 'animismo infantil', típico del pensamiento preoperacional, consiste en:",
    "o": [
     "Atribuir vida y conciencia a objetos inanimados",
     "La incapacidad de moverse con soltura",
     "Un trastorno emocional grave",
     "La imitación exacta de animales"
    ],
    "c": 0,
    "e": "El animismo infantil es la tendencia del pensamiento preoperacional a atribuir cualidades de vida, voluntad o conciencia a objetos y fenómenos inanimados. Es habitual, por ejemplo, que un niño de 4 años diga que 'la luna le sigue' cuando pasea de noche, o que regañe a una silla que le ha hecho tropezar como si esta hubiera actuado con intención."
   },
   {
    "d": "facil",
    "q": "La memoria a corto plazo en la etapa infantil se caracteriza, en comparación con la de un adulto, por ser:",
    "o": [
     "Idéntica en capacidad",
     "Más limitada en capacidad y duración",
     "Infinitamente mayor",
     "Inexistente"
    ],
    "c": 1,
    "e": "La memoria a corto plazo en la etapa infantil tiene una capacidad y duración más limitadas que en la edad adulta, y va aumentando progresivamente con la maduración cerebral y la experiencia. Por ejemplo, un niño de 4 años puede recordar y repetir correctamente una secuencia de 2 o 3 números, mientras que un adulto suele retener 7 sin dificultad."
   },
   {
    "d": "dificil",
    "q": "El 'juego simbólico' (jugar a 'como si'), que se desarrolla especialmente entre los 2 y 6 años, es una manifestación directa de:",
    "o": [
     "El pensamiento operacional concreto",
     "La función simbólica descrita por Piaget",
     "El estadio sensoriomotor exclusivamente",
     "Un trastorno del desarrollo si se prolonga más allá del primer año"
    ],
    "c": 1,
    "e": "El juego simbólico (jugar a 'como si', por ejemplo dar de comer a una muñeca con una cuchara imaginaria), que se desarrolla especialmente entre los 2 y los 6 años, es una de las principales manifestaciones de la función simbólica descrita por Piaget, junto con el lenguaje, el dibujo y la imitación diferida."
   },
   {
    "d": "facil",
    "q": "La atención en la etapa infantil se caracteriza, en comparación con etapas posteriores, por ser:",
    "o": [
     "Muy sostenida y estable durante largos periodos",
     "Más dispersa y de menor duración, aunque mejora progresivamente",
     "Idéntica a la del adulto desde el nacimiento",
     "Inexistente hasta los 6 años"
    ],
    "c": 1,
    "e": "La capacidad de atención sostenida en la primera infancia es más dispersa y de menor duración que en etapas posteriores, aunque mejora progresivamente con la maduración y la práctica. Por eso las actividades y explicaciones en el aula de Infantil se planifican en periodos cortos y muy dinámicos, adaptados a esta capacidad de atención todavía limitada."
   },
   {
    "d": "media",
    "q": "El concepto de 'internalización' en la teoría de Vygotski hace referencia al proceso mediante el cual:",
    "o": [
     "Los procesos interpsicológicos (sociales) se transforman en procesos intrapsicológicos (individuales)",
     "El niño memoriza contenidos escolares",
     "El adulto controla completamente el pensamiento del niño",
     "Se elimina cualquier influencia social del pensamiento"
    ],
    "c": 0,
    "e": "Para Vygotski, el desarrollo cognitivo implica un proceso de internalización: aquello que primero se realiza en interacción social, con la ayuda de otra persona (proceso interpsicológico), pasa progresivamente a convertirse en una función mental propia del individuo (proceso intrapsicológico). Por ejemplo, el niño primero cuenta con los dedos ayudado por el adulto, y más adelante cuenta mentalmente por sí solo."
   },
   {
    "d": "facil",
    "q": "La curiosidad exploratoria y la pregunta '¿por qué?' constante, muy características entre los 3 y 5 años, reflejan:",
    "o": [
     "Un problema de conducta",
     "El desarrollo típico del pensamiento y la necesidad de comprender el entorno",
     "La ausencia de desarrollo cognitivo",
     "Un signo de trastorno del lenguaje"
    ],
    "c": 1,
    "e": "La curiosidad exploratoria y las constantes preguntas del tipo '¿por qué?', muy características entre los 3 y los 5 años, reflejan el desarrollo típico del pensamiento y la necesidad infantil de comprender y dar sentido al entorno que le rodea, y no deben interpretarse como un problema de conducta ni de lenguaje."
   },
   {
    "d": "dificil",
    "q": "El razonamiento 'transductivo', típico del pensamiento preoperacional, consiste en:",
    "o": [
     "Razonar de lo general a lo particular (deducción)",
     "Razonar de lo particular a lo general (inducción)",
     "Establecer relaciones causales entre hechos particulares sin lógica formal",
     "Aplicar operaciones matemáticas formales"
    ],
    "c": 2,
    "e": "El razonamiento transductivo, típico del pensamiento preoperacional, va de lo particular a lo particular, estableciendo relaciones causales (a veces erróneas) entre hechos concretos, sin la lógica formal de la inducción o la deducción. Un ejemplo clásico es el de un niño que dice 'no he dormido la siesta, por eso todavía no es de noche', relacionando dos hechos concretos por su proximidad temporal, sin una verdadera relación de causa-efecto."
   },
   {
    "d": "facil",
    "q": "El desarrollo de la 'atención conjunta' (mirar hacia donde mira o señala el adulto) es un hito relevante que suele aparecer en torno a:",
    "o": [
     "Los 9-12 meses",
     "Los 4 años",
     "Los 6 años",
     "No aparece en la etapa infantil"
    ],
    "c": 0,
    "e": "La atención conjunta (mirar hacia donde mira o señala el adulto, o alternar la mirada entre un objeto y una persona para compartir el interés) es un hito relevante que suele emerger entre los 9 y los 12 meses, y se considera precursora de la comunicación intencional y del desarrollo del lenguaje."
   },
   {
    "d": "media",
    "q": "La imitación diferida, es decir, reproducir una conducta observada tiempo después de haberla presenciado, requiere:",
    "o": [
     "Únicamente reflejos motores básicos",
     "La capacidad de representación mental, propia de la función simbólica",
     "Un desarrollo del lenguaje ya completo",
     "No tiene relación con el desarrollo cognitivo"
    ],
    "c": 1,
    "e": "La imitación diferida —reproducir una conducta observada tiempo después de haberla presenciado, sin el modelo presente— requiere la capacidad de representación mental propia de la función simbólica, ya que el niño debe haber almacenado internamente esa conducta. Por ejemplo, un niño que ha visto a su madre hablar por teléfono puede, horas después, coger un objeto y 'hablar' con él imitando esa acción."
   },
   {
    "d": "facil",
    "q": "El pensamiento del niño en la etapa preoperacional se apoya fundamentalmente en:",
    "o": [
     "La lógica formal abstracta",
     "La percepción inmediata y la experiencia concreta",
     "Exclusivamente el razonamiento matemático",
     "El pensamiento hipotético-deductivo"
    ],
    "c": 1,
    "e": "El pensamiento del niño en la etapa preoperacional se apoya fundamentalmente en la percepción inmediata y la experiencia concreta, no en la lógica formal abstracta, lo que explica errores característicos como la falta de conservación: el niño se guía por lo que ve (un vaso más alto 'parece' tener más líquido) en lugar de razonar sobre la cantidad real."
   },
   {
    "d": "dificil",
    "q": "La 'teoría de los estadios' de Piaget ha sido matizada por investigaciones posteriores, entre otras críticas, en el sentido de que:",
    "o": [
     "Los estadios son totalmente rígidos e inmodificables en todos los niños",
     "El desarrollo cognitivo puede ser más gradual y menos ligado a edades fijas de lo que Piaget planteaba, con capacidades tempranas subestimadas",
     "Piaget sobreestimó las capacidades de los bebés",
     "No existe ninguna evidencia empírica que respalde la teoría"
    ],
    "c": 1,
    "e": "Investigaciones posteriores a Piaget (por ejemplo, con métodos de mirada preferente en bebés) han mostrado que algunas capacidades cognitivas, como cierta comprensión temprana de la permanencia del objeto o de pequeñas cantidades, aparecen antes de lo que Piaget planteaba, lo que ha llevado a matizar la rigidez de sus estadios, sin invalidar por ello el conjunto de su teoría."
   },
   {
    "d": "facil",
    "q": "La 'metacognición', es decir, la reflexión sobre los propios procesos de pensamiento, en la etapa infantil se encuentra:",
    "o": [
     "Plenamente desarrollada desde el nacimiento",
     "En un estado muy inicial y limitado, desarrollándose de forma más clara en etapas posteriores",
     "Totalmente ausente hasta la edad adulta",
     "Solo presente en niños con altas capacidades"
    ],
    "c": 1,
    "e": "La metacognición (la capacidad de reflexionar sobre los propios procesos de pensamiento, como saber si se ha entendido algo o qué estrategia usar para recordar) se encuentra en un estado muy inicial y limitado durante la etapa infantil, y se desarrolla de forma más clara y consciente en etapas educativas posteriores, como Primaria."
   }
  ]
 },
 {
  "id": "b05",
  "title": "Educación Para la Salud",
  "questions": [
   {
    "d": "facil",
    "q": "La Educación para la Salud en Infantil se aborda fundamentalmente como:",
    "o": [
     "Un área independiente con horario propio",
     "Un contenido transversal presente en toda la práctica educativa",
     "Una actividad exclusiva del área de psicomotricidad",
     "Responsabilidad exclusiva de las familias"
    ],
    "c": 1,
    "e": "La Educación para la Salud no se trabaja como un área independiente con horario propio, sino como un contenido transversal que impregna hábitos de higiene, alimentación, descanso y autonomía a lo largo de toda la jornada escolar. Por ejemplo, se trabaja tanto en el momento del desayuno como en el aseo o en la actividad de psicomotricidad, no en una sesión aislada."
   },
   {
    "d": "facil",
    "q": "¿Cuál de los siguientes es un hábito de autonomía personal relacionado con la salud que se trabaja en Infantil?",
    "o": [
     "El lavado de manos y el control de esfínteres",
     "La resolución de operaciones matemáticas",
     "La lectoescritura formal",
     "El aprendizaje de un segundo idioma"
    ],
    "c": 0,
    "e": "El control de esfínteres, el lavado de manos, el cepillado de dientes o vestirse solo son hábitos de autonomía personal directamente relacionados con la salud que se trabajan de forma sistemática y cotidiana en Infantil, a diferencia de contenidos académicos como la lectoescritura o el cálculo, propios de otros bloques del currículo."
   },
   {
    "d": "facil",
    "q": "Según la OMS, la salud se define como:",
    "o": [
     "La ausencia de enfermedad únicamente",
     "Un estado de completo bienestar físico, mental y social",
     "Un estado exclusivamente físico",
     "La capacidad de trabajar sin descanso"
    ],
    "c": 1,
    "e": "La OMS define la salud de forma integral, como un estado de completo bienestar físico, mental y social, y no meramente como la ausencia de enfermedad. Esta definición amplia justifica que en Infantil se trabaje tanto la salud física (alimentación, higiene) como la emocional (gestión de emociones) y la social (relaciones con los iguales)."
   },
   {
    "d": "media",
    "q": "El calendario de vacunación infantil en el marco escolar es responsabilidad principal de:",
    "o": [
     "El profesorado de Educación Infantil",
     "Las familias y el sistema sanitario, con función de apoyo del centro",
     "El equipo directivo del centro exclusivamente",
     "La inspección educativa"
    ],
    "c": 1,
    "e": "El seguimiento del calendario de vacunación corresponde a las familias y al sistema sanitario; el centro educativo no gestiona ni administra vacunas, pero colabora fomentando hábitos de salud y, en ocasiones, solicitando la cartilla de vacunación como parte de la documentación del alumnado."
   },
   {
    "d": "dificil",
    "q": "¿Qué papel juega la siesta o el momento de descanso en las aulas de primer ciclo de Infantil?",
    "o": [
     "Es prescindible y no influye en el desarrollo",
     "Responde a necesidades fisiológicas y favorece el desarrollo neurológico",
     "Solo tiene función de control disciplinario",
     "Debe eliminarse a partir del primer año"
    ],
    "c": 1,
    "e": "El descanso (siesta en el primer ciclo, momentos de relajación en el segundo) responde a necesidades fisiológicas reales, no a un mero control disciplinario, y es fundamental para el desarrollo físico y neurológico del niño pequeño, ya que buena parte de la consolidación de aprendizajes y la secreción de hormona de crecimiento ocurre durante el sueño."
   },
   {
    "d": "facil",
    "q": "La prevención de accidentes infantiles en el aula se relaciona con el principio de:",
    "o": [
     "Seguridad y bienestar como condición para el aprendizaje",
     "Aprendizaje memorístico",
     "Evaluación sumativa",
     "Autonomía sin supervisión adulta"
    ],
    "c": 0,
    "e": "Un entorno seguro es condición previa para que se produzcan aprendizajes: si un niño está preocupado por un riesgo físico o se siente inseguro, difícilmente puede concentrarse en explorar y aprender. Por eso la prevención de accidentes (revisar el mobiliario, cubrir enchufes, retirar objetos pequeños con niños que aún se los llevan a la boca) forma parte esencial de la educación para la salud."
   },
   {
    "d": "media",
    "q": "El botiquín escolar y los protocolos de primeros auxilios en el centro de Infantil deben:",
    "o": [
     "No existir, ya que no corresponde al ámbito escolar",
     "Estar disponibles, actualizados y conocidos por el personal del centro",
     "Ser gestionados exclusivamente por las familias",
     "Utilizarse solo en caso de accidentes graves"
    ],
    "c": 1,
    "e": "Todo centro educativo debe disponer de un botiquín adecuado, actualizado y accesible, así como de protocolos de primeros auxilios conocidos por todo el personal (no solo por quien atiende directamente al niño en un momento dado), como parte básica de la prevención de riesgos en el aula."
   },
   {
    "d": "facil",
    "q": "El ejercicio físico y el juego motor diario en Infantil contribuyen fundamentalmente a:",
    "o": [
     "Un desarrollo físico, motor y de salud global adecuado",
     "Únicamente el desarrollo del lenguaje",
     "Ningún beneficio relevante para la salud",
     "Solo el entretenimiento sin más función"
    ],
    "c": 0,
    "e": "El movimiento y el juego motor diario son esenciales para un desarrollo físico, motor y de salud global adecuado: favorecen el desarrollo cardiovascular, muscular y óseo, además de contribuir al bienestar emocional y a la calidad del sueño, mucho más allá del mero entretenimiento."
   },
   {
    "d": "dificil",
    "q": "La detección temprana de problemas de salud (visuales, auditivos, de desarrollo) en el aula de Infantil corresponde, en primer lugar, a:",
    "o": [
     "Nadie, ya que no es función educativa",
     "La observación del profesorado, que debe derivar a las familias y a los servicios sanitarios/de orientación correspondientes",
     "Exclusivamente a la familia sin ninguna intervención del centro",
     "Solo a especialistas médicos externos sin relación con el aula"
    ],
    "c": 1,
    "e": "La detección temprana de posibles problemas de salud (visuales, auditivos, de desarrollo) corresponde en primer lugar a la observación diaria del profesorado, que debe derivar cualquier indicio a la familia y a los servicios sanitarios o de orientación correspondientes, sin diagnosticar por sí mismo. Por ejemplo, si un docente observa que un niño se acerca mucho a los libros para ver las imágenes, debe comunicarlo a la familia para que valore una revisión visual."
   },
   {
    "d": "facil",
    "q": "La higiene postural (posturas adecuadas al sentarse, cargar objetos, etc.) en Infantil forma parte de:",
    "o": [
     "Un contenido irrelevante en esta etapa",
     "La educación para la salud y el cuidado del propio cuerpo",
     "Exclusivamente la expresión plástica",
     "El área de matemáticas"
    ],
    "c": 1,
    "e": "La higiene postural (sentarse correctamente, no cargar peso excesivo, adaptar el mobiliario a la talla del niño) forma parte, adaptada a la edad, del cuidado del propio cuerpo y de la educación para la salud desde edades tempranas, y no es un contenido exclusivo de etapas posteriores."
   },
   {
    "d": "media",
    "q": "El concepto de 'promoción de la salud', más amplio que la mera prevención de enfermedades, implica en la escuela infantil:",
    "o": [
     "Actuar únicamente cuando aparece una enfermedad",
     "Generar entornos y hábitos que favorezcan activamente el bienestar integral, no solo evitar la enfermedad",
     "No tiene ninguna aplicación en la etapa infantil",
     "Limitarse a informar sobre síntomas de enfermedades"
    ],
    "c": 1,
    "e": "El concepto de promoción de la salud va más allá de la mera prevención de enfermedades: busca generar de forma activa entornos, hábitos y competencias que favorezcan el bienestar integral desde la infancia (por ejemplo, fomentar el gusto por el movimiento o por una alimentación variada), en lugar de limitarse a actuar cuando ya existe un problema."
   },
   {
    "d": "facil",
    "q": "El control de esfínteres, hito relevante de la autonomía infantil, suele consolidarse de forma orientativa en torno a:",
    "o": [
     "Los 6 meses",
     "Los 2-3 años",
     "Los 5-6 años",
     "No se consolida en la etapa infantil"
    ],
    "c": 1,
    "e": "El control de esfínteres, hito relevante de la autonomía infantil, suele consolidarse de forma orientativa entre los 2 y los 3 años, si bien existe una amplia variabilidad individual y el proceso debe respetarse sin forzarlo antes de que el niño esté fisiológica y psicológicamente preparado."
   },
   {
    "d": "dificil",
    "q": "La exposición solar y la fotoprotección en la etapa infantil, especialmente en las horas centrales del día, es relevante porque:",
    "o": [
     "La piel infantil es más sensible y vulnerable a los efectos nocivos del sol",
     "No existe ninguna diferencia respecto a la piel adulta",
     "Debe evitarse cualquier exposición al sol de forma absoluta",
     "Solo es relevante en la edad adulta"
    ],
    "c": 0,
    "e": "La piel infantil es especialmente sensible y vulnerable a los efectos nocivos de la radiación solar (tiene menos melanina protectora y una capa más fina), por lo que la fotoprotección —buscar la sombra en las horas centrales del día, usar ropa y gorro adecuados, aplicar crema solar— es una medida importante de educación para la salud en la etapa infantil."
   },
   {
    "d": "facil",
    "q": "El vestido y desvestido autónomo, trabajado progresivamente en Infantil, contribuye principalmente a:",
    "o": [
     "La autonomía personal y la motricidad fina",
     "Exclusivamente el desarrollo del lenguaje",
     "El desarrollo exclusivamente cognitivo abstracto",
     "No tiene relación con la educación para la salud"
    ],
    "c": 0,
    "e": "Vestirse y desvestirse de forma autónoma (abrochar botones, subir cremalleras, ponerse los zapatos) desarrolla la motricidad fina, la coordinación óculo-manual y la autonomía personal, vinculada al cuidado de uno mismo, y por eso se trabaja de forma progresiva a lo largo de toda la etapa."
   },
   {
    "d": "media",
    "q": "Ante una sospecha de maltrato o negligencia hacia un menor, el profesorado de Infantil tiene la obligación de:",
    "o": [
     "No intervenir bajo ninguna circunstancia por tratarse de un asunto privado",
     "Comunicarlo siguiendo los protocolos de protección a la infancia establecidos",
     "Resolver la situación exclusivamente por sí mismo sin informar a nadie",
     "Esperar a que la propia familia lo comunique"
    ],
    "c": 1,
    "e": "Ante cualquier sospecha de maltrato o negligencia hacia un menor, el profesorado tiene la obligación legal y ética de comunicarlo siguiendo los protocolos de protección a la infancia establecidos (dando parte a los servicios sociales, sanitarios o a la fiscalía de menores según el caso), sin resolverlo por su cuenta ni esperar a que sea la propia familia quien lo comunique."
   },
   {
    "d": "facil",
    "q": "Ventilar el aula regularmente forma parte de las medidas de:",
    "o": [
     "Higiene ambiental y salud del espacio educativo",
     "Expresión plástica",
     "Evaluación del alumnado",
     "Educación musical"
    ],
    "c": 0,
    "e": "Ventilar el aula regularmente (por ejemplo, abrir las ventanas unos minutos entre actividades) es una medida básica de higiene ambiental que renueva el aire, reduce la concentración de gérmenes y contribuye a la salud tanto del alumnado como del personal del centro."
   },
   {
    "d": "dificil",
    "q": "La educación para la salud emocional en Infantil (identificar y gestionar emociones básicas) se considera:",
    "o": [
     "Ajena al concepto de salud, que es únicamente físico",
     "Parte integrante de la salud, entendida de forma global según la definición de la OMS",
     "Un contenido exclusivo de Secundaria",
     "Innecesaria antes de los 6 años"
    ],
    "c": 1,
    "e": "Dado que la OMS define la salud como un estado de bienestar físico, mental y social, la educación para la salud emocional (identificar emociones básicas como la alegría, la tristeza o el enfado, y aprender estrategias sencillas para gestionarlas) forma parte esencial de la educación para la salud desde la infancia, y no algo ajeno a ella ni exclusivo de etapas posteriores."
   },
   {
    "d": "facil",
    "q": "La revisión periódica del estado de las instalaciones y del mobiliario del aula (enchufes, esquinas, objetos pequeños) responde al principio de:",
    "o": [
     "Prevención de riesgos y seguridad infantil",
     "Expresión artística",
     "Desarrollo del lenguaje",
     "Evaluación curricular"
    ],
    "c": 0,
    "e": "La revisión periódica del estado de las instalaciones y del mobiliario del aula (enchufes protegidos, esquinas sin aristas peligrosas, ausencia de objetos pequeños accesibles a niños que aún se los llevan a la boca) responde al principio de prevención de riesgos y seguridad infantil, condición previa para un entorno educativo adecuado."
   },
   {
    "d": "media",
    "q": "El acompañamiento a niños y niñas con enfermedades crónicas (como diabetes o asma) en el aula de Infantil requiere:",
    "o": [
     "Excluirlos de las actividades habituales por precaución",
     "Formación específica del personal, protocolos claros y coordinación con la familia y el ámbito sanitario",
     "Ignorar la condición médica durante la jornada escolar",
     "Delegar toda la responsabilidad exclusivamente en la familia"
    ],
    "c": 1,
    "e": "El acompañamiento a niños y niñas con enfermedades crónicas (diabetes, asma, alergias graves) en el aula requiere formación específica del personal (por ejemplo, saber administrar un inhalador o reconocer síntomas de hipoglucemia), protocolos claros de actuación y una coordinación estrecha entre familia, centro y ámbito sanitario, en ningún caso su exclusión de las actividades habituales."
   },
   {
    "d": "facil",
    "q": "Enseñar a toser o estornudar tapándose con el codo forma parte de:",
    "o": [
     "Los hábitos de higiene relacionados con la prevención de enfermedades transmisibles",
     "Una técnica de expresión corporal",
     "Un contenido exclusivo del área matemática",
     "Un hábito sin relevancia sanitaria"
    ],
    "c": 0,
    "e": "Enseñar a toser o estornudar tapándose con el codo (en lugar de con la mano, que después toca otros objetos y superficies) forma parte de los hábitos de higiene relacionados con la prevención del contagio de enfermedades transmisibles, y es un hábito sencillo y adecuado para trabajar desde Infantil de forma lúdica."
   }
  ]
 },
 {
  "id": "b06",
  "title": "El Desarrollo de la Personalidad",
  "questions": [
   {
    "d": "facil",
    "q": "El apego, según la teoría de John Bowlby, se define como:",
    "o": [
     "Un vínculo afectivo duradero entre el niño y su figura de referencia",
     "Un trastorno de conducta infantil",
     "Una etapa del desarrollo cognitivo",
     "Un tipo de juego simbólico"
    ],
    "c": 0,
    "e": "Bowlby define el apego como el vínculo afectivo duradero que el bebé establece con su cuidador principal, con una función biológica de protección y seguridad, y que sirve de base para el desarrollo emocional y social posterior. Por ejemplo, cuando un bebé llora al separarse de su madre y se calma al volver a estar con ella, está mostrando la conducta de apego en acción."
   },
   {
    "d": "media",
    "q": "Mary Ainsworth, a través de la 'situación extraña', identificó distintos tipos de apego, entre ellos:",
    "o": [
     "Apego seguro, ansioso-evitativo y ansioso-ambivalente/resistente",
     "Apego primario, secundario y terciario",
     "Apego cognitivo, motor y afectivo",
     "Apego únicamente seguro o inseguro sin subtipos"
    ],
    "c": 0,
    "e": "El experimento de la 'situación extraña' de Ainsworth (que consiste en observar la reacción del bebé ante breves separaciones y reencuentros con su figura de apego) clasificó el apego en seguro, inseguro-evitativo (el niño apenas muestra malestar y evita el contacto al reencontrarse) e inseguro-ambivalente o resistente (el niño se muestra muy alterado y a la vez rechaza el consuelo); más adelante Main y Solomon añadieron el apego desorganizado."
   },
   {
    "d": "facil",
    "q": "Según Erik Erikson, el conflicto psicosocial característico del primer año de vida es:",
    "o": [
     "Autonomía frente a vergüenza y duda",
     "Confianza básica frente a desconfianza",
     "Iniciativa frente a culpa",
     "Identidad frente a confusión de rol"
    ],
    "c": 1,
    "e": "Erikson sitúa en el primer año de vida el conflicto psicosocial 'confianza básica frente a desconfianza': si el bebé recibe cuidados consistentes, cálidos y predecibles, desarrolla una confianza básica en el mundo y en los demás; si los cuidados son erráticos o negligentes, tiende a desarrollar desconfianza. Por ejemplo, un bebé cuyas señales de hambre o malestar son atendidas con regularidad aprende que el mundo es un lugar seguro y fiable."
   },
   {
    "d": "dificil",
    "q": "El autoconcepto y la autoestima en la etapa infantil se construyen fundamentalmente a través de:",
    "o": [
     "La herencia genética exclusivamente",
     "Las interacciones con adultos e iguales y el feedback que reciben",
     "La maduración neurológica sin influencia ambiental",
     "Los contenidos curriculares matemáticos"
    ],
    "c": 1,
    "e": "El autoconcepto y la autoestima en la etapa infantil se construyen fundamentalmente a través de las interacciones con adultos e iguales y del feedback (verbal y no verbal) que el niño recibe de ellos, y no dependen solo de la herencia genética ni de la maduración neurológica en sí. Por ejemplo, un niño al que se elogia con frecuencia por sus logros ('¡qué bien has hecho el dibujo!') tiende a desarrollar una imagen más positiva de sus propias capacidades."
   },
   {
    "d": "media",
    "q": "El temperamento infantil, entendido como base biológica de la personalidad, fue estudiado especialmente por:",
    "o": [
     "Thomas y Chess",
     "Piaget",
     "Vygotski",
     "Skinner"
    ],
    "c": 0,
    "e": "Thomas y Chess, en el Estudio Longitudinal de Nueva York, estudiaron el temperamento infantil como base biológica de la personalidad y describieron tres tipos principales: el temperamento fácil (niños de humor generalmente positivo y adaptables), el difícil (más irregulares e intensos en sus reacciones) y el de respuesta lenta o 'tímido' (más retraídos ante lo nuevo, pero que se adaptan progresivamente)."
   },
   {
    "d": "facil",
    "q": "La crisis de oposición o 'etapa del no', muy característica en torno a los dos-tres años, se relaciona con:",
    "o": [
     "La afirmación del yo y la búsqueda de autonomía",
     "Un trastorno de conducta que debe corregirse con castigo",
     "La ausencia de vínculo afectivo",
     "El fracaso escolar"
    ],
    "c": 0,
    "e": "La 'crisis de oposición' o 'etapa del no', muy característica en torno a los 2-3 años (el niño dice 'no' incluso a lo que quiere), se relaciona con la afirmación del yo y la búsqueda de autonomía frente al adulto: es una fase normativa del desarrollo de la personalidad, no un trastorno de conducta que deba corregirse con castigo. Por ejemplo, un niño que insiste en ponerse él mismo los zapatos, aunque tarde mucho más y se los ponga al revés, está ejerciendo esa misma necesidad de autonomía."
   },
   {
    "d": "facil",
    "q": "Según Erikson, el conflicto psicosocial característico de los 3-6 años es:",
    "o": [
     "Confianza frente a desconfianza",
     "Autonomía frente a vergüenza y duda",
     "Iniciativa frente a culpa",
     "Laboriosidad frente a inferioridad"
    ],
    "c": 2,
    "e": "Erikson sitúa entre los 3 y los 6 años el conflicto psicosocial 'iniciativa frente a culpa', vinculado al desarrollo de la iniciativa propia, la planificación de actividades y el juego con propósito (por ejemplo, proponer y dirigir un juego con otros niños). Si esa iniciativa es apoyada, el niño gana confianza en sus propios proyectos; si se la castiga o ridiculiza en exceso, puede desarrollar sentimientos de culpa."
   },
   {
    "d": "dificil",
    "q": "El apego desorganizado, categoría añadida posteriormente a la clasificación de Ainsworth (Main y Solomon), se asocia frecuentemente con:",
    "o": [
     "Cuidados consistentes y sensibles",
     "Experiencias de negligencia, maltrato o cuidadores atemorizantes",
     "Un desarrollo cognitivo avanzado",
     "La ausencia total de vínculo afectivo"
    ],
    "c": 1,
    "e": "El apego desorganizado, categoría añadida por Main y Solomon a la clasificación de Ainsworth, se caracteriza por conductas contradictorias o confusas del niño hacia su figura de apego (acercarse y a la vez evitarla), y se asocia frecuentemente con experiencias de negligencia, maltrato o cuidadores que resultan atemorizantes para el niño en lugar de ser una fuente de seguridad."
   },
   {
    "d": "facil",
    "q": "El proceso de construcción de la identidad de género básica (saberse niño o niña) suele consolidarse en torno a:",
    "o": [
     "Los 2-3 años",
     "Los 6 meses",
     "Los 10 años",
     "No se consolida en la etapa infantil"
    ],
    "c": 0,
    "e": "Hacia los 2-3 años los niños suelen alcanzar la identidad de género básica, reconociéndose y nombrándose a sí mismos como niño o niña, aunque la comprensión de que esa identidad es estable en el tiempo y no cambia con la ropa o el peinado (la llamada 'constancia de género') se consolida algo más tarde, hacia los 5-7 años."
   },
   {
    "d": "media",
    "q": "La 'teoría psicosexual' de Freud sitúa en la etapa infantil, entre otras, la fase:",
    "o": [
     "Fase oral y fase anal, previas a la fase fálica",
     "Únicamente la fase genital",
     "Solo la fase de latencia",
     "Ninguna fase relevante ocurre en la infancia"
    ],
    "c": 0,
    "e": "Freud describe, dentro de la infancia, la fase oral (primer año, centrada en la boca), la fase anal (2-3 años, centrada en el control de esfínteres) y la fase fálica (3-6 años, centrada en el descubrimiento de las diferencias sexuales y el complejo de Edipo/Electra), previas a la fase de latencia que sitúa ya en la etapa escolar posterior."
   },
   {
    "d": "facil",
    "q": "El vínculo de apego seguro se asocia, según la investigación, con:",
    "o": [
     "Mayor dificultad para explorar el entorno",
     "Una base emocional que favorece la exploración autónoma y las relaciones sociales positivas",
     "Ausencia de emociones",
     "Mayor probabilidad de trastornos graves de conducta"
    ],
    "c": 1,
    "e": "El apego seguro proporciona al niño una base emocional ('base segura') desde la que explorar el entorno con confianza, ya que sabe que puede volver a su figura de apego en busca de consuelo si algo le inquieta; la investigación asocia este tipo de apego con relaciones sociales más positivas y mayor facilidad para la exploración autónoma, no con mayor dificultad para ello."
   },
   {
    "d": "dificil",
    "q": "El concepto de 'base segura', acuñado por Bowlby y desarrollado por Ainsworth, hace referencia a:",
    "o": [
     "Un mueble específico del aula de Infantil",
     "La figura de apego como referencia estable desde la que el niño explora el entorno",
     "Un tipo de material didáctico",
     "Un trastorno del desarrollo"
    ],
    "c": 1,
    "e": "El concepto de 'base segura', acuñado por Bowlby y desarrollado por Ainsworth, se refiere a la figura de apego como un punto de referencia estable desde el que el niño se atreve a explorar el entorno (por ejemplo, alejarse a jugar en un parque) sabiendo que puede regresar a ella si necesita consuelo o protección, como quien sale de casa sabiendo que puede volver."
   },
   {
    "d": "facil",
    "q": "La expresión y regulación de las emociones básicas (alegría, tristeza, miedo, enfado) comienza a desarrollarse:",
    "o": [
     "Ya desde los primeros meses de vida, de forma progresiva",
     "Solo a partir de los 6 años",
     "Nunca antes de la adolescencia",
     "Únicamente tras la escolarización obligatoria"
    ],
    "c": 0,
    "e": "Las emociones básicas (alegría, tristeza, miedo, enfado) están presentes ya desde los primeros meses de vida, y su expresión, comprensión y regulación se desarrollan de forma progresiva a lo largo de la infancia: un bebé llora para expresar malestar, mientras que un niño de 5 años ya puede empezar a nombrar lo que siente y a esperar antes de reaccionar."
   },
   {
    "d": "media",
    "q": "El concepto de 'autorregulación emocional' en la etapa infantil hace referencia a la capacidad de:",
    "o": [
     "Suprimir por completo cualquier emoción",
     "Modular la intensidad y expresión de las propias emociones de forma progresivamente autónoma",
     "Depender siempre del adulto para calmarse",
     "No experimentar emociones negativas"
    ],
    "c": 1,
    "e": "La autorregulación emocional es la capacidad, en desarrollo progresivo durante la infancia, de modular la intensidad y la forma de expresar las propias emociones de manera cada vez más autónoma (por ejemplo, respirar hondo antes de reaccionar con enfado), sin que ello implique suprimir las emociones ni depender siempre del adulto para calmarse."
   },
   {
    "d": "facil",
    "q": "El juego, además de su valor cognitivo y motor, cumple una función relevante en el desarrollo de la personalidad porque:",
    "o": [
     "No tiene ninguna relación con la esfera afectiva",
     "Permite expresar y elaborar emociones, deseos y conflictos internos",
     "Solo sirve para pasar el tiempo",
     "Debe evitarse por interferir en el aprendizaje"
    ],
    "c": 1,
    "e": "El juego, especialmente el simbólico, permite al niño expresar y elaborar emociones, deseos y conflictos internos que aún no sabe verbalizar del todo: por ejemplo, un niño que ha tenido miedo en el médico puede 'jugar a médicos' repitiendo la situación con muñecos, lo que le ayuda a procesar esa experiencia y a sentir mayor control sobre ella."
   },
   {
    "d": "dificil",
    "q": "Los estilos educativos parentales inconsistentes o impredecibles se han relacionado en la investigación con:",
    "o": [
     "Un desarrollo emocional más seguro y estable",
     "Mayor dificultad de regulación emocional y de conducta en el niño",
     "Ningún efecto relevante en el desarrollo",
     "Un desarrollo cognitivo superior"
    ],
    "c": 1,
    "e": "La inconsistencia o impredecibilidad en las pautas educativas parentales (por ejemplo, permitir una conducta un día y castigarla al siguiente) se asocia en la investigación con mayores dificultades de regulación emocional y de conducta en el niño, ya que este no puede anticipar con claridad qué se espera de él ni las consecuencias de sus actos."
   },
   {
    "d": "facil",
    "q": "El reconocimiento del propio nombre y la respuesta a él son indicadores tempranos de:",
    "o": [
     "El desarrollo de la conciencia de uno mismo",
     "Un trastorno del desarrollo",
     "La capacidad matemática",
     "La motricidad fina exclusivamente"
    ],
    "c": 0,
    "e": "Reconocer y responder al propio nombre (por ejemplo, girarse cuando alguien lo llama) es uno de los primeros indicadores del desarrollo de la conciencia de uno mismo, base sobre la que se construirá progresivamente la identidad personal a lo largo de la infancia."
   },
   {
    "d": "media",
    "q": "El 'efecto espejo' (reconocerse en el espejo, prueba del 'rouge' o punto rojo) se utiliza para estudiar:",
    "o": [
     "El desarrollo del lenguaje",
     "La emergencia de la autoconciencia o reconocimiento de uno mismo",
     "La motricidad gruesa",
     "El desarrollo lógico-matemático"
    ],
    "c": 1,
    "e": "La prueba del espejo o del 'rouge' (se marca discretamente al niño con un punto rojo en la cara y se observa si, al verse en el espejo, se toca o intenta quitarse la marca) es un indicador clásico utilizado para estudiar la emergencia de la autoconciencia o reconocimiento de uno mismo, que suele aparecer entre los 15 y los 24 meses de edad."
   },
   {
    "d": "facil",
    "q": "El respeto a los tiempos y ritmos individuales de cada niño en el desarrollo de su personalidad es un principio educativo relacionado con:",
    "o": [
     "La individualización de la enseñanza",
     "La evaluación sumativa exclusivamente",
     "La ausencia total de intervención adulta",
     "La comparación entre niños del grupo"
    ],
    "c": 0,
    "e": "El respeto a los tiempos y ritmos individuales de cada niño es un principio educativo relacionado con la individualización de la enseñanza, y resulta esencial para favorecer un desarrollo emocional y personal saludable: comparar constantemente a un niño con sus compañeros ('tu hermano ya sabía hacer esto a tu edad') puede dañar su autoestima en lugar de ayudarle."
   },
   {
    "d": "dificil",
    "q": "El concepto de 'autoconcepto multidimensional' (académico, físico, social, emocional) hace referencia a que la valoración que el niño hace de sí mismo:",
    "o": [
     "Es siempre única y global, sin distinguir ámbitos concretos",
     "Puede variar según distintas áreas o dimensiones de su vida (cómo se ve físicamente, socialmente, en el aprendizaje...)",
     "No se desarrolla hasta la adolescencia",
     "Depende únicamente de factores genéticos, sin influencia del entorno"
    ],
    "c": 1,
    "e": "El autoconcepto es multidimensional: la valoración que el niño hace de sí mismo puede variar según distintas áreas o dimensiones de su vida —cómo se ve físicamente, cómo se relaciona socialmente, cómo se percibe en el aprendizaje o en el terreno emocional— y esas dimensiones se van diferenciando progresivamente a medida que el niño crece, en lugar de existir desde el principio como una valoración única y global."
   },
   {
    "d": "facil",
    "q": "¿Quién introdujo el concepto de apego como vínculo afectivo esencial para el desarrollo?",
    "o": [
     "John Bowlby",
     "Albert Bandura",
     "Jean Piaget",
     "B. F. Skinner"
    ],
    "c": 0,
    "e": "John Bowlby formuló la teoría del apego, destacando que el vínculo afectivo temprano con el cuidador principal no es un simple efecto secundario de la alimentación, sino una necesidad biológica y emocional propia, tan esencial para la supervivencia y el desarrollo como la comida o el abrigo."
   },
   {
    "d": "facil",
    "q": "¿Qué investigadora clasificó los patrones de apego a partir de sus investigaciones con la Situación Extraña?",
    "o": [
     "Mary Ainsworth",
     "Anna Freud",
     "Carol Gilligan",
     "Urie Bronfenbrenner"
    ],
    "c": 0,
    "e": "Mary Ainsworth, discípula de Bowlby, desarrolló el procedimiento de la Situación Extraña y, a partir de él, clasificó los distintos patrones de apego (seguro, inseguro-evitativo, inseguro-ambivalente), aportando una herramienta empírica que permitió estudiar de forma sistemática la calidad del vínculo afectivo entre el bebé y su cuidador."
   },
   {
    "d": "media",
    "q": "¿Qué teoría explica la influencia de microsistema, mesosistema, exosistema y macrosistema sobre el desarrollo?",
    "o": [
     "Teoría ecológica de Bronfenbrenner",
     "Teoría del aprendizaje social de Bandura",
     "Teoría psicosexual de Freud",
     "Teoría de la asimilación de Ausubel"
    ],
    "c": 0,
    "e": "Bronfenbrenner propuso un modelo ecológico del desarrollo que analiza la influencia de distintos sistemas ambientales anidados —microsistema (familia, escuela), mesosistema (relación entre ellos), exosistema (entornos que influyen indirectamente) y macrosistema (la cultura)— mostrando que la personalidad no se forma solo por factores individuales, sino en interacción constante con estos contextos."
   },
   {
    "d": "facil",
    "q": "¿Qué autor está especialmente relacionado con la teoría del aprendizaje por observación e imitación?",
    "o": [
     "Bandura",
     "Bowlby",
     "Erikson",
     "Wallon"
    ],
    "c": 0,
    "e": "Albert Bandura desarrolló la teoría del aprendizaje social, destacando el aprendizaje por observación e imitación de modelos (aprendizaje vicario): un niño puede aprender una conducta —agresiva o prosocial— simplemente observando cómo actúa un adulto o un compañero de referencia, sin necesidad de experimentarla directamente él mismo ni de recibir un refuerzo inmediato."
   },
   {
    "d": "facil",
    "q": "¿Quién propuso la jerarquía de necesidades humanas?",
    "o": [
     "Maslow",
     "Piaget",
     "Bruner",
     "Kohlberg"
    ],
    "c": 0,
    "e": "Abraham Maslow formuló la conocida pirámide o jerarquía de necesidades humanas (fisiológicas, de seguridad, de afiliación, de estima y de autorrealización), y planteó que las necesidades más básicas deben quedar razonablemente cubiertas antes de que la persona pueda centrarse plenamente en las superiores; aplicado al aula, un niño con hambre o inseguro emocionalmente difícilmente podrá centrarse en aprender."
   },
   {
    "d": "media",
    "q": "¿Qué teoría de Bruner respalda que el adulto proporcione apoyos ajustados que permitan al niño realizar progresivamente tareas por sí mismo?",
    "o": [
     "Teoría del andamiaje",
     "Teoría de la zona de desarrollo próximo",
     "Teoría del condicionamiento clásico",
     "Teoría del apego"
    ],
    "c": 0,
    "e": "El andamiaje, descrito por Bruner a partir de la zona de desarrollo próximo de Vygotski, consiste en el apoyo temporal y ajustado que un adulto ofrece a un niño para que pueda realizar progresivamente una tarea por sí mismo, retirando esa ayuda a medida que el niño gana competencia, tal como se retira un andamio cuando el edificio ya se sostiene solo."
   },
   {
    "d": "facil",
    "q": "¿Qué conducta de oposición es frecuente alrededor de los 2-3 años y se relaciona con la afirmación del yo?",
    "o": [
     "Negativismo",
     "Ecolalia",
     "Balbuceo",
     "Sonambulismo"
    ],
    "c": 0,
    "e": "El negativismo (decir 'no' de forma sistemática, incluso a lo que en realidad se desea) es una conducta de oposición frecuente alrededor de los 2-3 años que forma parte de la progresiva afirmación de la autonomía y de la propia identidad, y no debe confundirse con un problema de conducta grave."
   },
   {
    "d": "media",
    "q": "¿Qué crisis psicosocial de Erikson corresponde aproximadamente a los 18 meses-3 años?",
    "o": [
     "Confianza frente a desconfianza",
     "Autonomía frente a vergüenza y duda",
     "Iniciativa frente a culpa",
     "Identidad frente a confusión de roles"
    ],
    "c": 1,
    "e": "La segunda etapa psicosocial de Erikson, situada aproximadamente entre los 18 meses y los 3 años, gira en torno al conflicto 'autonomía frente a vergüenza y duda': el niño busca hacer cosas por sí mismo (comer solo, controlar esfínteres) y, si se le permite ejercer esa autonomía con apoyo adecuado, gana confianza en sus propias capacidades."
   },
   {
    "d": "media",
    "q": "¿Qué autor relacionó especialmente la autonomía con la superación progresiva del egocentrismo y la interiorización de normas?",
    "o": [
     "Piaget",
     "Bowlby",
     "Skinner",
     "Goleman"
    ],
    "c": 0,
    "e": "Piaget relacionó especialmente el desarrollo de la autonomía con la superación progresiva del egocentrismo y con la interiorización de las normas sociales y morales, pasando de una moral heterónoma (las normas vienen impuestas desde fuera, por el adulto) a una moral más autónoma en etapas posteriores, en la que el niño comprende y asume las normas como propias."
   },
   {
    "d": "facil",
    "q": "¿Qué hábitos cotidianos favorecen directamente la autonomía infantil?",
    "o": [
     "Vestirse, alimentarse y recoger materiales",
     "Evitar que el niño tome decisiones",
     "Realizar todas las tareas por él",
     "Eliminar las rutinas"
    ],
    "c": 0,
    "e": "Las rutinas cotidianas de autocuidado y participación —vestirse, alimentarse por sí mismo, recoger los materiales tras una actividad— favorecen directamente la autonomía infantil, ya que ofrecen ocasiones repetidas para practicar la toma de decisiones y el control sobre las propias acciones, en lugar de que el adulto realice esas tareas por el niño."
   }
  ]
 },
 {
  "id": "b07",
  "title": "El Desarrollo del Lenguaje",
  "questions": [
   {
    "d": "facil",
    "q": "La etapa prelingüística del desarrollo del lenguaje abarca aproximadamente:",
    "o": [
     "De 0 a 12 meses",
     "De 2 a 4 años",
     "De 4 a 6 años",
     "Toda la etapa de Infantil"
    ],
    "c": 0,
    "e": "La etapa prelingüística, que abarca desde el nacimiento hasta aproximadamente el primer año, incluye el llanto, los gorjeos, el balbuceo o laleo y los gestos comunicativos (señalar, saludar con la mano), previos a la aparición de las primeras palabras propiamente dichas. Por ejemplo, un bebé de 9 meses que señala un juguete y mira alternativamente al adulto y al objeto está comunicándose intencionalmente sin usar aún palabras."
   },
   {
    "d": "media",
    "q": "El 'habla telegráfica', propia de los 18-24 meses, se caracteriza por:",
    "o": [
     "Frases de una sola palabra que sirven de holofrase",
     "Combinar dos o tres palabras clave omitiendo nexos y artículos",
     "Un dominio completo de la sintaxis adulta",
     "La ausencia total de comunicación verbal"
    ],
    "c": 1,
    "e": "El habla telegráfica, propia de los 18-24 meses, combina dos o tres palabras clave (normalmente sustantivos y verbos) omitiendo nexos, artículos y desinencias gramaticales, de forma parecida a un telegrama. Por ejemplo, un niño de esa edad diría 'mamá agua' para expresar 'mamá, quiero agua', comunicando la idea esencial sin la estructura gramatical completa."
   },
   {
    "d": "facil",
    "q": "Noam Chomsky defendió que la adquisición del lenguaje se explica por:",
    "o": [
     "El refuerzo y la imitación exclusivamente",
     "Un dispositivo innato de adquisición del lenguaje (LAD)",
     "La maduración motriz",
     "El aprendizaje por ensayo y error"
    ],
    "c": 1,
    "e": "Chomsky propuso que los humanos poseemos una capacidad innata, el Dispositivo de Adquisición del Lenguaje (LAD, por sus siglas en inglés), que predispone al cerebro a extraer las reglas gramaticales del lenguaje que se escucha alrededor, explicando por qué los niños de todo el mundo adquieren su lengua materna con una rapidez y regularidad difíciles de explicar solo por imitación."
   },
   {
    "d": "facil",
    "q": "Skinner, desde el conductismo, explicó la adquisición del lenguaje a través de:",
    "o": [
     "El refuerzo, la imitación y el condicionamiento operante",
     "Un dispositivo innato exclusivo",
     "La zona de desarrollo próximo",
     "Los esquemas sensoriomotores"
    ],
    "c": 0,
    "e": "Skinner, desde el conductismo, defendía que el lenguaje se adquiere igual que cualquier otra conducta: mediante imitación de los modelos adultos, refuerzo (el adulto sonríe o atiende cuando el niño dice algo correctamente) y condicionamiento operante del entorno, sin necesidad de postular ninguna capacidad innata específica para el lenguaje."
   },
   {
    "d": "dificil",
    "q": "El 'habla privada' o 'lenguaje egocéntrico' que el niño usa mientras juega, según Vygotski, cumple la función de:",
    "o": [
     "No tiene ninguna función, es un error de desarrollo",
     "Autorregular y guiar su propio pensamiento y acción",
     "Comunicarse exclusivamente con los adultos",
     "Sustituir al lenguaje social"
    ],
    "c": 1,
    "e": "Para Vygotski, el habla privada o lenguaje egocéntrico que el niño usa en voz alta mientras juega (por ejemplo, decir 'ahora pongo esta pieza aquí' mientras construye una torre) cumple una función autorreguladora: le ayuda a planificar y guiar su propia acción, y con el tiempo se interioriza, dejando de expresarse en voz alta, para convertirse en pensamiento verbal interno propio del adulto."
   },
   {
    "d": "facil",
    "q": "¿Cuál de estos NO es un componente del lenguaje que se trabaje en la evaluación/desarrollo lingüístico infantil?",
    "o": [
     "Fonológico",
     "Semántico",
     "Pragmático",
     "Psicomotor"
    ],
    "c": 3,
    "e": "Los componentes clásicos del lenguaje son el fonológico (los sonidos), el morfosintáctico (la formación de palabras y frases), el semántico (el significado) y el pragmático (el uso en contextos comunicativos); lo psicomotor no es un componente del lenguaje, sino de otra dimensión del desarrollo relacionada con el movimiento y el control corporal."
   },
   {
    "d": "facil",
    "q": "El balbuceo o laleo, en el que el bebé combina sílabas repetidas (ba-ba, ma-ma), suele aparecer en torno a:",
    "o": [
     "Los 6-8 meses",
     "Los 2 años",
     "Al nacer",
     "Los 4 años"
    ],
    "c": 0,
    "e": "El balbuceo canónico o laleo, en el que el bebé combina sílabas repetidas ('ba-ba-ba', 'ma-ma-ma'), suele aparecer entre los 6 y los 8 meses, y se considera un hito prelingüístico importante porque muestra que el bebé ya ensaya de forma activa los sonidos de su lengua materna, incluso antes de que estos tengan significado."
   },
   {
    "d": "media",
    "q": "El fenómeno de 'sobregeneralización' o 'sobrerregularización' en la adquisición del lenguaje (p. ej. decir 'rompido' en lugar de 'roto') muestra que el niño:",
    "o": [
     "Tiene un trastorno grave del lenguaje",
     "Está aplicando activamente reglas gramaticales aprendidas, incluso a formas irregulares",
     "Solo imita literalmente lo que oye, sin ninguna generalización",
     "No ha comenzado a adquirir el lenguaje"
    ],
    "c": 1,
    "e": "La sobregeneralización o sobrerregularización (por ejemplo, decir 'rompido' en lugar de 'roto', o 'cabo' en lugar de 'quepo') demuestra que el niño no se limita a imitar literalmente lo que oye, sino que extrae activamente reglas gramaticales generales (añadir '-ido' para formar participios) y las aplica incluso a los verbos irregulares, donde esa regla no funciona; es, paradójicamente, una señal de que está aprendiendo gramática de forma activa."
   },
   {
    "d": "facil",
    "q": "La primera palabra con intención comunicativa suele aparecer, de forma orientativa, en torno a:",
    "o": [
     "Los 12 meses",
     "Los 3 años",
     "Los 6 meses",
     "Los 5 años"
    ],
    "c": 0,
    "e": "Las primeras palabras con intención comunicativa clara suelen aparecer, de forma orientativa y con amplia variabilidad individual, en torno al primer año de vida, coincidiendo aproximadamente con el final de la etapa prelingüística y el inicio de la producción propiamente verbal."
   },
   {
    "d": "dificil",
    "q": "La 'explosión del vocabulario', periodo de rápida adquisición de nuevas palabras, suele situarse aproximadamente entre:",
    "o": [
     "Los 6 y 9 meses",
     "Los 18 y 24 meses",
     "Los 5 y 6 años",
     "No existe tal fenómeno"
    ],
    "c": 1,
    "e": "La 'explosión' o 'estallido' del vocabulario, un periodo de incremento muy rápido en el número de palabras que el niño es capaz de decir, suele situarse aproximadamente entre los 18 y los 24 meses, momento a partir del cual el ritmo de adquisición de nuevas palabras se acelera notablemente respecto a los meses anteriores."
   },
   {
    "d": "facil",
    "q": "La pragmática del lenguaje hace referencia a:",
    "o": [
     "Las reglas de combinación de sonidos",
     "El uso funcional y contextual del lenguaje en la comunicación",
     "La estructura gramatical de las frases",
     "El significado literal de las palabras"
    ],
    "c": 1,
    "e": "La pragmática estudia el uso funcional y contextual del lenguaje en la comunicación real: los turnos de palabra, la adecuación del mensaje al interlocutor, las intenciones comunicativas (pedir, saludar, protestar). Por ejemplo, saber que hay que esperar a que el otro termine de hablar antes de intervenir, o usar un tono distinto para pedir algo que para saludar, forma parte de la competencia pragmática."
   },
   {
    "d": "media",
    "q": "Jerome Bruner, con su enfoque interaccionista, destacó especialmente el papel de:",
    "o": [
     "Un dispositivo innato exclusivo del lenguaje, sin influencia social",
     "El 'sistema de apoyo para la adquisición del lenguaje' (LASS), es decir, el andamiaje social del adulto",
     "La ausencia total de influencia ambiental",
     "El condicionamiento operante exclusivamente"
    ],
    "c": 1,
    "e": "Bruner, con su enfoque interaccionista, planteó que junto a una posible predisposición innata, existe un 'sistema de apoyo para la adquisición del lenguaje' (LASS): el andamiaje social que el adulto ofrece a través de rutinas, formatos comunicativos repetidos y ajuste de su lenguaje al nivel del niño, sin el cual esa predisposición innata no bastaría por sí sola para adquirir el lenguaje."
   },
   {
    "d": "facil",
    "q": "Los 'formatos' de interacción rutinaria (como el juego del cucú-tras o la lectura conjunta de cuentos) descritos por Bruner tienen como función:",
    "o": [
     "Facilitar la adquisición del lenguaje a través de estructuras predecibles de interacción",
     "No tener ninguna relación con el lenguaje",
     "Sustituir por completo el habla del adulto",
     "Ser exclusivos de la etapa adulta"
    ],
    "c": 0,
    "e": "Los 'formatos' de interacción rutinaria descritos por Bruner (como el juego del cucú-tras o la lectura conjunta y repetida de un mismo cuento) ofrecen al niño estructuras predecibles de interacción que facilitan la anticipación, la participación activa y, con ello, la adquisición del lenguaje. Por ejemplo, en el cucú-tras el niño aprende a anticipar el momento de sorpresa y, más adelante, a producir él mismo las palabras asociadas al juego."
   },
   {
    "d": "dificil",
    "q": "Un posible signo de alerta en el desarrollo del lenguaje que justificaría una valoración especializada sería:",
    "o": [
     "Que un niño de 12 meses aún no combine dos palabras",
     "Que un niño de 2 años no diga ninguna palabra con intención comunicativa",
     "Que un niño de 5 años cometa algún error ocasional de pronunciación",
     "Que un niño de 3 años use frases de dos o tres palabras"
    ],
    "c": 1,
    "e": "La ausencia total de palabras con intención comunicativa a los 2 años se considera un posible signo de alerta que aconseja una valoración especializada, mientras que no combinar aún dos palabras a los 12 meses, cometer errores ocasionales de pronunciación a los 5 años o usar frases de dos o tres palabras a los 3 años son todos ellos hitos propios del desarrollo típico del lenguaje."
   },
   {
    "d": "facil",
    "q": "El lenguaje receptivo (comprensión) en el desarrollo infantil suele:",
    "o": [
     "Desarrollarse siempre después que el lenguaje expresivo",
     "Preceder o desarrollarse en paralelo al lenguaje expresivo (producción)",
     "No tener ninguna relación con el lenguaje expresivo",
     "Aparecer únicamente a partir de los 4 años"
    ],
    "c": 1,
    "e": "El lenguaje receptivo (la capacidad de comprender lo que se dice) suele preceder o desarrollarse en paralelo al lenguaje expresivo (la capacidad de producir palabras y frases): es habitual que un niño comprenda instrucciones sencillas ('trae la pelota') mucho antes de ser capaz de formular frases similares por sí mismo."
   },
   {
    "d": "media",
    "q": "Las 'preguntas de encadenamiento' y la expansión de las emisiones infantiles por parte del adulto (p. ej. el niño dice 'perro' y el adulto responde 'sí, es un perro grande y marrón') son estrategias que:",
    "o": [
     "Dificultan el desarrollo del lenguaje",
     "Favorecen la ampliación del vocabulario y de las estructuras gramaticales del niño",
     "No tienen ningún efecto comprobado",
     "Solo son útiles en la etapa adulta"
    ],
    "c": 1,
    "e": "Las expansiones y ampliaciones del adulto sobre las emisiones infantiles (el niño dice 'perro' y el adulto responde 'sí, es un perro grande y marrón que está durmiendo') son estrategias eficaces para enriquecer el vocabulario y las estructuras gramaticales del niño, ya que le ofrecen un modelo lingüístico más completo directamente relacionado con lo que él mismo acaba de decir."
   },
   {
    "d": "facil",
    "q": "El 'lenguaje dirigido al niño' (o 'habla maternal'), caracterizado por un tono más agudo, frases cortas y repeticiones, tiene como función principal:",
    "o": [
     "Confundir al niño con un lenguaje incorrecto",
     "Captar la atención del bebé y facilitar la adquisición del lenguaje",
     "No cumple ninguna función relevante",
     "Sustituir el lenguaje adulto de forma permanente"
    ],
    "c": 1,
    "e": "El lenguaje dirigido al niño o 'habla maternal' (motherese), caracterizado por un tono más agudo, frases más cortas, ritmo más lento y repeticiones, capta la atención del bebé de forma natural y facilita que este segmente y reconozca más fácilmente los sonidos y palabras de su lengua, lejos de ser un lenguaje 'incorrecto' que perjudique su desarrollo."
   },
   {
    "d": "dificil",
    "q": "La distinción entre 'lengua' y 'habla', establecida por Ferdinand de Saussure, resulta relevante en el estudio del lenguaje infantil porque:",
    "o": [
     "La lengua es el sistema social y compartido, mientras que el habla es la realización individual y concreta que hace cada niño de ese sistema",
     "Ambos términos son sinónimos sin ninguna distinción",
     "El habla es siempre anterior a la lengua en el desarrollo",
     "No tiene ninguna aplicación en la etapa infantil"
    ],
    "c": 0,
    "e": "Saussure distingue la lengua (el sistema lingüístico abstracto y social, compartido por toda una comunidad de hablantes, como el conjunto de reglas y vocabulario del español) del habla (la realización concreta e individual que cada hablante hace de ese sistema en un momento dado); esta distinción es útil para entender cómo cada niño va apropiándose progresivamente, con su estilo propio, del sistema lingüístico compartido de su comunidad."
   },
   {
    "d": "facil",
    "q": "Cantar canciones y recitar rimas con los niños en Infantil favorece especialmente el desarrollo de:",
    "o": [
     "La conciencia fonológica y el gusto por el lenguaje",
     "Exclusivamente la psicomotricidad gruesa",
     "El cálculo matemático",
     "Ningún aspecto relevante del lenguaje"
    ],
    "c": 0,
    "e": "Cantar canciones y recitar rimas y trabalenguas con los niños favorece especialmente el desarrollo de la conciencia fonológica (la capacidad de percibir y manipular los sonidos del habla: sílabas, rimas, sonidos iniciales) y despierta el gusto y el interés por el lenguaje, siendo además una base importante para el posterior aprendizaje de la lectoescritura."
   },
   {
    "d": "media",
    "q": "Los llamados 'trastornos específicos del lenguaje' (TEL) se caracterizan por:",
    "o": [
     "Una dificultad significativa en la adquisición del lenguaje no explicada por déficits sensoriales, cognitivos o neurológicos evidentes",
     "Ser siempre consecuencia de una discapacidad intelectual",
     "Afectar exclusivamente a la producción, nunca a la comprensión",
     "Desaparecer espontáneamente sin ningún tipo de intervención"
    ],
    "c": 0,
    "e": "Los trastornos específicos del lenguaje (TEL) se caracterizan por una dificultad significativa y persistente en la adquisición del lenguaje (puede afectar tanto a la comprensión como a la producción) que no se explica por una discapacidad intelectual, un déficit sensorial (por ejemplo, sordera) ni un trastorno neurológico evidente, y que no suele resolverse de forma espontánea, sino que requiere valoración e intervención logopédica especializada."
   }
  ]
 },
 {
  "id": "b08",
  "title": "El Desarrollo Psicomotor en los Niños y Niñas hasta los Seis Años",
  "questions": [
   {
    "d": "facil",
    "q": "La psicomotricidad se define como una disciplina que integra:",
    "o": [
     "Únicamente aspectos motrices",
     "Las funciones motrices, cognitivas y afectivas de la persona",
     "Solo aspectos anatómicos",
     "Exclusivamente contenidos deportivos"
    ],
    "c": 1,
    "e": "La psicomotricidad concibe el movimiento como expresión global de la persona, integrando las funciones motrices, cognitivas y afectivo-relacionales, no solo el componente físico o anatómico. Por ejemplo, cuando un niño construye una torre de bloques está a la vez ejercitando la motricidad fina, resolviendo un problema (cómo evitar que se caiga) y disfrutando emocionalmente del logro."
   },
   {
    "d": "media",
    "q": "El esquema corporal, es decir, la representación mental del propio cuerpo, se consolida fundamentalmente:",
    "o": [
     "Antes de nacer",
     "A lo largo de la etapa infantil, en interacción con el movimiento y la experiencia",
     "De forma instantánea al nacer",
     "Solo en la adolescencia"
    ],
    "c": 1,
    "e": "El esquema corporal, es decir, la representación mental que el niño tiene de su propio cuerpo, sus partes y sus posibilidades de movimiento, se construye progresivamente a lo largo de la etapa infantil gracias a la experiencia motriz, sensorial y perceptiva directa, y no está definido ni al nacer ni antes. Por ejemplo, un niño de 2 años puede señalar 'la tripa' pero confundir aún la localización precisa de otras partes, mientras que hacia los 5-6 años suele tener un esquema corporal mucho más ajustado y diferenciado."
   },
   {
    "d": "facil",
    "q": "La marcha autónoma (caminar sin apoyo) se adquiere, de forma orientativa, en torno a:",
    "o": [
     "Los 3-4 meses",
     "Los 12-15 meses",
     "Los 3 años",
     "Los 5 años"
    ],
    "c": 1,
    "e": "La marcha autónoma (caminar sin apoyo) suele consolidarse, de forma orientativa, entre los 12 y los 15 meses, aunque existe una variabilidad individual normal (algunos niños andan a los 10 meses y otros a los 18, sin que ello indique ningún problema), siempre dentro de la secuencia general que pasa antes por el gateo y la bipedestación con apoyo."
   },
   {
    "d": "facil",
    "q": "La motricidad fina hace referencia a:",
    "o": [
     "Los grandes grupos musculares (andar, saltar, correr)",
     "Movimientos precisos de manos y dedos (pinza, recorte, ensartado)",
     "El control postural global",
     "La lateralidad exclusivamente"
    ],
    "c": 1,
    "e": "La motricidad fina implica movimientos de precisión de manos y dedos, como la pinza digital (coger algo entre el pulgar y el índice), el recorte con tijeras o el ensartado de cuentas, en contraste con la motricidad gruesa, que implica grandes grupos musculares (andar, saltar, correr). Ambas se trabajan de forma complementaria en el aula de Infantil."
   },
   {
    "d": "dificil",
    "q": "La lateralidad (predominio de un lado del cuerpo) se considera, en general, definida de forma estable en torno a:",
    "o": [
     "Los 6 meses",
     "Los 2-3 años",
     "Los 5-6 años",
     "Nunca se define"
    ],
    "c": 2,
    "e": "Aunque existe un proceso previo de exploración bilateral (el bebé usa indistintamente ambas manos), la lateralidad —el predominio de un lado del cuerpo (mano, pie, ojo) sobre el otro— suele quedar establecida de forma más estable hacia el final de la etapa infantil, entre los 5 y los 6 años, y por eso no conviene forzar precozmente a un niño a usar una mano determinada."
   },
   {
    "d": "media",
    "q": "En la práctica psicomotriz de Bernard Aucouturier, la sala de psicomotricidad se organiza típicamente en fases o momentos que incluyen:",
    "o": [
     "Ritual de entrada, juego sensoriomotor/simbólico y momento de representación/relajación",
     "Únicamente ejercicios de gimnasia dirigida",
     "Solo actividades de mesa",
     "Exclusivamente juego libre sin estructura"
    ],
    "c": 0,
    "e": "La práctica psicomotriz vivenciada de Bernard Aucouturier estructura la sesión en tres momentos: un ritual de entrada (para situar al grupo y anticipar lo que va a suceder), un momento central de juego motor y simbólico (donde el niño explora, se mueve y representa) y un cierre de representación y relajación (para volver a la calma y simbolizar lo vivido, por ejemplo mediante el dibujo o la palabra)."
   },
   {
    "d": "facil",
    "q": "El reflejo de prensión palmar, presente en el recién nacido, tiende a desaparecer o transformarse en torno a:",
    "o": [
     "Los 3-6 meses",
     "Los 3 años",
     "Nunca desaparece",
     "Los 6 años"
    ],
    "c": 0,
    "e": "El reflejo de prensión palmar (el bebé cierra la mano al tocarle la palma) está presente ya en el recién nacido y suele inhibirse entre los 3 y los 6 meses, dando paso progresivamente a la prensión voluntaria e intencional, con la que el bebé empieza a agarrar objetos porque quiere, no de forma automática."
   },
   {
    "d": "dificil",
    "q": "El desarrollo de la pinza digital (índice-pulgar) fina, necesaria para acciones como recoger objetos pequeños, suele consolidarse en torno a:",
    "o": [
     "Los 9-12 meses",
     "El nacimiento",
     "Los 4 años",
     "Los 6 años"
    ],
    "c": 0,
    "e": "La pinza digital fina (usar el índice y el pulgar para coger objetos pequeños, como una miga de pan) suele consolidarse entre los 9 y los 12 meses, y se considera un hito relevante del desarrollo de la motricidad fina, precursor de habilidades posteriores como sostener un lápiz o abrochar un botón."
   },
   {
    "d": "facil",
    "q": "Saltar con los dos pies juntos suele ser una habilidad motriz propia de:",
    "o": [
     "Los 2 años aproximadamente",
     "El primer mes de vida",
     "Los 8 meses",
     "Nunca se adquiere en Infantil"
    ],
    "c": 0,
    "e": "El salto con los dos pies juntos (despegar del suelo y caer con ambos pies a la vez, sin caerse) suele consolidarse en torno a los 2 años, y a partir de ahí evoluciona hacia formas más complejas: saltar con carrera previa, saltar obstáculos o alternar los pies al saltar, ya en edades posteriores."
   },
   {
    "d": "media",
    "q": "El 'tono muscular', concepto clave en psicomotricidad, se define como:",
    "o": [
     "La fuerza máxima que puede ejercer un músculo",
     "El grado de tensión muscular necesario para mantener la postura y realizar movimientos",
     "La velocidad de contracción muscular",
     "Un tipo de reflejo arcaico"
    ],
    "c": 1,
    "e": "El tono muscular es el grado de tensión o contracción muscular, tanto en reposo como durante el movimiento, y constituye la base de la postura, el equilibrio y la regulación motriz: un tono adecuado permite, por ejemplo, mantenerse sentado sin desplomarse (hipotonía) ni estar excesivamente rígido (hipertonía)."
   },
   {
    "d": "facil",
    "q": "La coordinación óculo-manual (coordinación entre ojo y mano) se ejercita especialmente a través de actividades como:",
    "o": [
     "Recortar, ensartar o lanzar y coger una pelota",
     "Escuchar música exclusivamente",
     "Memorizar canciones",
     "Actividades sin ningún componente manipulativo"
    ],
    "c": 0,
    "e": "La coordinación óculo-manual (entre lo que ve el ojo y lo que hace la mano) se ejercita especialmente a través de actividades como recortar siguiendo una línea, ensartar cuentas en un cordón o lanzar y atrapar una pelota, actividades en las que la vista guía y ajusta continuamente el movimiento de la mano."
   },
   {
    "d": "dificil",
    "q": "El concepto de 'praxia', en el ámbito de la psicomotricidad, hace referencia a:",
    "o": [
     "Un tipo de reflejo arcaico",
     "La capacidad de organizar y ejecutar movimientos voluntarios con una finalidad",
     "Un trastorno exclusivamente del lenguaje",
     "La percepción visual exclusivamente"
    ],
    "c": 1,
    "e": "La praxia es la capacidad de organizar y ejecutar movimientos voluntarios coordinados con una finalidad concreta, como abrocharse un botón, recortar una figura siguiendo su contorno o hacer un lazo en los cordones de los zapatos; se distingue de un reflejo, que es automático e involuntario, precisamente porque implica una intención y una planificación previas."
   },
   {
    "d": "facil",
    "q": "El control cefálico (sostener la cabeza erguida) es uno de los primeros hitos motores y suele consolidarse hacia:",
    "o": [
     "Los 3-4 meses",
     "Los 12 meses",
     "El nacimiento",
     "Los 2 años"
    ],
    "c": 0,
    "e": "El control cefálico (sostener la cabeza erguida sin que caiga hacia delante o los lados) es uno de los primeros hitos motores del bebé y suele consolidarse hacia los 3-4 meses de vida, siguiendo la ley cefalocaudal del desarrollo, según la cual el control motor avanza de la cabeza hacia los pies."
   },
   {
    "d": "media",
    "q": "La estructuración espacio-temporal en Infantil (nociones como antes-después, rápido-lento, cerca-lejos) se desarrolla fundamentalmente a partir de:",
    "o": [
     "Explicaciones verbales abstractas exclusivamente",
     "La vivencia corporal directa del espacio y el tiempo, previa a su representación simbólica",
     "La memorización de conceptos matemáticos",
     "La lectoescritura formal"
    ],
    "c": 1,
    "e": "Las nociones espacio-temporales (antes-después, rápido-lento, cerca-lejos, arriba-abajo) se desarrollan a partir de la vivencia corporal directa —desplazarse por el espacio, moverse a distinto ritmo, situar el propio cuerpo respecto a los objetos— antes de que el niño sea capaz de comprenderlas de forma simbólica o abstracta, por ejemplo en una explicación verbal o en una ficha de matemáticas."
   },
   {
    "d": "facil",
    "q": "Subir y bajar escaleras alternando los pies es una habilidad motriz que suele consolidarse, de forma orientativa, en torno a:",
    "o": [
     "Los 3-4 años",
     "El primer año de vida",
     "Los 6 meses",
     "Nunca en la etapa infantil"
    ],
    "c": 0,
    "e": "Subir y bajar escaleras alternando los pies (un pie en cada escalón, sin apoyar ambos pies en el mismo antes de continuar) suele consolidarse en torno a los 3-4 años, tras una etapa previa en la que el niño sube y baja apoyando ambos pies en cada escalón por falta de equilibrio y coordinación suficientes."
   },
   {
    "d": "dificil",
    "q": "La 'disociación de movimientos', es decir, la capacidad de mover una parte del cuerpo de forma independiente de otra, se relaciona con:",
    "o": [
     "Un nivel más avanzado de control y organización motriz",
     "Un retroceso en el desarrollo motor",
     "La ausencia de tono muscular",
     "Un reflejo arcaico exclusivamente"
    ],
    "c": 0,
    "e": "La disociación de movimientos —la capacidad de mover una parte del cuerpo de forma independiente de otra, por ejemplo mover solo un brazo mientras el resto del cuerpo permanece quieto— refleja un nivel más avanzado de organización y control motor voluntario, y suele mejorar de forma notable a lo largo de la etapa infantil."
   },
   {
    "d": "facil",
    "q": "El equilibrio, tanto estático como dinámico, se trabaja en Infantil a través de actividades como:",
    "o": [
     "Caminar por una línea, mantenerse a la pata coja o desplazarse por bancos suecos",
     "Exclusivamente actividades de lápiz y papel",
     "Solo audición musical pasiva",
     "Actividades sin ningún componente corporal"
    ],
    "c": 0,
    "e": "El equilibrio estático (mantenerse quieto en una postura, como a la pata coja) y dinámico (mantener el control corporal mientras se está en movimiento, como al caminar por un banco sueco) se trabajan en Infantil mediante actividades corporales concretas, como caminar por una línea pintada en el suelo o desplazarse por bancos y colchonetas."
   },
   {
    "d": "media",
    "q": "El desarrollo psicomotor sigue, además de las leyes cefalocaudal y proximodistal, el principio de ir de lo:",
    "o": [
     "Global a lo específico o segmentario",
     "Específico a lo global",
     "Aleatorio sin ningún patrón",
     "Adulto al infantil"
    ],
    "c": 0,
    "e": "El desarrollo psicomotor sigue, además de las leyes cefalocaudal y proximodistal, el principio de progresar de lo global a lo específico o segmentario: al principio el bebé reacciona con todo el cuerpo ante un estímulo (por ejemplo, agita brazos y piernas a la vez ante algo que le sorprende), y con la maduración va siendo capaz de movimientos cada vez más precisos y localizados en una sola parte del cuerpo."
   },
   {
    "d": "facil",
    "q": "La relajación, como contenido de la educación psicomotriz, tiene como finalidad principal:",
    "o": [
     "Favorecer la toma de conciencia corporal y la regulación del tono muscular y emocional",
     "No tiene ninguna finalidad educativa",
     "Sustituir el juego motor",
     "Ser exclusiva de personas adultas"
    ],
    "c": 0,
    "e": "La relajación, como contenido de la educación psicomotriz, favorece la toma de conciencia del propio cuerpo y contribuye a la regulación del tono muscular y del estado emocional; por ejemplo, dedicar unos minutos tras una sesión de juego motor intenso a tumbarse y respirar tranquilamente ayuda al niño a volver a un estado de calma antes de continuar con otra actividad."
   },
   {
    "d": "dificil",
    "q": "La 'psicomotricidad relacional', enfoque impulsado por autores como André Lapierre, otorga especial importancia a:",
    "o": [
     "El componente exclusivamente técnico y deportivo del movimiento",
     "La dimensión afectiva y relacional del movimiento, más allá de sus aspectos puramente motrices",
     "La memorización de secuencias de ejercicios físicos",
     "La ausencia total de interacción entre iguales"
    ],
    "c": 1,
    "e": "La psicomotricidad relacional, vinculada a autores como André Lapierre, pone el énfasis en la dimensión afectiva y relacional del movimiento y el juego corporal —el vínculo, la confianza, la expresión de emociones a través del cuerpo— más allá de sus aspectos puramente técnicos, físicos o deportivos."
   },
   {
    "d": "facil",
    "q": "¿Qué autor consideró la psicomotricidad como un elemento fundamental de la acción educativa?",
    "o": [
     "Le Boulch",
     "Ausubel",
     "Skinner",
     "Maslow"
    ],
    "c": 0,
    "e": "Le Boulch desarrolló una concepción de la 'psicocinética' o educación psicomotriz de gran influencia en el ámbito educativo, en la que el movimiento se considera un medio privilegiado para el desarrollo global del niño y no solo un fin en sí mismo (mejorar una habilidad física concreta)."
   },
   {
    "d": "facil",
    "q": "¿Qué tipo de sensaciones proceden principalmente de estímulos externos?",
    "o": [
     "Interoceptivas",
     "Propioceptivas",
     "Exteroceptivas",
     "Vestibulares exclusivamente"
    ],
    "c": 2,
    "e": "Las sensaciones exteroceptivas informan sobre estímulos procedentes del exterior del cuerpo (por ejemplo, la vista, el oído o el tacto sobre la piel), a diferencia de las sensaciones propioceptivas (información sobre la posición y el movimiento del propio cuerpo, procedente de músculos y articulaciones) o interoceptivas (información sobre el estado de los órganos internos, como el hambre)."
   },
   {
    "d": "media",
    "q": "¿Qué autor destacó especialmente la relación entre movimiento, emoción y construcción de la identidad?",
    "o": [
     "Wallon",
     "Montessori",
     "Ausubel",
     "Decroly"
    ],
    "c": 0,
    "e": "Wallon concedió un papel central al movimiento y a la emoción en el desarrollo infantil, entendiendo que ambos están estrechamente unidos desde el nacimiento y que la actividad motriz es, además de una vía de exploración del entorno, un canal fundamental de expresión y comunicación emocional del niño con quienes lo rodean."
   },
   {
    "d": "facil",
    "q": "¿Cuál es la finalidad principal de la psicomotricidad en Educación Infantil?",
    "o": [
     "Preparar para el deporte competitivo",
     "Favorecer el desarrollo integral",
     "Trabajar exclusivamente la motricidad fina",
     "Aumentar únicamente la fuerza muscular"
    ],
    "c": 1,
    "e": "La psicomotricidad en Educación Infantil persigue favorecer el desarrollo integral del niño (motor, cognitivo, afectivo y social) a través del movimiento, y no está orientada a preparar para el deporte competitivo ni a trabajar de forma aislada la fuerza muscular o la motricidad fina."
   },
   {
    "d": "facil",
    "q": "¿Qué enfoque metodológico resulta especialmente coherente con la psicomotricidad infantil?",
    "o": [
     "Memorización y repetición",
     "Globalización y socialización",
     "Clase magistral",
     "Examen escrito"
    ],
    "c": 1,
    "e": "La psicomotricidad infantil se aborda desde un enfoque global, activo y socializado, coherente con cómo aprende el niño pequeño (a través de la acción y en interacción con los demás), y no mediante memorización, repetición mecánica o clases exclusivamente expositivas."
   },
   {
    "d": "facil",
    "q": "¿Cuál es la técnica de evaluación especialmente adecuada para observar el desarrollo psicomotor en Infantil?",
    "o": [
     "Examen escrito",
     "Observación directa y continua",
     "Prueba de velocidad lectora",
     "Examen memorístico"
    ],
    "c": 1,
    "e": "La observación directa y continua es la técnica de evaluación especialmente adecuada para el desarrollo psicomotor en Infantil, ya que permite recoger información contextualizada sobre cómo se mueve, se coordina y se relaciona el niño en situaciones reales de juego y actividad, algo que un examen escrito no podría captar a esta edad."
   },
   {
    "d": "media",
    "q": "¿Qué material se asocia especialmente con la educación sensorial Montessori?",
    "o": [
     "Cilindros de encaje y torre rosa",
     "Pizarra digital exclusivamente",
     "Banco sueco",
     "Fichas de caligrafía"
    ],
    "c": 0,
    "e": "Los materiales sensoriales Montessori, como los cilindros de encaje (de distinto diámetro o altura) o la torre rosa (cubos de distinto tamaño para apilar en orden), están diseñados para que el niño refine sus sentidos y su percepción de propiedades como el tamaño, el peso o la textura mediante la manipulación autónoma, con un único atributo variando cada vez para facilitar la discriminación."
   },
   {
    "d": "facil",
    "q": "¿Qué ley del desarrollo motor describe el paso del control desde el centro del cuerpo hacia las extremidades?",
    "o": [
     "Céfalo-caudal",
     "Próximo-distal",
     "De masa a específico",
     "De lo concreto a lo abstracto"
    ],
    "c": 1,
    "e": "La ley próximo-distal describe la progresión del control motor desde las partes centrales del cuerpo (hombro, cadera) hacia las extremidades más alejadas (dedos): por ejemplo, un bebé controla antes el movimiento global del brazo que el movimiento fino e independiente de cada dedo."
   },
   {
    "d": "media",
    "q": "¿Qué capacidad se favorece especialmente mediante experiencias psicomotrices ajustadas a la edad?",
    "o": [
     "Solo la fuerza física",
     "Autonomía, autoestima y conocimiento del esquema corporal",
     "Únicamente la memoria verbal",
     "Solo la competencia matemática"
    ],
    "c": 1,
    "e": "Las experiencias psicomotrices ajustadas a la edad favorecen especialmente el conocimiento del esquema corporal, la autonomía (al ganar control sobre el propio cuerpo, el niño puede hacer más cosas por sí mismo) y la autoestima (al experimentar logros motrices), y no solo la fuerza física o una capacidad aislada."
   },
   {
    "d": "media",
    "q": "¿Qué instrumento estandarizado se ha utilizado tradicionalmente para valorar el desarrollo psicomotor en la primera infancia?",
    "o": [
     "Escala de Brunet-Lézine",
     "WISC-V",
     "Raven exclusivamente",
     "Prueba de velocidad lectora"
    ],
    "c": 0,
    "e": "La escala de Brunet-Lézine es un instrumento estandarizado clásico, utilizado tradicionalmente para valorar el desarrollo psicomotor en la primera infancia, que evalúa distintas áreas (motricidad, coordinación, lenguaje, sociabilidad) comparando el desempeño del niño con baremos por edad."
   }
  ]
 },
 {
  "id": "b09",
  "title": "El Niño Descubre a los Otros",
  "questions": [
   {
    "d": "facil",
    "q": "Según la clasificación de Mildred Parten, el juego en el que niños de 2-3 años juegan uno junto a otro sin interactuar realmente se denomina:",
    "o": [
     "Juego cooperativo",
     "Juego paralelo",
     "Juego asociativo",
     "Juego reglado"
    ],
    "c": 1,
    "e": "Mildred Parten clasificó los tipos de juego social según su grado de interacción; el juego paralelo es aquel en que los niños de 2-3 años juegan cerca unos de otros, incluso con materiales similares, pero sin interacción directa entre ellos. Por ejemplo, dos niños pueden estar sentados uno junto al otro haciendo cada uno su propio castillo de arena, sin hablarse ni colaborar, aunque compartan el mismo espacio."
   },
   {
    "d": "facil",
    "q": "El proceso de socialización en la etapa infantil se produce inicialmente a través de:",
    "o": [
     "La escuela exclusivamente",
     "La familia, como primer agente socializador",
     "Los medios de comunicación",
     "El grupo de iguales exclusivamente desde el nacimiento"
    ],
    "c": 1,
    "e": "La familia constituye el primer y más influyente agente de socialización, ya que proporciona al niño las primeras pautas de relación, afecto y comunicación mucho antes de que este entre en contacto con la escuela, los medios de comunicación o el grupo de iguales, que actuarán como agentes socializadores posteriores y complementarios."
   },
   {
    "d": "media",
    "q": "La 'teoría de la mente', es decir, la capacidad de atribuir estados mentales a otras personas, se desarrolla de forma más clara en torno a:",
    "o": [
     "Los 6 meses",
     "Los 4-5 años",
     "Los 10 años",
     "Nunca en la etapa infantil"
    ],
    "c": 1,
    "e": "La teoría de la mente (la capacidad de atribuir a otras personas creencias, deseos e intenciones distintos de los propios) se desarrolla de forma más clara en torno a los 4-5 años, momento en el que los niños superan las clásicas 'tareas de falsa creencia'. Un ejemplo típico es la tarea de Sally-Anne: un niño de 3 años suele creer que Sally sabrá dónde está un objeto que ha sido movido en su ausencia, mientras que uno de 5 años comprende que Sally seguirá creyendo que está en el lugar original, porque no vio el cambio."
   },
   {
    "d": "dificil",
    "q": "Los conflictos entre iguales en el aula de Infantil deben entenderse, desde el punto de vista educativo, como:",
    "o": [
     "Situaciones a evitar siempre mediante la intervención inmediata del adulto",
     "Oportunidades de aprendizaje social que requieren un acompañamiento educativo ajustado",
     "Muestras de mala conducta que deben sancionarse",
     "Fenómenos irrelevantes para el desarrollo social"
    ],
    "c": 1,
    "e": "Los conflictos entre iguales (por un juguete, por un turno) son inherentes a la vida en grupo y deben entenderse como oportunidades de aprendizaje social, no como situaciones a evitar o sancionar automáticamente: acompañados adecuadamente por el adulto, permiten al niño practicar habilidades de negociación, empatía y regulación emocional que necesitará durante toda su vida."
   },
   {
    "d": "facil",
    "q": "La empatía, como capacidad de comprender y compartir los sentimientos de otros, comienza a manifestarse de forma incipiente:",
    "o": [
     "Ya en el primer año de vida (contagio emocional, preocupación empática)",
     "Únicamente a partir de los 7 años",
     "Nunca antes de la adolescencia",
     "Solo tras la escolarización obligatoria"
    ],
    "c": 0,
    "e": "Ya desde el primer año de vida se observan precursores de la empatía, como el contagio emocional (un bebé se pone a llorar al oír llorar a otro bebé) o la preocupación empática incipiente (acercarse a tocar o mirar con atención a alguien que está triste); estas manifestaciones tempranas evolucionan hacia formas de empatía más complejas y deliberadas a lo largo de la infancia."
   },
   {
    "d": "media",
    "q": "El 'juego cooperativo', en el que existe una meta común y reparto de roles, es propio de:",
    "o": [
     "El primer año de vida",
     "El segundo ciclo de Infantil (4-6 años), como culminación del desarrollo social del juego",
     "Nunca aparece en Infantil",
     "Solo se da en la etapa adulta"
    ],
    "c": 1,
    "e": "El juego cooperativo, en el que existe una meta común y un reparto de roles (por ejemplo, organizar entre varios niños 'una tienda' donde unos son vendedores y otros clientes), representa el nivel más avanzado de juego social según la clasificación de Parten, y se consolida hacia el segundo ciclo de Infantil (4-6 años), como culminación de un proceso que empieza con el juego solitario y paralelo."
   },
   {
    "d": "facil",
    "q": "Según Parten, el juego solitario, en el que el niño juega solo sin buscar interacción con otros, es más característico de:",
    "o": [
     "Las primeras edades (bebés y primeros pasos)",
     "El segundo ciclo de Infantil exclusivamente",
     "La edad adulta",
     "No aparece nunca en la etapa infantil"
    ],
    "c": 0,
    "e": "El juego solitario, en el que el niño juega solo, centrado en su propia actividad y sin buscar interacción con otros, es especialmente característico de las primeras edades (bebés y primeros pasos), y va cediendo progresivamente terreno a formas de juego social más complejas (paralelo, asociativo y cooperativo) a medida que el niño crece."
   },
   {
    "d": "dificil",
    "q": "El 'juego asociativo', según Parten, se caracteriza por:",
    "o": [
     "Jugar completamente solo, sin ningún contacto con otros",
     "Interactuar y compartir materiales con otros niños, pero sin una organización de roles ni meta común",
     "Organizar roles y una meta compartida de forma estructurada",
     "No implicar ningún tipo de interacción"
    ],
    "c": 1,
    "e": "En el juego asociativo hay interacción real entre los niños —hablan entre sí, comparten materiales o ideas— pero sin una organización clara de roles ni un objetivo común estructurado, a diferencia del juego cooperativo, más organizado. Por ejemplo, varios niños jugando juntos con los mismos bloques de construcción, sin un plan compartido de qué van a construir, están en un juego asociativo."
   },
   {
    "d": "facil",
    "q": "Los primeros vínculos de amistad entre iguales en Infantil suelen basarse principalmente en:",
    "o": [
     "Criterios abstractos de personalidad compartida",
     "La proximidad física y el compartir actividades y juegos",
     "Acuerdos formales y duraderos",
     "Criterios económicos"
    ],
    "c": 1,
    "e": "Los primeros vínculos de amistad entre iguales en Infantil suelen basarse principalmente en la proximidad física (sentarse cerca, vivir cerca) y en compartir actividades y juegos, más que en criterios abstractos de personalidad o valores compartidos, criterios que sí aparecerán en la amistad de etapas posteriores."
   },
   {
    "d": "media",
    "q": "La agresividad instrumental (para conseguir un objeto o defender un espacio), frecuente en los primeros años, se diferencia de la agresividad hostil en que:",
    "o": [
     "Ambas son idénticas y no existe diferencia relevante",
     "La instrumental busca un fin concreto (obtener algo), mientras que la hostil busca causar daño intencionadamente al otro",
     "La hostil es siempre normativa en Infantil y la instrumental no",
     "Solo la agresividad hostil aparece en la etapa infantil"
    ],
    "c": 1,
    "e": "La agresividad instrumental busca un fin concreto (por ejemplo, quitar un juguete que otro niño tiene) sin intención de dañar deliberadamente, mientras que la agresividad hostil busca causar daño intencionadamente al otro; ambas son frecuentes en los primeros años y requieren una intervención educativa distinta: en la instrumental conviene enseñar a negociar o esperar turno, y en la hostil, trabajar la gestión de la rabia y la empatía."
   },
   {
    "d": "facil",
    "q": "La imitación de roles adultos en el juego simbólico ('jugar a médicos', 'jugar a familias') favorece principalmente:",
    "o": [
     "La comprensión y ensayo de roles y normas sociales",
     "Exclusivamente la motricidad fina",
     "El cálculo matemático",
     "No tiene relación con el descubrimiento de los otros"
    ],
    "c": 0,
    "e": "El juego de roles ('jugar a médicos', 'jugar a familias') favorece principalmente la comprensión y el ensayo de roles y normas sociales presentes en el entorno del niño, permitiéndole practicar de forma segura situaciones sociales reales (ir al médico, cocinar, cuidar a un bebé) antes de afrontarlas fuera del juego."
   },
   {
    "d": "dificil",
    "q": "El concepto de 'descentración social', complementario a la descentración cognitiva de Piaget, hace referencia a:",
    "o": [
     "La capacidad progresiva de considerar la perspectiva, necesidades y sentimientos de otras personas",
     "La incapacidad permanente de considerar a los demás",
     "Un proceso exclusivamente motriz",
     "La memorización de normas sociales sin comprensión"
    ],
    "c": 0,
    "e": "La descentración social, complementaria a la descentración cognitiva descrita por Piaget, es el proceso progresivo por el cual el niño supera su egocentrismo inicial y va siendo capaz de considerar la perspectiva, las necesidades y los sentimientos de otras personas. Por ejemplo, un niño de 3 años puede insistir en enseñar un dibujo a alguien que está de espaldas a él, mientras que uno de 5-6 años ya tiende a ponerse delante para que el otro lo vea."
   },
   {
    "d": "facil",
    "q": "Compartir juguetes y esperar el turno son habilidades sociales que en Infantil:",
    "o": [
     "Se dominan de forma innata desde el nacimiento",
     "Deben aprenderse y practicarse progresivamente con el acompañamiento del adulto",
     "No pueden trabajarse antes de los 6 años",
     "Carecen de relevancia educativa"
    ],
    "c": 1,
    "e": "Compartir juguetes y esperar el turno son habilidades sociales que no se dominan de forma innata, sino que deben aprenderse y practicarse progresivamente, con el acompañamiento y el modelado del adulto (por ejemplo, usando un reloj de arena visual para marcar los turnos con un juguete muy demandado)."
   },
   {
    "d": "media",
    "q": "El 'apego múltiple', es decir, el establecimiento de vínculos de apego con más de una figura significativa (madre, padre, abuelos, educadora...), según la investigación actual:",
    "o": [
     "Es imposible, ya que el bebé solo puede vincularse con una única figura",
     "Es posible y frecuente, aunque suele existir una figura de apego principal",
     "Perjudica siempre el desarrollo emocional del niño",
     "Solo se da en casos de negligencia familiar"
    ],
    "c": 1,
    "e": "La investigación actual sobre el apego reconoce que los bebés pueden establecer vínculos de apego con varias figuras significativas a la vez —madre, padre, abuelos, educadora de referencia— aunque suele existir una figura de apego principal; esto no perjudica el desarrollo, sino que puede aportar al niño una red de seguridad emocional más amplia."
   },
   {
    "d": "facil",
    "q": "El acompañamiento educativo de los conflictos entre iguales debe favorecer, entre otros aspectos:",
    "o": [
     "Que el adulto resuelva siempre el conflicto sin ninguna participación de los niños",
     "Que los propios niños, con apoyo del adulto, aprendan a expresar sus sentimientos y buscar soluciones",
     "Ignorar por completo el conflicto",
     "Sancionar automáticamente a quien haya iniciado el conflicto"
    ],
    "c": 1,
    "e": "El papel educativo ante un conflicto entre iguales no consiste en que el adulto lo resuelva por ellos ni en ignorarlo, sino en acompañar el proceso para que los propios niños aprendan a expresar sus sentimientos, escuchar al otro y buscar juntos una solución, con el apoyo ajustado y progresivamente menor del adulto (un ejemplo de andamiaje aplicado a lo social)."
   },
   {
    "d": "dificil",
    "q": "El 'egocentrismo' descrito por Piaget y el posible 'egoísmo' infantil deben diferenciarse porque:",
    "o": [
     "Son sinónimos exactos y equivalentes",
     "El egocentrismo es una limitación cognitiva propia del desarrollo, mientras que el egoísmo implica una valoración moral de la conducta",
     "El egoísmo es siempre anterior al egocentrismo en el desarrollo",
     "Ninguno de los dos conceptos es aplicable a la etapa infantil"
    ],
    "c": 1,
    "e": "El egocentrismo cognitivo descrito por Piaget es una limitación evolutiva normal del pensamiento preoperacional (la dificultad para descentrarse y adoptar el punto de vista de otro), mientras que el egoísmo implica una valoración moral de la conducta (actuar deliberadamente en beneficio propio a costa de otro); no deben confundirse, ya que un niño egocéntrico no es necesariamente 'egoísta' en el sentido moral del término."
   },
   {
    "d": "facil",
    "q": "Las asambleas y momentos de puesta en común en el aula favorecen especialmente:",
    "o": [
     "El desarrollo de habilidades comunicativas y de convivencia grupal",
     "Exclusivamente la psicomotricidad fina",
     "El aprendizaje memorístico de contenidos",
     "No tienen relación con el desarrollo social"
    ],
    "c": 0,
    "e": "Las asambleas y los momentos de puesta en común en el aula (por ejemplo, al inicio de la jornada, para comentar cómo se sienten o qué planes hay para el día) son espacios privilegiados para desarrollar habilidades comunicativas, de escucha activa y de convivencia democrática en el grupo, más allá de su valor como rutina organizativa."
   },
   {
    "d": "media",
    "q": "El desarrollo del 'juicio moral' en la infancia, según Piaget, evoluciona desde una moral:",
    "o": [
     "Autónoma hacia una moral heterónoma",
     "Heterónoma (basada en la obediencia a normas externas) hacia una moral progresivamente más autónoma",
     "No evoluciona en absoluto durante la infancia",
     "Exclusivamente basada en el castigo durante toda la vida"
    ],
    "c": 1,
    "e": "Piaget describe una evolución del juicio moral desde una moral heterónoma en los primeros años, basada en la obediencia a normas y figuras de autoridad externas (algo está mal 'porque lo dice la maestra' o 'porque castigan'), hacia una moral progresivamente más autónoma, basada en la comprensión, la cooperación y la reciprocidad entre iguales, que se consolida ya en etapas posteriores."
   },
   {
    "d": "facil",
    "q": "La llegada de un hermano o hermana pequeño suele suponer para el niño mayor, entre otros aspectos, la necesidad de:",
    "o": [
     "Reorganizar su lugar en la familia y gestionar emociones como los celos, con el acompañamiento adecuado del adulto",
     "No tiene ningún impacto emocional relevante",
     "Un proceso que debe ocultarse al niño hasta que sea mayor",
     "Una situación que solo afecta al bebé recién llegado"
    ],
    "c": 0,
    "e": "La llegada de un hermano o hermana pequeño suele suponer para el niño mayor la necesidad de reorganizar su lugar dentro de la familia y de gestionar emociones como los celos o la sensación de haber perdido atención exclusiva, procesos que requieren el acompañamiento respetuoso del adulto (por ejemplo, dedicándole momentos exclusivos, sin negar ni ridiculizar esas emociones) en lugar de ocultarle la situación o restarle importancia."
   },
   {
    "d": "dificil",
    "q": "El 'estatus sociométrico' de un niño dentro del grupo de iguales (popular, rechazado, ignorado, controvertido), estudiado mediante técnicas sociométricas, es relevante porque:",
    "o": [
     "No tiene ninguna relación con el bienestar o ajuste social del niño",
     "Puede asociarse con distintos patrones de ajuste social y emocional, orientando la intervención educativa",
     "Es un dato fijo e inmodificable durante toda la infancia",
     "Solo resulta aplicable a partir de la adolescencia"
    ],
    "c": 1,
    "e": "El estatus sociométrico de un niño dentro de su grupo de iguales (popular, rechazado, ignorado o controvertido), estudiado mediante técnicas sociométricas (por ejemplo, preguntando a los niños con quién les gustaría jugar), puede asociarse con distintos patrones de ajuste social y emocional, y ofrece al docente información valiosa —no un dato fijo e inmodificable— para orientar intervenciones que favorezcan la inclusión de todo el alumnado."
   }
  ]
 },
 {
  "id": "b10",
  "title": "Equipamiento, Material Didáctico y Materiales Curriculares en Educación Infantil",
  "questions": [
   {
    "d": "facil",
    "q": "Los materiales didácticos en Infantil deben cumplir, entre otros, el criterio de:",
    "o": [
     "Ser exclusivamente comerciales y estructurados",
     "Adecuación a las características evolutivas y seguridad para el niño o niña",
     "Priorizar el coste elevado sobre la funcionalidad",
     "Ser únicamente de un solo uso posible"
    ],
    "c": 1,
    "e": "Los materiales didácticos en Infantil deben ser seguros y adecuados a las características evolutivas del niño (por ejemplo, sin piezas pequeñas desmontables para bebés que aún se llevan objetos a la boca), y preferiblemente polivalentes, es decir, que admitan varios usos y no un único fin predeterminado, favoreciendo así la manipulación, la exploración y el juego libre."
   },
   {
    "d": "media",
    "q": "El material Montessori se caracteriza principalmente por:",
    "o": [
     "Ser autocorrectivo y estar diseñado para el trabajo autónomo del niño",
     "Requerir siempre la supervisión constante del adulto para su uso",
     "Ser exclusivamente simbólico, sin manipulación",
     "No tener ninguna finalidad didáctica"
    ],
    "c": 0,
    "e": "Los materiales Montessori (como las torres, cilindros o letras de papel de lija) están diseñados para ser autocorrectivos —el propio material permite al niño detectar si se ha equivocado, sin necesidad de que el adulto le corrija— y para el trabajo autónomo, respetando el ritmo individual de cada niño. Por ejemplo, con la torre rosa, si un cubo no encaja en el orden correcto de tamaño, el propio niño puede advertir visualmente el error y corregirlo él mismo."
   },
   {
    "d": "facil",
    "q": "Los 'dones' o 'regalos' (Gaben), material estructurado de bloques y formas geométricas, fueron creados por:",
    "o": [
     "Friedrich Fröbel",
     "Ovide Decroly",
     "Loris Malaguzzi",
     "Célestin Freinet"
    ],
    "c": 0,
    "e": "Friedrich Fröbel, creador del concepto de 'kindergarten' (jardín de infancia), diseñó los 'dones' o Gaben, un conjunto progresivo de materiales (esferas, cubos, cilindros, listones) pensado para el juego educativo sensorial y manipulativo, con el que el niño descubre formas, tamaños y relaciones geométricas a través de la propia actividad."
   },
   {
    "d": "facil",
    "q": "Se denomina material fungible a aquel que:",
    "o": [
     "Se puede reutilizar indefinidamente",
     "Se consume o se gasta con el uso (papel, pintura, pegamento...)",
     "Solo se usa en el área de psicomotricidad",
     "Está prohibido en Educación Infantil"
    ],
    "c": 1,
    "e": "El material fungible es aquel que se consume o se gasta con el uso, como el papel, las ceras, el pegamento o la pintura, y debe reponerse periódicamente; se distingue del material inventariable o no fungible (como el mobiliario o los materiales de psicomotricidad de gran tamaño), que tiene una vida útil prolongada y se registra en el inventario del centro."
   },
   {
    "d": "dificil",
    "q": "La distribución y organización del material en el aula por 'rincones' o 'zonas' responde principalmente al principio de:",
    "o": [
     "Favorecer la autonomía, la elección y la actividad significativa del alumnado",
     "Facilitar el control disciplinario del grupo",
     "Reducir el número de materiales disponibles",
     "Centralizar todo el material en manos del docente"
    ],
    "c": 0,
    "e": "La organización del aula por rincones o zonas de trabajo (rincón de la casita, de construcciones, de la biblioteca) responde al principio de favorecer la autonomía, la elección libre y la actividad significativa del alumnado, permitiendo que cada niño escoja, explore y actúe según sus propios intereses en lugar de seguir en todo momento las instrucciones del docente."
   },
   {
    "d": "media",
    "q": "¿Qué normativa de referencia regula los requisitos de seguridad de los juguetes y materiales infantiles en la UE?",
    "o": [
     "El marcado CE y la Directiva europea de seguridad de los juguetes",
     "No existe normativa específica",
     "Solo normativa autonómica gallega",
     "Normativa exclusivamente sanitaria hospitalaria"
    ],
    "c": 0,
    "e": "El marcado CE, en aplicación de la Directiva europea 2009/48/CE sobre seguridad de los juguetes, garantiza que un juguete o material infantil cumple los requisitos mínimos de seguridad establecidos en la Unión Europea (por ejemplo, ausencia de sustancias tóxicas o de piezas que supongan riesgo de atragantamiento), y es una referencia normativa obligada a la hora de seleccionar materiales para el aula."
   },
   {
    "d": "facil",
    "q": "El material 'no estructurado' (cajas, telas, elementos de la naturaleza) se caracteriza, frente al material estructurado, por:",
    "o": [
     "Tener un único uso predeterminado",
     "Admitir múltiples usos según la imaginación del niño, favoreciendo la creatividad",
     "Ser siempre más caro",
     "Estar prohibido en el aula de Infantil"
    ],
    "c": 1,
    "e": "El material no estructurado (cajas de cartón, telas, corchos, elementos de la naturaleza como piñas o piedras) no tiene un uso predeterminado, lo que estimula la creatividad y la exploración libre del niño: una misma caja puede convertirse, según el momento, en una casa, un coche o un sombrero, en contraste con un juguete estructurado que suele tener un único uso previsto."
   },
   {
    "d": "dificil",
    "q": "El 'juego heurístico', propuesto por Elinor Goldschmied para el primer ciclo de Infantil, consiste en:",
    "o": [
     "Ofrecer juguetes comerciales estructurados exclusivamente",
     "Ofrecer objetos cotidianos y de la naturaleza (no juguetes) para su libre exploración sensorial",
     "Un tipo de examen para bebés",
     "Una técnica exclusiva de expresión plástica"
    ],
    "c": 1,
    "e": "El juego heurístico, ideado por Elinor Goldschmied para el primer ciclo de Infantil, consiste en ofrecer a bebés y niños pequeños objetos cotidianos variados que no son juguetes convencionales —cucharas de madera, tapones, telas, conchas, anillas metálicas— para que los exploren libremente con todos los sentidos, sin intervención directa del adulto durante la exploración, salvo para garantizar la seguridad."
   },
   {
    "d": "facil",
    "q": "El 'cesto de los tesoros' (treasure basket), también propuesto por Goldschmied, está destinado principalmente a:",
    "o": [
     "Bebés que aún no se desplazan, en la etapa de exploración sensorial sentada",
     "Niños de 5-6 años exclusivamente",
     "Actividades de psicomotricidad gruesa",
     "El área de matemáticas avanzadas"
    ],
    "c": 0,
    "e": "El 'cesto de los tesoros' (treasure basket), también propuesto por Goldschmied, está destinado a bebés que ya son capaces de sentarse por sí mismos pero aún no se desplazan gateando, y consiste en un cesto con una gran variedad de objetos cotidianos y naturales (no juguetes de plástico) para que el bebé, sentado, los explore libremente con las manos y la boca."
   },
   {
    "d": "media",
    "q": "La elección y renovación periódica de los materiales de un rincón o ambiente de aprendizaje debe basarse fundamentalmente en:",
    "o": [
     "Un calendario fijo sin relación con el proceso del grupo",
     "La observación de los intereses, el uso real y la evolución del proceso de aprendizaje del alumnado",
     "El azar, sin ningún criterio pedagógico",
     "Exclusivamente el presupuesto disponible sin otro criterio"
    ],
    "c": 1,
    "e": "La elección y renovación periódica de los materiales de un rincón debe basarse en la observación del interés y el uso real que el alumnado hace de ellos, así como en la evolución de sus procesos de aprendizaje (por ejemplo, retirar un puzle que ya nadie usa porque resulta demasiado fácil e introducir otro más complejo), y no en un calendario fijo ni en el mero azar."
   },
   {
    "d": "facil",
    "q": "El mobiliario del aula de Infantil (mesas, sillas, estanterías) debe caracterizarse principalmente por ser:",
    "o": [
     "Adaptado a la altura y proporciones del niño, favoreciendo su autonomía",
     "Idéntico al mobiliario de un aula de adultos",
     "Fijo e inamovible durante todo el curso",
     "Prescindible, ya que no influye en el aprendizaje"
    ],
    "c": 0,
    "e": "El mobiliario del aula de Infantil (mesas, sillas, estanterías) debe estar adaptado a la altura y las proporciones del niño, de modo que pueda sentarse correctamente, alcanzar los materiales por sí mismo desde una estantería baja, o guardar sus pertenencias sin depender siempre del adulto, favoreciendo así su autonomía y también su seguridad postural."
   },
   {
    "d": "dificil",
    "q": "Los materiales audiovisuales y las TIC en el aula de Infantil deben utilizarse, según los principios pedagógicos de la etapa, de forma:",
    "o": [
     "Exclusiva, sustituyendo la manipulación y la experiencia directa",
     "Complementaria y puntual, sin sustituir la experiencia directa, el juego y la interacción social",
     "Continua durante toda la jornada escolar",
     "Prohibida en cualquier caso"
    ],
    "c": 1,
    "e": "Según los principios pedagógicos de la etapa, los materiales audiovisuales y las TIC deben utilizarse de forma complementaria y puntual, como un recurso más entre otros, sin sustituir la manipulación, la experiencia directa, el juego y la interacción social, que son los pilares fundamentales del aprendizaje en Infantil."
   },
   {
    "d": "facil",
    "q": "El material específico de psicomotricidad (colchonetas, aros, picas, bancos suecos) tiene como finalidad principal:",
    "o": [
     "Favorecer el desarrollo motor, el equilibrio y la exploración corporal",
     "Sustituir el material de la biblioteca de aula",
     "Ser utilizado exclusivamente en el área de lenguaje",
     "Decorar el aula sin uso funcional"
    ],
    "c": 0,
    "e": "El material específico de psicomotricidad (colchonetas, aros, picas, bancos suecos, túneles) está diseñado para favorecer el desarrollo motor, el equilibrio, la coordinación y la exploración corporal del alumnado, en sesiones dedicadas específicamente al movimiento y no como mero elemento decorativo del aula."
   },
   {
    "d": "media",
    "q": "El inventario y catalogación de materiales de un centro de Infantil forma parte de la gestión del centro y tiene como finalidad principal:",
    "o": [
     "Un mero trámite burocrático sin ninguna utilidad pedagógica",
     "Facilitar la planificación, el mantenimiento y la reposición adecuada de los recursos didácticos",
     "Limitar el acceso del alumnado a los materiales",
     "Sustituir la programación didáctica"
    ],
    "c": 1,
    "e": "El inventario y catalogación de los materiales de un centro de Infantil no es un mero trámite burocrático, sino que facilita la planificación de compras, el mantenimiento (por ejemplo, saber qué materiales necesitan revisión o sustitución) y la reposición adecuada de recursos didácticos, optimizando así su uso pedagógico real en el aula."
   },
   {
    "d": "facil",
    "q": "Los libros y cuentos de la biblioteca de aula deben seleccionarse teniendo en cuenta principalmente:",
    "o": [
     "La adecuación a la edad, los intereses del grupo y la calidad literaria e ilustrativa",
     "Únicamente el precio más económico",
     "Que no contengan ninguna imagen",
     "Ser siempre los mismos durante todo el curso escolar"
    ],
    "c": 0,
    "e": "La selección de los libros y cuentos de la biblioteca de aula debe atender a la adecuación a la edad y a los intereses del grupo, así como a la calidad tanto literaria (la historia, el lenguaje) como de las ilustraciones, y no limitarse a criterios económicos ni mantenerse invariable durante todo el curso, ya que conviene renovarla en función de los temas trabajados."
   },
   {
    "d": "dificil",
    "q": "El material adaptado para alumnado con necesidades específicas de apoyo educativo (pictogramas, materiales de manipulación adaptados, mobiliario específico) responde al principio de:",
    "o": [
     "Segregación del alumnado con necesidades específicas",
     "Atención a la diversidad e inclusión educativa",
     "Un gasto innecesario que debe evitarse",
     "Exclusividad para centros de educación especial"
    ],
    "c": 1,
    "e": "La disponibilidad de materiales adaptados para alumnado con necesidades específicas de apoyo educativo (pictogramas para la comunicación, materiales de manipulación adaptados a distintas capacidades motrices, mobiliario específico) responde al principio de atención a la diversidad e inclusión educativa, y es necesaria en cualquier centro ordinario, no solo en centros de educación especial."
   },
   {
    "d": "facil",
    "q": "El rincón de la 'casita' o 'juego simbólico' en el aula de Infantil se equipa habitualmente con:",
    "o": [
     "Material de imitación de la vida cotidiana (cocina, muñecos, ropa de disfraces)",
     "Exclusivamente material de psicomotricidad gruesa",
     "Solo instrumentos musicales",
     "Material propio de matemáticas avanzadas"
    ],
    "c": 0,
    "e": "El rincón de la 'casita' o del juego simbólico se equipa habitualmente con material que reproduce elementos de la vida cotidiana —una cocinita, muñecos, vajilla de juguete, ropa de disfraces— favoreciendo el juego de roles y la representación de situaciones familiares y sociales que el niño observa en su entorno."
   },
   {
    "d": "media",
    "q": "La normativa sobre accesibilidad universal y diseño para todas las personas, aplicada al equipamiento de un centro de Infantil, implica que:",
    "o": [
     "Solo debe aplicarse en centros de educación especial",
     "El espacio y los materiales deben ser accesibles y utilizables por todo el alumnado, independientemente de sus capacidades",
     "Es un aspecto opcional sin relevancia normativa",
     "Afecta únicamente a los espacios exteriores del centro"
    ],
    "c": 1,
    "e": "El principio de accesibilidad universal y diseño para todas las personas, aplicado al equipamiento de un centro de Infantil, implica que tanto los espacios (rampas, anchura de puertas) como los materiales deben poder ser utilizados por todo el alumnado, con independencia de sus capacidades físicas o sensoriales, en cualquier centro educativo ordinario, y no es un aspecto opcional ni exclusivo de la educación especial."
   },
   {
    "d": "facil",
    "q": "Los materiales de psicomotricidad de gran tamaño (colchonetas, módulos de espuma, túneles) se consideran, dentro de la clasificación de materiales, como material:",
    "o": [
     "Fungible",
     "Inventariable o no fungible, de uso prolongado en el tiempo",
     "Exclusivo del área de matemáticas",
     "Sin ninguna clasificación posible"
    ],
    "c": 1,
    "e": "Los materiales de psicomotricidad de gran tamaño (colchonetas, módulos de espuma, túneles) se clasifican como material inventariable o no fungible, ya que no se consumen con el uso, tienen una vida útil prolongada y deben registrarse en el inventario del centro para su seguimiento y mantenimiento, a diferencia de materiales fungibles como el papel o la pintura."
   },
   {
    "d": "dificil",
    "q": "La elaboración de un 'protocolo de limpieza y desinfección' de los materiales y juguetes en el aula de Infantil, especialmente en el primer ciclo, responde principalmente a criterios de:",
    "o": [
     "Estética del aula, sin relación con la salud",
     "Prevención de riesgos sanitarios e higiene, dada la tendencia de los bebés a llevarse los objetos a la boca",
     "Un trámite burocrático sin utilidad práctica",
     "Exclusividad para centros privados"
    ],
    "c": 1,
    "e": "La elaboración de protocolos de limpieza y desinfección de materiales y juguetes, especialmente relevante en el primer ciclo de Infantil, responde a criterios de prevención de riesgos sanitarios e higiene, dado que bebés y niños pequeños tienden a explorar los objetos llevándoselos a la boca, lo que exige una limpieza más frecuente y rigurosa que en etapas posteriores."
   }
  ]
 },
 {
  "id": "b11",
  "title": "Evolución de la Expresión Plástica en los Niños y Niñas",
  "questions": [
   {
    "d": "facil",
    "q": "La primera etapa de la evolución del dibujo infantil, caracterizada por trazos sin intención representativa, se denomina:",
    "o": [
     "Etapa del realismo visual",
     "Etapa del garabateo",
     "Etapa esquemática",
     "Etapa del pseudonaturalismo"
    ],
    "c": 1,
    "e": "El garabateo (aproximadamente de 1-2 a 3-4 años) es la primera fase de la evolución del dibujo infantil: son trazos motrices, motivados por el placer del propio movimiento, sin intención representativa inicial. Solo más adelante, dentro de esta misma etapa, el niño empieza a poner nombre a lo que ha trazado, aunque el dibujo aún no se le parezca visualmente."
   },
   {
    "d": "media",
    "q": "Según la clasificación clásica de Viktor Lowenfeld, tras el garabateo, la siguiente etapa evolutiva del dibujo infantil es:",
    "o": [
     "Etapa preesquemática",
     "Etapa del realismo",
     "Pseudonaturalismo",
     "Periodo de la decisión"
    ],
    "c": 0,
    "e": "Lowenfeld sitúa, tras el garabateo (2-4 años), la etapa preesquemática (4-7 años), en la que aparecen las primeras formas representativas intencionadas, como la figura humana en forma de 'renacuajo' (una cabeza de la que salen directamente las extremidades). A partir de esta etapa el dibujo deja de ser un simple ejercicio motor y se convierte en un intento consciente de representar la realidad."
   },
   {
    "d": "facil",
    "q": "El llamado 'monigote' o figura 'cabezón/renacuajo' en el dibujo de la figura humana es característico de:",
    "o": [
     "El final de la etapa de Infantil, hacia los 6 años",
     "Los primeros intentos de representación de la figura humana, en torno a los 3-4 años",
     "Bebés de pocos meses",
     "Nunca aparece en el dibujo infantil"
    ],
    "c": 1,
    "e": "El 'renacuajo' o figura 'cabezón' (una cabeza grande de la que salen directamente las piernas y a veces los brazos, sin tronco diferenciado) es una de las primeras formas de representación de la figura humana, típica en torno a los 3-4 años, y refleja que el niño representa lo que para él es más relevante del cuerpo (la cara, con la que se comunica) antes que una anatomía completa y proporcionada."
   },
   {
    "d": "dificil",
    "q": "La expresión plástica en Infantil debe entenderse, desde el punto de vista educativo, como:",
    "o": [
     "Un medio de expresión y comunicación, no solo un producto estético final",
     "Exclusivamente una actividad de tiempo libre sin valor educativo",
     "Una habilidad técnica a evaluar por su perfección",
     "Una actividad reservada al segundo ciclo"
    ],
    "c": 0,
    "e": "Más allá del resultado estético, la expresión plástica en Infantil debe entenderse como un medio de expresión y comunicación: a través del dibujo, el modelado o la pintura, el niño representa su mundo interior, sus emociones y su forma de ver la realidad. Por ejemplo, un niño puede dibujar a su familia con un tamaño de figura mayor para quien siente más cercano afectivamente, sin que ello responda a ningún criterio de proporción realista."
   },
   {
    "d": "media",
    "q": "El papel del maestro o maestra ante las producciones plásticas infantiles debe ser preferentemente:",
    "o": [
     "Corregir el dibujo para que se ajuste a la realidad",
     "Ofrecer modelos que el niño deba copiar de forma exacta",
     "Respetar el proceso, ofrecer variedad de materiales y evitar valoraciones estéticas comparativas",
     "Evaluar únicamente el resultado final con notas numéricas"
    ],
    "c": 2,
    "e": "Ante las producciones plásticas infantiles, el adulto debe respetar el proceso creativo de cada niño, ofrecer una variedad de materiales y evitar tanto corregir el dibujo para 'ajustarlo a la realidad' como imponer modelos que deba copiar de forma exacta, ya que ello limitaría su expresión personal y podría generar frustración o dependencia del modelo adulto."
   },
   {
    "d": "facil",
    "q": "El modelado con materiales como plastilina o arcilla favorece especialmente:",
    "o": [
     "La motricidad fina, la percepción táctil y la expresión tridimensional",
     "Únicamente la memoria auditiva",
     "El desarrollo del lenguaje oral exclusivamente",
     "La lectoescritura formal"
    ],
    "c": 0,
    "e": "El modelado con materiales como la plastilina o la arcilla favorece especialmente la motricidad fina (amasar, estirar, pellizcar), la percepción táctil y la posibilidad de representar en tres dimensiones, complementando así al dibujo, que es bidimensional. Por ejemplo, modelar una figura de animal con plastilina exige coordinar ambas manos de una forma distinta a sostener un lápiz."
   },
   {
    "d": "facil",
    "q": "Dentro de la etapa del garabateo, la primera fase suele denominarse 'garabato descontrolado' o 'sin control', caracterizada por:",
    "o": [
     "Trazos precisos con intención representativa clara",
     "Movimientos amplios y poco controlados, motivados por el placer motor del propio gesto",
     "Un dibujo detallado de la figura humana",
     "La ausencia total de movimiento"
    ],
    "c": 1,
    "e": "El garabato descontrolado o 'sin control' es la primera fase del garabateo: movimientos amplios y poco precisos sobre el papel, motivados por el placer del propio gesto motor, sin ninguna intención representativa todavía. Es habitual, por ejemplo, que un niño de 18 meses mueva el brazo con energía sobre el papel disfrutando del propio movimiento, más que del resultado visual."
   },
   {
    "d": "dificil",
    "q": "El 'garabato con nombre', fase evolutiva que sigue al garabato controlado, se caracteriza porque el niño:",
    "o": [
     "Aún no puede sostener el útil de dibujo",
     "Comienza a otorgar significado o nombre a sus trazos, aunque no exista una correspondencia visual objetiva",
     "Domina ya la perspectiva y la proporción",
     "Deja de dibujar por completo"
    ],
    "c": 1,
    "e": "En el garabato con nombre, fase que sigue al garabato controlado, el niño comienza a otorgar significado o nombre a sus trazos ('esto es mi perro'), aunque el dibujo no guarde aún ninguna correspondencia visual objetiva con lo nombrado; es un paso clave porque muestra la intención simbólica de representar algo, aunque la habilidad gráfica todavía no lo permita."
   },
   {
    "d": "facil",
    "q": "Los colores utilizados por los niños pequeños en sus primeras producciones plásticas suelen elegirse principalmente por:",
    "o": [
     "Su fidelidad realista al objeto representado",
     "Preferencias personales o disponibilidad, más que por realismo cromático",
     "Criterios exclusivamente técnicos de mezcla de color",
     "Imitación exacta de un modelo adulto"
    ],
    "c": 1,
    "e": "En las primeras producciones plásticas, los niños suelen elegir los colores por preferencia personal o por la disponibilidad de materiales, más que por fidelidad realista al objeto representado: es frecuente, por ejemplo, que un niño pinte un sol de color verde simplemente porque es su color favorito, sin que eso indique ningún problema de percepción del color."
   },
   {
    "d": "media",
    "q": "La técnica del 'rasgado y pegado' (collage) en Infantil favorece especialmente:",
    "o": [
     "La motricidad fina, la coordinación óculo-manual y la creatividad compositiva",
     "Exclusivamente la memoria auditiva",
     "El desarrollo del lenguaje matemático avanzado",
     "No tiene relación con la expresión plástica"
    ],
    "c": 0,
    "e": "El rasgado y pegado (collage) desarrolla la motricidad fina (controlar la fuerza y dirección al rasgar papel) y la coordinación óculo-manual, además de fomentar la composición creativa y la exploración de distintas texturas y materiales al combinar piezas de formas y colores variados sobre una base común."
   },
   {
    "d": "facil",
    "q": "La pintura con los dedos (dactilopintura) es una técnica especialmente adecuada para las primeras edades porque:",
    "o": [
     "Requiere un dominio técnico avanzado del pincel",
     "Favorece la exploración sensorial directa sin necesidad de un útil intermedio",
     "Está reservada exclusivamente a niños de 6 años",
     "No tiene ningún valor educativo"
    ],
    "c": 1,
    "e": "La dactilopintura (pintura con los dedos) es especialmente adecuada para las primeras edades porque permite una exploración sensorial directa del color y la textura sin necesidad de dominar previamente un útil intermedio como el pincel, cuyo manejo requiere una motricidad fina más desarrollada de la que tiene un niño muy pequeño."
   },
   {
    "d": "dificil",
    "q": "El 'esquema humano' que aparece durante la etapa preesquemática y esquemática tiende a evolucionar progresivamente hacia:",
    "o": [
     "Una representación cada vez más simplificada y menos detallada",
     "Una representación cada vez más detallada, proporcionada y cercana al realismo visual",
     "La desaparición total del dibujo de la figura humana",
     "Un retroceso hacia el garabato sin control"
    ],
    "c": 1,
    "e": "El esquema humano que aparece durante las etapas preesquemática y esquemática tiende a evolucionar progresivamente hacia una representación cada vez más detallada, proporcionada y cercana al realismo visual: el 'renacuajo' de los 3-4 años va incorporando con la edad tronco, ropa, dedos diferenciados y proporciones más ajustadas, en un proceso que continúa más allá de la etapa infantil."
   },
   {
    "d": "facil",
    "q": "El uso de distintos tamaños de papel y soportes (grande, pequeño, vertical, horizontal) en las actividades plásticas de Infantil tiene como finalidad:",
    "o": [
     "Enriquecer la experiencia gráfico-plástica y adaptar la propuesta a la actividad",
     "No tiene ninguna relevancia pedagógica",
     "Limitar la creatividad del alumnado",
     "Ser exclusivo del segundo ciclo"
    ],
    "c": 0,
    "e": "Variar el tamaño y la orientación del soporte (papel grande o pequeño, vertical u horizontal) enriquece la experiencia gráfico-plástica, ya que cada formato invita a un tipo de trazo y de composición distinto: un papel muy grande favorece el movimiento amplio del brazo, mientras que uno pequeño exige mayor control y precisión."
   },
   {
    "d": "media",
    "q": "El concepto de 'transparencia' en el dibujo infantil (por ejemplo, dibujar lo que hay dentro de una casa viéndose a través de la pared) refleja:",
    "o": [
     "Un error técnico que debe corregirse de inmediato",
     "La representación de lo que el niño sabe o conoce sobre el objeto, más que de lo que ve literalmente",
     "La incapacidad total de dibujar",
     "Un signo de trastorno grave del desarrollo"
    ],
    "c": 1,
    "e": "La 'transparencia' en el dibujo infantil (por ejemplo, dibujar los muebles dentro de una casa como si las paredes fueran de cristal) refleja el llamado 'realismo intelectual': el niño representa lo que sabe o conoce sobre el objeto —incluidas partes que en realidad no se ven desde fuera— en lugar de limitarse a lo que percibe visualmente desde un único punto de vista, algo que no debe corregirse como si fuera un error."
   },
   {
    "d": "facil",
    "q": "Ofrecer una amplia variedad de materiales plásticos (ceras, témperas, rotuladores, materiales de desecho) en Infantil tiene como finalidad principal:",
    "o": [
     "Enriquecer la experiencia expresiva y sensorial del alumnado",
     "Complicar innecesariamente la actividad",
     "Limitar la creatividad a una única técnica",
     "No tiene ninguna finalidad pedagógica"
    ],
    "c": 0,
    "e": "Ofrecer una amplia variedad de materiales plásticos (ceras, témperas, rotuladores, materiales de desecho) enriquece la experiencia sensorial y expresiva del alumnado, permitiéndole descubrir distintas texturas, posibilidades técnicas (un trazo fino con rotulador frente a una mancha amplia con témpera) y formas de representar una misma idea."
   },
   {
    "d": "dificil",
    "q": "El llamado 'realismo intelectual', propio de las primeras etapas del dibujo infantil, se diferencia del 'realismo visual' (propio de etapas posteriores) en que el primero:",
    "o": [
     "Representa fielmente la perspectiva visual del objeto",
     "Representa lo que el niño conoce del objeto, aunque no coincida con la perspectiva visual real",
     "Es exclusivo de la etapa adulta",
     "No existe ninguna diferencia entre ambos conceptos"
    ],
    "c": 1,
    "e": "El realismo intelectual, propio de las primeras etapas del dibujo infantil, representa lo que el niño conoce del objeto (por ejemplo, dibujando las cuatro patas de una mesa aunque desde ese ángulo solo se vean dos), mientras que el realismo visual, propio de etapas más avanzadas, busca representar fielmente la perspectiva visual real desde un punto de vista concreto, tal y como se vería en una fotografía."
   },
   {
    "d": "facil",
    "q": "La exposición de las producciones plásticas del alumnado en el aula o el centro tiene, entre otras, la función de:",
    "o": [
     "Valorar y dar visibilidad al proceso y trabajo de cada niño, reforzando su autoestima",
     "Comparar y clasificar a los niños según su nivel técnico",
     "Sustituir la evaluación del resto de áreas",
     "No tiene ninguna función educativa"
    ],
    "c": 0,
    "e": "Exponer las producciones plásticas del alumnado en el aula o en los pasillos del centro valora y da visibilidad al proceso y al esfuerzo de cada niño, reforzando su autoestima y su sentido de pertenencia al grupo, y no debe utilizarse para comparar o clasificar el nivel técnico de unos niños frente a otros."
   },
   {
    "d": "media",
    "q": "El uso de la 'línea de base' o 'línea de tierra' en los dibujos de niños de 4-5 años, sobre la que se apoyan las figuras representadas, indica:",
    "o": [
     "Un avance en la organización espacial de la composición gráfica",
     "Un retroceso hacia el garabateo",
     "La incapacidad de organizar el espacio del papel",
     "Un signo de trastorno del desarrollo"
    ],
    "c": 0,
    "e": "La aparición de la 'línea de base' o 'línea de tierra' (una línea horizontal sobre la que el niño de 4-5 años empieza a apoyar las figuras que dibuja, en lugar de dejarlas flotando sin orden por el papel) indica un avance en la organización espacial de la composición gráfica, un paso hacia una representación más estructurada del espacio."
   },
   {
    "d": "facil",
    "q": "El estampado (con esponjas, sellos, elementos naturales) es una técnica plástica que en Infantil favorece especialmente:",
    "o": [
     "La experimentación con texturas, formas y la composición repetitiva",
     "Exclusivamente la memoria auditiva",
     "El desarrollo del lenguaje matemático avanzado",
     "No tiene relación con la expresión plástica"
    ],
    "c": 0,
    "e": "El estampado (con esponjas, sellos improvisados con elementos naturales, o incluso las propias manos) permite experimentar con texturas, formas y patrones que se repiten, favoreciendo tanto la creatividad compositiva como la coordinación motriz, de una manera lúdica y con resultados visuales inmediatos que motivan al niño a repetir la acción."
   },
   {
    "d": "dificil",
    "q": "El concepto de 'proceso frente a producto' en la valoración de la expresión plástica infantil defiende que el adulto debe priorizar:",
    "o": [
     "Exclusivamente la perfección técnica del resultado final",
     "La experiencia, la exploración y el proceso creativo vivido por el niño, más que el resultado estético final",
     "Comparar el resultado con un modelo adulto predefinido",
     "Puntuar numéricamente cada producción"
    ],
    "c": 1,
    "e": "El enfoque de 'proceso frente a producto' en la valoración de la expresión plástica infantil defiende que el adulto debe priorizar la experiencia, la exploración sensorial y el proceso creativo vivido por el niño mientras crea, más que el resultado estético final; por eso no tiene sentido, en Infantil, puntuar numéricamente un dibujo o compararlo con un modelo predefinido, sino valorar el disfrute y el aprendizaje que ha supuesto la actividad."
   }
  ]
 },
 {
  "id": "b12",
  "title": "Formación de Capacidades Relacionadas con el Desarrollo Lógico-Matemático",
  "questions": [
   {
    "d": "facil",
    "q": "Según Piaget, la construcción del número en el niño se apoya en dos tipos de relaciones lógicas básicas:",
    "o": [
     "Clasificación y seriación",
     "Adición y sustracción",
     "Medida y estimación",
     "Geometría y topología"
    ],
    "c": 0,
    "e": "Piaget explica que el concepto de número se construye a partir de la síntesis de dos operaciones lógicas: la clasificación (agrupar elementos por semejanzas, por ejemplo todos los objetos rojos) y la seriación (ordenarlos según un criterio de variación, por ejemplo de más pequeño a más grande); el número surge al combinar el aspecto cardinal (cuántos hay) con el ordinal (en qué posición está cada uno) de estas dos operaciones."
   },
   {
    "d": "media",
    "q": "El proceso de conteo en Infantil requiere el dominio del 'principio de correspondencia biunívoca', que consiste en:",
    "o": [
     "Contar siempre empezando por el número más grande",
     "Asignar una y solo una palabra-número a cada elemento contado",
     "Memorizar la serie numérica sin contar objetos",
     "Usar exclusivamente los dedos para contar"
    ],
    "c": 1,
    "e": "La correspondencia biunívoca (o uno a uno) es el principio del conteo por el cual cada elemento de una colección se asocia con una y solo una palabra-número, sin saltarse ningún objeto ni contar el mismo dos veces. Por ejemplo, al contar cuatro manzanas, hay que tocar o señalar cada una diciendo 'uno, dos, tres, cuatro' exactamente una vez por manzana; los errores típicos de los niños pequeños (contar una manzana dos veces, o decir dos números tocando solo un objeto) reflejan que este principio aún no está consolidado."
   },
   {
    "d": "facil",
    "q": "El aprendizaje de las nociones espaciales (dentro-fuera, arriba-abajo, cerca-lejos) en Infantil se apoya fundamentalmente en:",
    "o": [
     "La memorización verbal de conceptos abstractos",
     "La propia experiencia corporal y motriz del niño en el espacio",
     "Fichas y ejercicios de lápiz y papel exclusivamente",
     "El uso exclusivo de las nuevas tecnologías"
    ],
    "c": 1,
    "e": "Las nociones espaciales (dentro-fuera, arriba-abajo, cerca-lejos) se construyen fundamentalmente a partir de la propia experiencia corporal y motriz del niño en el espacio —desplazarse, meterse dentro de una caja, subir a un banco— y no mediante la memorización verbal de conceptos abstractos ni únicamente a través de fichas de lápiz y papel, que llegan después de esa vivencia directa."
   },
   {
    "d": "facil",
    "q": "La clasificación, como capacidad lógico-matemática, consiste en:",
    "o": [
     "Ordenar elementos según un criterio de magnitud creciente o decreciente",
     "Agrupar objetos según un criterio común (color, forma, tamaño...)",
     "Contar objetos de una colección",
     "Medir longitudes con instrumentos"
    ],
    "c": 1,
    "e": "Clasificar consiste en agrupar objetos que comparten un atributo o criterio común, como el color, la forma o el tamaño (por ejemplo, juntar todos los botones rojos), mientras que seriar consiste en ordenarlos según un criterio de variación (por ejemplo, colocar varios lápices de menor a mayor longitud); ambas son operaciones lógicas distintas y complementarias, base de la construcción del número según Piaget."
   },
   {
    "d": "dificil",
    "q": "En Infantil, antes de trabajar el número, resulta fundamental el desarrollo de:",
    "o": [
     "La escritura de cifras de forma mecánica",
     "El pensamiento lógico y las nociones de cantidad a través de la manipulación",
     "El cálculo mental complejo",
     "Las tablas de multiplicar"
    ],
    "c": 1,
    "e": "Antes de trabajar el número de forma simbólica, resulta fundamental en Infantil desarrollar el pensamiento lógico y las nociones de cantidad a través de la manipulación directa —comparar, clasificar, seriar, estimar cantidades de objetos reales—, ya que escribir cifras de memoria sin haber construido antes estas nociones lleva a un aprendizaje mecánico y poco significativo del número."
   },
   {
    "d": "facil",
    "q": "El uso de material manipulativo como los bloques lógicos de Dienes tiene como finalidad principal:",
    "o": [
     "Desarrollar la clasificación y las relaciones lógicas a partir de atributos (forma, color, tamaño, grosor)",
     "Enseñar exclusivamente los colores primarios",
     "Sustituir el juego simbólico",
     "Trabajar únicamente la psicomotricidad gruesa"
    ],
    "c": 0,
    "e": "Los bloques lógicos de Zoltan Dienes son un material manipulativo formado por piezas que varían en cuatro atributos —forma (círculo, cuadrado, triángulo, rectángulo), color, tamaño y grosor— y permiten trabajar la clasificación, la seriación y las relaciones lógicas pidiendo, por ejemplo, agrupar 'todas las piezas grandes y rojas' o construir series según un atributo determinado."
   },
   {
    "d": "media",
    "q": "El principio de conteo denominado 'principio del cardinal' establece que:",
    "o": [
     "El último número contado representa el total de elementos de la colección",
     "Hay que contar siempre en el mismo orden",
     "Cualquier elemento puede contarse dos veces",
     "El orden en que se cuentan los objetos altera el resultado"
    ],
    "c": 0,
    "e": "El principio del cardinal establece que el último número pronunciado al contar una colección representa el total de elementos de esa colección (el cardinal), y no solo la etiqueta del último objeto contado; este aprendizaje no es evidente para los niños pequeños, que a veces saben recitar la serie numérica pero, al preguntarles 'entonces, ¿cuántos hay en total?', vuelven a contar desde el principio sin comprender que el último número ya contenía esa información."
   },
   {
    "d": "facil",
    "q": "La seriación, como capacidad lógico-matemática, consiste en:",
    "o": [
     "Agrupar elementos por una característica común",
     "Ordenar un conjunto de elementos según un criterio de variación creciente o decreciente",
     "Contar los elementos de una colección",
     "Medir la longitud de un objeto"
    ],
    "c": 1,
    "e": "Seriar consiste en ordenar un conjunto de elementos según un criterio de variación creciente o decreciente, como colocar un conjunto de palos de menor a mayor longitud o unas tazas de mayor a menor tamaño, a diferencia de clasificar (agrupar por semejanza) o de contar (determinar cuántos elementos hay)."
   },
   {
    "d": "dificil",
    "q": "El material 'regletas de Cuisenaire', empleado en el ámbito lógico-matemático, permite trabajar principalmente:",
    "o": [
     "La relación entre número, longitud y color a través de la manipulación",
     "Exclusivamente la lectoescritura",
     "La expresión musical",
     "La motricidad gruesa"
    ],
    "c": 0,
    "e": "Las regletas de Cuisenaire son barras de distinta longitud, cada una asociada a un color y a un valor numérico (la blanca vale 1, la roja 2, y así sucesivamente), que permiten trabajar de forma manipulativa la relación entre número, longitud y color, así como la composición y descomposición de cantidades: por ejemplo, comprobar físicamente que dos regletas rojas (2+2) equivalen en longitud a una regleta amarilla (4)."
   },
   {
    "d": "facil",
    "q": "Las nociones topológicas básicas (dentro-fuera, abierto-cerrado, junto-separado) preceden, en el desarrollo del pensamiento espacial infantil, a las nociones:",
    "o": [
     "Proyectivas y euclidianas, más complejas",
     "No preceden a ninguna otra noción",
     "Numéricas exclusivamente",
     "De clasificación por color"
    ],
    "c": 0,
    "e": "Según la psicología genética (Piaget), las relaciones topológicas (dentro-fuera, abierto-cerrado, junto-separado), más sencillas y ligadas a la experiencia corporal inmediata, se desarrollan antes que las nociones proyectivas (que implican considerar un punto de vista o perspectiva) y las euclidianas (medida, distancia, ángulo), que son más complejas y se consolidan en etapas posteriores."
   },
   {
    "d": "media",
    "q": "La estimación de cantidades ('aproximadamente cuántos hay', sin contar uno a uno) es una capacidad que en Infantil:",
    "o": [
     "No tiene ningún valor educativo y debe evitarse",
     "Puede trabajarse de forma progresiva, complementando al conteo exacto",
     "Solo puede desarrollarse a partir de Educación Primaria",
     "Sustituye por completo al conteo"
    ],
    "c": 1,
    "e": "La estimación de cantidades (decir aproximadamente cuántos elementos hay en una colección grande, sin contarlos uno a uno) es una capacidad lógico-matemática que puede iniciarse en Infantil de forma progresiva y sencilla (por ejemplo, comparar visualmente dos grupos de fichas y decir cuál parece tener más), complementando al conteo exacto, sin sustituirlo."
   },
   {
    "d": "facil",
    "q": "El reconocimiento y trazado de las formas geométricas básicas (círculo, cuadrado, triángulo) en Infantil se apoya principalmente en:",
    "o": [
     "La manipulación, la observación del entorno y el juego con materiales",
     "Exclusivamente la memorización de sus nombres",
     "La resolución de problemas matemáticos abstractos",
     "El uso exclusivo de fichas de repaso"
    ],
    "c": 0,
    "e": "El reconocimiento y trazado de las formas geométricas básicas (círculo, cuadrado, triángulo) se apoya principalmente en la manipulación de objetos con esas formas y en la observación del entorno cercano (la rueda de una bicicleta, la puerta rectangular, una señal triangular), antes de pasar a su representación gráfica formal o a la mera memorización de sus nombres."
   },
   {
    "d": "dificil",
    "q": "El 'principio de abstracción' del conteo establece que:",
    "o": [
     "Solo pueden contarse objetos idénticos entre sí",
     "Puede contarse cualquier colección de elementos, sean o no de la misma naturaleza (heterogéneos)",
     "No se pueden contar elementos abstractos como sonidos o gestos",
     "Contar requiere siempre materiales manipulativos concretos"
    ],
    "c": 1,
    "e": "El principio de abstracción del conteo indica que puede contarse cualquier colección de elementos, sean homogéneos o heterogéneos (por ejemplo, contar 'tres cosas' aunque sean un lápiz, una goma y un cuaderno), e incluso elementos no tangibles como sonidos, palmadas o pasos, lo que muestra que el número es un concepto abstracto que no depende de la naturaleza física de lo que se cuenta."
   },
   {
    "d": "facil",
    "q": "Medir con unidades no convencionales (pies, palmos, cuerdas) antes de introducir unidades convencionales (metro, centímetro) en Infantil responde al principio de:",
    "o": [
     "Partir de la experiencia corporal y concreta antes de la abstracción",
     "Complicar innecesariamente el aprendizaje de la medida",
     "Sustituir la medida convencional de forma definitiva",
     "No tiene ninguna finalidad pedagógica"
    ],
    "c": 0,
    "e": "Medir con unidades no convencionales ligadas al propio cuerpo (pies, palmos, pasos, una cuerda) antes de introducir unidades convencionales (el metro, el centímetro) responde al principio de partir de la experiencia corporal y concreta antes de pasar a la abstracción: por ejemplo, medir cuántos 'pies' mide el aula ayuda a comprender vivencialmente qué significa 'medir' antes de manejar un instrumento como la cinta métrica."
   },
   {
    "d": "media",
    "q": "El error de conteo conocido como 'doble conteo' (contar dos veces el mismo elemento) se relaciona principalmente con dificultades en:",
    "o": [
     "El principio de correspondencia biunívoca (asociación uno a uno)",
     "El reconocimiento de colores",
     "La motricidad gruesa",
     "La memoria auditiva exclusivamente"
    ],
    "c": 0,
    "e": "El error de conteo conocido como 'doble conteo' (contar dos veces el mismo elemento, por ejemplo volver a tocar una ficha ya contada) se relaciona principalmente con dificultades en el principio de correspondencia biunívoca, es decir, en asociar cada elemento con una única palabra-número; se corrige, entre otras estrategias, practicando el conteo desplazando o apartando cada objeto ya contado."
   },
   {
    "d": "facil",
    "q": "Los juegos de mesa sencillos con dados y recorrido (como la oca simplificada) en Infantil favorecen especialmente:",
    "o": [
     "El reconocimiento de cantidades, el conteo y las nociones de recorrido y turno",
     "Exclusivamente la expresión plástica",
     "El desarrollo del lenguaje escrito formal",
     "No tienen ninguna relación con lo lógico-matemático"
    ],
    "c": 0,
    "e": "Los juegos de mesa sencillos con dados y recorrido (como una versión simplificada de la oca) favorecen el reconocimiento rápido de cantidades en el dado (subitización), el conteo de casillas al avanzar, y nociones como el turno o el recorrido ordenado, integrando de forma lúdica varios aprendizajes lógico-matemáticos a la vez."
   },
   {
    "d": "dificil",
    "q": "La 'subitización', capacidad de reconocer de forma inmediata y sin contar pequeñas cantidades (hasta 3-4 elementos), es relevante en Infantil porque:",
    "o": [
     "Es un proceso exclusivo de la edad adulta",
     "Constituye una vía complementaria y temprana de acceso a la cantidad, previa o paralela al conteo verbal",
     "Sustituye por completo la necesidad de aprender a contar",
     "No tiene ninguna relación con el desarrollo del número"
    ],
    "c": 1,
    "e": "La subitización es la capacidad de reconocer de forma inmediata y sin contar pequeñas cantidades, normalmente hasta 3 o 4 elementos (por ejemplo, saber que hay 'tres' puntos en un dado sin tener que contarlos uno a uno); constituye una vía complementaria y temprana de acceso al concepto de cantidad, que aparece antes o en paralelo al conteo verbal, sin sustituir la necesidad de aprender a contar cantidades mayores."
   },
   {
    "d": "facil",
    "q": "El uso cotidiano de las rutinas de aula (contar los niños presentes, repartir un objeto por niño) es una estrategia valiosa para el desarrollo lógico-matemático porque:",
    "o": [
     "Contextualiza el aprendizaje matemático en situaciones reales y significativas",
     "No tiene ninguna relación con el pensamiento lógico-matemático",
     "Solo sirve para controlar la asistencia",
     "Sustituye por completo el trabajo específico de esta área"
    ],
    "c": 0,
    "e": "Las rutinas cotidianas de aula, como contar cuántos niños han venido hoy o repartir un lápiz por cada niño, ofrecen contextos reales y significativos para practicar el conteo, la correspondencia uno a uno y otras nociones lógico-matemáticas de forma funcional, integrada en la vida diaria del aula y no como un ejercicio aislado y descontextualizado."
   },
   {
    "d": "media",
    "q": "El desarrollo del pensamiento lógico-matemático en Infantil, según el enfoque constructivista, se favorece principalmente mediante:",
    "o": [
     "La transmisión directa y memorística de conceptos abstractos por parte del adulto",
     "La manipulación activa, la resolución de problemas y la construcción progresiva de nociones a partir de la experiencia",
     "Ejercicios repetitivos de escritura de cifras sin contexto",
     "La memorización de operaciones aritméticas complejas"
    ],
    "c": 1,
    "e": "Desde el enfoque constructivista, el pensamiento lógico-matemático en Infantil se favorece principalmente mediante la manipulación activa de materiales, la resolución de problemas concretos (por ejemplo, repartir unas galletas entre todos los compañeros de la mesa) y la construcción progresiva de nociones a partir de la propia experiencia, en lugar de mediante la transmisión directa y memorística de conceptos abstractos."
   },
   {
    "d": "facil",
    "q": "Los juegos de construcción (cubos, piezas de encaje) favorecen especialmente en el ámbito lógico-matemático el desarrollo de:",
    "o": [
     "Las nociones espaciales, la seriación por tamaño y la resolución de problemas prácticos",
     "Exclusivamente la memoria auditiva",
     "El lenguaje escrito formal",
     "No tienen relación con lo lógico-matemático"
    ],
    "c": 0,
    "e": "Los juegos de construcción (cubos, piezas de encaje, bloques de madera) favorecen el desarrollo de nociones espaciales (arriba-abajo, dentro-fuera), la seriación por tamaño o forma al elegir qué piezas encajan o se sostienen mejor, y la resolución práctica de problemas (cómo lograr que una torre no se caiga), todo ello de forma lúdica y significativa."
   }
  ]
 },
 {
  "id": "b13",
  "title": "Influencia de las Principales Corrientes Pedagógicas y Psicológicas en la Educación Infantil",
  "questions": [
   {
    "d": "facil",
    "q": "María Montessori es la creadora de un método pedagógico basado, entre otros principios, en:",
    "o": [
     "La instrucción directa y memorística",
     "El ambiente preparado, la autonomía y el material autocorrectivo",
     "La ausencia total de materiales estructurados",
     "El aprendizaje exclusivamente grupal sin trabajo individual"
    ],
    "c": 1,
    "e": "El método Montessori se basa en preparar un ambiente adecuado a la escala y necesidades del niño, respetar los 'periodos sensibles' (fases de especial receptividad para determinados aprendizajes) y favorecer la autonomía mediante materiales autocorrectivos, con los que el propio niño puede detectar y corregir su error sin depender constantemente de la corrección del adulto."
   },
   {
    "d": "facil",
    "q": "Ovide Decroly es conocido pedagógicamente por su propuesta de:",
    "o": [
     "Los 'centros de interés' y la globalización de la enseñanza",
     "Las 'casas de los niños' (Case dei Bambini)",
     "La pedagogía del texto libre",
     "Los rincones de actividad exclusivamente"
    ],
    "c": 0,
    "e": "Decroly organizó el currículo en torno a 'centros de interés' ligados a las necesidades básicas del niño (alimentarse, protegerse del frío, defenderse de los peligros, trabajar y jugar), defendiendo un enfoque globalizador del aprendizaje: en lugar de separar contenidos por asignaturas, propuso partir de esos intereses para trabajar de forma integrada lenguaje, cálculo o conocimiento del entorno."
   },
   {
    "d": "facil",
    "q": "Célestin Freinet es reconocido, entre otras aportaciones, por introducir en la escuela técnicas como:",
    "o": [
     "El texto libre, la imprenta escolar y la correspondencia escolar",
     "Los dones o Gaben",
     "Las tarjetas de nomenclatura",
     "La pedagogía Waldorf"
    ],
    "c": 0,
    "e": "Freinet desarrolló técnicas activas y cooperativas como el texto libre (el niño escribe libremente sobre lo que le interesa), la imprenta escolar (para imprimir esos textos y compartirlos), la correspondencia escolar (intercambiar cartas y trabajos con otra clase, a menudo de otra localidad) y la asamblea de clase, con las que buscaba conectar la escuela con la vida real y la cooperación entre el alumnado."
   },
   {
    "d": "media",
    "q": "La 'Escuela Nueva' o 'Escuela Activa', movimiento pedagógico de finales del s. XIX y principios del XX, se caracteriza por:",
    "o": [
     "Situar al niño como centro del proceso educativo, frente a la escuela tradicional memorística",
     "Defender la enseñanza puramente transmisiva del adulto",
     "Rechazar cualquier tipo de actividad manipulativa",
     "Priorizar exclusivamente la evaluación por exámenes"
    ],
    "c": 0,
    "e": "La Escuela Nueva o Escuela Activa, movimiento pedagógico de finales del siglo XIX y principios del XX, sitúa al niño como protagonista activo de su propio aprendizaje —a través de la experiencia, la actividad y el interés propio— frente al modelo de escuela tradicional, centrado en la transmisión pasiva y memorística de contenidos por parte del adulto."
   },
   {
    "d": "facil",
    "q": "Loris Malaguzzi es el impulsor de la conocida experiencia educativa de:",
    "o": [
     "Reggio Emilia",
     "Summerhill",
     "Waldorf-Steiner",
     "Sistema Montessori"
    ],
    "c": 0,
    "e": "Malaguzzi fue el impulsor de las escuelas municipales de Reggio Emilia (Italia), que defienden al niño como 'sujeto de derechos' competente y capaz, y otorgan un valor central al ambiente (considerado 'el tercer educador', junto al docente y la familia) y a los 'cien lenguajes' del niño, es decir, a las múltiples formas de expresión de las que dispone más allá de la palabra."
   },
   {
    "d": "dificil",
    "q": "Henri Wallon aportó a la psicología del desarrollo infantil, entre otros, el concepto de:",
    "o": [
     "Los estadios del desarrollo con un enfoque dialéctico entre lo afectivo, motor y cognitivo",
     "El condicionamiento clásico",
     "La zona de desarrollo próximo",
     "Los periodos sensibles"
    ],
    "c": 0,
    "e": "Wallon propuso una teoría de estadios de desarrollo que subraya la relación dialéctica —de influencia mutua y constante— entre la emoción, el movimiento y la inteligencia como motores del desarrollo psicológico infantil, en contraste con teorías que separan más claramente lo cognitivo de lo afectivo, como en parte hace Piaget."
   },
   {
    "d": "facil",
    "q": "Friedrich Fröbel es considerado el creador del concepto de:",
    "o": [
     "Kindergarten o 'jardín de infancia'",
     "Centro de interés",
     "Rincón de actividad",
     "Proyecto de trabajo"
    ],
    "c": 0,
    "e": "Fröbel creó en el siglo XIX el primer 'kindergarten' o jardín de infancia, un espacio pensado específicamente para la educación de los niños pequeños a través del juego y de materiales diseñados por él mismo (los 'dones'), sentando las bases de la educación infantil institucionalizada tal como la conocemos hoy."
   },
   {
    "d": "media",
    "q": "El principio del 'ambiente preparado', central en el método Montessori, hace referencia a:",
    "o": [
     "Un espacio caótico y sin ninguna organización",
     "Un entorno cuidadosamente diseñado, ordenado y adaptado a las necesidades y tamaño del niño, para favorecer su autonomía",
     "Un espacio exclusivamente destinado al descanso",
     "Un aula sin ningún material disponible"
    ],
    "c": 1,
    "e": "El 'ambiente preparado' montessoriano es un espacio cuidadosamente diseñado, ordenado, estético y adaptado a la escala y las necesidades del niño (mobiliario a su altura, materiales accesibles y organizados), pensado para favorecer su libre elección, su concentración y su autonomía, en contraste con un aula pensada desde las necesidades del adulto."
   },
   {
    "d": "facil",
    "q": "Rudolf Steiner es el fundador de la pedagogía:",
    "o": [
     "Waldorf",
     "Reggio Emilia",
     "Montessori",
     "Freinet"
    ],
    "c": 0,
    "e": "Rudolf Steiner fundó la pedagogía Waldorf, basada en la antroposofía, que otorga gran importancia al arte, el ritmo de las rutinas diarias y anuales, la imaginación (por ejemplo, mediante materiales sencillos y no realistas que estimulan la fantasía) y el respeto escrupuloso a las etapas evolutivas del niño, retrasando de forma deliberada aprendizajes académicos formales como la lectoescritura."
   },
   {
    "d": "dificil",
    "q": "La pedagogía de Reggio Emilia otorga un papel central al concepto de los 'cien lenguajes de la infancia', que hace referencia a:",
    "o": [
     "Cien idiomas distintos que debe aprender el niño",
     "Las múltiples formas de expresión y representación (verbal, plástica, corporal, musical...) de las que dispone el niño para comprender y comunicar el mundo",
     "Un método exclusivo de enseñanza de idiomas extranjeros",
     "Cien materiales didácticos obligatorios"
    ],
    "c": 1,
    "e": "Los 'cien lenguajes' de Malaguzzi hacen referencia a la diversidad de formas de expresión, representación y comunicación de las que dispone el niño para comprender y comunicar el mundo —el dibujo, el modelado, el movimiento, la música, el juego simbólico— y a la idea de que reducir la educación al lenguaje verbal empobrece las posibilidades reales de expresión infantil."
   },
   {
    "d": "facil",
    "q": "El conductismo, corriente psicológica representada por autores como Watson y Skinner, explica el aprendizaje fundamentalmente a partir de:",
    "o": [
     "Los procesos mentales internos no observables",
     "La relación entre estímulos, respuestas y refuerzos observables",
     "Los estadios universales del pensamiento",
     "Los periodos sensibles del desarrollo"
    ],
    "c": 1,
    "e": "El conductismo, representado por autores como Watson y Skinner, explica el aprendizaje a partir de la relación entre estímulos, respuestas y refuerzos observables, evitando especular sobre procesos mentales internos no observables directamente; por ejemplo, explicaría que un niño repite una conducta porque ha sido reforzada (elogiada) por el adulto, sin necesidad de analizar qué 'piensa' el niño al respecto."
   },
   {
    "d": "media",
    "q": "El constructivismo, como corriente psicopedagógica que integra aportaciones de Piaget, Vygotski y Ausubel, entre otros, concibe el aprendizaje como:",
    "o": [
     "Un proceso pasivo de recepción de información transmitida por el adulto",
     "Un proceso activo de construcción del conocimiento por parte del propio sujeto, en interacción con el entorno",
     "Un proceso exclusivamente biológico sin influencia social",
     "Idéntico en todos los individuos, sin diferencias personales"
    ],
    "c": 1,
    "e": "El constructivismo, corriente psicopedagógica que integra aportaciones de Piaget, Vygotski y Ausubel, entre otros, entiende el aprendizaje como un proceso activo mediante el cual el propio sujeto construye su conocimiento a partir de la interacción con el entorno físico y social, en lugar de recibirlo pasivamente ya elaborado por el adulto."
   },
   {
    "d": "facil",
    "q": "El 'texto libre', técnica introducida por Freinet, consiste en:",
    "o": [
     "Un texto que el niño escribe libremente sobre lo que le interesa, en lugar de seguir un dictado",
     "Un examen escrito estandarizado",
     "Un cuento clásico de la literatura infantil",
     "Una ficha de repaso de lectoescritura"
    ],
    "c": 0,
    "e": "El texto libre, técnica introducida por Freinet, consiste en que el niño escribe (o dicta, si aún no sabe escribir) libremente sobre un tema que le interesa, en lugar de copiar un dictado impuesto; después, ese texto se comparte, se corrige de forma colectiva con el grupo y, tradicionalmente, se imprime en la imprenta escolar, dando así un sentido social real a la escritura."
   },
   {
    "d": "dificil",
    "q": "La pedagogía sistémica, aplicada al ámbito educativo, incorpora especialmente aportaciones de la terapia familiar sistémica para:",
    "o": [
     "Ignorar por completo el contexto familiar del alumnado",
     "Comprender al alumno dentro de su sistema familiar y escolar, atendiendo a las dinámicas relacionales que pueden influir en su proceso educativo",
     "Sustituir completamente la programación didáctica",
     "Aplicarse exclusivamente en Educación Secundaria"
    ],
    "c": 1,
    "e": "La pedagogía sistémica aplica principios de la terapia familiar sistémica (con autores de referencia como Bert Hellinger) para comprender al alumno dentro de las dinámicas relacionales de su sistema familiar y escolar, entendiendo que ciertas conductas o dificultades en el aula pueden estar relacionadas con lo que ocurre en ese sistema, sin que ello suponga ignorar o sustituir la programación didáctica."
   },
   {
    "d": "facil",
    "q": "El movimiento de las 'escuelas infantiles en la naturaleza' o 'escuelas bosque' (forest schools), cada vez más presente en la actualidad, se caracteriza por:",
    "o": [
     "Desarrollar la actividad educativa fundamentalmente en entornos naturales al aire libre",
     "Prohibir cualquier contacto con la naturaleza",
     "Sustituir por completo la intervención del adulto",
     "Limitarse exclusivamente a actividades de mesa en interiores"
    ],
    "c": 0,
    "e": "Las escuelas bosque o escuelas infantiles en la naturaleza (forest schools) desarrollan gran parte de su actividad educativa en entornos naturales al aire libre —bosques, parques—, favoreciendo el juego libre, la exploración sensorial y motriz y el contacto directo con el medio natural, en lugar de limitar la jornada a actividades de mesa en un aula cerrada."
   },
   {
    "d": "media",
    "q": "Jean-Jacques Rousseau, precursor filosófico de la Escuela Nueva, defendió en su obra 'Emilio, o De la educación' la idea de:",
    "o": [
     "Una educación estrictamente memorística desde la primera infancia",
     "Respetar la naturaleza y los ritmos evolutivos del niño, evitando una instrucción prematura",
     "La ausencia total de figura educadora",
     "La superioridad absoluta de la educación en el aula frente a cualquier otro entorno"
    ],
    "c": 1,
    "e": "Rousseau, en su obra 'Emilio, o De la educación', defendió una educación 'naturalista', respetuosa con los ritmos y las características evolutivas propias de cada edad, y crítica con una instrucción académica prematura que no respeta esos ritmos; por esta idea se le considera un precursor filosófico de los principios que más adelante desarrollaría la Escuela Nueva."
   },
   {
    "d": "facil",
    "q": "Las escuelas infantiles de orientación 'Pikler' (basadas en el trabajo de Emmi Pikler) otorgan especial importancia a:",
    "o": [
     "El movimiento libre autónomo del bebé y el cuidado respetuoso en las rutinas diarias",
     "La instrucción formal temprana de la lectoescritura",
     "La competición entre iguales",
     "El uso intensivo de pantallas desde el nacimiento"
    ],
    "c": 0,
    "e": "Emmi Pikler defendió el movimiento libre y autónomo del bebé —no colocarlo en posturas (sentado, de pie) que aún no domina por sí mismo, dejándole llegar a ellas de forma natural— y un cuidado respetuoso y atento durante las rutinas de higiene y alimentación, en las que el adulto avisa, espera y colabora con el bebé en lugar de simplemente 'hacerle' las cosas."
   },
   {
    "d": "dificil",
    "q": "El 'aprendizaje por descubrimiento', propuesto por Jerome Bruner, defiende que el conocimiento se adquiere de forma más significativa cuando:",
    "o": [
     "El adulto transmite directamente toda la información al niño",
     "El propio niño explora, investiga y descubre activamente relaciones y conceptos, con la guía adecuada del adulto",
     "El niño memoriza contenidos sin ninguna comprensión",
     "Se elimina cualquier tipo de guía o andamiaje adulto"
    ],
    "c": 1,
    "e": "Bruner defendió el aprendizaje por descubrimiento: el niño construye un conocimiento más significativo y duradero cuando explora e investiga activamente relaciones y conceptos por sí mismo, contando con la guía y el andamiaje adecuado del adulto (que no desaparece, sino que se ajusta a lo que el niño necesita), en lugar de recibir la información ya elaborada y memorizarla sin comprensión."
   },
   {
    "d": "facil",
    "q": "El humanismo, corriente psicológica representada por autores como Carl Rogers o Abraham Maslow, pone especial énfasis en:",
    "o": [
     "El condicionamiento y el refuerzo externo exclusivamente",
     "El desarrollo personal, la autorrealización y el respeto a la individualidad de cada persona",
     "Los estadios universales del pensamiento lógico",
     "La estructura innata del lenguaje"
    ],
    "c": 1,
    "e": "El humanismo, representado por autores como Carl Rogers o Abraham Maslow, pone el foco en el desarrollo integral de la persona, su autorrealización, su autoestima y la importancia de un clima de respeto y aceptación incondicional (la persona vale por sí misma, no solo por sus logros), en contraste con enfoques centrados en el condicionamiento externo o en estadios universales del pensamiento."
   },
   {
    "d": "media",
    "q": "La pedagogía sistémica y otras corrientes actuales coinciden en señalar la importancia de que el docente adopte, frente al alumnado y las familias, una actitud de:",
    "o": [
     "Juicio y comparación constante",
     "Respeto, escucha y reconocimiento de cada historia y contexto personal, sin imponer un único modelo válido",
     "Autoridad estrictamente jerárquica sin ningún margen de diálogo",
     "Indiferencia ante las circunstancias familiares del alumnado"
    ],
    "c": 1,
    "e": "Diversas corrientes pedagógicas actuales, entre ellas la pedagogía sistémica, coinciden en señalar la importancia de que el docente adopte, frente al alumnado y las familias, una actitud de respeto, escucha activa y reconocimiento de la diversidad de historias y contextos personales, evitando juzgar o imponer un único modelo de familia o de infancia como el único válido."
   }
  ]
 },
 {
  "id": "b14",
  "title": "La Educación Musical en Educación Infantil",
  "questions": [
   {
    "d": "facil",
    "q": "El método pedagógico-musical de Carl Orff se caracteriza especialmente por:",
    "o": [
     "El uso del cuerpo (percusión corporal), la palabra y los instrumentos de placas Orff",
     "Ser exclusivamente teórico, sin práctica instrumental",
     "Basarse únicamente en la escritura de partituras",
     "Estar dirigido solo a la etapa adulta"
    ],
    "c": 0,
    "e": "Orff propone partir de elementos básicos y accesibles para el niño —la palabra (recitar rimas con ritmo), el movimiento y la percusión corporal (palmas, pies, chasquidos)— antes de pasar a instrumentos de placas de fácil manejo (xilófonos, metalófonos), en los que basta pulsar una placa para obtener un sonido afinado, sin necesidad de una técnica instrumental compleja."
   },
   {
    "d": "facil",
    "q": "El método Kodály otorga especial importancia a:",
    "o": [
     "El canto y la voz como instrumento musical fundamental",
     "El uso exclusivo de instrumentos de viento",
     "La ausencia total de canciones populares",
     "La memorización de partituras complejas desde bebés"
    ],
    "c": 0,
    "e": "Zoltán Kodály defiende la voz cantada como instrumento musical fundamental y accesible a todos, especialmente a través del folclore y las canciones populares de la propia cultura del niño, que además de ser sencillas de aprender transmiten un patrimonio cultural compartido."
   },
   {
    "d": "facil",
    "q": "El método Dalcroze se centra especialmente en:",
    "o": [
     "La euritmia, es decir, la relación entre música y movimiento corporal",
     "La escritura musical exclusivamente",
     "La ausencia de instrumentos",
     "El aprendizaje de idiomas"
    ],
    "c": 0,
    "e": "Émile Jaques-Dalcroze desarrolló la euritmia, un método que vincula estrechamente el ritmo musical con el movimiento corporal: en lugar de aprender el ritmo de forma abstracta, el niño lo interioriza desplazándose, marcando el pulso con el cuerpo o representando con gestos los cambios de intensidad o de tempo de la música que escucha."
   },
   {
    "d": "facil",
    "q": "Los parámetros básicos del sonido que se trabajan en Educación Infantil son:",
    "o": [
     "Altura, intensidad, duración y timbre",
     "Melodía, armonía y contrapunto exclusivamente",
     "Solo el ritmo",
     "Únicamente la letra de las canciones"
    ],
    "c": 0,
    "e": "Los cuatro parámetros básicos del sonido que se trabajan en Infantil son la altura (si un sonido es agudo o grave), la intensidad (si es fuerte o suave), la duración (si es largo o corto) y el timbre (la cualidad que permite distinguir, por ejemplo, el sonido de un tambor del de una flauta aunque suenen la misma nota). Un ejercicio típico de aula es hacer sonar distintos objetos a espaldas del alumnado y pedirles que adivinen cuál ha sonado, trabajando el timbre."
   },
   {
    "d": "media",
    "q": "La audición musical activa en el aula de Infantil tiene como finalidad principal:",
    "o": [
     "Que el alumnado permanezca en silencio sin ninguna actividad",
     "Desarrollar la escucha, la discriminación auditiva y la sensibilidad estética",
     "Memorizar biografías de compositores",
     "Sustituir el lenguaje verbal"
    ],
    "c": 1,
    "e": "La audición musical activa busca desarrollar la escucha, la discriminación de sonidos y la sensibilidad estética, a menudo combinada con movimiento (bailar distinto según cambie la música) o con representación gráfica (dibujar lo que la música sugiere), en lugar de limitarse a que el alumnado permanezca sentado y en silencio sin ninguna actividad asociada."
   },
   {
    "d": "dificil",
    "q": "Los instrumentos de pequeña percusión (como panderetas, claves o maracas) en Infantil se utilizan preferentemente para:",
    "o": [
     "Ejecutar partituras complejas de forma individual",
     "Explorar el ritmo, la coordinación y el trabajo en grupo de forma vivencial",
     "Sustituir la voz cantada",
     "Solo como decoración del aula"
    ],
    "c": 1,
    "e": "Los instrumentos de pequeña percusión (panderetas, claves, maracas, triángulos) se utilizan preferentemente para explorar el ritmo de forma vivencial, ejercitar la coordinación motriz al tocarlos, y favorecer el trabajo musical en grupo (por ejemplo, cada niño con un instrumento distinto siguiendo un mismo pulso), y no para ejecutar partituras complejas de forma individual."
   },
   {
    "d": "facil",
    "q": "El método Suzuki, desarrollado originalmente para el aprendizaje instrumental infantil (especialmente violín), se basa en la idea de que:",
    "o": [
     "La música se aprende de forma similar a como se adquiere la lengua materna, por inmersión y escucha repetida",
     "Solo puede enseñarse a partir de la adolescencia",
     "Requiere memorizar teoría musical antes de tocar cualquier instrumento",
     "No debe implicarse a la familia en el proceso"
    ],
    "c": 0,
    "e": "Shinichi Suzuki propuso el 'método de la lengua materna': igual que un niño aprende a hablar por inmersión, escucha repetida e imitación mucho antes de estudiar gramática, propuso que el aprendizaje musical (originalmente con el violín) siga ese mismo camino desde edades muy tempranas, con una implicación activa de la familia, escuchando y acompañando el proceso."
   },
   {
    "d": "media",
    "q": "La 'discriminación auditiva' (distinguir sonidos agudos-graves, fuertes-suaves, largos-cortos) es una capacidad que en Infantil se trabaja fundamentalmente a través de:",
    "o": [
     "La escritura de partituras complejas",
     "Juegos y actividades vivenciales de escucha activa",
     "La memorización de solfeo formal",
     "Ejercicios exclusivamente de lápiz y papel"
    ],
    "c": 1,
    "e": "La discriminación auditiva (distinguir sonidos agudos de graves, fuertes de suaves, largos de cortos) se trabaja en Infantil a través de juegos y actividades vivenciales de escucha activa, como adivinar si un sonido grabado es fuerte o suave, o moverse deprisa o despacio según el ritmo de una canción, y no mediante teoría musical formal o solfeo memorístico."
   },
   {
    "d": "facil",
    "q": "El movimiento corporal asociado a la música (bailar, desplazarse siguiendo el ritmo) favorece especialmente:",
    "o": [
     "La interiorización del ritmo y la coordinación motriz",
     "Exclusivamente el desarrollo del lenguaje escrito",
     "El cálculo matemático avanzado",
     "No tiene relación con la educación musical"
    ],
    "c": 0,
    "e": "El movimiento corporal asociado a la música (bailar, desplazarse siguiendo el ritmo, marcar el pulso con las palmas) ayuda a interiorizar físicamente el ritmo y el pulso musical, además de desarrollar la coordinación motriz y la expresión corporal, siendo mucho más eficaz en Infantil que una explicación teórica sobre qué es el ritmo."
   },
   {
    "d": "dificil",
    "q": "El silencio, como elemento propio del lenguaje musical, se trabaja en Infantil principalmente para:",
    "o": [
     "Que el alumnado aprenda a estar callado por disciplina",
     "Desarrollar la capacidad de escucha y la comprensión de que el silencio también forma parte de la música",
     "No tiene ninguna relación con la música",
     "Sustituir cualquier actividad sonora"
    ],
    "c": 1,
    "e": "El silencio se trabaja en Infantil como un elemento propio del lenguaje musical en sí mismo —no como mera ausencia de sonido ni como recurso disciplinario—, ayudando a desarrollar la capacidad de escucha activa y a comprender que la alternancia entre sonido y silencio (por ejemplo, en una canción con pausas) forma parte de la estructura musical."
   },
   {
    "d": "facil",
    "q": "Las canciones tradicionales y populares en Infantil son especialmente valiosas porque:",
    "o": [
     "Forman parte del patrimonio cultural y suelen tener una estructura sencilla y repetitiva adecuada a la edad",
     "No tienen ningún valor educativo",
     "Deben evitarse por ser anticuadas",
     "Solo sirven como fondo musical de otras actividades"
    ],
    "c": 0,
    "e": "Las canciones tradicionales y populares forman parte del patrimonio cultural que se transmite de generación en generación, y suelen tener una estructura melódica y rítmica sencilla y repetitiva (estribillos, frases cortas) especialmente adecuada para las primeras edades, facilitando su memorización y disfrute."
   },
   {
    "d": "media",
    "q": "La improvisación musical, como actividad en Infantil, tiene como finalidad principal:",
    "o": [
     "Enseñar técnica instrumental avanzada",
     "Fomentar la creatividad, la expresión personal y la exploración libre del sonido",
     "Sustituir por completo el repertorio de canciones",
     "Evaluar el nivel técnico del alumnado"
    ],
    "c": 1,
    "e": "La improvisación musical en Infantil (por ejemplo, dejar que cada niño invente un ritmo con un instrumento de percusión, sin partitura ni modelo fijo) busca fomentar la creatividad, la expresión personal y la exploración libre del sonido, no enseñar técnica instrumental avanzada ni evaluar un nivel técnico determinado."
   },
   {
    "d": "facil",
    "q": "Las canciones de corro o juego cantado (como 'El patio de mi casa') combinan de forma característica:",
    "o": [
     "Música, movimiento corporal y juego social",
     "Exclusivamente teoría musical",
     "Solo lectura de partituras",
     "Ningún componente de interacción social"
    ],
    "c": 0,
    "e": "Las canciones de corro o juego cantado (como 'El patio de mi casa' o 'Al corro de la patata') combinan de forma característica música, movimiento corporal (formar un corro, moverse en círculo) y juego social (esperar el turno, coordinarse con los compañeros), integrando de manera natural distintos ámbitos del desarrollo infantil en una misma actividad."
   },
   {
    "d": "dificil",
    "q": "El desarrollo del 'sentido rítmico' en Infantil sigue, según diversos autores, una evolución progresiva que va desde:",
    "o": [
     "El ritmo libre y espontáneo del propio cuerpo hacia la percepción y reproducción progresiva de estructuras rítmicas más complejas",
     "Estructuras rítmicas complejas hacia el ritmo libre",
     "No existe ninguna evolución en el sentido rítmico durante la infancia",
     "El sentido rítmico está completamente desarrollado al nacer"
    ],
    "c": 0,
    "e": "El sentido rítmico evoluciona, según diversos autores, desde manifestaciones espontáneas y globales del propio cuerpo (un bebé que se balancea sin un patrón fijo al oír música) hacia una percepción y reproducción progresivamente más precisa de estructuras rítmicas, como seguir el pulso de una canción con palmas de forma cada vez más ajustada a medida que el niño crece."
   },
   {
    "d": "facil",
    "q": "El uso de instrumentos musicales elaborados por los propios niños con material reciclado favorece, entre otros aspectos:",
    "o": [
     "La creatividad, la motricidad fina y la comprensión del origen del sonido",
     "Únicamente la memorización teórica",
     "No tiene ninguna relación con la educación musical",
     "Sustituye la necesidad de instrumentos convencionales en todos los casos"
    ],
    "c": 0,
    "e": "Construir instrumentos musicales sencillos con material reciclado (una lata con arroz dentro como maraca, una goma tensada sobre una caja como cuerda) favorece la creatividad, la motricidad fina al manipular y decorar los materiales, y una comprensión más vivencial de cómo se produce el sonido (por vibración, por golpeo), en lugar de limitarse a usar siempre instrumentos ya fabricados."
   },
   {
    "d": "media",
    "q": "La musicoterapia, disciplina que utiliza la música con fines terapéuticos, puede aplicarse en el contexto de Infantil especialmente para:",
    "o": [
     "Sustituir la intervención de profesionales sanitarios en cualquier caso",
     "Favorecer la regulación emocional, la comunicación y el bienestar de determinado alumnado, siempre desde un enfoque complementario y profesional",
     "No tiene ninguna aplicación en la etapa infantil",
     "Ser aplicada libremente por cualquier docente sin formación específica"
    ],
    "c": 1,
    "e": "La musicoterapia, aplicada por profesionales formados específicamente en esta disciplina, puede ser un recurso complementario valioso en el contexto de Infantil para favorecer la regulación emocional, la comunicación (especialmente en alumnado con dificultades de lenguaje) y el bienestar de determinado alumnado, siempre como apoyo profesional y no como sustituto de otras intervenciones sanitarias necesarias."
   },
   {
    "d": "facil",
    "q": "Cantar mirando a los niños, con gestos y apoyo visual, favorece especialmente en Infantil:",
    "o": [
     "La comprensión, la atención y la participación activa en la canción",
     "No tiene ninguna influencia en el aprendizaje musical",
     "Dificulta la comprensión de la canción",
     "Solo es relevante para niños con dificultades auditivas"
    ],
    "c": 0,
    "e": "Cantar mirando a los niños, apoyándose en gestos y en el contacto visual, favorece su comprensión del contenido de la canción (los gestos ayudan a entender palabras nuevas), mantiene su atención y fomenta su participación activa (imitando los gestos, anticipando la siguiente palabra), mucho más que cantar de espaldas o sin ningún apoyo visual."
   },
   {
    "d": "dificil",
    "q": "El 'ostinato rítmico', recurso habitual en la práctica musical Orff, consiste en:",
    "o": [
     "Una melodía que cambia constantemente sin repetición",
     "Un patrón rítmico o melódico breve que se repite de forma constante como acompañamiento",
     "Un instrumento de viento tradicional",
     "Un tipo de danza folclórica exclusivamente"
    ],
    "c": 1,
    "e": "El ostinato rítmico, recurso muy habitual en la práctica musical Orff, consiste en un patrón rítmico o melódico breve que se repite de forma constante como acompañamiento (por ejemplo, un mismo golpe de pandereta cada dos tiempos mientras el resto del grupo canta la melodía), siendo accesible para el alumnado de Infantil porque no requiere aprender una pieza completa, solo repetir un patrón sencillo."
   },
   {
    "d": "facil",
    "q": "La danza libre o expresión corporal con música, sin coreografía cerrada, en Infantil favorece principalmente:",
    "o": [
     "La creatividad y la expresión personal del movimiento a partir del estímulo musical",
     "Exclusivamente la técnica de danza clásica",
     "La memorización de una coreografía exacta",
     "No tiene relación con la educación musical"
    ],
    "c": 0,
    "e": "La danza libre o expresión corporal con música, sin una coreografía cerrada que haya que memorizar y reproducir exactamente, permite que cada niño responda de forma personal y creativa al estímulo musical (moverse más rápido o más lento, con gestos amplios o pequeños según lo que le sugiere la música), favoreciendo la expresión individual frente a la técnica de danza clásica reglada."
   },
   {
    "d": "media",
    "q": "El desarrollo de la 'memoria musical' en Infantil, entendida como la capacidad de recordar y reproducir melodías o ritmos sencillos, se favorece especialmente mediante:",
    "o": [
     "La escritura de partituras complejas desde edades tempranas",
     "La repetición frecuente, lúdica y contextualizada de canciones y juegos musicales",
     "Un único visionado de un vídeo musical",
     "La memorización de teoría musical abstracta"
    ],
    "c": 1,
    "e": "La memoria musical infantil (recordar y reproducir melodías o ritmos sencillos) se desarrolla principalmente a través de la repetición frecuente y lúdica de canciones y juegos musicales en contextos significativos y agradables para el niño, y no mediante un único visionado puntual de un vídeo ni mediante la memorización de teoría musical abstracta, poco adecuada a esta edad."
   }
  ]
 },
 {
  "id": "b15",
  "title": "La Educación Sexual en la Etapa Infantil",
  "questions": [
   {
    "d": "facil",
    "q": "La educación sexual en la etapa infantil debe entenderse fundamentalmente como:",
    "o": [
     "Educación afectivo-sexual integral: identidad, cuerpo, afectos y respeto, adaptada a la edad",
     "Un tema tabú que no debe abordarse en el aula",
     "Únicamente información biológica sobre la reproducción",
     "Una responsabilidad exclusiva de la familia sin implicación escolar"
    ],
    "c": 0,
    "e": "En Infantil, la educación sexual se aborda como educación afectivo-sexual integral y adaptada a la edad: no se limita a información biológica sobre la reproducción, sino que incluye el conocimiento y aceptación del propio cuerpo, la identidad, los afectos, el respeto hacia uno mismo y hacia los demás, y la prevención del abuso, todo ello con un lenguaje y una profundidad ajustados a cada momento evolutivo."
   },
   {
    "d": "facil",
    "q": "En torno a los 2-3 años, los niños y niñas suelen alcanzar:",
    "o": [
     "La identidad de género básica, es decir, se reconocen a sí mismos como niño o niña",
     "La comprensión adulta completa de la sexualidad",
     "La total indiferencia respecto al propio cuerpo",
     "El rechazo generalizado hacia el propio cuerpo"
    ],
    "c": 0,
    "e": "Alrededor de los 2-3 años se consolida la identidad de género básica: el niño o la niña se reconoce y se nombra a sí mismo/a según su género ('yo soy un niño', 'yo soy una niña'), aunque la comprensión de que esa identidad es estable en el tiempo y no depende de la ropa o el peinado (la 'constancia de género') se consolidará algo más adelante."
   },
   {
    "d": "media",
    "q": "La curiosidad exploratoria del propio cuerpo (autoexploración) en la etapa infantil debe entenderse, en general, como:",
    "o": [
     "Un comportamiento normativo del desarrollo que debe abordarse con naturalidad y sin dramatismo",
     "Siempre un signo de abuso sexual",
     "Una conducta que debe castigarse severamente",
     "Un tema que nunca debe mencionarse en clase"
    ],
    "c": 0,
    "e": "La exploración corporal o autoexploración es una conducta habitual y normativa del desarrollo infantil, del mismo modo que un niño explora otras partes de su cuerpo o de su entorno; el papel educativo consiste en acompañarla con naturalidad, sin dramatismo ni castigo, ofreciendo información adecuada a la edad cuando sea necesario, en lugar de asumir automáticamente que se trata de un signo de abuso."
   },
   {
    "d": "dificil",
    "q": "Uno de los objetivos de la educación afectivo-sexual en Infantil es la prevención del abuso sexual infantil, principalmente a través de:",
    "o": [
     "Enseñar al niño a identificar partes de su cuerpo, decir 'no' y contarlo a un adulto de confianza",
     "Evitar cualquier mención al cuerpo",
     "Enseñar exclusivamente contenidos biológicos avanzados",
     "Delegar totalmente la responsabilidad en la familia"
    ],
    "c": 0,
    "e": "La prevención del abuso sexual infantil en Infantil se trabaja principalmente enseñando al niño a identificar y nombrar las partes de su cuerpo, a saber que tiene derecho a decir 'no' ante un contacto que le incomoda (incluso si viene de un adulto conocido) y a contarlo con confianza a un adulto de referencia, más que mediante contenidos biológicos avanzados poco útiles a esta edad."
   },
   {
    "d": "media",
    "q": "El respeto a la diversidad de modelos familiares (familias monoparentales, homoparentales, reconstituidas...) forma parte de:",
    "o": [
     "Un contenido ajeno a la educación afectivo-sexual",
     "La educación en igualdad y respeto propia de la educación afectivo-sexual y en valores",
     "Un tema exclusivo de la etapa de Secundaria",
     "Un contenido prohibido en la escuela infantil"
    ],
    "c": 1,
    "e": "El reconocimiento y respeto por la diversidad de modelos familiares (monoparentales, homoparentales, reconstituidas, adoptivas...) forma parte de una educación afectivo-sexual y en valores inclusiva desde las primeras edades, por ejemplo trabajando con cuentos o actividades que muestren distintos tipos de familia sin presentar uno solo como el modelo 'normal' o válido."
   },
   {
    "d": "facil",
    "q": "El lenguaje adecuado para nombrar las partes del cuerpo, incluidos los genitales, en la etapa infantil debe ser:",
    "o": [
     "Eufemístico y evasivo siempre",
     "Correcto, natural y sin connotaciones negativas, adaptado a la comprensión infantil",
     "Evitado por completo en el aula",
     "Exclusivamente técnico-médico y complejo"
    ],
    "c": 1,
    "e": "Se recomienda usar un lenguaje correcto y natural para nombrar todas las partes del cuerpo, incluidos los genitales (por ejemplo, 'vulva' o 'pene', y no solo eufemismos), sin connotaciones negativas y adaptado a la comprensión infantil, ya que esto contribuye a una relación sana con el propio cuerpo y facilita, además, que el niño pueda comunicar con claridad si algo le ha ocurrido."
   },
   {
    "d": "facil",
    "q": "La educación afectivo-sexual en Infantil incluye también el trabajo de:",
    "o": [
     "Las emociones, el afecto y las muestras de cariño adecuadas hacia uno mismo y hacia los demás",
     "Únicamente contenidos anatómicos avanzados",
     "Exclusivamente la prevención de enfermedades de transmisión sexual",
     "Contenidos reservados solo a etapas educativas posteriores"
    ],
    "c": 0,
    "e": "La educación afectivo-sexual en Infantil incluye también trabajar el reconocimiento y la expresión adecuada de las emociones, el afecto y las muestras de cariño (un abrazo, una caricia) hacia uno mismo y hacia los demás, ya que la afectividad es una dimensión inseparable de la sexualidad entendida de forma integral, y no algo que deba posponerse a etapas posteriores."
   },
   {
    "d": "dificil",
    "q": "Ante las preguntas espontáneas de los niños sobre el origen de los bebés o la sexualidad, la actitud educativa más recomendable es:",
    "o": [
     "Ignorar la pregunta o cambiar de tema",
     "Responder con naturalidad, de forma sencilla y ajustada a lo que el niño realmente pregunta y a su nivel de comprensión",
     "Ofrecer siempre una explicación biológica detallada y técnica",
     "Remitir siempre y exclusivamente a la familia sin dar ninguna respuesta"
    ],
    "c": 1,
    "e": "Ante preguntas espontáneas de los niños sobre el origen de los bebés o la sexualidad, la actitud más recomendable es responder con naturalidad, de forma sencilla y ajustada exactamente a lo que el niño pregunta y a su nivel de comprensión (por ejemplo, 'el bebé crece dentro de la mamá, en una parte llamada útero'), sin dar más información de la que pide ni evadir la pregunta remitiéndola siempre a la familia."
   },
   {
    "d": "facil",
    "q": "El respeto a la intimidad corporal (por ejemplo, en momentos de cambio de ropa o aseo) en el aula de Infantil debe:",
    "o": [
     "Ignorarse por completo, ya que son niños pequeños",
     "Trabajarse de forma respetuosa, adecuando el espacio y las rutinas de higiene",
     "Ser irrelevante en esta etapa educativa",
     "Delegarse exclusivamente en la familia sin ninguna atención en el centro"
    ],
    "c": 1,
    "e": "El respeto a la intimidad corporal —por ejemplo, en los momentos de cambio de ropa, aseo o control de esfínteres— debe cuidarse también en el ámbito escolar, adecuando espacios (evitar exposiciones innecesarias) y rutinas de higiene de forma respetuosa desde las primeras edades, sin considerar este aspecto irrelevante por tratarse de niños pequeños."
   },
   {
    "d": "media",
    "q": "El concepto de 'educación en igualdad', estrechamente vinculado a la educación afectivo-sexual, busca en Infantil:",
    "o": [
     "Reforzar los roles y estereotipos de género tradicionales",
     "Prevenir estereotipos de género y fomentar relaciones de respeto e igualdad entre niños y niñas",
     "No tiene ninguna relación con la etapa infantil",
     "Aplicarse exclusivamente en el segundo ciclo de Infantil"
    ],
    "c": 1,
    "e": "La educación en igualdad, estrechamente vinculada a la educación afectivo-sexual, busca en Infantil prevenir la interiorización temprana de estereotipos de género (como asociar el color rosa solo a niñas o la fuerza física solo a niños) y fomentar relaciones de respeto e igualdad entre todo el alumnado desde el principio de la etapa, no solo a partir del segundo ciclo."
   },
   {
    "d": "facil",
    "q": "Los juegos y juguetes en Infantil deben ofrecerse, desde una perspectiva de igualdad, con el criterio de:",
    "o": [
     "Diferenciar estrictamente juguetes 'de niño' y 'de niña'",
     "Ofrecer una variedad de juegos y juguetes accesibles a todo el alumnado, sin diferenciación estereotipada por género",
     "No ofrecer ningún tipo de juguete en el aula",
     "Limitar el acceso según criterios de género"
    ],
    "c": 1,
    "e": "Desde la perspectiva de la igualdad, se recomienda ofrecer en el aula una variedad amplia de juegos y materiales accesibles a todo el alumnado (cocinitas, coches, muñecos, construcciones), sin diferenciarlos ni etiquetarlos como 'de niño' o 'de niña', permitiendo que cada niño elija libremente según su interés real."
   },
   {
    "d": "dificil",
    "q": "Un protocolo de actuación ante indicios de abuso sexual infantil en el centro educativo debe garantizar, entre otros aspectos:",
    "o": [
     "Que el propio profesorado resuelva la situación sin comunicarlo a nadie más",
     "La comunicación a las autoridades y servicios de protección competentes, siguiendo el protocolo establecido, priorizando el bienestar del menor",
     "Ignorar los indicios si no existe una prueba médica definitiva",
     "Informar en primer lugar a la familia sospechosa antes que a cualquier autoridad"
    ],
    "c": 1,
    "e": "Un protocolo de actuación ante indicios de abuso sexual infantil en el centro debe garantizar la comunicación a las autoridades y servicios de protección competentes (servicios sociales, sanitarios o fiscalía de menores, según el caso), siguiendo el protocolo establecido y priorizando en todo momento el bienestar y la seguridad del menor, sin que el propio profesorado intente resolver la situación por su cuenta ni exija pruebas médicas definitivas antes de comunicarlo."
   },
   {
    "d": "facil",
    "q": "La masturbación infantil ocasional, cuando aparece en la etapa de Infantil, se considera generalmente:",
    "o": [
     "Un comportamiento normativo del desarrollo que no requiere alarma, salvo que sea muy frecuente, compulsiva o vaya acompañada de otros indicadores",
     "Siempre un signo de abuso sexual grave",
     "Un comportamiento que debe castigarse severamente",
     "Algo que nunca ocurre antes de la adolescencia"
    ],
    "c": 0,
    "e": "La autoexploración o masturbación ocasional en la etapa infantil se considera, en general, un comportamiento normativo del desarrollo, que no requiere alarma; solo cuando es muy frecuente, de tipo compulsivo, o va acompañada de otros indicadores (cambios de conducta, lenguaje sexualizado inapropiado para la edad) conviene una valoración específica, sin asumir automáticamente que implica abuso."
   },
   {
    "d": "media",
    "q": "La formación del profesorado de Infantil en materia de educación afectivo-sexual es relevante fundamentalmente porque:",
    "o": [
     "No es necesaria en esta etapa educativa",
     "Permite abordar con naturalidad, seguridad y criterio pedagógico las situaciones y preguntas que surgen de forma espontánea en el aula",
     "Sustituye completamente el papel de la familia",
     "Solo es útil para el profesorado de Secundaria"
    ],
    "c": 1,
    "e": "La formación específica del profesorado de Infantil en educación afectivo-sexual es relevante porque le permite abordar con naturalidad, seguridad y criterio pedagógico las situaciones y preguntas que surgen de forma espontánea en el aula (una pregunta sobre el cuerpo, una conducta de autoexploración, un comentario sobre la familia de un compañero), en lugar de improvisar respuestas inseguras o evitar el tema."
   },
   {
    "d": "facil",
    "q": "El vínculo afectivo positivo entre iguales (abrazos, muestras de cariño entre compañeros) en Infantil debe:",
    "o": [
     "Prohibirse completamente en el aula",
     "Acompañarse educativamente, enseñando también el respeto al 'no' y al espacio personal del otro",
     "Fomentarse sin ningún tipo de acompañamiento educativo",
     "Ser ignorado por el profesorado"
    ],
    "c": 1,
    "e": "Las muestras de afecto positivo entre iguales (abrazos, cogerse de la mano) deben acompañarse educativamente enseñando también a respetar el 'no' del otro y su espacio personal, de modo que el niño aprenda desde pequeño que el afecto se ofrece y se recibe con el acuerdo de ambas partes, y no de forma impuesta."
   },
   {
    "d": "dificil",
    "q": "El concepto de 'consentimiento', trabajado de forma adaptada en Infantil (p. ej. pedir permiso antes de abrazar a un compañero), contribuye a:",
    "o": [
     "Sentar bases tempranas del respeto al propio cuerpo y al de los demás",
     "No tiene ninguna relación con la educación afectivo-sexual en esta etapa",
     "Es un concepto exclusivo de la etapa adulta",
     "Debe evitarse por ser un tema demasiado complejo para Infantil"
    ],
    "c": 0,
    "e": "Trabajar el concepto de consentimiento de forma adaptada a la edad —por ejemplo, pedir permiso antes de abrazar a un compañero, o aceptar que otro niño diga 'no quiero que me toques ahora'— sienta bases tempranas fundamentales para el respeto al propio cuerpo y al de los demás, siendo un contenido perfectamente adecuado y comprensible en Infantil, no un tema exclusivo de etapas posteriores."
   },
   {
    "d": "facil",
    "q": "La diversidad de expresiones de género (por ejemplo, un niño que prefiere juguetes tradicionalmente asociados a las niñas, o viceversa) debe abordarse en Infantil con:",
    "o": [
     "Naturalidad y respeto, sin forzar ni corregir dichas preferencias",
     "Corrección inmediata para ajustarlas a lo 'socialmente esperado'",
     "Silencio absoluto sobre el tema",
     "Burla o ridiculización por parte del adulto"
    ],
    "c": 0,
    "e": "La diversidad en las expresiones de género (por ejemplo, un niño que prefiere jugar con muñecas o una niña que prefiere disfrazarse de superhéroe) debe acogerse con naturalidad y respeto, sin forzar ni corregir esas preferencias individuales para ajustarlas a lo 'socialmente esperado' según el género del niño."
   },
   {
    "d": "media",
    "q": "La coeducación, como enfoque pedagógico transversal a la educación afectivo-sexual, se define como:",
    "o": [
     "La simple coexistencia de niños y niñas en la misma aula",
     "Un modelo educativo que promueve activamente la igualdad real entre sexos, superando estereotipos y roles tradicionales",
     "Un método exclusivo para trabajar la lectoescritura",
     "Una corriente exclusiva del ámbito universitario"
    ],
    "c": 1,
    "e": "La coeducación va más allá de la simple coexistencia física de niños y niñas en la misma aula: es un modelo educativo que promueve activamente, a través de la organización, los materiales y las actitudes del docente, la igualdad real entre sexos, superando estereotipos y roles tradicionales de género en lugar de simplemente no separarlos por sexo."
   },
   {
    "d": "facil",
    "q": "Los libros y cuentos que abordan la diversidad corporal, afectiva y familiar de forma adaptada a Infantil son un recurso valioso porque:",
    "o": [
     "Normalizan y facilitan conversaciones sobre estos temas de forma natural y adecuada a la edad",
     "Deben evitarse por completo en el aula",
     "Solo son adecuados a partir de Educación Primaria",
     "Sustituyen por completo el papel educativo del adulto"
    ],
    "c": 0,
    "e": "Los cuentos y libros que abordan de forma adaptada la diversidad corporal, afectiva y familiar (distintos tipos de cuerpos, de familias, de expresiones de afecto) son un recurso valioso porque normalizan y facilitan, de manera natural y a través de una historia, conversaciones sobre educación afectivo-sexual que de otro modo podrían resultar más difíciles de iniciar directamente."
   },
   {
    "d": "dificil",
    "q": "La actitud del profesorado ante preguntas o comentarios de contenido sexual inapropiados para la edad, que en ocasiones surgen por exposición a contenidos inadecuados fuera del centro, debe ser:",
    "o": [
     "Ignorar la situación sin ninguna intervención",
     "Acoger la situación con calma, sin alarma ni juicio, informar a la familia si procede y estar atento a posibles indicadores que requieran valoración especializada",
     "Reprender severamente al niño delante del grupo",
     "Interrogar de forma insistente al niño hasta obtener toda la información posible"
    ],
    "c": 1,
    "e": "Ante preguntas o comentarios de contenido sexual inapropiados para la edad —que en ocasiones surgen por la exposición a contenidos inadecuados fuera del centro (por ejemplo, en internet o la televisión)—, el profesorado debe acoger la situación con calma, sin alarma ni juicio hacia el niño, informar a la familia si procede, y mantenerse atento a posibles indicadores adicionales que pudieran requerir una valoración especializada, evitando tanto ignorar la situación como interrogar de forma insistente al niño."
   }
  ]
 },
 {
  "id": "b16",
  "title": "La Enseñanza y el Aprendizaje de la Lengua en la Educación Infantil",
  "questions": [
   {
    "d": "facil",
    "q": "El enfoque comunicativo en la enseñanza de la lengua en Infantil prioriza:",
    "o": [
     "El uso funcional y contextualizado del lenguaje en situaciones reales de comunicación",
     "La enseñanza de reglas gramaticales de forma explícita y descontextualizada",
     "Exclusivamente ejercicios de repetición mecánica",
     "La lectoescritura formal desde los dos años"
    ],
    "c": 0,
    "e": "El enfoque comunicativo prioriza que el lenguaje se use de forma funcional en situaciones reales de comunicación (pedir algo, contar una experiencia, resolver un conflicto verbalmente), y no la enseñanza explícita y descontextualizada de reglas gramaticales ni la lectoescritura formal desde edades muy tempranas, poco adecuadas al desarrollo infantil."
   },
   {
    "d": "media",
    "q": "Según la LOMLOE, en Educación Infantil el acercamiento a la lectoescritura debe realizarse:",
    "o": [
     "De forma sistemática y obligatoria desde los tres años con métodos formales",
     "De forma progresiva y contextualizada, respetando el proceso evolutivo, sin carácter de enseñanza formal y sistemática obligatoria",
     "Prohibiéndose cualquier contacto con la lengua escrita",
     "Solo a través de fichas de caligrafía repetitiva"
    ],
    "c": 1,
    "e": "El marco curricular actual (LOMLOE) plantea que en Infantil el acercamiento a la lectoescritura debe ser progresivo y contextualizado, integrado en situaciones significativas (escribir el propio nombre, 'leer' un cartel del aula), respetando el proceso evolutivo de cada niño, sin que exista una obligación de enseñanza formal y sistemática de la lectoescritura como sí ocurre en Primaria."
   },
   {
    "d": "dificil",
    "q": "El enfoque constructivista sobre la adquisición de la lengua escrita, con autoras como Emilia Ferreiro y Ana Teberosky, defiende que el niño:",
    "o": [
     "Es un sujeto pasivo que recibe la escritura ya elaborada",
     "Construye activamente hipótesis sobre el sistema de escritura antes de dominarlo convencionalmente",
     "No puede tener ninguna idea sobre la escritura antes de los 6 años",
     "Aprende a escribir exclusivamente por repetición mecánica"
    ],
    "c": 1,
    "e": "Ferreiro y Teberosky demostraron, a través de la observación de las producciones escritas espontáneas de los niños, que estos no son receptores pasivos de la escritura, sino que construyen activamente hipótesis propias sobre cómo funciona el sistema de escritura, pasando por fases sucesivas —presilábica, silábica, silábico-alfabética y alfabética— antes de dominarlo de forma convencional."
   },
   {
    "d": "facil",
    "q": "La asamblea o el 'corro' de buenos días es un recurso metodológico especialmente valioso para trabajar:",
    "o": [
     "La expresión oral, la escucha y las habilidades comunicativas en grupo",
     "Exclusivamente la psicomotricidad fina",
     "La lectoescritura formal",
     "Las matemáticas avanzadas"
    ],
    "c": 0,
    "e": "La asamblea o el 'corro de buenos días' es un momento metodológico especialmente valioso para trabajar la expresión oral (contar qué se ha hecho el fin de semana), la escucha activa de lo que dicen los compañeros, y habilidades comunicativas grupales como esperar el turno de palabra o mantener el hilo de una conversación colectiva."
   },
   {
    "d": "facil",
    "q": "El cuento y la narración oral en el aula de Infantil favorecen especialmente:",
    "o": [
     "El desarrollo del vocabulario, la comprensión narrativa y la imaginación",
     "Únicamente la memoria mecánica de textos",
     "La psicomotricidad gruesa exclusivamente",
     "El cálculo matemático"
    ],
    "c": 0,
    "e": "La narración oral de cuentos amplía el vocabulario del niño (palabras que quizá no usa en su vida cotidiana), desarrolla su comprensión de estructuras narrativas (inicio, nudo, desenlace) y estimula su imaginación y capacidad simbólica, al tener que representarse mentalmente personajes y situaciones que no están presentes físicamente."
   },
   {
    "d": "media",
    "q": "El bilingüismo o plurilingüismo temprano en la etapa infantil, según la evidencia actual, tiende a:",
    "o": [
     "Perjudicar siempre el desarrollo cognitivo del niño",
     "Ser compatible con un desarrollo lingüístico adecuado, favoreciendo incluso ciertas habilidades cognitivas",
     "Provocar necesariamente retraso del lenguaje",
     "Ser desaconsejado en cualquier caso antes de los 6 años"
    ],
    "c": 1,
    "e": "La investigación actual sobre bilingüismo o plurilingüismo temprano señala que la exposición a varias lenguas desde la infancia es compatible con un desarrollo lingüístico saludable en cada una de ellas, y puede incluso favorecer ciertas habilidades cognitivas, como la flexibilidad para cambiar de una tarea a otra, frente a la vieja idea de que aprender dos lenguas a la vez 'confunde' o retrasa al niño."
   },
   {
    "d": "facil",
    "q": "La 'conciencia fonológica', capacidad relevante como precursora de la lectoescritura, consiste en:",
    "o": [
     "La capacidad de reflexionar sobre los sonidos del lenguaje oral, independientemente de su significado",
     "El dominio completo de la escritura convencional",
     "La memorización de listas de vocabulario",
     "La comprensión de textos escritos complejos"
    ],
    "c": 0,
    "e": "La conciencia fonológica es la capacidad de reflexionar y manipular los sonidos del lenguaje oral (sílabas, rimas, sonidos iniciales) independientemente de su significado, y se considera una habilidad precursora fundamental de la lectoescritura: por ejemplo, saber que 'gato' y 'pato' riman, o que 'sol' empieza igual que 'sopa', ayuda posteriormente a relacionar sonidos con letras."
   },
   {
    "d": "dificil",
    "q": "Según Ferreiro y Teberosky, la hipótesis 'silábica' en la evolución de la escritura infantil se caracteriza porque el niño:",
    "o": [
     "Escribe una letra o grafismo por cada sílaba de la palabra que quiere representar",
     "Ya domina la correspondencia exacta entre fonema y grafema",
     "No relaciona en absoluto la escritura con el habla",
     "Escribe cadenas de grafismos sin ninguna intención representativa"
    ],
    "c": 0,
    "e": "En la hipótesis silábica descrita por Ferreiro y Teberosky, el niño atribuye a cada sílaba de la palabra oral una única letra o grafismo (por ejemplo, escribir 'OAO' para representar 'pelota', con una letra por cada una de sus tres sílabas), un paso intermedio muy importante hacia la comprensión de que la escritura representa los sonidos del habla, aunque todavía no de forma alfabética completa."
   },
   {
    "d": "facil",
    "q": "El rincón de biblioteca en el aula de Infantil tiene, entre otras, la finalidad de:",
    "o": [
     "Acercar al alumnado al libro y despertar el gusto por la lectura de forma libre y motivadora",
     "Ser un espacio exclusivamente decorativo",
     "Sustituir la narración oral del docente",
     "Reservarse solo para el segundo ciclo de Infantil"
    ],
    "c": 0,
    "e": "El rincón de biblioteca en el aula de Infantil busca acercar al alumnado al libro de forma libre y motivadora —eligiendo por sí mismo qué cuento mirar o 'leer' sin que sea siempre una actividad dirigida por el docente—, favoreciendo así el contacto autónomo con la lengua escrita y el gusto personal por la lectura."
   },
   {
    "d": "media",
    "q": "El 'principio alfabético', comprensión clave para el aprendizaje de la lectoescritura convencional, consiste en entender que:",
    "o": [
     "Cada letra representa siempre y exclusivamente una sílaba completa",
     "Existe una relación sistemática entre los sonidos del habla (fonemas) y las letras (grafemas) que los representan",
     "Las letras no tienen relación alguna con los sonidos del habla",
     "Solo las vocales tienen representación escrita"
    ],
    "c": 1,
    "e": "El principio alfabético es la comprensión de que existe una relación sistemática entre los sonidos del habla (fonemas) y las letras del sistema de escritura que los representan (grafemas): comprenderlo es clave para poder leer y escribir de forma convencional, ya que permite al niño 'traducir' sonidos en letras y viceversa, en lugar de memorizar palabras completas de forma aislada."
   },
   {
    "d": "facil",
    "q": "El vocabulario del alumnado de Infantil se enriquece especialmente a través de:",
    "o": [
     "La interacción verbal cotidiana, los cuentos, las canciones y la exposición a lenguaje variado",
     "Exclusivamente fichas de vocabulario escritas",
     "La memorización de listas de palabras sin contexto",
     "Un único recurso, evitando la variedad"
    ],
    "c": 0,
    "e": "El vocabulario del alumnado de Infantil se enriquece principalmente a través de la interacción verbal cotidiana con adultos e iguales, la escucha de cuentos y canciones, y la exposición a un lenguaje variado y contextualizado, mucho más que mediante fichas o listas de vocabulario memorizadas sin relación con situaciones reales."
   },
   {
    "d": "dificil",
    "q": "El 'nombre propio', como primera palabra significativa con la que muchos niños comienzan a familiarizarse con la escritura, resulta especialmente relevante porque:",
    "o": [
     "Carece de valor afectivo o identitario para el niño",
     "Combina significado personal y afectivo con una forma escrita estable, motivando el interés por la escritura",
     "Solo puede trabajarse a partir de los 6 años",
     "Es idéntico para todos los niños, sin valor identitario"
    ],
    "c": 1,
    "e": "El nombre propio suele ser una de las primeras palabras que motivan el interés del niño por la escritura porque combina un fuerte significado personal y afectivo ('esto soy yo') con una forma escrita estable y siempre igual, lo que facilita que el niño empiece a reconocer y, más adelante, a reproducir sus letras antes que las de otras palabras."
   },
   {
    "d": "facil",
    "q": "Las rimas, trabalenguas y juegos de palabras en Infantil favorecen especialmente el desarrollo de:",
    "o": [
     "La conciencia fonológica y el disfrute del lenguaje",
     "Exclusivamente el cálculo matemático",
     "La motricidad gruesa",
     "No tienen ninguna relación con el lenguaje"
    ],
    "c": 0,
    "e": "Las rimas, los trabalenguas y los juegos de palabras (por ejemplo, 'pablito clavó un clavito') favorecen especialmente el desarrollo de la conciencia fonológica, al llamar la atención sobre los sonidos y la estructura de las palabras más allá de su significado, además de fomentar el disfrute lúdico y sonoro del lenguaje."
   },
   {
    "d": "media",
    "q": "La 'hipótesis presilábica', primera fase descrita por Ferreiro y Teberosky en la evolución de la escritura infantil, se caracteriza porque el niño:",
    "o": [
     "Ya domina la correspondencia sonora entre letras y sílabas",
     "Utiliza grafismos (letras, pseudoletras o signos) sin relación sistemática con los sonidos de la palabra, guiándose por otros criterios (tamaño del objeto, cantidad de letras...)",
     "Escribe ya de forma alfabética convencional",
     "No realiza ningún tipo de grafismo"
    ],
    "c": 1,
    "e": "En la hipótesis presilábica, primera fase descrita por Ferreiro y Teberosky, el niño utiliza grafismos (letras, pseudoletras o signos inventados) sin ninguna relación sistemática con los sonidos de la palabra que quiere representar, guiándose por otros criterios, como escribir 'más letras' para un objeto que percibe como más grande, aunque la palabra real sea corta."
   },
   {
    "d": "facil",
    "q": "El docente, al leer un cuento en voz alta al grupo, debe cuidar especialmente:",
    "o": [
     "La entonación, el ritmo y el contacto visual, para favorecer la comprensión y la implicación del alumnado",
     "Leer de forma monótona y rápida",
     "Evitar cualquier interacción con el grupo durante la lectura",
     "Elegir siempre textos sin ninguna ilustración"
    ],
    "c": 0,
    "e": "Al leer un cuento en voz alta, el docente debe cuidar la entonación (dar voz distinta a cada personaje), un ritmo pausado que dé tiempo a imaginar lo que va sucediendo, y el contacto visual con el grupo, ya que todo ello favorece la comprensión de la historia y la implicación emocional del alumnado, mucho más que una lectura monótona y rápida."
   },
   {
    "d": "dificil",
    "q": "El concepto de 'funciones del lenguaje escrito' (para qué sirve escribir: recordar, comunicar a distancia, informar...) es relevante en el proceso de alfabetización infantil porque:",
    "o": [
     "No influye en absoluto en el interés del niño por aprender a leer y escribir",
     "Ayudar a comprender la utilidad social de la escritura motiva y da sentido al proceso de aprendizaje",
     "Solo tiene sentido a partir de Educación Primaria",
     "Contradice el enfoque comunicativo de la lengua"
    ],
    "c": 1,
    "e": "Comprender las funciones del lenguaje escrito —para qué sirve escribir en la vida real: hacer una lista de la compra, escribir una carta a alguien lejano, dejar una nota recordatoria— ayuda a dar sentido y utilidad social a la escritura, lo que motiva al niño a aprenderla mucho más que presentarla como un ejercicio abstracto sin ninguna finalidad práctica visible."
   },
   {
    "d": "facil",
    "q": "La expresión oral espontánea del alumnado durante el juego libre debe ser considerada por el docente como:",
    "o": [
     "Una oportunidad valiosa de observación y estímulo del desarrollo lingüístico",
     "Un momento sin ningún valor pedagógico",
     "Algo que debe interrumpirse siempre para corregir errores gramaticales",
     "Un momento exclusivamente de descanso del docente"
    ],
    "c": 0,
    "e": "La expresión oral espontánea que surge durante el juego libre (dos niños negociando roles, explicando reglas de un juego inventado) ofrece al docente un contexto natural y muy valioso para observar el nivel de lenguaje real del alumnado y para intervenir de forma oportuna, estimulando el desarrollo lingüístico sin necesidad de una actividad dirigida específica."
   },
   {
    "d": "media",
    "q": "La corrección de los errores gramaticales o fonéticos propios del desarrollo del lenguaje infantil (por ejemplo, decir 'zapato' como 'sapato') debe realizarse preferentemente:",
    "o": [
     "De forma indirecta, mediante el modelado correcto (expansión), sin señalar explícitamente el error ni exigir la repetición correcta de forma forzada",
     "Corrigiendo de forma explícita y repetida hasta que el niño lo diga correctamente",
     "Ignorando por completo cualquier error",
     "Ridiculizando el error para que el niño lo recuerde"
    ],
    "c": 0,
    "e": "Los errores gramaticales o fonéticos propios del desarrollo del lenguaje infantil (decir 'sapato' en lugar de 'zapato', o 'rompido' en lugar de 'roto') deben corregirse de forma indirecta, mediante el modelado: el adulto repite la palabra o frase correctamente dentro de la propia conversación ('ah, se te ha roto el zapato'), sin señalar explícitamente el error ni exigir al niño que lo repita de forma forzada, lo que podría generar inhibición para hablar."
   },
   {
    "d": "facil",
    "q": "Las dramatizaciones y juegos de rol sencillos en el aula favorecen especialmente el desarrollo de:",
    "o": [
     "El lenguaje oral, la creatividad y la expresión de ideas y emociones",
     "Exclusivamente el cálculo matemático",
     "La motricidad fina en exclusiva",
     "No tienen relación con el lenguaje"
    ],
    "c": 0,
    "e": "Las dramatizaciones y juegos de rol sencillos (representar un cuento, jugar a ser un personaje) integran el lenguaje oral con la expresión corporal y emocional, obligando al niño a poner palabras a lo que su personaje siente o quiere decir, lo que enriquece tanto su vocabulario como su capacidad narrativa de forma natural y motivadora."
   },
   {
    "d": "dificil",
    "q": "El 'input lingüístico' de calidad que recibe el niño (cantidad y riqueza del lenguaje al que está expuesto) se ha relacionado en la investigación con:",
    "o": [
     "Ningún efecto relevante en el desarrollo del lenguaje",
     "Un desarrollo más rico del vocabulario y de las estructuras lingüísticas del niño",
     "Un posible retraso del lenguaje si es demasiado variado",
     "Solo tiene relevancia en el aprendizaje de una segunda lengua"
    ],
    "c": 1,
    "e": "La investigación muestra que la cantidad y la calidad del lenguaje al que está expuesto el niño (el llamado 'input lingüístico': con cuánta gente habla, qué tan variado es ese lenguaje, si se le hacen preguntas abiertas) se relaciona directamente con un desarrollo más rico de su vocabulario y de sus estructuras gramaticales, siendo uno de los factores ambientales más influyentes en la adquisición del lenguaje."
   }
  ]
 },
 {
  "id": "b17",
  "title": "La Expresión Corporal",
  "questions": [
   {
    "d": "facil",
    "q": "La expresión corporal en Infantil se define como un lenguaje que utiliza el cuerpo y el movimiento con una finalidad:",
    "o": [
     "Exclusivamente deportiva y competitiva",
     "Comunicativa, expresiva y creativa",
     "Únicamente terapéutica clínica",
     "Solo evaluable mediante pruebas físicas estandarizadas"
    ],
    "c": 1,
    "e": "La expresión corporal utiliza el cuerpo y el movimiento con una finalidad comunicativa, expresiva y creativa —representar una idea, una emoción, un personaje— y no una finalidad exclusivamente deportiva, competitiva o clínica. Por ejemplo, moverse 'como si fuera' una hoja que cae del árbol es expresión corporal, mientras que correr una carrera cronometrada es más bien una actividad deportiva."
   },
   {
    "d": "media",
    "q": "El juego simbólico y la dramatización espontánea (jugar a ser 'mamá', 'médico'...) forman parte de:",
    "o": [
     "La expresión corporal y contribuyen al desarrollo de la representación simbólica",
     "Un contenido exclusivo del área matemática",
     "Una actividad sin ninguna relación con la expresión corporal",
     "Solo el ámbito de la música"
    ],
    "c": 0,
    "e": "El juego simbólico y la dramatización espontánea (jugar a ser 'mamá' o 'médico') forman parte de la expresión corporal, ya que el niño usa su cuerpo para representar un rol o una situación ausente, y a la vez contribuyen al desarrollo de la función simbólica descrita por Piaget, la misma capacidad que está detrás del dibujo o del lenguaje."
   },
   {
    "d": "dificil",
    "q": "En las sesiones de expresión corporal en Infantil, el papel del maestro o maestra debe ser preferentemente:",
    "o": [
     "Dirigir de forma rígida cada movimiento sin margen de creatividad",
     "Facilitar, proponer estímulos y respetar la creatividad e iniciativa infantil",
     "Evaluar exclusivamente la técnica con criterios de danza profesional",
     "No intervenir nunca en ningún sentido"
    ],
    "c": 1,
    "e": "En las sesiones de expresión corporal, el docente debe actuar preferentemente como facilitador: propone estímulos (una música, un objeto, una consigna abierta como 'muévete como si fueras muy pesado') y después respeta la libre interpretación y creatividad de cada niño, sin dirigir de forma rígida cada movimiento ni evaluarlo con criterios de técnica de danza profesional."
   },
   {
    "d": "facil",
    "q": "El trabajo del esquema corporal y la imagen corporal a través de la expresión corporal contribuye especialmente al desarrollo:",
    "o": [
     "Exclusivamente cognitivo-matemático",
     "Psicomotor y de la identidad personal",
     "Únicamente auditivo",
     "Solo del lenguaje escrito"
    ],
    "c": 1,
    "e": "El trabajo del esquema corporal (la representación mental del propio cuerpo) y de la imagen corporal a través de la expresión corporal contribuye especialmente al desarrollo psicomotor y a la construcción de la identidad personal, ya que moverse, mirarse y sentirse en el espacio ayuda al niño a conocer y aceptar su propio cuerpo."
   },
   {
    "d": "facil",
    "q": "La utilización de música, objetos o consignas verbales como estímulo para la expresión corporal tiene como finalidad:",
    "o": [
     "Sustituir totalmente la creatividad del niño",
     "Servir de punto de partida que estimule la respuesta motriz y expresiva personal",
     "Imponer un único movimiento correcto",
     "Evaluar exclusivamente la memoria auditiva"
    ],
    "c": 1,
    "e": "Usar música, objetos o consignas verbales como estímulo para la expresión corporal sirve de punto de partida que dispara la respuesta motriz y expresiva personal de cada niño (por ejemplo, moverse de forma distinta según la música sea suave o enérgica), sin sustituir su creatividad ni imponer un único movimiento considerado 'correcto'."
   },
   {
    "d": "media",
    "q": "El mimo y la imitación gestual en Infantil favorecen especialmente:",
    "o": [
     "La capacidad de observación, la representación simbólica y el control corporal",
     "Exclusivamente la lectoescritura",
     "El cálculo matemático avanzado",
     "La memorización de vocabulario técnico"
    ],
    "c": 0,
    "e": "El mimo y la imitación gestual (representar sin palabras una acción, como 'lavarse los dientes' o 'ser un pájaro') favorecen la capacidad de observación (fijarse en cómo es realmente ese gesto para poder representarlo), la representación simbólica y un mayor control y conciencia del propio cuerpo."
   },
   {
    "d": "facil",
    "q": "Las 'danzas del mundo' o bailes tradicionales sencillos, adaptados a Infantil, contribuyen especialmente a:",
    "o": [
     "El conocimiento cultural, el ritmo y la coordinación grupal",
     "Exclusivamente la memoria auditiva sin ningún componente motriz",
     "No tienen relación con la expresión corporal",
     "Solo se trabajan en Educación Primaria"
    ],
    "c": 0,
    "e": "Las danzas del mundo o bailes tradicionales sencillos, adaptados a la edad, favorecen el conocimiento de la diversidad cultural (cada baile procede de una tradición y un lugar concretos), el trabajo del ritmo al seguir los pasos con la música, y la coordinación y cohesión del grupo al moverse juntos siguiendo una misma secuencia."
   },
   {
    "d": "dificil",
    "q": "La expresión corporal, dentro del currículo LOMLOE de Infantil, se relaciona más directamente con el área de:",
    "o": [
     "Comunicación y representación de la realidad",
     "Crecimiento en armonía exclusivamente, sin relación con la comunicación",
     "No forma parte de ninguna de las áreas del currículo",
     "Descubrimiento y exploración del entorno exclusivamente"
    ],
    "c": 0,
    "e": "Dentro del currículo LOMLOE de Infantil, la expresión corporal se integra en el área de Comunicación y representación de la realidad, junto con el resto de lenguajes de expresión (verbal, plástico, musical, audiovisual), ya que el cuerpo en movimiento es también una vía de comunicación y representación de ideas y emociones."
   },
   {
    "d": "facil",
    "q": "Explorar distintas cualidades del movimiento (rápido-lento, fuerte-suave, grande-pequeño) a través del propio cuerpo favorece:",
    "o": [
     "La conciencia corporal y la capacidad expresiva y creativa del movimiento",
     "Exclusivamente la memoria auditiva",
     "El cálculo matemático avanzado",
     "No tiene relación con la expresión corporal"
    ],
    "c": 0,
    "e": "Explorar distintas cualidades del movimiento —rápido o lento, fuerte o suave, con gestos grandes o pequeños— a través del propio cuerpo enriquece la conciencia corporal del niño y amplía su repertorio expresivo y creativo, permitiéndole comunicar matices distintos (no es lo mismo moverse 'enfadado' que moverse 'con mucho sueño')."
   },
   {
    "d": "media",
    "q": "La 'dramatización de cuentos', en la que los niños representan corporalmente una historia narrada, integra de forma característica:",
    "o": [
     "Lenguaje verbal, expresión corporal y representación simbólica de forma globalizada",
     "Exclusivamente contenidos matemáticos",
     "Solo aspectos técnicos de interpretación teatral profesional",
     "Ningún componente lingüístico"
    ],
    "c": 0,
    "e": "La dramatización de cuentos, en la que los niños representan corporalmente una historia que se les narra, integra de forma globalizada el lenguaje verbal (escuchar y comprender la narración), la expresión corporal (representarla con el cuerpo) y la representación simbólica, en línea con el enfoque globalizador propio de la etapa infantil, en el que distintas áreas se trabajan de forma conjunta en una misma actividad."
   },
   {
    "d": "facil",
    "q": "El espacio destinado a la expresión corporal en el aula o en una sala específica debe ser, ante todo:",
    "o": [
     "Amplio, seguro y libre de obstáculos que permita el movimiento",
     "Reducido y lleno de mobiliario",
     "Exclusivamente al aire libre",
     "Idéntico al espacio de trabajo de mesa"
    ],
    "c": 0,
    "e": "El espacio destinado a la expresión corporal debe ser, ante todo, amplio, seguro y estar libre de obstáculos (mesas, sillas, objetos con los que se pueda tropezar), de modo que todo el grupo pueda moverse con libertad y sin riesgo de accidentes durante la actividad."
   },
   {
    "d": "dificil",
    "q": "La 'escucha corporal', es decir, la atención a las propias sensaciones corporales durante la actividad de expresión corporal, contribuye especialmente a:",
    "o": [
     "El desarrollo de la propiocepción y la autorregulación emocional y corporal",
     "No tiene ninguna relación con el desarrollo infantil",
     "Exclusivamente el desarrollo del lenguaje escrito",
     "El aprendizaje de las matemáticas"
    ],
    "c": 0,
    "e": "La 'escucha corporal' —prestar atención a las propias sensaciones durante el movimiento, como notar la respiración agitada tras correr o la tensión muscular al mantener el equilibrio— favorece el desarrollo de la propiocepción (la percepción de la posición y el estado del propio cuerpo) y contribuye a la autorregulación tanto corporal como emocional."
   },
   {
    "d": "facil",
    "q": "El juego de 'estatuas' (moverse con música y quedarse inmóvil al parar la música) trabaja especialmente:",
    "o": [
     "El control corporal, la atención y la capacidad de inhibición del movimiento",
     "Exclusivamente el lenguaje escrito",
     "El cálculo matemático",
     "No tiene relación con la expresión corporal"
    ],
    "c": 0,
    "e": "El juego de las 'estatuas' (moverse libremente mientras suena la música y quedarse completamente inmóvil cuando esta se detiene) trabaja el control corporal voluntario, la atención auditiva a la señal sonora, y la capacidad de inhibir el propio movimiento cuando es necesario, una habilidad relacionada con el autocontrol."
   },
   {
    "d": "media",
    "q": "La expresión corporal, frente a otras formas de expresión como la plástica o la musical, tiene la particularidad de que su instrumento expresivo es:",
    "o": [
     "Un material externo al propio niño",
     "El propio cuerpo del niño, que es a la vez sujeto y medio de expresión",
     "Exclusivamente el lenguaje verbal",
     "Un instrumento musical concreto"
    ],
    "c": 1,
    "e": "A diferencia de otras formas de expresión, como la plástica (que usa un material externo, como el papel o la pintura) o la musical (que puede usar un instrumento externo), la particularidad de la expresión corporal es que el propio cuerpo del niño es a la vez el sujeto que expresa y el medio o instrumento con el que expresa."
   },
   {
    "d": "facil",
    "q": "Las actividades de expresión corporal en grupo (formar figuras, moverse en pareja) favorecen, además de lo motriz, el desarrollo:",
    "o": [
     "Social y de la cooperación con los demás",
     "Exclusivamente cognitivo abstracto",
     "Solo el desarrollo del lenguaje escrito",
     "No influyen en el desarrollo social"
    ],
    "c": 0,
    "e": "Las actividades de expresión corporal en grupo (formar entre varios una figura, moverse coordinadamente en pareja) favorecen, además de la dimensión motriz y expresiva individual, la cooperación y la coordinación con los demás, contribuyendo también al desarrollo social del niño."
   },
   {
    "d": "facil",
    "q": "El calentamiento corporal previo a una sesión de expresión corporal o psicomotricidad tiene como finalidad principal:",
    "o": [
     "Preparar progresivamente el cuerpo para el movimiento, activando la atención y el tono muscular",
     "No tiene ninguna finalidad relevante",
     "Sustituir por completo la actividad principal de la sesión",
     "Ser idéntico en duración y contenido a la actividad de relajación final"
    ],
    "c": 0,
    "e": "El calentamiento corporal previo a una sesión de expresión corporal o psicomotricidad prepara progresivamente el cuerpo para el movimiento —activando el tono muscular y la circulación— y ayuda a centrar la atención del grupo antes de pasar a la actividad principal, siendo una fase breve y distinta tanto de esa actividad como de la relajación final."
   },
   {
    "d": "dificil",
    "q": "La representación de emociones a través del cuerpo (mostrar con el cuerpo cómo es 'estar triste', 'estar contento') es una actividad de expresión corporal que contribuye especialmente a:",
    "o": [
     "El desarrollo de la conciencia emocional y su vinculación con la expresión corporal",
     "Exclusivamente la memorización de vocabulario emocional",
     "No tiene relación con la expresión corporal",
     "El desarrollo del cálculo matemático"
    ],
    "c": 0,
    "e": "Representar emociones a través del cuerpo (mostrar con gestos y postura cómo es 'estar contento' o 'estar enfadado') ayuda a los niños a tomar conciencia de sus propios estados emocionales y a vincular la expresión corporal con la vivencia interna de esas emociones, siendo un puente muy útil entre lo corporal y lo emocional."
   },
   {
    "d": "facil",
    "q": "Los objetos y telas (pañuelos, cintas, aros) empleados como recurso en sesiones de expresión corporal tienen como función principal:",
    "o": [
     "Ampliar las posibilidades expresivas y motrices del movimiento del niño",
     "Sustituir por completo el movimiento corporal libre",
     "Limitar la creatividad a un único uso posible",
     "No aportar ningún valor a la sesión"
    ],
    "c": 0,
    "e": "Los objetos y telas (pañuelos, cintas, aros) empleados como recurso en las sesiones de expresión corporal amplían las posibilidades expresivas y motrices del movimiento del niño (un pañuelo puede volar, ondular o esconder algo), actuando como elemento mediador que enriquece y estimula la creatividad, sin sustituir el movimiento corporal libre."
   },
   {
    "d": "media",
    "q": "La 'vivencia del propio cuerpo en el espacio' (ocupar, recorrer, delimitar el espacio con el movimiento) trabajada en expresión corporal se relaciona directamente con el desarrollo de:",
    "o": [
     "Las nociones espaciales y la estructuración espacio-temporal",
     "Exclusivamente el lenguaje escrito",
     "El desarrollo lógico-matemático abstracto sin relación corporal",
     "No tiene relación con otras áreas del desarrollo"
    ],
    "c": 0,
    "e": "La vivencia del propio cuerpo en el espacio —ocuparlo, recorrerlo, delimitarlo con el movimiento (por ejemplo, trazar un círculo caminando)— trabajada en expresión corporal se relaciona directamente con el desarrollo de las nociones espaciales y la estructuración espacio-temporal, mostrando cómo distintas áreas del desarrollo se trabajan de forma interrelacionada en Infantil."
   },
   {
    "d": "facil",
    "q": "La observación por parte del docente de cómo se mueve y expresa corporalmente cada niño le permite, entre otros aspectos:",
    "o": [
     "Conocer mejor su desarrollo motor, emocional y su forma de relacionarse, ajustando la intervención educativa",
     "No aporta ninguna información relevante",
     "Sustituir la evaluación de otras áreas del desarrollo",
     "Evaluar exclusivamente su nivel de lectoescritura"
    ],
    "c": 0,
    "e": "Observar cómo se mueve y se expresa corporalmente cada niño (si se mueve con soltura o con inhibición, si busca el contacto con otros niños o se mantiene aislado) permite al docente conocer mejor su desarrollo motor, emocional y relacional, información valiosa para ajustar la intervención educativa a las necesidades de cada niño."
   }
  ]
 },
 {
  "id": "b18",
  "title": "La Familia Como Primer Agente de Socialización",
  "questions": [
   {
    "d": "facil",
    "q": "La familia se considera el primer agente de socialización porque:",
    "o": [
     "Es la primera institución con la que el niño establece vínculos afectivos y aprende pautas sociales básicas",
     "Es la única institución que interviene en la socialización del niño",
     "Solo tiene función económica",
     "No influye en el desarrollo afectivo"
    ],
    "c": 0,
    "e": "La familia se considera el primer agente de socialización porque es la primera institución con la que el niño establece vínculos afectivos y aprende las pautas sociales más básicas (cómo comunicarse, qué normas seguir, cómo relacionarse con otros), mucho antes de entrar en contacto con la escuela, el grupo de iguales o los medios de comunicación, que actuarán como agentes socializadores posteriores."
   },
   {
    "d": "media",
    "q": "La relación entre la escuela infantil y la familia debe basarse fundamentalmente en el principio de:",
    "o": [
     "Delegación total de responsabilidades de una parte a la otra",
     "Colaboración, complementariedad y comunicación bidireccional",
     "Ausencia de contacto para no interferir",
     "Competencia entre ambas instituciones"
    ],
    "c": 1,
    "e": "La relación entre la escuela infantil y la familia debe basarse en la colaboración, la complementariedad de roles y una comunicación fluida en ambos sentidos (la escuela informa a la familia y la familia aporta información relevante sobre el niño), y no en que una de las dos instituciones delegue por completo su responsabilidad en la otra, ni en la ausencia de contacto entre ambas."
   },
   {
    "d": "facil",
    "q": "El 'periodo de adaptación' al inicio de la escolarización tiene como principal finalidad:",
    "o": [
     "Separar de forma brusca al niño de la familia",
     "Facilitar de forma gradual la transición del entorno familiar al escolar, minimizando la angustia de separación",
     "Evaluar el nivel académico del niño",
     "Sustituir definitivamente el vínculo familiar"
    ],
    "c": 1,
    "e": "El periodo de adaptación al inicio de la escolarización busca facilitar de forma gradual la transición del entorno familiar al escolar (por ejemplo, con estancias cortas los primeros días que se van alargando progresivamente), atendiendo a la angustia de separación propia de estas edades, en lugar de una separación brusca y sin preparación."
   },
   {
    "d": "dificil",
    "q": "Según la clasificación clásica de estilos educativos parentales (Baumrind), el estilo caracterizado por afecto y normas claras y razonadas se denomina:",
    "o": [
     "Estilo autoritario",
     "Estilo democrático o autorizativo",
     "Estilo permisivo",
     "Estilo negligente"
    ],
    "c": 1,
    "e": "Baumrind describe el estilo democrático o autorizativo como aquel que combina afecto y comunicación cálida con normas claras que se explican y razonan (no se imponen sin dar motivos), un estilo que la investigación asocia consistentemente con mejores resultados en el desarrollo social y emocional del niño, frente al autoritario, el permisivo o el negligente."
   },
   {
    "d": "media",
    "q": "Las escuelas de familias o escuelas de madres y padres organizadas desde los centros de Infantil tienen como objetivo principal:",
    "o": [
     "Sustituir la función educativa de la familia",
     "Ofrecer formación, apoyo y espacios de reflexión a las familias sobre la crianza y educación",
     "Evaluar negativamente a las familias",
     "Excluir a las familias de la vida del centro"
    ],
    "c": 1,
    "e": "Las escuelas de familias o escuelas de madres y padres organizadas desde los centros de Infantil buscan ofrecer formación (por ejemplo, sobre el desarrollo evolutivo o la gestión de las emociones infantiles), apoyo y espacios de encuentro y reflexión conjunta entre familias sobre temas de crianza y educación, sin pretender sustituir en ningún momento la función educativa propia de cada familia."
   },
   {
    "d": "facil",
    "q": "La actual diversidad de estructuras familiares (nucleares, monoparentales, reconstituidas, homoparentales, etc.) debe abordarse desde la escuela con:",
    "o": [
     "Rechazo hacia los modelos no tradicionales",
     "Normalidad, respeto y sin establecer jerarquías entre modelos familiares",
     "Silencio absoluto sobre el tema",
     "Trato diferenciado y desigual según el tipo de familia"
    ],
    "c": 1,
    "e": "La diversidad de estructuras familiares actuales (nucleares, monoparentales, reconstituidas, homoparentales, adoptivas, extensas) debe abordarse desde la escuela con normalidad y respeto, sin establecer jerarquías entre unos modelos y otros ni presentar uno solo como el 'correcto' o 'normal', por ejemplo utilizando cuentos y materiales que reflejen esa diversidad real."
   },
   {
    "d": "facil",
    "q": "El estilo educativo 'autoritario', según la clasificación de Baumrind, se caracteriza por:",
    "o": [
     "Alto control y exigencia, con escasa calidez y comunicación afectiva",
     "Ausencia total de normas y límites",
     "Alto afecto combinado con normas claras y razonadas",
     "Falta de implicación en la crianza"
    ],
    "c": 0,
    "e": "El estilo educativo autoritario, según la clasificación de Baumrind, combina un alto nivel de control y exigencia de obediencia con escasa calidez afectiva, diálogo o explicación de las normas ('esto se hace así porque lo digo yo'), a diferencia del estilo democrático, que también exige pero explicando y con afecto."
   },
   {
    "d": "dificil",
    "q": "El estilo educativo 'permisivo', según Baumrind, se asocia frecuentemente en la investigación con:",
    "o": [
     "Mayor autocontrol y regulación de la conducta infantil",
     "Dificultades para la autorregulación y el establecimiento de límites por parte del niño",
     "Ningún efecto relevante en el desarrollo",
     "Mayores niveles de disciplina en el niño"
    ],
    "c": 1,
    "e": "El estilo educativo permisivo, caracterizado por un alto nivel de afecto pero una exigencia y unos límites muy escasos o inconsistentes, se asocia frecuentemente en la investigación con mayores dificultades del niño para autorregular su conducta y sus emociones, precisamente por la falta de límites claros y estables a los que ajustarse."
   },
   {
    "d": "facil",
    "q": "Las reuniones periódicas de tutoría entre el docente y las familias tienen como finalidad principal:",
    "o": [
     "Compartir información sobre el desarrollo y proceso educativo del niño, favoreciendo la coordinación",
     "Evaluar y sancionar a las familias",
     "Sustituir el boletín de calificaciones",
     "No tienen relevancia en Educación Infantil"
    ],
    "c": 0,
    "e": "Las reuniones periódicas de tutoría entre el docente y las familias tienen como finalidad compartir información relevante sobre el desarrollo y el proceso educativo del niño (avances, dificultades, aspectos a reforzar en casa), favoreciendo una coordinación estrecha entre ambos contextos, y no evaluar ni sancionar a las familias."
   },
   {
    "d": "media",
    "q": "El concepto de 'coeducación familia-escuela' implica, entre otros aspectos:",
    "o": [
     "Que la familia se desentienda completamente del proceso educativo escolar",
     "Un proyecto educativo compartido y coherente entre ambos contextos, con roles complementarios",
     "Que la escuela asuma en exclusiva la responsabilidad educativa",
     "Una relación de control jerárquico de la escuela sobre la familia"
    ],
    "c": 1,
    "e": "La coeducación familia-escuela implica compartir un proyecto educativo coherente entre ambos contextos, reconociendo que cada uno tiene un rol complementario y distinto (no idéntico) en la educación del niño, de modo que los mensajes y valores transmitidos en casa y en la escuela no resulten contradictorios entre sí."
   },
   {
    "d": "facil",
    "q": "La comunicación diaria mediante agenda, notas o aplicaciones digitales entre familia y escuela infantil tiene como finalidad:",
    "o": [
     "Mantener informadas a las familias del día a día del niño y facilitar la comunicación bidireccional",
     "Sustituir por completo la comunicación oral",
     "No tiene ninguna relevancia pedagógica",
     "Ser una obligación exclusivamente administrativa sin valor educativo"
    ],
    "c": 0,
    "e": "La comunicación diaria mediante agenda, notas o aplicaciones digitales entre la familia y la escuela infantil (por ejemplo, informar de cuánto ha comido o dormido un bebé) mantiene informadas a las familias sobre el día a día del niño y facilita una comunicación fluida y en ambos sentidos, complementando —no sustituyendo del todo— la comunicación oral directa."
   },
   {
    "d": "dificil",
    "q": "Las 'funciones básicas de la familia' descritas en el ámbito educativo incluyen, entre otras:",
    "o": [
     "Exclusivamente la función económica",
     "Las funciones biológica, afectiva, socializadora y educativa",
     "Únicamente la función educativa formal",
     "Solo la función legal y jurídica"
    ],
    "c": 1,
    "e": "Entre las funciones básicas de la familia se incluyen la biológica (cuidados y protección física), la afectiva (proporcionar vínculo y seguridad emocional), la socializadora (transmitir las primeras normas y pautas sociales) y la educativa (transmitir valores, hábitos y conocimientos), y no únicamente aspectos económicos o legales."
   },
   {
    "d": "facil",
    "q": "La implicación de las familias en actividades del centro (talleres, celebraciones, salidas) contribuye especialmente a:",
    "o": [
     "Fortalecer el vínculo entre familia y escuela y enriquecer la experiencia educativa del niño",
     "No aportar ningún beneficio educativo",
     "Sustituir el papel del docente en el aula",
     "Generar siempre conflictos innecesarios"
    ],
    "c": 0,
    "e": "La implicación de las familias en actividades del centro (talleres, celebraciones, salidas) fortalece el vínculo entre familia y escuela, mejora la comunicación entre ambos contextos y enriquece la experiencia educativa del niño, al ver a personas significativas de su entorno familiar implicadas en su vida escolar."
   },
   {
    "d": "media",
    "q": "El fenómeno de la 'transmisión intergeneracional' de pautas educativas dentro de la familia hace referencia a que:",
    "o": [
     "Los estilos y pautas de crianza no se transmiten nunca entre generaciones",
     "Determinados patrones de crianza tienden a repetirse de una generación a otra, aunque también pueden modificarse conscientemente",
     "Cada generación educa de forma idéntica sin ninguna influencia previa",
     "Es un fenómeno exclusivamente biológico sin componente educativo"
    ],
    "c": 1,
    "e": "La transmisión intergeneracional de pautas educativas hace referencia a la tendencia de determinados patrones y estilos de crianza (por ejemplo, cómo se gestionan los límites o el afecto) a repetirse de una generación a otra, aunque estos patrones también pueden identificarse y modificarse de forma consciente y reflexiva, por ejemplo a través de la formación o el acompañamiento profesional."
   },
   {
    "d": "facil",
    "q": "El respeto a la confidencialidad de la información familiar compartida con el centro educativo es un principio relacionado con:",
    "o": [
     "La ética profesional docente y el derecho a la protección de datos",
     "Un aspecto sin relevancia legal ni ética",
     "La obligación de compartir dicha información libremente con terceros",
     "Un principio exclusivo de Educación Secundaria"
    ],
    "c": 0,
    "e": "El respeto a la confidencialidad de la información familiar compartida con el centro (una situación personal, un dato de salud) es un principio ético y legal fundamental, relacionado con el derecho a la protección de datos y a la intimidad familiar, y no algo que el centro pueda compartir libremente con terceros sin consentimiento."
   },
   {
    "d": "facil",
    "q": "Las 'entrevistas individuales' entre el docente y la familia, además de las reuniones grupales, tienen como finalidad principal:",
    "o": [
     "Abordar de forma personalizada la situación y evolución concreta de cada niño",
     "Sustituir las reuniones generales del grupo",
     "No tienen ninguna utilidad diferenciada respecto a las reuniones grupales",
     "Evaluar exclusivamente el rendimiento académico"
    ],
    "c": 0,
    "e": "Las entrevistas individuales entre el docente y la familia, distintas de las reuniones grupales del curso completo, permiten abordar de forma personalizada y confidencial la situación, la evolución y las necesidades concretas de cada niño, complementando la información más general que se comparte en las reuniones grupales."
   },
   {
    "d": "dificil",
    "q": "El concepto de 'parentalidad positiva', promovido por organismos como el Consejo de Europa, hace referencia a un modelo de crianza que:",
    "o": [
     "Se basa en el castigo físico y el control estricto",
     "Combina afecto, comunicación, límites claros y no violentos, y reconocimiento de los derechos del niño",
     "Elimina cualquier tipo de norma o límite",
     "Delega toda la responsabilidad educativa en la escuela"
    ],
    "c": 1,
    "e": "La parentalidad positiva, concepto promovido por organismos como el Consejo de Europa, es un modelo de crianza que combina afecto, comunicación, el establecimiento de límites claros pero no violentos (sin castigo físico ni humillante), y el reconocimiento de los derechos y las necesidades evolutivas propias de cada edad del niño."
   },
   {
    "d": "facil",
    "q": "La participación de las familias en los órganos de gobierno del centro (como el Consejo Escolar) es una forma de:",
    "o": [
     "Participación institucional en la vida y gestión del centro educativo",
     "Una obligación sin ninguna relevancia práctica",
     "Sustitución de las funciones del equipo directivo",
     "Un mecanismo exclusivo de Educación Secundaria"
    ],
    "c": 0,
    "e": "La participación de las familias en órganos de gobierno del centro, como el Consejo Escolar, es una vía de participación institucional en la vida, la gestión y la toma de decisiones del centro educativo (por ejemplo, aprobando el proyecto educativo o el reglamento de régimen interno), más allá de la relación cotidiana con el aula de su hijo o hija."
   },
   {
    "d": "media",
    "q": "Ante situaciones de familias en riesgo de exclusión social o con especiales dificultades, la escuela infantil puede desempeñar, entre otras, una función de:",
    "o": [
     "Detección temprana y derivación a los servicios sociales y de apoyo correspondientes, además de acompañamiento educativo",
     "Ignorar la situación por no ser competencia educativa",
     "Sustituir completamente a los servicios sociales especializados",
     "Excluir al niño del centro hasta que se resuelva la situación familiar"
    ],
    "c": 0,
    "e": "Ante familias en riesgo de exclusión social o con especiales dificultades, la escuela infantil puede desempeñar una función de detección temprana (observar indicadores de vulnerabilidad) y de derivación a los servicios sociales y de apoyo correspondientes, además de un acompañamiento educativo cercano, sin pretender sustituir la labor de esos servicios especializados ni excluir al niño del centro."
   },
   {
    "d": "facil",
    "q": "El 'apego múltiple' que el niño puede establecer, además de con su familia, con la educadora de referencia en la escuela infantil, se ve favorecido especialmente por:",
    "o": [
     "La estabilidad y continuidad de una figura de referencia (tutor/a) a lo largo del curso",
     "El cambio constante de personal a cargo del grupo",
     "La ausencia de vínculo afectivo con el personal del centro",
     "La reducción de la interacción diaria con el niño"
    ],
    "c": 0,
    "e": "La estabilidad y continuidad de una figura de referencia (el tutor o tutora) a lo largo del curso favorece que el niño pueda establecer con ella un vínculo de apego seguro también en el contexto escolar (el llamado apego múltiple, ya que convive con el vínculo familiar), algo que un cambio constante de personal a cargo del grupo dificultaría notablemente."
   }
  ]
 },
 {
  "id": "b19",
  "title": "La Función del Maestro o Maestra en Educación Infantil",
  "questions": [
   {
    "d": "facil",
    "q": "El rol del maestro o maestra de Educación Infantil se define principalmente como:",
    "o": [
     "Transmisor exclusivo de contenidos académicos",
     "Mediador, guía y acompañante del proceso de desarrollo y aprendizaje",
     "Figura exclusivamente de cuidado asistencial, sin función pedagógica",
     "Evaluador cuya única tarea es calificar"
    ],
    "c": 1,
    "e": "El docente de Infantil actúa como mediador, guía y acompañante del proceso de desarrollo y aprendizaje: crea ambientes ricos en estímulos, propone experiencias significativas y acompaña al niño en su descubrimiento, en lugar de limitarse a transmitir contenidos académicos o a ejercer una función meramente asistencial de cuidado sin intención pedagógica."
   },
   {
    "d": "media",
    "q": "La observación sistemática del alumnado por parte del maestro o maestra en Infantil cumple, sobre todo, la función de:",
    "o": [
     "Ser el principal instrumento de evaluación continua y ajuste de la intervención educativa",
     "No tener ninguna utilidad práctica",
     "Sustituir a la programación didáctica",
     "Ser exclusiva del segundo ciclo de Infantil"
    ],
    "c": 0,
    "e": "La observación directa y sistemática es, en Infantil, la técnica de evaluación por excelencia (mucho más que un examen, poco adecuado a esta edad), y permite al docente ajustar continuamente su intervención educativa a las necesidades reales que va detectando en el alumnado, por ejemplo cambiando una actividad que ve que no funciona o reforzando un contenido que observa poco consolidado."
   },
   {
    "d": "dificil",
    "q": "El principio de 'individualización' de la enseñanza en Infantil implica que el maestro o maestra debe:",
    "o": [
     "Aplicar exactamente el mismo ritmo y actividades a todo el grupo sin excepción",
     "Ajustar la intervención educativa a las características, ritmos e intereses de cada niño o niña",
     "Renunciar a cualquier planificación previa",
     "Atender exclusivamente al alumnado con necesidades específicas de apoyo educativo"
    ],
    "c": 1,
    "e": "La individualización de la enseñanza implica que el maestro o maestra ajuste su intervención educativa a las características, ritmos e intereses de cada niño dentro del grupo (por ejemplo, dando más tiempo a quien lo necesita para terminar una tarea, o proponiendo un reto mayor a quien ya domina algo), sin que ello signifique renunciar a una planificación general ni limitarse a atender solo al alumnado con necesidades específicas de apoyo educativo."
   },
   {
    "d": "facil",
    "q": "El trabajo en equipo docente (coordinación entre tutores, especialistas y equipo de orientación) en Infantil es importante fundamentalmente para:",
    "o": [
     "Garantizar la coherencia y continuidad de la intervención educativa",
     "Aumentar innecesariamente la burocracia del centro",
     "Sustituir la relación con las familias",
     "No tiene relevancia en esta etapa"
    ],
    "c": 0,
    "e": "La coordinación entre el tutor, los especialistas (música, educación física) y el equipo de orientación garantiza la coherencia y la continuidad de la intervención educativa: por ejemplo, que todos conozcan y refuercen de forma similar una pauta acordada para un niño con dificultades de conducta, en lugar de que cada profesional actúe de forma aislada y con criterios distintos."
   },
   {
    "d": "media",
    "q": "El maestro o maestra de Infantil, al organizar el ambiente y las actividades, actúa desde el enfoque constructivista fundamentalmente como:",
    "o": [
     "Un mero transmisor de información memorística",
     "Un mediador que facilita la construcción activa del propio aprendizaje por parte del niño",
     "Un evaluador ajeno al proceso de enseñanza",
     "Una figura exclusivamente de vigilancia"
    ],
    "c": 1,
    "e": "Desde el enfoque constructivista, al organizar el ambiente y las actividades el docente actúa como mediador que facilita que sea el propio niño quien construya activamente su aprendizaje, en interacción con los materiales, el entorno y los demás, en lugar de limitarse a transmitir información de forma memorística o a actuar como mera figura de vigilancia."
   },
   {
    "d": "facil",
    "q": "La formación permanente y la reflexión sobre la propia práctica docente (práctica reflexiva) se consideran:",
    "o": [
     "Innecesarias una vez obtenida la titulación inicial",
     "Un elemento clave de la profesionalidad docente para la mejora continua",
     "Responsabilidad exclusiva de la administración educativa",
     "Contrarias a la autonomía del centro"
    ],
    "c": 1,
    "e": "La formación permanente y la reflexión sobre la propia práctica (práctica reflexiva: preguntarse por qué una actividad ha funcionado o no, y qué se podría mejorar) son elementos clave de la profesionalidad docente para la mejora continua, y no algo que termine con la obtención del título inicial ni una responsabilidad que recaiga únicamente en la administración educativa."
   },
   {
    "d": "facil",
    "q": "La figura del maestro o maestra en Infantil, en relación con el vínculo afectivo, se considera:",
    "o": [
     "Irrelevante para el desarrollo emocional del alumnado",
     "Una figura de referencia y apego secundario, relevante para el bienestar emocional del niño en el aula",
     "Sustituible por cualquier otro adulto sin ninguna diferencia",
     "Exclusivamente académica, sin ninguna dimensión afectiva"
    ],
    "c": 1,
    "e": "El maestro o maestra puede constituirse en una figura de apego secundario o de referencia afectiva relevante para el niño, especialmente en el primer ciclo, contribuyendo a su bienestar emocional en el aula; por eso la estabilidad de esa figura a lo largo del curso, y no su sustitución constante por otros adultos, resulta importante para el niño."
   },
   {
    "d": "dificil",
    "q": "El concepto de 'sensibilidad pedagógica' del docente de Infantil hace referencia a la capacidad de:",
    "o": [
     "Aplicar mecánicamente la programación sin ajustes",
     "Percibir e interpretar adecuadamente las necesidades, señales y momentos evolutivos de cada niño para ajustar la intervención",
     "Ignorar las diferencias individuales del grupo",
     "Evaluar exclusivamente mediante pruebas estandarizadas"
    ],
    "c": 1,
    "e": "La sensibilidad pedagógica es la capacidad del docente de percibir e interpretar adecuadamente las señales, necesidades y momentos evolutivos de cada niño —por ejemplo, notar que un niño está más callado de lo habitual y que quizá necesita hablar de algo— para ajustar su intervención en consecuencia, en lugar de aplicar la programación de forma mecánica sin margen de ajuste."
   },
   {
    "d": "facil",
    "q": "El diario de aula o cuaderno de observación que lleva el docente de Infantil tiene como finalidad principal:",
    "o": [
     "Registrar observaciones relevantes sobre el proceso de cada niño y del grupo, para fundamentar la evaluación y la intervención",
     "Sustituir la programación didáctica",
     "Ser un documento sin ninguna utilidad práctica",
     "Calificar numéricamente al alumnado"
    ],
    "c": 0,
    "e": "El diario o cuaderno de observación permite al docente registrar de forma sistemática información relevante sobre el proceso individual de cada niño y del grupo (un logro puntual, una dificultad recurrente, un cambio de conducta), fundamentando así la evaluación continua y la toma de decisiones pedagógicas con datos concretos, más allá de la mera impresión general."
   },
   {
    "d": "media",
    "q": "La 'ética profesional docente' en Infantil implica, entre otros aspectos:",
    "o": [
     "Priorizar los intereses personales del docente sobre los del alumnado",
     "El respeto a la dignidad, los derechos y la confidencialidad del alumnado y sus familias",
     "La ausencia de cualquier código de conducta profesional",
     "Actuar sin ninguna coordinación con el resto del equipo educativo"
    ],
    "c": 1,
    "e": "La ética profesional docente implica el respeto a la dignidad, los derechos y la confidencialidad del alumnado y de sus familias (por ejemplo, no comentar en público una situación personal que una familia ha compartido en confianza), y una actuación coordinada con el resto del equipo educativo, no aislada ni guiada por intereses personales del propio docente."
   },
   {
    "d": "facil",
    "q": "La actitud del docente ante los errores del alumnado durante el proceso de aprendizaje debe ser preferentemente:",
    "o": [
     "Considerarlos parte natural del proceso de aprendizaje, ofreciendo un acompañamiento respetuoso",
     "Sancionar cualquier error de forma inmediata",
     "Ignorar completamente los errores sin ningún acompañamiento",
     "Evitar que el alumnado se equivoque en cualquier circunstancia"
    ],
    "c": 0,
    "e": "El error debe entenderse como parte natural e informativa del proceso de aprendizaje —muestra en qué punto está el niño y qué necesita todavía— y acompañarse de forma respetuosa y constructiva, en lugar de sancionarlo de inmediato o, en el extremo contrario, evitar a toda costa que el niño se equivoque, lo que le impediría aprender de la propia experiencia."
   },
   {
    "d": "dificil",
    "q": "El concepto de 'expectativas docentes' (efecto Pigmalión), aplicado a Infantil, hace referencia a que:",
    "o": [
     "Las expectativas del docente sobre un niño no influyen en absoluto en su desarrollo o rendimiento",
     "Las expectativas, positivas o negativas, que el docente tiene sobre un alumno pueden influir, de forma no siempre consciente, en su desarrollo y comportamiento",
     "Solo tiene efecto en etapas educativas superiores",
     "Es un fenómeno sin ninguna base en la investigación educativa"
    ],
    "c": 1,
    "e": "El efecto Pigmalión describe cómo las expectativas del docente sobre un niño, aunque no se expresen de forma explícita, pueden influir de manera no siempre consciente en su comportamiento, su motivación y su desarrollo (por ejemplo, dedicándole sin darse cuenta más tiempo o más paciencia a quien se espera que rinda mejor), por lo que resulta importante que el docente sea consciente de sus propias expectativas hacia cada niño."
   },
   {
    "d": "facil",
    "q": "La colaboración y coordinación entre el maestro o maestra tutor y los especialistas (Audición y Lenguaje, Pedagogía Terapéutica, orientación) responde principalmente al principio de:",
    "o": [
     "Atención a la diversidad y respuesta educativa coordinada",
     "Sustitución de las funciones del tutor por parte del especialista",
     "Actuación aislada e independiente de cada profesional",
     "Ausencia de necesidad de coordinación en Infantil"
    ],
    "c": 0,
    "e": "La coordinación entre el tutor y los especialistas (Audición y Lenguaje, Pedagogía Terapéutica, orientación) responde al principio de atención a la diversidad, garantizando que la respuesta educativa ante las necesidades de un niño sea coherente y compartida entre todos los profesionales implicados, sin que unos sustituyan las funciones de los otros ni actúen de forma aislada."
   },
   {
    "d": "media",
    "q": "El 'burnout' o desgaste profesional docente, fenómeno relevante en profesiones de ayuda como la docencia en Infantil, se relaciona principalmente con:",
    "o": [
     "Un exceso de motivación laboral sin ningún riesgo asociado",
     "El agotamiento emocional, la despersonalización y la baja realización personal derivados de factores de estrés laboral sostenido",
     "Un fenómeno exclusivo de otras profesiones sin relación con la docencia",
     "La ausencia total de vocación profesional"
    ],
    "c": 1,
    "e": "El burnout o desgaste profesional docente se caracteriza por agotamiento emocional, despersonalización (distanciarse emocionalmente de los niños y del trabajo) y una baja sensación de realización personal, derivados de la exposición sostenida a factores de estrés laboral; es especialmente relevante en profesiones con alta carga emocional y relacional como la docencia en Infantil, y no un signo de falta de vocación, sino de un desgaste que conviene prevenir y atender."
   },
   {
    "d": "facil",
    "q": "El acompañamiento emocional que el maestro o maestra ofrece ante situaciones de llanto, frustración o conflicto en el aula debe basarse en:",
    "o": [
     "La validación de la emoción y el apoyo respetuoso, sin ridiculizar ni minimizar lo que el niño siente",
     "La minimización sistemática de las emociones del niño ('no pasa nada, no llores')",
     "El castigo inmediato de cualquier expresión emocional intensa",
     "La indiferencia total ante la situación"
    ],
    "c": 0,
    "e": "El acompañamiento emocional ante situaciones de llanto, frustración o conflicto debe basarse en validar lo que el niño siente ('veo que estás muy enfadado') y ofrecerle un apoyo respetuoso, evitando tanto minimizar la emoción ('no pasa nada, no es para tanto') como castigarla o ridiculizarla, ya que esto último enseña al niño a reprimir o esconder lo que siente en lugar de gestionarlo."
   },
   {
    "d": "facil",
    "q": "La planificación previa de las sesiones y actividades por parte del docente de Infantil tiene como finalidad principal:",
    "o": [
     "Organizar de forma intencional los objetivos, recursos y momentos de la jornada, sin renunciar a la flexibilidad",
     "Eliminar por completo la posibilidad de improvisación o ajuste",
     "No tiene ninguna utilidad práctica en esta etapa",
     "Sustituir la necesidad de observar al alumnado"
    ],
    "c": 0,
    "e": "Planificar previamente las sesiones y actividades permite al docente organizar de forma intencional los objetivos, los recursos y los momentos de la jornada, sin que ello suponga renunciar a la flexibilidad necesaria para ajustar sobre la marcha lo planificado si el grupo muestra un interés inesperado o una necesidad puntual no prevista."
   },
   {
    "d": "dificil",
    "q": "El concepto de 'competencia profesional docente' en Infantil integra, entre otras dimensiones:",
    "o": [
     "Exclusivamente el conocimiento teórico académico",
     "Conocimientos, habilidades y actitudes, incluyendo la dimensión relacional, emocional y ética de la profesión",
     "Únicamente la experiencia acumulada en años de servicio",
     "Solo la capacidad de gestión administrativa del aula"
    ],
    "c": 1,
    "e": "La competencia profesional docente integra conocimientos, habilidades y actitudes, incluyendo de forma muy relevante en Infantil la dimensión relacional (cómo se vincula con cada niño), emocional (cómo gestiona sus propias emociones y las del grupo) y ética de la profesión, y no se limita al conocimiento teórico académico ni a los años de experiencia acumulados."
   },
   {
    "d": "facil",
    "q": "El maestro o maestra de Infantil, al modelar conductas de resolución pacífica de conflictos, actúa como:",
    "o": [
     "Un modelo de referencia para el aprendizaje social y emocional del alumnado",
     "Una figura sin ninguna influencia en el comportamiento del alumnado",
     "Un elemento irrelevante para el clima de aula",
     "Alguien que debe evitar mostrar sus propias emociones"
    ],
    "c": 0,
    "e": "Cuando el maestro o maestra modela conductas de resolución pacífica de conflictos (por ejemplo, mostrando cómo negociar en voz alta entre dos posturas), actúa como modelo de referencia para el aprendizaje social y emocional del alumnado, según la teoría del aprendizaje social de Bandura: los niños aprenden observando cómo actúa el adulto, más allá de lo que este les explica verbalmente."
   },
   {
    "d": "facil",
    "q": "El uso de un tono de voz calmado y gestos coherentes por parte del docente contribuye principalmente a:",
    "o": [
     "Generar un clima de seguridad y confianza en el aula",
     "No tiene ninguna influencia en el ambiente del aula",
     "Dificultar la comprensión de las instrucciones",
     "Ser relevante únicamente en el segundo ciclo"
    ],
    "c": 0,
    "e": "Un tono de voz calmado y una comunicación no verbal coherente (gestos que acompañan lo que se dice, sin contradecirlo) contribuyen a generar un clima de seguridad y confianza en el aula, favoreciendo el bienestar emocional del alumnado y su disposición a aprender, mientras que un tono alterado o gestos incongruentes con las palabras generan inseguridad, incluso en niños muy pequeños que aún no entienden bien el contenido verbal."
   },
   {
    "d": "media",
    "q": "La 'triangulación' de la información entre la observación del docente, las aportaciones de la familia y, en su caso, de otros profesionales, permite:",
    "o": [
     "Obtener una visión más completa y ajustada del desarrollo y las necesidades del niño",
     "Generar confusión innecesaria en la toma de decisiones",
     "Sustituir la necesidad de observación directa por parte del docente",
     "No aporta ningún valor añadido respecto a una única fuente de información"
    ],
    "c": 0,
    "e": "Triangular la información procedente de distintas fuentes —la observación directa del docente, las aportaciones de la familia sobre lo que ocurre en casa, y en su caso la valoración de otros profesionales— permite obtener una visión más completa, contrastada y ajustada del desarrollo y las necesidades reales del niño, en lugar de basar las decisiones educativas en una única fuente de información que podría ser parcial."
   }
  ]
 },
 {
  "id": "b20",
  "title": "La Influencia de la Imagen en el Niño",
  "questions": [
   {
    "d": "facil",
    "q": "La 'alfabetización audiovisual' en Educación Infantil hace referencia a:",
    "o": [
     "Enseñar exclusivamente a leer texto escrito",
     "Desarrollar capacidades de comprensión y análisis crítico de las imágenes y medios audiovisuales",
     "Prohibir cualquier contacto con imágenes en el aula",
     "Un contenido exclusivo de etapas educativas superiores"
    ],
    "c": 1,
    "e": "La alfabetización audiovisual busca que, desde edades tempranas, el niño desarrolle capacidades de comprensión y análisis, no solo receptivo sino progresivamente crítico, ante las imágenes y los medios de comunicación (por ejemplo, empezar a distinguir que un anuncio busca vender algo), yendo mucho más allá de la alfabetización tradicional centrada solo en el texto escrito."
   },
   {
    "d": "media",
    "q": "Según recomendaciones de organismos como la Academia Americana de Pediatría, el uso de pantallas en menores de 2 años debe ser:",
    "o": [
     "Ilimitado y fomentado desde el nacimiento",
     "Evitado en general, salvo videollamadas puntuales, priorizando la interacción directa",
     "Obligatorio como parte del currículo",
     "Exclusivamente educativo sin ninguna restricción horaria"
    ],
    "c": 1,
    "e": "Las principales recomendaciones pediátricas, como las de la Academia Americana de Pediatría, desaconsejan en general el uso de pantallas en menores de 2 años, salvo videollamadas puntuales con familiares, priorizando en su lugar la interacción social directa, el juego y la exploración del entorno, esenciales para el desarrollo a esa edad."
   },
   {
    "d": "facil",
    "q": "La imagen (fotografías, pictogramas, ilustraciones de cuentos) se utiliza en el aula de Infantil como recurso principalmente para:",
    "o": [
     "Sustituir totalmente el lenguaje oral",
     "Apoyar la comprensión, la comunicación y el acceso a la información de forma motivadora",
     "Evaluar exclusivamente el nivel matemático",
     "Sustituir el juego"
    ],
    "c": 1,
    "e": "La imagen (fotografías, pictogramas, ilustraciones de cuentos) se utiliza en el aula como recurso que apoya la comprensión (por ejemplo, ver la ilustración de un cuento ayuda a entender la historia aunque no se comprendan todas las palabras), motiva el aprendizaje y facilita el acceso a la información, sin pretender sustituir el lenguaje oral ni el juego."
   },
   {
    "d": "dificil",
    "q": "El análisis crítico de estereotipos (de género, culturales, etc.) transmitidos por dibujos animados o publicidad infantil forma parte de:",
    "o": [
     "Un tema irrelevante en Infantil",
     "La educación en valores y el desarrollo del pensamiento crítico, incluso en edades tempranas",
     "Un contenido exclusivo de Bachillerato",
     "Una tarea que corresponde solo a las familias"
    ],
    "c": 1,
    "e": "Analizar de forma crítica y adaptada a la edad los estereotipos (de género, culturales) que a veces transmiten los dibujos animados o la publicidad infantil —por ejemplo, comentar por qué en una serie los personajes que cocinan siempre son mujeres— forma parte de la educación en valores y del desarrollo del pensamiento crítico, que puede y debe iniciarse desde la etapa infantil de forma sencilla."
   },
   {
    "d": "facil",
    "q": "El pictograma, como recurso de comunicación visual, resulta especialmente útil en Infantil para:",
    "o": [
     "Sustituir por completo el lenguaje oral y escrito",
     "Apoyar la comunicación, la anticipación de rutinas y la inclusión de alumnado con necesidades específicas",
     "Ser usado únicamente en matemáticas",
     "No tiene ninguna utilidad pedagógica"
    ],
    "c": 1,
    "e": "Los pictogramas apoyan especialmente la comunicación de alumnado con dificultades comunicativas (por ejemplo, mediante sistemas alternativos de comunicación), ayudan a anticipar las rutinas del día (ver mediante imágenes qué actividad viene después) y facilitan la inclusión de todo el alumnado, sin pretender sustituir por completo el lenguaje oral o escrito."
   },
   {
    "d": "media",
    "q": "La sobreexposición temprana a pantallas se ha relacionado en diversos estudios con posibles efectos negativos sobre:",
    "o": [
     "El desarrollo del lenguaje, la atención y la calidad del sueño",
     "Ningún aspecto del desarrollo",
     "Exclusivamente el desarrollo motor grueso",
     "Solo el rendimiento en matemáticas en la etapa adulta"
    ],
    "c": 0,
    "e": "Diversos estudios asocian el uso excesivo y no acompañado de pantallas en edades tempranas con posibles dificultades en el desarrollo del lenguaje (menos interacción verbal real), en la capacidad de atención sostenida y en la calidad y cantidad del sueño, especialmente cuando se usan pantallas antes de dormir."
   },
   {
    "d": "facil",
    "q": "El 'acompañamiento adulto' durante el visionado de contenidos audiovisuales por parte de niños pequeños (co-visionado) resulta recomendable porque:",
    "o": [
     "Permite mediar, comentar y contextualizar lo que el niño ve, favoreciendo la comprensión crítica",
     "No aporta ningún beneficio adicional",
     "Sustituye la necesidad de establecer límites de tiempo de pantalla",
     "Debe evitarse por interferir en el disfrute del niño"
    ],
    "c": 0,
    "e": "El co-visionado —ver contenidos audiovisuales junto al niño y comentarlos ('¿por qué crees que ese personaje está triste?')— permite al adulto mediar y contextualizar lo que el niño ve, favoreciendo una comprensión más crítica y reflexiva, en lugar de dejar al niño solo frente a la pantalla sin ningún acompañamiento."
   },
   {
    "d": "dificil",
    "q": "El concepto de 'lectura de imagen', trabajado en Infantil especialmente a través del álbum ilustrado, hace referencia a la capacidad de:",
    "o": [
     "Memorizar el texto escrito de un cuento",
     "Interpretar, describir y extraer significado de una imagen o secuencia de imágenes",
     "Reconocer exclusivamente los colores de una ilustración",
     "Escribir de forma convencional"
    ],
    "c": 1,
    "e": "La lectura de imagen es la capacidad de observar, interpretar, describir y extraer significado de una imagen o de una secuencia de imágenes (por ejemplo, deducir en un álbum ilustrado qué ha pasado entre una viñeta y la siguiente aunque no haya texto que lo explique), una habilidad que se trabaja especialmente a través del álbum ilustrado y los cuentos sin palabras."
   },
   {
    "d": "facil",
    "q": "La publicidad dirigida a la infancia, presente en muchos medios, requiere en Infantil un trabajo educativo orientado a:",
    "o": [
     "Fomentar el consumo acrítico de los productos anunciados",
     "Desarrollar una mirada inicial y adaptada de análisis crítico ante los mensajes publicitarios",
     "No tiene ninguna relación con la etapa infantil",
     "Prohibir cualquier mención a la publicidad en el aula"
    ],
    "c": 1,
    "e": "Aunque de forma adaptada y sencilla a la edad, en Infantil puede iniciarse un análisis crítico básico ante los mensajes publicitarios dirigidos a la infancia (por ejemplo, comentar que un anuncio de juguetes muestra el producto de forma muy atractiva para que queramos comprarlo), en lugar de simplemente fomentar un consumo acrítico de lo anunciado."
   },
   {
    "d": "media",
    "q": "La imagen fija (fotografía) y la imagen en movimiento (vídeo, animación) se diferencian, entre otros aspectos, en que la imagen en movimiento añade:",
    "o": [
     "Ningún elemento adicional relevante respecto a la imagen fija",
     "La dimensión temporal y narrativa del movimiento y la secuencia",
     "Solo el color, que no está presente en la fotografía",
     "La posibilidad de tocar la imagen"
    ],
    "c": 1,
    "e": "La imagen en movimiento (vídeo, animación) añade respecto a la imagen fija (una fotografía) la dimensión temporal y narrativa: una secuencia de planos que se desarrolla en el tiempo y cuenta algo que va cambiando, mientras que una fotografía capta un único instante congelado."
   },
   {
    "d": "facil",
    "q": "El uso de la pizarra digital o recursos audiovisuales en el aula de Infantil debe entenderse como:",
    "o": [
     "Un recurso complementario más, sin sustituir la experiencia directa y manipulativa",
     "El principal recurso metodológico de la etapa, sustituyendo a otros materiales",
     "Un recurso prohibido por normativa en cualquier centro de Infantil",
     "Un elemento exclusivamente decorativo sin función pedagógica"
    ],
    "c": 0,
    "e": "Los recursos audiovisuales, como la pizarra digital, deben integrarse en Infantil como un complemento más dentro de una variedad de recursos, sin sustituir la experiencia directa, manipulativa y social (tocar, moverse, hablar con otros) que caracteriza el aprendizaje propio de esta etapa."
   },
   {
    "d": "dificil",
    "q": "El fenómeno de la 'imagen como fuente de aprendizaje social' (aprendizaje por observación de modelos en pantalla) se relaciona con la teoría de:",
    "o": [
     "El aprendizaje social de Albert Bandura",
     "El conductismo radical de Skinner",
     "La epistemología genética de Piaget",
     "La teoría psicosexual de Freud"
    ],
    "c": 0,
    "e": "Bandura, con su teoría del aprendizaje social, mostró que los niños pueden aprender conductas —incluidas conductas agresivas— por simple observación de un modelo, sin necesidad de experimentarlas ellos mismos ni de recibir un refuerzo directo; esto se aplica también a los modelos que un niño observa a través de pantallas y medios audiovisuales, de ahí la importancia de vigilar qué contenidos ve."
   },
   {
    "d": "facil",
    "q": "El uso de imágenes y pictogramas para estructurar visualmente la rutina diaria del aula (agenda visual) resulta especialmente útil para:",
    "o": [
     "Favorecer la anticipación, la comprensión temporal y la autonomía del alumnado",
     "No tiene ninguna utilidad en el aula de Infantil",
     "Sustituir por completo la comunicación oral del docente",
     "Ser utilizada solo con alumnado de altas capacidades"
    ],
    "c": 0,
    "e": "Las agendas visuales, que usan imágenes y pictogramas para representar la secuencia de actividades del día (desayuno, patio, asamblea, siesta), ayudan a todo el alumnado a anticipar y comprender el paso del tiempo en la jornada, favoreciendo su sensación de seguridad y su autonomía, sin depender únicamente de que el adulto lo recuerde verbalmente en cada momento."
   },
   {
    "d": "media",
    "q": "La distinción entre contenidos audiovisuales adecuados y no adecuados a la edad infantil (clasificación por edades, contenido violento o inadecuado) es responsabilidad compartida principalmente entre:",
    "o": [
     "Exclusivamente el propio niño, sin ninguna supervisión adulta",
     "La familia y, en su ámbito, el centro educativo, con apoyo de las clasificaciones y recomendaciones existentes",
     "Únicamente las plataformas de contenido audiovisual",
     "Ninguna de las partes mencionadas, ya que no es relevante en Infantil"
    ],
    "c": 1,
    "e": "La selección de contenidos audiovisuales adecuados a la edad (evitando violencia o temas no apropiados) es una responsabilidad compartida entre la familia, en el ámbito doméstico, y el centro educativo, en su ámbito escolar, apoyándose ambos en las clasificaciones por edades y en las recomendaciones existentes, y no algo que dependa únicamente del propio niño ni solo de las plataformas."
   },
   {
    "d": "facil",
    "q": "El cuento sin palabras o 'álbum mudo' (narración exclusivamente a través de imágenes) favorece especialmente:",
    "o": [
     "La capacidad narrativa e interpretativa a partir de la imagen, sin depender del texto escrito",
     "Únicamente la memorización de palabras nuevas",
     "No tiene ninguna utilidad didáctica",
     "Sustituir por completo la narración oral del docente"
    ],
    "c": 0,
    "e": "El álbum mudo o cuento sin palabras (narración exclusivamente a través de imágenes, sin ningún texto escrito) favorece especialmente la capacidad narrativa e interpretativa a partir de la imagen: el niño debe inventar o deducir la historia observando la secuencia de ilustraciones, desarrollando así tanto la lectura de imagen como la creatividad narrativa oral al contarla con sus propias palabras."
   },
   {
    "d": "facil",
    "q": "El establecimiento de límites de tiempo de pantalla adecuados a la edad, acordados entre familia y centro, responde principalmente al principio de:",
    "o": [
     "Un uso equilibrado y saludable de las tecnologías desde edades tempranas",
     "La prohibición absoluta de cualquier tecnología en la infancia",
     "La ausencia de cualquier tipo de límite o norma",
     "Una cuestión sin relevancia educativa"
    ],
    "c": 0,
    "e": "Establecer límites de tiempo de pantalla adecuados a la edad, acordados entre la familia y, en su caso, el centro, responde al principio de un uso equilibrado y saludable de la tecnología: ni la prohibición absoluta (que puede resultar poco realista y generar más deseo) ni el uso sin ningún límite (que puede desplazar otras actividades esenciales como el juego o el sueño)."
   },
   {
    "d": "dificil",
    "q": "La imagen del propio cuerpo transmitida a través de determinados medios y modelos estéticos puede influir, ya desde edades tempranas, en:",
    "o": [
     "La construcción de la autoimagen y la autoestima corporal, por lo que conviene un trabajo educativo de prevención y sentido crítico",
     "Ningún aspecto relevante del desarrollo infantil",
     "Únicamente en la etapa adulta, nunca antes",
     "Solo en el ámbito deportivo profesional"
    ],
    "c": 0,
    "e": "La exposición a determinados modelos estéticos difundidos por ciertos medios puede influir, incluso desde edades tempranas, en la construcción de la autoimagen y la autoestima corporal del niño, lo que justifica un trabajo educativo preventivo (mostrar cuerpos diversos como normales) y de sentido crítico desde la propia etapa infantil, no solo en etapas posteriores."
   },
   {
    "d": "facil",
    "q": "Los códigos de comunicación visual (semáforos, señales, iconos) presentes en el entorno cotidiano del niño pueden aprovecharse en Infantil para:",
    "o": [
     "Iniciar la comprensión de sistemas de representación simbólica y su función comunicativa",
     "No tienen ninguna utilidad didáctica",
     "Sustituir por completo el lenguaje verbal",
     "Trabajarse exclusivamente en el área de matemáticas"
    ],
    "c": 0,
    "e": "Los códigos de comunicación visual presentes en el entorno cotidiano del niño (el semáforo, la señal de una salida de emergencia, el icono de un baño) ofrecen un contexto significativo y accesible para iniciar la comprensión de que un símbolo puede representar y comunicar algo concreto, sentando bases para comprender más adelante otros sistemas de representación simbólica, como la escritura."
   },
   {
    "d": "media",
    "q": "El concepto de 'brecha digital', aplicado al contexto educativo infantil, hace referencia a las desigualdades relacionadas con:",
    "o": [
     "El acceso y uso de las tecnologías digitales entre distintos grupos sociales, lo que puede afectar a la equidad educativa",
     "Las diferencias de altura entre el alumnado",
     "Las diferencias de vocabulario oral exclusivamente",
     "Un concepto sin ninguna relación con la etapa infantil"
    ],
    "c": 0,
    "e": "La brecha digital hace referencia a las desigualdades de acceso y uso de las tecnologías digitales entre distintos grupos sociales (por ejemplo, tener o no un dispositivo y conexión adecuados en casa), un factor que puede afectar a la equidad educativa incluso en la etapa infantil, y que el centro debe tener en cuenta al proponer actividades que dependan de recursos tecnológicos."
   },
   {
    "d": "facil",
    "q": "La creación de contenidos audiovisuales sencillos por parte del propio alumnado (por ejemplo, fotografiar sus construcciones) favorece, entre otros aspectos:",
    "o": [
     "Un papel activo y creativo del niño frente a la imagen, más allá de un rol pasivo de mero espectador",
     "Fomentar exclusivamente un consumo pasivo de imágenes",
     "No tiene ninguna relación con la alfabetización audiovisual",
     "Sustituir por completo otras formas de expresión"
    ],
    "c": 0,
    "e": "Que el propio alumnado cree contenidos audiovisuales sencillos (por ejemplo, fotografiar con ayuda del docente una construcción que ha hecho, o grabar un breve vídeo explicando un dibujo) favorece un papel activo y creativo frente a la imagen, en contraste con el rol puramente pasivo de espectador que se tiene al simplemente consumir contenidos ya elaborados por otros."
   }
  ]
 },
 {
  "id": "b21",
  "title": "La Literatura Infantil",
  "questions": [
   {
    "d": "facil",
    "q": "La literatura infantil, desde el punto de vista educativo, cumple una doble función:",
    "o": [
     "Exclusivamente instructiva y moralizante",
     "Estética/lúdica y formativa (desarrollo lingüístico, cognitivo y emocional)",
     "Únicamente decorativa en el aula",
     "Solo evaluativa del nivel lector"
    ],
    "c": 1,
    "e": "La literatura infantil combina una función estética y lúdica (el disfrute del propio relato, de sus sonidos y de sus imágenes) con una función formativa, contribuyendo al desarrollo lingüístico (vocabulario, estructuras), cognitivo (comprensión de secuencias, causalidad) y emocional (identificación con personajes, elaboración de miedos) del niño, y no una función meramente instructiva o moralizante."
   },
   {
    "d": "media",
    "q": "La estructura narrativa típica de los cuentos populares o tradicionales (planteamiento, nudo y desenlace) ayuda al niño a:",
    "o": [
     "Confundirse respecto a la secuencia temporal",
     "Desarrollar el sentido de la estructura narrativa y la comprensión de secuencias temporales y causales",
     "No tiene ninguna función cognitiva",
     "Sustituir el lenguaje oral"
    ],
    "c": 1,
    "e": "La estructura narrativa clásica de planteamiento, nudo y desenlace, presente en la mayoría de cuentos populares, ayuda al niño a interiorizar un patrón narrativo que después le sirve para comprender otras historias y para desarrollar la comprensión de secuencias temporales (qué pasa antes y después) y causales (por qué ocurre algo como consecuencia de otra cosa)."
   },
   {
    "d": "dificil",
    "q": "Los cuentos con estructura acumulativa o repetitiva (como 'La gallinita roja' o cuentos de fórmula) resultan especialmente adecuados en Infantil porque:",
    "o": [
     "Dificultan la comprensión del relato",
     "Favorecen la anticipación, la memoria y la participación activa del niño en la narración",
     "No tienen ninguna utilidad didáctica",
     "Solo sirven para niños mayores de diez años"
    ],
    "c": 1,
    "e": "Los cuentos con estructura acumulativa o repetitiva (como 'La gallinita roja', donde se van añadiendo elementos que se repiten cada vez) resultan especialmente adecuados en Infantil porque la repetición facilita que el niño anticipe lo que va a suceder a continuación, participe activamente diciendo la parte que ya se sabe, y ejercite su memoria de forma natural y motivadora."
   },
   {
    "d": "facil",
    "q": "A la hora de seleccionar cuentos para el aula de Infantil, un criterio fundamental es:",
    "o": [
     "Elegir siempre los textos más extensos posibles",
     "La adecuación del vocabulario, la temática y la estructura a la edad e intereses del grupo",
     "Priorizar exclusivamente cuentos sin ilustraciones",
     "Evitar cualquier tipo de conflicto o tensión narrativa"
    ],
    "c": 1,
    "e": "Al seleccionar cuentos para el aula, un criterio fundamental es la adecuación del vocabulario, la temática, la extensión y la complejidad narrativa a la edad e intereses del grupo (por ejemplo, un cuento sobre el miedo a la oscuridad puede ser muy pertinente para un grupo de 4 años que esté viviendo esa situación), y no elegir siempre los textos más extensos ni evitar cualquier tensión narrativa, ya que un conflicto sencillo suele sostener el interés del niño."
   },
   {
    "d": "facil",
    "q": "La hora del cuento o momento de narración diaria en el aula favorece, entre otros aspectos:",
    "o": [
     "Exclusivamente la memorización literal de textos",
     "El vínculo afectivo, el gusto por la lectura y el desarrollo del lenguaje oral",
     "El desarrollo motor grueso exclusivamente",
     "La resolución de problemas matemáticos"
    ],
    "c": 1,
    "e": "El momento diario del cuento fortalece el vínculo afectivo entre el adulto y el niño (compartir un momento de calma y atención conjunta), despierta el gusto por la lectura y enriquece el vocabulario y las estructuras del lenguaje oral que el niño escucha, mucho más allá de una simple memorización literal del texto."
   },
   {
    "d": "media",
    "q": "Los álbumes ilustrados, en los que texto e imagen se complementan para construir el significado, se consideran en la actualidad:",
    "o": [
     "Un formato marginal sin valor literario",
     "Un formato de gran valor literario y didáctico propio de la literatura infantil contemporánea",
     "Exclusivos para adultos",
     "Incompatibles con la etapa infantil"
    ],
    "c": 1,
    "e": "El álbum ilustrado, en el que texto e imagen dialogan y se complementan para construir el significado completo de la historia (a veces la imagen cuenta algo que el texto no dice, o viceversa), es hoy un formato de gran valor literario y didáctico dentro de la literatura infantil contemporánea, y no un formato marginal ni exclusivo para adultos."
   },
   {
    "d": "facil",
    "q": "Los cuentos clásicos populares (recopilados, entre otros, por autores como los hermanos Grimm o Charles Perrault) forman parte del acervo de literatura infantil especialmente por su:",
    "o": [
     "Origen exclusivamente comercial reciente",
     "Transmisión oral tradicional y su valor cultural y simbólico",
     "Falta de valor educativo",
     "Vinculación exclusiva a la etapa adulta"
    ],
    "c": 1,
    "e": "Los cuentos clásicos populares, recopilados por autores como los hermanos Grimm o Charles Perrault a partir de la tradición oral, forman parte del acervo de la literatura infantil por su origen en una larga transmisión oral y por el gran valor cultural y simbólico que encierran, más allá de su valor puramente comercial reciente."
   },
   {
    "d": "dificil",
    "q": "Bruno Bettelheim, en su obra 'Psicoanálisis de los cuentos de hadas', defiende que los cuentos tradicionales ayudan al niño a:",
    "o": [
     "Evitar cualquier contacto con temas complejos o conflictivos",
     "Elaborar simbólicamente miedos, conflictos internos y procesos de crecimiento emocional",
     "Memorizar vocabulario avanzado exclusivamente",
     "Aprender exclusivamente normas de cortesía"
    ],
    "c": 1,
    "e": "Bruno Bettelheim, en su obra 'Psicoanálisis de los cuentos de hadas', defiende que los cuentos tradicionales —a través de su simbolismo (el bosque como lo desconocido, la bruja como el miedo)— ayudan al niño a elaborar de forma indirecta y segura miedos, conflictos internos y procesos propios de su crecimiento emocional, en lugar de evitarle todo contacto con temas complejos."
   },
   {
    "d": "facil",
    "q": "La poesía infantil, con recursos como la rima, el ritmo y la repetición, favorece especialmente:",
    "o": [
     "El disfrute sonoro del lenguaje y la conciencia fonológica",
     "Exclusivamente la memorización sin ningún valor estético",
     "El desarrollo motor grueso",
     "No tiene relación con el desarrollo del lenguaje"
    ],
    "c": 0,
    "e": "La poesía infantil, gracias a recursos sonoros como la rima, el ritmo y la repetición, favorece el disfrute estético y sonoro del lenguaje y contribuye al desarrollo de la conciencia fonológica, ya que llama la atención sobre cómo suenan las palabras, más allá de su significado."
   },
   {
    "d": "media",
    "q": "El 'cuento como recurso terapéutico' o 'cuento terapéutico', utilizado en ocasiones para abordar situaciones difíciles (duelo, miedos, cambios), se basa principalmente en:",
    "o": [
     "La identificación simbólica del niño con los personajes y situaciones del relato, que le permite procesar de forma indirecta sus propias vivencias",
     "La memorización literal del texto sin ninguna elaboración emocional",
     "Sustituir por completo la intervención de un profesional especializado en casos graves",
     "No tener ninguna base psicológica reconocida"
    ],
    "c": 0,
    "e": "El cuento terapéutico, utilizado en ocasiones para abordar situaciones difíciles (un duelo, un miedo, un cambio familiar), se basa en la identificación simbólica del niño con los personajes y las situaciones narradas, lo que le permite procesar de forma indirecta y a distancia emocional segura sus propias vivencias, sin sustituir en casos graves la intervención de un profesional especializado."
   },
   {
    "d": "facil",
    "q": "La biblioteca de aula debe organizarse de forma que:",
    "o": [
     "Sea accesible, atractiva y permita la libre elección y manipulación de los libros por parte del alumnado",
     "Los libros estén siempre fuera del alcance de los niños por seguridad",
     "Solo el docente pueda acceder a los libros",
     "Se limite a un único tipo de formato de libro"
    ],
    "c": 0,
    "e": "La biblioteca de aula debe organizarse de forma accesible y atractiva (a la altura del niño, con las portadas visibles), permitiendo la libre elección y manipulación de los libros por parte del alumnado, y no mantener los libros fuera de su alcance por seguridad ni reservar el acceso exclusivamente al docente."
   },
   {
    "d": "dificil",
    "q": "Gianni Rodari, autor de 'Gramática de la fantasía', propuso técnicas de creación literaria con niños como el 'binomio fantástico', que consiste en:",
    "o": [
     "Memorizar dos cuentos clásicos de forma simultánea",
     "Combinar dos palabras sin relación aparente entre sí como punto de partida para crear una historia original",
     "Repetir dos veces la misma historia",
     "Traducir un cuento a dos idiomas distintos"
    ],
    "c": 1,
    "e": "Gianni Rodari, autor de 'Gramática de la fantasía', propuso el 'binomio fantástico' como técnica de creación literaria: combinar dos palabras sin relación evidente entre sí (por ejemplo, 'caballo' y 'armario') y a partir de esa combinación insólita construir una historia original, estimulando la imaginación al obligar a buscar una conexión que no existe de forma natural."
   },
   {
    "d": "facil",
    "q": "Los cuentos con final feliz y estructura predecible, muy frecuentes en la literatura infantil de las primeras edades, aportan principalmente:",
    "o": [
     "Seguridad emocional y una estructura comprensible para el niño",
     "Ningún beneficio relevante para el desarrollo infantil",
     "Confusión respecto a la realidad",
     "Deben evitarse siempre por ser poco realistas"
    ],
    "c": 0,
    "e": "Los cuentos con final feliz y estructura predecible, muy frecuentes en la literatura infantil de las primeras edades, aportan seguridad emocional (el niño sabe que, pase lo que pase en la historia, todo se resolverá bien) y facilitan la comprensión narrativa, siendo especialmente adecuados antes de introducir progresivamente historias con finales más abiertos o ambiguos."
   },
   {
    "d": "media",
    "q": "La literatura infantil de tradición oral gallega (contos, lendas, cantigas) tiene, en el contexto del aula en Galicia, un valor añadido relacionado con:",
    "o": [
     "Ningún valor específico respecto a otras tradiciones",
     "La transmisión de la lengua, la cultura y la identidad propia del contexto sociocultural del alumnado",
     "La sustitución de cualquier otra literatura infantil",
     "Ser exclusiva de la etapa de Educación Primaria"
    ],
    "c": 1,
    "e": "La literatura de tradición oral gallega (contos, lendas, cantigas) tiene, en el contexto de un aula en Galicia, un valor añadido porque vincula al alumnado con la lengua, la cultura y la identidad propia de su entorno sociocultural, un vínculo que otras literaturas, aun siendo igualmente valiosas, no aportan de la misma manera específica."
   },
   {
    "d": "facil",
    "q": "Los títeres y marionetas, frecuentemente utilizados para narrar o dramatizar cuentos en Infantil, favorecen especialmente:",
    "o": [
     "La atención, la implicación emocional y la comprensión narrativa del alumnado",
     "No tienen ninguna relación con la literatura infantil",
     "Exclusivamente el desarrollo de la motricidad fina",
     "Sustituyen por completo la narración oral"
    ],
    "c": 0,
    "e": "Los títeres y marionetas, usados para narrar o dramatizar cuentos, son un recurso muy eficaz para captar la atención del alumnado, implicarlo emocionalmente (el títere 'habla' directamente al grupo) y favorecer la comprensión de la narración, complementando —no sustituyendo— la narración oral del propio docente."
   },
   {
    "d": "dificil",
    "q": "La 'anticipación de la lectura' (predecir lo que va a pasar en un cuento a partir del título o las ilustraciones de la portada) es una estrategia que favorece principalmente:",
    "o": [
     "La comprensión lectora y el pensamiento hipotético-inferencial, incluso antes de dominar la lectura convencional",
     "No tiene ninguna relación con la comprensión del cuento",
     "Solo puede aplicarse una vez el niño lee de forma autónoma",
     "Sustituye por completo la necesidad de leer el cuento completo"
    ],
    "c": 0,
    "e": "La anticipación de la lectura —predecir, a partir del título o de la ilustración de la portada, de qué puede tratar un cuento— favorece la comprensión lectora y el desarrollo del pensamiento hipotético-inferencial (formular una hipótesis y comprobarla después), una estrategia aplicable incluso antes de que el niño domine la lectura convencional."
   },
   {
    "d": "facil",
    "q": "Los cuentos protagonizados por animales que actúan y hablan como personas (fábulas, cuentos de animales) resultan especialmente atractivos en Infantil porque:",
    "o": [
     "Permiten al niño identificarse y proyectar emociones a través de personajes cercanos y accesibles",
     "Carecen de cualquier valor educativo o simbólico",
     "Solo son adecuados a partir de los 8 años",
     "Sustituyen por completo la necesidad de personajes humanos"
    ],
    "c": 0,
    "e": "Los cuentos protagonizados por animales que hablan y actúan como personas (fábulas, cuentos de animales) resultan especialmente atractivos porque los personajes animales, cercanos y accesibles, facilitan que el niño se identifique y proyecte sus propias emociones en ellos, con menos carga que si el protagonista fuera directamente un niño en una situación muy similar a la suya."
   },
   {
    "d": "media",
    "q": "La 'competencia literaria', entendida como la capacidad progresiva de comprender, disfrutar y valorar textos literarios, comienza a desarrollarse en Infantil principalmente a través de:",
    "o": [
     "La lectura autónoma exigida desde el primer ciclo",
     "La escucha activa, la familiarización con estructuras narrativas y el disfrute compartido de la literatura",
     "Exámenes de comprensión lectora formal",
     "La memorización literal de textos extensos"
    ],
    "c": 1,
    "e": "La competencia literaria (comprender, disfrutar y valorar progresivamente textos literarios) se inicia en Infantil a través de la escucha activa de cuentos, la familiarización con estructuras narrativas repetidas y el disfrute compartido de la literatura con el adulto y los iguales, y no mediante exámenes de comprensión lectora ni la exigencia de una lectura autónoma prematura."
   },
   {
    "d": "facil",
    "q": "Adaptar la voz, el ritmo y los silencios al narrar un cuento (recurso de la 'narración oral') tiene como función principal:",
    "o": [
     "Enriquecer la experiencia narrativa y mantener el interés y la atención del alumnado",
     "No influye en la comprensión ni el disfrute del cuento",
     "Sustituir la necesidad de mostrar las ilustraciones",
     "Ser un recurso exclusivo de profesionales de la interpretación"
    ],
    "c": 0,
    "e": "Adaptar la voz (dando un tono distinto a cada personaje), el ritmo (más lento en momentos de tensión) y los silencios al narrar un cuento enriquece la experiencia narrativa, mantiene el interés y la atención del alumnado, y favorece su implicación emocional en la historia, mucho más que una lectura plana y monótona."
   },
   {
    "d": "dificil",
    "q": "El 'canon literario infantil', es decir, el conjunto de obras consideradas de referencia en la literatura para la infancia, debe entenderse en la actualidad como:",
    "o": [
     "Un listado cerrado e inmutable que no admite revisión",
     "Un referente orientativo que conviene revisar y ampliar de forma crítica, incorporando diversidad de autores, culturas y perspectivas",
     "Un conjunto de obras sin ninguna utilidad práctica para el aula",
     "Un criterio exclusivamente comercial sin relación con la calidad literaria"
    ],
    "c": 1,
    "e": "El canon literario infantil —el conjunto de obras consideradas de referencia— debe entenderse en la actualidad como un referente orientativo, no como un listado cerrado e inmutable, y conviene revisarlo y ampliarlo de forma crítica incorporando diversidad de autores, culturas, perspectivas y formatos (como el álbum ilustrado contemporáneo), en lugar de limitarse siempre a los mismos clásicos."
   }
  ]
 },
 {
  "id": "b22",
  "title": "La Organización de los Espacios y del Tiempo",
  "questions": [
   {
    "d": "facil",
    "q": "La organización del espacio en rincones o ambientes de aprendizaje responde al principio metodológico de:",
    "o": [
     "Fomentar la actividad autónoma, la elección y el aprendizaje significativo del alumnado",
     "Facilitar exclusivamente el control disciplinario",
     "Homogeneizar la actividad de todo el grupo",
     "Reducir la interacción entre iguales"
    ],
    "c": 0,
    "e": "La organización del espacio en rincones o ambientes de aprendizaje responde al principio de fomentar la actividad autónoma, la libre elección y experiencias de aprendizaje significativas, permitiendo que cada niño escoja qué hacer según su interés en un momento dado, en lugar de que todo el grupo realice siempre la misma actividad de forma homogénea y dirigida."
   },
   {
    "d": "media",
    "q": "El concepto de 'rutina' en Educación Infantil se refiere a:",
    "o": [
     "Actividades repetitivas sin ningún valor educativo",
     "Secuencias de actividades estables que ofrecen seguridad, referencias temporales y autonomía",
     "Un método exclusivo de evaluación",
     "Una técnica de expresión plástica"
    ],
    "c": 1,
    "e": "Las rutinas (la entrada, la asamblea, el aseo, la comida, la salida) son secuencias de actividades estables que se repiten cada día en un orden similar, aportando seguridad afectiva al niño (sabe qué va a pasar después), referencias temporales claras (ayudan a estructurar el paso del tiempo) y ocasiones repetidas para practicar la autonomía, y no son simples repeticiones mecánicas sin valor educativo."
   },
   {
    "d": "dificil",
    "q": "Según Loris Malaguzzi, referente de Reggio Emilia, el espacio del aula se concibe como:",
    "o": [
     "Un elemento neutro sin relevancia pedagógica",
     "El 'tercer maestro', con un papel activo en el proceso educativo",
     "Un lugar exclusivamente de almacenamiento de materiales",
     "Un espacio que debe permanecer inmutable durante todo el curso"
    ],
    "c": 1,
    "e": "Malaguzzi acuñó la expresión del ambiente como 'tercer educador' (junto a la familia y el docente), destacando que la forma en que se organiza y decora el espacio del aula no es neutra, sino que influye activamente en qué y cómo aprenden los niños, por ejemplo facilitando o dificultando la autonomía según la altura de las estanterías o la disposición de la luz."
   },
   {
    "d": "facil",
    "q": "La organización flexible del tiempo escolar en Infantil debe compatibilizar:",
    "o": [
     "La estabilidad de las rutinas con cierta flexibilidad ante imprevistos e intereses emergentes",
     "Una rigidez absoluta sin ningún margen de adaptación",
     "La ausencia total de estructura temporal",
     "Horarios idénticos a los de Educación Primaria"
    ],
    "c": 0,
    "e": "La organización flexible del tiempo escolar en Infantil debe compatibilizar la estabilidad de las rutinas (que aportan seguridad) con cierta flexibilidad para adaptarse a imprevistos, ritmos individuales o intereses emergentes del grupo (por ejemplo, alargar una actividad que está generando mucho entusiasmo), sin caer ni en la rigidez absoluta ni en la ausencia total de estructura."
   },
   {
    "d": "facil",
    "q": "Los criterios básicos que debe cumplir el espacio del aula de Infantil incluyen:",
    "o": [
     "Seguridad, accesibilidad, flexibilidad y estimulación sensorial adecuada",
     "Uniformidad absoluta y ausencia de estímulos",
     "Espacios cerrados sin posibilidad de reorganización",
     "Prioridad exclusiva del mobiliario sobre la seguridad"
    ],
    "c": 0,
    "e": "El espacio del aula de Infantil debe ser seguro (sin riesgos de caídas o atrapamientos), accesible (materiales al alcance del niño), flexible (que pueda reorganizarse según la actividad) y ofrecer una estimulación sensorial equilibrada, evitando tanto un ambiente sobrecargado de estímulos como uno excesivamente pobre y monótono."
   },
   {
    "d": "media",
    "q": "El momento de la 'asamblea' al inicio de la jornada cumple, entre otras, la función de:",
    "o": [
     "Estructurar temporalmente el día, favorecer la comunicación grupal y crear sentido de pertenencia",
     "No tener relación con la organización del tiempo",
     "Sustituir el periodo de adaptación",
     "Evaluar exclusivamente contenidos matemáticos"
    ],
    "c": 0,
    "e": "La asamblea al inicio de la jornada ayuda a situar temporalmente el día (qué día de la semana es, cómo está el tiempo, quién ha venido y quién no), fomenta la comunicación grupal (compartir novedades, escuchar a los compañeros) y refuerza el sentido de pertenencia al grupo, siendo mucho más que un simple trámite organizativo."
   },
   {
    "d": "facil",
    "q": "El espacio exterior o patio del centro de Infantil debe entenderse, desde el punto de vista pedagógico, como:",
    "o": [
     "Un espacio educativo más, con potencial para el juego, el movimiento y el contacto con la naturaleza",
     "Un lugar exclusivamente de descanso del profesorado",
     "Un espacio sin ninguna intencionalidad pedagógica",
     "Un espacio que debe evitarse por motivos de seguridad"
    ],
    "c": 0,
    "e": "El espacio exterior o patio debe entenderse como un espacio educativo más, con un gran potencial pedagógico para el juego motor (correr, saltar, trepar), la exploración sensorial y el contacto con elementos naturales (tierra, agua, plantas, insectos), y no como un mero lugar de descanso del profesorado sin intencionalidad educativa."
   },
   {
    "d": "dificil",
    "q": "La organización del tiempo escolar en 'periodos largos' frente a 'periodos cortos y fragmentados' se justifica pedagógicamente porque:",
    "o": [
     "Los periodos largos no aportan ningún beneficio frente a los cortos",
     "Los periodos más amplios permiten un juego y una actividad más profunda, evitando interrupciones constantes que dificultan la concentración",
     "Los periodos cortos favorecen siempre una mejor concentración",
     "No existe ninguna diferencia pedagógica relevante entre ambos modelos"
    ],
    "c": 1,
    "e": "Organizar el tiempo en periodos más amplios, en lugar de fragmentarlo en muchos bloques cortos y con transiciones constantes, permite un juego y una actividad más profunda y sostenida (un niño necesita tiempo para desarrollar un juego simbólico complejo, por ejemplo), evitando las interrupciones frecuentes que dificultan la concentración y el desarrollo completo de una propuesta."
   },
   {
    "d": "facil",
    "q": "El espacio destinado al descanso o siesta en el primer ciclo de Infantil debe reunir, entre otras condiciones, ser:",
    "o": [
     "Tranquilo, con luz tenue y adecuado a las necesidades de sueño de cada niño",
     "Ruidoso y con mucha luminosidad",
     "Idéntico al espacio de juego activo, sin ninguna diferenciación",
     "Prescindible en cualquier centro de primer ciclo"
    ],
    "c": 0,
    "e": "El espacio destinado al descanso o siesta en el primer ciclo debe ser tranquilo, con luz tenue y condiciones acústicas adecuadas, y organizarse de forma que respete las necesidades y ritmos individuales de sueño de cada niño (algunos duermen más tiempo que otros), en lugar de imponer un mismo horario y espacio rígido para todos por igual."
   },
   {
    "d": "media",
    "q": "El concepto de 'ambientes de aprendizaje', más amplio que el de 'rincones', hace referencia a:",
    "o": [
     "Espacios idénticos a los rincones tradicionales sin ninguna diferencia",
     "Una organización del espacio y los materiales que integra de forma más flexible y globalizada distintas propuestas y posibilidades de aprendizaje",
     "Un espacio exclusivo para actividades de psicomotricidad",
     "Un concepto sin aplicación práctica en el aula"
    ],
    "c": 1,
    "e": "El concepto de 'ambientes de aprendizaje', propio de enfoques como Reggio Emilia, va más allá de la clásica división en rincones fijos: plantea una organización del espacio y los materiales más flexible y globalizada, que integra distintas propuestas y posibilidades de aprendizaje que pueden combinarse y transformarse según el proyecto que se esté desarrollando."
   },
   {
    "d": "facil",
    "q": "La disposición del mobiliario en el aula (mesas agrupadas, zonas diferenciadas) debe favorecer principalmente:",
    "o": [
     "La interacción, la autonomía y el desarrollo de las actividades propuestas",
     "Un único modelo fijo válido para cualquier actividad",
     "El aislamiento del alumnado",
     "La imposibilidad de reorganización a lo largo del curso"
    ],
    "c": 0,
    "e": "La disposición del mobiliario (mesas agrupadas de cierta forma, zonas diferenciadas por actividad) debe estar al servicio de la interacción entre el alumnado, su autonomía para moverse y acceder a los materiales, y las distintas actividades que se desarrollan a lo largo de la jornada, por lo que conviene que sea flexible y reorganizable, no un único modelo fijo durante todo el curso."
   },
   {
    "d": "dificil",
    "q": "La 'jornada continua' o 'jornada partida', como modelos de organización horaria de un centro educativo, hacen referencia a:",
    "o": [
     "Un aspecto exclusivamente relacionado con el currículo de aula sin relevancia organizativa",
     "Distintos modelos de distribución del horario lectivo a lo largo del día, con implicaciones organizativas y de conciliación familiar",
     "Un tipo de material didáctico específico",
     "Un método de evaluación del alumnado"
    ],
    "c": 1,
    "e": "La jornada continua (un único bloque horario por la mañana) y la jornada partida (con interrupción para la comida y actividad también por la tarde) son distintos modelos de organización del horario escolar diario, con implicaciones tanto organizativas para el centro como de conciliación de la vida laboral y familiar para las familias del alumnado."
   },
   {
    "d": "facil",
    "q": "Los cambios de espacio y de actividad a lo largo de la jornada (de la asamblea al rincón, del aula al patio) deben anunciarse y prepararse con el alumnado principalmente para:",
    "o": [
     "Favorecer la anticipación, la transición tranquila y la comprensión temporal de la rutina",
     "Generar sorpresa constante en el alumnado",
     "No tiene ninguna relevancia pedagógica",
     "Evitar cualquier tipo de rutina en el aula"
    ],
    "c": 0,
    "e": "Anunciar y preparar con el alumnado los cambios de espacio y de actividad a lo largo de la jornada (por ejemplo, avisar unos minutos antes de que se va a salir al patio) favorece transiciones más tranquilas, ayuda a comprender la secuencia temporal de la rutina y reduce la ansiedad que algunos niños pueden sentir ante cambios inesperados."
   },
   {
    "d": "media",
    "q": "La organización de un aula multinivel o de agrupamiento flexible (por ejemplo, mezclando edades del segundo ciclo en determinados momentos) se justifica pedagógicamente por:",
    "o": [
     "Ser siempre perjudicial para el aprendizaje del alumnado",
     "Favorecer el aprendizaje entre iguales de distintas edades y la diversidad de interacciones y modelos",
     "No tener ninguna base pedagógica reconocida",
     "Ser obligatoria por normativa en todos los centros"
    ],
    "c": 1,
    "e": "El agrupamiento flexible o multinivel (por ejemplo, mezclar puntualmente edades del segundo ciclo para determinadas actividades) puede favorecer el aprendizaje entre iguales de distintas edades, enriqueciendo las interacciones y ofreciendo modelos variados de referencia (los mayores modelan conductas para los más pequeños), aunque su aplicación concreta depende del proyecto educativo de cada centro y no es obligatoria por normativa."
   },
   {
    "d": "facil",
    "q": "La estimulación sensorial del espacio del aula (colores, texturas, sonidos, luz) debe cuidarse principalmente para:",
    "o": [
     "Favorecer el bienestar, la exploración sensorial y evitar tanto la sobreestimulación como la pobreza de estímulos",
     "No tiene ninguna relevancia pedagógica",
     "Maximizar siempre el número de estímulos posibles sin ningún criterio",
     "Ser idéntica en todos los momentos de la jornada"
    ],
    "c": 0,
    "e": "La estimulación sensorial del espacio del aula (colores, texturas, sonidos, luz natural) debe cuidarse para favorecer el bienestar y la exploración sensorial adecuada del alumnado, evitando tanto la sobreestimulación (demasiados estímulos visuales o sonoros a la vez, que puede resultar agotador) como la pobreza de estímulos (un aula gris y monótona que no invita a explorar)."
   },
   {
    "d": "facil",
    "q": "El rincón de 'movimiento' o psicomotricidad dentro del aula debe ubicarse preferentemente en:",
    "o": [
     "Una zona amplia y despejada, alejada de mobiliario con riesgo de golpes",
     "Un espacio reducido junto a las mesas de trabajo",
     "Un lugar sin ninguna consideración de seguridad",
     "El mismo espacio que el rincón de lectura, sin diferenciación"
    ],
    "c": 0,
    "e": "El rincón de movimiento o psicomotricidad dentro del aula debe ubicarse en una zona amplia y despejada, alejada de mesas, sillas u otro mobiliario con el que el alumnado pudiera golpearse durante el juego motor, priorizando la seguridad física por encima de otras consideraciones de espacio disponible."
   },
   {
    "d": "dificil",
    "q": "El 'tiempo de espera' (esperar el turno, esperar a que termine una actividad) trabajado dentro de las rutinas de aula contribuye especialmente a:",
    "o": [
     "El desarrollo de la autorregulación y la tolerancia a la frustración",
     "No tiene ninguna relación con el desarrollo infantil",
     "Generar siempre ansiedad y malestar en el alumnado",
     "Debe eliminarse por completo de la organización del tiempo"
    ],
    "c": 0,
    "e": "Aprender a esperar de forma acompañada y adecuada a la edad (esperar el turno para hablar, esperar a que termine una actividad antes de empezar otra) contribuye al desarrollo de la autorregulación emocional y de la tolerancia a la frustración, capacidades que el niño necesitará durante toda su vida, y no debe eliminarse de la organización del tiempo por generar cierta incomodidad puntual."
   },
   {
    "d": "facil",
    "q": "La organización semanal de determinados días con propuestas específicas (día del cuento, día del arte) tiene como finalidad:",
    "o": [
     "Enriquecer y diversificar la propuesta educativa a lo largo de la semana, manteniendo cierta previsibilidad",
     "No tiene ninguna finalidad pedagógica",
     "Sustituir por completo las rutinas diarias estables",
     "Eliminar la flexibilidad del horario semanal"
    ],
    "c": 0,
    "e": "Organizar propuestas específicas en determinados días de la semana (día del cuento, día del arte) enriquece y diversifica la oferta educativa semanal, dando variedad a la rutina, mientras que a la vez mantiene cierta previsibilidad y estructura temporal, ya que el alumnado sabe qué día corresponde a cada propuesta."
   },
   {
    "d": "media",
    "q": "La disposición de espacios diferenciados para el trabajo individual, en pequeño grupo y en gran grupo dentro del aula responde a la necesidad de:",
    "o": [
     "Adaptar la organización espacial a los distintos tipos de agrupamiento y actividad que se dan a lo largo de la jornada",
     "Mantener siempre un único tipo de agrupamiento posible",
     "Reducir las posibilidades de interacción social",
     "Eliminar cualquier posibilidad de trabajo individual"
    ],
    "c": 0,
    "e": "Disponer de espacios diferenciados para el trabajo individual, en pequeño grupo y en gran grupo permite adaptar la organización espacial a la diversidad de actividades y dinámicas que se dan a lo largo de la jornada (una actividad de concentración individual necesita un espacio distinto de una asamblea de todo el grupo), en lugar de forzar siempre un único tipo de agrupamiento."
   },
   {
    "d": "facil",
    "q": "El respeto a un 'tiempo propio' de juego libre no dirigido, sin intervención constante del adulto, es importante en la organización del tiempo porque:",
    "o": [
     "Favorece la autonomía, la iniciativa y la capacidad de autorregulación del niño",
     "Debe evitarse por suponer una pérdida de tiempo educativo",
     "Debe sustituirse siempre por actividades dirigidas por el adulto",
     "No aporta ningún beneficio relevante al desarrollo infantil"
    ],
    "c": 0,
    "e": "Disponer de un tiempo propio de juego libre, sin intervención constante del adulto (que observa pero no dirige cada acción), favorece la autonomía, la iniciativa personal del niño para decidir a qué y cómo jugar, y el desarrollo de su capacidad de autorregulación, y no debe considerarse una pérdida de tiempo que haya que sustituir siempre por actividades dirigidas."
   }
  ]
 },
 {
  "id": "b23",
  "title": "La Programación en el Primer Ciclo de Educación Infantil",
  "questions": [
   {
    "d": "facil",
    "q": "La programación en el primer ciclo (0-3 años) debe caracterizarse especialmente por:",
    "o": [
     "Una gran flexibilidad y atención individualizada a las necesidades básicas y ritmos de cada niño o niña",
     "Una rigidez similar a la de Educación Primaria",
     "La ausencia total de planificación previa",
     "Priorizar exclusivamente contenidos académicos formales"
    ],
    "c": 0,
    "e": "En el primer ciclo (0-3 años), la programación debe ser especialmente flexible, priorizando la atención a las necesidades básicas —afectivas (vínculo, seguridad), fisiológicas (sueño, alimentación)— y el respeto al ritmo individual de cada niño, muy alejada de la rigidez horaria y de contenidos propia de etapas educativas posteriores."
   },
   {
    "d": "media",
    "q": "En el primer ciclo, los elementos curriculares (objetivos, contenidos, metodología) los concreta principalmente:",
    "o": [
     "Cada centro, a través de su propuesta pedagógica, dado el carácter no regulado en currículo estatal detallado como en el segundo ciclo",
     "Exclusivamente el Ministerio de Educación con un currículo cerrado idéntico al de Primaria",
     "Las familias de forma individual para cada niño",
     "No existe ningún tipo de planificación en este ciclo"
    ],
    "c": 0,
    "e": "El primer ciclo no cuenta con un currículo estatal detallado y cerrado como el del segundo ciclo, sino que cada centro concreta sus propios elementos (objetivos, contenidos, metodología) a través de una 'propuesta pedagógica', dentro del marco autonómico correspondiente, lo que le da un margen de flexibilidad mayor que el del segundo ciclo."
   },
   {
    "d": "facil",
    "q": "El documento que recoge las líneas pedagógicas generales del primer ciclo en cada centro (0-3 años) se denomina habitualmente:",
    "o": [
     "Programación General Anual exclusivamente",
     "Propuesta pedagógica",
     "Reglamento de Régimen Interno únicamente",
     "Proyecto Lingüístico de Centro"
    ],
    "c": 1,
    "e": "La propuesta pedagógica es el documento que, en cada centro de primer ciclo, concreta los objetivos, contenidos, metodología y criterios de evaluación adaptados a esta etapa (0-3 años), siendo el equivalente, con mayor flexibilidad, a lo que en el segundo ciclo sería la programación basada en un currículo oficial más detallado."
   },
   {
    "d": "dificil",
    "q": "La atención a las rutinas de cuidado (alimentación, higiene, sueño) en la programación del primer ciclo se considera:",
    "o": [
     "Un aspecto puramente asistencial sin valor pedagógico",
     "Un contenido educativo de primer orden, con gran potencial para el aprendizaje y el vínculo afectivo",
     "Algo que debe evitarse en el aula",
     "Responsabilidad exclusiva de las familias"
    ],
    "c": 1,
    "e": "En el primer ciclo, los momentos de cuidado —la comida, el cambio de pañal, el momento del sueño— no son un simple trámite asistencial, sino situaciones educativas de primer orden: son momentos de interacción intensa uno a uno con el adulto, ricos en vínculo afectivo, lenguaje y aprendizaje sobre el propio cuerpo y la autonomía."
   },
   {
    "d": "media",
    "q": "La ratio (número de niños por adulto) es un aspecto especialmente relevante en la programación del primer ciclo porque:",
    "o": [
     "No influye en absoluto en la calidad educativa",
     "Condiciona directamente la calidad de la atención individualizada y del vínculo afectivo",
     "Solo afecta a aspectos administrativos sin relación pedagógica",
     "Es idéntica en todos los tramos de edad del primer ciclo"
    ],
    "c": 1,
    "e": "Una ratio adecuada (número razonable de niños por adulto) resulta clave en el primer ciclo, ya que condiciona directamente la posibilidad de ofrecer una atención individualizada y sensible a cada bebé o niño pequeño, especialmente en los tramos de menor edad, donde las necesidades son más intensas y variadas."
   },
   {
    "d": "facil",
    "q": "La evaluación en el primer ciclo de Educación Infantil se basa fundamentalmente en:",
    "o": [
     "Pruebas escritas estandarizadas",
     "La observación directa y sistemática del desarrollo global del niño o niña",
     "Exámenes orales formales",
     "Calificaciones numéricas"
    ],
    "c": 1,
    "e": "Dada la corta edad del alumnado del primer ciclo, la evaluación se basa fundamentalmente en la observación directa y sistemática del desarrollo global del niño (motor, comunicativo, afectivo), sin pruebas escritas, exámenes orales ni calificaciones numéricas, que resultarían completamente inadecuadas a esta edad."
   },
   {
    "d": "facil",
    "q": "El primer ciclo de Educación Infantil, a diferencia del segundo, tiene carácter:",
    "o": [
     "Obligatorio y gratuito en todos los casos",
     "No obligatorio y no necesariamente gratuito en todo el territorio, con gran diversidad de titularidad de centros",
     "Idéntico en gratuidad y carácter al segundo ciclo",
     "Exclusivo de centros públicos"
    ],
    "c": 1,
    "e": "A diferencia del segundo ciclo (gratuito y con mayor grado de universalización), el primer ciclo no tiene carácter obligatorio ni gratuito generalizado en todo el territorio, y existe una gran diversidad de centros según su titularidad —públicos, privados, de iniciativa social—, con distintos niveles de subvención según la comunidad autónoma."
   },
   {
    "d": "dificil",
    "q": "El concepto de 'periodo de adaptación', especialmente relevante al inicio del primer ciclo, debe planificarse teniendo en cuenta:",
    "o": [
     "Un calendario idéntico y rígido para todos los niños del grupo",
     "La flexibilidad necesaria para respetar el ritmo individual de cada niño y la implicación progresiva de la familia",
     "La ausencia total de participación familiar",
     "Su eliminación completa por resultar innecesario"
    ],
    "c": 1,
    "e": "El periodo de adaptación al inicio del primer ciclo debe planificarse con flexibilidad, respetando el ritmo individual de cada niño (algunos se adaptan en pocos días, otros necesitan más tiempo) y facilitando una implicación progresiva y decreciente de la familia, que va reduciendo su presencia en el aula a medida que el niño gana seguridad."
   },
   {
    "d": "facil",
    "q": "Los 'ámbitos de experiencia' o áreas de desarrollo trabajados en el primer ciclo suelen organizarse en torno a:",
    "o": [
     "El desarrollo del movimiento y la acción, la comunicación y el descubrimiento del entorno, de forma similar aunque más flexible que en el segundo ciclo",
     "Asignaturas idénticas a las de Educación Primaria",
     "Un único ámbito exclusivo de psicomotricidad",
     "La ausencia de cualquier organización de contenidos"
    ],
    "c": 0,
    "e": "Aunque con mayor flexibilidad que en el segundo ciclo, el primer ciclo suele organizar su propuesta pedagógica en torno a ámbitos de experiencia relacionados con el movimiento y la acción, la comunicación y el descubrimiento del entorno, de forma similar en su espíritu (aunque no idéntica en su exigencia) a las áreas del segundo ciclo."
   },
   {
    "d": "media",
    "q": "La programación de aula en el primer ciclo debe prestar especial atención a la 'individualización', dado que:",
    "o": [
     "Todos los bebés de la misma edad presentan un desarrollo idéntico",
     "Existe una gran variabilidad evolutiva individual en estas primeras edades, especialmente relevante en aspectos como el sueño, la alimentación o el desarrollo motor",
     "La individualización solo es relevante en el segundo ciclo",
     "No es posible individualizar la atención en grupos de bebés"
    ],
    "c": 1,
    "e": "La programación de aula en el primer ciclo debe prestar especial atención a la individualización porque existe una gran variabilidad evolutiva entre niños de la misma edad —ritmos de sueño, de alimentación, de desarrollo motor muy distintos entre bebés de pocos meses de diferencia—, lo que exige adaptar la atención a cada caso concreto en lugar de aplicar un mismo patrón a todo el grupo."
   },
   {
    "d": "facil",
    "q": "La coordinación entre las educadoras de un aula de primer ciclo (cuando hay más de una) es relevante principalmente para:",
    "o": [
     "Garantizar coherencia en las pautas de cuidado y en la intervención educativa con cada niño",
     "No tiene ninguna relevancia práctica",
     "Sustituir la necesidad de comunicación con las familias",
     "Reducir el tiempo dedicado a la observación"
    ],
    "c": 0,
    "e": "La coordinación entre las educadoras de una misma aula de primer ciclo (cuando hay más de una a cargo del grupo) es fundamental para garantizar coherencia en las pautas de cuidado (por ejemplo, cómo se calma a un bebé concreto) y en la intervención educativa con cada niño, evitando mensajes o rutinas contradictorias entre unas y otras."
   },
   {
    "d": "dificil",
    "q": "Los 'documentos de seguimiento individual' (registros de sueño, alimentación, hitos evolutivos) elaborados en el primer ciclo tienen como finalidad, entre otras:",
    "o": [
     "Sustituir a la propuesta pedagógica del centro",
     "Compartir información relevante con la familia y ajustar la intervención educativa a las necesidades de cada niño",
     "No tienen ninguna utilidad práctica",
     "Ser utilizados exclusivamente con fines administrativos sin relación pedagógica"
    ],
    "c": 1,
    "e": "Los documentos de seguimiento individual (registros de sueño, de tomas de alimentación, de hitos evolutivos alcanzados) permiten compartir con la familia información relevante sobre el día a día del niño en el centro y ajustar la intervención educativa a sus necesidades concretas, más allá de un mero trámite administrativo."
   },
   {
    "d": "facil",
    "q": "El juego libre y espontáneo ocupa, dentro de la programación del primer ciclo, un lugar:",
    "o": [
     "Marginal, subordinado a actividades dirigidas",
     "Central, como principal vía de aprendizaje y desarrollo en estas edades",
     "Inexistente, ya que los bebés no juegan",
     "Exclusivo del espacio exterior"
    ],
    "c": 1,
    "e": "El juego libre y espontáneo ocupa un lugar central, no marginal, en la programación del primer ciclo, siendo la principal vía a través de la cual bebés y niños muy pequeños exploran su entorno, ejercitan su cuerpo y construyen sus primeros aprendizajes, sin necesidad de que todo esté dirigido y estructurado por el adulto."
   },
   {
    "d": "media",
    "q": "La transición del primer al segundo ciclo de Educación Infantil (de la escuela infantil al colegio, en muchos casos) requiere una planificación específica que contemple:",
    "o": [
     "Un cambio brusco sin ninguna preparación previa",
     "Medidas de coordinación entre centros y de acompañamiento emocional que faciliten una transición gradual y respetuosa",
     "La eliminación de cualquier acompañamiento familiar",
     "Un proceso idéntico al periodo de adaptación al primer ciclo, sin ninguna diferencia"
    ],
    "c": 1,
    "e": "La transición del primer al segundo ciclo (a menudo entre centros distintos: de la escuela infantil al colegio) requiere una planificación específica con medidas de coordinación entre ambos centros (compartir información sobre cada niño) y de acompañamiento emocional, facilitando una transición gradual y respetuosa en lugar de un cambio brusco sin ninguna preparación."
   },
   {
    "d": "facil",
    "q": "La propuesta pedagógica del primer ciclo debe recoger, entre otros elementos, los principios metodológicos, que en esta etapa priorizan especialmente:",
    "o": [
     "El bienestar, el vínculo afectivo, el juego y el respeto a los ritmos individuales",
     "Exclusivamente la instrucción académica formal",
     "La competición entre el alumnado",
     "La ausencia total de interacción adulto-niño"
    ],
    "c": 0,
    "e": "Los principios metodológicos del primer ciclo priorizan especialmente el bienestar emocional del niño, el vínculo afectivo con el adulto de referencia, el juego espontáneo como motor de aprendizaje y el respeto a los ritmos individuales, muy por delante de cualquier forma de instrucción académica formal o de comparación entre niños."
   },
   {
    "d": "facil",
    "q": "La programación de aula en el primer ciclo debe revisarse y ajustarse con relativa frecuencia porque:",
    "o": [
     "El desarrollo y las necesidades de bebés y niños muy pequeños cambian con especial rapidez",
     "No es necesario revisarla en ningún caso una vez elaborada",
     "Debe mantenerse idéntica durante todo el curso sin ningún ajuste",
     "Solo debe revisarse al finalizar el curso escolar"
    ],
    "c": 0,
    "e": "Dado el ritmo especialmente rápido de los cambios evolutivos en las primeras edades (un bebé puede cambiar notablemente en pocas semanas), la programación del primer ciclo requiere revisarse y ajustarse con frecuencia, y no permanecer idéntica durante todo el curso ni revisarse únicamente al finalizarlo."
   },
   {
    "d": "dificil",
    "q": "La 'propuesta pedagógica' del primer ciclo, aunque flexible, debe guardar coherencia con:",
    "o": [
     "Ningún referente normativo, al ser un documento totalmente libre",
     "El marco normativo autonómico correspondiente y el proyecto educativo del centro",
     "Exclusivamente el criterio personal de cada educador o educadora",
     "El currículo oficial cerrado del segundo ciclo, de forma idéntica"
    ],
    "c": 1,
    "e": "Aunque goza de una flexibilidad mayor que el currículo cerrado del segundo ciclo, la propuesta pedagógica del primer ciclo no es un documento totalmente libre: debe guardar coherencia con el marco normativo autonómico correspondiente y con el proyecto educativo general del centro, no depender solo del criterio personal de cada educador o educadora."
   },
   {
    "d": "facil",
    "q": "La observación y el registro del desarrollo motor, comunicativo y social de cada niño en el primer ciclo sirven, entre otros fines, para:",
    "o": [
     "Detectar de forma temprana posibles necesidades específicas y ajustar la intervención educativa",
     "No tienen ninguna utilidad práctica",
     "Sustituir la propuesta pedagógica del centro",
     "Ser compartidos libremente con cualquier persona sin restricción"
    ],
    "c": 0,
    "e": "El registro sistemático y observado del desarrollo motor, comunicativo y social de cada niño permite detectar de forma temprana posibles necesidades específicas (por ejemplo, un retraso en ciertos hitos) y ajustar la intervención educativa en consecuencia, siempre respetando la confidencialidad de esa información y sin compartirla libremente con terceros."
   },
   {
    "d": "media",
    "q": "La flexibilidad horaria en la organización de un aula de primer ciclo (por ejemplo, respecto a los horarios de sueño o alimentación de cada bebé) responde principalmente a:",
    "o": [
     "El respeto a las necesidades fisiológicas individuales, que en estas edades no siguen un patrón homogéneo",
     "La necesidad de imponer un horario idéntico a todo el grupo desde el primer día",
     "Un criterio meramente organizativo sin relación con el bienestar infantil",
     "La ausencia de cualquier tipo de rutina en el aula"
    ],
    "c": 0,
    "e": "La flexibilidad horaria en un aula de primer ciclo (respetar el horario de sueño o de alimentación propio de cada bebé, en lugar de imponer desde el primer día un horario idéntico para todo el grupo) responde al respeto de las necesidades fisiológicas individuales, especialmente heterogéneas a estas edades, sin renunciar por ello a ir introduciendo progresivamente ciertas rutinas comunes."
   },
   {
    "d": "facil",
    "q": "La participación de las familias en el periodo de adaptación al primer ciclo (permaneciendo un tiempo en el aula junto al niño) tiene como finalidad principal:",
    "o": [
     "Facilitar una transición más segura y progresiva hacia el nuevo entorno escolar",
     "No aporta ningún beneficio al proceso de adaptación",
     "Sustituir por completo el papel de la educadora",
     "Alargar innecesariamente el proceso de adaptación"
    ],
    "c": 0,
    "e": "La presencia progresiva y decreciente de la familia durante el periodo de adaptación (permanecer un rato en el aula junto al niño, e ir reduciendo ese tiempo día a día) facilita una transición más segura hacia el nuevo entorno escolar, apoyándose el niño en la figura de apego conocida mientras va construyendo confianza también con la educadora y el nuevo espacio."
   }
  ]
 },
 {
  "id": "b24",
  "title": "La Programación en el Segundo Ciclo de Educación Infantil",
  "questions": [
   {
    "d": "facil",
    "q": "El segundo ciclo de Educación Infantil (3-6 años) tiene, a diferencia del primero, carácter:",
    "o": [
     "No gratuito en ningún caso y opcional sin regulación curricular",
     "Gratuito y con un currículo regulado (objetivos, áreas, contenidos y criterios de evaluación) por la administración educativa",
     "Obligatorio en todo el territorio español",
     "Idéntico en objetivos y metodología a Educación Primaria"
    ],
    "c": 1,
    "e": "El segundo ciclo (3-6 años) es gratuito, aunque no obligatorio en sentido estricto, y cuenta con un currículo oficial regulado por la administración educativa —con objetivos, áreas, contenidos y criterios de evaluación definidos—, a diferencia del primer ciclo (0-3 años), que se rige por una propuesta pedagógica más flexible y sin ese mismo grado de regulación curricular."
   },
   {
    "d": "media",
    "q": "En el segundo ciclo, el documento que concreta la programación para un grupo o nivel concreto, partiendo del Proyecto Educativo de Centro, se denomina habitualmente:",
    "o": [
     "Programación didáctica o de aula",
     "Reglamento de Régimen Interno",
     "Plan de convivencia",
     "Proyecto de gestión económica"
    ],
    "c": 0,
    "e": "La programación didáctica o de aula es el documento que concreta, para un grupo y curso concretos (por ejemplo, un aula de 4 años), lo establecido de forma más general en documentos institucionales del centro como el Proyecto Educativo, adaptándolo a las características específicas de ese grupo."
   },
   {
    "d": "facil",
    "q": "Los elementos que debe incluir toda programación didáctica en el segundo ciclo son, entre otros:",
    "o": [
     "Objetivos, contenidos, metodología, actividades, recursos y criterios de evaluación",
     "Únicamente una lista de actividades sin objetivos ni evaluación",
     "Solo el horario semanal",
     "Exclusivamente el listado de materiales fungibles"
    ],
    "c": 0,
    "e": "Una programación didáctica completa debe recoger, entre otros elementos, los objetivos que se persiguen, los contenidos a trabajar, la metodología, las actividades concretas, los recursos necesarios, las medidas de atención a la diversidad y los criterios y procedimientos de evaluación, y no limitarse a una simple lista de actividades sueltas."
   },
   {
    "d": "dificil",
    "q": "La atención a la diversidad dentro de la programación del segundo ciclo debe contemplar:",
    "o": [
     "Medidas y adaptaciones para responder a los diferentes ritmos, capacidades e intereses del alumnado",
     "Un único itinerario idéntico para todo el alumnado sin excepciones",
     "La exclusión del alumnado con necesidades específicas de apoyo educativo",
     "Ignorar las diferencias individuales"
    ],
    "c": 0,
    "e": "Toda programación debe prever medidas de atención a la diversidad —adaptaciones, refuerzos, ampliaciones, agrupamientos flexibles— para responder a los distintos ritmos, capacidades e intereses que de forma natural presenta cualquier grupo de alumnado, y no aplicar un único itinerario idéntico a todos sin excepción."
   },
   {
    "d": "media",
    "q": "Los criterios de evaluación en el segundo ciclo de Infantil se formulan en relación con:",
    "o": [
     "El grado de consecución de las capacidades y objetivos propios de la etapa y de cada área",
     "Calificaciones numéricas del 1 al 10",
     "Exámenes estandarizados externos",
     "Comparaciones directas entre el alumnado del grupo"
    ],
    "c": 0,
    "e": "Los criterios de evaluación en el segundo ciclo se formulan en relación con el grado de consecución de las capacidades y objetivos propios de la etapa y de cada área (por ejemplo, 'reconoce y nombra las partes principales de su cuerpo'), evaluando de forma global, continua y cualitativa, sin recurrir a calificaciones numéricas ni a exámenes estandarizados."
   },
   {
    "d": "facil",
    "q": "La programación por 'proyectos de trabajo', metodología habitual en el segundo ciclo, se caracteriza por:",
    "o": [
     "Partir de los intereses del alumnado y organizar los aprendizajes de forma globalizada en torno a un tema",
     "Seguir siempre un libro de texto de forma lineal",
     "Excluir la participación del alumnado en su propio proceso de aprendizaje",
     "Centrarse exclusivamente en fichas de repaso"
    ],
    "c": 0,
    "e": "Los proyectos de trabajo, metodología muy habitual en el segundo ciclo, parten de los intereses e inquietudes reales del alumnado (por ejemplo, una pregunta que surge espontáneamente sobre los dinosaurios) y organizan los aprendizajes de forma globalizada e investigativa alrededor de ese tema, integrando distintas áreas en lugar de seguir de forma lineal un libro de texto."
   },
   {
    "d": "facil",
    "q": "El curso escolar del segundo ciclo de Educación Infantil se organiza habitualmente en:",
    "o": [
     "Tres cursos (3, 4 y 5 años)",
     "Un único curso",
     "Seis cursos, como en Educación Primaria",
     "Dos cursos exclusivamente"
    ],
    "c": 0,
    "e": "El segundo ciclo de Educación Infantil se organiza en tres cursos, correspondientes aproximadamente a las edades de 3, 4 y 5 años, cada uno con su propia programación pero coordinados entre sí para garantizar una progresión coherente a lo largo del ciclo completo."
   },
   {
    "d": "dificil",
    "q": "La 'programación de aula' se diferencia de la 'programación general anual' (PGA) del centro en que la primera:",
    "o": [
     "Es un documento idéntico sin ninguna diferencia respecto a la PGA",
     "Concreta, para un grupo y nivel específicos, lo establecido de forma más general en la PGA y en el Proyecto Educativo de Centro",
     "Sustituye por completo a la PGA",
     "Solo la elabora el equipo directivo, sin intervención del tutor"
    ],
    "c": 1,
    "e": "La programación de aula concreta, para un grupo y nivel específicos, lo establecido de forma más general tanto en el Proyecto Educativo de Centro como en la Programación General Anual (PGA), que recoge la planificación de todo el centro para el curso; ambos documentos son complementarios, no equivalentes ni sustitutos entre sí."
   },
   {
    "d": "facil",
    "q": "Los 'proyectos de trabajo' en Infantil suelen desarrollarse siguiendo, entre otras, las siguientes fases:",
    "o": [
     "Elección del tema, planificación, desarrollo/investigación y evaluación/comunicación final",
     "Un único paso sin ninguna planificación previa",
     "Exclusivamente la evaluación final, sin desarrollo previo",
     "La memorización de contenidos sin ninguna investigación"
    ],
    "c": 0,
    "e": "Los proyectos de trabajo suelen desarrollarse siguiendo fases como la elección del tema (a partir de un interés del alumnado), la planificación conjunta de qué se quiere saber y cómo averiguarlo, el desarrollo y la investigación propiamente dicha, y finalmente la comunicación de lo aprendido y su evaluación, en un proceso con sentido y participación activa del alumnado."
   },
   {
    "d": "media",
    "q": "La 'atención a la diversidad' en el segundo ciclo puede concretarse, entre otras medidas, en:",
    "o": [
     "Adaptaciones curriculares, agrupamientos flexibles y apoyo de especialistas, según las necesidades del alumnado",
     "Excluir al alumnado con necesidades específicas de las actividades ordinarias del aula",
     "Aplicar exactamente la misma actividad y ritmo a todo el alumnado sin excepción",
     "No contemplar ninguna medida específica en esta etapa"
    ],
    "c": 0,
    "e": "La atención a la diversidad en el segundo ciclo puede concretarse en medidas como adaptaciones curriculares (ajustar objetivos o actividades a un alumno concreto), agrupamientos flexibles o el apoyo puntual de especialistas, adaptando así la respuesta educativa a las necesidades reales de cada alumno, sin excluirlo de las actividades ordinarias del aula."
   },
   {
    "d": "facil",
    "q": "La programación didáctica del segundo ciclo debe ser revisada y evaluada, entre otros motivos, para:",
    "o": [
     "Ajustarla y mejorarla en función de los resultados y del proceso observado en el alumnado",
     "No tiene ninguna necesidad de revisión una vez elaborada",
     "Sustituir la evaluación del alumnado",
     "Cumplir un mero trámite administrativo sin ninguna utilidad práctica"
    ],
    "c": 0,
    "e": "La revisión periódica de la programación didáctica —por ejemplo al finalizar cada trimestre— permite ajustarla y mejorarla en función de los resultados observados en el alumnado y del desarrollo real de las actividades planificadas, dentro de un proceso de mejora continua, y no como un mero trámite administrativo sin utilidad práctica."
   },
   {
    "d": "dificil",
    "q": "La secuenciación de contenidos por cursos (3, 4 y 5 años) dentro del segundo ciclo debe realizarse atendiendo, entre otros criterios, a:",
    "o": [
     "Un orden aleatorio sin relación con el desarrollo evolutivo",
     "La complejidad creciente y la coherencia con las características evolutivas propias de cada edad",
     "Criterios exclusivamente administrativos sin relación pedagógica",
     "La disponibilidad de materiales sin ningún otro criterio"
    ],
    "c": 1,
    "e": "La secuenciación de contenidos entre los tres cursos del segundo ciclo (3, 4 y 5 años) debe seguir un criterio de complejidad creciente y coherencia con las características evolutivas propias de cada edad: por ejemplo, trabajar primero la clasificación sencilla de objetos por un solo atributo y, en cursos posteriores, por varios atributos a la vez."
   },
   {
    "d": "facil",
    "q": "Las actividades complementarias y extraescolares (salidas, visitas) que se incluyen en la programación deben, entre otros criterios:",
    "o": [
     "Estar justificadas pedagógicamente y vinculadas a los objetivos y contenidos trabajados en el aula",
     "Organizarse sin ninguna relación con la programación del aula",
     "Evitarse siempre por motivos de seguridad",
     "Sustituir por completo la actividad habitual del aula durante todo el curso"
    ],
    "c": 0,
    "e": "Las actividades complementarias y extraescolares (una salida a una granja, la visita de un profesional a explicar su trabajo) deben estar justificadas pedagógicamente y guardar coherencia con los objetivos y contenidos que se están trabajando en el aula, enriqueciendo la propuesta educativa en lugar de organizarse de forma desconectada de ella."
   },
   {
    "d": "media",
    "q": "La 'globalización', como principio metodológico que debe reflejarse en la programación del segundo ciclo, implica que las distintas áreas del currículo:",
    "o": [
     "Deben trabajarse de forma completamente aislada y sucesiva",
     "Se aborden de forma interrelacionada en torno a situaciones, proyectos o centros de interés significativos para el alumnado",
     "Solo pueden trabajarse a través de fichas específicas de cada área",
     "No tienen ninguna relación entre sí en la programación"
    ],
    "c": 1,
    "e": "La globalización, principio metodológico central en Infantil, implica abordar las distintas áreas curriculares de forma interrelacionada, en torno a situaciones, proyectos o centros de interés significativos para el alumnado (por ejemplo, un proyecto sobre 'el otoño' que integra lenguaje, lógico-matemática y expresión plástica a la vez), en lugar de trabajar cada área de forma aislada y sucesiva."
   },
   {
    "d": "facil",
    "q": "El horario semanal recogido en la programación de aula del segundo ciclo debe organizarse con:",
    "o": [
     "Cierta flexibilidad que permita adaptarse a las necesidades e imprevistos del grupo, sin perder una estructura de referencia",
     "Una rigidez absoluta sin ningún margen de adaptación",
     "La ausencia total de cualquier estructura horaria",
     "Un horario idéntico, sin diferencias, al de Educación Primaria"
    ],
    "c": 0,
    "e": "El horario semanal de la programación de aula debe combinar una estructura de referencia clara (las rutinas y momentos estables que dan seguridad) con la flexibilidad necesaria para adaptarse a las necesidades e imprevistos propios del grupo (por ejemplo, alargar una actividad que está resultando muy motivadora), sin caer en una rigidez absoluta ni en la ausencia total de estructura."
   },
   {
    "d": "facil",
    "q": "La programación didáctica del segundo ciclo debe contemplar, entre sus apartados, las medidas de atención a la diversidad porque:",
    "o": [
     "Todo grupo presenta heterogeneidad en ritmos, capacidades e intereses que requiere una respuesta educativa ajustada",
     "Solo es necesario si existe alumnado con necesidades específicas de apoyo educativo diagnosticadas",
     "Es un apartado opcional sin relevancia normativa",
     "Debe aplicarse exclusivamente en el tercer curso del ciclo"
    ],
    "c": 0,
    "e": "Toda programación didáctica debe contemplar medidas de atención a la diversidad, dado que cualquier grupo —incluso sin alumnado con necesidades específicas de apoyo educativo diagnosticadas— presenta de forma natural heterogeneidad en ritmos, capacidades e intereses que requiere una respuesta educativa ajustada y no uniforme."
   },
   {
    "d": "dificil",
    "q": "La coordinación entre los tres cursos del segundo ciclo (3, 4 y 5 años) a la hora de programar resulta relevante principalmente para:",
    "o": [
     "Garantizar una progresión coherente de objetivos y contenidos a lo largo de todo el ciclo",
     "No tiene ninguna relevancia, ya que cada curso funciona de forma completamente independiente",
     "Uniformar completamente la actividad de los tres cursos sin ninguna diferenciación",
     "Sustituir la necesidad de una programación específica por curso"
    ],
    "c": 0,
    "e": "La coordinación entre los tres cursos del segundo ciclo a la hora de programar garantiza una progresión coherente de objetivos y contenidos a lo largo de todo el ciclo, evitando tanto repeticiones innecesarias (trabajar exactamente lo mismo en 4 y 5 años) como vacíos de contenidos que deberían haberse trabajado antes de pasar al curso siguiente."
   },
   {
    "d": "facil",
    "q": "Los criterios de evaluación recogidos en la programación didáctica deben estar redactados de forma que permitan:",
    "o": [
     "Valorar el grado de desarrollo de las capacidades trabajadas, de forma observable y ajustada a la etapa",
     "Calificar numéricamente y de forma comparativa al alumnado",
     "Ser aplicados exclusivamente mediante pruebas escritas estandarizadas",
     "Evaluar únicamente contenidos memorísticos"
    ],
    "c": 0,
    "e": "Los criterios de evaluación deben redactarse de forma que permitan valorar, de manera observable, el grado de desarrollo de las capacidades trabajadas (por ejemplo, mediante la observación de si un niño 'participa en conversaciones grupales respetando el turno'), coherente con la evaluación global, continua y cualitativa propia de la etapa infantil, y no mediante calificaciones numéricas comparativas."
   },
   {
    "d": "media",
    "q": "La inclusión, dentro de la programación didáctica, de un apartado dedicado a los 'elementos transversales' (educación en valores, igualdad, TIC, etc.) responde a que estos contenidos:",
    "o": [
     "Deben trabajarse en un momento puntual y aislado del curso",
     "Deben impregnar de forma transversal el conjunto de áreas y actividades, más allá de un tratamiento puntual",
     "No forman parte del currículo oficial de la etapa",
     "Solo tienen relevancia en Educación Secundaria"
    ],
    "c": 1,
    "e": "Los elementos transversales (educación en valores, igualdad, uso de las TIC) deben impregnar de forma continuada el conjunto de áreas y actividades a lo largo de toda la programación, y no reducirse a un tratamiento puntual y aislado en una fecha señalada del calendario escolar (como trabajar la igualdad solo el 8 de marzo)."
   },
   {
    "d": "facil",
    "q": "La metodología basada en 'proyectos de trabajo' en el segundo ciclo suele iniciarse a partir de:",
    "o": [
     "Una pregunta o interés surgido del propio alumnado o del grupo",
     "Un examen inicial de conocimientos previos exclusivamente",
     "Un libro de texto cerrado sin posibilidad de modificación",
     "La elección exclusiva del equipo directivo del centro"
    ],
    "c": 0,
    "e": "La metodología de proyectos de trabajo suele iniciarse a partir de una pregunta, curiosidad o interés genuino surgido del propio alumnado o del grupo (por ejemplo, tras encontrar un caracol en el patio), que se convierte en el hilo conductor de toda la investigación posterior, y no a partir de un examen inicial ni de un libro de texto cerrado."
   },
   {
    "d": "facil",
    "q": "¿Cuántas sesiones de evaluación parciales deben realizarse como mínimo a lo largo del curso en el segundo ciclo de Infantil?",
    "o": [
     "Una",
     "Dos",
     "Tres",
     "Cinco"
    ],
    "c": 2,
    "e": "La normativa gallega establece como mínimo tres sesiones de evaluación parciales a lo largo del curso en el segundo ciclo de Infantil, coincidiendo la última de ellas con la evaluación final, lo que permite un seguimiento continuo del progreso del alumnado a lo largo del año."
   },
   {
    "d": "media",
    "q": "¿Qué documento elabora la persona tutora al finalizar el sexto curso para garantizar una atención individualizada y continuada?",
    "o": [
     "Informe final de etapa",
     "Boletín numérico",
     "Acta de claustro",
     "Informe de asistencia"
    ],
    "c": 0,
    "e": "Al finalizar el sexto curso (el último del segundo ciclo, a los 5 años, antes de pasar a Primaria), la persona tutora elabora un informe final de etapa sobre el progreso global del alumno, documento que resulta especialmente relevante para garantizar la continuidad y la coordinación en la transición hacia la siguiente etapa educativa."
   },
   {
    "d": "facil",
    "q": "¿Con qué términos cualitativos se expresa habitualmente la valoración del proceso de aprendizaje en Educación Infantil en Galicia?",
    "o": [
     "1-10",
     "Insuficiente, suficiente y notable",
     "Sen dificultade (SD), en proceso (EP) ou con dificultade (CD)",
     "Apto/no apto"
    ],
    "c": 2,
    "e": "En Galicia, la valoración cualitativa del proceso de aprendizaje en Educación Infantil se expresa habitualmente mediante los términos SD (sen dificultade), EP (en proceso) o CD (con dificultade), en coherencia con el carácter global, cualitativo y no numérico de la evaluación propia de esta etapa."
   }
  ]
 },
 {
  "id": "b25",
  "title": "Principios de Intervención Educativa de Educación Infantil",
  "questions": [
   {
    "d": "facil",
    "q": "El principio de 'aprendizaje significativo' (Ausubel), aplicado a Infantil, implica que los nuevos aprendizajes deben:",
    "o": [
     "Ser memorizados de forma mecánica sin relación con lo previo",
     "Conectar con los conocimientos y experiencias previas del niño para integrarse de forma comprensiva",
     "Presentarse siempre de forma abstracta y descontextualizada",
     "Evaluarse exclusivamente mediante pruebas escritas"
    ],
    "c": 1,
    "e": "Ausubel defiende que el aprendizaje significativo requiere que los nuevos contenidos se conecten con los conocimientos y experiencias previas del niño, integrándose de forma comprensiva en su estructura mental, en lugar de memorizarse de forma mecánica y sin ninguna relación con lo que ya sabe. Por ejemplo, explicar el concepto de 'mitad' partiendo de repartir una galleta entre dos niños resulta más significativo que una definición abstracta."
   },
   {
    "d": "facil",
    "q": "El principio de 'globalización' en Educación Infantil hace referencia a que:",
    "o": [
     "El niño percibe e interpreta la realidad de forma global, no fragmentada en disciplinas o áreas aisladas",
     "Los contenidos deben trabajarse siempre de forma separada por asignaturas",
     "Solo se aplica al área de lenguaje",
     "Es un principio exclusivo del segundo ciclo"
    ],
    "c": 0,
    "e": "El principio de globalización responde a que el pensamiento infantil percibe e interpreta la realidad de forma global, no fragmentada en disciplinas o materias separadas (un niño que observa una hormiga no distingue si está 'haciendo ciencias' o 'lenguaje' al describirla), por lo que los aprendizajes en Infantil deben abordarse de forma integrada, y este principio se aplica a todas las áreas, no solo al lenguaje."
   },
   {
    "d": "media",
    "q": "El principio de 'actividad', como principio metodológico básico en Infantil, defiende que el aprendizaje se produce fundamentalmente a través de:",
    "o": [
     "La escucha pasiva de explicaciones del adulto",
     "La acción directa, la manipulación y la experimentación del propio niño",
     "La memorización de contenidos abstractos",
     "Exámenes escritos periódicos"
    ],
    "c": 1,
    "e": "El principio de actividad sostiene que el niño aprende principalmente haciendo: a través de la manipulación de objetos, la experimentación directa y la acción sobre su entorno, y no mediante la escucha pasiva de explicaciones del adulto ni la memorización de contenidos abstractos, poco adecuados a esta edad."
   },
   {
    "d": "dificil",
    "q": "El principio de 'individualización' de la enseñanza implica:",
    "o": [
     "Aplicar el mismo ritmo y actividades a todos los niños por igual sin excepción",
     "Respetar y atender los distintos ritmos, intereses y niveles de desarrollo de cada niño o niña",
     "Trabajar siempre de forma aislada, sin interacción grupal",
     "Evaluar únicamente mediante pruebas estandarizadas"
    ],
    "c": 1,
    "e": "La individualización supone ajustar la intervención educativa a las características, el ritmo evolutivo y los intereses propios de cada niño, dentro de la vida cotidiana del grupo (no aislándolo de él), evitando aplicar exactamente el mismo ritmo y las mismas actividades a todos por igual, sin tener en cuenta sus diferencias reales."
   },
   {
    "d": "media",
    "q": "El principio del 'juego' como principio de intervención educativa en Infantil se justifica porque:",
    "o": [
     "El juego es una actividad exclusivamente recreativa sin valor educativo",
     "El juego constituye la actividad natural y el motor principal del aprendizaje y desarrollo infantil",
     "Debe limitarse al tiempo de recreo exclusivamente",
     "Es incompatible con la consecución de objetivos curriculares"
    ],
    "c": 1,
    "e": "El juego se considera el principal instrumento de aprendizaje y desarrollo en la infancia, ya que integra a la vez lo cognitivo (resolver problemas del juego), lo motor, lo afectivo y lo social, por lo que debe impregnar la práctica educativa en su conjunto y no limitarse a un momento aislado de recreo, siendo perfectamente compatible con la consecución de los objetivos curriculares."
   },
   {
    "d": "facil",
    "q": "El principio de 'clima de seguridad y afectividad' en el aula de Infantil se relaciona directamente con:",
    "o": [
     "La teoría del apego y la necesidad de una base emocional segura para que se produzca el aprendizaje",
     "La ausencia de vínculo entre docente y alumnado",
     "La aplicación de normas rígidas sin componente afectivo",
     "Un aspecto secundario sin relación con el aprendizaje"
    ],
    "c": 0,
    "e": "Un clima afectivo cálido y seguro en el aula, coherente con la teoría del apego de Bowlby, constituye la base emocional necesaria para que el niño se sienta seguro para explorar, relacionarse y aprender con confianza; sin esa base, el niño dedica más energía a gestionar su inseguridad que a implicarse en las propuestas educativas."
   },
   {
    "d": "facil",
    "q": "El principio de 'socialización' como principio de intervención educativa promueve, entre otros aspectos:",
    "o": [
     "El aislamiento del niño respecto al grupo",
     "La interacción, la cooperación y el aprendizaje entre iguales dentro de la vida del aula",
     "Evitar cualquier tipo de conflicto entre el alumnado",
     "Priorizar el trabajo individual frente al grupal en todo momento"
    ],
    "c": 1,
    "e": "El principio de socialización promueve la interacción entre iguales, la cooperación y el aprendizaje social como parte esencial del proceso educativo en Infantil (por ejemplo, resolver juntos cómo repartirse las tareas de un juego), y no el aislamiento del niño respecto al grupo ni evitar sistemáticamente cualquier conflicto, que en realidad son también oportunidades de aprendizaje social."
   },
   {
    "d": "dificil",
    "q": "El principio de 'creatividad', como principio de intervención educativa, implica que el docente debe:",
    "o": [
     "Ofrecer siempre modelos únicos y cerrados que el alumnado debe reproducir con exactitud",
     "Favorecer situaciones abiertas que permitan la expresión personal, la exploración y las soluciones originales del alumnado",
     "Evitar cualquier propuesta que implique incertidumbre o apertura",
     "Limitar la creatividad a la etapa de Educación Primaria"
    ],
    "c": 1,
    "e": "El principio de creatividad implica que el docente debe favorecer situaciones abiertas y flexibles (una consigna como 'dibuja lo que más te ha gustado del cuento', en lugar de un modelo único que copiar), que permitan la expresión personal, la exploración y la búsqueda de soluciones originales por parte del alumnado."
   },
   {
    "d": "facil",
    "q": "El principio de 'coordinación con las familias', como principio de intervención educativa, se basa en la idea de que:",
    "o": [
     "Familia y escuela son contextos totalmente independientes sin necesidad de relación",
     "La coherencia y colaboración entre ambos contextos favorece el desarrollo integral del niño",
     "Solo la escuela debe intervenir en la educación del niño",
     "La familia debe delegar completamente su función educativa en el centro"
    ],
    "c": 1,
    "e": "El principio de coordinación con las familias parte de la idea de que la coherencia y la colaboración entre ambos contextos —no su independencia total ni la delegación completa de uno en el otro— favorece un desarrollo más armónico e integral del niño, al evitar mensajes contradictorios entre lo que se trabaja en casa y en la escuela."
   },
   {
    "d": "media",
    "q": "El principio de 'autonomía', trabajado de forma progresiva a lo largo de la etapa infantil, implica favorecer que el niño:",
    "o": [
     "Dependa siempre del adulto para cualquier tarea",
     "Vaya asumiendo, de forma progresiva y ajustada a su desarrollo, responsabilidades y decisiones sobre su propia actividad",
     "Actúe sin ningún tipo de límite o normativa",
     "Alcance una autonomía completa desde el nacimiento"
    ],
    "c": 1,
    "e": "El principio de autonomía busca que el niño vaya asumiendo, de forma progresiva y ajustada a su nivel de desarrollo (no de golpe ni desde el nacimiento), responsabilidades y decisiones cada vez mayores sobre su propia actividad y cuidado personal, como vestirse solo o elegir a qué rincón ir a jugar."
   },
   {
    "d": "facil",
    "q": "El principio de 'observación' como base de la intervención educativa implica que el docente debe:",
    "o": [
     "Planificar la intervención únicamente a partir de la teoría, sin atender a la realidad del grupo",
     "Observar de forma sistemática al alumnado para ajustar la intervención educativa a sus necesidades reales",
     "Evitar cualquier registro o seguimiento del proceso del alumnado",
     "Limitar la observación a momentos puntuales de evaluación final"
    ],
    "c": 1,
    "e": "La observación sistemática es la base para conocer las necesidades, los intereses y el proceso evolutivo real de cada niño, permitiendo ajustar la intervención educativa de forma pertinente y continua, y no solo en momentos puntuales de evaluación final, ni limitarse a planificar desde la teoría sin atender a la realidad concreta del grupo."
   },
   {
    "d": "dificil",
    "q": "El principio de 'diversidad' como principio de intervención educativa implica reconocer que:",
    "o": [
     "Todo el alumnado debe alcanzar exactamente los mismos aprendizajes al mismo ritmo",
     "Cada niño es diferente en capacidades, ritmos, intereses y contexto, lo que exige una respuesta educativa ajustada",
     "La diversidad es un problema que debe minimizarse en el aula",
     "Solo debe atenderse la diversidad en casos de necesidades específicas de apoyo educativo"
    ],
    "c": 1,
    "e": "El principio de diversidad reconoce que cada niño presenta capacidades, ritmos, intereses y contextos diferentes, lo que exige una respuesta educativa ajustada y flexible para todo el alumnado en general, y no solo para los casos con necesidades específicas de apoyo educativo diagnosticadas formalmente."
   },
   {
    "d": "facil",
    "q": "El principio de 'intervención educativa indirecta', propio de la etapa infantil, hace referencia a que el papel del docente consiste, en gran medida, en:",
    "o": [
     "Preparar el ambiente, los materiales y las situaciones que faciliten el aprendizaje autónomo del niño, más que en la instrucción directa constante",
     "Dirigir de forma constante y explícita cada acción del niño",
     "No intervenir nunca de ninguna forma en el proceso educativo",
     "Limitarse a la evaluación final del aprendizaje"
    ],
    "c": 0,
    "e": "La intervención educativa indirecta, propia de la etapa infantil, implica que gran parte del papel docente consiste en preparar cuidadosamente el ambiente, los materiales y las situaciones que van a facilitar el aprendizaje autónomo del niño (por ejemplo, disponer un rincón bien equipado), más que en dirigir de forma constante y explícita cada una de sus acciones."
   },
   {
    "d": "media",
    "q": "El principio de 'enfoque inclusivo', transversal a la intervención educativa en Infantil, implica que:",
    "o": [
     "El alumnado con necesidades específicas debe ser atendido en espacios separados del grupo ordinario",
     "Todo el alumnado, con independencia de sus características, participa y aprende dentro del grupo ordinario, con los apoyos necesarios",
     "Solo determinados centros deben aplicar criterios de inclusión",
     "La inclusión es un principio exclusivo de etapas educativas posteriores"
    ],
    "c": 1,
    "e": "El enfoque inclusivo defiende que todo el alumnado, con independencia de sus características o necesidades, debe participar y aprender dentro del grupo ordinario, contando con los apoyos y ajustes necesarios (materiales adaptados, apoyo puntual de un especialista dentro del aula), y no ser atendido en espacios separados del resto del grupo."
   },
   {
    "d": "facil",
    "q": "El principio de 'partir del nivel de desarrollo del alumnado' implica que el docente debe:",
    "o": [
     "Ignorar las capacidades previas del alumnado al planificar la intervención",
     "Ajustar los objetivos, contenidos y actividades al momento evolutivo real de cada niño o niña",
     "Aplicar siempre el mismo nivel de exigencia, independientemente de la edad",
     "Limitarse a seguir un manual sin ninguna adaptación"
    ],
    "c": 1,
    "e": "Partir del nivel de desarrollo del alumnado exige ajustar los objetivos, los contenidos y las actividades al momento evolutivo real de cada niño, evitando tanto exigencias excesivas para su edad (que generan frustración) como una falta de estimulación adecuada (que genera aburrimiento y desaprovecha su potencial)."
   },
   {
    "d": "dificil",
    "q": "El principio de 'evaluación global, continua y formativa' en Infantil implica que la evaluación debe:",
    "o": [
     "Realizarse únicamente al final del curso mediante una prueba objetiva",
     "Acompañar todo el proceso de enseñanza-aprendizaje, valorando el desarrollo integral del niño y sirviendo para ajustar la intervención educativa",
     "Centrarse exclusivamente en los contenidos conceptuales memorizados",
     "Comparar el rendimiento de cada niño con el resto del grupo mediante calificaciones"
    ],
    "c": 1,
    "e": "La evaluación en Infantil debe ser global (valorando el desarrollo integral del niño, no solo un aspecto aislado), continua (a lo largo de todo el proceso, no solo al final) y formativa (orientada a ajustar y mejorar la intervención educativa a partir de lo observado), y no centrarse en comparar mediante calificaciones el rendimiento de unos niños frente a otros."
   },
   {
    "d": "facil",
    "q": "El principio de 'clima lúdico y motivador' en la intervención educativa defiende que las propuestas de aprendizaje deben:",
    "o": [
     "Presentarse de forma atractiva y motivadora, aprovechando el interés natural del niño por el juego",
     "Presentarse siempre de forma seria y exenta de cualquier componente lúdico",
     "Evitar cualquier tipo de disfrute para garantizar la seriedad del aprendizaje",
     "Limitarse a fichas repetitivas sin ningún componente motivador"
    ],
    "c": 0,
    "e": "El principio de clima lúdico y motivador defiende que las propuestas de aprendizaje deben presentarse de forma atractiva, aprovechando el interés natural del niño por el juego (por ejemplo, aprender a contar a través de un juego de dados en lugar de una ficha repetitiva), favoreciendo así un aprendizaje más significativo y disfrutado, sin que ello reste seriedad al proceso educativo."
   },
   {
    "d": "media",
    "q": "El principio de 'interacción con el medio', como principio de intervención educativa, subraya que el aprendizaje infantil se produce especialmente a través de:",
    "o": [
     "El contacto directo y activo con el entorno físico, natural y social, más que de la transmisión verbal abstracta",
     "La exposición pasiva a información verbal sin ningún contacto directo con el entorno",
     "La memorización de datos sobre el entorno sin ninguna experiencia directa",
     "Un entorno completamente artificial y ajeno a la realidad cotidiana del niño"
    ],
    "c": 0,
    "e": "El principio de interacción con el medio defiende que el aprendizaje infantil se produce especialmente a través del contacto directo y activo con el entorno físico, natural y social (tocar tierra, observar un charco tras la lluvia, hablar con un vecino del barrio), más que mediante la transmisión verbal abstracta y descontextualizada de información sobre ese mismo entorno."
   },
   {
    "d": "facil",
    "q": "El principio de 'respeto a la diversidad de ritmos de desarrollo' implica que el docente debe evitar, entre otras cosas:",
    "o": [
     "Establecer comparaciones y expectativas idénticas y rígidas para todo el alumnado del grupo",
     "Observar de forma individualizada al alumnado",
     "Adaptar las actividades a las necesidades de cada niño",
     "Colaborar con las familias en el seguimiento del desarrollo"
    ],
    "c": 0,
    "e": "El respeto a la diversidad de ritmos de desarrollo implica evitar establecer comparaciones y expectativas idénticas y rígidas para todo el alumnado del grupo (como esperar que todos alcancen un mismo hito exactamente a la misma edad), reconociendo que cada niño sigue su propio ritmo dentro de una secuencia evolutiva general y común."
   },
   {
    "d": "dificil",
    "q": "El principio de 'coherencia y continuidad educativa' entre ciclos y etapas defiende que la intervención educativa debe:",
    "o": [
     "Cambiar de forma radical y sin ninguna conexión entre un ciclo y el siguiente",
     "Mantener una progresión coherente de principios, metodología y expectativas a lo largo de los distintos ciclos y etapas educativas",
     "Aplicarse de forma idéntica en todas las edades sin ningún tipo de progresión",
     "Limitarse exclusivamente al ámbito de un único curso escolar"
    ],
    "c": 1,
    "e": "El principio de coherencia y continuidad educativa defiende que debe existir una progresión coherente de principios, metodología y expectativas entre los distintos ciclos y etapas educativas (por ejemplo, entre el primer y el segundo ciclo de Infantil, o entre Infantil y Primaria), facilitando así las transiciones y evitando rupturas bruscas en el proceso educativo del alumnado, en lugar de cambios radicales y desconectados entre una etapa y la siguiente."
   },
   {
    "d": "media",
    "q": "¿Qué debe hacer el profesorado si durante la evaluación continua detecta que el progreso de un alumno o alumna no es adecuado?",
    "o": [
     "Esperar a la evaluación final",
     "Establecer las medidas más adecuadas para garantizar los aprendizajes imprescindibles",
     "Calificar automáticamente con un suspenso",
     "Derivar siempre al alumnado fuera del aula"
    ],
    "c": 1,
    "e": "Cuando durante la evaluación continua el profesorado detecta que el progreso de un alumno o alumna no es el adecuado, la normativa establece que debe adoptar las medidas más pertinentes para garantizar los aprendizajes imprescindibles (por ejemplo, un refuerzo específico o una adaptación puntual), en lugar de simplemente esperar a la evaluación final o calificar automáticamente de forma negativa."
   },
   {
    "d": "facil",
    "q": "¿Qué carácter tiene la evaluación en el segundo ciclo de Educación Infantil en Galicia?",
    "o": [
     "Global, continua y formativa",
     "Diagnóstica y exclusivamente inicial",
     "Sumativa y numérica",
     "Final y selectiva"
    ],
    "c": 0,
    "e": "La Orden de 30 de mayo de 2023 define la evaluación en el segundo ciclo de Educación Infantil en Galicia como global (valora el desarrollo integral), continua (acompaña todo el proceso) y formativa (orientada a mejorar la intervención educativa), en coherencia con el enfoque cualitativo y no numérico propio de esta etapa."
   },
   {
    "d": "media",
    "q": "¿Qué finalidad tiene la evaluación del proceso de enseñanza y de la propia práctica docente?",
    "o": [
     "Analizar y valorar la intervención educativa para adaptarla a las características y necesidades del alumnado",
     "Clasificar al alumnado por rendimiento",
     "Determinar exclusivamente las calificaciones",
     "Sustituir la observación del alumnado"
    ],
    "c": 0,
    "e": "La evaluación del proceso de enseñanza y de la propia práctica docente tiene como finalidad analizar y valorar la intervención educativa realizada, para poder adaptarla progresivamente a las características y necesidades reales del alumnado, y no clasificar al alumnado por rendimiento ni sustituir la observación directa que el docente hace de cada niño."
   }
  ]
 },
 {
  "id": "b26",
  "title": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "questions": [
   {
    "d": "facil",
    "q": "Según el artículo 1.1 de la Constitución Española, ¿cuáles son los valores superiores del ordenamiento jurídico español?",
    "o": [
     "La libertad, la justicia, la igualdad y el pluralismo político",
     "La democracia, la unidad y la solidaridad",
     "La soberanía, la justicia y la seguridad, salvo prueba en contrario",
     "La igualdad, la fraternidad y la propiedad"
    ],
    "c": 0,
    "e": "Art. 1.1 CE (BOE núm. 311, de 29/12/1978): España se constituye en un Estado social y democrático de Derecho que propugna como valores superiores de su ordenamiento jurídico la libertad, la justicia, la igualdad y el pluralismo político. Estos cuatro valores no son meras declaraciones: actúan como criterio de interpretación de todo el ordenamiento (por ejemplo, una ley que restrinja el pluralismo político sin justificación sería contraria a este artículo)."
   },
   {
    "d": "facil",
    "q": "¿Cuál es la forma política del Estado español según el artículo 1.3 de la Constitución?",
    "o": [
     "La República parlamentaria",
     "La Monarquía parlamentaria",
     "La Monarquía constitucional absoluta",
     "La Confederación de Estados"
    ],
    "c": 1,
    "e": "Art. 1.3 CE: la forma política del Estado español es la Monarquía parlamentaria, lo que significa que la Jefatura del Estado (el Rey) es hereditaria y simbólica, mientras que el poder efectivo reside en el Parlamento y el Gobierno responsable ante él, a diferencia de una monarquía absoluta donde el monarca gobierna directamente."
   },
   {
    "d": "media",
    "q": "El artículo 2 de la Constitución reconoce y garantiza el derecho a la autonomía de las nacionalidades y regiones. ¿En qué principio se fundamenta a la vez la Constitución según ese mismo artículo?",
    "o": [
     "En la indisoluble unidad de la Nación española",
     "En la federación voluntaria de territorios",
     "En la soberanía compartida entre CCAA y Estado",
     "En la independencia de los territorios históricos"
    ],
    "c": 0,
    "e": "Art. 2 CE: la Constitución se fundamenta en la indisoluble unidad de la Nación española, y reconoce y garantiza el derecho a la autonomía de las nacionalidades y regiones que la integran, así como la solidaridad entre todas ellas. Este artículo combina dos principios en tensión: unidad estatal y autonomía territorial, que es precisamente lo que da origen a las Comunidades Autónomas como Galicia."
   },
   {
    "d": "facil",
    "q": "Según el artículo 3.1 de la Constitución, ¿qué lengua es la oficial del Estado?",
    "o": [
     "El gallego, en general",
     "El catalán",
     "El castellano",
     "El euskera"
    ],
    "c": 2,
    "e": "Art. 3.1 CE: el castellano es la lengua española oficial del Estado, con el deber de conocerla y el derecho a usarla. Junto a este artículo, el 3.2 permite que las demás lenguas españolas (como el gallego) sean también oficiales en sus respectivas Comunidades Autónomas, de acuerdo con sus Estatutos."
   },
   {
    "d": "media",
    "q": "Conforme al artículo 9.2 de la Constitución, corresponde a los poderes públicos:",
    "o": [
     "Únicamente legislar sobre materias reservadas a ley orgánica, salvo que una norma con rango de ley disponga lo contrario",
     "Promover las condiciones para que la libertad y la igualdad sean reales y efectivas, removiendo los obstáculos que impidan su plenitud",
     "Garantizar exclusivamente el orden público, salvo que una norma con rango de ley disponga lo contrario",
     "Suspender los derechos fundamentales cuando lo consideren oportuno, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 1,
    "e": "Art. 9.2 CE: los poderes públicos deben promover las condiciones para que la libertad y la igualdad del individuo y de los grupos sean reales y efectivas, removiendo los obstáculos que impidan o dificulten su plenitud. Es el fundamento constitucional de las políticas de acción positiva (por ejemplo, becas de comedor escolar para familias con menos recursos, que buscan igualdad real, no solo formal)."
   },
   {
    "d": "media",
    "q": "El artículo 10.1 de la Constitución señala que la dignidad de la persona y los derechos inviolables que le son inherentes son:",
    "o": [
     "Un principio meramente programático sin efectos jurídicos",
     "Fundamento del orden político y de la paz social",
     "Competencia exclusiva del Tribunal Constitucional",
     "Aplicables solo a los ciudadanos españoles"
    ],
    "c": 1,
    "e": "Art. 10.1 CE: la dignidad de la persona, los derechos inviolables que le son inherentes, el libre desarrollo de la personalidad, el respeto a la ley y a los derechos de los demás son fundamento del orden político y de la paz social. Este precepto abre el Título I y actúa como cláusula interpretativa de todos los derechos fundamentales que le siguen."
   },
   {
    "d": "facil",
    "q": "El artículo 14 de la Constitución establece la igualdad de los españoles ante la ley. ¿Cuál de estas causas de discriminación cita expresamente?",
    "o": [
     "Nacimiento, raza, sexo, religión u opinión",
     "Únicamente la raza, con las matizaciones oportunas",
     "Únicamente el sexo y la religión",
     "Solo la opinión política"
    ],
    "c": 0,
    "e": "Art. 14 CE: los españoles son iguales ante la ley, sin que pueda prevalecer discriminación alguna por razón de nacimiento, raza, sexo, religión, opinión o cualquier otra condición o circunstancia personal o social. La lista no es cerrada («cualquier otra condición»), lo que permite incluir causas como la orientación sexual o la discapacidad, no mencionadas expresamente en 1978."
   },
   {
    "d": "media",
    "q": "Según el artículo 23.1 de la Constitución, los ciudadanos tienen derecho a participar en los asuntos públicos:",
    "o": [
     "Solo a través de representantes designados por el Gobierno, salvo que una norma con rango de ley disponga lo contrario",
     "Directamente o por medio de representantes, libremente elegidos en elecciones periódicas por sufragio universal",
     "Únicamente mediante referéndum, salvo que una norma con rango de ley disponga lo contrario",
     "Solo si son mayores de 25 años, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 1,
    "e": "Art. 23.1 CE: los ciudadanos tienen el derecho a participar en los asuntos públicos, directamente o por medio de representantes, libremente elegidos en elecciones periódicas por sufragio universal. La participación directa se ejerce, por ejemplo, mediante el referéndum; la indirecta, mediante el voto a diputados y concejales."
   },
   {
    "d": "media",
    "q": "El artículo 23.2 de la Constitución reconoce el derecho a acceder en condiciones de igualdad a las funciones y cargos públicos. ¿Qué requisito señala el propio artículo para su ejercicio?",
    "o": [
     "Que se exijan los requisitos que señalen las leyes",
     "Superar exclusivamente una entrevista personal",
     "Ser mayor de 30 años",
     "No tener ninguna condición"
    ],
    "c": 0,
    "e": "Art. 23.2 CE: los ciudadanos tienen derecho a acceder en condiciones de igualdad a las funciones y cargos públicos, con los requisitos que señalen las leyes. Es el fundamento constitucional del acceso al empleo público por mérito y capacidad: por eso las oposiciones deben regirse por criterios objetivos y no por designación arbitraria."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 53.1 de la Constitución, el ejercicio de los derechos y libertades del Capítulo Segundo del Título I:",
    "o": [
     "Solo podrá regularse por ley, que en todo caso deberá respetar su contenido esencial",
     "Puede regularse libremente por reglamento",
     "No puede regularse en ningún caso, salvo que una norma con rango de ley disponga lo contrario",
     "Se regula exclusivamente por decreto-ley"
    ],
    "c": 0,
    "e": "Art. 53.1 CE: los derechos y libertades del Capítulo segundo vinculan a todos los poderes públicos; solo por ley, que en todo caso deberá respetar su contenido esencial, podrá regularse su ejercicio. Esto significa que ni un reglamento ni una orden ministerial pueden limitar, por ejemplo, el derecho de reunión: se necesita una ley aprobada por las Cortes."
   },
   {
    "d": "dificil",
    "q": "De acuerdo con el artículo 53.2 de la Constitución, ¿ante quién puede recabarse la tutela de las libertades y derechos reconocidos en el artículo 14 y en la Sección Primera del Capítulo Segundo?",
    "o": [
     "Únicamente ante el Defensor del Pueblo, salvo que una norma con rango de ley disponga lo contrario, con carácter general",
     "Ante los Tribunales ordinarios por un procedimiento preferente y sumario, y en su caso mediante amparo",
     "Solo ante el Consejo de Estado, salvo que una norma con rango de ley disponga lo contrario, como criterio subsidiario",
     "Ante el Tribunal Supremo en única instancia, salvo que una norma con rango de ley disponga lo contrario, en todo caso"
    ],
    "c": 1,
    "e": "Art. 53.2 CE: cualquier ciudadano podrá recabar la tutela de las libertades y derechos del art. 14 y de la Sección primera del Capítulo segundo ante los Tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a través del recurso de amparo ante el Tribunal Constitucional. Un ejemplo típico es el amparo que se interpone cuando se considera vulnerado el derecho a la libertad de expresión tras agotar la vía judicial ordinaria."
   },
   {
    "d": "media",
    "q": "El artículo 54 de la Constitución encomienda a una ley orgánica la regulación de una institución. ¿Cuál?",
    "o": [
     "El Tribunal de Cuentas",
     "El Defensor del Pueblo",
     "El Consejo de Estado",
     "El Consejo General del Poder Judicial"
    ],
    "c": 1,
    "e": "Art. 54 CE: una ley orgánica regulará la institución del Defensor del Pueblo, alto comisionado de las Cortes Generales para la defensa de los derechos comprendidos en el Título I. Su función es supervisar la actividad de las Administraciones y atender quejas ciudadanas, por ejemplo ante retrasos injustificados en la resolución de un expediente administrativo."
   },
   {
    "d": "dificil",
    "q": "Conforme al artículo 55.1 de la Constitución, los derechos que pueden suspenderse durante la declaración de estado de excepción o de sitio incluyen, entre otros, los reconocidos en los artículos:",
    "o": [
     "17, 18 (apartados 2 y 3), 19, 20 (apartados 1 a) y d), y 5), 21 y 28.2",
     "10, 14 y 23 en todo caso",
     "Solo el artículo 14, salvo que una norma con rango de ley disponga lo contrario",
     "Todos los derechos fundamentales sin excepción"
    ],
    "c": 0,
    "e": "Art. 55.1 CE recoge la lista de derechos susceptibles de suspensión (entre ellos los arts. 17, 18.2 y 3, 19, 20.1 a) y d) y 20.5, 21, 28.2 y 37.2) cuando se declare el estado de excepción o de sitio. Se trata de una suspensión general, aplicable a toda la población afectada por la declaración, distinta de la suspensión individual del art. 55.2, que solo afecta a personas concretas investigadas por terrorismo."
   },
   {
    "d": "facil",
    "q": "Según el artículo 137 de la Constitución, ¿en qué entidades se organiza territorialmente el Estado?",
    "o": [
     "Municipios, provincias y las Comunidades Autónomas que se constituyan",
     "Únicamente en provincias",
     "Solo en Comunidades Autónomas",
     "Regiones militares, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 137 CE: el Estado se organiza territorialmente en municipios, en provincias y en las Comunidades Autónomas que se constituyan, gozando todas estas entidades de autonomía para la gestión de sus intereses. Este es el precepto que da pie a los tres niveles de Administración territorial en España: local, provincial y autonómico."
   },
   {
    "d": "media",
    "q": "El artículo 140 de la Constitución garantiza la autonomía de los municipios. ¿A quién corresponde su gobierno y administración?",
    "o": [
     "A los Ayuntamientos, integrados por Alcaldes y Concejales",
     "Exclusivamente al Alcalde",
     "A la Diputación Provincial",
     "Al Delegado del Gobierno, salvo disposición expresa en contrario"
    ],
    "c": 0,
    "e": "Art. 140 CE: el gobierno y administración de los municipios corresponde a sus respectivos Ayuntamientos, integrados por los Alcaldes y los Concejales, elegidos estos por sufragio universal, igual, libre, directo y secreto. Por ejemplo, en las elecciones municipales los vecinos votan directamente a los concejales, y estos eligen después al alcalde."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 148.1 de la Constitución, una de las materias en las que las Comunidades Autónomas pueden asumir competencias es:",
    "o": [
     "El fomento de la cultura, de la investigación y, en su caso, de la enseñanza de la lengua de la Comunidad Autónoma",
     "La política exterior del Estado, salvo que una norma con rango de ley disponga lo contrario, atendiendo a las circunstancias del caso",
     "La emisión de moneda, salvo que una norma con rango de ley disponga lo contrario",
     "La defensa nacional, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 148.1.17ª CE: las Comunidades Autónomas podrán asumir competencias en el fomento de la cultura, de la investigación y, en su caso, de la enseñanza de la lengua de la Comunidad Autónoma. Es la base constitucional que permite a Galicia regular la enseñanza y promoción del gallego en el sistema educativo."
   },
   {
    "d": "facil",
    "q": "Según el artículo 9 del Estatuto de Autonomía de Galicia, ¿a través de qué instituciones se ejercen los poderes de la Comunidad Autónoma?",
    "o": [
     "El Parlamento, la Junta y su Presidente",
     "Solo el Parlamento",
     "El Consello de la Xunta y el Valedor do Pobo",
     "Los Ayuntamientos gallegos"
    ],
    "c": 0,
    "e": "Art. 9.Uno del Estatuto (LO 1/1981, BOE núm. 101, de 28/04/1981): los poderes de la Comunidad Autónoma se ejercen a través del Parlamento, de la Junta y de su Presidente. Estas tres instituciones son, respectivamente, el poder legislativo, el poder ejecutivo colegiado y la máxima representación del ejecutivo gallego."
   },
   {
    "d": "media",
    "q": "Entre las funciones del Parlamento de Galicia que enumera el artículo 10 del Estatuto se encuentra:",
    "o": [
     "Ejercer la potestad legislativa de la Comunidad Autónoma",
     "Nombrar directamente a los jueces gallegos",
     "Aprobar los Presupuestos Generales del Estado",
     "Declarar el estado de excepción, con las matizaciones oportunas"
    ],
    "c": 0,
    "e": "Art. 10.Uno.a) del Estatuto: corresponde al Parlamento de Galicia ejercer la potestad legislativa de la Comunidad Autónoma, además de aprobar los presupuestos, controlar la acción de la Junta y elegir al Presidente. Es el órgano que, por ejemplo, aprobó la Ley 2/2015 del empleo público de Galicia."
   },
   {
    "d": "facil",
    "q": "¿Por cuánto tiempo es elegido el Parlamento de Galicia según el artículo 11 del Estatuto?",
    "o": [
     "Dos años",
     "Cuatro años",
     "Cinco años",
     "Seis años"
    ],
    "c": 1,
    "e": "Art. 11.Dos del Estatuto: el Parlamento será elegido por un plazo de cuatro años, de acuerdo con un sistema de representación proporcional, que garantiza que el número de escaños de cada partido sea, aproximadamente, proporcional a los votos obtenidos."
   },
   {
    "d": "media",
    "q": "Según el artículo 11.Cinco del Estatuto, ¿entre qué número de diputados debe fijarse el Parlamento de Galicia?",
    "o": [
     "Entre 40 y 60",
     "Entre 60 y 80",
     "Entre 80 y 100",
     "Entre 100 y 120"
    ],
    "c": 1,
    "e": "Art. 11.Cinco del Estatuto: una ley del Parlamento de Galicia fijará su número de miembros, entre sesenta y ochenta, cifra que se distribuye entre las cuatro provincias gallegas conforme a la ley electoral autonómica."
   },
   {
    "d": "facil",
    "q": "¿Quién elige al Presidente de la Junta de Galicia y quién lo nombra, según el artículo 15 del Estatuto?",
    "o": [
     "Es elegido por el Parlamento de Galicia entre sus miembros y nombrado por el Rey",
     "Es elegido directamente por sufragio universal",
     "Lo nombra el Gobierno de España, en los términos que se determinen reglamentariamente",
     "Lo designa el Delegado del Gobierno"
    ],
    "c": 0,
    "e": "Art. 15.Dos del Estatuto: el Presidente de la Junta será elegido por el Parlamento Gallego de entre sus miembros y será nombrado por el Rey. Este doble paso (elección parlamentaria + nombramiento regio) es el mismo esquema que sigue el nombramiento del Presidente del Gobierno estatal."
   },
   {
    "d": "media",
    "q": "Según el artículo 16 del Estatuto, ¿cómo está compuesta la Junta de Galicia?",
    "o": [
     "Por el Presidente, Vicepresidente o Vicepresidentes y los Consejeros",
     "Solo por el Presidente, sin perjuicio de la normativa sectorial aplicable",
     "Por el Presidente y el Valedor do Pobo",
     "Por los alcaldes de las cuatro provincias"
    ],
    "c": 0,
    "e": "Art. 16.Dos del Estatuto: la Junta de Galicia está compuesta por el Presidente, Vicepresidente o Vicepresidentes, en su caso, y los Consejeros, que son quienes dirigen cada una de las consejerías (por ejemplo, la Consejería de Educación, competente en materia de Educación Infantil)."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 21 del Estatuto, ¿qué órgano culmina la organización judicial en el ámbito territorial de Galicia?",
    "o": [
     "El Tribunal Superior de Justicia de Galicia",
     "El Tribunal Supremo, con las matizaciones oportunas",
     "El Tribunal Constitucional",
     "La Audiencia Nacional"
    ],
    "c": 0,
    "e": "Art. 21 del Estatuto: el Tribunal Superior de Justicia de Galicia es el órgano jurisdiccional en que culmina la organización judicial en su ámbito territorial, sin perjuicio de la jurisdicción que corresponde al Tribunal Supremo, que sigue siendo superior en todo el territorio nacional."
   },
   {
    "d": "media",
    "q": "Según el artículo 24.1 del Estatuto, a instancia de la Comunidad Autónoma, ¿qué se convoca para cubrir plazas vacantes en Galicia de Magistrados, Jueces y Secretarios Judiciales?",
    "o": [
     "Concursos y oposiciones, de acuerdo con la Ley Orgánica del Poder Judicial",
     "Elecciones directas",
     "Sorteos públicos, salvo que una norma con rango de ley disponga lo contrario",
     "Nombramientos discrecionales de la Junta"
    ],
    "c": 0,
    "e": "Art. 24.1 del Estatuto: a instancia de la Comunidad Autónoma se convocarán los concursos y oposiciones para cubrir plazas vacantes en Galicia de Magistrados, Jueces, Secretarios Judiciales y demás personal, conforme a la LOPJ. Esta previsión es la razón por la que Galicia tiene capacidad de intervenir en la convocatoria de estos procesos selectivos en su territorio."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 25 del Estatuto, en la resolución de concursos y oposiciones de la Administración de Justicia en Galicia, ¿qué se considera mérito preferente?",
    "o": [
     "La especialización en Derecho gallego y el conocimiento del idioma del país",
     "Únicamente la antigüedad",
     "Haber nacido en Galicia, salvo que una norma con rango de ley disponga lo contrario",
     "Superar un examen de idiomas extranjeros"
    ],
    "c": 0,
    "e": "Art. 25 del Estatuto: será mérito preferente la especialización en Derecho gallego y el conocimiento del idioma del país en la resolución de concursos y oposiciones de la Administración de Justicia en Galicia, lo que en la práctica valora positivamente, por ejemplo, acreditar el CELGA en estos procesos."
   },
   {
    "d": "facil",
    "q": "Según el artículo 27 del Estatuto, ¿en qué materias tiene la Comunidad Autónoma gallega competencia exclusiva, entre otras?",
    "o": [
     "Ordenación del territorio y del litoral, urbanismo y vivienda",
     "Defensa y Fuerzas Armadas",
     "Relaciones internacionales",
     "Sistema monetario, de acuerdo con el procedimiento correspondiente"
    ],
    "c": 0,
    "e": "Art. 27.Tres del Estatuto: corresponde a la Comunidad Autónoma gallega la competencia exclusiva sobre ordenación del territorio y del litoral, urbanismo y vivienda. «Competencia exclusiva» significa que ni el Estado puede legislar sobre esta materia salvo en los aspectos que la propia Constitución le reserva."
   },
   {
    "d": "media",
    "q": "El artículo 27.Veinte del Estatuto atribuye a Galicia competencia exclusiva sobre:",
    "o": [
     "La promoción y la enseñanza de la lengua gallega",
     "La política exterior",
     "El régimen aduanero, salvo disposición expresa en contrario",
     "La legislación mercantil"
    ],
    "c": 0,
    "e": "Art. 27.Veinte del Estatuto: es competencia exclusiva de la Comunidad Autónoma gallega la promoción y la enseñanza de la lengua gallega. Esta competencia es la base normativa de, por ejemplo, los decretos que regulan el uso del gallego en los centros de Educación Infantil."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 31 del Estatuto, ¿qué competencia tiene la Comunidad Autónoma gallega en materia de enseñanza?",
    "o": [
     "La competencia plena en la regulación y administración de la enseñanza en toda su extensión, niveles y grados",
     "Ninguna competencia, es exclusiva del Estado, salvo que una norma con rango de ley disponga lo contrario",
     "Solo la gestión de los comedores escolares, salvo que una norma con rango de ley disponga lo contrario",
     "Solo la enseñanza universitaria, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 31 del Estatuto: es de la competencia plena de la Comunidad Autónoma gallega la regulación y administración de la enseñanza en toda su extensión, niveles, grados, modalidades y especialidades, sin perjuicio del artículo 27 CE y de la alta inspección del Estado. Por eso el currículo de Educación Infantil en Galicia se aprueba mediante decreto autonómico (como el Decreto 150/2022), dentro del marco básico estatal."
   },
   {
    "d": "media",
    "q": "Según el artículo 33.1 del Estatuto, ¿qué corresponde a la Comunidad Autónoma en materia de sanidad interior?",
    "o": [
     "El desarrollo legislativo y la ejecución de la legislación básica del Estado",
     "Nada, es competencia exclusiva estatal",
     "Solo la inspección farmacéutica, sin perjuicio de la normativa sectorial aplicable",
     "La fijación de los precios de los medicamentos"
    ],
    "c": 0,
    "e": "Art. 33.Uno del Estatuto: corresponde a la Comunidad Autónoma el desarrollo legislativo y la ejecución de la legislación básica del Estado en materia de sanidad interior. Es una competencia compartida: el Estado fija las bases (por ejemplo, la Ley General de Sanidad) y Galicia las desarrolla y ejecuta a través del Sergas."
   },
   {
    "d": "facil",
    "q": "Según el artículo 39 del Estatuto, ¿a quién corresponde la creación y estructuración de la Administración pública gallega?",
    "o": [
     "A la Comunidad Autónoma, dentro de los principios y normas básicas del Estado",
     "Al Gobierno de España en exclusiva",
     "A cada Ayuntamiento por separado",
     "A la Unión Europea, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 39 del Estatuto: corresponde a la Comunidad Autónoma la creación y estructuración de su propia Administración pública, dentro de los principios generales y normas básicas del Estado. Esta es la base que permite a Galicia organizar sus propias consejerías, cuerpos y escalas de funcionarios, como el cuerpo docente de maestros de Educación Infantil."
   },
   {
    "d": "media",
    "q": "Según el artículo 40 del Estatuto, mediante ley de Galicia se puede, entre otras cosas:",
    "o": [
     "Reconocer la comarca como entidad local con personalidad jurídica y demarcación propia",
     "Suprimir automáticamente los municipios",
     "Eliminar las parroquias rurales, salvo que una norma con rango de ley disponga lo contrario",
     "Crear nuevas provincias, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 40.Uno del Estatuto: por ley de Galicia se podrá reconocer la comarca como entidad local con personalidad jurídica y demarcación propia, sin que ello suponga necesariamente la supresión de los municipios que la integren. La comarca actuaría así como un nivel intermedio de gestión de servicios entre el municipio y la provincia."
   },
   {
    "d": "facil",
    "q": "Según el artículo 34 de la Ley 39/2015, los actos administrativos se producirán:",
    "o": [
     "Por el órgano competente, ajustándose a los requisitos y al procedimiento establecido",
     "Por cualquier funcionario que lo desee",
     "Sin necesidad de procedimiento alguno, en los términos que se determinen reglamentariamente",
     "Solo a instancia de parte, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 34.1 Ley 39/2015 (BOE núm. 236, de 02/10/2015): los actos administrativos se producirán por el órgano competente ajustándose a los requisitos y al procedimiento establecido. Si, por ejemplo, un acto de admisión en un centro educativo lo dicta un órgano incompetente, el acto podría ser anulable o incluso nulo, según la gravedad del vicio."
   },
   {
    "d": "media",
    "q": "Según el artículo 35.1 de la Ley 39/2015, ¿cuál de los siguientes actos debe ser motivado?",
    "o": [
     "Los actos que limiten derechos subjetivos o intereses legítimos",
     "Los actos de mero trámite sin relevancia",
     "Todos los actos, sin excepción alguna",
     "Solo los actos verbales, de acuerdo con el procedimiento correspondiente"
    ],
    "c": 0,
    "e": "Art. 35.1.a) Ley 39/2015: deben ser motivados, con sucinta referencia de hechos y fundamentos de derecho, los actos que limiten derechos subjetivos o intereses legítimos, entre otros supuestos. Un ejemplo sería la denegación de una plaza escolar: la resolución debe explicar por qué esa solicitud no cumple los criterios de baremo aplicados."
   },
   {
    "d": "facil",
    "q": "¿Cómo deben producirse, con carácter general, los actos administrativos según el artículo 36.1 de la Ley 39/2015?",
    "o": [
     "Por escrito, a través de medios electrónicos, salvo que su naturaleza exija otra forma",
     "Siempre de forma verbal, salvo que una norma con rango de ley disponga lo contrario",
     "Solo mediante fax, salvo que una norma con rango de ley disponga lo contrario",
     "Nunca por medios electrónicos, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 36.1 Ley 39/2015: los actos administrativos se producirán por escrito a través de medios electrónicos, a menos que su naturaleza exija otra forma más adecuada de expresión y constancia (por ejemplo, una señal de tráfico o una orden verbal en una emergencia)."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 39.3 de la Ley 39/2015, ¿en qué caso puede otorgarse eficacia retroactiva a un acto administrativo?",
    "o": [
     "Cuando se dicte en sustitución de un acto anulado o produzca efectos favorables al interesado, si los supuestos de hecho ya existían",
     "Nunca, la retroactividad está prohibida en todo caso, salvo que una norma con rango de ley disponga lo contrario, de forma excepcional y motivada",
     "Solo si lo pide el interesado por escrito, salvo que una norma con rango de ley disponga lo contrario",
     "Solo en procedimientos sancionadores, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 39.3 Ley 39/2015: excepcionalmente podrá otorgarse eficacia retroactiva a los actos cuando se dicten en sustitución de actos anulados o produzcan efectos favorables al interesado, siempre que los supuestos de hecho necesarios existieran ya en la fecha a que se retrotraiga la eficacia. Por ejemplo, si se anula una resolución que denegó una beca y se dicta una nueva reconociéndola, puede aplicarse desde la fecha de la solicitud original."
   },
   {
    "d": "media",
    "q": "Según el artículo 40.2 de la Ley 39/2015, ¿en qué plazo debe cursarse la notificación de una resolución o acto administrativo?",
    "o": [
     "Dentro del plazo de diez días a partir de la fecha en que el acto haya sido dictado",
     "En el plazo de un mes, salvo que una norma con rango de ley disponga lo contrario",
     "Sin plazo determinado, salvo que una norma con rango de ley disponga lo contrario",
     "En 24 horas, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 40.2 Ley 39/2015: toda notificación deberá ser cursada dentro del plazo de diez días a partir de la fecha en que el acto haya sido dictado. Este plazo busca evitar que la Administración retrase indebidamente la comunicación de sus decisiones a los interesados."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 44 de la Ley 39/2015, cuando los interesados sean desconocidos o no se pudiera practicar la notificación, ¿cómo se hará esta?",
    "o": [
     "Mediante un anuncio publicado en el «Boletín Oficial del Estado»",
     "No se notifica en ningún caso",
     "Solo mediante un edicto en el tablón municipal, sin más trámite",
     "A través de una llamada telefónica"
    ],
    "c": 0,
    "e": "Art. 44 Ley 39/2015: cuando los interesados sean desconocidos, se ignore el lugar de la notificación o no se hubiese podido practicar, la notificación se hará por medio de un anuncio publicado en el «Boletín Oficial del Estado». Es el mecanismo subsidiario que garantiza la publicidad del acto cuando falla la notificación individual."
   },
   {
    "d": "media",
    "q": "Según el artículo 47.1.a) de la Ley 39/2015, son nulos de pleno derecho los actos que:",
    "o": [
     "Lesionen los derechos y libertades susceptibles de amparo constitucional",
     "Contengan un error material subsanable, salvo disposición expresa en contrario",
     "Se dicten fuera de plazo por razones justificadas",
     "Carezcan de firma electrónica avanzada"
    ],
    "c": 0,
    "e": "Art. 47.1.a) Ley 39/2015: son nulos de pleno derecho los actos de las Administraciones Públicas que lesionen los derechos y libertades susceptibles de amparo constitucional. Por ejemplo, sería nulo de pleno derecho un acto que discrimine a un aspirante en una oposición por razón de sexo, al vulnerar el art. 14 CE."
   },
   {
    "d": "media",
    "q": "Según el artículo 48.1 de la Ley 39/2015, son anulables los actos de la Administración que incurran en:",
    "o": [
     "Cualquier infracción del ordenamiento jurídico, incluida la desviación de poder",
     "Solo defectos de forma insubsanables",
     "Solo errores aritméticos, salvo que una norma con rango de ley disponga lo contrario",
     "Ninguna infracción, son siempre válidos"
    ],
    "c": 0,
    "e": "Art. 48.1 Ley 39/2015: son anulables los actos de la Administración que incurran en cualquier infracción del ordenamiento jurídico, incluso la desviación de poder. La desviación de poder consiste en usar una potestad administrativa para un fin distinto del previsto por la norma, aunque formalmente se respete el procedimiento."
   },
   {
    "d": "facil",
    "q": "Según el artículo 53.1.a) de la Ley 39/2015, los interesados en un procedimiento administrativo tienen derecho a:",
    "o": [
     "Conocer, en cualquier momento, el estado de la tramitación de los procedimientos en los que sean interesados",
     "Modificar unilateralmente la resolución del expediente, salvo que una norma con rango de ley disponga lo contrario",
     "Elegir al instructor del procedimiento, salvo que una norma con rango de ley disponga lo contrario",
     "Vetar la participación de otros interesados, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 53.1.a) Ley 39/2015: los interesados tienen derecho a conocer, en cualquier momento, el estado de la tramitación de los procedimientos en los que tengan la condición de interesados. En la práctica, esto permite, por ejemplo, a un aspirante en un proceso selectivo consultar en qué fase se encuentra su solicitud."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 53.1.c) de la Ley 39/2015, los interesados tienen derecho:",
    "o": [
     "A no presentar documentos originales, salvo que excepcionalmente la normativa reguladora establezca lo contrario",
     "A presentar siempre documentos originales sin excepción, salvo que una norma con rango de ley disponga lo contrario",
     "A no aportar ningún documento nunca, salvo que una norma con rango de ley disponga lo contrario",
     "A exigir copia sellada en todo caso, aunque no la pidan"
    ],
    "c": 0,
    "e": "Art. 53.1.c) Ley 39/2015: los interesados tienen derecho a no presentar documentos originales salvo que, excepcionalmente, la normativa reguladora aplicable establezca lo contrario. Esto agiliza los trámites, ya que basta con copias, salvo que una norma concreta exija cotejo con el original."
   },
   {
    "d": "media",
    "q": "Según el artículo 77.2 de la Ley 39/2015, el período de prueba del procedimiento administrativo tendrá un plazo:",
    "o": [
     "No superior a treinta días ni inferior a diez",
     "Fijo de quince días en todo caso",
     "No superior a seis meses",
     "No inferior a un mes, con las matizaciones oportunas"
    ],
    "c": 0,
    "e": "Art. 77.2 Ley 39/2015: el instructor acordará la apertura de un período de prueba por un plazo no superior a treinta días ni inferior a diez, en el que se practicarán las pruebas que se consideren pertinentes para resolver el procedimiento (por ejemplo, informes técnicos o testimonios)."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 77.3 de la Ley 39/2015, el instructor del procedimiento solo podrá rechazar las pruebas propuestas por los interesados cuando:",
    "o": [
     "Sean manifiestamente improcedentes o innecesarias, mediante resolución motivada",
     "Lo decida sin necesidad de justificación",
     "Superen un número determinado de pruebas",
     "El interesado no pague una tasa, en los términos que se determinen reglamentariamente"
    ],
    "c": 0,
    "e": "Art. 77.3 Ley 39/2015: el instructor solo podrá rechazar las pruebas propuestas cuando sean manifiestamente improcedentes o innecesarias, mediante resolución motivada, que además debe notificarse a los interesados para que puedan, en su caso, recurrirla."
   },
   {
    "d": "media",
    "q": "Según el artículo 82.2 de la Ley 39/2015, en el trámite de audiencia los interesados podrán alegar y presentar documentos en un plazo:",
    "o": [
     "No inferior a diez días ni superior a quince",
     "Fijo de veinte días, con las matizaciones oportunas",
     "No superior a cinco días",
     "Sin plazo, indefinido"
    ],
    "c": 0,
    "e": "Art. 82.2 Ley 39/2015: en el trámite de audiencia, los interesados, en un plazo no inferior a diez días ni superior a quince, podrán alegar y presentar los documentos que estimen pertinentes. Es el momento en que, por ejemplo, un interesado puede aportar pruebas adicionales antes de que se dicte la resolución final."
   },
   {
    "d": "facil",
    "q": "Según el artículo 84.1 de la Ley 39/2015, ¿cuáles son, entre otras, las formas de terminación de un procedimiento administrativo?",
    "o": [
     "La resolución, el desistimiento y la renuncia al derecho",
     "Solo la resolución expresa, salvo disposición expresa en contrario",
     "Solo el silencio administrativo",
     "Únicamente el recurso de alzada"
    ],
    "c": 0,
    "e": "Art. 84.1 Ley 39/2015: pondrán fin al procedimiento la resolución, el desistimiento, la renuncia al derecho, entre otras causas de terminación previstas en el artículo (como la declaración de caducidad o la imposibilidad material de continuarlo). El desistimiento se refiere a abandonar el procedimiento; la renuncia, a abandonar el derecho mismo."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 106.1 de la Ley 39/2015, para declarar de oficio la nulidad de actos que han puesto fin a la vía administrativa, la Administración necesita:",
    "o": [
     "Previo dictamen favorable del Consejo de Estado u órgano consultivo equivalente de la Comunidad Autónoma",
     "Solo la firma del funcionario instructor, salvo que una norma con rango de ley disponga lo contrario",
     "Autorización judicial previa en todo caso, salvo que una norma con rango de ley disponga lo contrario",
     "Nada, puede declararla libremente sin trámites, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 106.1 Ley 39/2015: las Administraciones Públicas, en cualquier momento, previo dictamen favorable del Consejo de Estado u órgano consultivo equivalente de la Comunidad Autónoma, declararán de oficio la nulidad de los actos que hayan puesto fin a la vía administrativa. Este dictamen previo es una garantía que evita que la Administración anule sus propios actos sin control externo."
   },
   {
    "d": "media",
    "q": "Según el artículo 107.2 de la Ley 39/2015, ¿en qué plazo debe adoptarse la declaración de lesividad de un acto anulable?",
    "o": [
     "Antes de que transcurran cuatro años desde que se dictó el acto",
     "En cualquier momento, sin límite temporal",
     "Antes de un mes desde el acto",
     "Antes de diez días, sin perjuicio de la normativa sectorial aplicable"
    ],
    "c": 0,
    "e": "Art. 107.2 Ley 39/2015: la declaración de lesividad no podrá adoptarse una vez transcurridos cuatro años desde que se dictó el acto administrativo. Pasado ese plazo, la Administración ya no puede impugnar ante los tribunales un acto favorable propio, aunque lo considere ilegal, en garantía de la seguridad jurídica del interesado."
   },
   {
    "d": "media",
    "q": "Según el artículo 112.1 de la Ley 39/2015, ¿qué recursos administrativos pueden interponer los interesados contra resoluciones y actos de trámite cualificados?",
    "o": [
     "El recurso de alzada y el potestativo de reposición",
     "Solo el recurso contencioso-administrativo",
     "Únicamente la reclamación económico-administrativa",
     "Solo el recurso de súplica"
    ],
    "c": 0,
    "e": "Art. 112.1 Ley 39/2015: contra las resoluciones y ciertos actos de trámite podrán interponerse por los interesados los recursos de alzada y potestativo de reposición. El de alzada se dirige al órgano superior jerárquico; el de reposición, ante el mismo órgano que dictó el acto, y es voluntario antes de acudir a los tribunales."
   },
   {
    "d": "facil",
    "q": "Según el artículo 114.1.a) de la Ley 39/2015, ¿qué tipo de resoluciones ponen fin a la vía administrativa?",
    "o": [
     "Las resoluciones de los recursos de alzada",
     "Solo las sentencias judiciales",
     "Las resoluciones de mero trámite",
     "Ninguna resolución administrativa pone fin a la vía"
    ],
    "c": 0,
    "e": "Art. 114.1.a) Ley 39/2015: ponen fin a la vía administrativa, entre otras, las resoluciones de los recursos de alzada. Una vez resuelto el recurso de alzada, ya solo cabe recurrir ante la jurisdicción contencioso-administrativa."
   },
   {
    "d": "facil",
    "q": "Según el artículo 20.2 de la Ley 2/2015, del empleo público de Galicia, ¿en qué clases se clasifican los empleados públicos?",
    "o": [
     "Personal funcionario de carrera, funcionario interino, laboral y eventual",
     "Solo funcionarios de carrera, sin perjuicio de la normativa sectorial aplicable",
     "Funcionarios y contratistas externos",
     "Personal directivo y personal de base"
    ],
    "c": 0,
    "e": "Art. 20.2 Ley 2/2015 (DOG núm. 82, de 04/05/2015; BOE núm. 123, de 23/05/2015): los empleados públicos se clasifican en personal funcionario de carrera, personal funcionario interino, personal laboral y personal eventual. Un maestro con plaza fija en un CEIP gallego es funcionario de carrera; uno que cubre una baja, funcionario interino."
   },
   {
    "d": "media",
    "q": "Según el artículo 21 de la Ley 2/2015, el personal funcionario de carrera se caracteriza por estar vinculado a la Administración mediante:",
    "o": [
     "Una relación estatutaria regulada por el derecho administrativo, de carácter permanente",
     "Un contrato laboral indefinido, salvo que una norma con rango de ley disponga lo contrario",
     "Una relación mercantil, salvo que una norma con rango de ley disponga lo contrario",
     "Un nombramiento temporal siempre revocable"
    ],
    "c": 0,
    "e": "Art. 21 Ley 2/2015: tienen la condición de personal funcionario de carrera las personas vinculadas a la Administración por una relación estatutaria regulada por el derecho administrativo, de carácter permanente. Se diferencia del personal laboral, cuya relación se rige por el derecho laboral y un contrato de trabajo."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 23.2.a) de la Ley 2/2015, ¿cuál es el plazo máximo, con carácter general, para el nombramiento de personal funcionario interino por existencia de puesto vacante?",
    "o": [
     "Tres años",
     "Un año",
     "Seis meses",
     "Diez años"
    ],
    "c": 0,
    "e": "Art. 23.2.a) Ley 2/2015: el nombramiento de personal funcionario interino por existencia de puestos vacantes tiene un plazo máximo de tres años, en los términos previstos en la ley, transcurrido el cual debe estar resuelto el proceso selectivo de cobertura definitiva de esa plaza."
   },
   {
    "d": "media",
    "q": "Según el artículo 23.2.d) de la Ley 2/2015, el nombramiento de personal funcionario interino por exceso o acumulación de tareas tiene un plazo máximo de:",
    "o": [
     "Nueve meses dentro de un período de dieciocho meses",
     "Tres años",
     "Un mes, sin perjuicio de la normativa sectorial aplicable",
     "Cinco años"
    ],
    "c": 0,
    "e": "Art. 23.2.d) Ley 2/2015: el exceso o acumulación de tareas, de carácter excepcional y circunstancial, permite el nombramiento de interino por un plazo máximo de nueve meses dentro de un período de dieciocho meses. Un ejemplo sería reforzar temporalmente un centro educativo ante una matriculación extraordinaria."
   },
   {
    "d": "facil",
    "q": "Según el artículo 86.1 de la Ley 2/2015, ¿qué derecho se garantiza al personal funcionario de carrera?",
    "o": [
     "El derecho a la movilidad voluntaria",
     "El derecho a elegir libremente su horario sin negociación",
     "El derecho a un ascenso automático anual",
     "El derecho a la doble jornada retribuida"
    ],
    "c": 0,
    "e": "Art. 86.1 Ley 2/2015: se garantiza el derecho a la movilidad voluntaria del personal funcionario de carrera, de acuerdo con los procedimientos previstos en la ley, lo que permite, por ejemplo, a un maestro trasladarse de centro mediante los concursos de traslados periódicos."
   },
   {
    "d": "media",
    "q": "Según el artículo 88.1 de la Ley 2/2015, los puestos de trabajo reservados al personal funcionario de carrera se proveerán de forma ordinaria por:",
    "o": [
     "Concurso, ordinario o específico, o libre designación con convocatoria pública",
     "Sorteo entre los aspirantes",
     "Antigüedad exclusivamente, salvo que una norma con rango de ley disponga lo contrario",
     "Decisión discrecional sin convocatoria"
    ],
    "c": 0,
    "e": "Art. 88.1 Ley 2/2015: los puestos reservados al personal funcionario de carrera se proveerán de forma ordinaria por concurso, ordinario o específico, o de libre designación con convocatoria pública. El concurso valora méritos objetivos; la libre designación, la confianza para puestos directivos, siempre con convocatoria pública en ambos casos."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 89.1 de la Ley 2/2015, el concurso, procedimiento normal de provisión de puestos, consiste en:",
    "o": [
     "La valoración de los méritos y capacidades, y en su caso aptitudes, conforme a las bases de la convocatoria",
     "Un examen tipo test eliminatorio, salvo que una norma con rango de ley disponga lo contrario",
     "Una entrevista personal exclusivamente, salvo que una norma con rango de ley disponga lo contrario",
     "Un sorteo público entre candidatos, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 89.1 Ley 2/2015: el concurso es el procedimiento normal de provisión de puestos de trabajo y consiste en la valoración de los méritos y capacidades, y en su caso aptitudes, de los candidatos conforme a las bases de la convocatoria (por ejemplo, antigüedad, formación o experiencia en el puesto)."
   },
   {
    "d": "media",
    "q": "Según el artículo 105 de la Ley 2/2015, ¿quién determina la jornada ordinaria de trabajo del personal funcionario?",
    "o": [
     "Cada Administración pública, previa negociación con la representación del personal",
     "El propio empleado público de forma individual, con las excepciones legalmente previstas",
     "Únicamente el Parlamento de Galicia mediante ley",
     "La Unión Europea, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 105 Ley 2/2015: cada Administración pública determinará la jornada ordinaria y las especiales de trabajo del personal funcionario, previa negociación con la representación del personal, es decir, con los sindicatos que participan en las mesas de negociación."
   },
   {
    "d": "facil",
    "q": "Según el artículo 132.1 de la Ley 2/2015, ¿cuál es la duración mínima de las vacaciones retribuidas del personal funcionario por año completo de servicio?",
    "o": [
     "Veintidós días hábiles anuales",
     "Quince días naturales",
     "Treinta días hábiles, como regla general",
     "Un mes natural completo"
    ],
    "c": 0,
    "e": "Art. 132.1 Ley 2/2015: el personal funcionario tiene derecho, por año completo de servicios, a vacaciones retribuidas de, como mínimo, veintidós días hábiles anuales, que se reducen proporcionalmente si el tiempo de servicio en el año es inferior al año completo."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 132.2 de la Ley 2/2015, a efectos del cómputo de vacaciones, ¿qué día de la semana no se considera hábil?",
    "o": [
     "El sábado",
     "El domingo",
     "El lunes",
     "El viernes"
    ],
    "c": 0,
    "e": "Art. 132.2 Ley 2/2015: a efectos del cómputo de vacaciones no se consideran como días hábiles los sábados, sin perjuicio de las adaptaciones para jornadas especiales. Esto significa que, de lunes a viernes, cada día de vacaciones consume un día hábil, pero los sábados no cuentan."
   },
   {
    "d": "media",
    "q": "Según el artículo 164.1 de la Ley 2/2015, ¿cuál de estas es una de las situaciones administrativas del personal funcionario de carrera?",
    "o": [
     "Servicios especiales",
     "Baja voluntaria definitiva sin retorno",
     "Contrato temporal",
     "Cesión ilegal"
    ],
    "c": 0,
    "e": "Art. 164.1 Ley 2/2015: el personal funcionario de carrera puede hallarse en servicio activo, servicios especiales, servicio en otras administraciones públicas, excedencia voluntaria, excedencia forzosa o suspensión de funciones. Cada situación tiene efectos distintos sobre derechos como la retribución o la reserva de plaza."
   },
   {
    "d": "facil",
    "q": "Según el artículo 166.1 de la Ley 2/2015, están en situación de servicio activo:",
    "o": [
     "Las personas que prestan servicios como funcionarios de carrera y no les corresponde estar en otra situación",
     "Solo el personal funcionario interino, salvo que una norma con rango de ley disponga lo contrario",
     "Solo el personal eventual, salvo que una norma con rango de ley disponga lo contrario",
     "El personal jubilado, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 166.1 Ley 2/2015: están en situación de servicio activo las personas que presten servicios en su condición de funcionario de carrera, siempre que no les corresponda quedar en otra situación. Es la situación habitual y mayoritaria: un maestro que está trabajando normalmente en su centro está en servicio activo."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 167 de la Ley 2/2015, el personal funcionario de carrera será declarado en situación de servicios especiales, entre otros casos, cuando:",
    "o": [
     "Sea designado miembro del Gobierno, del Consello de la Xunta o de instituciones de la Unión Europea",
     "Solicite unas vacaciones, salvo que una norma con rango de ley disponga lo contrario",
     "Sea trasladado de oficina dentro del mismo edificio, en los términos que se determinen reglamentariamente",
     "Se jubile de forma anticipada, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 167.c) Ley 2/2015: pasa a servicios especiales el funcionario designado miembro del Gobierno, del Consello de la Xunta, de los órganos de gobierno de otras CCAA o de instituciones de la Unión Europea, entre otros supuestos. Durante esta situación se le reserva el puesto y computa a efectos de antigüedad, aunque no lo esté desempeñando."
   },
   {
    "d": "media",
    "q": "Según el artículo 102 de la Ley 2/2015, se prevé un traslado especial por motivos de:",
    "o": [
     "Violencia de género o de violencia sexual",
     "Cambio de residencia por gusto personal",
     "Ascenso de categoría profesional",
     "Reducción presupuestaria"
    ],
    "c": 0,
    "e": "Art. 102 Ley 2/2015 regula el traslado por motivos de violencia de género o de violencia sexual como garantía específica para el personal funcionario afectado, permitiéndole cambiar de puesto de trabajo, incluso en otra localidad, con carácter prioritario y sin necesidad de esperar a una convocatoria ordinaria."
   },
   {
    "d": "facil",
    "q": "Según el artículo 133 de la Ley 2/2015, el régimen de jornada, permisos, licencias y vacaciones del personal laboral se rige por:",
    "o": [
     "Lo dispuesto en la propia ley y en la legislación laboral correspondiente",
     "Exclusivamente el Estatuto Básico del Empleado Público",
     "Normativa militar, salvo que una norma con rango de ley disponga lo contrario",
     "Un reglamento europeo directamente aplicable"
    ],
    "c": 0,
    "e": "Art. 133 Ley 2/2015: para el régimen de jornada, permisos, licencias y vacaciones del personal laboral se estará a lo dispuesto en el capítulo correspondiente de la ley y en la legislación laboral aplicable (Estatuto de los Trabajadores y convenio colectivo correspondiente), a diferencia del personal funcionario, que se rige por normativa administrativa."
   },
   {
    "d": "facil",
    "q": "Según el artículo 1 de la LO 3/2018, uno de los objetos de la ley es:",
    "o": [
     "Adaptar el ordenamiento jurídico español al Reglamento (UE) 2016/679 (RGPD)",
     "Regular exclusivamente el comercio electrónico",
     "Sustituir íntegramente el RGPD europeo",
     "Regular la propiedad intelectual, de acuerdo con el procedimiento correspondiente"
    ],
    "c": 0,
    "e": "Art. 1.a) LO 3/2018 (BOE núm. 294, de 06/12/2018): la ley tiene por objeto adaptar el ordenamiento jurídico español al Reglamento (UE) 2016/679, de protección de las personas físicas en cuanto al tratamiento de sus datos personales. El RGPD es directamente aplicable en toda la UE, pero necesita normas nacionales complementarias como esta ley orgánica."
   },
   {
    "d": "media",
    "q": "Según el artículo 2.2.b) de la LO 3/2018, la ley orgánica no será de aplicación, con carácter general, a:",
    "o": [
     "Los tratamientos de datos de personas fallecidas, sin perjuicio de lo establecido en el artículo 3",
     "Los tratamientos de datos de menores de edad, salvo que una norma con rango de ley disponga lo contrario",
     "Los tratamientos realizados por empresas públicas",
     "Los tratamientos de datos sanitarios, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 2.2.b) LO 3/2018: la ley orgánica no será de aplicación a los tratamientos de datos de personas fallecidas, sin perjuicio de lo establecido en el artículo 3, que sí regula el acceso a esos datos por familiares o herederos en determinados casos."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 3.1 de la LO 3/2018, ¿quiénes pueden solicitar el acceso, rectificación o supresión de los datos personales de una persona fallecida?",
    "o": [
     "Las personas vinculadas al fallecido por razones familiares o de hecho, así como sus herederos",
     "Cualquier ciudadano sin límite, salvo que una norma con rango de ley disponga lo contrario",
     "Solo el Ministerio Fiscal, salvo que una norma con rango de ley disponga lo contrario",
     "Nadie puede solicitarlo nunca, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 3.1 LO 3/2018: las personas vinculadas al fallecido por razones familiares o de hecho, así como sus herederos, podrán dirigirse al responsable del tratamiento para solicitar el acceso, rectificación o supresión de sus datos, salvo que el fallecido lo hubiera prohibido expresamente o así lo establezca una ley."
   },
   {
    "d": "media",
    "q": "Según el artículo 4.1 de la LO 3/2018, en relación con el artículo 5.1.d) del RGPD, los datos personales deben ser:",
    "o": [
     "Exactos y, si fuere necesario, actualizados",
     "Anónimos siempre, con las matizaciones oportunas",
     "Cifrados con clave pública",
     "Almacenados de forma indefinida"
    ],
    "c": 0,
    "e": "Art. 4.1 LO 3/2018: conforme al art. 5.1.d) del RGPD, los datos serán exactos y, si fuere necesario, actualizados. Por ejemplo, un centro educativo debe actualizar el domicilio de una familia si esta lo comunica, para que las notificaciones lleguen correctamente."
   },
   {
    "d": "facil",
    "q": "Según el artículo 5.1 de la LO 3/2018, los responsables y encargados del tratamiento, así como todas las personas que intervengan en él, están sujetos a:",
    "o": [
     "El deber de confidencialidad",
     "Ninguna obligación específica",
     "El deber de publicar todos los datos tratados",
     "El deber de informar a la prensa"
    ],
    "c": 0,
    "e": "Art. 5.1 LO 3/2018: los responsables y encargados del tratamiento, así como todas las personas que intervengan en cualquier fase de este, estarán sujetas al deber de confidencialidad del artículo 5.1.f) del RGPD. Este deber se mantiene incluso después de finalizada la relación con el responsable del tratamiento."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 6.1 de la LO 3/2018, se entiende por consentimiento del afectado:",
    "o": [
     "Toda manifestación de voluntad libre, específica, informada e inequívoca por la que acepta el tratamiento de sus datos",
     "Cualquier silencio del interesado, salvo que una norma con rango de ley disponga lo contrario, con carácter general",
     "Una autorización verbal no documentada, salvo que una norma con rango de ley disponga lo contrario, en todo caso",
     "La simple no oposición expresa, salvo que una norma con rango de ley disponga lo contrario, como criterio subsidiario"
    ],
    "c": 0,
    "e": "Art. 6.1 LO 3/2018: se entiende por consentimiento del afectado toda manifestación de voluntad libre, específica, informada e inequívoca por la que este acepta, mediante declaración o clara acción afirmativa, el tratamiento de sus datos. Marcar una casilla de forma activa vale como consentimiento; el silencio o una casilla premarcada, no."
   },
   {
    "d": "media",
    "q": "Según el artículo 7.1 de la LO 3/2018, ¿a partir de qué edad puede un menor prestar por sí mismo su consentimiento para el tratamiento de sus datos personales?",
    "o": [
     "A partir de los catorce años",
     "A partir de los doce años",
     "A partir de los dieciséis años",
     "A partir de los dieciocho años"
    ],
    "c": 0,
    "e": "Art. 7.1 LO 3/2018: el tratamiento de los datos personales de un menor de edad únicamente podrá fundarse en su consentimiento cuando sea mayor de catorce años, salvo excepciones legales. Por debajo de esa edad, es necesario el consentimiento de quien ejerza la patria potestad o tutela."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 7.2 de la LO 3/2018, el tratamiento de datos de menores de catorce años fundado en el consentimiento:",
    "o": [
     "Solo será lícito si consta el consentimiento del titular de la patria potestad o tutela",
     "Es siempre lícito sin necesidad de autorización",
     "Está prohibido en todo caso, incluso con autorización",
     "Requiere autorización judicial previa, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 7.2 LO 3/2018: el tratamiento de datos de menores de catorce años, fundado en el consentimiento, solo será lícito si consta el consentimiento del titular de la patria potestad o tutela, con el alcance que determinen quienes ejerzan la patria potestad o tutela."
   },
   {
    "d": "media",
    "q": "Según el artículo 9.1 de la LO 3/2018, para el tratamiento de datos cuya finalidad principal sea identificar la ideología, afiliación sindical, religión u orientación sexual, el solo consentimiento del afectado:",
    "o": [
     "No bastará para levantar la prohibición del tratamiento, a fin de evitar situaciones discriminatorias",
     "Es siempre suficiente, salvo que una norma con rango de ley disponga lo contrario",
     "No es necesario en ningún caso, salvo que una norma con rango de ley disponga lo contrario",
     "Solo aplica a mayores de 65 años, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 9.1 LO 3/2018: a fin de evitar situaciones discriminatorias, el solo consentimiento del afectado no bastará para levantar la prohibición del tratamiento de datos que identifiquen ideología, afiliación sindical, religión, orientación sexual, creencias u origen racial o étnico, salvo que una disposición adicional de la propia ley lo autorice expresamente en supuestos concretos."
   },
   {
    "d": "facil",
    "q": "Según el artículo 11 de la LO 3/2018, cuando los datos personales se obtienen del propio afectado, el responsable debe cumplir con:",
    "o": [
     "El deber de transparencia e información al afectado",
     "No informarle en ningún caso",
     "Informar solo a la Agencia de Protección de Datos",
     "Publicar los datos en un tablón"
    ],
    "c": 0,
    "e": "Art. 11 LO 3/2018 regula la transparencia e información al afectado cuando los datos personales se obtienen directamente de este: el responsable debe informarle, entre otros extremos, de la finalidad del tratamiento, el plazo de conservación y sus derechos, normalmente mediante una cláusula informativa en el propio formulario."
   },
   {
    "d": "media",
    "q": "Según el artículo 12.6 de la LO 3/2018, ¿quién puede ejercer en nombre y representación de los menores de catorce años los derechos de acceso, rectificación, cancelación u oposición?",
    "o": [
     "Los titulares de la patria potestad",
     "Solo el propio menor",
     "Cualquier familiar mayor de edad",
     "El centro educativo"
    ],
    "c": 0,
    "e": "Art. 12.6 LO 3/2018: los titulares de la patria potestad podrán ejercitar en nombre y representación de los menores de catorce años los derechos de acceso, rectificación, cancelación, oposición o cualesquiera otros que les correspondan, por ejemplo, solicitando la eliminación de una fotografía del menor publicada sin autorización."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 13.3 de la LO 3/2018, ¿en qué plazo se puede considerar repetitivo el ejercicio del derecho de acceso, salvo causa legítima?",
    "o": [
     "Más de una vez durante un período de seis meses",
     "Más de una vez al día, con las matizaciones oportunas",
     "Más de diez veces al año",
     "No existe límite temporal alguno"
    ],
    "c": 0,
    "e": "Art. 13.3 LO 3/2018: se podrá considerar repetitivo el ejercicio del derecho de acceso en más de una ocasión durante el plazo de seis meses, a menos que exista causa legítima para ello, en cuyo caso el responsable puede exigir una compensación por los costes administrativos o negarse a atenderlo."
   },
   {
    "d": "media",
    "q": "Según el artículo 63.1 de la LO 3/2018, las disposiciones del Título VIII se aplican a los procedimientos tramitados por:",
    "o": [
     "La Agencia Española de Protección de Datos",
     "Los juzgados de lo social",
     "El Ministerio de Justicia",
     "Los Ayuntamientos, con las matizaciones oportunas"
    ],
    "c": 0,
    "e": "Art. 63.1 LO 3/2018: las disposiciones de este Título son de aplicación a los procedimientos tramitados por la Agencia Española de Protección de Datos ante reclamaciones o investigaciones de posibles infracciones, por ejemplo cuando una persona denuncia que un centro publicó datos suyos sin consentimiento."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 64.1 de la LO 3/2018, cuando el procedimiento se refiera exclusivamente a la falta de atención de una solicitud de ejercicio de derechos, el plazo para resolver será de:",
    "o": [
     "Seis meses desde la notificación del acuerdo de admisión a trámite",
     "Un mes, salvo que una norma con rango de ley disponga lo contrario",
     "Un año, salvo que una norma con rango de ley disponga lo contrario",
     "Quince días, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 64.1 LO 3/2018: en estos casos, el plazo para resolver el procedimiento será de seis meses a contar desde la fecha en que se notifique al reclamante el acuerdo de admisión a trámite, transcurrido el cual sin resolución expresa se entenderá desestimada la reclamación."
   },
   {
    "d": "media",
    "q": "Según el artículo 65.2 de la LO 3/2018, la Agencia Española de Protección de Datos inadmitirá las reclamaciones presentadas cuando:",
    "o": [
     "No versen sobre cuestiones de protección de datos personales o carezcan manifiestamente de fundamento",
     "Se presenten en horario de mañana, salvo que una norma con rango de ley disponga lo contrario",
     "Provengan de una persona jurídica, salvo que una norma con rango de ley disponga lo contrario",
     "Estén firmadas electrónicamente, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 65.2 LO 3/2018: la AEPD inadmitirá las reclamaciones que no versen sobre cuestiones de protección de datos personales, carezcan manifiestamente de fundamento, sean abusivas o no aporten indicios racionales de infracción, filtro que evita que la Agencia deba tramitar reclamaciones infundadas o repetitivas."
   },
   {
    "d": "facil",
    "q": "Según el artículo 1.1 de la Ley 7/2023, el objeto de la ley es reforzar el compromiso de la Comunidad Autónoma de Galicia con:",
    "o": [
     "La eliminación de la discriminación de las mujeres y la promoción de la igualdad entre mujeres y hombres",
     "La regulación del régimen local gallego, salvo que una norma con rango de ley disponga lo contrario",
     "La ordenación del territorio, salvo que una norma con rango de ley disponga lo contrario",
     "El régimen fiscal autonómico, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 1.1 Ley 7/2023 (DOG núm. 233, de 11/12/2023; BOE núm. 38, de 13/02/2024): la ley refuerza el compromiso de Galicia con la eliminación de la discriminación de las mujeres y la promoción de la igualdad entre mujeres y hombres, actualizando la anterior Ley 7/2004 gallega para la igualdad."
   },
   {
    "d": "media",
    "q": "Según el artículo 4.2 de la Ley 7/2023, se considera discriminación directa por razón de sexo la situación en que una persona:",
    "o": [
     "Sea, haya sido o pudiera ser tratada de manera menos favorable que otra en situación comparable",
     "Reciba un trato idéntico a los demás, salvo que una norma con rango de ley disponga lo contrario",
     "Solicite voluntariamente una excedencia",
     "Participe en un proceso selectivo, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 4.2 Ley 7/2023, en relación con el art. 6.1 de la LO 3/2007: se considera discriminación directa la situación en que una persona sea, haya sido o pudiera ser tratada de manera menos favorable que otra en situación comparable. Por ejemplo, no seleccionar a una candidata para un puesto por estar embarazada sería discriminación directa."
   },
   {
    "d": "media",
    "q": "Según el artículo 4.3 de la Ley 7/2023, existe discriminación indirecta por razón de sexo cuando:",
    "o": [
     "Una disposición, criterio o práctica aparentemente neutros ponen a personas de un sexo en desventaja particular, sin justificación objetiva",
     "Se trata igual a todas las personas sin distinción, salvo que una norma con rango de ley disponga lo contrario",
     "Se aplica una cuota de género razonable, salvo que una norma con rango de ley disponga lo contrario",
     "Existe una diferencia salarial justificada por el puesto, salvo que una norma con rango de ley disponga lo contrario, atendiendo a las circunstancias del caso"
    ],
    "c": 0,
    "e": "Art. 4.3 Ley 7/2023: se considera discriminación indirecta la situación en que una disposición, criterio o práctica aparentemente neutros ponen a personas de un sexo en desventaja particular, salvo justificación objetiva y proporcionada. Un ejemplo sería exigir una altura mínima para un puesto sin relación real con las tareas, lo que perjudicaría desproporcionadamente a las mujeres."
   },
   {
    "d": "facil",
    "q": "Según el artículo 6.1 de la Ley 7/2023, se entiende por acoso sexual:",
    "o": [
     "Cualquier comportamiento de naturaleza sexual que atente contra la dignidad de una persona, creando un ambiente intimidatorio u hostil",
     "Cualquier comentario sobre el trabajo, salvo que una norma con rango de ley disponga lo contrario, de forma excepcional y motivada",
     "Una felicitación por un ascenso, salvo que una norma con rango de ley disponga lo contrario, con carácter general",
     "Una simple conversación informal, salvo que una norma con rango de ley disponga lo contrario, en todo caso"
    ],
    "c": 0,
    "e": "Art. 6.1.a) Ley 7/2023: se entiende por acoso sexual cualquier comportamiento verbal, no verbal o físico de naturaleza sexual que tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona, creando un entorno intimidatorio, hostil, degradante, humillante u ofensivo."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 9 de la Ley 7/2023, la discriminación sexista por asociación es aquella:",
    "o": [
     "Sufrida por una persona por razón del sexo, embarazo o maternidad de otra persona con la que estuviera relacionada",
     "Que solo puede sufrir directamente la propia mujer, salvo que una norma con rango de ley disponga lo contrario",
     "Provocada por asociaciones sin ánimo de lucro, salvo que una norma con rango de ley disponga lo contrario",
     "Vinculada exclusivamente al ámbito sindical, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 9 Ley 7/2023: la discriminación sexista por asociación es la sufrida por una persona por razón del sexo, el embarazo, el parto o la maternidad, o de las obligaciones familiares o estado civil de otra persona con la que estuviera relacionada. Por ejemplo, penalizar laboralmente a un padre por solicitar reducción de jornada para el cuidado de su hija."
   },
   {
    "d": "media",
    "q": "Según el artículo 13.1 de la Ley 7/2023, los poderes públicos de Galicia adoptarán medidas específicas en favor de las mujeres para:",
    "o": [
     "Corregir situaciones patentes de desigualdad de hecho respecto de los hombres",
     "Reducir el número de mujeres en el empleo público",
     "Eliminar las políticas de conciliación",
     "Suprimir la negociación colectiva, de acuerdo con el procedimiento correspondiente"
    ],
    "c": 0,
    "e": "Art. 13.1 Ley 7/2023: para hacer efectivo el derecho constitucional de la igualdad, los poderes públicos de Galicia adoptarán medidas de acción positiva a favor de las mujeres, razonables y proporcionadas, mientras subsistan las situaciones de desigualdad, como reservas de plazas o bonificaciones en determinados procesos."
   },
   {
    "d": "facil",
    "q": "Según el artículo 18 de la Ley 7/2023, se entiende por género:",
    "o": [
     "El conjunto de construcciones sociales, educativas y culturales de roles y comportamientos que se atribuyen de forma diferencial a mujeres y hombres",
     "Un sinónimo estricto de sexo biológico, salvo que una norma con rango de ley disponga lo contrario, atendiendo a las circunstancias del caso",
     "Un concepto exclusivamente jurídico sin contenido social, salvo que una norma con rango de ley disponga lo contrario, como criterio subsidiario",
     "Una categoría estadística del censo, salvo que una norma con rango de ley disponga lo contrario, de forma excepcional y motivada"
    ],
    "c": 0,
    "e": "Art. 18 Ley 7/2023: se entiende por género el conjunto de construcciones sociales, educativas y culturales de los roles, rasgos, actitudes, comportamientos y expectativas sociales asociados de forma diferencial a mujeres y hombres, a diferencia del sexo, que se refiere a las características biológicas."
   },
   {
    "d": "media",
    "q": "Según el artículo 32.1 de la Ley 7/2023, la Administración general de la Comunidad Autónoma erradicará, en el campo institucional:",
    "o": [
     "El uso sexista del lenguaje, tanto ante la ciudadanía como en las comunicaciones internas",
     "El uso de cualquier idioma cooficial, salvo que una norma con rango de ley disponga lo contrario",
     "La comunicación electrónica, salvo que una norma con rango de ley disponga lo contrario",
     "El uso de formularios, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 32.1 Ley 7/2023: la Administración general de la Comunidad Autónoma y las entidades del sector público erradicarán, en todas las formas de expresión oral o escrita, el uso sexista del lenguaje en el campo institucional, por ejemplo evitando fórmulas que invisibilicen a las mujeres en comunicaciones y formularios oficiales."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 36.g) de la Ley 7/2023, el Servicio Gallego de Salud debe garantizar, entre otras cosas:",
    "o": [
     "El tratamiento adecuado de las situaciones de violencia de género en los servicios sanitarios, mediante protocolos de actuación",
     "La gratuidad total de todos los medicamentos, salvo que una norma con rango de ley disponga lo contrario, con carácter general",
     "La reducción del número de consultas ginecológicas, salvo que una norma con rango de ley disponga lo contrario, en todo caso",
     "La eliminación de la atención pediátrica, salvo que una norma con rango de ley disponga lo contrario, como criterio subsidiario"
    ],
    "c": 0,
    "e": "Art. 36.g) Ley 7/2023: se garantizará el tratamiento adecuado de las situaciones de violencia de género y de violencia contra la mujer en los servicios de atención sanitaria, mediante protocolos de actuación que permitan al personal sanitario detectar indicios y activar los recursos de protección correspondientes."
   },
   {
    "d": "facil",
    "q": "Según el artículo 41.1.a) de la Ley 7/2023, el currículo educativo debe favorecer, entre otros aspectos:",
    "o": [
     "La comprensión del valor constitucional de la igualdad entre ambos sexos",
     "La segregación del alumnado por sexo en las aulas",
     "La eliminación de la asignatura de valores",
     "La reducción de horas lectivas, de acuerdo con el procedimiento correspondiente"
    ],
    "c": 0,
    "e": "Art. 41.1.a) Ley 7/2023: el currículo se adaptará para incluir la comprensión del valor constitucional de la igualdad entre ambos sexos, sin admitir contenidos que transmitan una distribución estereotipada de papeles, por ejemplo evitando cuentos o materiales que asignen roles de cuidado exclusivamente a las niñas."
   },
   {
    "d": "media",
    "q": "Según el artículo 41.1.h) de la Ley 7/2023, la Administración autonómica debe garantizar:",
    "o": [
     "La coeducación en Galicia, dirigida al libre desarrollo de la personalidad sin barreras de género",
     "La educación diferenciada obligatoria por sexos",
     "La eliminación de la educación infantil pública",
     "La privatización de los centros educativos, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 41.1.h) Ley 7/2023: se garantizará la coeducación en la Comunidad Autónoma de Galicia, dentro de sus competencias, dirigida al libre desarrollo de la personalidad sin barreras de género, es decir, una educación conjunta de niños y niñas en igualdad, sin diferenciación de expectativas por sexo."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 42.1 de la Ley 7/2023, en relación con el artículo 126.2 de la LOE, el consejo escolar de los centros docentes públicos debe:",
    "o": [
     "Designar a una persona del centro que impulse medidas educativas que fomenten la igualdad real y efectiva",
     "Eliminar la figura del director del centro, salvo que una norma con rango de ley disponga lo contrario",
     "Prohibir la participación de las familias, salvo que una norma con rango de ley disponga lo contrario",
     "Nombrar solo a un docente varón como responsable, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 42.1 Ley 7/2023: constituido el consejo escolar de los centros docentes públicos, este designará una persona del centro que impulse medidas educativas que fomenten la igualdad real y efectiva entre hombres y mujeres, figura conocida habitualmente como coordinador o coordinadora de igualdad o coeducación."
   },
   {
    "d": "media",
    "q": "Según el artículo 43.1 de la Ley 7/2023, en el centro docente no se admitirán:",
    "o": [
     "Las desigualdades sustentadas en creencias, prejuicios, tradiciones o costumbres transmisoras de una distribución estereotipada de papeles entre sexos",
     "Las actividades extraescolares, salvo que una norma con rango de ley disponga lo contrario, atendiendo a las circunstancias del caso",
     "Las reuniones de familias, salvo que una norma con rango de ley disponga lo contrario, en todo caso",
     "Las evaluaciones trimestrales, salvo que una norma con rango de ley disponga lo contrario, de forma excepcional y motivada"
    ],
    "c": 0,
    "e": "Art. 43.1 Ley 7/2023: no se admitirán en el centro docente las desigualdades sustentadas en creencias, prejuicios, tradiciones o costumbres transmisoras, directa o indirectamente, de una distribución estereotipada de papeles entre los sexos, como separar por sexo actividades deportivas sin justificación pedagógica."
   },
   {
    "d": "facil",
    "q": "Según el artículo 44 de la Ley 7/2023, la Administración incluirá en los planes de formación permanente del profesorado, como materia específica:",
    "o": [
     "La igualdad y la violencia de género",
     "Solo idiomas extranjeros",
     "Únicamente tecnologías digitales",
     "Solo educación física"
    ],
    "c": 0,
    "e": "Art. 44 Ley 7/2023: la Administración incluirá en los planes de formación permanente del profesorado, como materia específica, la igualdad y la violencia de género, diseñando cursos específicos de formación para que el personal docente sepa detectar y actuar ante posibles casos."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 74.1 de la Ley 7/2023, sobre mujeres con discapacidad, se considera que la confluencia de dos o más factores de discriminación:",
    "o": [
     "Tiene un efecto exponencial en la situación de desigualdad",
     "No tiene ninguna relevancia jurídica",
     "Anula automáticamente cualquier discriminación",
     "Solo se valora en el ámbito laboral, con las matizaciones oportunas"
    ],
    "c": 0,
    "e": "Art. 74.1 Ley 7/2023: serán objeto de especial tratamiento las situaciones de discriminación múltiple e interseccional por sexo y discapacidad, al considerar que la confluencia de dos o más factores de discriminación tiene un efecto exponencial en la desigualdad, no simplemente sumativo (por ejemplo, ser mujer y tener una discapacidad puede generar barreras que se multiplican, no solo se suman)."
   },
   {
    "d": "media",
    "q": "Según el artículo 77 de la Ley 7/2023, la Administración gallega debe considerar la situación particular de desventaja en que se encuentran:",
    "o": [
     "Las mujeres lesbianas, bisexuales y trans",
     "Solo las mujeres funcionarias",
     "Únicamente las mujeres empresarias",
     "Las mujeres mayores de 80 años exclusivamente"
    ],
    "c": 0,
    "e": "Art. 77 Ley 7/2023: la Administración considerará la situación particular de desventaja de las mujeres lesbianas, bisexuales y trans, colaborando para erradicar la violencia lesbofóbica y contra las mujeres trans, mediante planes y protocolos específicos de protección y sensibilización."
   },
   {
    "d": "facil",
    "q": "Según el artículo 1.1 de la LO 1/2004, la ley tiene por objeto actuar contra la violencia que se ejerce sobre las mujeres por parte de:",
    "o": [
     "Quienes sean o hayan sido sus cónyuges o personas ligadas por relaciones similares de afectividad, aun sin convivencia",
     "Cualquier persona sin distinción de vínculo, salvo que una norma con rango de ley disponga lo contrario",
     "Solo desconocidos, salvo que una norma con rango de ley disponga lo contrario",
     "Exclusivamente compañeros de trabajo, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 1.1 LO 1/2004 (BOE núm. 313, de 29/12/2004): la ley actúa contra la violencia ejercida sobre las mujeres por quienes sean o hayan sido sus cónyuges o estén o hayan estado ligados por relaciones similares de afectividad, aun sin convivencia. La ley se limita, por tanto, a la violencia en el ámbito de la pareja o expareja, no a cualquier violencia contra la mujer."
   },
   {
    "d": "media",
    "q": "Según el artículo 1.3 de la LO 1/2004, la violencia de género comprende:",
    "o": [
     "Violencia física y psicológica, agresiones a la libertad sexual, amenazas, coacciones o privación de libertad",
     "Solo la violencia física, salvo que una norma con rango de ley disponga lo contrario, atendiendo a las circunstancias del caso",
     "Únicamente las amenazas verbales, salvo que una norma con rango de ley disponga lo contrario, como criterio subsidiario",
     "Solo los delitos cometidos en el domicilio, salvo que una norma con rango de ley disponga lo contrario, con carácter general"
    ],
    "c": 0,
    "e": "Art. 1.3 LO 1/2004: la violencia de género comprende todo acto de violencia física y psicológica, incluidas las agresiones a la libertad sexual, las amenazas, las coacciones o la privación arbitraria de libertad. La definición es amplia e incluye tanto agresiones físicas como el maltrato psicológico continuado."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 1.4 de la LO 1/2004, la violencia de género regulada por la ley también comprende:",
    "o": [
     "La violencia ejercida sobre familiares o allegados menores de edad con el objetivo de causar perjuicio o daño a las mujeres",
     "Solo la violencia entre hermanos, salvo que una norma con rango de ley disponga lo contrario",
     "Los delitos patrimoniales entre desconocidos, salvo que una norma con rango de ley disponga lo contrario",
     "La violencia laboral entre compañeros de distinto sexo, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 1.4 LO 1/2004: la violencia de género también comprende la que, con el objetivo de causar perjuicio o daño a las mujeres, se ejerza sobre sus familiares o allegados menores de edad, conocida como violencia vicaria, en la que se daña a los hijos o hijas para hacer sufrir a la madre."
   },
   {
    "d": "facil",
    "q": "Según el artículo 3.1 de la LO 1/2004, ¿qué instrumento debe ponerse en marcha de manera inmediata a la entrada en vigor de la ley?",
    "o": [
     "Un Plan Estatal de Sensibilización y Prevención de la Violencia de Género",
     "Un impuesto especial, salvo que una norma con rango de ley disponga lo contrario",
     "Una moratoria legislativa",
     "Un censo nacional de agresores"
    ],
    "c": 0,
    "e": "Art. 3.1 LO 1/2004: de manera inmediata a la entrada en vigor de la ley se pondrá en marcha un Plan Estatal de Sensibilización y Prevención de la Violencia de Género con carácter permanente, dirigido a informar y concienciar a la sociedad sobre este problema."
   },
   {
    "d": "media",
    "q": "Según el artículo 4.2 de la LO 1/2004, la Educación Infantil contribuirá a desarrollar en la infancia:",
    "o": [
     "El aprendizaje en la resolución pacífica de conflictos",
     "Exclusivamente contenidos de lectoescritura",
     "Solo hábitos de higiene, salvo disposición expresa en contrario",
     "Únicamente juegos motrices"
    ],
    "c": 0,
    "e": "Art. 4.2 LO 1/2004: la Educación Infantil contribuirá a desarrollar en la infancia el aprendizaje en la resolución pacífica de conflictos, sentando las bases desde las primeras edades para prevenir comportamientos violentos y fomentar el respeto en las relaciones interpersonales."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 4.7 de la LO 1/2004, las Universidades deben incluir y fomentar:",
    "o": [
     "La formación, docencia e investigación en igualdad de género y no discriminación de forma transversal",
     "Solo asignaturas técnicas, salvo que una norma con rango de ley disponga lo contrario",
     "Exclusivamente formación deportiva, salvo que una norma con rango de ley disponga lo contrario",
     "La eliminación de los estudios de género, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 4.7 LO 1/2004: las Universidades incluirán y fomentarán en todos los ámbitos académicos la formación, docencia e investigación en igualdad de género y no discriminación de forma transversal, es decir, no como una asignatura aislada, sino integrada en distintas disciplinas y grados."
   },
   {
    "d": "media",
    "q": "Según el artículo 5 de la LO 1/2004, las Administraciones competentes deben prever:",
    "o": [
     "La escolarización inmediata de los hijos afectados por un cambio de residencia derivado de actos de violencia de género",
     "La expulsión del sistema educativo del agresor, salvo que una norma con rango de ley disponga lo contrario",
     "El cierre temporal de los centros afectados, salvo que una norma con rango de ley disponga lo contrario",
     "La suspensión de las clases durante un mes, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 5 LO 1/2004: las Administraciones competentes deberán prever la escolarización inmediata de los hijos que se vean afectados por un cambio de residencia derivada de actos de violencia de género, evitando así que la falta de plaza escolar sea un obstáculo para que la madre pueda huir de una situación de maltrato."
   },
   {
    "d": "facil",
    "q": "Según el artículo 6 de la LO 1/2004, las Administraciones educativas velarán para que en los materiales educativos:",
    "o": [
     "Se eliminen los estereotipos sexistas o discriminatorios",
     "Se incluyan siempre imágenes de ambos sexos por igual sin más criterio",
     "Se prohíban las ilustraciones",
     "Se reduzca el número de páginas"
    ],
    "c": 0,
    "e": "Art. 6 LO 1/2004: las Administraciones educativas velarán para que en todos los materiales educativos se eliminen los estereotipos sexistas o discriminatorios y se fomente el igual valor de hombres y mujeres, por ejemplo revisando que los libros de texto muestren a hombres y mujeres en diversidad de roles profesionales y familiares."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 7 de la LO 1/2004, la formación inicial y permanente del profesorado en materia de igualdad debe habilitarles, entre otras cosas, para:",
    "o": [
     "La detección precoz de la violencia en el ámbito familiar, especialmente sobre la mujer y los hijos e hijas",
     "Impartir exclusivamente educación física, salvo que una norma con rango de ley disponga lo contrario",
     "Sustituir a los orientadores escolares, salvo que una norma con rango de ley disponga lo contrario",
     "Evaluar el rendimiento académico únicamente, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 7.c) LO 1/2004: la formación del profesorado debe habilitarles para la detección precoz de la violencia en el ámbito familiar, especialmente sobre la mujer y los hijos e hijas, ya que el personal docente, por su contacto habitual con el alumnado, puede observar indicios (cambios de comportamiento, ausencias, lesiones) que pasen desapercibidos en otros ámbitos."
   },
   {
    "d": "media",
    "q": "Según el artículo 8 de la LO 1/2004, se adoptarán medidas para que los Consejos Escolares:",
    "o": [
     "Impulsen la adopción de medidas educativas que fomenten la igualdad real y efectiva entre hombres y mujeres",
     "Dejen de reunirse periódicamente, salvo que una norma con rango de ley disponga lo contrario",
     "Se limiten a cuestiones económicas, salvo que una norma con rango de ley disponga lo contrario",
     "Solo traten temas de infraestructura, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 8 LO 1/2004: se adoptarán medidas para asegurar que los Consejos Escolares impulsen la adopción de medidas educativas que fomenten la igualdad real y efectiva entre hombres y mujeres, complementando así la labor de la persona coordinadora de igualdad prevista en la normativa autonómica."
   },
   {
    "d": "facil",
    "q": "Según el artículo 9 de la LO 1/2004, los servicios de inspección educativa velarán por:",
    "o": [
     "El cumplimiento y aplicación de los principios y valores de igualdad recogidos en el sistema educativo",
     "La recaudación de tasas escolares, salvo que una norma con rango de ley disponga lo contrario",
     "La gestión del comedor escolar, salvo que una norma con rango de ley disponga lo contrario",
     "El transporte escolar exclusivamente, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 9 LO 1/2004: los servicios de inspección educativa velarán por el cumplimiento y aplicación de los principios y valores recogidos en este capítulo del sistema educativo, destinados a fomentar la igualdad real entre mujeres y hombres, supervisando por ejemplo que los centros cumplan con la coeducación."
   },
   {
    "d": "dificil",
    "q": "Según el artículo 10 de la LO 1/2004, se considerará ilícita la publicidad que:",
    "o": [
     "Utilice la imagen de la mujer con carácter vejatorio o discriminatorio",
     "Anuncie productos infantiles",
     "Se emita en horario nocturno",
     "Utilice colores llamativos, de acuerdo con el procedimiento correspondiente"
    ],
    "c": 0,
    "e": "Art. 10 LO 1/2004, de acuerdo con la Ley 34/1988 General de Publicidad: se considerará ilícita la publicidad que utilice la imagen de la mujer con carácter vejatorio o discriminatorio, ya sea utilizando su cuerpo de forma degradante o asociándola a roles estereotipados que fomenten la desigualdad."
   },
   {
    "d": "media",
    "q": "Según el artículo 15.1 de la LO 1/2004, las Administraciones sanitarias, en el seno del Consejo Interterritorial del Sistema Nacional de Salud, deben:",
    "o": [
     "Promover e impulsar actuaciones de los profesionales sanitarios para la detección precoz de la violencia de género",
     "Suprimir la atención primaria en zonas rurales, salvo que una norma con rango de ley disponga lo contrario",
     "Reducir el personal sanitario, salvo que una norma con rango de ley disponga lo contrario",
     "Eliminar los protocolos de urgencias, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 15.1 LO 1/2004: las Administraciones sanitarias promoverán e impulsarán actuaciones de los profesionales sanitarios para la detección precoz de la violencia de género, en el seno del Consejo Interterritorial del SNS, ya que el personal médico también puede detectar signos de maltrato en consultas o urgencias."
   },
   {
    "d": "facil",
    "q": "Según el artículo 16 de la LO 1/2004, en el seno del Consejo Interterritorial del Sistema Nacional de Salud se constituirá:",
    "o": [
     "Una Comisión contra la Violencia de Género",
     "Un nuevo Ministerio, con las matizaciones oportunas",
     "Un tribunal especial",
     "Una agencia tributaria específica"
    ],
    "c": 0,
    "e": "Art. 16 LO 1/2004: en el seno del Consejo Interterritorial del Sistema Nacional de Salud se constituirá una Comisión contra la Violencia de Género que apoye técnicamente la planificación de las medidas sanitarias, coordinando la actuación de las distintas Comunidades Autónomas en esta materia."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 149.3 de la Constitución, ¿qué ocurre con las materias que no se hayan asumido por los Estatutos de Autonomía?",
    "o": [
     "La competencia corresponde al Estado, cuyas normas prevalecen en conflicto salvo lo atribuido en exclusiva a las CCAA",
     "Quedan automáticamente en manos de la Comunidad Autónoma limítrofe, salvo que una norma con rango de ley disponga lo contrario, de forma excepcional y motivada",
     "Se someten a referéndum estatal obligatorio, salvo que una norma con rango de ley disponga lo contrario, con carácter general",
     "Pasan a ser competencia exclusiva de la Unión Europea, salvo que una norma con rango de ley disponga lo contrario, en todo caso"
    ],
    "c": 0,
    "e": "Art. 149.3 CE: la competencia sobre materias no asumidas por los Estatutos corresponde al Estado, cuyas normas prevalecerán en caso de conflicto sobre las de las CCAA en lo no atribuido a su exclusiva competencia; el derecho estatal será, en todo caso, supletorio del derecho de las Comunidades Autónomas. Esta cláusula de cierre evita que existan «vacíos» normativos en materias no expresamente repartidas."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 149.1.18ª de la Constitución, el Estado tiene competencia exclusiva sobre las bases del régimen jurídico de las Administraciones públicas y, entre otras materias, sobre:",
    "o": [
     "El procedimiento administrativo común, sin perjuicio de las especialidades derivadas de la organización propia de las Comunidades Autónomas",
     "La totalidad del procedimiento administrativo de cada Comunidad Autónoma sin excepción alguna, sin perjuicio de la normativa sectorial aplicable",
     "Solo el procedimiento sancionador tributario, salvo que una norma con rango de ley disponga lo contrario",
     "El procedimiento parlamentario autonómico, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 149.1.18ª CE: el Estado tiene competencia exclusiva sobre las bases del régimen jurídico de las Administraciones públicas y el procedimiento administrativo común, sin perjuicio de las especialidades derivadas de la organización propia de las Comunidades Autónomas. Es la razón por la que la Ley 39/2015 se aplica en toda España, aunque cada Comunidad pueda adaptar aspectos organizativos propios."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 156.1 de la Constitución, la autonomía financiera de las Comunidades Autónomas para el desarrollo y ejecución de sus competencias se ejerce con arreglo a los principios de:",
    "o": [
     "Coordinación con la Hacienda estatal y solidaridad entre todos los españoles",
     "Independencia absoluta respecto del Estado",
     "Libre disposición sin ningún límite, de acuerdo con el procedimiento correspondiente",
     "Reciprocidad bilateral con cada Comunidad vecina"
    ],
    "c": 0,
    "e": "Art. 156.1 CE: las Comunidades Autónomas gozarán de autonomía financiera para el desarrollo y ejecución de sus competencias con arreglo a los principios de coordinación con la Hacienda estatal y de solidaridad entre todos los españoles. Esta autonomía no es absoluta: se ejerce coordinada con el sistema de financiación autonómica estatal."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 157.1 de la Constitución, ¿cuál de las siguientes NO figura expresamente entre los recursos de las Comunidades Autónomas?",
    "o": [
     "Los tributos cedidos por otra Comunidad Autónoma vecina",
     "Impuestos cedidos total o parcialmente por el Estado",
     "Transferencias del Fondo de Compensación interterritorial",
     "El producto de las operaciones de crédito"
    ],
    "c": 0,
    "e": "Art. 157.1 CE enumera como recursos: impuestos cedidos por el Estado, tributos propios, transferencias del Fondo de Compensación interterritorial, rendimientos de su patrimonio y operaciones de crédito; no contempla cesiones de tributos entre Comunidades Autónomas, ya que la relación de cesión se produce siempre desde el Estado hacia cada Comunidad, no entre ellas."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 55.2 de la Constitución, la suspensión individualizada de los derechos de los artículos 17.2 y 18.2 y 3 en investigaciones sobre bandas armadas o terrorismo exige:",
    "o": [
     "La necesaria intervención judicial y el adecuado control parlamentario",
     "Únicamente una orden gubernativa sin control alguno",
     "Autorización previa del Defensor del Pueblo",
     "Aprobación por referéndum, sin perjuicio de la normativa sectorial aplicable"
    ],
    "c": 0,
    "e": "Art. 55.2 CE: una ley orgánica puede prever la suspensión individual de esos derechos, para personas determinadas, en investigaciones sobre bandas armadas o terroristas, con la necesaria intervención judicial y el adecuado control parlamentario, garantías que impiden que esta suspensión excepcional se convierta en arbitraria."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 11.Tres del Estatuto de Autonomía de Galicia, los miembros del Parlamento de Galicia son inviolables por los votos y opiniones emitidos en el ejercicio de su cargo. Durante su mandato, ¿en qué supuesto pueden ser detenidos o retenidos en Galicia?",
    "o": [
     "Solo en caso de flagrante delito, correspondiendo decidir sobre su inculpación, prisión, procesamiento y juicio al Tribunal Superior de Justicia de Galicia",
     "En cualquier caso, sin ninguna limitación, salvo que una norma con rango de ley disponga lo contrario",
     "Nunca, gozan de inmunidad absoluta incluso en flagrante delito, salvo que una norma con rango de ley disponga lo contrario, atendiendo a las circunstancias del caso",
     "Solo si lo autoriza previamente el Parlamento por mayoría simple, salvo que una norma con rango de ley disponga lo contrario, como criterio subsidiario"
    ],
    "c": 0,
    "e": "Art. 11.Tres del Estatuto: durante su mandato, los diputados del Parlamento de Galicia no podrán ser detenidos ni retenidos por actos delictivos cometidos en Galicia, salvo en caso de flagrante delito, correspondiendo la decisión sobre su inculpación, prisión, procesamiento y juicio al Tribunal Superior de Justicia de Galicia. Esta inmunidad protege el ejercicio libre del cargo frente a posibles presiones o persecuciones injustificadas."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 13.Dos del Estatuto de Autonomía de Galicia, ¿en qué diario oficial rige la fecha de publicación de las leyes de Galicia a efectos de su entrada en vigor?",
    "o": [
     "En el «Diario Oficial de Galicia»",
     "En el «Boletín Oficial del Estado» exclusivamente",
     "En ambos diarios de forma simultánea e indistinta",
     "En el boletín provincial correspondiente"
    ],
    "c": 0,
    "e": "Art. 13.Dos del Estatuto: las leyes de Galicia se promulgan por el Presidente de la Junta y se publican en el «Diario Oficial de Galicia» y en el «Boletín Oficial del Estado», pero a efectos de entrada en vigor rige la fecha de publicación en el DOG, no la del BOE, que suele ser posterior."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 35.Uno del Estatuto de Autonomía de Galicia, los convenios que la Comunidad Autónoma celebre con otras Comunidades Autónomas para la gestión de servicios propios deben, antes de su entrada en vigor:",
    "o": [
     "Ser comunicados a las Cortes Generales, que disponen de treinta días para manifestar reparos",
     "Publicarse directamente sin ningún trámite previo",
     "Ser ratificados por referéndum autonómico, salvo que una norma con rango de ley disponga lo contrario",
     "Ser aprobados por unanimidad de todas las Comunidades Autónomas de España"
    ],
    "c": 0,
    "e": "Art. 35.Uno del Estatuto: los convenios con otras Comunidades Autónomas deberán comunicarse a las Cortes Generales antes de su entrada en vigor; si estas manifiestan reparos en el plazo de treinta días, el convenio debe seguir otro trámite (el propio de los acuerdos de cooperación, que sí requieren autorización de las Cortes)."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 65.3 de la LO 3/2018, la Agencia Española de Protección de Datos puede inadmitir una reclamación, cuando el responsable ya adoptó medidas correctivas tras advertencia, si concurre que:",
    "o": [
     "No se ha causado perjuicio al afectado en las infracciones del artículo 74, o que su derecho queda plenamente garantizado con esas medidas",
     "El reclamante reside fuera de España, salvo que una norma con rango de ley disponga lo contrario",
     "Han transcurrido más de veinte años desde el hecho, salvo que una norma con rango de ley disponga lo contrario",
     "El responsable del tratamiento es una persona física, salvo que una norma con rango de ley disponga lo contrario, de forma excepcional y motivada"
    ],
    "c": 0,
    "e": "Art. 65.3 LO 3/2018: la AEPD podrá inadmitir la reclamación, previa advertencia y adopción de medidas correctivas, cuando no se haya causado perjuicio al afectado en las infracciones del art. 74 o cuando su derecho quede plenamente garantizado mediante esas medidas, evitando así sancionar a quien ya ha corregido voluntariamente su incumplimiento."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 9.2 de la LO 3/2018, los tratamientos de datos relativos a salud, previstos en las letras g), h) e i) del artículo 9.2 del RGPD, fundados en el Derecho español deben:",
    "o": [
     "Estar amparados en una norma con rango de ley, que podrá establecer requisitos adicionales de seguridad y confidencialidad",
     "Contar únicamente con el consentimiento verbal del paciente, salvo que una norma con rango de ley disponga lo contrario",
     "Ser autorizados caso por caso por el Consejo de Ministros, salvo que una norma con rango de ley disponga lo contrario",
     "Quedar excluidos de cualquier regulación específica, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 9.2 LO 3/2018: los tratamientos de las letras g), h) e i) del art. 9.2 RGPD fundados en el Derecho español deberán estar amparados en una norma con rango de ley, que podrá establecer requisitos adicionales de seguridad y confidencialidad, reforzando así la protección de categorías especiales de datos como los relativos a la salud."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 40 de la Ley 39/2015, cuando una notificación contiene el texto íntegro del acto pero omite alguno de los demás requisitos exigidos, ¿desde qué momento surte efecto?",
    "o": [
     "Desde la fecha en que el interesado realice actuaciones que supongan el conocimiento del contenido y alcance de la resolución, o interponga el recurso que proceda",
     "Nunca surte efecto, es nula de pleno derecho automáticamente, salvo que una norma con rango de ley disponga lo contrario, en todo caso",
     "Desde el mismo día en que fue dictado el acto, sin excepción, salvo que una norma con rango de ley disponga lo contrario, con carácter general",
     "Solo cuando lo declare expresamente un juez, salvo que una norma con rango de ley disponga lo contrario, como criterio subsidiario"
    ],
    "c": 0,
    "e": "Art. 40.3 Ley 39/2015: las notificaciones que, conteniendo el texto íntegro del acto, omitiesen algún otro requisito, surtirán efecto a partir de la fecha en que el interesado realice actuaciones que supongan conocimiento del contenido y alcance de la resolución, o interponga el recurso que proceda. Es decir, el defecto formal no anula la notificación si el interesado demuestra que, de hecho, conoció el acto."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 43.2 de la Ley 39/2015, cuando la notificación electrónica es obligatoria o ha sido elegida por el interesado, ¿cuándo se entiende rechazada si no se accede a su contenido?",
    "o": [
     "Transcurridos diez días naturales desde la puesta a disposición de la notificación",
     "Transcurridas 48 horas desde su envío",
     "Transcurrido un mes natural completo, sin perjuicio de la normativa sectorial aplicable",
     "Nunca se entiende rechazada, permanece indefinidamente disponible"
    ],
    "c": 0,
    "e": "Art. 43.2 Ley 39/2015: cuando la notificación electrónica sea obligatoria o elegida expresamente por el interesado, se entenderá rechazada cuando hayan transcurrido diez días naturales desde la puesta a disposición sin acceder a su contenido, teniéndose entonces por efectuado el trámite pese a no haberse abierto el aviso."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 81.2 de la Ley 39/2015, en procedimientos de responsabilidad patrimonial, será preceptivo el dictamen del Consejo de Estado u órgano consultivo equivalente cuando la indemnización reclamada sea igual o superior a:",
    "o": [
     "50.000 euros, o a la cuantía que establezca la legislación autonómica correspondiente",
     "6.000 euros en todo caso, salvo que una norma con rango de ley disponga lo contrario",
     "1.000.000 de euros sin excepción, salvo que una norma con rango de ley disponga lo contrario",
     "Cualquier cuantía, siempre es preceptivo"
    ],
    "c": 0,
    "e": "Art. 81.2 Ley 39/2015: cuando las indemnizaciones reclamadas sean de cuantía igual o superior a 50.000 euros, o a la que establezca la legislación autonómica correspondiente, será preceptivo solicitar dictamen del Consejo de Estado o del órgano consultivo autonómico equivalente, garantía adicional en reclamaciones de responsabilidad patrimonial de cuantía elevada."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 82.5 de la Ley 39/2015, en los procedimientos de responsabilidad patrimonial del artículo 32.9 de la Ley de Régimen Jurídico del Sector Público, ¿a quién es necesario dar audiencia en todo caso?",
    "o": [
     "Al contratista, notificándole las actuaciones para que se persone, exponga lo que a su derecho convenga y proponga pruebas",
     "Únicamente al Ministerio Fiscal, salvo que una norma con rango de ley disponga lo contrario",
     "Solo al defensor del pueblo autonómico, salvo que una norma con rango de ley disponga lo contrario",
     "A la aseguradora del contratante exclusivamente, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 82.5 Ley 39/2015: en los procedimientos de responsabilidad patrimonial del art. 32.9 de la LRJSP será necesario en todo caso dar audiencia al contratista, notificándole cuantas actuaciones se realicen para que se persone y proponga cuantos medios de prueba estime necesarios, ya que el resultado del procedimiento puede afectarle directamente."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 106.5 de la Ley 39/2015, cuando un procedimiento de revisión de oficio se inicia de oficio, ¿qué produce el transcurso de seis meses desde su inicio sin dictarse resolución?",
    "o": [
     "La caducidad del procedimiento",
     "La estimación automática de la nulidad solicitada",
     "La nulidad de todas las actuaciones previas del expediente",
     "La suspensión indefinida del procedimiento"
    ],
    "c": 0,
    "e": "Art. 106.5 Ley 39/2015: cuando el procedimiento de revisión de oficio se hubiera iniciado de oficio, el transcurso del plazo de seis meses desde su inicio sin dictarse resolución producirá la caducidad del mismo, es decir, la Administración pierde la posibilidad de continuar ese procedimiento concreto, sin perjuicio de poder iniciar uno nuevo si procede."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 23.3 de la Ley 2/2015, del empleo público de Galicia, si transcurridos tres años desde el nombramiento de personal funcionario interino por vacante no se ha resuelto el proceso selectivo, pero se publicó la convocatoria dentro de ese plazo, el interino:",
    "o": [
     "Puede permanecer en el puesto excepcionalmente hasta la resolución de la convocatoria, sin que su cese dé lugar a compensación económica",
     "Debe cesar automáticamente al cumplirse los tres años, sin excepción, salvo que una norma con rango de ley disponga lo contrario",
     "Adquiere automáticamente la condición de funcionario de carrera, salvo que una norma con rango de ley disponga lo contrario",
     "Pasa a la situación de excedencia forzosa, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 23.3 Ley 2/2015: excepcionalmente, el personal funcionario interino podrá permanecer en el puesto que ocupe temporalmente si se hubiese publicado la convocatoria dentro del plazo de tres años, hasta la resolución de esta, sin que su cese dé lugar a compensación económica, ya que se entiende que la Administración cumplió su obligación de convocar en plazo."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 24.4 de la Ley 2/2015, el incumplimiento del plazo máximo de nombramiento del personal funcionario interino por vacante (artículo 23.2.a) da lugar a una compensación económica equivalente a:",
    "o": [
     "Veinte días de retribuciones fijas por año de servicio, con un máximo de doce mensualidades",
     "Un mes de salario íntegro sin límite máximo",
     "El doble de las retribuciones anuales percibidas",
     "No genera derecho a compensación alguna, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 24.4 Ley 2/2015: el incumplimiento del plazo del art. 23.2.a) dará lugar a una compensación económica equivalente a veinte días de retribuciones fijas por año de servicio, prorrateándose por meses, hasta un máximo de doce mensualidades, indemnización que busca compensar al interino por la demora imputable a la Administración."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 106.6 de la Ley 2/2015, en materia de reducción de jornada por cuidado de hijo o hija que padezca cáncer u otra enfermedad grave, ¿hasta qué edad puede mantenerse el derecho si la enfermedad se diagnosticó antes de la mayoría de edad y, antes de los 23 años, se acredita un grado de discapacidad igual o superior al 65%?",
    "o": [
     "Hasta que la persona a cargo cumpla los 26 años",
     "Hasta que cumpla los 18 años únicamente",
     "Hasta que cumpla los 21 años",
     "No existe límite de edad en ningún supuesto"
    ],
    "c": 0,
    "e": "Art. 106 Ley 2/2015: se mantendrá el derecho a la reducción de jornada hasta que la persona a cargo cumpla los 26 años si, antes de alcanzar los 23 años, se acredita un grado de discapacidad igual o superior al 65 %, ampliando así el derecho más allá de la mayoría de edad en supuestos de dependencia acreditada."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 132.6 de la Ley 2/2015, en caso de jubilación por incapacidad permanente o fallecimiento, ¿hasta qué plazo máximo puede solicitarse el abono de una compensación económica por vacaciones devengadas y no disfrutadas?",
    "o": [
     "Hasta dieciocho meses",
     "Hasta tres meses",
     "No cabe compensación económica en ningún caso por vacaciones",
     "Hasta cinco años"
    ],
    "c": 0,
    "e": "Art. 132.6 Ley 2/2015: en los casos de jubilación por incapacidad permanente o de fallecimiento, se podrá solicitar el abono de una compensación económica por las vacaciones devengadas y no disfrutadas hasta un máximo de dieciocho meses, evitando que el funcionario o sus herederos pierdan el derecho a las vacaciones ya generadas."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 89.2 de la Ley 2/2015, en los concursos de provisión de puestos, ¿qué puestos quedan excluidos de la convocatoria general cuando el personal funcionario de carrera esté adscrito a ellos por determinados motivos?",
    "o": [
     "Los puestos con personal funcionario adscrito por motivos de salud, rehabilitación, violencia de género o violencia sexual",
     "Los puestos de nueva creación, salvo que una norma con rango de ley disponga lo contrario",
     "Los puestos ocupados por personal interino, salvo que una norma con rango de ley disponga lo contrario",
     "Los puestos de libre designación exclusivamente, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 89.2 Ley 2/2015: en los concursos no se incluirán los puestos de trabajo que tengan adscrito personal funcionario de carrera por motivos de salud o rehabilitación, o por motivos de violencia de género o de violencia sexual, protegiendo así la estabilidad del funcionario que ocupa ese puesto por razones especialmente sensibles."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 50.2.f) de la Ley 7/2023, las universidades gallegas deben garantizar que en los procesos de selección o evaluación de la trayectoria académico-profesional queden excluidos, sin impacto negativo, los períodos dedicados, entre otros, a:",
    "o": [
     "Permisos de nacimiento, adopción, riesgo durante el embarazo o lactancia natural, o incapacidad temporal asociada, o por violencia de género o acoso en el trabajo",
     "Vacaciones ordinarias anuales, salvo que una norma con rango de ley disponga lo contrario, en todo caso",
     "Bajas por motivos exclusivamente deportivos, salvo que una norma con rango de ley disponga lo contrario, de forma excepcional y motivada",
     "Permisos por asuntos particulares de libre disposición, salvo que una norma con rango de ley disponga lo contrario, atendiendo a las circunstancias del caso"
    ],
    "c": 0,
    "e": "Art. 50.2.f) Ley 7/2023: se garantizará que queden excluidos, sin impacto negativo, los períodos dedicados a permisos de nacimiento, adopción, guarda con fines de adopción o acogimiento, riesgo durante el embarazo o lactancia natural, incapacidad temporal asociada, o por razones de violencia de género o de cualquier tipo de acoso en el trabajo, al evaluar la trayectoria académico-profesional en la universidad."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 60 de la Ley 7/2023, sobre espacios electorales, la Administración autonómica fomentará el debate sobre cuestiones de género incrementando el tiempo gratuito de propaganda electoral en la Corporación Radio y Televisión de Galicia en un:",
    "o": [
     "10 por ciento",
     "50 por ciento",
     "25 por ciento",
     "5 por ciento"
    ],
    "c": 0,
    "e": "Art. 60 Ley 7/2023: se fomentará el debate electoral sobre cuestiones de género mediante un incremento del 10 por ciento del tiempo gratuito de propaganda electoral concedido a las candidaturas al Parlamento de Galicia, si lo destinan a esas cuestiones, incentivando así que los partidos aborden la igualdad en campaña."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 77.2 de la Ley 39/2015, además del período ordinario de prueba, el instructor puede acordar, a petición de los interesados, un período extraordinario de prueba de duración máxima de:",
    "o": [
     "Diez días",
     "Treinta días",
     "Quince días",
     "Dos meses"
    ],
    "c": 0,
    "e": "Art. 77.2 Ley 39/2015: cuando lo considere necesario, el instructor, a petición de los interesados, podrá decidir la apertura de un período extraordinario de prueba por un plazo no superior a diez días, adicional al período ordinario de entre diez y treinta días ya previsto en el mismo artículo."
   },
   {
    "d": "moidificil",
    "q": "Según el artículo 4.4 de la LO 1/2004, la Educación Secundaria Obligatoria debe contribuir a que el alumnado desarrolle su capacidad para:",
    "o": [
     "Relacionarse con los demás de forma pacífica y conocer, valorar y respetar la igualdad de oportunidades de hombres y mujeres",
     "Únicamente superar las pruebas de acceso a la universidad, salvo que una norma con rango de ley disponga lo contrario",
     "Especializarse en una única disciplina científica, salvo que una norma con rango de ley disponga lo contrario",
     "Memorizar el articulado legal vigente, salvo que una norma con rango de ley disponga lo contrario"
    ],
    "c": 0,
    "e": "Art. 4.4 LO 1/2004: la Educación Secundaria Obligatoria contribuirá a desarrollar en el alumnado la capacidad para relacionarse con los demás de forma pacífica y para conocer, valorar y respetar la igualdad de oportunidades de hombres y mujeres, continuando en esta etapa el trabajo en igualdad ya iniciado en Educación Infantil."
   }
  ]
 }
];
