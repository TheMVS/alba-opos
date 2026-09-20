// Banco de fichas de estudo — Oposicións Galicia, Educación Infantil
// Fichas de concepto (non unha por pregunta): agrupan preguntas do mesmo tema
// nunha soa ficha ampliada, con explicación e exemplos. 330 fichas en total.
const CARD_BANK = [
 {
  "id": "b01-01",
  "block": "b01",
  "blockTitle": "Alimentación, Nutrición y Dietética",
  "concept": "Principios inmediatos y necesidades energéticas de la infancia",
  "explanation": "Los principios inmediatos —hidratos de carbono, proteínas y grasas— son los nutrientes energéticos y estructurales de la dieta, mientras que vitaminas y minerales actúan como nutrientes reguladores, imprescindibles en pequeñas cantidades pero sin aportar calorías. Esta distinción es clave para diseñar menús escolares equilibrados: un plato de lentejas con arroz aporta hidratos y proteínas, mientras que una naranja de postre aporta sobre todo vitamina C. Además, por su ritmo de crecimiento y su elevado gasto energético relativo, los niños y niñas de Infantil necesitan, en proporción a su peso corporal, un aporte de calorías, proteínas, calcio y hierro mayor que un adulto, aunque en términos absolutos coman menos cantidad. Por ejemplo, un niño de 4 años requiere relativamente más calcio por kilo de peso que un adulto, precisamente porque sus huesos están en pleno crecimiento; ignorar esta particularidad puede llevar a raciones escolares mal ajustadas a sus necesidades reales."
 },
 {
  "id": "b01-02",
  "block": "b01",
  "blockTitle": "Alimentación, Nutrición y Dietética",
  "concept": "Lactancia materna, alimentación complementaria y método BLW",
  "explanation": "La OMS recomienda lactancia materna exclusiva hasta los 6 meses, edad en la que el sistema digestivo del bebé está preparado para tolerar otros alimentos, manteniendo idealmente la lactancia (materna o artificial) hasta los 2 años o más junto con la alimentación complementaria. Dentro de esta introducción progresiva, el método BLW (Baby-Led Weaning o \"destete dirigido por el bebé\") propone ofrecer alimentos en trozos blandos y manejables, en lugar de purés, para que sea el propio bebé quien se autoalimente desde el inicio, favoreciendo su autonomía, la exploración sensorial y la coordinación mano-boca. Por ejemplo, en vez de un puré de calabacín se ofrece el calabacín cocido entero, en bastones, para que el bebé lo agarre y se lo lleve él mismo a la boca. Conocer estos hitos permite al equipo de Infantil coordinarse con las familias sobre qué alimentos y texturas resultan apropiados a cada edad, especialmente en el primer ciclo."
 },
 {
  "id": "b01-03",
  "block": "b01",
  "blockTitle": "Alimentación, Nutrición y Dietética",
  "concept": "El comedor escolar y los hábitos de higiene en las comidas",
  "explanation": "El comedor escolar se concibe como un espacio educativo más, y no como un mero servicio de custodia sin valor pedagógico: en él se trabajan de forma cotidiana la autonomía (comer solo, usar cubiertos, servirse agua) y los hábitos de higiene que rodean la alimentación, como el lavado de manos antes de comer y el cepillado de dientes después. El lavado de manos se enseña principalmente por motivos de higiene y prevención de enfermedades, ya que reduce la transmisión de gérmenes por vía fecal-oral, muy frecuente a estas edades; convertirlo en rutina asociada siempre al mismo momento ayuda a automatizar el hábito. De igual modo, establecer una rutina diaria de cepillado dental tras la comida, con supervisión docente, integra la salud bucodental en la vida cotidiana del aula. Un ejemplo práctico es animar a un niño de 3 años a pelar él mismo un plátano o a servirse agua de una jarra pequeña, convirtiendo el momento de comer en una situación de aprendizaje de la vida diaria."
 },
 {
  "id": "b01-04",
  "block": "b01",
  "blockTitle": "Alimentación, Nutrición y Dietética",
  "concept": "Neofobia alimentaria y estrategias de exposición",
  "explanation": "La neofobia alimentaria —el rechazo o la desconfianza ante alimentos nuevos o desconocidos— es el trastorno de conducta alimentaria más habitual entre los 2 y los 6 años y forma parte del desarrollo típico infantil, aunque debe abordarse educativamente para que no derive en una dieta muy restringida. Por ejemplo, un niño que come brócoli sin problema en casa puede rechazarlo la primera vez que se lo presentan en el comedor escolar, simplemente por tratarse de un contexto o una presentación distintos. La estrategia más eficaz para reducirla es la exposición repetida y sin presión al alimento nuevo, combinada con el modelado positivo del adulto, que come el alimento con actitud favorable delante del niño. Ofrecer una cucharadita de un alimento nuevo varias veces en distintos días, sin forzar ni castigar si no se come, resulta mucho más eficaz que insistir en que se termine el plato de una sola vez, lo que suele reforzar el rechazo."
 },
 {
  "id": "b01-05",
  "block": "b01",
  "blockTitle": "Alimentación, Nutrición y Dietética",
  "concept": "Recursos didácticos y modelos de alimentación equilibrada: pirámide, rueda de alimentos y dieta mediterránea",
  "explanation": "La pirámide y la rueda de los alimentos son recursos gráficos y didácticos que clasifican los alimentos en grupos —frutas y verduras, cereales, lácteos, proteínas (carnes, pescados, legumbres) y grasas— según la frecuencia de consumo recomendada, ayudando al alumnado a iniciar la comprensión de una dieta equilibrada de forma visual y manipulativa. En el aula pueden usarse, por ejemplo, para que el alumnado clasifique recortes de alimentos según el escalón de la pirámide o el sector de la rueda al que pertenecen. La dieta mediterránea es el modelo de referencia que estos recursos suelen ilustrar: prioriza el aceite de oliva como grasa principal, un alto consumo de verduras, fruta, legumbres y cereales, y un consumo moderado de pescado, carne y lácteos. Un menú escolar mediterráneo típico podría ser lentejas con verduras, pescado a la plancha y fruta de postre, en contraste con dietas basadas en ultraprocesados o grasas saturadas."
 },
 {
  "id": "b01-06",
  "block": "b01",
  "blockTitle": "Alimentación, Nutrición y Dietética",
  "concept": "Los momentos de alimentación en el centro: desayuno y almuerzo de media mañana",
  "explanation": "El desayuno se considera una comida nutricionalmente importante para el rendimiento cognitivo, la capacidad de atención y el estado de ánimo durante las primeras horas de la jornada escolar, ya que el cerebro necesita un aporte constante de glucosa; un niño que acude al centro sin desayunar suele mostrar más irritabilidad y menor concentración a media mañana que uno que sí lo ha hecho. De forma complementaria, para el almuerzo de media mañana en el aula se recomienda ofrecer variedad —fruta, lácteos, pan o cereales integrales— evitando bollería industrial y ultraprocesados ricos en azúcares y grasas de baja calidad. Alternar a lo largo de la semana un día de fruta, otro de bocadillo integral y otro de yogur natural aporta variedad nutricional sin recurrir a productos envasados azucarados, y permite al docente convertir estos momentos cotidianos en ocasiones de educación alimentaria implícita."
 },
 {
  "id": "b01-07",
  "block": "b01",
  "blockTitle": "Alimentación, Nutrición y Dietética",
  "concept": "Prevención de la obesidad infantil y gestión de dulces en celebraciones",
  "explanation": "La prevención de la obesidad infantil, como problema de salud pública, se aborda en Infantil mediante la educación en hábitos saludables de forma normalizada —alimentación equilibrada, actividad física diaria, límites razonables al tiempo de pantalla— y nunca a través de restricciones severas o de señalar y excluir al alumnado con sobrepeso, lo que puede generar estigma y problemas de autoestima. En esta misma línea se sitúa el criterio educativo ante las chucherías o dulces en celebraciones de aula, como los cumpleaños: se trata de moderar su presencia y ofrecer alternativas saludables (fruta, frutos secos triturados, batidos naturales), evitando tanto el consumo diario como un discurso de prohibición absoluta que genere ansiedad en torno a la comida. Por ejemplo, es más adecuado programar juegos motores diarios para todo el grupo, o proponer a las familias traer una macedonia en lugar de bollería industrial, que apartar a un niño concreto de la merienda o prohibir tajantemente cualquier dulce."
 },
 {
  "id": "b01-08",
  "block": "b01",
  "blockTitle": "Alimentación, Nutrición y Dietética",
  "concept": "Alergias e intolerancias alimentarias en el aula",
  "explanation": "Ante alergias e intolerancias alimentarias es imprescindible que el centro cuente con protocolos claros de actuación, información compartida entre familia, comedor y aula, y formación básica del personal, por ejemplo para reconocer los síntomas de una reacción alérgica y saber cómo actuar ante ella. Este contenido es especialmente relevante porque un error en la gestión puede tener consecuencias graves para la salud del alumnado. Un caso habitual es la alergia al huevo o a los frutos secos: el centro debe tener registrado qué alumnado la padece y garantizar que ningún menú ni actividad —como un taller de cocina o una celebración con dulces aportados por las familias— lo exponga por error. Ignorar la información sanitaria aportada por la familia o aplicar la misma dieta a todo el alumnado sin excepciones son actuaciones claramente inadecuadas e incluso peligrosas."
 },
 {
  "id": "b01-09",
  "block": "b01",
  "blockTitle": "Alimentación, Nutrición y Dietética",
  "concept": "Elección de bebidas saludables y etiquetado nutricional",
  "explanation": "El agua debe ser la bebida de referencia en la alimentación infantil, limitando el consumo de refrescos y zumos industriales azucarados, que aportan calorías vacías y favorecen hábitos poco saludables; en el aula es preferible tener siempre disponible una jarra de agua para que el alumnado beba libremente, en lugar de ofrecer zumo envasado en la merienda. Esta educación del criterio de elección se complementa con el conocimiento de sistemas de etiquetado nutricional como el Nutri-Score, un etiquetado frontal (de la A verde a la E roja) que facilita, de forma visual y rápida, la comparación del perfil nutricional de productos similares, sin sustituir la educación alimentaria que se realiza en el aula. Por ejemplo, permite comparar dos marcas de galletas y ver cuál tiene, en conjunto, menos azúcares, grasas saturadas y sal, una habilidad de lectura crítica de productos que conviene ir modelando también ante las familias."
 },
 {
  "id": "b01-10",
  "block": "b01",
  "blockTitle": "Alimentación, Nutrición y Dietética",
  "concept": "Coordinación entre familia y escuela en la educación alimentaria",
  "explanation": "El papel de la familia y de la escuela en la educación alimentaria debe entenderse como complementario, con coherencia de mensajes entre el hogar y el centro, ya que mensajes contradictorios dificultan la adquisición de hábitos estables. Por ejemplo, fomentar el consumo de fruta en el comedor escolar mientras en casa se prioriza sistemáticamente la bollería industrial genera confusión en el niño sobre qué modelo alimentario seguir y debilita el efecto educativo de ambos contextos. Por eso muchos centros comparten con las familias el menú escolar semanal, sugiriendo cenas que no repitan lo ya comido a mediodía y proponiendo alternativas saludables para los almuerzos de media mañana. Entender la alimentación como responsabilidad compartida, y no como ámbito exclusivo de una sola parte, es la base de una intervención educativa coherente y eficaz en este terreno."
 },
 {
  "id": "b02-01",
  "block": "b02",
  "blockTitle": "Características Generales del Niño y la Niña hasta los Seis Años",
  "concept": "Leyes generales del desarrollo físico y motor",
  "explanation": "El desarrollo motor sigue dos leyes fundamentales de maduración: la ley cefalocaudal, según la cual el control se adquiere primero en la cabeza y va descendiendo hacia los pies, y la ley proximodistal, por la que primero se controlan las partes cercanas al eje del cuerpo y después las más alejadas, como los dedos. Por ejemplo, un bebé sostiene la cabeza y controla el cuello mucho antes de poder sentarse o caminar, y controla antes el hombro y el brazo que la pinza fina de los dedos. A estas leyes se suma la ley de progresión y amortiguamiento, que describe cómo el crecimiento físico es muy rápido en los primeros meses de vida y se va desacelerando progresivamente con la edad: un bebé puede duplicar su peso de nacimiento en los primeros 4-5 meses, un ritmo que nunca volverá a repetirse en el resto de su vida. Conocer estas leyes permite al docente anticipar en qué orden aparecerán las adquisiciones motrices y diseñar actividades de psicomotricidad ajustadas a cada momento evolutivo."
 },
 {
  "id": "b02-02",
  "block": "b02",
  "blockTitle": "Características Generales del Niño y la Niña hasta los Seis Años",
  "concept": "Principios generales del desarrollo evolutivo",
  "explanation": "El desarrollo infantil se entiende como un proceso global e integrado, en el que los avances en un área —motriz, cognitiva, afectiva, social o del lenguaje— se relacionan e influyen mutuamente, sin ser compartimentos estancos: cuando un niño aprende a caminar gana autonomía para explorar el entorno, lo que a su vez estimula su desarrollo cognitivo y su seguridad afectiva. Aunque existe una secuencia general común (gatear antes de andar, balbucear antes de hablar), el llamado principio de individualidad indica que cada niño la recorre con su propio ritmo, estilo e intensidad, fruto de la interacción entre herencia y ambiente, sin que ello sea motivo de alarma: es normal que un niño empiece a andar a los 11 meses y otro a los 16. Además, el desarrollo no avanza de forma perfectamente lineal, sino que se alternan periodos de avances rápidos y visibles —los llamados \"estirones\" evolutivos, tanto físicos como cognitivos o del lenguaje— con otros de mayor estabilidad y consolidación de lo ya adquirido, como cuando el vocabulario de un niño se estanca durante semanas y después incorpora muchas palabras nuevas en pocos días."
 },
 {
  "id": "b02-03",
  "block": "b02",
  "blockTitle": "Características Generales del Niño y la Niña hasta los Seis Años",
  "concept": "Factores del desarrollo: maduración, reflejos arcaicos, herencia y ambiente",
  "explanation": "La maduración es el proceso biológico de desarrollo del sistema nervioso que hace posible, cuando llega su momento, determinadas conductas y aprendizajes, independientemente de que se practiquen o no: un bebé no puede aprender a caminar por mucho que se le entrene si su sistema nervioso y muscular aún no ha madurado, mientras que a partir de cierta edad camina con relativa facilidad tras pocos intentos. Los reflejos arcaicos —succión, prensión palmar, Moro o marcha automática— son conductas automáticas presentes ya en el recién nacido que, con la maduración del sistema nervioso central, se inhiben o se transforman en conductas voluntarias; por ejemplo, el reflejo de prensión palmar desaparece hacia los 3-6 meses, sustituido por el agarre voluntario e intencional de objetos. Esta base biológica interactúa siempre con el ambiente, como explica la epigenética: factores como la nutrición, el estrés o los cuidados recibidos pueden modular la expresión de la información genética sin alterar el ADN, de modo que dos gemelos con idéntica dotación genética pueden desarrollar capacidades distintas según crezcan en un entorno de estimulación rica o de privación. La perspectiva interaccionista sintetiza esta idea al entender el desarrollo como resultado constante de la interacción entre factores biológicos y ambientales, superando tanto el determinismo genético puro como el ambientalista."
 },
 {
  "id": "b02-04",
  "block": "b02",
  "blockTitle": "Características Generales del Niño y la Niña hasta los Seis Años",
  "concept": "Organización de la etapa de Educación Infantil en dos ciclos",
  "explanation": "La Educación Infantil se organiza legalmente en dos ciclos, cada uno con identidad pedagógica propia: el primer ciclo (0-3 años), centrado en los cuidados, el vínculo afectivo y las primeras experiencias sensoriomotoras, y el segundo ciclo (3-6 años), con mayor peso de la intervención educativa sistemática y de preparación para la Educación Primaria. Esta distinción no es meramente administrativa: implica metodologías, ritmos y prioridades educativas diferentes en cada tramo. En el primer ciclo predominan las rutinas de cuidado (alimentación, sueño, higiene) como principal vehículo educativo y el establecimiento de vínculos afectivos seguros con figuras de referencia estables, mientras que en el segundo ciclo se incorporan de forma progresiva propuestas más estructuradas en torno a las áreas curriculares, sin perder por ello el carácter lúdico y globalizador propio de toda la etapa. Un centro que atienda ambos ciclos debe coordinar la transición de un aula de primer ciclo a una de segundo ciclo para garantizar continuidad pedagógica."
 },
 {
  "id": "b02-05",
  "block": "b02",
  "blockTitle": "Características Generales del Niño y la Niña hasta los Seis Años",
  "concept": "Aportaciones teóricas sobre el entorno y los periodos evolutivos: Bronfenbrenner y Montessori",
  "explanation": "Según el enfoque bioecológico de Bronfenbrenner, el desarrollo infantil resulta de la interacción de la persona con sistemas anidados: el microsistema (familia, aula), el mesosistema (la relación entre esos entornos, por ejemplo familia-escuela), el exosistema (entornos que afectan indirectamente, como el trabajo de los padres) y el macrosistema (la cultura y los valores de la sociedad). Por ejemplo, un cambio en el horario laboral de los padres —exosistema— puede alterar la rutina y el descanso del niño sin que este participe directamente en esa decisión, lo que recuerda al docente que debe atender al contexto familiar completo, no solo a lo que ocurre en el aula. Por su parte, Montessori desarrolló especialmente el concepto de \"periodos sensibles\": fases de especial receptividad en las que el niño está biológicamente predispuesto para adquirir con facilidad determinadas capacidades, como el lenguaje, el orden, el movimiento o los detalles sensoriales. El periodo sensible del lenguaje, que se extiende aproximadamente hasta los 6 años, explica por qué los niños pequeños aprenden idiomas con una facilidad que disminuye notablemente en la edad adulta, lo que justifica aprovechar esta etapa para una exposición lingüística rica."
 },
 {
  "id": "b02-06",
  "block": "b02",
  "blockTitle": "Características Generales del Niño y la Niña hasta los Seis Años",
  "concept": "Desarrollo prenatal y valoración neonatal",
  "explanation": "El desarrollo prenatal se organiza en periodos: el germinal (las dos primeras semanas), el embrionario (aproximadamente de la semana 3 a la 8), momento en que tiene lugar la organogénesis o formación de los principales órganos y sistemas, y el fetal (desde la semana 9 hasta el nacimiento). El periodo embrionario es el de mayor vulnerabilidad ante sustancias tóxicas, infecciones o carencias nutricionales, precisamente por coincidir con la formación de las estructuras corporales básicas. Al nacer, el test de Apgar valora, al minuto y a los cinco minutos de vida, cinco signos vitales —frecuencia cardíaca, esfuerzo respiratorio, tono muscular, respuesta a estímulos y color de la piel—, puntuados de 0 a 2 cada uno, para dar una primera valoración rápida del estado general del recién nacido y detectar si necesita atención inmediata. Junto a él, el peso y la talla al nacer son indicadores relevantes del estado de salud y desarrollo físico inicial, que permiten por ejemplo detectar precozmente un bajo peso al nacer que requiera seguimiento, aunque no determinan por sí solos aspectos como la inteligencia o la personalidad futura del niño."
 },
 {
  "id": "b02-07",
  "block": "b02",
  "blockTitle": "Características Generales del Niño y la Niña hasta los Seis Años",
  "concept": "Plasticidad neuronal y relevancia de la etapa 0-6 años",
  "explanation": "Los primeros seis años de vida se caracterizan por una gran plasticidad neuronal —el cerebro forma en este periodo un enorme número de conexiones sinápticas— y una rapidez de cambios evolutivos que sientan las bases del desarrollo posterior, por lo que se consideran una etapa especialmente sensible para la intervención educativa temprana. Esta plasticidad implica que las experiencias vividas en estos años, tanto positivas como adversas, dejan una huella particularmente profunda en la arquitectura cerebral, mucho mayor que en etapas posteriores. Por ejemplo, la riqueza y calidad de las interacciones lingüísticas y afectivas que recibe un niño de 2 años tiene un impacto en su desarrollo cognitivo y emocional que sería mucho más difícil de lograr en la misma medida a los 12 años. Esta idea justifica pedagógicamente la inversión en programas de atención temprana y en una Educación Infantil de calidad, entendida como un momento de oportunidad único y no recuperable de la misma manera más adelante."
 },
 {
  "id": "b02-08",
  "block": "b02",
  "blockTitle": "Características Generales del Niño y la Niña hasta los Seis Años",
  "concept": "Resiliencia infantil",
  "explanation": "La resiliencia es la capacidad de un niño de desarrollarse de forma sana y adaptativa a pesar de haber vivido circunstancias adversas, como una separación familiar, una enfermedad o una situación de riesgo social. Esta capacidad no es innata ni fija, sino que depende en gran medida de la presencia de factores protectores, entre los que destacan un vínculo afectivo seguro con al menos un adulto de referencia y un entorno escolar estable y acogedor. Para la práctica docente, esto implica que el aula y la propia figura del maestro o maestra pueden convertirse en un factor protector decisivo para un niño que atraviesa circunstancias difíciles en su entorno familiar: por ejemplo, un niño que vive un proceso de separación de sus padres puede encontrar en la estabilidad, la previsibilidad y el afecto del aula un punto de apoyo que amortigüe el impacto emocional de esa situación y favorezca su adaptación positiva."
 },
 {
  "id": "b02-09",
  "block": "b02",
  "blockTitle": "Características Generales del Niño y la Niña hasta los Seis Años",
  "concept": "Necesidades básicas del niño de 0 a 6 años",
  "explanation": "El niño de 0 a 6 años tiene necesidades básicas de distinto tipo que deben atenderse de forma conjunta para lograr un desarrollo integral y equilibrado: necesidades fisiológicas (alimentación, sueño), afectivas (vínculo, seguridad emocional), de seguridad, de juego y movimiento, y de socialización. Atender solo unas y desatender otras perjudica el desarrollo global del niño; por ejemplo, un niño bien alimentado y cuidado físicamente pero privado de contacto afectivo cálido y estable puede presentar alteraciones emocionales y del vínculo, aunque sus necesidades fisiológicas estén cubiertas. En la práctica de aula, esto se traduce en que un maestro de Infantil debe velar simultáneamente por rutinas de cuidado físico adecuadas, por ofrecer disponibilidad emocional y consuelo ante el malestar, por garantizar tiempos y espacios de juego libre, y por facilitar oportunidades de relación con los iguales, sin priorizar de forma exclusiva ninguna de estas dimensiones sobre las demás."
 },
 {
  "id": "b02-10",
  "block": "b02",
  "blockTitle": "Características Generales del Niño y la Niña hasta los Seis Años",
  "concept": "Función del sueño en el desarrollo infantil",
  "explanation": "El sueño cumple funciones esenciales en el desarrollo neurológico, en la consolidación de la memoria y de los aprendizajes realizados durante el día, y en la secreción de hormona del crecimiento, que se libera principalmente durante el sueño profundo. Por ello, una rutina de sueño estable y suficiente —incluyendo la siesta en los primeros años— favorece tanto el aprendizaje como el crecimiento físico del niño, y no debe entenderse como un tiempo \"perdido\" o meramente de descanso pasivo. En la práctica educativa, esto justifica la importancia de mantener horarios de siesta regulares en el primer ciclo de Infantil y de cuidar aspectos como la luz, el ruido o la ansiedad de separación a la hora de dormir en el centro, ya que un sueño de mala calidad puede traducirse al día siguiente en un niño más irritable, con menor capacidad de atención y con mayor dificultad para consolidar lo aprendido el día anterior."
 },
 {
  "id": "b02-11",
  "block": "b02",
  "blockTitle": "Características Generales del Niño y la Niña hasta los Seis Años",
  "concept": "Los hitos del desarrollo como herramienta orientativa",
  "explanation": "Los hitos del desarrollo —sonreír socialmente, sentarse, caminar, decir las primeras palabras...— ofrecen una referencia orientativa y flexible, no rígida, para el seguimiento del desarrollo infantil, tanto en la práctica educativa como en la sanitaria. Su utilidad principal es permitir detectar de forma temprana posibles señales de alerta, como la ausencia de lenguaje a los 2 años, que aconsejen una valoración especializada, pero en ningún caso deben emplearse para etiquetar de forma rígida o definitiva a un niño, ni para compararlo y clasificarlo de forma competitiva frente a sus compañeros, ni para sustituir la observación directa y continuada del niño en su conjunto. Un uso educativo correcto de los hitos sería que un docente, al notar que un niño de 3 años apenas usa palabras sueltas mientras sus compañeros ya construyen frases, lo comunique a la familia para una valoración logopédica, en lugar de simplemente etiquetarlo como \"más lento\" sin más seguimiento."
 },
 {
  "id": "b02-12",
  "block": "b02",
  "blockTitle": "Características Generales del Niño y la Niña hasta los Seis Años",
  "concept": "Apego y vínculo afectivo",
  "explanation": "Un entorno afectivo estable y unos cuidados sensibles por parte del adulto, entendidos como responder con calidez y prontitud a las necesidades del niño, constituyen la base para el establecimiento de un apego seguro y de un desarrollo emocional saludable. Los efectos de este vínculo no se limitan al plano afectivo, sino que se extienden a otras áreas del desarrollo, como la exploración autónoma del entorno o la calidad de la relación con los iguales: un niño con apego seguro suele explorar con mayor confianza porque sabe que puede volver a una \"base segura\" en caso de necesitarlo. En el aula de Infantil, esto se traduce en la importancia de que el maestro o maestra actúe como figura de apego secundaria, ofreciendo disponibilidad, consistencia y respuesta sensible ante el malestar del niño, por ejemplo acudiendo con calma y sin demora cuando un niño pequeño llora al separarse de su familia, en lugar de ignorar o minimizar esa señal de necesidad afectiva."
 },
 {
  "id": "b02-13",
  "block": "b02",
  "blockTitle": "Características Generales del Niño y la Niña hasta los Seis Años",
  "concept": "Teorías cognitivas del desarrollo: Piaget y Vygotski",
  "explanation": "Dentro del período preoperatorio de Piaget (2-7 años), la subetapa preconceptual, aproximadamente de 2 a 4 años, se caracteriza especialmente por la aparición del pensamiento simbólico —el niño puede usar un palo como si fuera un caballo— y por el egocentrismo intelectual, es decir, la dificultad para ponerse en el punto de vista de una persona distinto del propio. Frente a este enfoque centrado en las estructuras internas del niño, Vygotski aporta una mirada más social del desarrollo a través de la zona de desarrollo próximo (ZDP), definida como la distancia entre lo que un niño puede hacer solo y lo que puede lograr con la ayuda de un adulto o de un compañero más competente. Por ejemplo, un niño que no consigue terminar solo un puzle pero sí lo logra con pequeñas pistas de la maestra está trabajando dentro de su zona de desarrollo próximo; esa ayuda ajustada, que se retira progresivamente a medida que el niño gana autonomía, es la base del \"andamiaje\" educativo y justifica por qué la intervención del adulto debe adaptarse constantemente al nivel real de cada niño."
 },
 {
  "id": "b02-14",
  "block": "b02",
  "blockTitle": "Características Generales del Niño y la Niña hasta los Seis Años",
  "concept": "Desarrollo del lenguaje: fases evolutivas y papel de la interacción social",
  "explanation": "En el desarrollo del lenguaje aparecen fases características, como la etapa de palabra-frase u holofrase, hacia el primer año de vida, en la que el niño usa una sola palabra —\"agua\", \"mamá\"— para expresar lo que en el habla adulta requeriría una frase completa, apoyándose en el gesto y la entonación para completar el significado. Junto con la maduración neurológica necesaria para que este proceso ocurra, la interacción social y comunicativa con los adultos resulta especialmente relevante: hablarle al bebé, responder a sus vocalizaciones o nombrar los objetos que señala son prácticas que estimulan directamente la adquisición del lenguaje. Esto implica que un bebé necesita tanto un cerebro preparado como un entorno lingüístico rico y receptivo para aprender a hablar, lo que justifica pedagógicamente prácticas de aula como narrar en voz alta lo que se está haciendo durante una rutina, cantar canciones o mantener conversaciones reales con los niños más pequeños, en lugar de limitarse a instrucciones breves y funcionales."
 },
 {
  "id": "b02-15",
  "block": "b02",
  "blockTitle": "Características Generales del Niño y la Niña hasta los Seis Años",
  "concept": "Teorías psicoafectivas y psicosociales tempranas: Freud, Erikson y el efecto Pigmalión",
  "explanation": "En la teoría psicosexual de Freud, el primer año de vida corresponde a la etapa oral, en la que la boca —succión, mordisqueo— es la principal fuente de placer y de exploración del mundo, como se observa cuando un bebé se lleva a la boca prácticamente cualquier objeto que alcanza. Erikson, por su parte, sitúa aproximadamente entre los 18 meses y los 3 años la crisis psicosocial de autonomía frente a vergüenza y duda: el niño busca hacer cosas por sí mismo —vestirse, comer solo, controlar sus esfínteres— y, si se le permite ejercer esa autonomía con apoyo, desarrolla confianza en sus propias capacidades, mientras que si se le frena o se le exige demasiado pronto puede desarrollar vergüenza o duda sobre sí mismo. Complementando estas teorías evolutivas con un fenómeno de psicología educativa, el efecto Pigmalión describe cómo las expectativas del docente sobre un alumno pueden influir, de forma no intencionada, en su rendimiento real: si el docente espera más de un niño y por ello le ofrece más atención y oportunidades, tiende a mejorar su desempeño, y ocurre lo contrario con expectativas bajas, lo que obliga al profesorado a vigilar sus propios sesgos de expectativa hacia cada alumno."
 },
 {
  "id": "b03-01",
  "block": "b03",
  "blockTitle": "Consecución de las Capacidades Generales de la Etapa mediante los Objetivos y Contenidos de las Áreas del Currículo",
  "concept": "Marco normativo del currículo de Educación Infantil en Galicia",
  "explanation": "El currículo de Educación Infantil se articula a través de una jerarquía normativa que conviene tener clara: la LOMLOE (Ley Orgánica 3/2020, aprobada en diciembre de 2020, que modifica la LOE de 2006 y deroga la LOMCE de 2013) regula el sistema educativo español en su conjunto; el Real Decreto 95/2022, de 1 de febrero, establece a nivel estatal la ordenación y las enseñanzas mínimas de la etapa; el Decreto 150/2022, de 8 de septiembre, desarrolla ese marco básico en la Comunidad Autónoma de Galicia; y la Orden de 30 de mayo de 2023 desarrolla a su vez el Decreto 150/2022, concretando aspectos como la organización de las enseñanzas por áreas de experiencia, la metodología, la evaluación y la carga horaria. En este último aspecto, la Orden fija un mínimo de 25 horas semanales de actividades escolares en el segundo ciclo de Infantil en Galicia, sin perjuicio de que los centros puedan ampliarlas. Comprender esta cadena normativa —de lo estatal a lo autonómico, y de la norma general a la de desarrollo— es imprescindible para saber en qué documento buscar cada aspecto concreto del currículo."
 },
 {
  "id": "b03-02",
  "block": "b03",
  "blockTitle": "Consecución de las Capacidades Generales de la Etapa mediante los Objetivos y Contenidos de las Áreas del Currículo",
  "concept": "Las tres áreas del currículo LOMLOE de Infantil",
  "explanation": "El currículo LOMLOE sustituye las tres áreas clásicas de Infantil —Identidad y autonomía personal, Medio físico y social, y Comunicación y representación— por tres áreas actualizadas con un enfoque más competencial y globalizador. El área \"Crecimiento en armonía\" se centra en la construcción de la identidad personal, la autonomía (vestirse, comer solo, controlar esfínteres), el conocimiento y control del propio cuerpo y el bienestar emocional, por ejemplo trabajando el reconocimiento de emociones básicas y estrategias sencillas para gestionarlas; equivale, actualizada, a la antigua área de Identidad y autonomía personal. El área \"Descubrimiento y exploración del entorno\" recoge los contenidos relacionados con el entorno físico, natural, social y cultural, la iniciación lógico-matemática y la curiosidad científica —como observar el crecimiento de una planta sembrada en el aula o clasificar objetos por tamaño—, y se corresponde con la antigua área de Medio físico, natural, social y cultural. Por último, \"Comunicación y representación de la realidad\" integra los distintos lenguajes de expresión: verbal, corporal, plástico, musical, audiovisual y las tecnologías de la información y la comunicación, sin limitarse a un único lenguaje."
 },
 {
  "id": "b03-03",
  "block": "b03",
  "blockTitle": "Consecución de las Capacidades Generales de la Etapa mediante los Objetivos y Contenidos de las Áreas del Currículo",
  "concept": "Objetivos generales de etapa y objetivos de área",
  "explanation": "A diferencia de otras etapas educativas, los objetivos de Infantil se formulan como capacidades generales a desarrollar —por ejemplo, \"desarrollar la autonomía personal\"— y no como aprendizajes cerrados y evaluables de forma estandarizada, lo que refleja el carácter no propedéutico y globalizador de la etapa. Estos objetivos abarcan capacidades relacionadas con el conocimiento de sí mismo y del propio cuerpo, la autonomía personal, las relaciones con los demás, el descubrimiento del entorno y el desarrollo de las capacidades de comunicación, y no se centran en contenidos académicos formales como la lectoescritura o el cálculo. Los objetivos de cada área concretan y desarrollan, desde su ámbito específico, esas capacidades generales de la etapa: no son independientes ni la sustituyen, sino su desarrollo particular. Por ejemplo, la capacidad general de \"comunicarse con los demás\" se concreta, en el área de Comunicación, en objetivos más específicos sobre lenguaje oral, plástico o musical, de modo que cada área contribuye, desde su ángulo, a las mismas grandes finalidades de la etapa."
 },
 {
  "id": "b03-04",
  "block": "b03",
  "blockTitle": "Consecución de las Capacidades Generales de la Etapa mediante los Objetivos y Contenidos de las Áreas del Currículo",
  "concept": "Enfoque globalizador e interdependencia entre las áreas",
  "explanation": "Las áreas del currículo de Infantil no se trabajan de forma aislada ni por asignaturas separadas: se conciben como ámbitos de experiencia interrelacionados dentro de una perspectiva globalizadora, y se relacionan entre sí de forma estrecha, sin que unas sean más importantes que otras ni sigan un orden aleatorio. Esta manera de entender el currículo responde a que el niño pequeño no percibe la realidad fragmentada por disciplinas, sino de manera global e integrada. Por ejemplo, una actividad de cocina en el aula puede trabajar simultáneamente lenguaje (vocabulario de ingredientes y utensilios), lógico-matemática (medidas, cantidades, secuencias temporales) y autonomía personal (lavarse las manos, usar utensilios con cuidado), sin que sea necesario ni deseable separar estos aprendizajes en sesiones distintas. Diseñar proyectos y rincones de aula que integren de forma natural contenidos de varias áreas es la traducción práctica más habitual de este principio globalizador."
 },
 {
  "id": "b03-05",
  "block": "b03",
  "blockTitle": "Consecución de las Capacidades Generales de la Etapa mediante los Objetivos y Contenidos de las Áreas del Currículo",
  "concept": "Tipos de contenidos: conceptuales, procedimentales y actitudinales",
  "explanation": "La clasificación clásica distingue tres tipos de contenidos según su naturaleza: los conceptuales (el \"saber\", hechos y conceptos, como conocer los colores o los nombres de los animales), los procedimentales (el \"saber hacer\", como recortar con tijeras o enhebrar cuentas) y los actitudinales (el \"saber ser\" o \"saber estar\", como respetar el turno de palabra o cuidar el material compartido). En Infantil estos tres tipos de contenido no se trabajan de forma separada, sino integrados en una misma actividad: por ejemplo, una sesión de plantación de semillas en el aula puede incluir contenido conceptual (qué necesita una planta para crecer), procedimental (cómo sembrar y regar correctamente) y actitudinal (cuidar con constancia algo vivo y esperar sin frustrarse a que crezca). Reconocer estos tres planos ayuda al docente a diseñar y evaluar actividades de forma más completa, evitando centrarse únicamente en lo conceptual."
 },
 {
  "id": "b03-06",
  "block": "b03",
  "blockTitle": "Consecución de las Capacidades Generales de la Etapa mediante los Objetivos y Contenidos de las Áreas del Currículo",
  "concept": "Principios metodológicos: aprendizaje significativo, actividad, experimentación y juego",
  "explanation": "El principio de que los aprendizajes deben adquirirse a través de la actividad y la experimentación se relaciona directamente con el aprendizaje significativo y globalizado: el niño construye su conocimiento manipulando, explorando y relacionando lo nuevo con lo que ya sabe, en lugar de memorizar información desconectada de su experiencia. Por ejemplo, aprender el concepto de \"flotar\" experimentando con distintos objetos en un cubo de agua resulta mucho más significativo que una explicación oral abstracta sobre la densidad. En coherencia con este principio, la normativa gallega establece que la metodología didáctica de Educación Infantil debe basarse en experiencias de aprendizaje significativas y en el juego como actividad propia de la etapa, y no en clases magistrales, libros de texto como recurso exclusivo o exámenes periódicos, herramientas poco adecuadas a las características evolutivas de estas edades. El juego, lejos de ser un mero pasatiempo, se convierte así en el vehículo metodológico central para lograr los objetivos de la etapa."
 },
 {
  "id": "b03-07",
  "block": "b03",
  "blockTitle": "Consecución de las Capacidades Generales de la Etapa mediante los Objetivos y Contenidos de las Áreas del Currículo",
  "concept": "Las competencias clave en Educación Infantil",
  "explanation": "Aunque las competencias clave introducidas por la LOMLOE —como la competencia en comunicación lingüística o la competencia matemática— se desarrollan de forma más explícita y formal a partir de Educación Primaria, en Infantil se sientan sus bases de manera adaptada a la edad, integradas de forma implícita en los objetivos y capacidades de la etapa, y no con la misma terminología ni el mismo tratamiento formal que en etapas posteriores. Por ejemplo, cantar canciones, contar cuentos o mantener conversaciones cotidianas con el alumnado sienta las bases de la futura competencia en comunicación lingüística, sin trabajarla aún con esa etiqueta formal ni mediante instrumentos de evaluación específicos de competencias. Esta idea es importante para entender la continuidad pedagógica entre Infantil y Primaria: lo que en Infantil se trabaja de forma experiencial y globalizada se convertirá progresivamente, en etapas posteriores, en aprendizajes competenciales más explícitos y sistematizados."
 },
 {
  "id": "b03-08",
  "block": "b03",
  "blockTitle": "Consecución de las Capacidades Generales de la Etapa mediante los Objetivos y Contenidos de las Áreas del Currículo",
  "concept": "Principios pedagógicos generales del currículo",
  "explanation": "El currículo recoge, dentro de su articulado, un apartado específico de principios pedagógicos y metodológicos generales —por ejemplo, sobre el juego, el enfoque globalizador o la atención a la diversidad— que orientan la práctica educativa a lo largo de toda la etapa, más allá de los objetivos y contenidos concretos de cada área. Este apartado funciona como una especie de \"filosofía\" o marco de referencia común que debe impregnar cualquier actividad, programación o decisión metodológica que se tome en el aula, con independencia del área curricular en la que se enmarque. Por ejemplo, si el currículo establece como principio la atención a la diversidad, un docente debe tenerlo presente tanto al planificar una sesión de psicomotricidad como al organizar un rincón de lectura, adaptando materiales y propuestas a las diferentes necesidades del alumnado, y no limitarlo a un plan de atención específico y aislado del resto de la programación."
 },
 {
  "id": "b03-09",
  "block": "b03",
  "blockTitle": "Consecución de las Capacidades Generales de la Etapa mediante los Objetivos y Contenidos de las Áreas del Currículo",
  "concept": "Transversalidad de determinados contenidos",
  "explanation": "La transversalidad de determinados contenidos, como la educación en valores, la igualdad de género o la educación para la salud, implica que estos no se limitan a un área concreta ni a un momento aislado del calendario escolar, sino que deben impregnar el conjunto de las áreas y de la práctica educativa diaria. Por ejemplo, trabajar la igualdad entre niños y niñas no se reduce a una sesión puntual el 8 de marzo, sino que debe reflejarse de forma continuada en el reparto de juegos, responsabilidades y materiales durante todo el curso: quién friega los platos en el rincón de la cocinita, quién construye con bloques grandes o quién reparte el material, por ejemplo, son decisiones cotidianas donde se plasma —o se contradice— este principio transversal. Entender la transversalidad de este modo evita que estos contenidos queden reducidos a actividades puntuales y descontextualizadas, y exige del docente una revisión constante de sus propias prácticas y del funcionamiento cotidiano del aula."
 },
 {
  "id": "b03-10",
  "block": "b03",
  "blockTitle": "Consecución de las Capacidades Generales de la Etapa mediante los Objetivos y Contenidos de las Áreas del Currículo",
  "concept": "Un currículo abierto y flexible, y la autonomía pedagógica de los centros",
  "explanation": "El currículo de Educación Infantil es más abierto y flexible que el de etapas posteriores, dejando un amplio margen de concreción a cada centro y docente para adaptarlo a su contexto, en contraste con currículos más cerrados y con estándares más definidos de otras etapas educativas. Esta apertura se traduce en la práctica en la autonomía pedagógica de los centros, que permite a cada uno concretar y adaptar el currículo oficial —siempre dentro del marco normativo vigente— a través de sus documentos institucionales, como el Proyecto Educativo de Centro o las programaciones didácticas. Por ejemplo, dos centros de la misma comunidad autónoma pueden partir del mismo Decreto de currículo y, sin embargo, priorizar metodologías distintas (trabajo por rincones, proyectos, ambientes) o dar mayor peso a determinados contenidos según las características de su alumnado y de su entorno, sin que ello suponga incumplir la normativa vigente."
 },
 {
  "id": "b03-11",
  "block": "b03",
  "blockTitle": "Consecución de las Capacidades Generales de la Etapa mediante los Objetivos y Contenidos de las Áreas del Currículo",
  "concept": "Secuenciación de contenidos en la programación didáctica",
  "explanation": "La secuenciación de contenidos dentro de una programación didáctica debe seguir un criterio de complejidad creciente y ser coherente con las características evolutivas y los aprendizajes previos del alumnado, y no responder a criterios arbitrarios como el orden alfabético o la mera disponibilidad de materiales del centro. Este principio obliga al docente a preguntarse, antes de introducir un contenido nuevo, qué aprendizajes previos requiere y si el grupo los ha consolidado ya. Por ejemplo, antes de trabajar la suma con niños de 5 años conviene haber consolidado la comprensión del conteo y de la cantidad, del mismo modo que antes de introducir el trazo de letras conviene haber trabajado suficientemente la motricidad fina y el control del gesto gráfico. Una secuenciación adecuada evita tanto la frustración del alumnado ante contenidos prematuros como la falta de estímulo ante contenidos ya dominados."
 },
 {
  "id": "b03-12",
  "block": "b03",
  "blockTitle": "Consecución de las Capacidades Generales de la Etapa mediante los Objetivos y Contenidos de las Áreas del Currículo",
  "concept": "El currículo oculto",
  "explanation": "El \"currículo oculto\" hace referencia a los aprendizajes y valores que se transmiten de forma implícita, no explícita, a través de la organización del espacio, las normas de convivencia, las actitudes del docente y la dinámica cotidiana del aula, más allá de lo recogido en el currículo oficial publicado. Es un concepto especialmente relevante porque estos mensajes implícitos pueden ser incluso más influyentes que los contenidos formalmente programados, precisamente por transmitirse de forma reiterada y no cuestionada. Por ejemplo, si sistemáticamente se elige a los niños para tareas que requieren fuerza física y a las niñas para tareas de orden y limpieza, se transmite un currículo oculto de roles de género aunque nadie lo diga explícitamente ni figure en ningún documento del centro. Ser conscientes del currículo oculto obliga al docente a revisar de forma crítica sus propias rutinas, expectativas y organización del aula, y no solo el contenido explícito de sus programaciones."
 },
 {
  "id": "b03-13",
  "block": "b03",
  "blockTitle": "Consecución de las Capacidades Generales de la Etapa mediante los Objetivos y Contenidos de las Áreas del Currículo",
  "concept": "Función tutorial: atención y seguimiento personalizado",
  "explanation": "La persona tutora tiene, entre sus funciones, la atención y el seguimiento personalizado del alumnado de su grupo, siendo el referente principal para la coordinación con las familias y con el resto del equipo docente, sin que esta función corresponda de forma exclusiva a la dirección del centro o a la jefatura de estudios. En la práctica, esto implica que es el tutor o tutora quien conoce con mayor profundidad la evolución individual de cada niño, quien mantiene el contacto más directo y frecuente con las familias, y quien articula la información relevante que deben conocer otros especialistas que intervienen con ese alumnado, como el profesorado de apoyo o el equipo de orientación. Por ejemplo, si una familia comunica un cambio relevante en la situación del hogar, es la persona tutora quien debe recoger esa información, valorar su impacto en el aula y, si procede, transmitirla de forma adecuada a otros profesionales implicados."
 },
 {
  "id": "b03-14",
  "block": "b03",
  "blockTitle": "Consecución de las Capacidades Generales de la Etapa mediante los Objetivos y Contenidos de las Áreas del Currículo",
  "concept": "Coordinación y transición entre etapas",
  "explanation": "La continuidad del proceso educativo y la transición entre etapas —por ejemplo, entre el primer y el segundo ciclo de Infantil, o entre Infantil y Primaria— exige coordinación y transmisión de información relevante entre los profesionales implicados, y no puede limitarse a una simple reunión puntual con las familias ni a una prueba final de evaluación. Esta coordinación es especialmente importante en Infantil porque los cambios de aula, de tutor o de centro pueden suponer momentos de inseguridad emocional para niños pequeños, además de riesgo de pérdida de información pedagógica relevante sobre su proceso de aprendizaje. Por ejemplo, al finalizar el segundo ciclo de Infantil, es habitual que el tutor elabore un informe individualizado de cada alumno que se traslada al futuro tutor de Primaria, y que se organicen reuniones de coordinación entre los equipos docentes de ambas etapas, de modo que el nuevo docente pueda conocer de antemano las características, ritmos y necesidades específicas de cada niño."
 },
 {
  "id": "b03-15",
  "block": "b03",
  "blockTitle": "Consecución de las Capacidades Generales de la Etapa mediante los Objetivos y Contenidos de las Áreas del Currículo",
  "concept": "La evaluación en Educación Infantil: observación directa y sistemática",
  "explanation": "La observación directa y sistemática constituye la principal técnica de evaluación señalada por la normativa gallega para Educación Infantil, complementada por otras técnicas e instrumentos, como las entrevistas con la familia o el análisis de las producciones del alumnado, en lugar de exámenes escritos o pruebas estandarizadas, poco adecuados a las características de esta etapa. Esta elección metodológica responde a que, a estas edades, gran parte de los aprendizajes relevantes —autonomía, habilidades sociales, motricidad, lenguaje oral— se manifiestan mejor en situaciones naturales de juego y de actividad cotidiana que en una prueba puntual y descontextualizada. Por ejemplo, un docente puede valorar el desarrollo de la motricidad fina de un niño observándolo mientras recorta, ensarta cuentas o dibuja durante distintas sesiones a lo largo de varias semanas, registrando sistemáticamente sus avances en un diario de observación o en una lista de control, en lugar de someterlo a una prueba aislada de motricidad."
 },
 {
  "id": "b04-01",
  "block": "b04",
  "blockTitle": "Desarrollo Cognitivo hasta los Seis Años",
  "concept": "Los estadios sensoriomotor y preoperacional de Piaget",
  "explanation": "Piaget describe cuatro grandes estadios de desarrollo cognitivo, de los cuales el niño de 0 a 6 años atraviesa los dos primeros. El estadio sensoriomotor, que se extiende desde el nacimiento hasta aproximadamente los 2 años y se divide a su vez en seis subestadios —desde los reflejos innatos hasta la combinación mental de esquemas—, es aquel en el que el niño conoce el mundo a través de los sentidos y de la acción motriz directa sobre los objetos. Hacia el final de este periodo emerge la función simbólica, que da paso al estadio preoperacional (2-6/7 años), en el que aparece el pensamiento simbólico pero todavía sin operaciones lógicas reversibles; las operaciones concretas (7-11 años) y formales (a partir de los 11-12) llegan después. Situar correctamente a un niño de Infantil dentro de este marco ayuda al docente a entender por qué, por ejemplo, un niño de 4 años puede jugar simbólicamente con gran soltura pero aún cometer errores lógicos que un niño de 8 años ya no comete."
 },
 {
  "id": "b04-02",
  "block": "b04",
  "blockTitle": "Desarrollo Cognitivo hasta los Seis Años",
  "concept": "La permanencia del objeto",
  "explanation": "La permanencia del objeto, es decir, saber que un objeto sigue existiendo aunque desaparezca temporalmente de la vista, se consolida durante el periodo sensoriomotor, en torno a los 8-12 meses de edad. Antes de adquirir esta noción, un bebé deja de buscar un juguete si se le tapa con una manta, como si hubiera dejado de existir; después de adquirirla, lo busca activamente porque sabe que sigue estando ahí aunque no lo vea directamente. Este logro cognitivo es la base de juegos tan sencillos como el \"cucú-tras\" o de esconder un objeto bajo un paño para que el bebé lo busque, actividades que no son solo entretenimiento sino auténticos ejercicios de estimulación cognitiva en el primer ciclo de Infantil. La ausencia de esta conducta de búsqueda a edades más avanzadas de lo esperado puede ser, además, un indicador a tener en cuenta en el seguimiento evolutivo del bebé."
 },
 {
  "id": "b04-03",
  "block": "b04",
  "blockTitle": "Desarrollo Cognitivo hasta los Seis Años",
  "concept": "Función simbólica: juego simbólico e imitación diferida",
  "explanation": "La función simbólica, que aparece hacia el final del periodo sensoriomotor, es la capacidad de representar mentalmente objetos, personas o situaciones ausentes mediante significantes como imágenes mentales, el lenguaje, el dibujo, el juego simbólico o la imitación diferida. El juego simbólico, o jugar a \"como si\", se desarrolla especialmente entre los 2 y los 6 años y es una de sus manifestaciones más visibles: cuando un niño usa una caja de cartón para representar un coche, o da de comer a una muñeca con una cuchara imaginaria, está poniendo en práctica esta capacidad de representación mental, no un simple entretenimiento sin trasfondo cognitivo. La imitación diferida —reproducir una conducta observada tiempo después de haberla presenciado, sin el modelo presente— requiere ese mismo tipo de representación interna: un niño que ha visto a su madre hablar por teléfono puede, horas después, coger un objeto cualquiera y \"hablar\" con él imitando esa acción, demostrando que ha almacenado internamente esa conducta observada."
 },
 {
  "id": "b04-04",
  "block": "b04",
  "blockTitle": "Desarrollo Cognitivo hasta los Seis Años",
  "concept": "Características del pensamiento preoperacional: egocentrismo, animismo, no conservación y razonamiento transductivo",
  "explanation": "El pensamiento preoperacional se apoya fundamentalmente en la percepción inmediata y la experiencia concreta, y no en la lógica formal abstracta, lo que explica varios de sus rasgos característicos. El egocentrismo intelectual —que no debe confundirse con el egoísmo, un rasgo de carácter— es la dificultad del niño para descentrarse de su propio punto de vista y considerar el de otra persona: por ejemplo, un niño de 4 años puede describir algo por teléfono señalando un objeto con la mano, como si su interlocutor pudiera ver el gesto. El animismo consiste en atribuir vida, voluntad o conciencia a objetos inanimados, como cuando un niño dice que \"la luna le sigue\" al pasear de noche o regaña a una silla que le ha hecho tropezar. La falta de conservación de cantidad, masa o número —creer que hay más líquido en un vaso alto y estrecho que en uno bajo y ancho, aunque la cantidad sea la misma— se explica por el centramiento (fijarse solo en la altura) y la irreversibilidad del pensamiento (no poder imaginar mentalmente el proceso inverso). Por último, el razonamiento transductivo va de lo particular a lo particular, estableciendo relaciones causales a veces erróneas entre hechos concretos por su proximidad temporal, como cuando un niño dice \"no he dormido la siesta, por eso todavía no es de noche\", sin una verdadera relación de causa-efecto."
 },
 {
  "id": "b04-05",
  "block": "b04",
  "blockTitle": "Desarrollo Cognitivo hasta los Seis Años",
  "concept": "Vygotski: zona de desarrollo próximo, andamiaje e internalización",
  "explanation": "Vygotski definió la zona de desarrollo próximo (ZDP) como la distancia entre lo que un niño puede hacer de forma autónoma y lo que puede lograr con la ayuda de un adulto o de un compañero más competente; un niño que no logra abrocharse los botones solo pero sí con pequeñas indicaciones de la maestra (\"empieza por el de arriba\") está actuando dentro de su ZDP. Bruner acuñó el término \"andamiaje\" (scaffolding) para describir el apoyo ajustado que el adulto ofrece dentro de esa zona, retirándolo progresivamente a medida que el niño gana autonomía, igual que un andamio de construcción se va desmontando cuando el edificio ya se sostiene solo: al enseñar a hacer un puzle, el adulto primero señala dónde va cada pieza, después solo da pistas verbales, y finalmente el niño lo resuelve sin ayuda. Este proceso de aprendizaje social se completa con la internalización: aquello que primero se realiza en interacción social, con la ayuda de otra persona (proceso interpsicológico), pasa progresivamente a convertirse en una función mental propia del individuo (proceso intrapsicológico), como cuando el niño primero cuenta con los dedos ayudado por el adulto y más adelante cuenta mentalmente por sí solo."
 },
 {
  "id": "b04-06",
  "block": "b04",
  "blockTitle": "Desarrollo Cognitivo hasta los Seis Años",
  "concept": "Memoria y atención en la etapa infantil",
  "explanation": "La memoria a corto plazo en la etapa infantil tiene una capacidad y duración más limitadas que en la edad adulta, y va aumentando progresivamente con la maduración cerebral y la experiencia: un niño de 4 años puede recordar y repetir correctamente una secuencia de 2 o 3 números, mientras que un adulto suele retener 7 sin dificultad. De forma paralela, la capacidad de atención sostenida en la primera infancia es más dispersa y de menor duración que en etapas posteriores, aunque también mejora progresivamente con la maduración y la práctica. Estas dos limitaciones cognitivas tienen una consecuencia metodológica directa: las actividades y explicaciones en el aula de Infantil deben planificarse en periodos cortos y muy dinámicos, con cambios frecuentes de propuesta y apoyo visual o manipulativo, adaptados a esta capacidad de memoria y atención todavía en desarrollo, en lugar de plantear explicaciones largas o tareas que exijan retener muchos elementos simultáneamente."
 },
 {
  "id": "b04-07",
  "block": "b04",
  "blockTitle": "Desarrollo Cognitivo hasta los Seis Años",
  "concept": "Atención conjunta y curiosidad exploratoria",
  "explanation": "La atención conjunta —mirar hacia donde mira o señala el adulto, o alternar la mirada entre un objeto y una persona para compartir el interés— es un hito relevante que suele emerger entre los 9 y los 12 meses, y se considera precursora de la comunicación intencional y del desarrollo del lenguaje, ya que implica que el bebé empieza a entender que puede compartir el foco de atención con otra persona. Más adelante, entre los 3 y los 5 años, esta orientación hacia el entorno se manifiesta en la curiosidad exploratoria y en las constantes preguntas del tipo \"¿por qué?\", que reflejan el desarrollo típico del pensamiento y la necesidad infantil de comprender y dar sentido al mundo que le rodea, y que no deben interpretarse como un problema de conducta ni de lenguaje. Un docente que responde con paciencia y curiosidad genuina a esta avalancha de preguntas, en lugar de descartarlas como una molestia, está alimentando directamente esta motivación exploratoria propia de la etapa."
 },
 {
  "id": "b04-08",
  "block": "b04",
  "blockTitle": "Desarrollo Cognitivo hasta los Seis Años",
  "concept": "Críticas a la teoría de los estadios de Piaget",
  "explanation": "Investigaciones posteriores a Piaget, realizadas por ejemplo con métodos de mirada preferente en bebés, han mostrado que algunas capacidades cognitivas, como cierta comprensión temprana de la permanencia del objeto o de pequeñas cantidades, aparecen antes de lo que Piaget planteaba originalmente. Esto ha llevado a matizar la rigidez de sus estadios y a entender el desarrollo cognitivo como algo potencialmente más gradual y menos ligado a edades fijas de lo que sugería la teoría clásica, sin que ello invalide el conjunto de su aportación teórica, que sigue siendo un marco de referencia fundamental. Para el opositor y para el futuro docente, esta matización es relevante porque advierte contra un uso demasiado rígido de las edades de Piaget como si fueran fronteras exactas: un niño puede mostrar indicios de una capacidad antes de la edad \"teórica\" esperada, y eso no contradice el conjunto de la teoría, sino que la enriquece."
 },
 {
  "id": "b04-09",
  "block": "b04",
  "blockTitle": "Desarrollo Cognitivo hasta los Seis Años",
  "concept": "La metacognición en la etapa infantil",
  "explanation": "La metacognición, entendida como la capacidad de reflexionar sobre los propios procesos de pensamiento —por ejemplo, saber si se ha entendido algo o qué estrategia usar para recordar una información—, se encuentra en un estado muy inicial y limitado durante la etapa infantil, y se desarrolla de forma más clara y consciente en etapas educativas posteriores, como Educación Primaria. Esto significa que no se puede esperar que un niño de Infantil verbalice de forma sofisticada por qué no ha entendido una explicación o qué truco mental está usando para memorizar algo, aunque ya empiecen a observarse los primeros indicios de esta capacidad. Un ejemplo sencillo de estas primeras manifestaciones sería un niño de 5 años que dice \"no me acuerdo, tengo que verlo otra vez\" ante una tarea de memoria, mostrando cierta conciencia incipiente sobre su propio proceso de recuerdo, aunque todavía muy alejada de la reflexión metacognitiva más elaborada que se trabajará en cursos posteriores."
 },
 {
  "id": "b05-01",
  "block": "b05",
  "blockTitle": "Educación Para la Salud",
  "concept": "El concepto de salud según la OMS y su carácter transversal y de promoción en Infantil",
  "explanation": "La OMS define la salud de forma integral, como un estado de completo bienestar físico, mental y social, y no meramente como la ausencia de enfermedad. Esta definición amplia justifica que en Infantil se trabaje tanto la salud física (alimentación, higiene) como la salud emocional (identificar emociones básicas como la alegría, la tristeza o el enfado, y aprender estrategias sencillas para gestionarlas) y la salud social (relaciones con los iguales), sin que la dimensión emocional resulte ajena al concepto de salud ni exclusiva de etapas posteriores. En coherencia con ello, la Educación para la Salud no se trabaja como un área independiente con horario propio, sino como un contenido transversal que impregna hábitos de higiene, alimentación, descanso y autonomía a lo largo de toda la jornada escolar, tanto en el desayuno como en el aseo o en la psicomotricidad. Este enfoque conecta además con el concepto de \"promoción de la salud\", más amplio que la mera prevención de enfermedades: busca generar de forma activa entornos, hábitos y competencias que favorezcan el bienestar integral desde la infancia —por ejemplo, fomentar el gusto por el movimiento o por una alimentación variada—, en lugar de limitarse a actuar cuando ya existe un problema."
 },
 {
  "id": "b05-02",
  "block": "b05",
  "blockTitle": "Educación Para la Salud",
  "concept": "Hábitos de autonomía e higiene relacionados con la salud",
  "explanation": "Numerosos hábitos cotidianos que se trabajan de forma sistemática en Infantil están directamente vinculados a la salud, aunque se presenten como rutinas de autonomía personal. El control de esfínteres, hito relevante que suele consolidarse de forma orientativa entre los 2 y los 3 años, y el vestido y desvestido autónomo —abrochar botones, subir cremalleras, ponerse los zapatos— desarrollan a la vez la motricidad fina, la coordinación óculo-manual y el cuidado de uno mismo, y deben respetarse siempre según el ritmo individual del niño, sin forzarlos antes de que esté fisiológica y psicológicamente preparado. Junto a estos hábitos de autonomía, existen rutinas de higiene con una finalidad sanitaria clara: la higiene postural (sentarse correctamente, no cargar peso excesivo, adaptar el mobiliario a la talla del niño), enseñar a toser o estornudar tapándose con el codo en lugar de con la mano —que después toca otros objetos y superficies— para prevenir el contagio de enfermedades transmisibles, y la ventilación regular del aula, que renueva el aire y reduce la concentración de gérmenes. Todos estos hábitos, trabajados de forma lúdica y cotidiana, sientan además la base de un autocuidado que el niño mantendrá en etapas posteriores."
 },
 {
  "id": "b05-03",
  "block": "b05",
  "blockTitle": "Educación Para la Salud",
  "concept": "Seguridad y prevención de riesgos en el aula",
  "explanation": "Un entorno seguro es condición previa para que se produzcan aprendizajes: si un niño está preocupado por un riesgo físico o se siente inseguro, difícilmente puede concentrarse en explorar y aprender. Por ello, la revisión periódica del estado de las instalaciones y del mobiliario del aula —enchufes protegidos, esquinas sin aristas peligrosas, ausencia de objetos pequeños accesibles a niños que aún se los llevan a la boca— responde al principio de prevención de riesgos y seguridad infantil, y constituye una condición previa e imprescindible para un entorno educativo adecuado, más allá de cualquier propuesta didáctica concreta. Como complemento necesario ante la posibilidad de que ocurra un accidente a pesar de estas medidas, todo centro educativo debe disponer de un botiquín adecuado, actualizado y accesible, así como de protocolos de primeros auxilios conocidos por todo el personal del centro, y no solo por quien atiende directamente al niño en un momento dado. Por ejemplo, ante una caída con una pequeña herida en el patio, cualquier miembro del personal debería saber dónde está el botiquín y qué protocolo básico seguir, sin depender de que esté presente una única persona formada en primeros auxilios."
 },
 {
  "id": "b05-04",
  "block": "b05",
  "blockTitle": "Educación Para la Salud",
  "concept": "El descanso y el sueño en la etapa infantil",
  "explanation": "El descanso —la siesta en el primer ciclo de Infantil, y momentos de relajación en el segundo— responde a necesidades fisiológicas reales del niño pequeño, y no a un mero instrumento de control disciplinario del grupo. Este momento del día es fundamental para el desarrollo físico y neurológico, ya que buena parte de la consolidación de los aprendizajes realizados durante la jornada y de la secreción de la hormona del crecimiento ocurre precisamente durante el sueño. Esto tiene implicaciones prácticas claras para el aula: eliminar la siesta antes de que el niño esté evolutivamente preparado para prescindir de ella, o tratarla como un simple momento de \"aparcar\" al alumnado, ignora su función biológica real. Por ejemplo, un docente de primer ciclo debe cuidar las condiciones ambientales del momento de la siesta —luz, ruido, temperatura, objetos de apego del niño— con la misma atención pedagógica que dedica a una actividad de aprendizaje explícito, precisamente porque el descanso también es, en sí mismo, un momento clave del desarrollo."
 },
 {
  "id": "b05-05",
  "block": "b05",
  "blockTitle": "Educación Para la Salud",
  "concept": "Ejercicio físico y juego motor diario",
  "explanation": "El movimiento y el juego motor diario son esenciales para un desarrollo físico, motor y de salud global adecuado: favorecen el desarrollo cardiovascular, muscular y óseo, además de contribuir al bienestar emocional y a la calidad del sueño, mucho más allá del mero entretenimiento o de ser un simple momento de desahogo entre actividades más \"serias\". Esta comprensión amplia de los beneficios del movimiento justifica que en la programación diaria de Infantil se reserven espacios de tiempo específicos y suficientes para el juego motor libre y para sesiones estructuradas de psicomotricidad, y no que estas actividades queden relegadas a un segundo plano frente a propuestas más estáticas. Por ejemplo, organizar un circuito psicomotor con obstáculos que impliquen saltar, reptar y trepar no solo trabaja la coordinación y el equilibrio, sino que repercute también en la calidad del descanso nocturno del niño y en su regulación emocional durante el resto de la jornada, mostrando cómo esta dimensión física de la salud se entrelaza con las demás."
 },
 {
  "id": "b05-06",
  "block": "b05",
  "blockTitle": "Educación Para la Salud",
  "concept": "Colaboración con el sistema sanitario: vacunación y detección temprana",
  "explanation": "El centro educativo mantiene una relación de colaboración, y no de sustitución, con el sistema sanitario en materia de salud infantil. El seguimiento del calendario de vacunación corresponde a las familias y al sistema sanitario; el centro no gestiona ni administra vacunas, pero colabora fomentando hábitos de salud y, en ocasiones, solicitando la cartilla de vacunación como parte de la documentación del alumnado. De forma complementaria, la detección temprana de posibles problemas de salud —visuales, auditivos, de desarrollo— corresponde en primer lugar a la observación diaria del profesorado, que debe derivar cualquier indicio a la familia y a los servicios sanitarios o de orientación correspondientes, sin diagnosticar por sí mismo en ningún caso. Por ejemplo, si un docente observa que un niño se acerca mucho a los libros para ver las imágenes o entorna los ojos con frecuencia, debe comunicarlo a la familia para que valore una revisión visual, en lugar de ignorarlo o de intentar confirmar él mismo un diagnóstico que no le corresponde."
 },
 {
  "id": "b05-07",
  "block": "b05",
  "blockTitle": "Educación Para la Salud",
  "concept": "Fotoprotección y exposición solar",
  "explanation": "La piel infantil es especialmente sensible y vulnerable a los efectos nocivos de la radiación solar, ya que tiene menos melanina protectora y una capa más fina que la piel adulta, por lo que la fotoprotección constituye una medida importante de educación para la salud en la etapa infantil, especialmente en las horas centrales del día. Esta protección no implica evitar de forma absoluta cualquier exposición al sol, sino aplicar medidas razonables: buscar la sombra en las horas de mayor intensidad solar, usar ropa y gorro adecuados, y aplicar crema solar antes de las actividades al aire libre. En la práctica de aula, esto se traduce, por ejemplo, en programar las salidas al patio evitando el tramo de mayor insolación en los meses de más calor, en solicitar a las familias que apliquen crema solar antes de traer al niño al centro en días de excursión, y en fomentar el uso de gorra durante el recreo, integrando así la fotoprotección como un hábito más de cuidado del propio cuerpo."
 },
 {
  "id": "b05-08",
  "block": "b05",
  "blockTitle": "Educación Para la Salud",
  "concept": "Protocolo ante sospecha de maltrato o negligencia",
  "explanation": "Ante cualquier sospecha de maltrato o negligencia hacia un menor, el profesorado de Infantil tiene la obligación legal y ética de comunicarlo siguiendo los protocolos de protección a la infancia establecidos, dando parte a los servicios sociales, sanitarios o a la fiscalía de menores según proceda en cada caso, sin resolverlo por su cuenta ni esperar a que sea la propia familia quien lo comunique, y sin considerarlo tampoco un asunto estrictamente privado en el que no debe intervenir. Esta obligación coloca al docente en una posición de especial responsabilidad, ya que por su contacto diario y cercano con el niño puede detectar indicios —físicos, emocionales o de comportamiento— que otros adultos no perciben. Por ejemplo, si un docente observa de forma reiterada hematomas no justificados, un cambio brusco de comportamiento o signos de negligencia en el cuidado higiénico del niño, debe documentar lo observado y activar el protocolo de protección del centro, en lugar de limitarse a hacer un comentario informal a la familia o de dejar pasar la situación."
 },
 {
  "id": "b05-09",
  "block": "b05",
  "blockTitle": "Educación Para la Salud",
  "concept": "Acompañamiento a enfermedades crónicas en el aula",
  "explanation": "El acompañamiento a niños y niñas con enfermedades crónicas, como la diabetes, el asma o las alergias graves, en el aula de Infantil requiere formación específica del personal docente, protocolos claros de actuación y una coordinación estrecha entre familia, centro y ámbito sanitario, y en ningún caso su exclusión de las actividades habituales por precaución, ni ignorar la condición médica durante la jornada escolar, ni delegar toda la responsabilidad exclusivamente en la familia. Este principio exige que el centro se implique de forma activa: por ejemplo, el personal debe saber administrar un inhalador ante una crisis asmática o reconocer los síntomas de una hipoglucemia en un niño diabético y actuar en consecuencia, en lugar de limitarse a avisar a la familia y esperar. Un caso concreto sería el de un niño con alergia grave a los frutos secos que participa con normalidad en una salida o en un taller de cocina del centro, siempre que exista un protocolo conocido por todo el personal implicado y una comunicación fluida y previa con la familia sobre las medidas de precaución necesarias."
 },
 {
  "id": "b06-01",
  "block": "b06",
  "blockTitle": "El Desarrollo de la Personalidad",
  "concept": "El apego según Bowlby: concepto, función y autor",
  "explanation": "John Bowlby formuló la teoría del apego, definiéndolo como el vínculo afectivo duradero que el bebé establece con su cuidador principal. Su aportación clave fue romper con la idea de que ese vínculo es un simple subproducto de la alimentación: para Bowlby el apego tiene una función biológica propia, de protección y búsqueda de seguridad, tan esencial para la supervivencia como la comida o el abrigo, y constituye la base sobre la que se construirá el resto del desarrollo emocional y social. En el aula esto se traduce en la importancia de que la educadora se convierta en una figura de referencia estable durante el periodo de adaptación: un bebé que llora al separarse de su cuidador y se calma al reencontrarse con él está mostrando esta conducta de apego en acción."
 },
 {
  "id": "b06-02",
  "block": "b06",
  "blockTitle": "El Desarrollo de la Personalidad",
  "concept": "Tipos de apego (Ainsworth) y apego desorganizado (Main y Solomon)",
  "explanation": "Mary Ainsworth, discípula de Bowlby, diseñó el procedimiento de la 'situación extraña' (observar la reacción del bebé ante breves separaciones y reencuentros con su figura de apego) y clasificó los patrones resultantes en apego seguro, inseguro-evitativo (el niño apenas muestra malestar y evita el contacto al reencontrarse) e inseguro-ambivalente o resistente (se muestra muy alterado y a la vez rechaza el consuelo). Posteriormente, Main y Solomon añadieron una cuarta categoría, el apego desorganizado, caracterizado por conductas contradictorias (acercarse y evitar a la vez a la figura de apego) que suelen asociarse a experiencias de negligencia, maltrato o cuidadores que resultan atemorizantes en lugar de tranquilizadores. Reconocer estos patrones ayuda al docente a interpretar reacciones de separación aparentemente 'excesivas' o 'indiferentes' sin juzgarlas precipitadamente."
 },
 {
  "id": "b06-03",
  "block": "b06",
  "blockTitle": "El Desarrollo de la Personalidad",
  "concept": "Apego seguro y el concepto de 'base segura'",
  "explanation": "El apego seguro proporciona al niño una 'base segura' —concepto acuñado por Bowlby y desarrollado por Ainsworth— es decir, un punto de referencia estable desde el que se atreve a explorar el entorno porque sabe que puede volver a esa figura en busca de consuelo si algo le inquieta, igual que quien sale de casa sabiendo que puede regresar. La investigación relaciona este tipo de vínculo con mayor facilidad para la exploración autónoma y con relaciones sociales más positivas, no con mayor dependencia. Por ejemplo, en el patio, un niño con apego seguro se alejará a jugar con otros compañeros mirando ocasionalmente hacia su educadora de referencia, y volverá a ella brevemente si se cae o se asusta, para después retomar el juego con normalidad."
 },
 {
  "id": "b06-04",
  "block": "b06",
  "blockTitle": "El Desarrollo de la Personalidad",
  "concept": "Estadios psicosociales de Erikson en la infancia",
  "explanation": "Erikson describe el desarrollo de la personalidad como una sucesión de crisis psicosociales. En el primer año domina 'confianza básica frente a desconfianza': unos cuidados consistentes y cálidos generan en el bebé la certeza de que el mundo es fiable. Entre los 18 meses y los 3 años aparece 'autonomía frente a vergüenza y duda', ligada al deseo de hacer cosas por sí mismo (comer solo, controlar esfínteres); si se apoya esa autonomía, el niño gana confianza en sus capacidades. Entre los 3 y los 6 años surge 'iniciativa frente a culpa', vinculada a planificar y dirigir actividades y juegos propios; si esa iniciativa se ridiculiza o castiga en exceso, puede aparecer el sentimiento de culpa. Un ejemplo práctico: dejar que un niño de 4 años proponga y organice un juego con sus compañeros, en vez de dirigirlo siempre el adulto, alimenta precisamente esa iniciativa sana."
 },
 {
  "id": "b06-05",
  "block": "b06",
  "blockTitle": "El Desarrollo de la Personalidad",
  "concept": "Autoconciencia, autoconcepto y autoestima: construcción y multidimensionalidad",
  "explanation": "El autoconcepto y la autoestima se construyen fundamentalmente a través de las interacciones con adultos e iguales y del feedback, verbal y no verbal, que el niño recibe de ellos, no solo por herencia genética o maduración neurológica. Además, el autoconcepto es multidimensional: la valoración que el niño hace de sí mismo varía según el ámbito —cómo se ve físicamente, cómo se relaciona socialmente, cómo se percibe como aprendiz—, dimensiones que se diferencian progresivamente con la edad. Esta autoconciencia tiene precursores observables desde muy pronto: reconocer y responder al propio nombre (girarse cuando alguien le llama) es uno de los primeros indicadores, y la prueba del espejo o del 'rouge' (marcar discretamente al niño y ver si se toca la marca al mirarse) permite estudiar la emergencia de esa autoconciencia, que suele aparecer entre los 15 y los 24 meses. Un docente que elogia de forma específica los logros de un niño ('has compartido tu pintura con Marta, qué generoso') está alimentando directamente estas dimensiones del autoconcepto."
 },
 {
  "id": "b06-06",
  "block": "b06",
  "blockTitle": "El Desarrollo de la Personalidad",
  "concept": "El temperamento infantil (Thomas y Chess)",
  "explanation": "Thomas y Chess, en su Estudio Longitudinal de Nueva York, estudiaron el temperamento como la base biológica de la personalidad, es decir, el estilo característico con que cada niño reacciona emocional y conductualmente ante los estímulos, presente desde edades muy tempranas e independiente del contenido concreto de la conducta. Describieron tres perfiles principales: el temperamento 'fácil' (niños de humor generalmente positivo y buena adaptabilidad a lo nuevo), el 'difícil' (reacciones más intensas, irregulares y de adaptación costosa) y el de 'respuesta lenta' o tímido (inicialmente retraídos ante situaciones nuevas, pero que terminan adaptándose). Esta idea es clave para la práctica docente porque recuerda que dos niños pueden responder de forma muy distinta ante la misma situación —por ejemplo, el primer día de curso— sin que ello refleje un problema, sino simplemente diferencias temperamentales que requieren un acompañamiento distinto y respetuoso con cada estilo."
 },
 {
  "id": "b06-07",
  "block": "b06",
  "blockTitle": "El Desarrollo de la Personalidad",
  "concept": "Crisis de oposición o 'etapa del no' (negativismo)",
  "explanation": "En torno a los 2-3 años es muy frecuente el negativismo o 'etapa del no': el niño dice 'no' de forma sistemática, incluso a cosas que en realidad desea. Lejos de ser un trastorno de conducta que deba corregirse con castigo, esta crisis de oposición forma parte normativa de la afirmación del yo y de la búsqueda de autonomía frente al adulto, en un momento en que el niño empieza a percibirse como alguien con voluntad propia y distinta de la de sus cuidadores. Un ejemplo típico en el aula es el niño que insiste en ponerse él mismo los zapatos, aunque tarde mucho más tiempo y termine calzándolos al revés: lo importante educativamente no es la eficacia del resultado, sino respetar y sostener ese intento de autonomía, ofreciendo opciones limitadas ('¿te pones tú los zapatos o te ayudo yo a atarlos?') en lugar de imponer o ceder sistemáticamente al capricho."
 },
 {
  "id": "b06-08",
  "block": "b06",
  "blockTitle": "El Desarrollo de la Personalidad",
  "concept": "Identidad de género básica",
  "explanation": "Hacia los 2-3 años los niños alcanzan la identidad de género básica, es decir, se reconocen y se nombran a sí mismos como niño o niña. Sin embargo, la comprensión de que esa identidad es estable en el tiempo y no cambia con la ropa, el peinado o las actividades que se realicen —la llamada 'constancia de género'— se consolida algo más tarde, hacia los 5-7 años. Esta distinción es relevante para la práctica docente: un niño de 3 años puede pensar que si se disfraza de bombero deja de ser niña, mientras que uno de 6 años entiende que su identidad de género es un rasgo estable pese a los cambios de apariencia o de rol en el juego. Comprender esta secuencia evita interpretar como 'confusión' comportamientos que en realidad son propios del nivel de desarrollo cognitivo esperable a cada edad."
 },
 {
  "id": "b06-09",
  "block": "b06",
  "blockTitle": "El Desarrollo de la Personalidad",
  "concept": "La teoría psicosexual de Freud en la etapa infantil",
  "explanation": "Freud describe, dentro de la infancia, tres fases del desarrollo psicosexual: la fase oral (primer año, con la boca como principal fuente de placer y exploración, de ahí que los bebés se lleven los objetos a la boca), la fase anal (2-3 años, centrada en el control de esfínteres y, con ello, en las primeras experiencias de autocontrol y de oposición al adulto) y la fase fálica (3-6 años, centrada en el descubrimiento de las diferencias sexuales y en el llamado complejo de Edipo o Electra), previas ya a la fase de latencia que Freud sitúa en la etapa escolar posterior. Aunque esta teoría se cuestiona hoy en muchos aspectos, resulta útil para entender el origen histórico de la idea de que existen periodos sensibles en el desarrollo de la personalidad, cada uno con sus propias tensiones y aprendizajes característicos."
 },
 {
  "id": "b06-10",
  "block": "b06",
  "blockTitle": "El Desarrollo de la Personalidad",
  "concept": "Emociones básicas y autorregulación emocional",
  "explanation": "Las emociones básicas —alegría, tristeza, miedo, enfado— están presentes ya desde los primeros meses de vida, y su expresión, comprensión y regulación se desarrollan de forma progresiva a lo largo de la infancia: un bebé llora para expresar malestar, mientras que un niño de 5 años ya puede nombrar lo que siente y esperar antes de reaccionar. La autorregulación emocional es precisamente esa capacidad, en desarrollo continuo, de modular la intensidad y la forma de expresar las propias emociones de manera cada vez más autónoma, sin que ello implique suprimirlas ni depender siempre del adulto para calmarse. Un ejemplo de intervención educativa sería enseñar a un niño enfadado a respirar hondo o a contar hasta tres antes de reaccionar, y acompañar verbalmente la emoción ('veo que estás muy enfadado porque querías ese juguete'), lo que favorece que, con el tiempo, interiorice estrategias propias de calma."
 },
 {
  "id": "b06-11",
  "block": "b06",
  "blockTitle": "El Desarrollo de la Personalidad",
  "concept": "El juego como vía de expresión y elaboración emocional",
  "explanation": "Más allá de su valor cognitivo y motor, el juego —especialmente el simbólico— permite al niño expresar y elaborar emociones, deseos y conflictos internos que aún no sabe verbalizar del todo. Al representar situaciones vividas mediante el juego, el niño puede repetirlas en un contexto seguro, bajo su propio control, lo que le ayuda a procesar la experiencia y a reducir la ansiedad asociada. El ejemplo clásico es el del niño que ha pasado miedo en una visita al médico y después 'juega a médicos' con sus muñecos, poniendo inyecciones o auscultando: al invertir los roles y dominar la situación en el juego, transforma una experiencia que vivió como pasiva y amenazante en una experiencia activa y manejable. Por ello, ofrecer tiempo y materiales para el juego simbólico libre es una herramienta educativa de primer orden para el bienestar emocional infantil."
 },
 {
  "id": "b06-12",
  "block": "b06",
  "blockTitle": "El Desarrollo de la Personalidad",
  "concept": "Estilos educativos parentales y su influencia en la regulación emocional",
  "explanation": "La inconsistencia o impredecibilidad en las pautas educativas —permitir una conducta un día y castigarla al día siguiente, o que un mismo comportamiento reciba respuestas distintas según el adulto o el estado de ánimo de este— se asocia en la investigación con mayores dificultades de regulación emocional y de conducta en el niño, porque este no puede anticipar con claridad qué se espera de él ni las consecuencias de sus actos. Frente a ello, los estilos educativos coherentes, cálidos y con límites claros y estables favorecen la seguridad emocional. En la práctica de aula, esto implica que todo el equipo educativo mantenga criterios compartidos y predecibles ante situaciones habituales (por ejemplo, qué se hace cuando un niño pega a otro), evitando que la respuesta dependa del azar o del cansancio del adulto de turno."
 },
 {
  "id": "b06-13",
  "block": "b06",
  "blockTitle": "El Desarrollo de la Personalidad",
  "concept": "Individualización de la enseñanza y respeto a los ritmos individuales",
  "explanation": "El respeto a los tiempos y ritmos individuales de cada niño en su desarrollo personal es un principio educativo esencial vinculado a la individualización de la enseñanza. No todos los niños alcanzan un mismo hito —hablar, controlar esfínteres, socializarse con soltura— al mismo tiempo, y comparar sistemáticamente a un niño con sus compañeros o hermanos ('tu hermano ya sabía hacer esto a tu edad') puede dañar seriamente su autoestima en lugar de estimularle. En la práctica, individualizar significa, por ejemplo, ofrecer a un niño con un ritmo más lento en la adquisición de la autonomía en el vestido más tiempo y apoyos ajustados (una secuencia visual de pasos, más tiempo antes de salir al patio) en vez de exigirle el mismo tiempo que al resto del grupo o hacerlo por él para ganar rapidez."
 },
 {
  "id": "b06-14",
  "block": "b06",
  "blockTitle": "El Desarrollo de la Personalidad",
  "concept": "El modelo ecológico de Bronfenbrenner y el aprendizaje social de Bandura",
  "explanation": "Bronfenbrenner propuso un modelo ecológico del desarrollo que entiende la personalidad como el resultado de la interacción entre la persona y distintos sistemas ambientales anidados: el microsistema (familia, escuela, en contacto directo con el niño), el mesosistema (las relaciones entre esos entornos, como la comunicación familia-escuela), el exosistema (entornos que influyen indirectamente, como el trabajo de los padres) y el macrosistema (la cultura y los valores sociales de fondo). Por su parte, Bandura, con la teoría del aprendizaje social, destacó el aprendizaje por observación e imitación de modelos (aprendizaje vicario): un niño puede aprender una conducta, agresiva o prosocial, simplemente observando cómo actúa un adulto o un compañero significativo, sin necesidad de experimentarla él mismo ni de recibir un refuerzo inmediato. Ambas aportaciones subrayan que la personalidad no se forma en el vacío, sino en interacción constante con modelos y contextos; de ahí la importancia de que la educadora sea consciente de que ella misma actúa como modelo observado continuamente por el alumnado."
 },
 {
  "id": "b06-15",
  "block": "b06",
  "blockTitle": "El Desarrollo de la Personalidad",
  "concept": "La jerarquía de necesidades de Maslow y el andamiaje de Bruner",
  "explanation": "Abraham Maslow formuló la conocida pirámide de necesidades humanas (fisiológicas, de seguridad, de afiliación, de estima y de autorrealización), planteando que las necesidades más básicas deben quedar razonablemente cubiertas antes de que la persona pueda centrarse en las superiores; aplicado al aula, un niño con hambre, sueño o que se siente inseguro emocionalmente difícilmente podrá concentrarse en aprender o en relacionarse bien con sus compañeros. Por su parte, Bruner describió el andamiaje, a partir de la zona de desarrollo próximo de Vygotski, como el apoyo temporal y ajustado que un adulto ofrece a un niño para que pueda realizar progresivamente una tarea por sí mismo, retirando esa ayuda a medida que el niño gana competencia —igual que se retira un andamio cuando el edificio ya se sostiene solo—. Un ejemplo combinado: antes de proponer una actividad de aprendizaje cooperativo (andamiaje), conviene asegurarse de que ningún niño del grupo tiene necesidades básicas desatendidas que le impidan implicarse (Maslow)."
 },
 {
  "id": "b06-16",
  "block": "b06",
  "blockTitle": "El Desarrollo de la Personalidad",
  "concept": "Autonomía infantil: de la moral heterónoma de Piaget a los hábitos cotidianos",
  "explanation": "Piaget relacionó el desarrollo de la autonomía con la superación progresiva del egocentrismo y con la interiorización de las normas, describiendo una evolución desde una moral heterónoma —las normas se obedecen porque las impone el adulto, sin comprenderlas realmente— hacia una moral progresivamente más autónoma, en la que el niño asume las normas como propias tras comprenderlas. Esta autonomía 'interna' se apoya y se entrena, en la práctica diaria, a través de rutinas cotidianas de autocuidado y participación —vestirse, alimentarse por sí mismo, recoger los materiales tras una actividad—, que ofrecen ocasiones repetidas para practicar la toma de decisiones y el control sobre las propias acciones, en vez de que el adulto resuelva siempre esas tareas por el niño. Por ejemplo, permitir que un niño de 4 años se sirva él mismo el agua de una jarra pequeña, aunque derrame algo al principio, entrena simultáneamente su autonomía práctica y su sentido de competencia personal."
 },
 {
  "id": "b07-01",
  "block": "b07",
  "blockTitle": "El Desarrollo del Lenguaje",
  "concept": "Etapa prelingüística: del llanto al balbuceo canónico",
  "explanation": "La etapa prelingüística abarca desde el nacimiento hasta aproximadamente el primer año e incluye el llanto, los gorjeos, el balbuceo o laleo y los gestos comunicativos (señalar, saludar con la mano), previos a la aparición de las primeras palabras propiamente dichas. Dentro de ella, el balbuceo canónico, en el que el bebé combina sílabas repetidas ('ba-ba-ba', 'ma-ma-ma'), suele aparecer entre los 6 y los 8 meses y constituye un hito relevante porque muestra que el bebé ya ensaya activamente los sonidos de su lengua materna, incluso antes de que tengan significado. Un ejemplo observable de esta etapa es el bebé de 9 meses que señala un juguete mirando alternativamente al adulto y al objeto: se está comunicando con intención clara sin usar todavía palabras, lo que recuerda al docente que la comunicación empieza mucho antes del habla."
 },
 {
  "id": "b07-02",
  "block": "b07",
  "blockTitle": "El Desarrollo del Lenguaje",
  "concept": "De las primeras palabras al habla telegráfica y la explosión del vocabulario",
  "explanation": "Las primeras palabras con intención comunicativa clara suelen aparecer, con amplia variabilidad individual, en torno al primer año de vida. Entre los 18 y los 24 meses se produce la 'explosión' o 'estallido' del vocabulario, un periodo de incremento muy rápido en el número de palabras que el niño es capaz de decir, y en ese mismo tramo de edad aparece el habla telegráfica, que combina dos o tres palabras clave (normalmente sustantivos y verbos) omitiendo nexos, artículos y desinencias gramaticales, de forma parecida a un telegrama. Un niño de esa edad diría 'mamá agua' para expresar 'mamá, quiero agua': comunica la idea esencial sin la estructura gramatical completa, un paso intermedio absolutamente normativo entre la palabra aislada y la frase completa que conviene conocer para no alarmarse ante lo que en realidad es un hito evolutivo típico."
 },
 {
  "id": "b07-03",
  "block": "b07",
  "blockTitle": "El Desarrollo del Lenguaje",
  "concept": "Teorías sobre la adquisición del lenguaje: innatismo de Chomsky y conductismo de Skinner",
  "explanation": "Chomsky defendió que los humanos poseemos una capacidad innata, el Dispositivo de Adquisición del Lenguaje (LAD), que predispone al cerebro a extraer las reglas gramaticales del lenguaje que se escucha alrededor, explicando por qué niños de culturas muy distintas adquieren su lengua materna con una rapidez y regularidad difíciles de justificar solo por imitación. En el extremo opuesto, Skinner, desde el conductismo, sostuvo que el lenguaje se adquiere igual que cualquier otra conducta: mediante imitación de modelos adultos, refuerzo (el adulto sonríe o atiende cuando el niño dice algo correctamente) y condicionamiento operante del entorno, sin necesidad de postular ninguna capacidad innata específica. Conocer ambas posturas ayuda al docente a valorar tanto la importancia de exponer al niño a un input lingüístico rico (coherente con Skinner) como la confianza en que el propio niño extrae reglas activamente, más allá de la mera repetición (coherente con Chomsky)."
 },
 {
  "id": "b07-04",
  "block": "b07",
  "blockTitle": "El Desarrollo del Lenguaje",
  "concept": "Interaccionismo social: el habla privada de Vygotski y el andamiaje social de Bruner",
  "explanation": "Frente a las posturas puramente innatistas o conductistas, el enfoque interaccionista subraya el papel del entorno social. Vygotski señaló que el habla privada o lenguaje egocéntrico que el niño usa en voz alta mientras juega —por ejemplo, decir 'ahora pongo esta pieza aquí' mientras construye una torre— cumple una función autorreguladora: le ayuda a planificar y guiar su propia acción, y con el tiempo se interioriza como pensamiento verbal interno. Bruner, por su parte, planteó que junto a una posible predisposición innata existe un 'sistema de apoyo para la adquisición del lenguaje' (LASS): el andamiaje social que el adulto ofrece mediante rutinas y formatos comunicativos repetidos, como el juego del cucú-tras o la lectura conjunta de un mismo cuento, que ofrecen estructuras predecibles que facilitan la anticipación, la participación activa y, con ello, la adquisición del lenguaje. En el aula, repetir cada día el mismo formato de saludo o de despedida con las mismas fórmulas verbales aprovecha exactamente este mecanismo."
 },
 {
  "id": "b07-05",
  "block": "b07",
  "blockTitle": "El Desarrollo del Lenguaje",
  "concept": "Componentes del lenguaje: fonológico, morfosintáctico, semántico y pragmático",
  "explanation": "El lenguaje se analiza clásicamente a través de cuatro componentes: el fonológico, que estudia los sonidos y su combinación; el morfosintáctico, que se ocupa de la formación de palabras y de la estructura de las frases; el semántico, referido al significado; y el pragmático, que estudia el uso funcional y contextual del lenguaje en la comunicación real —los turnos de palabra, la adecuación del mensaje al interlocutor, las intenciones comunicativas como pedir, saludar o protestar—. Un ejemplo de competencia pragmática es que el niño aprenda a esperar a que el otro termine de hablar antes de intervenir, o a usar un tono distinto para pedir algo que para saludar. Es importante no confundir estos componentes lingüísticos con otras dimensiones del desarrollo infantil, como la psicomotricidad, que pertenece a un ámbito distinto del desarrollo y no forma parte del análisis del lenguaje."
 },
 {
  "id": "b07-06",
  "block": "b07",
  "blockTitle": "El Desarrollo del Lenguaje",
  "concept": "Sobregeneralización o sobrerregularización gramatical",
  "explanation": "La sobregeneralización, o sobrerregularización, es el fenómeno por el cual un niño aplica de forma errónea una regla gramatical general a una forma irregular donde esa regla no funciona, por ejemplo diciendo 'rompido' en lugar de 'roto', o 'cabo' en lugar de 'quepo'. Lejos de ser un error preocupante o un signo de dificultad, este fenómeno demuestra, paradójicamente, que el niño no se limita a imitar literalmente lo que oye, sino que extrae de forma activa reglas gramaticales generales (por ejemplo, añadir '-ido' para formar participios) y las aplica de manera sistemática, incluso allí donde se equivoca. Para el docente, esta información es valiosa porque distingue un error 'inteligente', propio de un proceso normal de adquisición gramatical activa, de una dificultad real: no conviene corregir de forma insistente estas formas, sino simplemente ofrecer el modelo correcto con naturalidad en la conversación."
 },
 {
  "id": "b07-07",
  "block": "b07",
  "blockTitle": "El Desarrollo del Lenguaje",
  "concept": "Lenguaje receptivo y lenguaje expresivo",
  "explanation": "El lenguaje receptivo, es decir, la capacidad de comprender lo que se dice, suele preceder o desarrollarse en paralelo al lenguaje expresivo, la capacidad de producir palabras y frases. Es habitual que un niño comprenda instrucciones sencillas ('trae la pelota', 'dame la mano') mucho antes de ser capaz de formular frases similares por sí mismo. Esta distinción es clave para la observación docente: un niño que aún no habla con soltura puede, sin embargo, entender perfectamente lo que se le dice y seguir instrucciones complejas, por lo que no conviene simplificar en exceso el lenguaje que se le dirige asumiendo que 'no entiende', ni confundir un retraso en la producción con un retraso en la comprensión, que son procesos evolutivamente distintos y que conviene valorar de forma diferenciada."
 },
 {
  "id": "b07-08",
  "block": "b07",
  "blockTitle": "El Desarrollo del Lenguaje",
  "concept": "Estrategias adultas de estimulación del lenguaje: expansiones y habla maternal",
  "explanation": "Existen estrategias adultas concretas que favorecen el desarrollo lingüístico infantil. Las expansiones consisten en ampliar lo que el niño acaba de decir con un modelo más completo: si el niño dice 'perro', el adulto responde 'sí, es un perro grande y marrón que está durmiendo', enriqueciendo así el vocabulario y las estructuras gramaticales a partir de lo que el propio niño ha comunicado. El 'lenguaje dirigido al niño' o habla maternal (motherese), caracterizado por un tono más agudo, frases más cortas, ritmo más lento y repeticiones, capta de forma natural la atención del bebé y facilita que segmente y reconozca los sonidos y palabras de su lengua; lejos de ser un lenguaje 'incorrecto' que deba evitarse, resulta beneficioso en los primeros años. Combinar ambas estrategias en las conversaciones cotidianas del aula —hablar despacio y claro, y expandir siempre un poco más lo que el niño dice— es una herramienta sencilla y muy eficaz de estimulación lingüística."
 },
 {
  "id": "b07-09",
  "block": "b07",
  "blockTitle": "El Desarrollo del Lenguaje",
  "concept": "La distinción entre lengua y habla (Saussure)",
  "explanation": "Ferdinand de Saussure distinguió la lengua, el sistema lingüístico abstracto y social compartido por toda una comunidad de hablantes (el conjunto de reglas y de vocabulario del español, por ejemplo), del habla, la realización concreta e individual que cada hablante hace de ese sistema en un momento dado. Esta distinción resulta útil para entender el proceso de adquisición del lenguaje infantil: cada niño se va apropiando progresivamente, con su propio estilo, ritmo y particularidades de pronunciación o de elección de palabras, del sistema lingüístico compartido de su comunidad, sin que ello signifique que está creando un sistema distinto. Por ejemplo, dos niños de la misma edad y del mismo entorno lingüístico pueden expresar la misma idea con palabras o construcciones ligeramente distintas (habla), sin dejar de compartir las mismas reglas gramaticales de fondo (lengua)."
 },
 {
  "id": "b07-10",
  "block": "b07",
  "blockTitle": "El Desarrollo del Lenguaje",
  "concept": "Conciencia fonológica: canciones, rimas y trabalenguas",
  "explanation": "Cantar canciones y recitar rimas y trabalenguas con los niños favorece especialmente el desarrollo de la conciencia fonológica, es decir, la capacidad de percibir y manipular los sonidos del habla —sílabas, rimas, sonidos iniciales— con independencia de su significado. Estas actividades, además de despertar el gusto y el interés por el lenguaje, constituyen una base importante para el posterior aprendizaje de la lectoescritura, ya que leer y escribir exige precisamente poder segmentar y relacionar sonidos con letras. Un ejemplo de actividad concreta sería jugar a buscar palabras que rimen con el nombre de un compañero, o a dar palmadas por cada sílaba de una palabra ('ma-ri-po-sa'), ejercicios que entrenan directamente esta habilidad fonológica sin necesidad todavía de saber leer."
 },
 {
  "id": "b07-11",
  "block": "b07",
  "blockTitle": "El Desarrollo del Lenguaje",
  "concept": "Signos de alerta y trastornos específicos del lenguaje (TEL)",
  "explanation": "Es importante que el docente distinga entre variaciones normales del ritmo de adquisición del lenguaje y auténticos signos de alerta. Que un niño de 12 meses aún no combine dos palabras, que uno de 3 años use frases de solo dos o tres palabras, o que uno de 5 años cometa algún error ocasional de pronunciación son todos hitos propios del desarrollo típico. En cambio, la ausencia total de palabras con intención comunicativa a los 2 años sí se considera un signo de alerta que aconseja una valoración especializada. Los trastornos específicos del lenguaje (TEL) se caracterizan precisamente por una dificultad significativa y persistente en la adquisición del lenguaje —que puede afectar a la comprensión y a la producción— no explicada por una discapacidad intelectual, un déficit sensorial como la sordera, ni un trastorno neurológico evidente, y que no se resuelve de forma espontánea, sino que requiere valoración e intervención logopédica especializada."
 },
 {
  "id": "b08-01",
  "block": "b08",
  "blockTitle": "El Desarrollo Psicomotor en los Niños y Niñas hasta los Seis Años",
  "concept": "Concepto de psicomotricidad y su finalidad integral en Educación Infantil",
  "explanation": "La psicomotricidad concibe el movimiento como expresión global de la persona, integrando las funciones motrices, cognitivas y afectivo-relacionales, y no solo el componente físico o anatómico. En Educación Infantil su finalidad no es preparar para el deporte competitivo ni trabajar de forma aislada la fuerza muscular, sino favorecer el desarrollo integral del niño a través del movimiento, mejorando a la vez su conocimiento del propio cuerpo, su autonomía y su autoestima. Un ejemplo muy claro es el de un niño construyendo una torre de bloques: al mismo tiempo está ejercitando la motricidad fina, resolviendo un problema práctico (cómo evitar que la torre se caiga) y disfrutando emocionalmente del logro, lo que ilustra perfectamente esa integración de lo motor, lo cognitivo y lo afectivo que define a la disciplina."
 },
 {
  "id": "b08-02",
  "block": "b08",
  "blockTitle": "El Desarrollo Psicomotor en los Niños y Niñas hasta los Seis Años",
  "concept": "El esquema corporal",
  "explanation": "El esquema corporal es la representación mental que el niño tiene de su propio cuerpo, de sus partes y de sus posibilidades de movimiento. No está definido al nacer ni aparece de forma instantánea, sino que se construye progresivamente a lo largo de toda la etapa infantil gracias a la experiencia motriz, sensorial y perceptiva directa. Por ejemplo, un niño de 2 años puede señalar 'la tripa' con facilidad pero confundir aún la localización precisa de otras partes del cuerpo, mientras que hacia los 5-6 años suele tener un esquema corporal mucho más ajustado y diferenciado, capaz de identificar y nombrar con precisión articulaciones y segmentos corporales. Actividades como los juegos de imitación corporal frente al espejo, las canciones que nombran partes del cuerpo o los circuitos psicomotores contribuyen activamente a esta construcción."
 },
 {
  "id": "b08-03",
  "block": "b08",
  "blockTitle": "El Desarrollo Psicomotor en los Niños y Niñas hasta los Seis Años",
  "concept": "Hitos motores gruesos y su secuencia evolutiva",
  "explanation": "El desarrollo motor grueso sigue una secuencia orientativa bien documentada: el control cefálico, es decir, sostener la cabeza erguida sin que caiga hacia delante o los lados, se consolida hacia los 3-4 meses; la marcha autónoma, entre los 12 y los 15 meses, aunque con variabilidad individual normal; el salto con los dos pies juntos, en torno a los 2 años; y subir y bajar escaleras alternando los pies (un pie en cada escalón), hacia los 3-4 años, tras una etapa previa en la que el niño apoya ambos pies en cada escalón por falta de equilibrio suficiente. Conocer esta secuencia orientativa permite al docente diseñar propuestas motrices ajustadas a cada edad —por ejemplo, no exigir a un niño de 2 años que alterne los pies en la escalera— y detectar, sin alarmismo pero con atención, retrasos significativos que se aparten claramente de estos márgenes."
 },
 {
  "id": "b08-04",
  "block": "b08",
  "blockTitle": "El Desarrollo Psicomotor en los Niños y Niñas hasta los Seis Años",
  "concept": "Leyes del desarrollo motor: cefalocaudal, próximo-distal y de lo global a lo específico",
  "explanation": "El desarrollo psicomotor sigue tres grandes principios organizativos. La ley cefalocaudal establece que el control motor avanza de la cabeza hacia los pies (por eso el bebé controla antes la cabeza que las piernas). La ley próximo-distal describe la progresión del control desde las partes centrales del cuerpo —hombro, cadera— hacia las extremidades más alejadas —dedos—: un bebé controla antes el movimiento global del brazo que el movimiento fino e independiente de cada dedo. Por último, el desarrollo progresa de lo global a lo específico o segmentario: al principio el bebé reacciona con todo el cuerpo ante un estímulo, por ejemplo agitando brazos y piernas a la vez ante algo que le sorprende, y con la maduración va siendo capaz de movimientos cada vez más precisos y localizados en una sola parte del cuerpo. Estas tres leyes explican, en conjunto, por qué la motricidad fina de manos y dedos madura más tarde que el control de los grandes movimientos del tronco y las piernas."
 },
 {
  "id": "b08-05",
  "block": "b08",
  "blockTitle": "El Desarrollo Psicomotor en los Niños y Niñas hasta los Seis Años",
  "concept": "Motricidad fina: de los reflejos a la pinza digital y la coordinación óculo-manual",
  "explanation": "La motricidad fina implica movimientos de precisión de manos y dedos, en contraste con la motricidad gruesa, que implica grandes grupos musculares como al andar, saltar o correr. Su desarrollo parte de reflejos arcaicos, como el reflejo de prensión palmar (el bebé cierra la mano al tocarle la palma), presente ya en el recién nacido y que se inhibe entre los 3 y los 6 meses, dando paso a la prensión voluntaria e intencional. Sobre esa base madura la pinza digital fina (usar el índice y el pulgar para coger objetos pequeños, como una miga de pan), que suele consolidarse entre los 9 y los 12 meses y es precursora de habilidades posteriores como sostener un lápiz o abrochar un botón. La coordinación óculo-manual, es decir, entre lo que ve el ojo y lo que hace la mano, se ejercita especialmente mediante actividades como recortar siguiendo una línea, ensartar cuentas en un cordón o lanzar y atrapar una pelota, en las que la vista guía y ajusta continuamente el movimiento de la mano."
 },
 {
  "id": "b08-06",
  "block": "b08",
  "blockTitle": "El Desarrollo Psicomotor en los Niños y Niñas hasta los Seis Años",
  "concept": "Tono muscular y equilibrio estático y dinámico",
  "explanation": "El tono muscular es el grado de tensión o contracción muscular, tanto en reposo como durante el movimiento, y constituye la base de la postura, la regulación motriz y el equilibrio: un tono adecuado permite, por ejemplo, mantenerse sentado sin desplomarse (hipotonía) ni estar excesivamente rígido (hipertonía). Sobre esa base tónica se construye el equilibrio, que puede ser estático —mantenerse quieto en una postura, como a la pata coja— o dinámico —mantener el control corporal mientras se está en movimiento, como al caminar por un banco sueco—. En Educación Infantil ambos se trabajan mediante actividades corporales concretas: caminar por una línea pintada en el suelo, mantenerse sobre un solo pie durante unos segundos o desplazarse por bancos y colchonetas de distinta altura, propuestas que exigen un ajuste tónico y postural constante y que resultan mucho más eficaces que cualquier explicación verbal sobre el equilibrio."
 },
 {
  "id": "b08-07",
  "block": "b08",
  "blockTitle": "El Desarrollo Psicomotor en los Niños y Niñas hasta los Seis Años",
  "concept": "Praxia y disociación de movimientos",
  "explanation": "La praxia es la capacidad de organizar y ejecutar movimientos voluntarios coordinados con una finalidad concreta, como abrocharse un botón, recortar una figura siguiendo su contorno o hacer un lazo en los cordones; se distingue de un reflejo, automático e involuntario, precisamente porque implica una intención y una planificación previas. Un nivel más avanzado de esta organización motriz es la disociación de movimientos, es decir, la capacidad de mover una parte del cuerpo de forma independiente de otra —por ejemplo, mover solo un brazo mientras el resto del cuerpo permanece quieto—, habilidad que mejora de forma notable a lo largo de la etapa infantil. Un ejemplo cotidiano que combina ambos conceptos es aprender a saludar con una sola mano mientras se sostiene un objeto con la otra: exige tanto planificación intencional (praxia) como control independiente de cada segmento corporal (disociación)."
 },
 {
  "id": "b08-08",
  "block": "b08",
  "blockTitle": "El Desarrollo Psicomotor en los Niños y Niñas hasta los Seis Años",
  "concept": "La lateralidad",
  "explanation": "La lateralidad es el predominio de un lado del cuerpo —mano, pie, ojo— sobre el otro. Antes de definirse existe un proceso previo de exploración bilateral, en el que el bebé usa indistintamente ambas manos sin preferencia clara. Esta lateralidad suele quedar establecida de forma más estable hacia el final de la etapa infantil, entre los 5 y los 6 años, por lo que no conviene forzar precozmente a un niño a usar una mano determinada, por ejemplo obligando a escribir con la derecha a un niño que muestra una tendencia natural a usar la izquierda. Respetar este proceso de maduración espontánea es importante porque forzar la lateralidad antes de que esté consolidada puede generar inseguridad motriz y dificultades posteriores en tareas que requieren un dominio lateral claro, como la escritura."
 },
 {
  "id": "b08-09",
  "block": "b08",
  "blockTitle": "El Desarrollo Psicomotor en los Niños y Niñas hasta los Seis Años",
  "concept": "Estructuración espacio-temporal",
  "explanation": "Las nociones espacio-temporales —antes-después, rápido-lento, cerca-lejos, arriba-abajo— se desarrollan a partir de la vivencia corporal directa, como desplazarse por el espacio, moverse a distinto ritmo o situar el propio cuerpo respecto a los objetos, antes de que el niño sea capaz de comprenderlas de forma simbólica o abstracta, por ejemplo en una explicación verbal o en una ficha de matemáticas. Esto tiene una implicación metodológica directa: antes de trabajar estos conceptos sobre el papel, conviene que el niño los haya vivido con su propio cuerpo. Un ejemplo de secuencia adecuada sería primero jugar a desplazarse 'rápido' y 'lento' por el aula al ritmo de una pandereta, después verbalizar esa experiencia ('cuando el tambor iba rápido, yo corría') y solo más adelante, ya en Primaria, trabajar esas mismas nociones de forma simbólica en una actividad de lápiz y papel."
 },
 {
  "id": "b08-10",
  "block": "b08",
  "blockTitle": "El Desarrollo Psicomotor en los Niños y Niñas hasta los Seis Años",
  "concept": "La relajación como contenido de la educación psicomotriz",
  "explanation": "La relajación, como contenido específico de la educación psicomotriz, favorece la toma de conciencia del propio cuerpo y contribuye a la regulación del tono muscular y del estado emocional. Dedicar unos minutos tras una sesión de juego motor intenso a tumbarse, respirar tranquilamente o escuchar una música suave ayuda al niño a volver a un estado de calma antes de continuar con otra actividad, y le enseña, de forma vivencial, que es posible pasar de un estado de activación alta a uno de reposo de manera controlada. Además de su valor fisiológico inmediato, este momento de cierre cumple una función pedagógica importante: permite al niño simbolizar y tomar distancia de lo vivido en el juego motor, preparando la transición hacia actividades que requieren mayor concentración, como una asamblea o una actividad de mesa."
 },
 {
  "id": "b08-11",
  "block": "b08",
  "blockTitle": "El Desarrollo Psicomotor en los Niños y Niñas hasta los Seis Años",
  "concept": "Las sensaciones exteroceptivas, propioceptivas e interoceptivas",
  "explanation": "El cuerpo recibe información sensorial de tres tipos, todos ellos relevantes para la psicomotricidad. Las sensaciones exteroceptivas informan sobre estímulos procedentes del exterior del cuerpo, como la vista, el oído o el tacto sobre la piel. Las sensaciones propioceptivas aportan información sobre la posición y el movimiento del propio cuerpo, procedente de músculos y articulaciones, y son la base del equilibrio y de la coordinación motriz fina, ya que permiten, por ejemplo, saber dónde está la mano sin necesidad de mirarla. Las sensaciones interoceptivas informan sobre el estado de los órganos internos, como el hambre o la necesidad de ir al baño. Un ejemplo de actividad que trabaja específicamente la propiocepción es caminar con los ojos cerrados por un circuito conocido, apoyándose únicamente en la sensación corporal y no en la vista para orientarse."
 },
 {
  "id": "b08-12",
  "block": "b08",
  "blockTitle": "El Desarrollo Psicomotor en los Niños y Niñas hasta los Seis Años",
  "concept": "Modelos y autores de referencia en psicomotricidad: Aucouturier, Lapierre, Le Boulch y Wallon",
  "explanation": "Varios autores han desarrollado enfoques complementarios sobre la psicomotricidad. Bernard Aucouturier propuso la práctica psicomotriz vivenciada, que estructura la sesión en tres momentos: un ritual de entrada, un momento central de juego motor y simbólico, y un cierre de representación y relajación. André Lapierre desarrolló la psicomotricidad relacional, que pone el énfasis en la dimensión afectiva y relacional del movimiento y el juego corporal —el vínculo, la confianza, la expresión de emociones a través del cuerpo— más allá de sus aspectos técnicos o deportivos. Le Boulch, con su concepción de la 'psicocinética', consideró el movimiento un medio privilegiado para el desarrollo global del niño y no solo un fin en sí mismo. Y Wallon concedió un papel central al movimiento y a la emoción, entendiendo que ambos están estrechamente unidos desde el nacimiento y que la actividad motriz es también un canal fundamental de expresión y comunicación emocional del niño con quienes lo rodean."
 },
 {
  "id": "b08-13",
  "block": "b08",
  "blockTitle": "El Desarrollo Psicomotor en los Niños y Niñas hasta los Seis Años",
  "concept": "Metodología y evaluación de la psicomotricidad: globalización, observación directa y Brunet-Lézine",
  "explanation": "La psicomotricidad infantil se aborda desde un enfoque global, activo y socializado, coherente con cómo aprende el niño pequeño —a través de la acción y en interacción con los demás—, y no mediante memorización, repetición mecánica o clases exclusivamente expositivas. En consonancia con esto, la observación directa y continua es la técnica de evaluación especialmente adecuada, ya que permite recoger información contextualizada sobre cómo se mueve, se coordina y se relaciona el niño en situaciones reales de juego, algo que un examen escrito no podría captar a esta edad. Junto a la observación cotidiana del docente, existen instrumentos estandarizados como la escala de Brunet-Lézine, un test clásico utilizado tradicionalmente para valorar el desarrollo psicomotor en la primera infancia, que evalúa distintas áreas —motricidad, coordinación, lenguaje, sociabilidad— comparando el desempeño del niño con baremos por edad, útil sobre todo para detectar posibles retrasos que requieran valoración especializada."
 },
 {
  "id": "b08-14",
  "block": "b08",
  "blockTitle": "El Desarrollo Psicomotor en los Niños y Niñas hasta los Seis Años",
  "concept": "El material sensorial Montessori",
  "explanation": "Los materiales sensoriales Montessori, como los cilindros de encaje (de distinto diámetro o altura) o la torre rosa (cubos de distinto tamaño que se apilan en orden), están diseñados para que el niño refine sus sentidos y su percepción de propiedades como el tamaño, el peso o la textura mediante la manipulación autónoma. Una característica esencial de este material es que varía un único atributo cada vez, lo que facilita la discriminación perceptiva, y que es autocorrectivo: el propio material permite al niño detectar visualmente si se ha equivocado, sin necesidad de que el adulto le corrija. Por ejemplo, con la torre rosa, si un cubo se coloca en el orden incorrecto de tamaño, el desajuste resulta visualmente evidente y el propio niño puede corregirlo, lo que fomenta el trabajo autónomo, la concentración y el respeto al ritmo individual de cada niño, principios centrales de la pedagogía Montessori."
 },
 {
  "id": "b09-01",
  "block": "b09",
  "blockTitle": "El Niño Descubre a los Otros",
  "concept": "Tipos de juego social según Mildred Parten",
  "explanation": "Mildred Parten clasificó el juego infantil según su grado de interacción social, describiendo una progresión evolutiva desde formas más individuales hacia formas más organizadas de jugar con otros. El juego solitario, en el que el niño juega solo centrado en su propia actividad sin buscar interacción, es especialmente característico de las primeras edades. El juego paralelo aparece hacia los 2-3 años: los niños juegan cerca unos de otros, incluso con materiales similares, pero sin interacción directa, como dos niños sentados uno junto al otro haciendo cada uno su propio castillo de arena sin hablarse. En el juego asociativo ya existe interacción real —hablan entre sí, comparten materiales o ideas— pero sin una organización de roles ni una meta común, por ejemplo varios niños jugando juntos con los mismos bloques sin un plan compartido de qué construir. Por último, el juego cooperativo, con meta común y reparto de roles (organizar entre varios niños 'una tienda' donde unos son vendedores y otros clientes), representa el nivel más avanzado y se consolida hacia el segundo ciclo de Infantil, entre los 4 y los 6 años, como culminación de todo este proceso."
 },
 {
  "id": "b09-02",
  "block": "b09",
  "blockTitle": "El Niño Descubre a los Otros",
  "concept": "Agentes y espacios de socialización: la familia y las asambleas de aula",
  "explanation": "La familia constituye el primer y más influyente agente de socialización, ya que proporciona al niño las primeras pautas de relación, afecto y comunicación mucho antes de que entre en contacto con la escuela, los medios de comunicación o el grupo de iguales, que actuarán como agentes socializadores posteriores y complementarios. Dentro de la escuela, las asambleas y los momentos de puesta en común —por ejemplo, al inicio de la jornada, para comentar cómo se sienten los niños o qué planes hay para el día— son espacios privilegiados para desarrollar habilidades comunicativas, de escucha activa y de convivencia democrática en el grupo, más allá de su valor como simple rutina organizativa. En conjunto, ambos contextos —el familiar y el escolar— actúan de forma complementaria en la construcción de las competencias sociales del niño, por lo que la coordinación entre familia y centro resulta especialmente valiosa."
 },
 {
  "id": "b09-03",
  "block": "b09",
  "blockTitle": "El Niño Descubre a los Otros",
  "concept": "Cognición social: teoría de la mente y evolución del juicio moral en Piaget",
  "explanation": "Dos procesos cognitivos resultan clave para comprender cómo el niño llega a entender a los demás. La teoría de la mente, es decir, la capacidad de atribuir a otras personas creencias, deseos e intenciones distintos de los propios, se desarrolla de forma más clara en torno a los 4-5 años, momento en el que los niños superan las clásicas tareas de falsa creencia: un niño de 3 años suele creer que otra persona sabrá dónde está un objeto que ha sido movido en su ausencia, mientras que uno de 5 años comprende que esa persona seguirá creyendo que está en el lugar original, porque no vio el cambio. En paralelo, Piaget describe una evolución del juicio moral desde una moral heterónoma en los primeros años —algo está mal 'porque lo dice la maestra' o 'porque castigan'— hacia una moral progresivamente más autónoma, basada en la comprensión, la cooperación y la reciprocidad entre iguales, que se consolida en etapas posteriores. Ambos procesos muestran que comprender a los demás y comprender las normas son conquistas graduales, no capacidades innatas ya disponibles desde el principio."
 },
 {
  "id": "b09-04",
  "block": "b09",
  "blockTitle": "El Niño Descubre a los Otros",
  "concept": "Gestión educativa de conflictos, agresividad y habilidades sociales básicas",
  "explanation": "Los conflictos entre iguales —por un juguete, por un turno— son inherentes a la vida en grupo y deben entenderse como oportunidades de aprendizaje social, no como situaciones a evitar o sancionar automáticamente: acompañados adecuadamente, permiten practicar negociación, empatía y regulación emocional. El papel educativo ante un conflicto no consiste en que el adulto lo resuelva por los niños ni en ignorarlo, sino en acompañar el proceso para que ellos mismos aprendan a expresar sus sentimientos, escuchar al otro y buscar juntos una solución, con un apoyo ajustado y progresivamente menor (un andamiaje aplicado a lo social). Dentro de estos conflictos conviene distinguir la agresividad instrumental, que busca un fin concreto como quitar un juguete sin intención de dañar, de la agresividad hostil, que busca causar daño intencionadamente; cada una requiere una intervención distinta, negociar o esperar turno en el primer caso, y trabajar la gestión de la rabia y la empatía en el segundo. Precisamente compartir juguetes y esperar el turno son habilidades sociales que no se dominan de forma innata, sino que deben aprenderse y practicarse progresivamente, por ejemplo usando un reloj de arena visual para marcar los turnos con un juguete muy demandado."
 },
 {
  "id": "b09-05",
  "block": "b09",
  "blockTitle": "El Niño Descubre a los Otros",
  "concept": "Empatía y primeros vínculos de amistad infantil",
  "explanation": "Ya desde el primer año de vida se observan precursores de la empatía, como el contagio emocional —un bebé se pone a llorar al oír llorar a otro bebé— o la preocupación empática incipiente, como acercarse a tocar o mirar con atención a alguien que está triste; estas manifestaciones tempranas evolucionan hacia formas de empatía más complejas y deliberadas a lo largo de la infancia. Sobre esta base emocional se construyen los primeros vínculos de amistad, que en Infantil suelen basarse principalmente en la proximidad física —sentarse cerca, vivir cerca— y en compartir actividades y juegos, más que en criterios abstractos de personalidad o valores compartidos, que sí aparecerán en la amistad de etapas posteriores. Por ejemplo, dos niños de 4 años pueden considerarse 'mejores amigos' simplemente por sentarse siempre juntos en el comedor y jugar cada día en el mismo rincón, sin que medien todavía razones más elaboradas para esa elección."
 },
 {
  "id": "b09-06",
  "block": "b09",
  "blockTitle": "El Niño Descubre a los Otros",
  "concept": "El juego simbólico como ensayo de roles sociales",
  "explanation": "El juego de roles, como 'jugar a médicos' o 'jugar a familias', favorece principalmente la comprensión y el ensayo de roles y normas sociales presentes en el entorno del niño, permitiéndole practicar de forma segura situaciones sociales reales —ir al médico, cocinar, cuidar a un bebé— antes de afrontarlas fuera del juego. Al representar estos roles, el niño no solo imita comportamientos observados, sino que empieza a comprender las relaciones y expectativas asociadas a cada papel social: qué hace un médico, qué espera un paciente, cómo se cuida a alguien. Por ejemplo, en el rincón de la casita, un grupo de niños que reparte espontáneamente los papeles de 'padre', 'madre' y 'bebé' está ensayando, a través del juego, estructuras y dinámicas sociales que observa en su vida cotidiana, lo que constituye una vía privilegiada de aprendizaje social indirecto."
 },
 {
  "id": "b09-07",
  "block": "b09",
  "blockTitle": "El Niño Descubre a los Otros",
  "concept": "Descentración social frente a egocentrismo y egoísmo",
  "explanation": "La descentración social, complementaria a la descentración cognitiva descrita por Piaget, es el proceso progresivo por el cual el niño supera su egocentrismo inicial y va siendo capaz de considerar la perspectiva, las necesidades y los sentimientos de otras personas. Por ejemplo, un niño de 3 años puede insistir en enseñar un dibujo a alguien que está de espaldas a él, sin darse cuenta de que así no puede verlo, mientras que uno de 5-6 años ya tiende a ponerse delante para que el otro lo vea. Es fundamental no confundir este egocentrismo cognitivo, una limitación evolutiva normal del pensamiento propio de esta etapa, con el egoísmo, que implica una valoración moral de la conducta —actuar deliberadamente en beneficio propio a costa de otro—: un niño egocéntrico no es necesariamente 'egoísta' en sentido moral, sino que simplemente todavía no ha desarrollado plenamente la capacidad de adoptar el punto de vista ajeno, y etiquetarlo como tal sería injusto y pedagógicamente poco útil."
 },
 {
  "id": "b09-08",
  "block": "b09",
  "blockTitle": "El Niño Descubre a los Otros",
  "concept": "Vínculos familiares: apego múltiple y llegada de un hermano o hermana",
  "explanation": "La investigación actual sobre el apego reconoce que los bebés pueden establecer vínculos de apego con varias figuras significativas a la vez —madre, padre, abuelos, educadora de referencia—, aunque suele existir una figura de apego principal; este apego múltiple no perjudica el desarrollo, sino que puede aportar al niño una red de seguridad emocional más amplia. Dentro de la dinámica familiar, la llegada de un hermano o hermana pequeño suele suponer para el niño mayor la necesidad de reorganizar su lugar dentro de la familia y de gestionar emociones como los celos o la sensación de haber perdido atención exclusiva. Estos procesos requieren el acompañamiento respetuoso del adulto —por ejemplo, dedicándole momentos exclusivos y reconociendo esas emociones sin negarlas ni ridiculizarlas— en lugar de ocultarle la situación o restarle importancia, ya que ambos procesos, el de vincularse con varias figuras y el de adaptarse a nuevos miembros de la familia, forman parte normal de la construcción del mundo afectivo y relacional del niño."
 },
 {
  "id": "b09-09",
  "block": "b09",
  "blockTitle": "El Niño Descubre a los Otros",
  "concept": "El estatus sociométrico en el grupo de iguales",
  "explanation": "El estatus sociométrico de un niño dentro de su grupo de iguales —popular, rechazado, ignorado o controvertido— puede estudiarse mediante técnicas sociométricas, como preguntar a los niños con quién les gustaría jugar o sentarse. Este estatus no es un dato fijo e inmodificable durante toda la infancia, sino que puede asociarse con distintos patrones de ajuste social y emocional, y ofrece al docente información valiosa para orientar intervenciones que favorezcan la inclusión de todo el alumnado. Por ejemplo, si la observación y una sencilla técnica sociométrica revelan que un niño concreto es sistemáticamente ignorado por sus compañeros, el docente puede diseñar de forma intencionada actividades de pequeño grupo o dinámicas cooperativas que faciliten su acercamiento a otros niños con intereses compartidos, en lugar de dejar que esa situación se mantenga o se agrave sin intervención."
 },
 {
  "id": "b10-01",
  "block": "b10",
  "blockTitle": "Equipamiento, Material Didáctico y Materiales Curriculares en Educación Infantil",
  "concept": "Criterios generales de selección de materiales didácticos y normativa de seguridad",
  "explanation": "Los materiales didácticos en Educación Infantil deben cumplir ante todo criterios de seguridad y de adecuación a las características evolutivas del niño: por ejemplo, no deben incluir piezas pequeñas desmontables si se destinan a bebés que aún se llevan los objetos a la boca. Además, se prefieren materiales polivalentes, es decir, que admitan varios usos y no un único fin predeterminado, favoreciendo así la manipulación, la exploración y el juego libre por encima de materiales de uso único o de coste elevado sin justificación pedagógica. Esta seguridad no queda solo al criterio del centro: el marcado CE, en aplicación de la Directiva europea 2009/48/CE sobre seguridad de los juguetes, garantiza que un juguete o material infantil cumple los requisitos mínimos establecidos en la Unión Europea, como la ausencia de sustancias tóxicas o de piezas que supongan riesgo de atragantamiento, por lo que comprobar este marcado es un paso obligado a la hora de seleccionar cualquier material para el aula."
 },
 {
  "id": "b10-02",
  "block": "b10",
  "blockTitle": "Equipamiento, Material Didáctico y Materiales Curriculares en Educación Infantil",
  "concept": "Clasificación de materiales: fungible frente a inventariable o no fungible",
  "explanation": "Los materiales del aula se clasifican, a efectos de gestión, en fungibles y no fungibles. El material fungible es aquel que se consume o se gasta con el uso, como el papel, las ceras, el pegamento o la pintura, y debe reponerse periódicamente. El material inventariable o no fungible, en cambio, no se consume con el uso, tiene una vida útil prolongada y debe registrarse en el inventario del centro para su seguimiento y mantenimiento: es el caso, por ejemplo, del mobiliario o de los materiales de psicomotricidad de gran tamaño, como colchonetas, módulos de espuma o túneles, cuya finalidad es favorecer el desarrollo motor, el equilibrio y la exploración corporal en sesiones específicas de movimiento. Esta distinción importa en la práctica porque determina cómo se gestiona presupuestariamente cada tipo de material: mientras el fungible requiere una previsión de compra recurrente, el no fungible exige planificar su mantenimiento y sustitución puntual cuando se deteriora."
 },
 {
  "id": "b10-03",
  "block": "b10",
  "blockTitle": "Equipamiento, Material Didáctico y Materiales Curriculares en Educación Infantil",
  "concept": "Pedagogos históricos y su material: los 'dones' de Fröbel y el material sensorial Montessori",
  "explanation": "Dos figuras históricas de la pedagogía infantil desarrollaron materiales estructurados de referencia. Friedrich Fröbel, creador del concepto de 'kindergarten' o jardín de infancia, diseñó los 'dones' o Gaben, un conjunto progresivo de materiales —esferas, cubos, cilindros, listones— pensado para el juego educativo sensorial y manipulativo, con el que el niño descubre formas, tamaños y relaciones geométricas a través de la propia actividad. Por su parte, el material sensorial Montessori, como la torre rosa o los cilindros de encaje, está diseñado para ser autocorrectivo —el propio material permite al niño detectar visualmente si se ha equivocado, sin que el adulto le corrija— y para el trabajo autónomo, respetando el ritmo individual de cada niño. Ambos enfoques comparten una idea de fondo: el material bien diseñado, más que el adulto, puede convertirse en el principal mediador del aprendizaje sensorial y manipulativo del niño."
 },
 {
  "id": "b10-04",
  "block": "b10",
  "blockTitle": "Equipamiento, Material Didáctico y Materiales Curriculares en Educación Infantil",
  "concept": "El enfoque de Goldschmied: juego heurístico y cesto de los tesoros",
  "explanation": "Elinor Goldschmied ideó dos propuestas de gran influencia para el primer ciclo de Infantil, basadas en el uso de objetos cotidianos y naturales en lugar de juguetes convencionales. El 'cesto de los tesoros' (treasure basket) está destinado a bebés que ya son capaces de sentarse por sí mismos pero aún no se desplazan gateando: consiste en un cesto con una gran variedad de objetos cotidianos —cucharas de madera, tapones, telas, conchas, anillas metálicas— para que el bebé, sentado, los explore libremente con las manos y la boca. El juego heurístico continúa esta propuesta para niños algo mayores que ya se desplazan, ofreciéndoles objetos cotidianos variados (no juguetes) para su libre exploración sensorial con todos los sentidos, sin intervención directa del adulto durante la exploración, salvo para garantizar la seguridad. En ambos casos, el valor pedagógico reside precisamente en la ausencia de un uso predeterminado del objeto, lo que estimula al máximo la curiosidad y la experimentación autónoma del niño."
 },
 {
  "id": "b10-05",
  "block": "b10",
  "blockTitle": "Equipamiento, Material Didáctico y Materiales Curriculares en Educación Infantil",
  "concept": "Organización del aula por rincones: distribución, renovación y equipamiento",
  "explanation": "La organización del aula por rincones o zonas de trabajo —el rincón de la casita, el de construcciones, el de la biblioteca— responde al principio de favorecer la autonomía, la elección libre y la actividad significativa del alumnado, permitiendo que cada niño escoja, explore y actúe según sus propios intereses en lugar de seguir en todo momento las instrucciones del docente. El rincón de la 'casita' o del juego simbólico, por ejemplo, se equipa habitualmente con material que reproduce elementos de la vida cotidiana —una cocinita, muñecos, vajilla de juguete, ropa de disfraces— favoreciendo el juego de roles. La elección y renovación periódica de los materiales de cada rincón debe basarse en la observación del interés y el uso real que el alumnado hace de ellos, así como en la evolución de sus procesos de aprendizaje —por ejemplo, retirar un puzle que ya nadie usa porque resulta demasiado fácil e introducir otro más complejo—, y no en un calendario fijo ni en el mero azar."
 },
 {
  "id": "b10-06",
  "block": "b10",
  "blockTitle": "Equipamiento, Material Didáctico y Materiales Curriculares en Educación Infantil",
  "concept": "Mobiliario adaptado a la infancia y accesibilidad universal",
  "explanation": "El mobiliario del aula de Infantil —mesas, sillas, estanterías— debe estar adaptado a la altura y las proporciones del niño, de modo que pueda sentarse correctamente, alcanzar los materiales por sí mismo desde una estantería baja o guardar sus pertenencias sin depender siempre del adulto, favoreciendo así su autonomía y también su seguridad postural. Este principio se amplía con el de accesibilidad universal y diseño para todas las personas, que implica que tanto los espacios (rampas, anchura de puertas) como los materiales deben poder ser utilizados por todo el alumnado, con independencia de sus capacidades físicas o sensoriales, en cualquier centro educativo ordinario, y no es un aspecto opcional ni exclusivo de la educación especial. Por ejemplo, disponer de una estantería con materiales a distinta altura, o de un asiento adaptado para un niño con dificultades motrices, permite que ese alumno participe en igualdad de condiciones en las mismas actividades que sus compañeros."
 },
 {
  "id": "b10-07",
  "block": "b10",
  "blockTitle": "Equipamiento, Material Didáctico y Materiales Curriculares en Educación Infantil",
  "concept": "El uso de las TIC y los materiales audiovisuales en Infantil",
  "explanation": "Según los principios pedagógicos de la etapa, los materiales audiovisuales y las TIC deben utilizarse de forma complementaria y puntual, como un recurso más entre otros, sin sustituir la manipulación, la experiencia directa, el juego y la interacción social, que son los pilares fundamentales del aprendizaje en Educación Infantil. Esto significa que una pizarra digital o una tableta pueden emplearse, por ejemplo, para mostrar brevemente un vídeo relacionado con un proyecto que se esté trabajando en el aula, pero nunca deberían ocupar la mayor parte de la jornada escolar ni sustituir actividades como el juego heurístico, la psicomotricidad o la interacción directa con los compañeros. El criterio pedagógico de fondo es que, a estas edades, el aprendizaje se produce fundamentalmente a través del cuerpo, los sentidos y la relación con los demás, y las TIC deben subordinarse a ese principio en lugar de invertirlo."
 },
 {
  "id": "b10-08",
  "block": "b10",
  "blockTitle": "Equipamiento, Material Didáctico y Materiales Curriculares en Educación Infantil",
  "concept": "Gestión de materiales: inventario, catalogación y protocolos de higiene",
  "explanation": "El inventario y catalogación de los materiales de un centro de Infantil no es un mero trámite burocrático, sino que facilita la planificación de compras, el mantenimiento —por ejemplo, saber qué materiales necesitan revisión o sustitución— y la reposición adecuada de recursos didácticos, optimizando así su uso pedagógico real en el aula. Esta gestión incluye también, de forma muy destacada en el primer ciclo, la elaboración de protocolos de limpieza y desinfección de materiales y juguetes, que responde a criterios de prevención de riesgos sanitarios e higiene, dado que bebés y niños pequeños tienden a explorar los objetos llevándoselos a la boca, lo que exige una limpieza más frecuente y rigurosa que en etapas posteriores. Por ejemplo, en una sala de bebés, los objetos del cesto de los tesoros deben limpiarse tras cada uso o al final de cada sesión, siguiendo un protocolo establecido, y no de forma ocasional o improvisada."
 },
 {
  "id": "b10-09",
  "block": "b10",
  "blockTitle": "Equipamiento, Material Didáctico y Materiales Curriculares en Educación Infantil",
  "concept": "Criterios de selección de la biblioteca de aula",
  "explanation": "La selección de los libros y cuentos de la biblioteca de aula debe atender a la adecuación a la edad y a los intereses del grupo, así como a la calidad tanto literaria —la historia, el lenguaje— como de las ilustraciones, y no limitarse a criterios económicos ni mantenerse invariable durante todo el curso, ya que conviene renovarla en función de los temas trabajados en cada momento. Por ejemplo, si el grupo está desarrollando un proyecto sobre los animales del bosque, resulta pedagógicamente coherente incorporar temporalmente a la biblioteca de aula varios cuentos relacionados con ese tema, retirando o rotando otros que hayan perdido interés para los niños, en lugar de mantener siempre la misma colección fija de libros independientemente de lo que se esté trabajando en el aula."
 },
 {
  "id": "b10-10",
  "block": "b10",
  "blockTitle": "Equipamiento, Material Didáctico y Materiales Curriculares en Educación Infantil",
  "concept": "Materiales para la atención a la diversidad e inclusión educativa",
  "explanation": "La disponibilidad de materiales adaptados para alumnado con necesidades específicas de apoyo educativo —pictogramas para la comunicación, materiales de manipulación adaptados a distintas capacidades motrices, mobiliario específico— responde al principio de atención a la diversidad e inclusión educativa, y resulta necesaria en cualquier centro ordinario, no solo en centros de educación especial. Por ejemplo, un niño con dificultades de comunicación oral puede beneficiarse de un tablero de pictogramas para expresar sus necesidades básicas durante la jornada escolar, mientras que un niño con dificultades motrices finas puede necesitar ceras o pinzas de agarre adaptado para participar en las mismas actividades plásticas que sus compañeros. Disponer de este tipo de recursos de forma habitual, y no como una excepción puntual, es lo que permite que la inclusión sea una práctica real y no solo una declaración de principios."
 },
 {
  "id": "b11-01",
  "block": "b11",
  "blockTitle": "Evolución de la Expresión Plástica en los Niños y Niñas",
  "concept": "El garabateo y sus fases (sin control, controlado, con nombre)",
  "explanation": "El garabateo es la primera gran etapa de la evolución del dibujo infantil (aproximadamente entre 1-2 y 3-4 años) y se subdivide en tres momentos progresivos. En el garabato descontrolado o sin control, el niño realiza movimientos amplios e imprecisos sobre el papel, motivados únicamente por el placer del propio gesto motor, sin ninguna intención representativa ni control visual del trazo. Después aparece el garabato controlado, en el que el niño empieza a relacionar el movimiento de su mano con la huella que deja en el papel y comienza a repetir trazos de forma más intencionada. Finalmente, en el garabato con nombre, el niño otorga significado a sus producciones ('esto es mi perro'), aunque el dibujo aún no guarde ninguna correspondencia visual objetiva con lo nombrado. Pedagógicamente es clave entender que en esta fase el proceso motor y el placer sensoriomotor priman sobre el resultado: un maestro no debe pedir a un niño de dos años que 'dibuje algo concreto', sino ofrecerle papel grande y materiales que favorezcan el movimiento libre del brazo, respetando el valor expresivo del propio gesto."
 },
 {
  "id": "b11-02",
  "block": "b11",
  "blockTitle": "Evolución de la Expresión Plástica en los Niños y Niñas",
  "concept": "Etapas evolutivas tras el garabateo: preesquemática, esquema humano y el 'renacuajo'",
  "explanation": "Siguiendo la clasificación clásica de Viktor Lowenfeld, tras el garabateo (2-4 años) llega la etapa preesquemática (4-7 años), en la que el dibujo deja de ser un simple ejercicio motor y se convierte en un intento consciente de representar la realidad. Es en este momento cuando aparece la primera representación de la figura humana, el llamado 'renacuajo' o figura 'cabezón': una cabeza grande de la que salen directamente las piernas y, a veces, los brazos, sin tronco diferenciado, porque el niño representa primero lo que para él es más relevante del cuerpo humano, la cara, con la que se comunica y expresa emociones. A partir de ahí, ese esquema humano evoluciona de forma progresiva hacia una representación cada vez más detallada, proporcionada y cercana al realismo visual: con la edad se va incorporando el tronco, la ropa, los dedos diferenciados y proporciones más ajustadas. Un ejemplo de aula: si un niño de 3 años dibuja a su madre como una cabeza con dos líneas por piernas, no se trata de un error a corregir, sino de una fase evolutiva esperable que hay que acompañar, no acelerar."
 },
 {
  "id": "b11-03",
  "block": "b11",
  "blockTitle": "Evolución de la Expresión Plástica en los Niños y Niñas",
  "concept": "Realismo intelectual y realismo visual: el caso de la 'transparencia'",
  "explanation": "El realismo intelectual, propio de las primeras etapas del dibujo infantil, consiste en representar lo que el niño sabe o conoce sobre un objeto, aunque no coincida con la perspectiva visual real desde un punto de vista concreto; por ejemplo, dibujar las cuatro patas de una mesa aunque desde ese ángulo solo se vean dos, o representar el interior de una casa con los muebles visibles a través de la pared, como si esta fuera de cristal (fenómeno conocido como 'transparencia'). Frente a esto, el realismo visual, propio de etapas evolutivas más avanzadas, busca representar fielmente la perspectiva tal y como se vería realmente desde un único punto de observación, similar a una fotografía. Es fundamental que el maestro o maestra de Infantil no interprete estas transparencias como errores técnicos que haya que corregir, sino como una manifestación normal del pensamiento infantil, en el que predomina lo que el niño conoce sobre lo que literalmente ve; por ejemplo, ante un dibujo de una casa con la familia 'dentro' visible desde fuera, lo adecuado es valorar la riqueza de lo representado, no señalar que 'eso no se ve así'."
 },
 {
  "id": "b11-04",
  "block": "b11",
  "blockTitle": "Evolución de la Expresión Plástica en los Niños y Niñas",
  "concept": "La expresión plástica como medio de expresión y comunicación, no solo como producto estético",
  "explanation": "Desde el punto de vista educativo, la expresión plástica en Infantil debe entenderse ante todo como un medio de expresión y comunicación, y no únicamente como la búsqueda de un resultado estético perfecto o técnicamente correcto. A través del dibujo, la pintura o el modelado, el niño representa su mundo interior, sus emociones, sus vínculos afectivos y su particular forma de percibir la realidad, de un modo que a veces el lenguaje verbal todavía no le permite. Por ejemplo, es habitual que un niño dibuje a un miembro de su familia de un tamaño desproporcionadamente grande respecto al resto, no por error de proporción, sino porque esa persona ocupa para él un lugar afectivo especialmente relevante en ese momento. Entender esta dimensión comunicativa lleva al maestro a observar las producciones plásticas como una ventana al mundo emocional y cognitivo del niño, útil incluso para detectar preocupaciones, intereses o vivencias familiares, y a valorar el dibujo por lo que dice del niño, no solo por su acabado visual."
 },
 {
  "id": "b11-05",
  "block": "b11",
  "blockTitle": "Evolución de la Expresión Plástica en los Niños y Niñas",
  "concept": "El papel del adulto: respeto al proceso, evitar comparaciones y el valor de exponer las producciones",
  "explanation": "Ante las producciones plásticas infantiles, el papel del adulto debe centrarse en respetar el proceso creativo de cada niño, ofrecer variedad de materiales y evitar tanto corregir el dibujo para 'ajustarlo a la realidad' como imponer modelos que deba copiar de forma exacta, ya que ello limitaría su expresión personal y podría generar frustración o dependencia de la aprobación adulta. Este enfoque de 'proceso frente a producto' defiende que lo prioritario es la experiencia, la exploración sensorial y el disfrute vivido durante la actividad, más que el resultado estético final; por eso no tiene sentido en Infantil puntuar numéricamente un dibujo ni compararlo con el de otro compañero. Coherente con esta idea, exponer las producciones en el aula o los pasillos del centro tiene la función de valorar y dar visibilidad al esfuerzo y al proceso de cada niño, reforzando su autoestima y su sentido de pertenencia al grupo, pero nunca debe utilizarse para clasificar o comparar el nivel técnico de unos niños frente a otros, por ejemplo eligiendo solo 'los mejores dibujos' para exponer."
 },
 {
  "id": "b11-06",
  "block": "b11",
  "blockTitle": "Evolución de la Expresión Plástica en los Niños y Niñas",
  "concept": "Modelado y dactilopintura: exploración sensorial, táctil y tridimensional",
  "explanation": "El modelado con materiales como la plastilina o la arcilla favorece especialmente la motricidad fina (al amasar, estirar o pellizcar), la percepción táctil y la posibilidad de representar en tres dimensiones, complementando así al dibujo, que es bidimensional; modelar una figura de animal exige coordinar ambas manos de una forma distinta a sostener un lápiz, trabajando la fuerza y la precisión de los dedos. De forma similar, la dactilopintura o pintura con los dedos resulta especialmente adecuada en las primeras edades porque permite una exploración sensorial directa del color y la textura sin necesidad de dominar previamente un útil intermedio como el pincel, cuyo manejo requiere una motricidad fina más desarrollada. Un maestro de dos años puede ofrecer bandejas con témpera para que los niños experimenten libremente con las manos, mientras que a partir de los 4-5 años puede introducir progresivamente pinceles, rodillos u otras herramientas, respetando siempre el ritmo madurativo de cada niño en el dominio de la mano."
 },
 {
  "id": "b11-07",
  "block": "b11",
  "blockTitle": "Evolución de la Expresión Plástica en los Niños y Niñas",
  "concept": "Collage y estampado: composición, texturas y coordinación óculo-manual",
  "explanation": "El rasgado y pegado o collage desarrolla la motricidad fina, ya que exige controlar la fuerza y la dirección de los dedos al rasgar el papel, además de la coordinación óculo-manual necesaria para situar y pegar cada pieza; al mismo tiempo, fomenta la composición creativa y la exploración de distintas texturas y colores al combinar elementos variados sobre una base común, por ejemplo creando un paisaje a partir de trozos de papel de revista de distintos tonos. De forma complementaria, el estampado (con esponjas, sellos improvisados o elementos naturales como hojas) permite experimentar con texturas, formas y patrones que se repiten, favoreciendo la creatividad compositiva y la coordinación motriz de una manera lúdica, con resultados visuales inmediatos que animan al niño a repetir la acción una y otra vez. Ambas técnicas son especialmente valiosas porque, a diferencia del dibujo con lápiz, no exigen un trazo fino y controlado desde el principio, por lo que resultan accesibles incluso para los niños con la motricidad fina menos desarrollada."
 },
 {
  "id": "b11-08",
  "block": "b11",
  "blockTitle": "Evolución de la Expresión Plástica en los Niños y Niñas",
  "concept": "Elección de colores por preferencia y variedad de soportes y materiales",
  "explanation": "En las primeras producciones plásticas, los niños suelen elegir los colores por preferencia personal o por la disponibilidad de materiales, más que por fidelidad realista al objeto representado; es frecuente, por ejemplo, que un niño pinte un sol de color verde simplemente porque es su color favorito, sin que ello indique ningún problema de percepción cromática, por lo que el adulto no debe corregir esa elección. En estrecha relación con esto, ofrecer una amplia variedad de materiales plásticos (ceras, témperas, rotuladores, materiales de desecho) y de soportes de distinto tamaño y orientación (papel grande o pequeño, vertical u horizontal) enriquece notablemente la experiencia sensorial y expresiva del alumnado: un papel muy grande invita a un movimiento amplio del brazo, mientras que uno pequeño exige mayor control y precisión, y cada material aporta posibilidades técnicas distintas, como un trazo fino con rotulador frente a una mancha amplia con témpera. La programación de aula debe por tanto variar deliberadamente estos elementos a lo largo del curso, en lugar de repetir siempre el mismo formato y los mismos materiales."
 },
 {
  "id": "b11-09",
  "block": "b11",
  "blockTitle": "Evolución de la Expresión Plástica en los Niños y Niñas",
  "concept": "La línea de base como avance en la organización espacial del dibujo",
  "explanation": "La aparición de la 'línea de base' o 'línea de tierra' —una línea horizontal sobre la que, hacia los 4-5 años, el niño empieza a apoyar las figuras que dibuja, en lugar de dejarlas flotando sin orden por todo el papel— constituye un avance significativo en la organización espacial de la composición gráfica infantil. Este recurso muestra que el niño empieza a estructurar el espacio de la hoja de una manera más lógica y coherente, diferenciando por ejemplo un 'suelo' sobre el que se sitúan personas, casas o árboles, de un 'cielo' en la parte superior donde puede aparecer el sol o las nubes. Para el maestro, observar la aparición espontánea de esta línea de base en los dibujos de su grupo es un indicador evolutivo relevante, que no debe forzarse antes de tiempo pidiendo al niño que 'dibuje una línea abajo', sino que conviene dejar emerger de manera natural, ofreciendo experiencias ricas de observación del entorno (cómo se disponen las cosas en el espacio real) que favorezcan progresivamente esta organización gráfica."
 },
 {
  "id": "b12-01",
  "block": "b12",
  "blockTitle": "Formación de Capacidades Relacionadas con el Desarrollo Lógico-Matemático",
  "concept": "Clasificación y seriación como base lógica de la construcción del número",
  "explanation": "Piaget explica que el concepto de número se construye a partir de la síntesis de dos operaciones lógicas previas: la clasificación, que consiste en agrupar objetos que comparten un atributo o criterio común como el color, la forma o el tamaño (por ejemplo, juntar todos los botones rojos), y la seriación, que consiste en ordenar un conjunto de elementos según un criterio de variación creciente o decreciente, como colocar varios lápices de menor a mayor longitud o unas tazas de mayor a menor tamaño. El número surge, según esta teoría, al combinar el aspecto cardinal (cuántos elementos hay) con el aspecto ordinal (en qué posición ocupa cada uno dentro de la serie) de estas dos operaciones lógicas distintas y complementarias. Por eso, en la etapa de Infantil, antes de trabajar el número de forma simbólica resulta imprescindible ofrecer abundantes experiencias de clasificar y seriar objetos reales y manipulables: por ejemplo, pedir al alumnado que separe una caja de botones por colores y, después, que ordene un grupo de palos de mayor a menor grosor, sentando así las bases lógicas necesarias antes de introducir las cifras."
 },
 {
  "id": "b12-02",
  "block": "b12",
  "blockTitle": "Formación de Capacidades Relacionadas con el Desarrollo Lógico-Matemático",
  "concept": "Correspondencia biunívoca y el error del doble conteo",
  "explanation": "La correspondencia biunívoca, o uno a uno, es el principio del conteo por el cual cada elemento de una colección debe asociarse con una y solo una palabra-número, sin saltarse ningún objeto ni contar el mismo dos veces; por ejemplo, al contar cuatro manzanas hay que tocar o señalar cada una diciendo 'uno, dos, tres, cuatro' exactamente una vez por manzana. Este principio, aunque parece sencillo para un adulto, no está consolidado en los niños pequeños, y su dificultad se manifiesta en el error conocido como 'doble conteo', que consiste en volver a tocar y contar un elemento ya contabilizado, o en el error contrario de saltarse algún objeto. Ante este error, una estrategia habitual en el aula de Infantil es enseñar al niño a desplazar o apartar físicamente cada objeto ya contado (por ejemplo, mover cada ficha a otro montón a medida que se cuenta), lo que le ayuda a visualizar con claridad qué elementos ha contado ya y cuáles le faltan, consolidando progresivamente esta correspondencia uno a uno."
 },
 {
  "id": "b12-03",
  "block": "b12",
  "blockTitle": "Formación de Capacidades Relacionadas con el Desarrollo Lógico-Matemático",
  "concept": "Principio del cardinal y principio de abstracción en el conteo",
  "explanation": "El principio del cardinal establece que el último número pronunciado al contar una colección representa el total de elementos de esa colección, y no únicamente la etiqueta del último objeto contado; este aprendizaje no resulta evidente para los niños pequeños, que a veces saben recitar correctamente la serie numérica pero, al preguntarles '¿cuántos hay en total?', vuelven a contar desde el principio, sin comprender que el último número ya contenía esa información global. Por su parte, el principio de abstracción indica que puede contarse cualquier colección de elementos, sean homogéneos o heterogéneos —por ejemplo, contar 'tres cosas' aunque sean un lápiz, una goma y un cuaderno—, e incluso elementos no tangibles como sonidos, palmadas o pasos, lo que evidencia que el número es un concepto abstracto independiente de la naturaleza física de lo contado. En el aula, comprobar si un niño domina el cardinal se hace simplemente repitiendo la pregunta '¿y entonces cuántos hay?' justo después de contar, sin dejar que vuelva a contar; y se trabaja la abstracción proponiendo contar, por ejemplo, cuántas veces suena una palmada o cuántos pasos se dan hasta la puerta."
 },
 {
  "id": "b12-04",
  "block": "b12",
  "blockTitle": "Formación de Capacidades Relacionadas con el Desarrollo Lógico-Matemático",
  "concept": "El pensamiento lógico y la manipulación como base previa al número simbólico",
  "explanation": "Antes de trabajar el número de forma simbólica, resulta fundamental en Educación Infantil desarrollar el pensamiento lógico y las nociones de cantidad a través de la manipulación directa de materiales: comparar colecciones, clasificar, seriar y estimar cantidades de objetos reales. Enseñar al niño a escribir cifras de memoria sin haber construido previamente estas nociones lógicas conduce a un aprendizaje mecánico, puramente memorístico y poco significativo del número, en el que el niño puede recitar o trazar el '5' sin comprender realmente qué cantidad representa ni cómo se relaciona con otras cantidades. Desde un enfoque constructivista, coherente con esta idea, el pensamiento lógico-matemático se favorece principalmente mediante la manipulación activa de materiales y la resolución de problemas concretos y cotidianos —por ejemplo, repartir unas galletas entre todos los compañeros de la mesa, comprobando si sobran o faltan—, y mediante la construcción progresiva de nociones a partir de la propia experiencia, en lugar de mediante la transmisión directa y memorística de conceptos abstractos por parte del adulto."
 },
 {
  "id": "b12-05",
  "block": "b12",
  "blockTitle": "Formación de Capacidades Relacionadas con el Desarrollo Lógico-Matemático",
  "concept": "Nociones espaciales y topológicas: de la experiencia corporal a las relaciones más complejas",
  "explanation": "Las nociones espaciales básicas (dentro-fuera, arriba-abajo, cerca-lejos) se construyen fundamentalmente a partir de la propia experiencia corporal y motriz del niño en el espacio real —desplazarse, meterse dentro de una caja, subir a un banco, esconderse detrás de una cortina— y no mediante la memorización verbal de conceptos abstractos ni únicamente a través de fichas de lápiz y papel, que deben llegar después de esa vivencia directa, nunca sustituirla. Según la psicología genética de Piaget, dentro de estas nociones espaciales, las relaciones topológicas (dentro-fuera, abierto-cerrado, junto-separado), más sencillas y ligadas a la experiencia corporal inmediata, se desarrollan antes que las nociones proyectivas, que implican considerar un punto de vista o una perspectiva concreta, y que las nociones euclidianas (medida, distancia, ángulo), más complejas y que se consolidan en etapas educativas posteriores. Por ello, en Infantil conviene priorizar juegos de psicomotricidad y circuitos que exijan al niño atravesar, rodear o meterse en distintos espacios, antes que actividades gráficas abstractas sobre la posición de los objetos."
 },
 {
  "id": "b12-06",
  "block": "b12",
  "blockTitle": "Formación de Capacidades Relacionadas con el Desarrollo Lógico-Matemático",
  "concept": "Materiales manipulativos estructurados: bloques lógicos de Dienes y regletas de Cuisenaire",
  "explanation": "Los bloques lógicos de Zoltan Dienes son un material manipulativo formado por piezas que varían en cuatro atributos —forma (círculo, cuadrado, triángulo, rectángulo), color, tamaño y grosor— que permiten trabajar la clasificación, la seriación y las relaciones lógicas pidiendo al niño, por ejemplo, que agrupe 'todas las piezas grandes y rojas' o que construya una serie siguiendo un atributo determinado, favoreciendo el razonamiento sobre semejanzas y diferencias. Las regletas de Cuisenaire, por su parte, son barras de distinta longitud, cada una asociada a un color y a un valor numérico fijo (la blanca vale 1, la roja 2, y así sucesivamente), que permiten trabajar de forma manipulativa la relación entre número, longitud y color, así como la composición y descomposición de cantidades: por ejemplo, comprobar físicamente que dos regletas rojas (2+2) equivalen en longitud a una regleta amarilla (4). Ambos materiales comparten la ventaja de hacer visibles y tangibles relaciones matemáticas que, presentadas solo de forma verbal o simbólica, resultarían demasiado abstractas para el alumnado de Infantil."
 },
 {
  "id": "b12-07",
  "block": "b12",
  "blockTitle": "Formación de Capacidades Relacionadas con el Desarrollo Lógico-Matemático",
  "concept": "Estimación de cantidades y subitización como vías complementarias al conteo",
  "explanation": "La estimación de cantidades, es decir, decir aproximadamente cuántos elementos hay en una colección grande sin contarlos uno a uno, es una capacidad lógico-matemática que puede iniciarse en Infantil de forma progresiva y sencilla —por ejemplo, comparar visualmente dos grupos de fichas y decir cuál parece tener más—, complementando al conteo exacto sin sustituirlo nunca por completo. De forma relacionada, la subitización es la capacidad de reconocer de manera inmediata y sin contar pequeñas cantidades, normalmente hasta tres o cuatro elementos, como saber que hay 'tres' puntos en la cara de un dado sin tener que contarlos uno a uno; constituye una vía complementaria y temprana de acceso al concepto de cantidad, que aparece antes o en paralelo al conteo verbal. Un ejemplo práctico de aula que integra ambas capacidades son los juegos de mesa sencillos con dados y recorrido, en los que el niño reconoce de un vistazo la cantidad del dado (subitización) y después cuenta las casillas que debe avanzar, combinando de forma lúdica distintos aprendizajes numéricos."
 },
 {
  "id": "b12-08",
  "block": "b12",
  "blockTitle": "Formación de Capacidades Relacionadas con el Desarrollo Lógico-Matemático",
  "concept": "Geometría y medida: de la manipulación concreta a las unidades convencionales",
  "explanation": "El reconocimiento y trazado de las formas geométricas básicas (círculo, cuadrado, triángulo) se apoya principalmente en la manipulación de objetos con esas formas y en la observación del entorno cercano —la rueda de una bicicleta, la puerta rectangular, una señal de tráfico triangular—, antes de pasar a su representación gráfica formal o a la simple memorización de sus nombres, que resultaría vacía sin ese contacto previo con la forma real. De manera análoga, medir con unidades no convencionales ligadas al propio cuerpo (pies, palmos, pasos, una cuerda) antes de introducir unidades convencionales como el metro o el centímetro responde al principio general de partir de la experiencia corporal y concreta antes de avanzar hacia la abstracción: medir cuántos 'pies' mide el aula, poniendo un pie justo delante del otro, ayuda a comprender vivencialmente qué significa 'medir' antes de manejar un instrumento como la cinta métrica, cuya lectura numérica sería, en un primer momento, un procedimiento mecánico sin verdadero significado para el niño."
 },
 {
  "id": "b12-09",
  "block": "b12",
  "blockTitle": "Formación de Capacidades Relacionadas con el Desarrollo Lógico-Matemático",
  "concept": "Rutinas y juegos cotidianos como contexto significativo para lo lógico-matemático",
  "explanation": "Las rutinas cotidianas de aula, como contar cuántos niños han venido hoy, pasar lista, o repartir un lápiz por cada niño, ofrecen contextos reales y significativos para practicar el conteo, la correspondencia uno a uno y otras nociones lógico-matemáticas de forma funcional, integrada en la vida diaria del aula y no como un ejercicio aislado y descontextualizado de una ficha. En la misma línea, los juegos de mesa sencillos con dados y recorrido (una versión simplificada de la oca) favorecen el reconocimiento rápido de cantidades, el conteo de casillas al avanzar y nociones como el turno o el recorrido ordenado, mientras que los juegos de construcción (cubos, piezas de encaje, bloques de madera) favorecen el desarrollo de nociones espaciales, la seriación por tamaño o forma al elegir qué piezas encajan o se sostienen mejor, y la resolución práctica de problemas, como lograr que una torre no se caiga. En conjunto, estas actividades muestran que lo lógico-matemático en Infantil no debe reducirse a fichas de lápiz y papel, sino integrarse de forma natural en el juego y en la vida cotidiana del aula."
 },
 {
  "id": "b12-10",
  "block": "b12",
  "blockTitle": "Formación de Capacidades Relacionadas con el Desarrollo Lógico-Matemático",
  "concept": "El enfoque constructivista del desarrollo lógico-matemático",
  "explanation": "Desde el enfoque constructivista, el pensamiento lógico-matemático en Educación Infantil se favorece principalmente mediante la manipulación activa de materiales, la resolución de problemas concretos y significativos para el niño, y la construcción progresiva de nociones a partir de su propia experiencia, en contraposición a la transmisión directa y memorística de conceptos abstractos por parte del adulto o a los ejercicios repetitivos de escritura de cifras sin ningún contexto. Este enfoque implica un cambio importante en el papel del maestro, que pasa de ser quien 'explica' la matemática a ser quien diseña situaciones, materiales y preguntas que provocan que el propio niño descubra relaciones lógicas por sí mismo: por ejemplo, en lugar de explicar directamente qué es 'más' y 'menos', proponer una situación real de repartir unas galletas entre los compañeros de mesa en la que, si no salen igual para todos, el propio grupo deba discutir y encontrar una solución, construyendo así de forma activa y vivencial el significado de esos conceptos matemáticos básicos."
 },
 {
  "id": "b13-01",
  "block": "b13",
  "blockTitle": "Influencia de las Principales Corrientes Pedagógicas y Psicológicas en la Educación Infantil",
  "concept": "María Montessori: ambiente preparado, autonomía y material autocorrectivo",
  "explanation": "El método Montessori se basa en preparar un 'ambiente preparado', es decir, un espacio cuidadosamente diseñado, ordenado, estético y adaptado a la escala y las necesidades del niño —mobiliario a su altura, materiales accesibles y organizados en estanterías bajas—, pensado para favorecer su libre elección, su concentración y, sobre todo, su autonomía, en contraste con un aula pensada desde las necesidades del adulto. Montessori defiende además el respeto a los 'periodos sensibles', fases evolutivas de especial receptividad para determinados aprendizajes (por ejemplo, un periodo sensible para el orden o para el lenguaje), y el uso de material autocorrectivo, diseñado de manera que el propio niño pueda detectar y corregir su error sin depender constantemente de la corrección del adulto, como las torres de cubos que solo encajan bien si se ordenan correctamente por tamaño. En el aula, esto se traduce en dejar que el niño elija libremente entre varias actividades disponibles en las estanterías y trabajar con ellas el tiempo que necesite, interviniendo el adulto como guía discreta y no como transmisor directo de la solución."
 },
 {
  "id": "b13-02",
  "block": "b13",
  "blockTitle": "Influencia de las Principales Corrientes Pedagógicas y Psicológicas en la Educación Infantil",
  "concept": "Ovide Decroly: los centros de interés y la globalización de la enseñanza",
  "explanation": "Ovide Decroly organizó el currículo en torno a 'centros de interés' ligados a las necesidades básicas del ser humano —alimentarse, protegerse del frío y de la intemperie, defenderse de los peligros y trabajar y jugar solidariamente—, defendiendo un enfoque globalizador del aprendizaje: en lugar de fragmentar los contenidos en asignaturas aisladas, propuso partir de esos intereses vitales del niño para trabajar de forma integrada el lenguaje, el cálculo o el conocimiento del entorno. Esta idea de globalización responde a que el niño pequeño percibe la realidad como un todo, sin las divisiones artificiales entre materias que hace la escuela tradicional, por lo que resulta más natural y significativo aprender, por ejemplo, sobre 'la alimentación' trabajando a la vez vocabulario, conteo de alimentos y observación de plantas y animales, que dar por separado una clase de lengua y otra de matemáticas. En el aula de Infantil actual, los proyectos de trabajo que parten de un tema motivador para el grupo (los dinosaurios, el otoño) son heredero directo de este planteamiento decrolyano."
 },
 {
  "id": "b13-03",
  "block": "b13",
  "blockTitle": "Influencia de las Principales Corrientes Pedagógicas y Psicológicas en la Educación Infantil",
  "concept": "Célestin Freinet: texto libre, imprenta escolar y correspondencia escolar",
  "explanation": "Célestin Freinet desarrolló técnicas activas y cooperativas orientadas a conectar la escuela con la vida real. El texto libre consiste en que el niño escribe, o dicta si aún no sabe escribir, libremente sobre un tema que realmente le interesa, en lugar de copiar un dictado impuesto por el adulto; después ese texto se comparte y se corrige de forma colectiva con el grupo. La imprenta escolar permitía tradicionalmente imprimir esos textos infantiles, dándoles un formato cuidado y un carácter de producción 'real', mientras que la correspondencia escolar consistía en intercambiar cartas y trabajos con otra clase, a menudo de otra localidad, dando así un sentido social y comunicativo autentico a la escritura. Freinet defendía también la asamblea de clase como espacio de organización democrática del grupo. En Infantil, aunque no se use ya la imprenta física, su espíritu pervive cuando se anima a los niños a 'dictar' al maestro una historia sobre su dibujo, que después se lee en voz alta al grupo o se envía a otra clase, dando a la palabra del niño un destinatario real más allá del cuaderno."
 },
 {
  "id": "b13-04",
  "block": "b13",
  "blockTitle": "Influencia de las Principales Corrientes Pedagógicas y Psicológicas en la Educación Infantil",
  "concept": "La Escuela Nueva o Escuela Activa y su precursor filosófico, Rousseau",
  "explanation": "La Escuela Nueva o Escuela Activa, movimiento pedagógico de finales del siglo XIX y principios del XX, sitúa al niño como protagonista activo de su propio aprendizaje —a través de la experiencia, la actividad y el interés propio— frente al modelo de escuela tradicional, centrado en la transmisión pasiva y memorística de contenidos por parte del adulto y en la disciplina rígida. Este movimiento tiene un precursor filosófico fundamental en Jean-Jacques Rousseau, quien en su obra 'Emilio, o De la educación' defendió una educación 'naturalista', respetuosa con los ritmos y las características evolutivas propias de cada edad, y crítica con cualquier instrucción académica prematura que no respetara esos ritmos naturales del desarrollo infantil. De esta raíz filosófica surgirán después autores y experiencias muy diversas (Montessori, Decroly, Freinet, Fröbel) que comparten ese principio común de partir del niño y de su actividad, y no del programa del adulto. En la práctica actual, cualquier metodología que organice el aula por rincones de libre elección o que priorice el juego frente a la ficha dirigida se inscribe en esta tradición de la Escuela Activa."
 },
 {
  "id": "b13-05",
  "block": "b13",
  "blockTitle": "Influencia de las Principales Corrientes Pedagógicas y Psicológicas en la Educación Infantil",
  "concept": "Loris Malaguzzi y Reggio Emilia: el niño competente y los 'cien lenguajes'",
  "explanation": "Loris Malaguzzi fue el impulsor de las escuelas municipales de Reggio Emilia (Italia), que defienden al niño como 'sujeto de derechos', competente y capaz, y otorgan un valor central al ambiente, considerado 'el tercer educador' junto al docente y la familia, por lo que se diseña con extremo cuidado estético y funcional. El concepto de los 'cien lenguajes de la infancia' hace referencia a la diversidad de formas de expresión, representación y comunicación de las que dispone el niño para comprender y comunicar el mundo —el dibujo, el modelado, el movimiento, la música, el juego simbólico, la palabra— y a la idea de que reducir la educación al lenguaje verbal empobrece enormemente las posibilidades reales de expresión infantil. En la práctica, esta pedagogía se traduce en talleres específicos (el 'atelier') dotados de materiales muy variados donde los niños documentan sus procesos de investigación de forma visual, y en una atención minuciosa del docente a la documentación pedagógica, es decir, a registrar fotográfica y textualmente el proceso de aprendizaje del grupo para hacerlo visible a familias y compañeros."
 },
 {
  "id": "b13-06",
  "block": "b13",
  "blockTitle": "Influencia de las Principales Corrientes Pedagógicas y Psicológicas en la Educación Infantil",
  "concept": "Henri Wallon: la relación dialéctica entre emoción, movimiento e inteligencia",
  "explanation": "Henri Wallon aportó a la psicología del desarrollo infantil una teoría de estadios que subraya la relación dialéctica —de influencia mutua y constante, no de simple sucesión— entre la emoción, el movimiento y la inteligencia como motores del desarrollo psicológico infantil, en contraste con teorías que separan de forma más tajante lo cognitivo de lo afectivo, como en parte hace la teoría de Piaget. Para Wallon, el desarrollo motor no es solo un requisito físico previo al desarrollo intelectual, sino que está profundamente entrelazado con la vida emocional y con la construcción del pensamiento: el niño piensa y aprende también a través de su cuerpo y de sus emociones, y estas no son un obstáculo ni algo separado de lo cognitivo, sino parte constitutiva de él. Esta perspectiva es especialmente relevante en Infantil porque justifica pedagógicamente por qué una crisis emocional (un berrinche, un momento de ansiedad por separación) puede bloquear temporalmente el aprendizaje de un niño, y por qué actividades de movimiento y expresión corporal favorecen también, de forma indirecta, su desarrollo cognitivo."
 },
 {
  "id": "b13-07",
  "block": "b13",
  "blockTitle": "Influencia de las Principales Corrientes Pedagógicas y Psicológicas en la Educación Infantil",
  "concept": "Friedrich Fröbel: el 'kindergarten' y los materiales de juego estructurado",
  "explanation": "Friedrich Fröbel creó en el siglo XIX el primer 'kindergarten' o 'jardín de infancia', un espacio institucional pensado específicamente para la educación de los niños pequeños a través del juego, sentando así las bases de la educación infantil institucionalizada tal como la conocemos hoy en día, con un espacio y un tiempo diferenciados de la escuela para niños mayores. Fröbel diseñó además materiales específicos denominados 'dones' (Gaben), un conjunto progresivo de piezas geométricas sencillas (esferas, cubos, cilindros) que el niño manipulaba siguiendo actividades guiadas, con la intención de favorecer, a través del juego con formas simples, la comprensión de nociones matemáticas y estéticas básicas. Su influencia histórica es enorme porque, por primera vez, se defendió de forma sistemática que el juego no era una actividad opuesta al aprendizaje, sino su vehículo principal en las primeras edades, una idea que sigue vigente en cualquier aula de Infantil actual organizada en torno al juego libre y guiado."
 },
 {
  "id": "b13-08",
  "block": "b13",
  "blockTitle": "Influencia de las Principales Corrientes Pedagógicas y Psicológicas en la Educación Infantil",
  "concept": "Rudolf Steiner y la pedagogía Waldorf",
  "explanation": "Rudolf Steiner fundó la pedagogía Waldorf, basada en la antroposofía, una corriente filosófico-espiritual propia, que otorga gran importancia al arte, al ritmo de las rutinas diarias y anuales (celebraciones estacionales, rituales fijos de entrada y salida), a la imaginación —por ejemplo mediante materiales sencillos y deliberadamente no realistas, como muñecos sin rasgos faciales detallados, que estimulan la fantasía del niño para completarlos mentalmente— y al respeto escrupuloso de las etapas evolutivas propias de cada edad, retrasando de forma deliberada aprendizajes académicos formales como la lectoescritura hasta pasados los seis o siete años. Esta pedagogía concede también un papel central a la imitación del adulto como vía de aprendizaje temprano y limita de forma explícita el uso de pantallas y medios tecnológicos en las primeras edades. Un aula Waldorf se reconoce fácilmente por su ambiente cálido, con materiales naturales (madera, lana, telas) y una jornada muy estructurada en torno a rutinas rítmicas repetidas cada día."
 },
 {
  "id": "b13-09",
  "block": "b13",
  "blockTitle": "Influencia de las Principales Corrientes Pedagógicas y Psicológicas en la Educación Infantil",
  "concept": "El conductismo: Watson y Skinner, el aprendizaje por estímulos, respuestas y refuerzos",
  "explanation": "El conductismo, corriente psicológica representada por autores como John Watson y Burrhus F. Skinner, explica el aprendizaje a partir de la relación entre estímulos, respuestas y refuerzos observables, evitando especular sobre procesos mentales internos no observables directamente, a los que consideraba poco relevantes o poco científicos para explicar la conducta. Desde esta perspectiva, un niño repite una conducta porque ha sido reforzada, por ejemplo mediante el elogio o la atención del adulto, y deja de repetirla si esta es ignorada o castigada, sin necesidad de analizar qué 'piensa' o 'siente' el niño al respecto. Aunque hoy la Educación Infantil se apoya mayoritariamente en enfoques constructivistas, la influencia conductista sigue presente en prácticas de aula como los sistemas de economía de fichas o refuerzo positivo (una pegatina o un elogio verbal inmediato tras una conducta deseada), útiles sobre todo para instaurar hábitos y rutinas muy concretas, aunque insuficientes por sí solos para explicar procesos de aprendizaje más complejos como la construcción del pensamiento lógico."
 },
 {
  "id": "b13-10",
  "block": "b13",
  "blockTitle": "Influencia de las Principales Corrientes Pedagógicas y Psicológicas en la Educación Infantil",
  "concept": "El constructivismo: Piaget, Vygotski y Ausubel, el aprendizaje como construcción activa",
  "explanation": "El constructivismo es la corriente psicopedagógica que integra aportaciones de autores como Piaget, Vygotski y Ausubel, entre otros, y entiende el aprendizaje como un proceso activo mediante el cual el propio sujeto construye su conocimiento a partir de la interacción con el entorno físico y social, en lugar de recibirlo pasivamente ya elaborado por el adulto. Piaget aporta la idea de que el niño construye estructuras de pensamiento cada vez más complejas a través de la acción sobre los objetos; Vygotski añade la dimensión social y cultural del aprendizaje, con conceptos como la 'zona de desarrollo próximo' (lo que el niño puede lograr con ayuda de otro más experto, aunque todavía no pueda solo); y Ausubel subraya la importancia del 'aprendizaje significativo', es decir, que los nuevos contenidos se conecten con lo que el alumno ya sabe. En la práctica de Infantil, este enfoque justifica organizar el aula en torno a la manipulación, el juego, la resolución de problemas cotidianos y el trabajo cooperativo entre iguales, en lugar de la mera transmisión oral de contenidos por parte del docente."
 },
 {
  "id": "b13-11",
  "block": "b13",
  "blockTitle": "Influencia de las Principales Corrientes Pedagógicas y Psicológicas en la Educación Infantil",
  "concept": "La pedagogía sistémica: el alumno dentro de su sistema familiar y escolar",
  "explanation": "La pedagogía sistémica aplica principios de la terapia familiar sistémica, con autores de referencia como Bert Hellinger, para comprender al alumno dentro de las dinámicas relacionales de su sistema familiar y escolar, entendiendo que ciertas conductas o dificultades observadas en el aula pueden estar relacionadas con lo que ocurre en ese sistema más amplio (una separación reciente de los progenitores, el nacimiento de un hermano, una pérdida familiar), sin que ello suponga en absoluto ignorar o sustituir la programación didáctica del docente. Esta corriente, junto a otras propuestas pedagógicas actuales, coincide en señalar la importancia de que el docente adopte, frente al alumnado y las familias, una actitud de respeto, escucha activa y reconocimiento de la diversidad de historias y contextos personales, evitando juzgar o imponer un único modelo de familia o de infancia como el único válido. Un ejemplo práctico es que, ante un cambio brusco de comportamiento de un niño, el maestro con esta sensibilidad no se limite a 'corregir' la conducta, sino que indague con delicadeza y sin juzgar si hay algún cambio relevante en su contexto familiar."
 },
 {
  "id": "b13-12",
  "block": "b13",
  "blockTitle": "Influencia de las Principales Corrientes Pedagógicas y Psicológicas en la Educación Infantil",
  "concept": "Las escuelas bosque o escuelas infantiles en la naturaleza (forest schools)",
  "explanation": "El movimiento de las escuelas bosque o escuelas infantiles en la naturaleza (forest schools), cada vez más presente en la actualidad, desarrolla gran parte de su actividad educativa en entornos naturales al aire libre —bosques, parques, huertos—, favoreciendo el juego libre, la exploración sensorial y motriz, y el contacto directo y cotidiano con el medio natural, en lugar de limitar la jornada escolar a actividades de mesa en un aula cerrada. Esta corriente parte de la constatación de que el contacto sistemático con elementos naturales (tierra, agua, ramas, piedras, insectos) ofrece estímulos sensoriales y desafíos motrices (trepar, saltar sobre troncos, mantener el equilibrio en terrenos irregulares) muy difíciles de reproducir en un patio o aula convencional, además de favorecer actitudes de cuidado medioambiental desde edades muy tempranas. En la práctica, un centro con este enfoque puede dedicar varias mañanas semanales a salir a un entorno natural cercano, con un adulto que acompaña y garantiza la seguridad sin dirigir constantemente el juego, dejando que sea el propio entorno el que provoque la exploración y el aprendizaje espontáneo del niño."
 },
 {
  "id": "b13-13",
  "block": "b13",
  "blockTitle": "Influencia de las Principales Corrientes Pedagógicas y Psicológicas en la Educación Infantil",
  "concept": "Emmi Pikler: el movimiento libre autónomo y el cuidado respetuoso",
  "explanation": "Emmi Pikler defendió el movimiento libre y autónomo del bebé, es decir, no colocarlo en posturas —sentado, de pie— que aún no domina por sí mismo, dejándole llegar a ellas de forma natural y a su propio ritmo mediante su propia iniciativa motriz, ya que forzar posturas prematuras puede interferir en un desarrollo motor armónico y en la seguridad que el niño desarrolla sobre su propio cuerpo. Junto a esto, propuso un cuidado respetuoso y atento durante las rutinas de higiene y alimentación, en las que el adulto avisa antes de tocar al bebé, espera su reacción y colabora con él en lugar de simplemente 'hacerle' las cosas de forma mecánica y apresurada, tratando cada momento de cuidado como una oportunidad relacional y comunicativa, no como una simple tarea que cumplir. En la práctica de una escuela infantil de 0-1 años inspirada en Pikler, esto se traduce en dejar a los bebés jugar libremente en el suelo sobre una superficie firme, sin sentarlos ni colocarlos de pie artificialmente, y en anunciar en voz alta cada acción antes de realizarla durante el cambio de pañal, por ejemplo diciendo 'ahora voy a levantarte las piernas'."
 },
 {
  "id": "b13-14",
  "block": "b13",
  "blockTitle": "Influencia de las Principales Corrientes Pedagógicas y Psicológicas en la Educación Infantil",
  "concept": "Jerome Bruner y el aprendizaje por descubrimiento",
  "explanation": "Jerome Bruner defendió el aprendizaje por descubrimiento: el niño construye un conocimiento más significativo y duradero cuando explora e investiga activamente relaciones y conceptos por sí mismo, contando con la guía y el 'andamiaje' adecuado del adulto —que no desaparece, sino que se ajusta progresivamente a lo que el niño necesita en cada momento—, en lugar de recibir la información ya elaborada y memorizarla sin comprensión real. El concepto de andamiaje resulta especialmente útil para el maestro de Infantil, porque describe con precisión cómo debe ser su intervención: ofrecer justo la ayuda necesaria (una pregunta, una pista, un material) para que el niño avance un paso más en la resolución de un problema, retirando esa ayuda a medida que el niño gana autonomía, de forma similar a un andamio real que se va retirando cuando el edificio ya se sostiene por sí mismo. Por ejemplo, ante un niño que no consigue hacer encajar unas piezas de construcción, el maestro no resuelve el problema por él, sino que le hace una pregunta orientadora ('¿qué pasaría si giras esa pieza?') que le permite descubrir la solución por sí mismo."
 },
 {
  "id": "b13-15",
  "block": "b13",
  "blockTitle": "Influencia de las Principales Corrientes Pedagógicas y Psicológicas en la Educación Infantil",
  "concept": "El humanismo: Rogers y Maslow, la autorrealización y el respeto a la individualidad",
  "explanation": "El humanismo, corriente psicológica representada por autores como Carl Rogers y Abraham Maslow, pone el foco en el desarrollo integral de la persona, su autorrealización, su autoestima y la importancia de un clima de respeto y aceptación incondicional, en el que la persona vale por sí misma y no solo por sus logros o resultados, en contraste con enfoques centrados en el condicionamiento externo (conductismo) o en estadios universales del pensamiento (Piaget). Maslow es conocido por su pirámide de necesidades, que sitúa las necesidades fisiológicas y de seguridad como base indispensable antes de que puedan desarrollarse plenamente necesidades superiores como la pertenencia, el reconocimiento o la autorrealización, una idea muy relevante en Infantil porque recuerda que un niño con hambre, sueño o inseguridad emocional difícilmente podrá aprender de forma óptima. Rogers, por su parte, subraya la importancia de la empatía, la autenticidad y la aceptación incondicional por parte del educador. En el aula, este enfoque se traduce en priorizar un clima afectivo cálido y seguro, y en valorar al niño por su esfuerzo y su persona, no solo por si 'acierta' o 'se porta bien'."
 },
 {
  "id": "b14-01",
  "block": "b14",
  "blockTitle": "La Educación Musical en Educación Infantil",
  "concept": "El método Orff: cuerpo, palabra, instrumentos de placas y el ostinato rítmico",
  "explanation": "Carl Orff propone partir de elementos básicos y accesibles para el niño —la palabra, recitando rimas o frases con un ritmo marcado, y el movimiento y la percusión corporal (palmas, pies, chasquidos, golpes en las piernas)— antes de pasar a instrumentos de placas de fácil manejo, como xilófonos y metalófonos, en los que basta con pulsar una placa determinada para obtener siempre un sonido afinado, sin necesidad de una técnica instrumental compleja como la que exige, por ejemplo, un violín. Un recurso muy habitual dentro de esta práctica es el ostinato rítmico o melódico, es decir, un patrón breve que se repite de forma constante como acompañamiento —por ejemplo, un mismo golpe de pandereta cada dos tiempos mientras el resto del grupo canta la melodía—, siendo especialmente accesible para el alumnado de Infantil porque no exige aprender una pieza musical completa, sino solamente repetir un patrón sencillo de forma coordinada con el grupo. En el aula, una sesión Orff típica podría comenzar recitando rítmicamente los nombres de frutas mientras se dan palmas, y terminar con distintos grupos tocando ostinatos sencillos en xilófonos mientras el maestro canta la melodía principal."
 },
 {
  "id": "b14-02",
  "block": "b14",
  "blockTitle": "La Educación Musical en Educación Infantil",
  "concept": "El método Dalcroze: la euritmia y el movimiento corporal como vía de acceso al ritmo",
  "explanation": "Émile Jaques-Dalcroze desarrolló la euritmia, un método que vincula estrechamente el ritmo musical con el movimiento corporal: en lugar de aprender el ritmo de forma abstracta o teórica, el niño lo interioriza desplazándose por el espacio, marcando el pulso con el cuerpo o representando con gestos los cambios de intensidad o de tempo de la música que escucha. Esta idea se conecta con un principio pedagógico más amplio y muy presente en la música infantil: el movimiento corporal asociado a la música —bailar, desplazarse siguiendo el ritmo, marcar el pulso con las palmas— ayuda a interiorizar físicamente el ritmo mucho más eficazmente que cualquier explicación teórica sobre qué es el ritmo, además de desarrollar la coordinación motriz. En esta misma línea se sitúa la danza libre o expresión corporal con música, sin una coreografía cerrada que memorizar y reproducir exactamente, que permite que cada niño responda de forma personal y creativa al estímulo musical —moverse más rápido o más lento, con gestos amplios o pequeños según lo que le sugiere la pieza—, favoreciendo así la expresión individual frente a una técnica de danza reglada y uniforme."
 },
 {
  "id": "b14-03",
  "block": "b14",
  "blockTitle": "La Educación Musical en Educación Infantil",
  "concept": "Métodos vocales: Kodály y Suzuki, la voz y la inmersión como vía de acceso a la música",
  "explanation": "Zoltán Kodály defiende la voz cantada como instrumento musical fundamental y accesible a todos los niños desde el nacimiento, especialmente a través del folclore y las canciones populares de la propia cultura, que además de ser sencillas de aprender por su estructura melódica repetitiva, transmiten un patrimonio cultural compartido de generación en generación. Por su parte, Shinichi Suzuki, aunque desarrolló originalmente su propuesta para el aprendizaje instrumental infantil (especialmente el violín), planteó el llamado 'método de la lengua materna': del mismo modo que un niño aprende a hablar por inmersión, escucha repetida e imitación mucho antes de estudiar gramática de forma consciente, propuso que el aprendizaje musical siga ese mismo camino desde edades muy tempranas, con una implicación activa de la familia, que escucha y acompaña todo el proceso. Ambos métodos comparten la idea de que la música, como la lengua materna, se aprende principalmente por inmersión sonora y práctica vivencial repetida, y no mediante teoría musical formal presentada antes de tiempo."
 },
 {
  "id": "b14-04",
  "block": "b14",
  "blockTitle": "La Educación Musical en Educación Infantil",
  "concept": "Los parámetros del sonido y el desarrollo de la discriminación auditiva",
  "explanation": "Los cuatro parámetros básicos del sonido que se trabajan en Educación Infantil son la altura (si un sonido es agudo o grave), la intensidad (si es fuerte o suave), la duración (si es largo o corto) y el timbre (la cualidad que permite distinguir, por ejemplo, el sonido de un tambor del de una flauta aunque suenen la misma nota). La capacidad de distinguir con precisión estos matices se denomina discriminación auditiva, y en Infantil se trabaja fundamentalmente a través de juegos y actividades vivenciales de escucha activa, y no mediante teoría musical formal ni solfeo memorístico, que resultarían demasiado abstractos a esta edad. Un ejercicio muy habitual de aula consiste en hacer sonar distintos objetos a espaldas del alumnado y pedirles que adivinen cuál ha sonado, trabajando así el timbre, o pedirles que se muevan deprisa o despacio según el ritmo de una canción, o con gestos amplios o pequeños según si el sonido es fuerte o suave, integrando la escucha con la respuesta motriz para hacerla más significativa y comprensible."
 },
 {
  "id": "b14-05",
  "block": "b14",
  "blockTitle": "La Educación Musical en Educación Infantil",
  "concept": "La audición musical activa en el aula de Infantil",
  "explanation": "La audición musical activa busca desarrollar la escucha, la discriminación de sonidos y la sensibilidad estética del alumnado, a menudo combinada con movimiento —bailar de forma distinta según cambie la música que suena— o con representación gráfica, como dibujar lo que una determinada pieza musical sugiere o evoca, en lugar de limitarse a que el alumnado permanezca sentado y en silencio sin ninguna actividad asociada a la escucha, lo que en Infantil resultaría poco significativo y difícil de sostener durante mucho tiempo. La finalidad no es memorizar biografías de compositores ni datos teóricos, sino desarrollar progresivamente la capacidad de atender y disfrutar de la música. Por ejemplo, el maestro puede poner una pieza musical con cambios claros de intensidad y pedir a los niños que se muevan como 'elefantes pesados' en los pasajes fuertes y como 'ratoncitos' en los pasajes suaves, convirtiendo la escucha en una experiencia corporal y emocional que el niño puede comprender y disfrutar plenamente, sentando además las bases de una sensibilidad estética que se desarrollará durante toda su vida."
 },
 {
  "id": "b14-06",
  "block": "b14",
  "blockTitle": "La Educación Musical en Educación Infantil",
  "concept": "Instrumentos en el aula: pequeña percusión y construcción con material reciclado",
  "explanation": "Los instrumentos de pequeña percusión, como panderetas, claves, maracas o triángulos, se utilizan preferentemente en Infantil para explorar el ritmo de forma vivencial, ejercitar la coordinación motriz al tocarlos y favorecer el trabajo musical en grupo —por ejemplo, cada niño con un instrumento distinto siguiendo un mismo pulso—, y no para ejecutar partituras complejas de forma individual, algo inadecuado a esta edad. Complementariamente, construir instrumentos musicales sencillos con material reciclado —una lata con arroz dentro a modo de maraca, una goma tensada sobre una caja de cartón a modo de cuerda— favorece la creatividad, la motricidad fina al manipular y decorar los materiales, y una comprensión más vivencial de cómo se produce realmente el sonido, por vibración o por golpeo, en lugar de limitarse siempre a usar instrumentos ya fabricados y comprados. Un proyecto de aula puede combinar ambas ideas: tras construir sus propios instrumentos con material reciclado, los niños los emplean después en una actividad grupal de ritmo, comprendiendo el origen físico del sonido que ellos mismos han creado."
 },
 {
  "id": "b14-07",
  "block": "b14",
  "blockTitle": "La Educación Musical en Educación Infantil",
  "concept": "El silencio como elemento propio del lenguaje musical",
  "explanation": "El silencio se trabaja en Infantil como un elemento propio del lenguaje musical en sí mismo, no como una mera ausencia de sonido ni, mucho menos, como un recurso disciplinario para conseguir que el alumnado 'esté callado'. Trabajar el silencio de esta forma ayuda a desarrollar la capacidad de escucha activa y a comprender que la alternancia entre sonido y silencio —por ejemplo, las pausas dentro de una canción o de una pieza instrumental— forma parte esencial de la estructura musical, tanto como las propias notas que se escuchan. Un ejemplo de actividad en el aula consiste en cantar una canción conocida y, en un momento acordado, dejar de cantar durante unos segundos manteniendo el gesto o el movimiento corporal asociado, para que los niños perciban físicamente que ese silencio 'cuenta' dentro de la música, tanto como el propio sonido; también se puede jugar a 'la estatua musical', en la que los niños se mueven mientras suena la música y se quedan completamente inmóviles y en silencio en el instante exacto en que esta se detiene, vivenciando de forma lúdica esa alternancia."
 },
 {
  "id": "b14-08",
  "block": "b14",
  "blockTitle": "La Educación Musical en Educación Infantil",
  "concept": "Canciones tradicionales, de corro y el valor de cantar con apoyo visual",
  "explanation": "Las canciones tradicionales y populares forman parte del patrimonio cultural que se transmite de generación en generación, y suelen tener una estructura melódica y rítmica sencilla y repetitiva, con estribillos y frases cortas, especialmente adecuada para las primeras edades, lo que facilita su memorización y disfrute inmediato por parte del alumnado. Dentro de este repertorio, las canciones de corro o de juego cantado, como 'El patio de mi casa' o 'Al corro de la patata', combinan de forma característica música, movimiento corporal (formar un corro, moverse en círculo) y juego social (esperar el turno, coordinarse con los compañeros), integrando de manera natural distintos ámbitos del desarrollo infantil en una misma actividad breve y muy motivadora. Además, cantar mirando a los niños, apoyándose en gestos claros y en el contacto visual, favorece su comprensión del contenido de la canción —los gestos ayudan a entender palabras nuevas—, mantiene su atención y fomenta su participación activa, ya que el niño puede imitar los gestos y anticipar la siguiente palabra, algo mucho más eficaz que cantar de espaldas o sin ningún apoyo visual y gestual."
 },
 {
  "id": "b14-09",
  "block": "b14",
  "blockTitle": "La Educación Musical en Educación Infantil",
  "concept": "La improvisación musical como fomento de la creatividad",
  "explanation": "La improvisación musical en Infantil, por ejemplo dejar que cada niño invente libremente un ritmo con un instrumento de percusión, sin partitura ni modelo fijo que deba reproducir, busca fomentar la creatividad, la expresión personal y la exploración libre del sonido, y no enseñar técnica instrumental avanzada ni evaluar un nivel técnico determinado en la ejecución. Esta actividad resulta especialmente valiosa porque invierte la lógica habitual del aprendizaje musical formal, en el que primero se enseña una técnica y después se permite crear: en Infantil, dejar espacio para que el niño experimente libremente con el sonido antes de cualquier instrucción técnica ayuda a que desarrolle una relación personal, curiosa y sin miedo al error con la música. Una propuesta práctica de aula consiste en repartir distintos instrumentos de pequeña percusión y proponer que, por turnos, cada niño 'invente' cómo suena la lluvia, el viento o un animal concreto usando su instrumento, sin corregir el resultado sino celebrando la diversidad de soluciones sonoras que surgen del grupo."
 },
 {
  "id": "b14-10",
  "block": "b14",
  "blockTitle": "La Educación Musical en Educación Infantil",
  "concept": "El desarrollo progresivo del sentido rítmico y la memoria musical",
  "explanation": "El sentido rítmico evoluciona, según diversos autores, desde manifestaciones espontáneas y globales del propio cuerpo —un bebé que se balancea sin un patrón fijo al oír música— hacia una percepción y reproducción progresivamente más precisa de estructuras rítmicas, como seguir el pulso de una canción con las palmas de forma cada vez más ajustada a medida que el niño crece y madura su coordinación motriz y su capacidad de atención. De forma paralela, la memoria musical infantil, entendida como la capacidad de recordar y reproducir melodías o ritmos sencillos, se desarrolla principalmente a través de la repetición frecuente y lúdica de canciones y juegos musicales en contextos significativos y agradables para el niño, y no mediante un único visionado puntual de un vídeo musical ni mediante la memorización de teoría musical abstracta, poco adecuada a esta edad. Por ello, resulta más eficaz cantar la misma canción durante varias semanas en distintos momentos del día que presentar una canción nueva cada día sin darle continuidad, ya que la repetición constante es la que permite que ritmo y melodía queden verdaderamente interiorizados."
 },
 {
  "id": "b14-11",
  "block": "b14",
  "blockTitle": "La Educación Musical en Educación Infantil",
  "concept": "La musicoterapia como recurso complementario y profesional en el aula de Infantil",
  "explanation": "La musicoterapia, aplicada siempre por profesionales formados específicamente en esta disciplina, puede ser un recurso complementario valioso en el contexto de Educación Infantil para favorecer la regulación emocional, la comunicación —especialmente en alumnado con dificultades de lenguaje— y el bienestar de determinado alumnado, siempre entendida como un apoyo profesional y nunca como un sustituto de otras intervenciones sanitarias o terapéuticas que puedan ser necesarias. Es importante que el maestro tutor comprenda los límites de su propia intervención en este ámbito: puede utilizar la música de forma general con fines educativos y de bienestar emocional para todo el grupo (por ejemplo, una canción tranquila en el momento de la vuelta a la calma), pero la musicoterapia propiamente dicha, dirigida a necesidades específicas de un niño concreto, corresponde a un profesional especializado, con el que el docente puede coordinarse y colaborar, pero cuyo trabajo terapéutico no debe intentar replicar sin la formación adecuada."
 },
 {
  "id": "b15-01",
  "block": "b15",
  "blockTitle": "La Educación Sexual en la Etapa Infantil",
  "concept": "La educación afectivo-sexual integral en Infantil: concepto y dimensiones",
  "explanation": "En la etapa de Educación Infantil, la educación sexual se aborda como educación afectivo-sexual integral y adaptada a la edad: no se limita a ofrecer información biológica sobre la reproducción, sino que incluye el conocimiento y la aceptación del propio cuerpo, la construcción de la identidad, la expresión de los afectos, el respeto hacia uno mismo y hacia los demás, y la prevención del abuso, todo ello con un lenguaje y una profundidad ajustados cuidadosamente a cada momento evolutivo del niño. Esta concepción amplia rompe con dos ideas erróneas frecuentes: que la sexualidad es un tema tabú que no debe abordarse en el aula, y que constituye una responsabilidad exclusiva de la familia sin ninguna implicación de la escuela. Por el contrario, un centro de Infantil trabaja esta dimensión de forma cotidiana y transversal, por ejemplo cuando acompaña con naturalidad las preguntas espontáneas de los niños sobre su cuerpo, cuando cuida el lenguaje con el que se refiere a las distintas partes del cuerpo, o cuando fomenta el respeto y el afecto entre iguales, integrando así lo afectivo-sexual en el conjunto del desarrollo personal y social del niño, y no como un contenido aislado o excepcional."
 },
 {
  "id": "b15-02",
  "block": "b15",
  "blockTitle": "La Educación Sexual en la Etapa Infantil",
  "concept": "Identidad y expresión de género en la primera infancia",
  "explanation": "En torno a los 2-3 años, los niños y las niñas suelen alcanzar la identidad de género básica, es decir, se reconocen y se nombran a sí mismos según su género ('yo soy un niño', 'yo soy una niña'), aunque la comprensión de que esa identidad es estable en el tiempo y no depende de elementos externos como la ropa o el peinado —lo que se denomina 'constancia de género'— se consolidará algo más adelante en el desarrollo. Distinta de la identidad de género es la expresión de género, es decir, la forma en que cada niño manifiesta externamente sus gustos, preferencias de juego o de vestimenta, que puede coincidir o no con lo tradicionalmente asociado a su sexo; por ejemplo, un niño que prefiere jugar con muñecas o una niña que prefiere disfrazarse de superhéroe. Esta diversidad en las expresiones de género debe acogerse con naturalidad y respeto, sin forzar ni corregir esas preferencias individuales para ajustarlas a lo 'socialmente esperado', ya que hacerlo transmitiría al niño que hay formas de ser 'incorrectas' vinculadas a su género, con un impacto negativo en su autoestima y libertad de expresión."
 },
 {
  "id": "b15-03",
  "block": "b15",
  "blockTitle": "La Educación Sexual en la Etapa Infantil",
  "concept": "Autoexploración y masturbación infantil como conductas normativas del desarrollo",
  "explanation": "La exploración corporal o autoexploración, incluida la masturbación infantil ocasional, es un comportamiento habitual y normativo del desarrollo infantil, comparable a cómo el niño explora otras partes de su cuerpo o de su entorno por simple curiosidad sensorial, y en general no debe generar alarma. El papel educativo consiste en acompañar esta conducta con naturalidad, sin dramatismo ni castigo, ofreciendo información adecuada a la edad cuando sea necesario, en lugar de asumir automáticamente que se trata de un signo de abuso sexual, una interpretación errónea muy extendida que puede generar una reacción desproporcionada del adulto. Únicamente cuando esta conducta es muy frecuente, de tipo compulsivo, o va acompañada de otros indicadores como cambios de conducta o un lenguaje sexualizado inapropiado para la edad, conviene una valoración específica por parte de profesionales, sin precipitarse a conclusiones. Por ejemplo, ante un niño que ocasionalmente se toca los genitales en un momento de calma, lo adecuado es redirigir la atención con naturalidad hacia otra actividad, sin reprender ni ridiculizar la conducta."
 },
 {
  "id": "b15-04",
  "block": "b15",
  "blockTitle": "La Educación Sexual en la Etapa Infantil",
  "concept": "Prevención del abuso sexual: lenguaje corporal correcto, enseñanza al niño y protocolo del centro",
  "explanation": "La prevención del abuso sexual infantil en la etapa de Infantil se trabaja principalmente enseñando al niño a identificar y nombrar con un lenguaje correcto y natural las partes de su cuerpo, incluidos los genitales —por ejemplo, 'vulva' o 'pene', y no solo eufemismos—, sin connotaciones negativas y adaptado a su comprensión, ya que esto facilita que el niño pueda comunicar con claridad si algo le ha ocurrido. Se le enseña también que tiene derecho a decir 'no' ante un contacto que le incomoda, incluso si viene de un adulto conocido, y a contarlo con confianza a un adulto de referencia, en lugar de centrarse en contenidos biológicos avanzados poco útiles a esta edad. Complementariamente, todo centro educativo debe disponer de un protocolo de actuación ante indicios de abuso sexual que garantice la comunicación a las autoridades y servicios de protección competentes —servicios sociales, sanitarios o fiscalía de menores, según el caso—, priorizando siempre el bienestar y la seguridad del menor, sin que el propio profesorado intente resolver la situación por su cuenta ni exija pruebas médicas definitivas antes de comunicarlo a quien corresponda."
 },
 {
  "id": "b15-05",
  "block": "b15",
  "blockTitle": "La Educación Sexual en la Etapa Infantil",
  "concept": "Diversidad de modelos familiares y el uso de cuentos como recurso educativo",
  "explanation": "El reconocimiento y respeto por la diversidad de modelos familiares —monoparentales, homoparentales, reconstituidas, adoptivas, extensas— forma parte de una educación afectivo-sexual y en valores inclusiva desde las primeras edades, evitando presentar un único modelo de familia como el 'normal' o válido frente a los demás, lo que podría hacer sentir a algunos niños que su propia familia es 'diferente' de forma negativa. Un recurso especialmente valioso para trabajar esta diversidad, junto con otros aspectos de la educación afectivo-sexual como la diversidad corporal o las distintas formas de expresar el afecto, son los cuentos y libros infantiles adaptados a la edad, que normalizan y facilitan, de manera natural y a través de una historia con la que el niño se identifica emocionalmente, conversaciones que de otro modo podrían resultar más difíciles de iniciar de forma directa. Por ejemplo, leer en el aula un cuento en el que aparecen distintos tipos de familia permite después conversar con naturalidad sobre las diferencias y semejanzas con la propia familia de cada niño, sin que ningún alumno se sienta señalado o excluido."
 },
 {
  "id": "b15-06",
  "block": "b15",
  "blockTitle": "La Educación Sexual en la Etapa Infantil",
  "concept": "Afectividad, vínculo entre iguales y el concepto de consentimiento adaptado a la infancia",
  "explanation": "La educación afectivo-sexual en Infantil incluye trabajar el reconocimiento y la expresión adecuada de las emociones, el afecto y las muestras de cariño —un abrazo, una caricia— hacia uno mismo y hacia los demás, ya que la afectividad es una dimensión inseparable de la sexualidad entendida de forma integral, y no algo que deba posponerse a etapas educativas posteriores. Estas muestras de afecto positivo entre iguales deben acompañarse educativamente enseñando también a respetar el 'no' del otro y su espacio personal, de modo que el niño aprenda desde pequeño que el afecto se ofrece y se recibe con el acuerdo de ambas partes, y no de forma impuesta unilateralmente. En estrecha relación con esto, trabajar el concepto de consentimiento de forma adaptada a la edad —por ejemplo, pedir permiso antes de abrazar a un compañero, o aceptar que otro niño diga 'no quiero que me toques ahora'— sienta bases tempranas fundamentales para el respeto al propio cuerpo y al de los demás, siendo un contenido perfectamente comprensible y adecuado en Infantil, y no un tema exclusivo de etapas educativas posteriores como a veces se piensa erróneamente."
 },
 {
  "id": "b15-07",
  "block": "b15",
  "blockTitle": "La Educación Sexual en la Etapa Infantil",
  "concept": "La actitud docente ante preguntas y comentarios espontáneos sobre sexualidad",
  "explanation": "Ante preguntas espontáneas de los niños sobre el origen de los bebés o cualquier otro aspecto de la sexualidad, la actitud más recomendable del docente es responder con naturalidad, de forma sencilla y ajustada exactamente a lo que el niño pregunta y a su nivel de comprensión —por ejemplo, 'el bebé crece dentro de la mamá, en una parte llamada útero'—, sin ofrecer más información de la que realmente se pide ni evadir la pregunta remitiéndola siempre y exclusivamente a la familia. De forma distinta, y que requiere una actitud algo diferente, están los comentarios o preguntas de contenido sexual inapropiados para la edad, que en ocasiones surgen por la exposición del niño a contenidos inadecuados fuera del centro, por ejemplo en internet o en la televisión; en estos casos el profesorado debe acoger la situación con calma, sin alarma ni juicio hacia el niño, informar a la familia si procede, y mantenerse atento a posibles indicadores adicionales que pudieran requerir una valoración especializada, evitando tanto ignorar la situación como interrogar de forma insistente al niño para obtener más detalles."
 },
 {
  "id": "b15-08",
  "block": "b15",
  "blockTitle": "La Educación Sexual en la Etapa Infantil",
  "concept": "El respeto a la intimidad corporal en las rutinas de aula",
  "explanation": "El respeto a la intimidad corporal del niño —por ejemplo, en los momentos de cambio de ropa, aseo o control de esfínteres— debe cuidarse también en el ámbito escolar, adecuando los espacios físicos para evitar exposiciones innecesarias del cuerpo del niño ante el resto del grupo, y organizando las rutinas de higiene de forma respetuosa desde las primeras edades, sin considerar este aspecto irrelevante por el simple hecho de tratarse de niños pequeños. Esta atención a la intimidad no es contradictoria con la naturalidad con la que deben abordarse otros aspectos del cuerpo, sino complementaria: se puede hablar con total naturalidad de las partes del cuerpo y, al mismo tiempo, cuidar que los momentos de cambio de pañal o de ropa mojada se realicen en un espacio apropiado, con las puertas o cortinas adecuadas, y avisando siempre al niño de lo que se le va a hacer. Un ejemplo práctico es disponer, en las aulas de los más pequeños, de un cambiador situado de forma que no quede a la vista directa del resto del grupo, y realizar el cambio con calma y comunicación constante con el niño."
 },
 {
  "id": "b15-09",
  "block": "b15",
  "blockTitle": "La Educación Sexual en la Etapa Infantil",
  "concept": "Educación en igualdad, coeducación y superación de estereotipos de género",
  "explanation": "La educación en igualdad, estrechamente vinculada a la educación afectivo-sexual, busca en Infantil prevenir la interiorización temprana de estereotipos de género —como asociar el color rosa exclusivamente a las niñas o la fuerza física exclusivamente a los niños— y fomentar relaciones de respeto e igualdad entre todo el alumnado desde el inicio mismo de la etapa, no solo a partir del segundo ciclo. La coeducación va más allá de la simple coexistencia física de niños y niñas en la misma aula: es un modelo educativo que promueve activamente, a través de la organización del espacio, la selección de materiales y las actitudes cotidianas del docente, la igualdad real entre sexos, superando estereotipos y roles tradicionales de género en lugar de simplemente no separar al alumnado por sexo. En la práctica, esto se traduce en ofrecer en el aula una variedad amplia de juegos y materiales accesibles a todo el alumnado —cocinitas, coches, muñecos, construcciones—, sin diferenciarlos ni etiquetarlos nunca como 'de niño' o 'de niña', permitiendo que cada niño elija libremente según su interés real y no según lo que se espera de su género."
 },
 {
  "id": "b15-10",
  "block": "b15",
  "blockTitle": "La Educación Sexual en la Etapa Infantil",
  "concept": "La formación del profesorado en educación afectivo-sexual",
  "explanation": "La formación específica del profesorado de Educación Infantil en materia de educación afectivo-sexual es relevante fundamentalmente porque le permite abordar con naturalidad, seguridad y criterio pedagógico las situaciones y preguntas que surgen de forma espontánea en el aula —una pregunta sobre el cuerpo, una conducta de autoexploración, un comentario sobre la familia de un compañero, un episodio de exposición a contenidos inadecuados—, en lugar de improvisar respuestas inseguras, contradictorias o cargadas de prejuicios personales, o directamente evitar el tema por incomodidad o desconocimiento. Sin esta formación, es frecuente que el docente reaccione desde sus propios esquemas culturales o desde el nerviosismo, por ejemplo dramatizando una conducta de autoexploración normativa o dando una respuesta biológica excesivamente compleja a una pregunta sencilla sobre el origen de los bebés. La formación permite además coordinar adecuadamente con la familia y con otros profesionales cuando la situación lo requiere, sin que ello sustituya en ningún caso el papel educativo fundamental que corresponde a las propias familias en este ámbito."
 },
 {
  "id": "b16-01",
  "block": "b16",
  "blockTitle": "La Enseñanza y el Aprendizaje de la Lengua en la Educación Infantil",
  "concept": "Enfoque comunicativo y funcional en la enseñanza de la lengua (LOMLOE)",
  "explanation": "El enfoque comunicativo, asumido por el marco curricular de la LOMLOE en Infantil, sostiene que el lenguaje se aprende usándolo con una finalidad real —pedir algo, contar una vivencia, resolver un conflicto hablando— y no mediante la enseñanza explícita y descontextualizada de reglas gramaticales ni la lectoescritura formal y sistemática, propia de Primaria. Este planteamiento es coherente con el desarrollo evolutivo del niño, que aprende mejor en contextos significativos que en ejercicios abstractos. En la práctica, esto se traduce en que la maestra no dedica sesiones a 'explicar el sustantivo', sino que aprovecha momentos como escribir el nombre propio en una etiqueta, redactar entre todos una carta a las familias o comentar un cartel del aula, de modo que el niño se acerca a la lectoescritura de forma progresiva, contextualizada e integrada en situaciones con sentido, respetando siempre el ritmo evolutivo individual."
 },
 {
  "id": "b16-02",
  "block": "b16",
  "blockTitle": "La Enseñanza y el Aprendizaje de la Lengua en la Educación Infantil",
  "concept": "Modelo constructivista de Ferreiro y Teberosky: hipótesis evolutivas de la escritura",
  "explanation": "Emilia Ferreiro y Ana Teberosky demostraron, observando producciones escritas espontáneas infantiles, que el niño no es un receptor pasivo del código escrito sino que construye activamente hipótesis propias sobre cómo funciona, pasando por fases sucesivas antes de escribir de forma convencional. En la hipótesis presilábica (la más temprana) usa letras, pseudoletras o signos inventados sin relación sistemática con los sonidos, guiándose por criterios como escribir 'más letras' para representar un objeto que percibe como grande, aunque la palabra real sea corta. En la hipótesis silábica atribuye una letra a cada sílaba oral (por ejemplo, 'OAO' para 'pelota', con una letra por cada una de sus tres sílabas), un paso intermedio clave hacia comprender que la escritura representa los sonidos del habla, aunque todavía no de forma alfabética completa. Reconocer en qué fase está cada niño permite a la maestra ajustar sus expectativas y no exigir una escritura convencional prematura."
 },
 {
  "id": "b16-03",
  "block": "b16",
  "blockTitle": "La Enseñanza y el Aprendizaje de la Lengua en la Educación Infantil",
  "concept": "Conciencia fonológica y principio alfabético como precursores de la lectoescritura",
  "explanation": "La conciencia fonológica es la capacidad de reflexionar y manipular los sonidos del habla —sílabas, rimas, sonidos iniciales— independientemente de su significado (saber que 'gato' y 'pato' riman, o que 'sol' empieza igual que 'sopa'), y constituye una habilidad precursora fundamental de la lectoescritura. El principio alfabético, por su parte, es la comprensión de que existe una relación sistemática entre esos sonidos (fonemas) y las letras que los representan (grafemas), lo que permite al niño 'traducir' sonidos en letras en lugar de memorizar palabras completas de forma aislada. Ambos conceptos están estrechamente ligados: trabajar la conciencia fonológica mediante rimas, trabalenguas y juegos de palabras ('Pablito clavó un clavito') prepara el camino para que el niño comprenda después el principio alfabético y pueda leer y escribir de manera convencional."
 },
 {
  "id": "b16-04",
  "block": "b16",
  "blockTitle": "La Enseñanza y el Aprendizaje de la Lengua en la Educación Infantil",
  "concept": "Recursos orales estructurados en el aula: asamblea, juego libre y dramatización",
  "explanation": "El aula de Infantil ofrece distintos contextos, más o menos dirigidos, para desarrollar la lengua oral. La asamblea o 'corro de buenos días' es un momento metodológico valioso y pautado para trabajar la expresión oral (contar qué se ha hecho el fin de semana), la escucha activa de los compañeros y habilidades comunicativas grupales como esperar el turno de palabra. En el extremo opuesto, la expresión oral espontánea durante el juego libre (dos niños negociando roles o explicando las reglas de un juego inventado) ofrece un contexto natural, no dirigido, muy valioso para que la maestra observe el nivel de lenguaje real del alumnado e intervenga de forma oportuna. Entre ambos, las dramatizaciones y juegos de rol sencillos (representar un cuento, jugar a ser un personaje) integran el lenguaje oral con la expresión corporal y emocional, obligando al niño a poner palabras a lo que su personaje siente, enriqueciendo así vocabulario y capacidad narrativa de forma motivadora."
 },
 {
  "id": "b16-05",
  "block": "b16",
  "blockTitle": "La Enseñanza y el Aprendizaje de la Lengua en la Educación Infantil",
  "concept": "El cuento en el aula: narración oral, lectura en voz alta y rincón de biblioteca",
  "explanation": "El cuento es uno de los recursos más potentes para el desarrollo lingüístico en Infantil. La narración oral amplía el vocabulario del niño con palabras que quizá no usa en su vida cotidiana, desarrolla su comprensión de estructuras narrativas (inicio, nudo, desenlace) y estimula la imaginación al obligarle a representarse mentalmente personajes y situaciones ausentes. Al leer en voz alta, la maestra debe cuidar la entonación (dar voz distinta a cada personaje), un ritmo pausado que dé tiempo a imaginar y el contacto visual con el grupo, pues todo ello favorece la comprensión y la implicación emocional frente a una lectura monótona. El rincón de biblioteca completa este trabajo al acercar al niño al libro de forma libre y motivadora, eligiendo por sí mismo qué cuento mirar o 'leer' sin que sea siempre una actividad dirigida, favoreciendo el contacto autónomo con la lengua escrita y el gusto personal por la lectura."
 },
 {
  "id": "b16-06",
  "block": "b16",
  "blockTitle": "La Enseñanza y el Aprendizaje de la Lengua en la Educación Infantil",
  "concept": "El rincón de biblioteca como espacio de contacto autónomo con la lectura",
  "explanation": "Aunque vinculado al trabajo con el cuento, el rincón de biblioteca merece atención propia como espacio físico y organizativo del aula: un lugar acogedor, con libros accesibles y adecuados a la edad, donde el niño puede acercarse por iniciativa propia. Su finalidad no es tanto la enseñanza directa como generar una relación positiva y libre con el objeto libro, eligiendo él mismo qué cuento mirar o 'leer' a su manera (siguiendo las ilustraciones, inventando la historia) sin que sea siempre una actividad dirigida por la maestra. Por ejemplo, disponer cojines, buena luz y libros con las portadas visibles, y dejar tiempo libre cada día para su uso espontáneo, favorece que el niño desarrolle autonomía y un vínculo afectivo con la lectura desde edades muy tempranas, sentando así una actitud positiva hacia lo escrito antes incluso de saber leer de forma convencional."
 },
 {
  "id": "b16-07",
  "block": "b16",
  "blockTitle": "La Enseñanza y el Aprendizaje de la Lengua en la Educación Infantil",
  "concept": "El nombre propio como primera palabra significativa en el acceso a la escritura",
  "explanation": "El nombre propio suele ser una de las primeras palabras que motivan el interés del niño por la escritura, porque combina un fuerte significado personal y afectivo ('esto soy yo') con una forma escrita estable y siempre igual, lo que facilita que el niño empiece a reconocer, y más adelante a reproducir, sus letras antes que las de otras palabras. Por eso es habitual y pedagógicamente recomendable que las maestras de Infantil utilicen el nombre propio en múltiples rutinas: etiquetar la percha o la bandeja de cada niño, pasar lista señalando el nombre escrito, o firmar los dibujos que realiza. Esta presencia constante y funcional del propio nombre convierte a la escritura en algo con sentido inmediato para el niño, mucho antes de que comprenda el funcionamiento completo del sistema alfabético, y actúa como puente motivador hacia el resto del proceso de alfabetización."
 },
 {
  "id": "b16-08",
  "block": "b16",
  "blockTitle": "La Enseñanza y el Aprendizaje de la Lengua en la Educación Infantil",
  "concept": "Bilingüismo o plurilingüismo temprano y su compatibilidad con el desarrollo lingüístico",
  "explanation": "La investigación actual sobre bilingüismo o plurilingüismo temprano señala que la exposición a varias lenguas desde la infancia es compatible con un desarrollo lingüístico saludable en cada una de ellas, y puede incluso favorecer ciertas habilidades cognitivas, como la flexibilidad para cambiar de una tarea a otra, frente a la vieja idea de que aprender dos lenguas a la vez 'confunde' o retrasa al niño. Esto tiene implicaciones directas para el aula gallega, donde convive el gallego y el castellano, o para alumnado de familias inmigrantes que hablan otra lengua en casa: la maestra no debe interpretar un posible desfase puntual como un problema, sino como parte normal del proceso de adquisición simultánea de varios códigos lingüísticos, favoreciendo el uso natural de ambas lenguas en distintos contextos comunicativos del aula."
 },
 {
  "id": "b16-09",
  "block": "b16",
  "blockTitle": "La Enseñanza y el Aprendizaje de la Lengua en la Educación Infantil",
  "concept": "Vocabulario e input lingüístico de calidad como factores del desarrollo del lenguaje",
  "explanation": "El vocabulario del alumnado de Infantil se enriquece principalmente a través de la interacción verbal cotidiana con adultos e iguales, la escucha de cuentos y canciones, y la exposición a un lenguaje variado y contextualizado, mucho más que mediante fichas o listas memorizadas sin relación con situaciones reales. La investigación sobre el llamado 'input lingüístico' —la cantidad y calidad del lenguaje al que está expuesto el niño: con cuánta gente habla, qué tan variado es ese lenguaje, si se le hacen preguntas abiertas— confirma que este factor ambiental se relaciona directamente con un desarrollo más rico de vocabulario y de estructuras gramaticales. Por ello, una maestra que narra con detalle lo que hace, formula preguntas abiertas ('¿qué crees que pasará?') y expande las frases del niño ('sí, el perro corre, corre muy rápido') está ofreciendo un input de alta calidad que impulsa el desarrollo lingüístico."
 },
 {
  "id": "b16-10",
  "block": "b16",
  "blockTitle": "La Enseñanza y el Aprendizaje de la Lengua en la Educación Infantil",
  "concept": "Corrección indirecta de los errores propios del desarrollo del lenguaje infantil",
  "explanation": "Los errores gramaticales o fonéticos propios del desarrollo del lenguaje infantil (decir 'sapato' en lugar de 'zapato', o 'rompido' en lugar de 'roto') deben corregirse de forma indirecta, mediante el modelado: el adulto repite la palabra o frase correctamente dentro de la propia conversación ('ah, se te ha roto el zapato'), sin señalar explícitamente el error ni exigir al niño que lo repita de forma forzada. Esta estrategia es importante porque la corrección directa y reiterada puede generar inhibición para hablar, haciendo que el niño evite intentar palabras nuevas por miedo a equivocarse. Por ejemplo, si un niño dice 'me caído', la maestra puede responder con naturalidad 'ah, te has caído, ¿te has hecho daño?', ofreciendo el modelo correcto sin interrumpir la comunicación ni el vínculo afectivo que se está produciendo en ese momento."
 },
 {
  "id": "b16-11",
  "block": "b16",
  "blockTitle": "La Enseñanza y el Aprendizaje de la Lengua en la Educación Infantil",
  "concept": "Funciones del lenguaje escrito como motor de la motivación por aprender a escribir",
  "explanation": "Comprender las funciones del lenguaje escrito —para qué sirve escribir en la vida real: hacer una lista de la compra, escribir una carta a alguien lejano, dejar una nota recordatoria— ayuda a dar sentido y utilidad social a la escritura, lo que motiva al niño a aprenderla mucho más que presentarla como un ejercicio abstracto sin ninguna finalidad práctica visible. Este principio es central en los enfoques funcionales de la alfabetización: en lugar de repetir grafismos sin contexto, se busca que el niño viva la escritura en situaciones reales con propósito, como redactar una invitación para una fiesta de cumpleaños en el aula, elaborar entre todos una lista de materiales necesarios para un experimento, o escribir un cartel para señalar el rincón de construcciones, de modo que descubra por sí mismo para qué sirve ese código antes de dominarlo técnicamente."
 },
 {
  "id": "b17-01",
  "block": "b17",
  "blockTitle": "La Expresión Corporal",
  "concept": "Definición de expresión corporal: el cuerpo como lenguaje e instrumento expresivo",
  "explanation": "La expresión corporal es un lenguaje que utiliza el cuerpo y el movimiento con una finalidad comunicativa, expresiva y creativa —representar una idea, una emoción, un personaje— y no una finalidad exclusivamente deportiva, competitiva o clínica. Por ejemplo, moverse 'como si fuera' una hoja que cae del árbol es expresión corporal, mientras que correr una carrera cronometrada es una actividad deportiva. Su particularidad frente a otros lenguajes de expresión, como el plástico (que usa un material externo, el papel o la pintura) o el musical (que puede usar un instrumento externo), es que el propio cuerpo del niño es a la vez el sujeto que expresa y el medio con el que expresa: no necesita ningún material adicional para comunicar, lo que la convierte en un lenguaje especialmente accesible e inmediato desde los primeros años."
 },
 {
  "id": "b17-02",
  "block": "b17",
  "blockTitle": "La Expresión Corporal",
  "concept": "La expresión corporal en el currículo LOMLOE: área de comunicación y representación",
  "explanation": "Dentro del currículo LOMLOE de Educación Infantil, la expresión corporal se integra en el área de Comunicación y representación de la realidad, junto con el resto de lenguajes de expresión: verbal, plástico, musical y audiovisual. Esta ubicación curricular no es casual, sino que refleja que el cuerpo en movimiento es también una vía de comunicación y de representación de ideas y emociones, en igualdad de estatus pedagógico con el lenguaje oral o el dibujo. Para la práctica docente, esto implica planificar la expresión corporal con la misma intencionalidad educativa que otras formas de expresión, integrándola en proyectos y situaciones de aprendizaje globalizadas —por ejemplo, dentro de una unidad sobre 'el circo' pueden trabajarse conjuntamente el vocabulario oral, el dibujo de payasos y la representación corporal de sus movimientos— y no como un mero 'rato de moverse' desprovisto de objetivos."
 },
 {
  "id": "b17-03",
  "block": "b17",
  "blockTitle": "La Expresión Corporal",
  "concept": "El papel del docente como facilitador: uso de estímulos externos",
  "explanation": "En las sesiones de expresión corporal, el docente debe actuar preferentemente como facilitador: propone estímulos —una música, un objeto, una consigna abierta como 'muévete como si fueras muy pesado'— y después respeta la libre interpretación y creatividad de cada niño, sin dirigir de forma rígida cada movimiento ni evaluarlo con criterios de técnica de danza profesional. Estos estímulos (música, objetos, consignas verbales) sirven como punto de partida que dispara la respuesta motriz y expresiva personal de cada niño —por ejemplo, moverse de forma distinta según la música sea suave o enérgica—, sin sustituir su creatividad ni imponer un único movimiento considerado 'correcto'. Este planteamiento no directivo es coherente con el respeto a la expresividad individual propio de la etapa infantil."
 },
 {
  "id": "b17-04",
  "block": "b17",
  "blockTitle": "La Expresión Corporal",
  "concept": "Juego simbólico, dramatización espontánea y dramatización de cuentos",
  "explanation": "El juego simbólico y la dramatización espontánea (jugar a ser 'mamá' o 'médico') forman parte de la expresión corporal, ya que el niño usa su cuerpo para representar un rol o una situación ausente, contribuyendo al desarrollo de la función simbólica descrita por Piaget, la misma capacidad que está detrás del dibujo o del lenguaje. En un plano más estructurado, la dramatización de cuentos, en la que los niños representan corporalmente una historia narrada, integra de forma globalizada el lenguaje verbal (escuchar y comprender la narración), la expresión corporal (representarla con el cuerpo) y la representación simbólica, en línea con el enfoque globalizador propio de la etapa infantil, en el que distintas áreas se trabajan de forma conjunta dentro de una misma actividad, como cuando un grupo representa 'Los tres cerditos' turnándose los papeles."
 },
 {
  "id": "b17-05",
  "block": "b17",
  "blockTitle": "La Expresión Corporal",
  "concept": "Mimo, imitación gestual y representación corporal de las emociones",
  "explanation": "El mimo y la imitación gestual (representar sin palabras una acción, como 'lavarse los dientes' o 'ser un pájaro') favorecen la capacidad de observación —fijarse en cómo es realmente ese gesto para poder representarlo—, la representación simbólica y un mayor control y conciencia del propio cuerpo. De forma similar, representar emociones a través del cuerpo (mostrar con gestos y postura cómo es 'estar contento' o 'estar enfadado') ayuda a los niños a tomar conciencia de sus propios estados emocionales y a vincular la expresión corporal con la vivencia interna de esas emociones. Por ejemplo, proponer 'muévete como si estuvieras muy triste y luego como si estuvieras muy feliz' constituye un puente muy útil entre lo corporal y lo emocional, facilitando que el niño identifique y nombre después lo que ha sentido."
 },
 {
  "id": "b17-06",
  "block": "b17",
  "blockTitle": "La Expresión Corporal",
  "concept": "Esquema corporal, imagen corporal y vivencia del cuerpo en el espacio",
  "explanation": "El trabajo del esquema corporal (la representación mental del propio cuerpo) y de la imagen corporal a través de la expresión corporal contribuye especialmente al desarrollo psicomotor y a la construcción de la identidad personal, ya que moverse, mirarse y sentirse en el espacio ayuda al niño a conocer y aceptar su propio cuerpo. Estrechamente relacionada está la vivencia del propio cuerpo en el espacio —ocuparlo, recorrerlo, delimitarlo con el movimiento, por ejemplo trazando un círculo caminando—, que se relaciona directamente con el desarrollo de las nociones espaciales y la estructuración espacio-temporal. Ambos aspectos muestran cómo distintas áreas del desarrollo (motriz, cognitiva, afectiva) se trabajan de forma interrelacionada en Infantil a través de una misma actividad de movimiento."
 },
 {
  "id": "b17-07",
  "block": "b17",
  "blockTitle": "La Expresión Corporal",
  "concept": "Escucha corporal, propiocepción y autocontrol motor",
  "explanation": "La 'escucha corporal' —prestar atención a las propias sensaciones durante el movimiento, como notar la respiración agitada tras correr o la tensión muscular al mantener el equilibrio— favorece el desarrollo de la propiocepción, es decir, la percepción de la posición y el estado del propio cuerpo, y contribuye a la autorregulación tanto corporal como emocional. Un ejemplo clásico de trabajo de este autocontrol es el juego de las 'estatuas' (moverse libremente mientras suena la música y quedarse completamente inmóvil cuando esta se detiene), que trabaja el control corporal voluntario, la atención auditiva a la señal sonora y la capacidad de inhibir el propio movimiento cuando es necesario, una habilidad estrechamente relacionada con el autocontrol que el niño necesitará después en muchas otras situaciones del aula."
 },
 {
  "id": "b17-08",
  "block": "b17",
  "blockTitle": "La Expresión Corporal",
  "concept": "Cualidades del movimiento y ampliación del repertorio expresivo",
  "explanation": "Explorar distintas cualidades del movimiento —rápido o lento, fuerte o suave, con gestos grandes o pequeños— a través del propio cuerpo enriquece la conciencia corporal del niño y amplía su repertorio expresivo y creativo, permitiéndole comunicar matices distintos: no es lo mismo moverse 'enfadado' que moverse 'con mucho sueño'. Trabajar estas cualidades de forma explícita, por ejemplo proponiendo 'camina como si pesaras mucho' y después 'camina como si fueras una pluma', ayuda al niño a descubrir que su cuerpo puede expresar matices muy diversos más allá del movimiento cotidiano y automático, sentando además una base motriz y expresiva que después será útil en la danza, el teatro o cualquier otra manifestación artística que requiera control consciente del propio cuerpo."
 },
 {
  "id": "b17-09",
  "block": "b17",
  "blockTitle": "La Expresión Corporal",
  "concept": "Danzas del mundo y trabajo grupal en expresión corporal",
  "explanation": "Las danzas del mundo o bailes tradicionales sencillos, adaptados a la edad, contribuyen al conocimiento de la diversidad cultural —cada baile procede de una tradición y un lugar concretos—, al trabajo del ritmo al seguir los pasos con la música, y a la coordinación y cohesión del grupo al moverse juntos siguiendo una misma secuencia. En una línea similar, las actividades de expresión corporal en grupo, como formar entre varios una figura o moverse coordinadamente en pareja, favorecen además de la dimensión motriz y expresiva individual, la cooperación y la coordinación con los demás, contribuyendo también al desarrollo social del niño: aprender a ajustar el propio movimiento al del compañero es en sí mismo un aprendizaje relacional valioso."
 },
 {
  "id": "b17-10",
  "block": "b17",
  "blockTitle": "La Expresión Corporal",
  "concept": "Organización práctica de la sesión: espacio, calentamiento y materiales",
  "explanation": "Una sesión de expresión corporal bien planteada requiere atender a varios aspectos organizativos. El espacio debe ser, ante todo, amplio, seguro y libre de obstáculos (mesas, sillas, objetos con los que se pueda tropezar), de modo que todo el grupo pueda moverse con libertad y sin riesgo de accidentes. El calentamiento corporal previo prepara progresivamente el cuerpo para el movimiento —activando el tono muscular y la circulación— y ayuda a centrar la atención del grupo antes de la actividad principal, siendo una fase breve y distinta tanto de esta como de la relajación final. Por último, objetos y telas (pañuelos, cintas, aros) amplían las posibilidades expresivas y motrices del movimiento —un pañuelo puede volar, ondular o esconder algo—, actuando como elemento mediador que enriquece la creatividad sin sustituir el movimiento corporal libre."
 },
 {
  "id": "b17-11",
  "block": "b17",
  "blockTitle": "La Expresión Corporal",
  "concept": "La observación docente del movimiento como fuente de información del desarrollo infantil",
  "explanation": "Observar cómo se mueve y se expresa corporalmente cada niño —si se mueve con soltura o con inhibición, si busca el contacto con otros niños o se mantiene aislado— permite a la maestra conocer mejor su desarrollo motor, emocional y relacional, información muy valiosa para ajustar la intervención educativa a las necesidades de cada niño. Por ejemplo, una maestra que advierte que un niño evita sistemáticamente las actividades de expresión corporal en grupo, o que se muestra muy rígido y poco espontáneo en sus movimientos, puede estar detectando una señal de inhibición emocional o de inseguridad que convendría abordar con estrategias específicas, mostrando que las sesiones de expresión corporal no son solo un espacio de disfrute motriz, sino también una potente herramienta de observación pedagógica global."
 },
 {
  "id": "b18-01",
  "block": "b18",
  "blockTitle": "La Familia Como Primer Agente de Socialización",
  "concept": "La familia como primer agente de socialización y sus funciones básicas",
  "explanation": "La familia se considera el primer agente de socialización porque es la primera institución con la que el niño establece vínculos afectivos y aprende las pautas sociales más básicas —cómo comunicarse, qué normas seguir, cómo relacionarse con otros—, mucho antes de entrar en contacto con la escuela, el grupo de iguales o los medios de comunicación, que actuarán como agentes socializadores posteriores. Este papel se concreta en varias funciones básicas: la biológica (cuidados y protección física), la afectiva (proporcionar vínculo y seguridad emocional), la socializadora (transmitir las primeras normas y pautas sociales) y la educativa (transmitir valores, hábitos y conocimientos). Por ejemplo, cuando unos padres establecen rutinas de sueño y alimentación, consuelan al bebé cuando llora y le enseñan a saludar o a compartir un juguete, están ejerciendo simultáneamente estas cuatro funciones."
 },
 {
  "id": "b18-02",
  "block": "b18",
  "blockTitle": "La Familia Como Primer Agente de Socialización",
  "concept": "Estilos educativos parentales según Baumrind y su transmisión intergeneracional",
  "explanation": "Baumrind clasifica los estilos educativos parentales en función de dos dimensiones: el afecto y el control. El estilo democrático o autorizativo combina afecto y comunicación cálida con normas claras que se explican y razonan, y la investigación lo asocia consistentemente con mejores resultados en el desarrollo social y emocional del niño. El estilo autoritario combina alto control y exigencia de obediencia con escasa calidez o explicación de las normas ('esto se hace así porque lo digo yo'). El estilo permisivo, con alto afecto pero límites muy escasos o inconsistentes, se asocia frecuentemente con dificultades del niño para autorregular su conducta y sus emociones, precisamente por la falta de límites estables. Estos patrones de crianza tienden además a repetirse de una generación a otra —la llamada transmisión intergeneracional—, aunque pueden identificarse y modificarse de forma consciente, por ejemplo mediante la formación o el acompañamiento profesional a las familias."
 },
 {
  "id": "b18-03",
  "block": "b18",
  "blockTitle": "La Familia Como Primer Agente de Socialización",
  "concept": "Parentalidad positiva como modelo de crianza promovido institucionalmente",
  "explanation": "La parentalidad positiva, concepto promovido por organismos como el Consejo de Europa, es un modelo de crianza que combina afecto, comunicación, el establecimiento de límites claros pero no violentos (sin castigo físico ni humillante) y el reconocimiento de los derechos y las necesidades evolutivas propias de cada edad del niño. Este modelo, muy próximo al estilo democrático de Baumrind, se ha convertido en un referente para las políticas públicas de apoyo a la crianza y para la formación de familias en las escuelas infantiles. En la práctica, una familia que actúa desde la parentalidad positiva, ante una rabieta, no recurre al castigo físico ni a la humillación, sino que pone un límite firme ('no se pega') acompañado de calidez y de una explicación adaptada a la edad, reconociendo al mismo tiempo que esa reacción emocional es propia y esperable en el desarrollo de un niño pequeño."
 },
 {
  "id": "b18-04",
  "block": "b18",
  "blockTitle": "La Familia Como Primer Agente de Socialización",
  "concept": "Relación escuela-familia: colaboración, complementariedad de roles y coeducación",
  "explanation": "La relación entre la escuela infantil y la familia debe basarse en la colaboración, la complementariedad de roles y una comunicación fluida en ambos sentidos —la escuela informa a la familia y la familia aporta información relevante sobre el niño—, y no en que una de las dos instituciones delegue por completo su responsabilidad en la otra, ni en la ausencia de contacto entre ambas. Este principio se concreta en el concepto de coeducación familia-escuela, que implica compartir un proyecto educativo coherente entre ambos contextos, reconociendo que cada uno tiene un rol complementario y distinto —no idéntico— en la educación del niño, de modo que los mensajes y valores transmitidos en casa y en la escuela no resulten contradictorios. Por ejemplo, si el centro trabaja la autonomía en la comida, es importante que la familia conozca esa pauta y, en la medida de lo posible, la refuerce también en casa."
 },
 {
  "id": "b18-05",
  "block": "b18",
  "blockTitle": "La Familia Como Primer Agente de Socialización",
  "concept": "El periodo de adaptación al inicio de la escolarización",
  "explanation": "El periodo de adaptación al inicio de la escolarización busca facilitar de forma gradual la transición del entorno familiar al escolar —por ejemplo, con estancias cortas los primeros días que se van alargando progresivamente—, atendiendo a la angustia de separación propia de estas edades, en lugar de una separación brusca y sin preparación. Este proceso es especialmente delicado en el primer ciclo de Infantil, donde muchos niños viven su primera separación prolongada de las figuras de apego. Una organización habitual consiste en que, durante la primera semana, el niño acuda solo un par de horas y en algún caso acompañado inicialmente por un familiar en el aula, ampliando el horario poco a poco según cómo va tolerando la separación, lo que reduce notablemente el malestar emocional y facilita que el vínculo con la nueva educadora se construya de forma progresiva y segura."
 },
 {
  "id": "b18-06",
  "block": "b18",
  "blockTitle": "La Familia Como Primer Agente de Socialización",
  "concept": "Canales de comunicación familia-escuela: tutorías, entrevistas y comunicación diaria",
  "explanation": "La comunicación entre familia y escuela infantil se articula a través de distintos canales complementarios. Las reuniones periódicas de tutoría tienen como finalidad compartir información relevante sobre el desarrollo y el proceso educativo del niño —avances, dificultades, aspectos a reforzar en casa—, favoreciendo una coordinación estrecha, y nunca evaluar ni sancionar a las familias. Las entrevistas individuales, distintas de esas reuniones grupales, permiten abordar de forma personalizada y confidencial la situación y las necesidades concretas de cada niño. Por último, la comunicación diaria mediante agenda, notas o aplicaciones digitales —por ejemplo, informar de cuánto ha comido o dormido un bebé— mantiene informadas a las familias sobre el día a día del niño, complementando, pero sin sustituir del todo, la comunicación oral directa a la entrada o salida del aula."
 },
 {
  "id": "b18-07",
  "block": "b18",
  "blockTitle": "La Familia Como Primer Agente de Socialización",
  "concept": "Vías de participación familiar en el centro educativo",
  "explanation": "Más allá de la comunicación sobre el propio hijo, las familias pueden implicarse en la vida del centro de distintas formas. Las escuelas de familias o escuelas de madres y padres ofrecen formación —por ejemplo, sobre el desarrollo evolutivo o la gestión de las emociones infantiles—, apoyo y espacios de reflexión conjunta, sin pretender sustituir la función educativa propia de cada familia. La implicación en actividades del centro (talleres, celebraciones, salidas) fortalece el vínculo entre familia y escuela y enriquece la experiencia educativa del niño, al ver a personas significativas de su entorno implicadas en su vida escolar. Y la participación en órganos de gobierno como el Consejo Escolar constituye una vía de participación institucional en la gestión y la toma de decisiones del centro, por ejemplo aprobando el proyecto educativo, más allá de la relación cotidiana con el aula del hijo o hija."
 },
 {
  "id": "b18-08",
  "block": "b18",
  "blockTitle": "La Familia Como Primer Agente de Socialización",
  "concept": "Diversidad de estructuras familiares y su tratamiento educativo",
  "explanation": "La actual diversidad de estructuras familiares —nucleares, monoparentales, reconstituidas, homoparentales, adoptivas, extensas— debe abordarse desde la escuela con normalidad y respeto, sin establecer jerarquías entre unos modelos y otros ni presentar uno solo como el 'correcto' o 'normal'. Esto es especialmente relevante en Educación Infantil, etapa en la que se sientan las primeras representaciones sociales del niño sobre lo que es una familia. En la práctica, esto implica, por ejemplo, utilizar cuentos y materiales del aula que reflejen esa diversidad real —familias con dos madres, con un solo progenitor, con abuelos como referentes principales—, evitando actividades tipo 'dibuja a tu familia' formuladas de manera que presupongan un único modelo, y adaptando el lenguaje empleado en el aula para que ningún niño se sienta excluido o representado como 'diferente' por la composición de su familia."
 },
 {
  "id": "b18-09",
  "block": "b18",
  "blockTitle": "La Familia Como Primer Agente de Socialización",
  "concept": "Confidencialidad de la información familiar compartida con el centro",
  "explanation": "El respeto a la confidencialidad de la información familiar compartida con el centro —una situación personal, un dato de salud— es un principio ético y legal fundamental, relacionado con el derecho a la protección de datos y a la intimidad familiar, y no algo que el centro pueda compartir libremente con terceros sin consentimiento. Esta cuestión conecta directamente con la normativa de protección de datos aplicable a los centros educativos, que exige un tratamiento cuidadoso de la información sensible que las familias confían al profesorado. Por ejemplo, si una familia comunica a la tutora que está pasando por un proceso de separación conflictivo, esa información no debe comentarse en la sala de profesores como un dato anecdótico, ni compartirse con otras familias, sino manejarse con la máxima discreción y utilizarse únicamente, si procede, para ajustar el acompañamiento educativo del niño."
 },
 {
  "id": "b18-10",
  "block": "b18",
  "blockTitle": "La Familia Como Primer Agente de Socialización",
  "concept": "El apego múltiple y la estabilidad de la figura de referencia en la escuela infantil",
  "explanation": "El niño puede establecer, además de con su familia, un vínculo de apego seguro con la educadora de referencia en la escuela infantil, fenómeno conocido como apego múltiple, ya que convive con el vínculo familiar sin sustituirlo. La estabilidad y continuidad de esa figura de referencia —el tutor o tutora— a lo largo del curso favorece notablemente que ese vínculo se consolide, mientras que un cambio constante de personal a cargo del grupo lo dificultaría de forma importante. Por ejemplo, un bebé de un año que busca consuelo en su educadora habitual cuando se hace daño, del mismo modo que lo buscaría en su madre, está mostrando un apego múltiple bien constituido, lo que resulta un indicador positivo de su bienestar emocional en el contexto escolar y de la calidad de la relación establecida con esa persona adulta."
 },
 {
  "id": "b18-11",
  "block": "b18",
  "blockTitle": "La Familia Como Primer Agente de Socialización",
  "concept": "La función de detección y derivación ante familias en riesgo de exclusión social",
  "explanation": "Ante familias en riesgo de exclusión social o con especiales dificultades, la escuela infantil puede desempeñar una función de detección temprana —observar indicadores de vulnerabilidad, como carencias de higiene reiteradas o ausencias injustificadas— y de derivación a los servicios sociales y de apoyo correspondientes, además de un acompañamiento educativo cercano, sin pretender sustituir la labor de esos servicios especializados ni excluir al niño del centro. Esta función es especialmente relevante porque la escuela infantil constituye, en muchos casos, el primer contacto institucional sistemático con estas familias, y el personal docente está en una posición privilegiada para observar señales de alerta en el día a día, por lo que conocer los protocolos de derivación y coordinación con los servicios sociales del ayuntamiento o de la comunidad autónoma forma parte de la responsabilidad profesional del maestro o maestra."
 },
 {
  "id": "b19-01",
  "block": "b19",
  "blockTitle": "La Función del Maestro o Maestra en Educación Infantil",
  "concept": "El rol del maestro o maestra de Infantil: mediador y guía constructivista",
  "explanation": "El docente de Infantil actúa como mediador, guía y acompañante del proceso de desarrollo y aprendizaje: crea ambientes ricos en estímulos, propone experiencias significativas y acompaña al niño en su descubrimiento, en lugar de limitarse a transmitir contenidos académicos o a ejercer una función meramente asistencial de cuidado sin intención pedagógica. Desde el enfoque constructivista, al organizar el ambiente y las actividades el docente facilita que sea el propio niño quien construya activamente su aprendizaje, en interacción con los materiales, el entorno y los demás, en lugar de transmitir información de forma memorística o actuar como mera figura de vigilancia. Por ejemplo, ante un rincón de experimentación con agua y objetos flotantes, la maestra no explica de antemano por qué flotan las cosas, sino que deja explorar, formula preguntas ('¿qué crees que pasará si...?') y ayuda a poner en palabras lo que el niño va descubriendo por sí mismo."
 },
 {
  "id": "b19-02",
  "block": "b19",
  "blockTitle": "La Función del Maestro o Maestra en Educación Infantil",
  "concept": "Individualización y atención a la diversidad: coordinación con especialistas y equipo docente",
  "explanation": "La individualización de la enseñanza implica que el maestro o maestra ajuste su intervención a las características, ritmos e intereses de cada niño dentro del grupo —dando más tiempo a quien lo necesita para terminar una tarea, o proponiendo un reto mayor a quien ya domina algo—, sin renunciar a una planificación general ni limitarse a atender solo al alumnado con necesidades específicas de apoyo educativo. Esta atención individualizada exige, además, coordinación con el resto del equipo: la coherencia entre el tutor, los especialistas (música, educación física, Audición y Lenguaje, Pedagogía Terapéutica) y el equipo de orientación garantiza que la respuesta educativa ante las necesidades de un niño sea compartida y no aislada. Por ejemplo, que todos los profesionales conozcan y refuercen de manera similar una pauta acordada para un niño con dificultades de conducta, evitando que cada uno actúe con criterios distintos, es una aplicación directa del principio de atención a la diversidad."
 },
 {
  "id": "b19-03",
  "block": "b19",
  "blockTitle": "La Función del Maestro o Maestra en Educación Infantil",
  "concept": "Observación sistemática y diario de aula como base de la evaluación continua",
  "explanation": "La observación directa y sistemática es, en Infantil, la técnica de evaluación por excelencia —mucho más adecuada a esta edad que un examen—, y permite al docente ajustar continuamente su intervención educativa a las necesidades reales que va detectando en el alumnado, por ejemplo cambiando una actividad que ve que no funciona o reforzando un contenido que observa poco consolidado. El diario o cuaderno de observación es la herramienta que sostiene esta técnica: permite registrar de forma sistemática información relevante sobre el proceso individual de cada niño y del grupo —un logro puntual, una dificultad recurrente, un cambio de conducta—, fundamentando así la evaluación continua y la toma de decisiones pedagógicas con datos concretos y fechados, en lugar de basarse únicamente en la impresión general o en el recuerdo, que puede ser selectivo o impreciso."
 },
 {
  "id": "b19-04",
  "block": "b19",
  "blockTitle": "La Función del Maestro o Maestra en Educación Infantil",
  "concept": "Profesionalidad docente: formación permanente, práctica reflexiva y planificación flexible",
  "explanation": "La formación permanente y la reflexión sobre la propia práctica —la llamada práctica reflexiva: preguntarse por qué una actividad ha funcionado o no, y qué se podría mejorar— son elementos clave de la profesionalidad docente para la mejora continua, y no algo que termine con la obtención del título inicial ni una responsabilidad que recaiga únicamente en la administración educativa. Esta actitud reflexiva se conecta con la planificación de las sesiones: planificar previamente permite organizar de forma intencional los objetivos, los recursos y los momentos de la jornada, sin que ello suponga renunciar a la flexibilidad necesaria para ajustar sobre la marcha lo planificado si el grupo muestra un interés inesperado o una necesidad puntual no prevista, como dedicar más tiempo del previsto a observar un caracol que ha aparecido en el patio porque ha despertado un enorme interés colectivo."
 },
 {
  "id": "b19-05",
  "block": "b19",
  "blockTitle": "La Función del Maestro o Maestra en Educación Infantil",
  "concept": "Vínculo afectivo y sensibilidad pedagógica del docente",
  "explanation": "El maestro o maestra puede constituirse en una figura de apego secundario o de referencia afectiva relevante para el niño, especialmente en el primer ciclo, contribuyendo a su bienestar emocional en el aula; por eso la estabilidad de esa figura a lo largo del curso, y no su sustitución constante por otros adultos, resulta importante. Esta capacidad de vincularse afectivamente se apoya en la 'sensibilidad pedagógica': la capacidad del docente de percibir e interpretar adecuadamente las señales, necesidades y momentos evolutivos de cada niño —por ejemplo, notar que un niño está más callado de lo habitual y que quizá necesita hablar de algo— para ajustar su intervención en consecuencia, en lugar de aplicar la programación de forma mecánica sin margen de ajuste ante las necesidades emocionales que van surgiendo día a día."
 },
 {
  "id": "b19-06",
  "block": "b19",
  "blockTitle": "La Función del Maestro o Maestra en Educación Infantil",
  "concept": "Competencia profesional docente: dimensiones técnica, relacional, emocional y ética",
  "explanation": "La competencia profesional docente integra conocimientos, habilidades y actitudes, incluyendo de forma muy relevante en Infantil la dimensión relacional (cómo se vincula con cada niño), emocional (cómo gestiona sus propias emociones y las del grupo) y ética de la profesión, y no se limita al conocimiento teórico académico ni a los años de experiencia acumulados. La ética profesional docente implica, en particular, el respeto a la dignidad, los derechos y la confidencialidad del alumnado y de sus familias —por ejemplo, no comentar en público una situación personal que una familia ha compartido en confianza— y una actuación coordinada con el resto del equipo educativo, no aislada ni guiada por intereses personales del propio docente. Esta visión amplia de la competencia explica por qué dos maestras con la misma formación teórica pueden tener resultados educativos muy distintos según cómo gestionen estas dimensiones relacionales y éticas."
 },
 {
  "id": "b19-07",
  "block": "b19",
  "blockTitle": "La Función del Maestro o Maestra en Educación Infantil",
  "concept": "El error como oportunidad de aprendizaje y el efecto Pigmalión",
  "explanation": "El error debe entenderse como parte natural e informativa del proceso de aprendizaje —muestra en qué punto está el niño y qué necesita todavía— y acompañarse de forma respetuosa y constructiva, en lugar de sancionarlo de inmediato o, en el extremo contrario, evitar a toda costa que el niño se equivoque, lo que le impediría aprender de la propia experiencia. Esta actitud ante el error está muy relacionada con el efecto Pigmalión o de las 'expectativas docentes': las expectativas del docente sobre un niño, aunque no se expresen de forma explícita, pueden influir de manera no siempre consciente en su comportamiento, su motivación y su desarrollo, por ejemplo dedicándole sin darse cuenta más tiempo o más paciencia a quien se espera que rinda mejor. Por ello resulta importante que el docente sea consciente de sus propias expectativas hacia cada niño, para no tratar sus errores de forma distinta según ese sesgo previo."
 },
 {
  "id": "b19-08",
  "block": "b19",
  "blockTitle": "La Función del Maestro o Maestra en Educación Infantil",
  "concept": "Burnout o desgaste profesional docente",
  "explanation": "El burnout o desgaste profesional docente se caracteriza por agotamiento emocional, despersonalización —distanciarse emocionalmente de los niños y del trabajo— y una baja sensación de realización personal, derivados de la exposición sostenida a factores de estrés laboral. Es especialmente relevante en profesiones con alta carga emocional y relacional como la docencia en Infantil, donde el contacto físico y afectivo constante, la responsabilidad sobre niños muy pequeños y, en ocasiones, ratios elevadas generan un desgaste acumulativo. Es importante subrayar que el burnout no es un signo de falta de vocación, sino un fenómeno de desgaste que conviene prevenir y atender: por ejemplo, mediante espacios de apoyo entre compañeros, formación en gestión emocional o una organización razonable de la carga de trabajo, evitando que se interprete simplemente como un problema personal de la maestra afectada."
 },
 {
  "id": "b19-09",
  "block": "b19",
  "blockTitle": "La Función del Maestro o Maestra en Educación Infantil",
  "concept": "Acompañamiento emocional y modelado de conductas sociales (Bandura)",
  "explanation": "El acompañamiento emocional ante situaciones de llanto, frustración o conflicto debe basarse en validar lo que el niño siente ('veo que estás muy enfadado') y ofrecerle un apoyo respetuoso, evitando tanto minimizar la emoción ('no pasa nada, no es para tanto') como castigarla o ridiculizarla, ya que esto enseña al niño a reprimir o esconder lo que siente. Este acompañamiento se apoya en dos elementos: un tono de voz calmado y una comunicación no verbal coherente, que generan un clima de seguridad y confianza en el aula, mientras que un tono alterado o gestos incongruentes generan inseguridad incluso en niños muy pequeños; y el modelado de conductas, según la teoría del aprendizaje social de Bandura, por el cual cuando el docente muestra cómo negociar en voz alta entre dos posturas para resolver un conflicto, actúa como modelo de referencia que los niños aprenden observando, más allá de lo que este les explique verbalmente."
 },
 {
  "id": "b19-10",
  "block": "b19",
  "blockTitle": "La Función del Maestro o Maestra en Educación Infantil",
  "concept": "Triangulación de la información entre docente, familia y otros profesionales",
  "explanation": "Triangular la información procedente de distintas fuentes —la observación directa del docente, las aportaciones de la familia sobre lo que ocurre en casa, y en su caso la valoración de otros profesionales— permite obtener una visión más completa, contrastada y ajustada del desarrollo y las necesidades reales del niño, en lugar de basar las decisiones educativas en una única fuente de información que podría ser parcial. Por ejemplo, si un niño muestra en el aula una conducta de aislamiento que la maestra observa reiteradamente, contrastar esa observación con lo que cuenta la familia sobre su comportamiento en casa, y eventualmente con la valoración del equipo de orientación, permite discernir si se trata de un rasgo temperamental estable, de una reacción puntual a un cambio familiar, o de una señal que requiere una intervención más específica, evitando decisiones apresuradas basadas en una sola mirada parcial."
 },
 {
  "id": "b20-01",
  "block": "b20",
  "blockTitle": "La Influencia de la Imagen en el Niño",
  "concept": "Alfabetización audiovisual y pensamiento crítico ante estereotipos y publicidad",
  "explanation": "La alfabetización audiovisual busca que, desde edades tempranas, el niño desarrolle capacidades de comprensión y análisis, no solo receptivo sino progresivamente crítico, ante las imágenes y los medios de comunicación, yendo mucho más allá de la alfabetización tradicional centrada solo en el texto escrito. Esta capacidad crítica se concreta, por ejemplo, en analizar de forma sencilla y adaptada a la edad los estereotipos —de género, culturales— que a veces transmiten los dibujos animados (comentar por qué en una serie los personajes que cocinan siempre son mujeres) o en iniciar un análisis básico ante los mensajes publicitarios dirigidos a la infancia, comentando que un anuncio de juguetes muestra el producto de forma muy atractiva para que queramos comprarlo, en lugar de fomentar un consumo puramente acrítico. Este trabajo forma parte tanto de la educación en valores como del desarrollo del pensamiento crítico, y puede y debe iniciarse ya desde la etapa infantil."
 },
 {
  "id": "b20-02",
  "block": "b20",
  "blockTitle": "La Influencia de la Imagen en el Niño",
  "concept": "Uso de pantallas en la primera infancia: recomendaciones, riesgos, co-visionado y límites",
  "explanation": "Las principales recomendaciones pediátricas, como las de la Academia Americana de Pediatría, desaconsejan en general el uso de pantallas en menores de 2 años, salvo videollamadas puntuales con familiares, priorizando la interacción social directa, el juego y la exploración del entorno. Diversos estudios asocian además el uso excesivo y no acompañado de pantallas en edades tempranas con posibles dificultades en el desarrollo del lenguaje, en la atención sostenida y en la calidad del sueño, especialmente si se usan antes de dormir. Por ello se recomienda el co-visionado —ver contenidos junto al niño y comentarlos, por ejemplo '¿por qué crees que ese personaje está triste?'— y el establecimiento de límites de tiempo adecuados a la edad, acordados entre familia y centro: ni la prohibición absoluta, poco realista y que puede generar más deseo, ni el uso sin ningún límite, que puede desplazar otras actividades esenciales como el juego o el sueño. La responsabilidad de seleccionar contenidos adecuados es compartida entre familia y centro."
 },
 {
  "id": "b20-03",
  "block": "b20",
  "blockTitle": "La Influencia de la Imagen en el Niño",
  "concept": "La imagen y los recursos audiovisuales como apoyo didáctico, no sustituto de la experiencia directa",
  "explanation": "La imagen (fotografías, pictogramas, ilustraciones de cuentos) se utiliza en el aula como recurso que apoya la comprensión —ver la ilustración de un cuento ayuda a entender la historia aunque no se comprendan todas las palabras—, motiva el aprendizaje y facilita el acceso a la información, sin pretender sustituir el lenguaje oral ni el juego. De igual modo, recursos audiovisuales más tecnológicos, como la pizarra digital, deben integrarse en Infantil como un complemento más dentro de una variedad de recursos, sin sustituir la experiencia directa, manipulativa y social —tocar, moverse, hablar con otros— que caracteriza el aprendizaje propio de esta etapa. Por ejemplo, proyectar en la pizarra digital el vídeo de una mariposa saliendo de su crisálida puede complementar, pero nunca sustituir, la observación directa de una oruga real criada en el aula."
 },
 {
  "id": "b20-04",
  "block": "b20",
  "blockTitle": "La Influencia de la Imagen en el Niño",
  "concept": "Pictogramas y agendas visuales: comunicación e inclusión",
  "explanation": "Los pictogramas apoyan especialmente la comunicación de alumnado con dificultades comunicativas, por ejemplo mediante sistemas alternativos de comunicación, ayudan a anticipar las rutinas del día viendo mediante imágenes qué actividad viene después, y facilitan la inclusión de todo el alumnado, sin pretender sustituir por completo el lenguaje oral o escrito. Una aplicación muy extendida de este recurso son las agendas visuales, que usan imágenes y pictogramas para representar la secuencia de actividades del día —desayuno, patio, asamblea, siesta—, ayudando a todo el alumnado a anticipar y comprender el paso del tiempo en la jornada, favoreciendo su sensación de seguridad y su autonomía, sin depender únicamente de que el adulto lo recuerde verbalmente en cada momento, lo que resulta especialmente valioso para niños con ansiedad ante lo desconocido o con dificultades de comunicación."
 },
 {
  "id": "b20-05",
  "block": "b20",
  "blockTitle": "La Influencia de la Imagen en el Niño",
  "concept": "Lectura de imagen: álbum ilustrado, álbum mudo e imagen fija frente a imagen en movimiento",
  "explanation": "La lectura de imagen es la capacidad de observar, interpretar, describir y extraer significado de una imagen o de una secuencia de imágenes, por ejemplo deducir en un álbum ilustrado qué ha pasado entre una viñeta y la siguiente aunque no haya texto que lo explique, una habilidad que se trabaja especialmente a través del álbum ilustrado. Su expresión más pura es el álbum mudo o cuento sin palabras, narrado exclusivamente a través de imágenes, donde el niño debe inventar o deducir la historia observando la secuencia de ilustraciones, desarrollando así tanto la lectura de imagen como la creatividad narrativa oral al contarla con sus propias palabras. Conviene además distinguir la imagen fija (una fotografía, que capta un único instante congelado) de la imagen en movimiento (vídeo, animación), que añade la dimensión temporal y narrativa de una secuencia de planos que se desarrolla y cuenta algo que va cambiando."
 },
 {
  "id": "b20-06",
  "block": "b20",
  "blockTitle": "La Influencia de la Imagen en el Niño",
  "concept": "Aprendizaje social por observación de modelos en pantalla (Bandura)",
  "explanation": "Bandura, con su teoría del aprendizaje social, mostró que los niños pueden aprender conductas —incluidas conductas agresivas— por simple observación de un modelo, sin necesidad de experimentarlas ellos mismos ni de recibir un refuerzo directo. Este mecanismo se aplica también a los modelos que un niño observa a través de pantallas y medios audiovisuales, de ahí la importancia de vigilar qué contenidos ve: un dibujo animado en el que un personaje resuelve sus conflictos a golpes puede ser imitado por el niño en el patio del colegio del mismo modo que imitaría una conducta observada en un adulto real. Este vínculo entre teoría del aprendizaje social y consumo audiovisual infantil justifica la necesidad de seleccionar con cuidado los contenidos y de acompañarlos con comentarios adultos que ayuden a interpretar críticamente lo que se está viendo."
 },
 {
  "id": "b20-07",
  "block": "b20",
  "blockTitle": "La Influencia de la Imagen en el Niño",
  "concept": "Imagen corporal, modelos estéticos y autoestima desde la infancia",
  "explanation": "La exposición a determinados modelos estéticos difundidos por ciertos medios puede influir, incluso desde edades tempranas, en la construcción de la autoimagen y la autoestima corporal del niño, lo que justifica un trabajo educativo preventivo y de sentido crítico desde la propia etapa infantil, no solo en etapas posteriores como la adolescencia. Por ejemplo, la reiterada asociación en dibujos animados o publicidad de determinados cuerpos con la belleza, el éxito o la felicidad puede empezar a moldear, de forma sutil, las expectativas del niño sobre su propio cuerpo. Frente a ello, mostrar en el aula cuentos, imágenes y materiales que representen cuerpos diversos como algo normal y positivo —distintas complexiones, colores de piel, capacidades— constituye una estrategia preventiva sencilla pero eficaz para sentar, desde Infantil, una relación sana con la propia imagen corporal."
 },
 {
  "id": "b20-08",
  "block": "b20",
  "blockTitle": "La Influencia de la Imagen en el Niño",
  "concept": "Códigos de comunicación visual cotidianos como precursores de la simbolización",
  "explanation": "Los códigos de comunicación visual presentes en el entorno cotidiano del niño —el semáforo, la señal de una salida de emergencia, el icono de un baño— ofrecen un contexto significativo y accesible para iniciar la comprensión de que un símbolo puede representar y comunicar algo concreto, sentando bases para comprender más adelante otros sistemas de representación simbólica, como la escritura. Aprovechar estos elementos en el aula, por ejemplo saliendo a observar y comentar las señales de tráfico del entorno del centro, o fabricando entre todos pictogramas sencillos para señalizar los rincones del aula, ayuda al niño a interiorizar de forma vivencial que las imágenes y los símbolos pueden 'decir' algo sin necesidad de palabras, una intuición que resultará clave cuando más adelante se enfrente a la comprensión del código escrito."
 },
 {
  "id": "b20-09",
  "block": "b20",
  "blockTitle": "La Influencia de la Imagen en el Niño",
  "concept": "Brecha digital y equidad educativa en Infantil",
  "explanation": "La brecha digital hace referencia a las desigualdades de acceso y uso de las tecnologías digitales entre distintos grupos sociales —por ejemplo, tener o no un dispositivo y una conexión adecuados en casa—, un factor que puede afectar a la equidad educativa incluso en la etapa infantil. Aunque en Infantil el peso de las tareas digitales es mucho menor que en otras etapas, el centro debe tener en cuenta esta brecha al proponer actividades que dependan de recursos tecnológicos, por ejemplo pidiendo a las familias que graben en casa un vídeo con el niño explicando algo, o al comunicar información importante exclusivamente a través de una aplicación digital: si no todas las familias disponen del mismo acceso, pueden generarse situaciones de desigualdad que conviene prever, ofreciendo siempre alternativas no digitales para no penalizar a quienes tienen menos recursos tecnológicos."
 },
 {
  "id": "b20-10",
  "block": "b20",
  "blockTitle": "La Influencia de la Imagen en el Niño",
  "concept": "Creación de contenidos audiovisuales por el alumnado: de espectador a creador",
  "explanation": "Que el propio alumnado cree contenidos audiovisuales sencillos —por ejemplo, fotografiar con ayuda del docente una construcción que ha hecho, o grabar un breve vídeo explicando un dibujo— favorece un papel activo y creativo frente a la imagen, en contraste con el rol puramente pasivo de espectador que se tiene al simplemente consumir contenidos ya elaborados por otros. Esta inversión de roles resulta pedagógicamente valiosa porque el niño deja de ser un mero receptor de imágenes ajenas y se convierte en autor de sus propias producciones visuales, lo que refuerza su lenguaje oral al tener que explicar lo que ha fotografiado o grabado, su autoestima al ver reconocido y compartido su trabajo, y una comprensión más profunda de cómo se construye un mensaje audiovisual, sentando además una base temprana para un consumo de medios más consciente y crítico en el futuro."
 },
 {
  "id": "b21-01",
  "block": "b21",
  "blockTitle": "La Literatura Infantil",
  "concept": "Doble función de la literatura infantil y desarrollo de la competencia literaria",
  "explanation": "La literatura infantil cumple simultáneamente una función estética y lúdica —el placer de la trama, de la sonoridad de las palabras y de las imágenes— y una función formativa, que impulsa el desarrollo lingüístico (ampliación de vocabulario y estructuras sintácticas), cognitivo (comprensión de secuencias temporales y relaciones causales) y emocional (identificación con personajes, elaboración de miedos). No se trata, por tanto, de un recurso meramente instructivo o moralizante. A partir de esta doble función se construye progresivamente la competencia literaria, es decir, la capacidad de comprender, disfrutar y valorar textos literarios, que en Infantil no se trabaja mediante exámenes ni lectura autónoma exigida, sino a través de la escucha activa diaria, la familiarización con estructuras narrativas repetidas y el disfrute compartido con el adulto y los iguales. Por ejemplo, un grupo de 4 años que escucha cada día un cuento distinto va interiorizando poco a poco cómo se organiza una historia, mucho antes de saber leer."
 },
 {
  "id": "b21-02",
  "block": "b21",
  "blockTitle": "La Literatura Infantil",
  "concept": "Estructura narrativa, cuentos acumulativos y anticipación lectora",
  "explanation": "La estructura clásica de planteamiento, nudo y desenlace, presente en la mayoría de cuentos populares, ayuda al niño a interiorizar un patrón narrativo que después le sirve para comprender otras historias, desarrollando la noción de secuencia temporal (qué ocurre antes y después) y de causalidad (por qué sucede algo como consecuencia de otra cosa). Los cuentos de estructura acumulativa o repetitiva, como \"La gallinita roja\", en los que se van añadiendo elementos que se repiten en cada episodio, resultan especialmente adecuados en estas edades porque la repetición facilita que el niño anticipe lo que va a ocurrir, participe activamente diciendo la parte que ya conoce y ejercite su memoria de forma motivadora. Esta misma lógica sustenta la estrategia de «anticipación de la lectura»: predecir a partir del título o de la ilustración de la portada de qué puede tratar un cuento, lo que estimula el pensamiento hipotético-inferencial (formular una hipótesis y comprobarla después) incluso antes de que el niño lea de forma convencional. Por ejemplo, mostrar solo la portada y preguntar «¿qué creéis que le pasará al lobo?» antes de empezar a leer."
 },
 {
  "id": "b21-03",
  "block": "b21",
  "blockTitle": "La Literatura Infantil",
  "concept": "Criterios de selección de cuentos y organización de la biblioteca de aula",
  "explanation": "Seleccionar cuentos adecuados exige atender a la adecuación del vocabulario, la temática, la extensión y la complejidad narrativa a la edad e intereses concretos del grupo; por ejemplo, un cuento sobre el miedo a la oscuridad puede resultar muy pertinente para un grupo de 4 años que esté atravesando esa situación en casa. No conviene elegir siempre los textos más extensos ni evitar sistemáticamente cualquier tensión narrativa, ya que un conflicto sencillo suele sostener el interés infantil. Esta selección cuidada debe ir acompañada de una biblioteca de aula bien organizada: accesible y atractiva, situada a la altura del niño, con las portadas de los libros visibles para facilitar el reconocimiento, y que permita la libre elección y manipulación de los ejemplares por parte del alumnado, en lugar de mantener los libros fuera de su alcance por precaución o reservar el acceso en exclusiva al docente. Un rincón de biblioteca así planteado invita a hojear, mirar las imágenes y «leer» de forma autónoma incluso antes de saber decodificar el texto."
 },
 {
  "id": "b21-04",
  "block": "b21",
  "blockTitle": "La Literatura Infantil",
  "concept": "La hora del cuento: vínculo afectivo, narración oral y uso de títeres",
  "explanation": "El momento diario dedicado al cuento fortalece el vínculo afectivo entre el adulto y el grupo, al compartir un espacio de calma y atención conjunta, despierta el gusto por la lectura y enriquece el vocabulario y las estructuras del lenguaje oral que el niño escucha, mucho más allá de una simple memorización literal del texto. La calidad de ese momento depende en gran medida de la narración oral: adaptar la voz (un tono distinto para cada personaje), el ritmo (más lento en los momentos de tensión) y los silencios enriquece la experiencia, mantiene la atención del grupo y favorece su implicación emocional, frente a una lectura plana y monótona. Los títeres y marionetas son un recurso muy eficaz para reforzar este efecto: captan la atención, implican emocionalmente al alumnado —el títere «habla» directamente al grupo— y facilitan la comprensión de la narración, complementando, sin sustituir nunca, la voz del propio docente. Por ejemplo, presentar al lobo de un cuento como un títere que asoma tímidamente puede rebajar el miedo que ese personaje generaría de otro modo."
 },
 {
  "id": "b21-05",
  "block": "b21",
  "blockTitle": "La Literatura Infantil",
  "concept": "El álbum ilustrado como formato de la literatura infantil contemporánea",
  "explanation": "El álbum ilustrado es un formato en el que el texto y la imagen dialogan y se complementan para construir el significado completo de la historia; en muchos álbumes de calidad la imagen aporta información que el texto no menciona, o viceversa, de modo que el lector debe integrar ambos códigos para comprender el relato en su totalidad. Lejos de considerarse un formato marginal o exclusivo para adultos, el álbum ilustrado goza hoy de un gran valor literario y didáctico dentro de la literatura infantil contemporánea, y constituye un recurso muy potente en el aula de Infantil precisamente porque el niño, antes de leer de forma convencional, puede acceder al relato «leyendo» las ilustraciones con gran detalle, deteniéndose en detalles que el docente puede aprovechar para generar conversación, por ejemplo preguntando qué está mirando un personaje que el texto ni siquiera menciona."
 },
 {
  "id": "b21-06",
  "block": "b21",
  "blockTitle": "La Literatura Infantil",
  "concept": "Cuentos populares tradicionales: transmisión oral, función psicológica y canon literario",
  "explanation": "Los cuentos clásicos populares, recopilados por autores como los hermanos Grimm o Charles Perrault a partir de la tradición oral, forman parte del acervo de la literatura infantil por su origen en una larga transmisión de generación en generación y por el gran valor cultural y simbólico que encierran, mucho más allá de un valor puramente comercial. Bruno Bettelheim, en «Psicoanálisis de los cuentos de hadas», defendió que estos relatos, a través de su simbolismo —el bosque como lo desconocido, la bruja como el miedo—, ayudan al niño a elaborar de forma indirecta y emocionalmente segura sus propios miedos, conflictos internos y procesos de crecimiento, en lugar de evitarle todo contacto con temas complejos. Precisamente por esta riqueza, el llamado «canon literario infantil» —el conjunto de obras de referencia— no debe entenderse como un listado cerrado e inmutable, sino como un referente orientativo que conviene revisar y ampliar de forma crítica, incorporando diversidad de autores, culturas y formatos, como el álbum ilustrado contemporáneo, sin limitarse siempre a los mismos títulos clásicos."
 },
 {
  "id": "b21-07",
  "block": "b21",
  "blockTitle": "La Literatura Infantil",
  "concept": "Poesía infantil y conciencia fonológica",
  "explanation": "La poesía infantil, mediante recursos sonoros como la rima, el ritmo y la repetición, favorece ante todo el disfrute estético del lenguaje: el placer de jugar con las palabras por cómo suenan, más allá de su significado literal. Este disfrute sonoro no es un fin en sí mismo desde el punto de vista educativo, sino que contribuye de forma decisiva al desarrollo de la conciencia fonológica, es decir, la capacidad de percibir y manipular los sonidos del habla (sílabas, rimas, sonidos iniciales), una habilidad estrechamente relacionada con el posterior aprendizaje de la lectura y la escritura. Por ejemplo, recitar retahílas o canciones con estructuras muy marcadas ayuda a que el niño segmente intuitivamente la cadena hablada en unidades más pequeñas, sentando una base fonológica que resultará muy útil cuando, más adelante, se enfrente a la correspondencia entre sonidos y letras."
 },
 {
  "id": "b21-08",
  "block": "b21",
  "blockTitle": "La Literatura Infantil",
  "concept": "El cuento terapéutico",
  "explanation": "El cuento terapéutico es un recurso que se utiliza en ocasiones para ayudar al niño a abordar situaciones vitales difíciles, como un duelo, un miedo concreto o un cambio familiar significativo (una separación, el nacimiento de un hermano). Su eficacia se basa en la identificación simbólica: el niño se reconoce en los personajes y en las situaciones narradas, lo que le permite procesar de forma indirecta, y a una distancia emocional segura, sus propias vivencias, sin necesidad de hablar directamente y de forma explícita de lo que le ocurre. Este recurso resulta muy útil en el día a día del aula —por ejemplo, ante la llegada de un nuevo hermanito en casa de un alumno—, pero en ningún caso sustituye la intervención de un profesional especializado cuando la situación reviste especial gravedad o complejidad emocional; el docente debe saber reconocer ese límite y derivar cuando sea necesario."
 },
 {
  "id": "b21-09",
  "block": "b21",
  "blockTitle": "La Literatura Infantil",
  "concept": "Gianni Rodari y las técnicas de creación literaria con niños",
  "explanation": "Gianni Rodari, autor de «Gramática de la fantasía», propuso diversas técnicas para estimular la creación literaria con niños, entre las que destaca el «binomio fantástico»: combinar dos palabras sin relación evidente entre sí —por ejemplo, «caballo» y «armario»— y, a partir de esa unión insólita, construir una historia original. La fuerza de la técnica reside precisamente en que, al no existir una conexión lógica previa entre ambos términos, el niño se ve obligado a imaginar y justificar un vínculo que no existe de forma natural, lo que estimula de manera muy potente la fantasía y el pensamiento divergente. En el aula, esta técnica puede aplicarse en gran grupo, proponiendo dos palabras al azar, extraídas por ejemplo de dos bolsas distintas, y construyendo colectivamente el relato resultante, favoreciendo así la expresión oral, la creatividad y la cooperación entre iguales."
 },
 {
  "id": "b21-10",
  "block": "b21",
  "blockTitle": "La Literatura Infantil",
  "concept": "Rasgos que aportan seguridad narrativa: final feliz y personajes animales",
  "explanation": "Los cuentos con final feliz y estructura predecible, muy frecuentes en la literatura de las primeras edades, aportan al niño seguridad emocional, ya que sabe de antemano que, pase lo que pase en la historia, todo se resolverá bien, y facilitan además la comprensión narrativa gracias a su estructura clara; son, por ello, especialmente adecuados antes de introducir progresivamente relatos con finales más abiertos o ambiguos, a medida que el niño gana madurez. En una línea similar, los cuentos protagonizados por animales que hablan y actúan como personas (fábulas y cuentos de animales) resultan especialmente atractivos porque estos personajes, cercanos y accesibles, permiten que el niño se identifique y proyecte sus propias emociones en ellos con una carga afectiva menor que si el protagonista fuera directamente otro niño en una situación muy parecida a la suya; por ejemplo, un conejo asustado ante un examen resulta menos «amenazante» de asumir que un niño real en esa misma situación."
 },
 {
  "id": "b21-11",
  "block": "b21",
  "blockTitle": "La Literatura Infantil",
  "concept": "Literatura de tradición oral gallega en el aula",
  "explanation": "La literatura de tradición oral gallega —contos, lendas, cantigas— transmitida de generación en generación, posee en el contexto de un aula situada en Galicia un valor añadido que va más allá del puramente literario: vincula al alumnado con la lengua propia, con la cultura y con la identidad de su entorno sociocultural más cercano, un vínculo específico que otras literaturas, aun siendo igualmente valiosas, no aportan de la misma manera directa. Esto no implica sustituir el resto de la literatura infantil, sino complementarla, dando presencia en el aula a recursos como cantigas de berce para calmar a los más pequeños, o lendas tradicionales adaptadas a la edad del grupo, lo que refuerza tanto el desarrollo lingüístico en gallego como el sentido de pertenencia del alumnado a su comunidad."
 },
 {
  "id": "b22-01",
  "block": "b22",
  "blockTitle": "La Organización de los Espacios y del Tiempo",
  "concept": "Rincones y ambientes de aprendizaje",
  "explanation": "La organización del espacio en rincones, y de forma más amplia en «ambientes de aprendizaje», responde al principio metodológico de fomentar la actividad autónoma, la libre elección y experiencias de aprendizaje significativas: cada niño puede escoger a qué rincón dirigirse según su interés en un momento dado, en lugar de que todo el grupo realice de forma homogénea y dirigida la misma actividad. El concepto de ambientes de aprendizaje, propio de enfoques como Reggio Emilia, va un paso más allá de la clásica división en rincones fijos (de construcciones, de plástica, de biblioteca...): propone una organización del espacio y los materiales más flexible y globalizada, que integra distintas propuestas y posibilidades de aprendizaje que pueden combinarse y transformarse en función del proyecto que se esté desarrollando en cada momento, sin quedar encorsetadas en divisiones rígidas y permanentes durante todo el curso."
 },
 {
  "id": "b22-02",
  "block": "b22",
  "blockTitle": "La Organización de los Espacios y del Tiempo",
  "concept": "Rutinas, tiempo de espera y transiciones anunciadas",
  "explanation": "Las rutinas —la entrada, la asamblea, el aseo, la comida, la salida— son secuencias de actividades estables que se repiten cada día en un orden similar, aportando seguridad afectiva al niño (sabe qué va a pasar después), referencias temporales claras para estructurar el paso del tiempo, y ocasiones repetidas para practicar la autonomía; no son, por tanto, simples repeticiones mecánicas sin valor educativo. Dentro de esas rutinas, aprender a esperar de forma acompañada y adecuada a la edad —el turno para hablar, que termine una actividad antes de empezar otra— contribuye al desarrollo de la autorregulación emocional y de la tolerancia a la frustración, capacidades necesarias durante toda la vida y que no deben eliminarse de la organización del tiempo por generar cierta incomodidad puntual. En esta misma línea, anunciar y preparar con antelación los cambios de espacio y de actividad, por ejemplo avisando unos minutos antes de salir al patio, favorece transiciones más tranquilas, ayuda a comprender la secuencia temporal de la jornada y reduce la ansiedad ante cambios inesperados."
 },
 {
  "id": "b22-03",
  "block": "b22",
  "blockTitle": "La Organización de los Espacios y del Tiempo",
  "concept": "El espacio como \"tercer maestro\" (Malaguzzi)",
  "explanation": "Loris Malaguzzi, referente pedagógico de las escuelas de Reggio Emilia, acuñó la expresión del ambiente como «tercer educador», junto a la familia y el docente, para subrayar que la forma en que se organiza y se decora el espacio del aula no es en absoluto neutra desde el punto de vista pedagógico, sino que influye activamente en qué y cómo aprenden los niños. Por ejemplo, la altura de las estanterías, la disposición de la luz natural, la accesibilidad de los materiales o la existencia de espacios de intimidad frente a espacios de encuentro grupal pueden facilitar o dificultar la autonomía, la concentración o la interacción social del alumnado. Esta idea invita al docente a pensar el espacio del aula de forma tan intencionada y planificada como piensa las actividades o los materiales, revisándolo y reorganizándolo cuando deja de responder a las necesidades del grupo, en lugar de considerarlo un elemento fijo e inamovible durante todo el curso."
 },
 {
  "id": "b22-04",
  "block": "b22",
  "blockTitle": "La Organización de los Espacios y del Tiempo",
  "concept": "Flexibilidad temporal: periodos amplios, imprevistos y variedad semanal",
  "explanation": "La organización del tiempo escolar en Infantil debe compatibilizar la estabilidad de las rutinas, que aportan seguridad, con cierta flexibilidad para adaptarse a imprevistos, ritmos individuales o intereses emergentes del grupo, como alargar una actividad que está generando mucho entusiasmo, sin caer ni en la rigidez absoluta ni en la ausencia total de estructura. Dentro de esta lógica, conviene organizar el tiempo en periodos amplios en lugar de fragmentarlo en muchos bloques cortos con transiciones constantes, ya que los periodos más largos permiten un juego y una actividad más profunda y sostenida —un niño necesita tiempo para desarrollar un juego simbólico complejo, por ejemplo—, evitando interrupciones frecuentes que dificultan la concentración. Del mismo modo, dedicar determinados días de la semana a propuestas específicas, como el día del cuento o el día del arte, enriquece y diversifica la oferta educativa a la vez que mantiene cierta previsibilidad, ya que el alumnado sabe qué día corresponde a cada propuesta."
 },
 {
  "id": "b22-05",
  "block": "b22",
  "blockTitle": "La Organización de los Espacios y del Tiempo",
  "concept": "Criterios básicos del espacio del aula y estimulación sensorial equilibrada",
  "explanation": "El espacio del aula de Infantil debe ser seguro, sin riesgos de caídas o atrapamientos; accesible, con los materiales al alcance del niño; y flexible, es decir, susceptible de reorganizarse según la actividad que se desarrolle en cada momento. A estos criterios se añade el cuidado de la estimulación sensorial —colores, texturas, sonidos, luz natural—, que debe favorecer el bienestar y la exploración sensorial adecuada del alumnado evitando dos extremos igualmente inadecuados: la sobreestimulación, con demasiados estímulos visuales o sonoros simultáneos que puede resultar agotadora para el niño, y la pobreza de estímulos, propia de un aula gris y monótona que no invita a explorar ni a interactuar con el entorno. Por ejemplo, un rincón con materiales de distintas texturas al alcance de la mano, pero sin un exceso de decoración en las paredes que distraiga la atención, ejemplifica ese equilibrio deseable."
 },
 {
  "id": "b22-06",
  "block": "b22",
  "blockTitle": "La Organización de los Espacios y del Tiempo",
  "concept": "La asamblea como rutina estructuradora del día",
  "explanation": "La asamblea al inicio de la jornada cumple una función que va mucho más allá de un simple trámite organizativo: ayuda a situar temporalmente el día (qué día de la semana es, cómo está el tiempo, quién ha venido y quién no), fomenta la comunicación grupal al dar espacio a que cada niño comparta novedades y escuche a sus compañeros, y refuerza el sentido de pertenencia al grupo como comunidad de aprendizaje. Por ejemplo, el uso de un calendario visual manipulable durante la asamblea, en el que el alumnado coloca cada día el número correspondiente o marca el estado del tiempo, convierte este momento en una ocasión cotidiana para trabajar de forma significativa nociones temporales y lingüísticas, además de consolidar el ritual de inicio de la jornada que da seguridad a todo el grupo."
 },
 {
  "id": "b22-07",
  "block": "b22",
  "blockTitle": "La Organización de los Espacios y del Tiempo",
  "concept": "El espacio exterior o patio como espacio educativo",
  "explanation": "El espacio exterior o patio del centro debe entenderse, desde el punto de vista pedagógico, como un espacio educativo más y no como un mero lugar de descanso del profesorado sin ninguna intencionalidad. Su potencial pedagógico es muy amplio: permite el juego motor grueso (correr, saltar, trepar), la exploración sensorial y el contacto directo con elementos naturales como la tierra, el agua, las plantas o los insectos, experiencias difíciles de reproducir dentro del aula. Un patio bien aprovechado pedagógicamente puede incluir, por ejemplo, una pequeña zona de huerto o un espacio con elementos naturales sueltos (piedras, troncos, hojas) que el alumnado pueda manipular libremente, convirtiendo el tiempo de patio en una oportunidad más de aprendizaje activo y no únicamente en un momento de desahogo motor sin ninguna intención educativa asociada."
 },
 {
  "id": "b22-08",
  "block": "b22",
  "blockTitle": "La Organización de los Espacios y del Tiempo",
  "concept": "El espacio de descanso o siesta en el primer ciclo",
  "explanation": "El espacio destinado al descanso o a la siesta en el primer ciclo debe ser tranquilo, con luz tenue y condiciones acústicas adecuadas, y organizarse de forma que respete las necesidades y los ritmos individuales de sueño de cada niño, ya que a estas edades algunos bebés o niños pequeños duermen considerablemente más tiempo que otros. No conviene, por tanto, imponer un mismo horario y un mismo espacio rígido para todo el grupo por igual, sino disponer, por ejemplo, de cunas o colchonetas organizadas de manera que un niño que se despierta antes pueda levantarse sin molestar a quienes siguen durmiendo, respetando así la heterogeneidad propia de estas primeras edades sin renunciar por ello a ir introduciendo progresivamente ciertos horarios comunes de referencia."
 },
 {
  "id": "b22-09",
  "block": "b22",
  "blockTitle": "La Organización de los Espacios y del Tiempo",
  "concept": "Disposición del mobiliario, agrupamientos y ubicación del rincón de movimiento",
  "explanation": "La disposición del mobiliario —mesas agrupadas de una forma u otra, zonas diferenciadas por actividad— debe estar al servicio de la interacción entre el alumnado, de su autonomía para moverse y acceder a los materiales, y de las distintas actividades que se desarrollan a lo largo de la jornada, por lo que conviene que sea flexible y reorganizable, no un único modelo fijo durante todo el curso. En esa misma lógica, resulta necesario disponer de espacios diferenciados para el trabajo individual, en pequeño grupo y en gran grupo, ya que una actividad de concentración individual requiere un espacio distinto al de una asamblea de todo el grupo. El rincón de movimiento o psicomotricidad merece una atención especial dentro de esta disposición: debe ubicarse en una zona amplia y despejada, alejada de mesas, sillas u otro mobiliario con el que el alumnado pudiera golpearse durante el juego motor, priorizando siempre la seguridad física sobre otras consideraciones de aprovechamiento del espacio disponible."
 },
 {
  "id": "b22-10",
  "block": "b22",
  "blockTitle": "La Organización de los Espacios y del Tiempo",
  "concept": "Modelos de jornada escolar y agrupamiento flexible o multinivel",
  "explanation": "La jornada continua, con un único bloque horario por la mañana, y la jornada partida, con interrupción para la comida y actividad también por la tarde, son distintos modelos de organización del horario escolar diario, con implicaciones tanto organizativas para el centro como de conciliación de la vida laboral y familiar para las familias del alumnado, y su elección no es una decisión puramente pedagógica sino también de política educativa y organización de centro. De forma independiente a este modelo horario, algunos centros optan por organizar puntualmente aulas multinivel o agrupamientos flexibles, mezclando por ejemplo edades del segundo ciclo para determinadas actividades, lo que puede favorecer el aprendizaje entre iguales de distintas edades y enriquecer las interacciones, ya que los niños mayores modelan conductas y ofrecen referentes variados a los más pequeños, si bien su aplicación concreta depende del proyecto educativo de cada centro y no es una exigencia normativa general."
 },
 {
  "id": "b22-11",
  "block": "b22",
  "blockTitle": "La Organización de los Espacios y del Tiempo",
  "concept": "El juego libre y el tiempo propio no dirigido",
  "explanation": "Disponer de un tiempo propio de juego libre, sin intervención constante del adulto —que observa, pero no dirige cada acción del niño—, favorece la autonomía y la iniciativa personal para decidir a qué y cómo jugar, así como el desarrollo de la capacidad de autorregulación, por lo que no debe considerarse una pérdida de tiempo educativo que haya que sustituir sistemáticamente por actividades dirigidas por el adulto. Por ejemplo, dejar que un grupo de niños organice espontáneamente un juego simbólico en el rincón de la casita, sin que la maestra intervenga para dirigir qué papel debe representar cada uno, permite que sean ellos mismos quienes negocien roles, resuelvan pequeños conflictos y desarrollen su creatividad, aprendizajes que difícilmente se producirían de la misma manera en una actividad completamente pautada por el adulto."
 },
 {
  "id": "b23-01",
  "block": "b23",
  "blockTitle": "La Programación en el Primer Ciclo de Educación Infantil",
  "concept": "Flexibilidad y principios metodológicos del primer ciclo",
  "explanation": "La programación en el primer ciclo (0-3 años) debe caracterizarse por una gran flexibilidad y por la atención individualizada a las necesidades básicas y a los ritmos propios de cada niño, muy alejada de la rigidez horaria y de contenidos académicos formales propia de etapas educativas posteriores. Los principios metodológicos que la sustentan priorizan especialmente el bienestar emocional del niño, el vínculo afectivo con el adulto de referencia, el juego espontáneo como motor natural de aprendizaje y el respeto a los ritmos individuales, muy por delante de cualquier forma de instrucción académica formal o de comparación entre niños. Por ejemplo, si un bebé necesita dormir más tiempo un día concreto, la programación debe poder adaptarse a esa necesidad puntual en lugar de forzar que siga el horario general del grupo, priorizando siempre su bienestar sobre el cumplimiento estricto de una planificación."
 },
 {
  "id": "b23-02",
  "block": "b23",
  "blockTitle": "La Programación en el Primer Ciclo de Educación Infantil",
  "concept": "La propuesta pedagógica: documento, flexibilidad curricular y coherencia normativa",
  "explanation": "El primer ciclo no cuenta con un currículo estatal detallado y cerrado como el del segundo ciclo; en su lugar, cada centro concreta sus propios elementos curriculares —objetivos, contenidos, metodología— a través de un documento denominado propuesta pedagógica, lo que le otorga un margen de flexibilidad mayor que el del segundo ciclo. Sin embargo, esta flexibilidad no equivale a ausencia total de referencia normativa: aunque goza de mayor libertad que el currículo cerrado del segundo ciclo, la propuesta pedagógica debe guardar coherencia con el marco normativo autonómico correspondiente y con el proyecto educativo general del centro, sin depender únicamente del criterio personal de cada educador o educadora. Un centro de primer ciclo en Galicia, por ejemplo, diseñará su propuesta pedagógica adaptándola a las características de su alumnado, pero siempre dentro de las líneas generales establecidas por la administración educativa autonómica."
 },
 {
  "id": "b23-03",
  "block": "b23",
  "blockTitle": "La Programación en el Primer Ciclo de Educación Infantil",
  "concept": "Las rutinas de cuidado y la coordinación entre educadoras",
  "explanation": "En el primer ciclo, los momentos de cuidado —la comida, el cambio de pañal, el momento del sueño— no constituyen un simple trámite asistencial, sino situaciones educativas de primer orden: son momentos de interacción intensa y uno a uno con el adulto, ricos en vínculo afectivo, en lenguaje dirigido al niño y en aprendizaje sobre el propio cuerpo y la autonomía progresiva, por ejemplo empezar a colaborar al vestirse. Para que estas rutinas de cuidado resulten realmente coherentes y beneficiosas, resulta fundamental la coordinación entre las distintas educadoras de una misma aula, cuando hay más de una a cargo del grupo, de manera que se garantice coherencia en las pautas —cómo se calma a un bebé concreto, en qué orden se le da la comida— y en la intervención educativa con cada niño, evitando mensajes o rutinas contradictorias entre unas y otras que generarían desconcierto e inseguridad en el pequeño."
 },
 {
  "id": "b23-04",
  "block": "b23",
  "blockTitle": "La Programación en el Primer Ciclo de Educación Infantil",
  "concept": "La ratio como factor de calidad en la atención individualizada",
  "explanation": "Una ratio adecuada, es decir, un número razonable de niños por cada adulto responsable, resulta clave en el primer ciclo, ya que condiciona directamente la posibilidad de ofrecer una atención individualizada y sensible a cada bebé o niño pequeño, especialmente en los tramos de menor edad, donde las necesidades son más intensas, frecuentes y variadas: llanto que hay que interpretar, tomas de alimento que respetar, momentos de sueño distintos para cada uno. Una ratio excesiva dificulta gravemente ofrecer esa atención personalizada que el primer ciclo requiere, por lo que la normativa establece límites máximos de niños por unidad según el tramo de edad, siendo este uno de los indicadores de calidad más determinantes en la etapa, más allá de otros aspectos como el espacio o los materiales disponibles."
 },
 {
  "id": "b23-05",
  "block": "b23",
  "blockTitle": "La Programación en el Primer Ciclo de Educación Infantil",
  "concept": "Evaluación por observación y documentos de seguimiento individual",
  "explanation": "Dada la corta edad del alumnado del primer ciclo, la evaluación se basa fundamentalmente en la observación directa y sistemática del desarrollo global del niño —motor, comunicativo, afectivo—, resultando completamente inadecuadas las pruebas escritas, los exámenes orales formales o las calificaciones numéricas propias de otras etapas educativas. Esta observación se traduce habitualmente en documentos de seguimiento individual, como registros de sueño, de tomas de alimentación o de hitos evolutivos alcanzados, cuya finalidad es compartir con la familia información relevante sobre el día a día del niño en el centro y ajustar la intervención educativa a sus necesidades concretas, respetando siempre la confidencialidad de esa información y sin compartirla libremente con terceros. Gracias a este seguimiento, además, es posible detectar de forma temprana posibles necesidades específicas, por ejemplo un cierto retraso en algún hito motor, y ajustar en consecuencia la intervención educativa."
 },
 {
  "id": "b23-06",
  "block": "b23",
  "blockTitle": "La Programación en el Primer Ciclo de Educación Infantil",
  "concept": "Carácter no obligatorio y diversidad de titularidad de los centros",
  "explanation": "A diferencia del segundo ciclo, que es gratuito y presenta un mayor grado de universalización, el primer ciclo no tiene carácter obligatorio ni gratuito de forma generalizada en todo el territorio, y existe una gran diversidad de centros según su titularidad —públicos, privados, de iniciativa social—, con distintos niveles de subvención según la comunidad autónoma correspondiente. Esta diversidad tiene consecuencias prácticas importantes: dos familias de una misma localidad pueden acceder a un servicio de primer ciclo con condiciones económicas muy diferentes según el centro elegido, lo que convierte el acceso equitativo a una educación infantil de calidad en estas primeras edades en un tema de especial relevancia social y de política educativa en muchas comunidades autónomas."
 },
 {
  "id": "b23-07",
  "block": "b23",
  "blockTitle": "La Programación en el Primer Ciclo de Educación Infantil",
  "concept": "El periodo de adaptación: flexibilidad y participación progresiva de la familia",
  "explanation": "El periodo de adaptación al inicio del primer ciclo debe planificarse con flexibilidad, respetando el ritmo individual de cada niño —algunos se adaptan en pocos días, otros necesitan considerablemente más tiempo— y evitando aplicar un calendario idéntico y rígido para todo el grupo. Un elemento central de este proceso es la implicación progresiva y decreciente de la familia: permitir que un progenitor permanezca un rato en el aula junto al niño al principio, e ir reduciendo ese tiempo día a día, facilita una transición más segura hacia el nuevo entorno escolar, ya que el niño se apoya en la figura de apego conocida mientras va construyendo poco a poco confianza también con la educadora y con el nuevo espacio, en lugar de vivir un cambio brusco sin ninguna preparación previa."
 },
 {
  "id": "b23-08",
  "block": "b23",
  "blockTitle": "La Programación en el Primer Ciclo de Educación Infantil",
  "concept": "Los ámbitos de experiencia del primer ciclo",
  "explanation": "Aunque con mayor flexibilidad que en el segundo ciclo, el primer ciclo suele organizar su propuesta pedagógica en torno a ámbitos de experiencia relacionados con el desarrollo del movimiento y la acción, la comunicación, y el descubrimiento del entorno, de forma similar en su espíritu, aunque no idéntica en su exigencia ni en su grado de formalización, a las áreas curriculares del segundo ciclo. Estos ámbitos no se trabajan como asignaturas separadas ni de forma parcelada, sino integrados en la actividad cotidiana del aula: por ejemplo, una sesión de manipulación de agua y arena en un rincón sensorial trabaja de forma simultánea el descubrimiento del entorno físico, el desarrollo de la comunicación al verbalizar lo que se siente, y la coordinación motriz fina, sin que exista una separación explícita entre ámbitos para el niño que la vive."
 },
 {
  "id": "b23-09",
  "block": "b23",
  "blockTitle": "La Programación en el Primer Ciclo de Educación Infantil",
  "concept": "Individualización, variabilidad evolutiva y revisión frecuente de la programación",
  "explanation": "La programación de aula en el primer ciclo debe prestar especial atención a la individualización porque existe una gran variabilidad evolutiva entre niños de la misma edad —ritmos de sueño, de alimentación o de desarrollo motor muy distintos entre bebés de apenas unos meses de diferencia—, lo que exige adaptar la atención a cada caso concreto, incluyendo la flexibilidad horaria respecto al sueño o a la alimentación de cada niño, en lugar de aplicar un mismo patrón homogéneo a todo el grupo desde el primer día. Precisamente por el ritmo especialmente rápido de los cambios evolutivos en estas primeras edades —un bebé puede cambiar de forma notable en solo unas semanas—, la programación del primer ciclo requiere revisarse y ajustarse con frecuencia, y no permanecer idéntica durante todo el curso ni revisarse únicamente al finalizarlo, como podría ocurrir en etapas con ritmos de desarrollo más estables."
 },
 {
  "id": "b23-10",
  "block": "b23",
  "blockTitle": "La Programación en el Primer Ciclo de Educación Infantil",
  "concept": "El juego libre como vía central de aprendizaje",
  "explanation": "El juego libre y espontáneo ocupa un lugar central, no marginal ni subordinado a actividades dirigidas, dentro de la programación del primer ciclo, siendo la principal vía a través de la cual los bebés y los niños muy pequeños exploran su entorno, ejercitan su cuerpo y construyen sus primeros aprendizajes, sin necesidad de que todo esté estructurado y dirigido en todo momento por el adulto. Por ejemplo, dejar a disposición de un grupo de niños de dos años una cesta con objetos cotidianos de distintas texturas y tamaños, y permitir que cada uno los explore libremente a su propio ritmo, resulta mucho más formativo en estas edades que proponer una actividad idéntica y dirigida paso a paso para todo el grupo, precisamente porque respeta el papel protagonista del juego espontáneo en el desarrollo infantil temprano."
 },
 {
  "id": "b23-11",
  "block": "b23",
  "blockTitle": "La Programación en el Primer Ciclo de Educación Infantil",
  "concept": "La transición del primer al segundo ciclo",
  "explanation": "La transición del primer al segundo ciclo de Educación Infantil, que en muchos casos implica un cambio de centro —de la escuela infantil al colegio—, requiere una planificación específica que contemple medidas de coordinación entre ambos centros, como compartir información relevante sobre cada niño, y medidas de acompañamiento emocional que faciliten una transición gradual y respetuosa, en lugar de un cambio brusco sin ninguna preparación previa. Aunque comparte algunos principios con el periodo de adaptación inicial al primer ciclo —respeto al ritmo individual, implicación de la familia—, no debe entenderse como un proceso idéntico, ya que en este caso el niño llega con una experiencia escolar previa y unas competencias ya desarrolladas que conviene conocer y aprovechar en el nuevo centro, por ejemplo mediante una reunión de traspaso de información entre la educadora del primer ciclo y la futura tutora del segundo ciclo."
 },
 {
  "id": "b24-01",
  "block": "b24",
  "blockTitle": "La Programación en el Segundo Ciclo de Educación Infantil",
  "concept": "Carácter gratuito y currículo regulado del segundo ciclo",
  "explanation": "El segundo ciclo de Educación Infantil (3-6 años) es gratuito, aunque no obligatorio en sentido estricto, y cuenta con un currículo oficial regulado por la administración educativa, con objetivos, áreas, contenidos y criterios de evaluación definidos de forma explícita, a diferencia del primer ciclo (0-3 años), que se rige por una propuesta pedagógica de centro más flexible y sin ese mismo grado de regulación curricular. Esta mayor regulación no significa rigidez metodológica: el currículo oficial marca el «qué» (los objetivos y contenidos que deben trabajarse a lo largo del ciclo), pero deja un amplio margen de libertad al centro y al docente para decidir el «cómo», es decir, la metodología concreta —proyectos de trabajo, rincones, talleres— con la que se abordan esos elementos curriculares en cada aula."
 },
 {
  "id": "b24-02",
  "block": "b24",
  "blockTitle": "La Programación en el Segundo Ciclo de Educación Infantil",
  "concept": "Documentos de programación: programación de aula, PGA y Proyecto Educativo",
  "explanation": "La programación didáctica o de aula es el documento que concreta, para un grupo y curso concretos —por ejemplo, un aula de 4 años—, lo establecido de forma más general en documentos institucionales del centro, como el Proyecto Educativo, que fija las líneas pedagógicas generales, y la Programación General Anual (PGA), que recoge la planificación de todo el centro para ese curso escolar concreto. Estos tres documentos son complementarios y jerárquicos, no equivalentes ni sustitutos entre sí: el Proyecto Educativo aporta la identidad y los principios generales del centro, la PGA organiza el curso en su conjunto (calendario, recursos, actividades de centro), y la programación de aula traduce todo ello a la realidad concreta de un grupo determinado, adaptándolo a sus características específicas de edad, ritmo e intereses."
 },
 {
  "id": "b24-03",
  "block": "b24",
  "blockTitle": "La Programación en el Segundo Ciclo de Educación Infantil",
  "concept": "Elementos de la programación didáctica",
  "explanation": "Una programación didáctica completa debe recoger, entre otros elementos, los objetivos que se persiguen, los contenidos a trabajar, la metodología que se va a emplear, las actividades concretas mediante las que se desarrollará esa metodología, los recursos materiales y humanos necesarios, las medidas de atención a la diversidad previstas, y los criterios y procedimientos de evaluación que permitirán valorar el proceso, sin limitarse nunca a una simple lista de actividades sueltas sin ninguna fundamentación ni finalidad explícita. Por ejemplo, no basta con anotar «hacer un mural sobre el otoño»; una programación bien elaborada debe explicitar qué objetivos y contenidos se persiguen con esa actividad, qué recursos requiere, cómo se atenderá a quien necesite más apoyo, y cómo se evaluará lo aprendido a través de ella."
 },
 {
  "id": "b24-04",
  "block": "b24",
  "blockTitle": "La Programación en el Segundo Ciclo de Educación Infantil",
  "concept": "Atención a la diversidad: medidas y justificación",
  "explanation": "Toda programación debe prever medidas de atención a la diversidad —adaptaciones curriculares que ajustan objetivos o actividades a un alumno concreto, agrupamientos flexibles o el apoyo puntual de especialistas— para responder a los distintos ritmos, capacidades e intereses que de forma natural presenta cualquier grupo de alumnado, adaptando así la respuesta educativa a las necesidades reales de cada niño sin excluirlo nunca de las actividades ordinarias del aula. Es importante subrayar que estas medidas deben contemplarse en toda programación, incluso en un grupo que no cuente con alumnado con necesidades específicas de apoyo educativo diagnosticadas formalmente, ya que cualquier grupo presenta de forma natural heterogeneidad en ritmos y capacidades que exige una respuesta ajustada y no un único itinerario idéntico para todos."
 },
 {
  "id": "b24-05",
  "block": "b24",
  "blockTitle": "La Programación en el Segundo Ciclo de Educación Infantil",
  "concept": "Criterios de evaluación: formulación y redacción observable",
  "explanation": "Los criterios de evaluación en el segundo ciclo se formulan en relación con el grado de consecución de las capacidades y objetivos propios de la etapa y de cada área —por ejemplo, «reconoce y nombra las partes principales de su cuerpo»—, evaluando de forma global, continua y cualitativa, sin recurrir en ningún caso a calificaciones numéricas ni a exámenes estandarizados. Por ello, deben redactarse de forma que permitan valorar de manera observable el grado de desarrollo de esas capacidades, por ejemplo mediante la observación directa de si un niño «participa en conversaciones grupales respetando el turno de palabra», en lugar de plantearse como preguntas cerradas que solo pueden responderse mediante pruebas escritas o comparaciones de rendimiento entre el alumnado del grupo."
 },
 {
  "id": "b24-06",
  "block": "b24",
  "blockTitle": "La Programación en el Segundo Ciclo de Educación Infantil",
  "concept": "Metodología por proyectos de trabajo y globalización",
  "explanation": "Los proyectos de trabajo, metodología muy habitual en el segundo ciclo, parten de los intereses e inquietudes reales del alumnado —por ejemplo, una pregunta que surge espontáneamente al encontrar un caracol en el patio— y organizan los aprendizajes de forma globalizada e investigativa alrededor de ese tema, en lugar de seguir de forma lineal un libro de texto. Suelen desarrollarse en fases: la elección del tema a partir de ese interés, la planificación conjunta de qué se quiere saber y cómo averiguarlo, el desarrollo y la investigación propiamente dicha, y finalmente la comunicación de lo aprendido junto con su evaluación. Esta metodología es la expresión práctica más clara del principio de globalización, que defiende abordar las distintas áreas curriculares de forma interrelacionada en torno a situaciones o centros de interés significativos —un proyecto sobre «el otoño» puede integrar a la vez lenguaje, lógico-matemática y expresión plástica—, en lugar de trabajar cada área de forma aislada y sucesiva mediante fichas específicas desconectadas entre sí."
 },
 {
  "id": "b24-07",
  "block": "b24",
  "blockTitle": "La Programación en el Segundo Ciclo de Educación Infantil",
  "concept": "Organización del ciclo en tres cursos y coordinación entre ellos",
  "explanation": "El segundo ciclo de Educación Infantil se organiza en tres cursos, correspondientes aproximadamente a las edades de 3, 4 y 5 años, cada uno con su propia programación pero necesariamente coordinados entre sí para garantizar una progresión coherente a lo largo del ciclo completo. Esa coordinación entre los tres cursos resulta especialmente relevante porque evita tanto repeticiones innecesarias —trabajar exactamente los mismos contenidos y de la misma manera en 4 y en 5 años— como vacíos de aprendizaje, es decir, contenidos que deberían haberse trabajado antes de pasar al curso siguiente y que, por falta de coordinación entre tutores, terminan no abordándose en ningún momento del ciclo."
 },
 {
  "id": "b24-08",
  "block": "b24",
  "blockTitle": "La Programación en el Segundo Ciclo de Educación Infantil",
  "concept": "Revisión y evaluación de la programación didáctica",
  "explanation": "La revisión periódica de la programación didáctica, por ejemplo al finalizar cada trimestre, permite ajustarla y mejorarla en función de los resultados observados en el alumnado y del desarrollo real de las actividades planificadas, dentro de un proceso de mejora continua de la práctica docente, y no como un mero trámite administrativo sin ninguna utilidad práctica real. Esta revisión implica, por ejemplo, valorar si una actividad prevista resultó demasiado compleja o demasiado sencilla para el grupo, si el tiempo asignado fue suficiente, o si conviene incorporar algún ajuste metodológico de cara al trimestre siguiente, de manera que la programación se conciba como un documento vivo y flexible, y no como un texto cerrado que se redacta una vez al inicio de curso y no vuelve a consultarse hasta su finalización."
 },
 {
  "id": "b24-09",
  "block": "b24",
  "blockTitle": "La Programación en el Segundo Ciclo de Educación Infantil",
  "concept": "Secuenciación de contenidos por cursos",
  "explanation": "La secuenciación de contenidos entre los tres cursos del segundo ciclo debe seguir un criterio de complejidad creciente y de coherencia con las características evolutivas propias de cada edad, evitando un orden aleatorio sin relación con el desarrollo infantil o basado exclusivamente en criterios administrativos o de disponibilidad de materiales. Por ejemplo, en relación con la clasificación lógico-matemática, resulta adecuado trabajar primero, con los niños de 3 años, la clasificación sencilla de objetos atendiendo a un único atributo (todos los objetos rojos), y reservar para cursos posteriores la clasificación atendiendo a varios atributos simultáneamente (objetos rojos y pequeños a la vez), respetando así la progresiva complejidad del pensamiento lógico infantil a lo largo del ciclo."
 },
 {
  "id": "b24-10",
  "block": "b24",
  "blockTitle": "La Programación en el Segundo Ciclo de Educación Infantil",
  "concept": "Actividades complementarias y extraescolares",
  "explanation": "Las actividades complementarias y extraescolares que se incluyen en la programación, como una salida a una granja o la visita de un profesional que explica su trabajo, deben estar justificadas pedagógicamente y guardar coherencia con los objetivos y contenidos que se están trabajando en el aula en ese momento, enriqueciendo la propuesta educativa en curso en lugar de organizarse de forma desconectada de ella o de sustituir por completo la actividad habitual del aula durante un periodo prolongado. Por ejemplo, si el grupo está desarrollando un proyecto sobre los animales de granja, una visita real a una granja escuela cobra pleno sentido pedagógico como experiencia directa que complementa lo trabajado en el aula, mientras que la misma salida, sin ninguna conexión con lo que se está estudiando, perdería gran parte de su valor educativo."
 },
 {
  "id": "b24-11",
  "block": "b24",
  "blockTitle": "La Programación en el Segundo Ciclo de Educación Infantil",
  "concept": "El horario semanal: entre estructura y flexibilidad",
  "explanation": "El horario semanal recogido en la programación de aula debe combinar una estructura de referencia clara —las rutinas y los momentos estables que dan seguridad al alumnado— con la flexibilidad necesaria para adaptarse a las necesidades e imprevistos propios del grupo, como alargar una actividad que está resultando especialmente motivadora, sin caer ni en una rigidez absoluta que no admita ningún ajuste, ni en la ausencia total de estructura horaria, que dificultaría la organización de la jornada. Este equilibrio distingue claramente el horario de un aula de Infantil del horario, mucho más fragmentado y rígido en bloques de asignatura, propio de Educación Primaria, con el que no debe confundirse ni asimilarse."
 },
 {
  "id": "b24-12",
  "block": "b24",
  "blockTitle": "La Programación en el Segundo Ciclo de Educación Infantil",
  "concept": "Los elementos transversales",
  "explanation": "Los elementos transversales —la educación en valores, la igualdad de género, el uso de las tecnologías de la información y la comunicación, entre otros— deben impregnar de forma continuada el conjunto de áreas y actividades a lo largo de toda la programación, y no reducirse a un tratamiento puntual y aislado en una fecha señalada del calendario escolar, como trabajar la igualdad de género únicamente el día 8 de marzo. Por ejemplo, el fomento de la igualdad puede trabajarse de forma transversal observando y corrigiendo con naturalidad el reparto de juguetes o de tareas en los distintos rincones del aula a lo largo de todo el curso, en lugar de limitarse a una sesión puntual y descontextualizada dedicada exclusivamente a ese contenido."
 },
 {
  "id": "b24-13",
  "block": "b24",
  "blockTitle": "La Programación en el Segundo Ciclo de Educación Infantil",
  "concept": "Sesiones de evaluación, informe final de etapa y calificación cualitativa en Galicia",
  "explanation": "La normativa gallega establece que deben realizarse como mínimo tres sesiones de evaluación parciales a lo largo del curso en el segundo ciclo de Infantil, coincidiendo la última de ellas con la evaluación final, lo que permite un seguimiento continuo del progreso del alumnado a lo largo de todo el año escolar. Al finalizar el sexto curso —el último del segundo ciclo, a los 5 años, antes de pasar a Educación Primaria—, la persona tutora elabora además un informe final de etapa sobre el progreso global del alumno, documento especialmente relevante para garantizar la continuidad y la coordinación en la transición hacia la siguiente etapa educativa. Coherentemente con el carácter global, cualitativo y no numérico de la evaluación en esta etapa, la valoración del proceso de aprendizaje en Galicia se expresa mediante los términos SD (sen dificultade), EP (en proceso) o CD (con dificultade), en lugar de calificaciones numéricas o escalas como insuficiente/suficiente/notable propias de otras etapas educativas."
 },
 {
  "id": "b25-01",
  "block": "b25",
  "blockTitle": "Principios de Intervención Educativa de Educación Infantil",
  "concept": "Aprendizaje significativo (Ausubel)",
  "explanation": "Ausubel defiende que el aprendizaje significativo requiere que los nuevos contenidos se conecten con los conocimientos y las experiencias previas del niño, integrándose de forma comprensiva en su estructura mental, en lugar de memorizarse de forma mecánica y sin ninguna relación con lo que ya sabe. Este principio resulta especialmente relevante en Infantil, donde el punto de partida debe ser siempre la experiencia cotidiana del niño: explicar el concepto de «mitad» partiendo de la situación real de repartir una galleta entre dos niños resulta mucho más significativo, y por tanto más duradero en la memoria, que ofrecer directamente una definición abstracta del término. El docente, por ello, debe explorar previamente qué sabe ya el alumnado sobre un tema antes de introducir contenidos nuevos, para poder anclarlos a esas ideas previas."
 },
 {
  "id": "b25-02",
  "block": "b25",
  "blockTitle": "Principios de Intervención Educativa de Educación Infantil",
  "concept": "Globalización",
  "explanation": "El principio de globalización responde al hecho de que el pensamiento infantil percibe e interpreta la realidad de forma global, no fragmentada en disciplinas o materias separadas: un niño que observa una hormiga en el patio no distingue si está «haciendo ciencias» o «trabajando lenguaje» al describir lo que ve y comentarlo con sus compañeros. Por ello, los aprendizajes en Infantil deben abordarse de forma integrada en torno a situaciones, proyectos o centros de interés significativos, y este principio se aplica al conjunto de las áreas curriculares, no de forma exclusiva al área de lenguaje ni únicamente al segundo ciclo. Un proyecto sobre el otoño, por ejemplo, puede integrar de forma natural la observación de hojas caídas, el recuento de elementos recogidos y la creación de un cuento colectivo sobre esa estación, sin que el niño perciba en ningún momento un salto entre «asignaturas» distintas."
 },
 {
  "id": "b25-03",
  "block": "b25",
  "blockTitle": "Principios de Intervención Educativa de Educación Infantil",
  "concept": "Principio de actividad e interacción con el medio",
  "explanation": "El principio de actividad sostiene que el niño aprende principalmente haciendo: a través de la manipulación directa de objetos, la experimentación y la acción sobre su propio entorno, y no mediante la escucha pasiva de explicaciones del adulto ni la memorización de contenidos abstractos, poco adecuados a esta edad. Este principio se relaciona estrechamente con el de interacción con el medio, que subraya que el aprendizaje infantil se produce especialmente a través del contacto directo y activo con el entorno físico, natural y social —tocar tierra, observar un charco después de la lluvia, conversar con un vecino del barrio—, más que mediante la transmisión verbal abstracta y descontextualizada de información sobre ese mismo entorno. Por ejemplo, aprender las propiedades del agua resulta mucho más eficaz jugando con recipientes de distintos tamaños en el rincón de agua que escuchando una explicación teórica sobre el tema."
 },
 {
  "id": "b25-04",
  "block": "b25",
  "blockTitle": "Principios de Intervención Educativa de Educación Infantil",
  "concept": "Individualización, diversidad, ritmos de desarrollo y enfoque inclusivo",
  "explanation": "La individualización supone ajustar la intervención educativa a las características, al ritmo evolutivo y a los intereses propios de cada niño, dentro de la vida cotidiana del grupo, y no aisladamente respecto a él, evitando aplicar exactamente el mismo ritmo y las mismas actividades a todos por igual sin tener en cuenta sus diferencias reales. Este principio se apoya en el más amplio de diversidad, que reconoce que cada niño presenta capacidades, ritmos, intereses y contextos diferentes —lo que exige una respuesta educativa ajustada y flexible para todo el alumnado en general, no solo para los casos con necesidades específicas de apoyo educativo diagnosticadas formalmente— y en el de partir del nivel de desarrollo real de cada niño, evitando tanto exigencias excesivas para su edad, que generan frustración, como una falta de estimulación adecuada, que genera aburrimiento y desaprovecha su potencial. El enfoque inclusivo lleva esta lógica hasta sus últimas consecuencias: defiende que todo el alumnado, con independencia de sus características, debe participar y aprender dentro del grupo ordinario, contando con los apoyos y ajustes necesarios —materiales adaptados, apoyo puntual de un especialista dentro del propio aula—, y no ser atendido en espacios separados del resto del grupo. Por ejemplo, respetar que un niño alcance un hito de desarrollo unas semanas más tarde que sus compañeros, sin comparaciones ni expectativas rígidas idénticas para todos, forma parte de esta misma filosofía educativa."
 },
 {
  "id": "b25-05",
  "block": "b25",
  "blockTitle": "Principios de Intervención Educativa de Educación Infantil",
  "concept": "El juego y el clima lúdico y motivador",
  "explanation": "El juego se considera el principal instrumento de aprendizaje y desarrollo en la infancia, ya que integra a la vez lo cognitivo (resolver los pequeños problemas que plantea el propio juego), lo motor, lo afectivo y lo social, por lo que debe impregnar la práctica educativa en su conjunto y no limitarse a un momento aislado de recreo, siendo perfectamente compatible con la consecución de los objetivos curriculares de la etapa. Este principio se traduce en la práctica en el llamado clima lúdico y motivador, que defiende que las propuestas de aprendizaje deben presentarse de forma atractiva, aprovechando el interés natural del niño por el juego: aprender a contar a través de un juego de dados, por ejemplo, en lugar de mediante una ficha repetitiva, favorece un aprendizaje más significativo y disfrutado sin que ello reste seriedad ni rigor al proceso educativo."
 },
 {
  "id": "b25-06",
  "block": "b25",
  "blockTitle": "Principios de Intervención Educativa de Educación Infantil",
  "concept": "Clima de seguridad y afectividad: teoría del apego",
  "explanation": "Un clima afectivo cálido y seguro en el aula, coherente con la teoría del apego de Bowlby, constituye la base emocional necesaria para que el niño se sienta seguro para explorar, relacionarse y aprender con confianza; sin esa base emocional, el niño dedica buena parte de su energía a gestionar su propia inseguridad, en lugar de implicarse plenamente en las propuestas educativas que se le ofrecen. Por ello, establecer una relación de apego seguro con el docente de referencia —a través de la disponibilidad, la sensibilidad ante sus señales y la respuesta consistente a sus necesidades— no es un aspecto secundario ni accesorio respecto al aprendizaje, sino una condición previa que lo hace posible: un niño que llora al llegar cada mañana y no encuentra consuelo en el adulto de referencia difícilmente podrá aprovechar el resto de propuestas educativas de esa jornada con la misma disposición que un niño que se siente seguro y acompañado."
 },
 {
  "id": "b25-07",
  "block": "b25",
  "blockTitle": "Principios de Intervención Educativa de Educación Infantil",
  "concept": "Socialización",
  "explanation": "El principio de socialización promueve la interacción entre iguales, la cooperación y el aprendizaje social como parte esencial del proceso educativo en Infantil, por ejemplo al resolver juntos cómo repartirse las tareas o los turnos dentro de un juego compartido, y no el aislamiento del niño respecto al grupo ni evitar sistemáticamente cualquier conflicto entre iguales, que en realidad constituyen también valiosas oportunidades de aprendizaje social. Un pequeño desacuerdo sobre quién usa primero un triciclo en el patio, acompañado por el adulto sin resolverlo directamente por él, ofrece al niño una ocasión real de practicar habilidades como negociar, esperar el turno o expresar su desacuerdo de forma adecuada, habilidades sociales que difícilmente se desarrollarían igual en un entorno donde el adulto evitase sistemáticamente cualquier fricción entre el alumnado."
 },
 {
  "id": "b25-08",
  "block": "b25",
  "blockTitle": "Principios de Intervención Educativa de Educación Infantil",
  "concept": "Creatividad",
  "explanation": "El principio de creatividad implica que el docente debe favorecer situaciones abiertas y flexibles, en lugar de ofrecer siempre modelos únicos y cerrados que el alumnado deba reproducir con exactitud, permitiendo así la expresión personal, la exploración y la búsqueda de soluciones originales por parte de cada niño. Por ejemplo, una consigna como «dibuja lo que más te ha gustado del cuento» resulta mucho más favorable al desarrollo de la creatividad que entregar una ficha con un dibujo prefijado que el alumnado deba únicamente colorear siguiendo un modelo idéntico para todos. Este principio no se limita al ámbito plástico: también puede aplicarse, por ejemplo, planteando un problema con varias soluciones posibles en lugar de una única respuesta correcta esperada, estimulando así el pensamiento divergente desde edades muy tempranas."
 },
 {
  "id": "b25-09",
  "block": "b25",
  "blockTitle": "Principios de Intervención Educativa de Educación Infantil",
  "concept": "Coordinación con las familias",
  "explanation": "El principio de coordinación con las familias parte de la idea de que la coherencia y la colaboración entre el contexto familiar y el escolar —no su independencia total ni la delegación completa de la función educativa de uno en el otro— favorece un desarrollo más armónico e integral del niño, al evitar mensajes contradictorios entre lo que se trabaja en casa y lo que se trabaja en la escuela. Por ejemplo, si en el centro se está trabajando la autonomía en el vestido y la familia sigue vistiendo completamente al niño en casa sin darle ninguna oportunidad de intentarlo, el progreso resultará mucho más lento y confuso que si ambos contextos actúan de forma coordinada; de ahí la importancia de canales de comunicación fluidos entre el docente y las familias, como reuniones periódicas o intercambios informales en la entrada y salida del centro."
 },
 {
  "id": "b25-10",
  "block": "b25",
  "blockTitle": "Principios de Intervención Educativa de Educación Infantil",
  "concept": "Autonomía e intervención educativa indirecta",
  "explanation": "El principio de autonomía busca que el niño vaya asumiendo, de forma progresiva y ajustada a su nivel de desarrollo —no de golpe ni desde el nacimiento—, responsabilidades y decisiones cada vez mayores sobre su propia actividad y su cuidado personal, como vestirse solo o elegir a qué rincón dirigirse a jugar. Este proceso se apoya en gran medida en el principio de intervención educativa indirecta, propio de la etapa infantil, según el cual gran parte del papel docente consiste en preparar cuidadosamente el ambiente, los materiales y las situaciones que van a facilitar ese aprendizaje autónomo del niño —por ejemplo, disponer un rincón bien equipado y accesible—, más que en dirigir de forma constante y explícita cada una de sus acciones. Un docente que interviene indirectamente organiza el entorno para que el niño pueda, por sí mismo, ponerse el babero antes de pintar, en lugar de hacerlo por él cada vez."
 },
 {
  "id": "b25-11",
  "block": "b25",
  "blockTitle": "Principios de Intervención Educativa de Educación Infantil",
  "concept": "Observación sistemática",
  "explanation": "La observación sistemática es la base para conocer las necesidades, los intereses y el proceso evolutivo real de cada niño, permitiendo ajustar la intervención educativa de forma pertinente y continua a lo largo de todo el curso, y no únicamente en momentos puntuales de evaluación final, ni tampoco planificar la intervención exclusivamente desde la teoría sin atender después a la realidad concreta del grupo observado. Por ejemplo, observar sistemáticamente durante varias semanas cómo interactúa un niño con sus compañeros en el rincón de juego simbólico puede revelar información muy valiosa sobre su desarrollo social que ninguna prueba puntual ni ninguna previsión teórica previa habría podido ofrecer, y que permite al docente ajustar en consecuencia su intervención con ese niño en concreto."
 },
 {
  "id": "b25-12",
  "block": "b25",
  "blockTitle": "Principios de Intervención Educativa de Educación Infantil",
  "concept": "Evaluación global, continua y formativa",
  "explanation": "La evaluación en Infantil, y de forma específica la establecida por la Orden de 30 de mayo de 2023 para el segundo ciclo en Galicia, debe ser global, valorando el desarrollo integral del niño y no solo un aspecto aislado; continua, acompañando todo el proceso de enseñanza-aprendizaje y no solo su momento final; y formativa, orientada a ajustar y mejorar la intervención educativa a partir de lo observado, en coherencia con el enfoque cualitativo y no numérico propio de esta etapa, y nunca dirigida a comparar mediante calificaciones el rendimiento de unos niños frente a otros. Precisamente por su carácter continuo, cuando el profesorado detecta durante el curso que el progreso de un alumno no es el adecuado, la normativa establece que debe adoptar las medidas más pertinentes para garantizar los aprendizajes imprescindibles —un refuerzo específico, una adaptación puntual—, en lugar de simplemente esperar a la evaluación final o calificar de forma automáticamente negativa. Además, la evaluación no se dirige únicamente a valorar al alumnado: también debe evaluarse el propio proceso de enseñanza y la práctica docente, con la finalidad de analizar y valorar la intervención educativa realizada para poder adaptarla progresivamente a las características y necesidades reales del alumnado, y no para clasificar al alumnado por rendimiento ni para sustituir la observación directa que el docente hace de cada niño."
 },
 {
  "id": "b25-13",
  "block": "b25",
  "blockTitle": "Principios de Intervención Educativa de Educación Infantil",
  "concept": "Coherencia y continuidad educativa entre ciclos y etapas",
  "explanation": "El principio de coherencia y continuidad educativa defiende que debe existir una progresión coherente de principios, metodología y expectativas entre los distintos ciclos y etapas educativas —por ejemplo, entre el primer y el segundo ciclo de Infantil, o entre Educación Infantil y Educación Primaria—, facilitando así las transiciones del alumnado y evitando rupturas bruscas en su proceso educativo, en lugar de aplicar cambios radicales y completamente desconectados entre una etapa y la siguiente, o limitar la planificación exclusivamente al ámbito de un único curso escolar aislado. Este principio justifica, por ejemplo, que exista comunicación y traspaso de información entre la tutora de 5 años y el futuro tutor de primer curso de Primaria, de manera que la nueva etapa pueda partir de un conocimiento razonable del punto de desarrollo y de las características de cada niño, en lugar de empezar completamente desde cero."
 },
 {
  "id": "b26-01",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Art. 1 CE: los fundamentos del Estado y la dignidad de la persona (arts. 1.1, 1.3 y 10.1)",
  "explanation": "España se constituye en Estado social y democrático de Derecho que propugna como valores superiores de su ordenamiento la libertad, la justicia, la igualdad y el pluralismo político (art. 1.1 CE), adopta la Monarquía parlamentaria como forma política (art. 1.3 CE) —jefatura del Estado hereditaria y simbólica, con el poder efectivo residiendo en las Cortes y en un Gobierno responsable ante ellas— y proclama en el art. 10.1 CE que la dignidad de la persona, sus derechos inviolables, el libre desarrollo de la personalidad y el respeto a la ley son fundamento del orden político y de la paz social. Estos tres preceptos abren la Constitución y actúan como clave de interpretación de todo el resto del ordenamiento: cualquier norma o acto administrativo, por ejemplo una resolución que limite sin justificación el pluralismo o trate a un alumno o a un empleado público sin respeto a su dignidad, sería contrario a estos fundamentos y, por tanto, impugnable."
 },
 {
  "id": "b26-02",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 2 y 3 CE: unidad del Estado, autonomía territorial y pluralismo lingüístico",
  "explanation": "La Constitución se fundamenta en la indisoluble unidad de la Nación española, pero reconoce y garantiza el derecho a la autonomía de las nacionalidades y regiones que la integran y la solidaridad entre todas ellas (art. 2 CE); sobre esa base territorial, el art. 3.1 CE fija el castellano como lengua oficial del Estado, con deber de conocerla y derecho a usarla, mientras que el art. 3.2 permite que las demás lenguas españolas —como el gallego— sean también oficiales en sus respectivas Comunidades Autónomas conforme a sus Estatutos. Estos dos artículos combinan unidad estatal y diversidad territorial y lingüística, y son la raíz constitucional de instituciones como la Xunta de Galicia y de la cooficialidad del gallego: por ejemplo, que un centro de Educación Infantil en Galicia pueda impartir docencia en gallego, o que un aspirante deba acreditar su conocimiento en una oposición gallega, se sustenta en último término en este reconocimiento constitucional del pluralismo lingüístico."
 },
 {
  "id": "b26-03",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 9.2 y 14 CE: la igualdad ante la ley y la igualdad real y efectiva",
  "explanation": "El art. 14 CE proclama que los españoles son iguales ante la ley, sin que pueda prevalecer discriminación alguna por razón de nacimiento, raza, sexo, religión, opinión o cualquier otra condición o circunstancia personal o social; se trata de una lista abierta que permite incluir causas no citadas expresamente en 1978, como la orientación sexual o la discapacidad. El art. 9.2 CE completa esta igualdad formal exigiendo a los poderes públicos que promuevan las condiciones para que la libertad y la igualdad del individuo y de los grupos sean reales y efectivas, removiendo los obstáculos que lo impidan: es el fundamento de las llamadas políticas de acción positiva. En la práctica administrativa, esto se traduce en medidas como becas de comedor o ayudas de material escolar para familias con menos recursos, o reservas de plazas para personas con discapacidad en procesos selectivos, que no vulneran la igualdad del art. 14 sino que la hacen efectiva conforme al art. 9.2."
 },
 {
  "id": "b26-04",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Art. 23 CE: la participación política y el acceso a la función pública",
  "explanation": "El art. 23.1 CE reconoce a los ciudadanos el derecho a participar en los asuntos públicos, directamente o por medio de representantes libremente elegidos en elecciones periódicas por sufragio universal; la participación directa se ejerce, por ejemplo, mediante el referéndum, y la indirecta mediante el voto a diputados o concejales. El art. 23.2 CE añade el derecho a acceder en condiciones de igualdad a las funciones y cargos públicos, con los requisitos que señalen las leyes, precepto que constituye el fundamento constitucional del acceso al empleo público por mérito y capacidad. Por eso las oposiciones para maestro o maestra de Educación Infantil deben regirse por criterios objetivos, baremos públicos y tribunales imparciales, y no por designación arbitraria: cualquier proceso selectivo que introduzca un requisito no amparado en una ley o un trato desigual entre aspirantes vulneraría este derecho fundamental."
 },
 {
  "id": "b26-05",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 53 y 54 CE: las garantías de los derechos fundamentales y el Defensor del Pueblo",
  "explanation": "El art. 53.1 CE dispone que los derechos y libertades del Capítulo segundo del Título I vinculan a todos los poderes públicos y que solo por ley, que en todo caso deberá respetar su contenido esencial, podrá regularse su ejercicio; ni un reglamento ni una orden pueden, por ejemplo, limitar el derecho de reunión sin cobertura legal. El art. 53.2 CE permite recabar la tutela de las libertades y derechos del art. 14 y de la Sección primera ante los Tribunales ordinarios, por un procedimiento preferente y sumario, y en su caso mediante recurso de amparo ante el Tribunal Constitucional. Junto a esta tutela judicial, el art. 54 CE encomienda a una ley orgánica la institución del Defensor del Pueblo, alto comisionado de las Cortes Generales para la defensa de los derechos del Título I, que en la práctica atiende quejas ciudadanas frente a, por ejemplo, retrasos injustificados de la Administración educativa en resolver un expediente de escolarización."
 },
 {
  "id": "b26-06",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Art. 55 CE: la suspensión de los derechos y libertades",
  "explanation": "El art. 55.1 CE enumera los derechos susceptibles de suspensión general (entre otros, los de los arts. 17, 18.2 y 3, 19, 20.1.a) y d) y 20.5, 21, 28.2 y 37.2 CE) cuando se declare el estado de excepción o de sitio, suspensión que afecta a toda la población comprendida en el ámbito territorial de la declaración. El art. 55.2 CE regula, en cambio, una suspensión individual: una ley orgánica puede prever que, en investigaciones sobre bandas armadas o elementos terroristas, se suspendan para personas concretas los derechos de los arts. 17.2 y 18.2 y 3, siempre con la necesaria intervención judicial y el adecuado control parlamentario. La diferencia clave para un examen es esa doble vía: suspensión colectiva y temporal ligada a un estado excepcional frente a suspensión individualizada, ligada a una investigación concreta y sujeta a control judicial, lo que evita que se convierta en una medida arbitraria."
 },
 {
  "id": "b26-07",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 137 y 140 CE: la organización territorial del Estado y la autonomía municipal",
  "explanation": "El art. 137 CE organiza territorialmente el Estado en municipios, provincias y las Comunidades Autónomas que se constituyan, gozando todas estas entidades de autonomía para la gestión de sus respectivos intereses; es el precepto que da lugar a los tres niveles de Administración territorial —local, provincial y autonómico— en los que se inserta, por ejemplo, un ayuntamiento gallego y su Administración educativa municipal. El art. 140 CE garantiza específicamente la autonomía municipal y atribuye su gobierno y administración a los respectivos Ayuntamientos, integrados por Alcaldes y Concejales, elegidos estos por sufragio universal, igual, libre, directo y secreto; el Alcalde se elige después, de forma indirecta, entre los propios Concejales. Esta estructura explica, por ejemplo, que la titularidad de muchas escuelas infantiles de primer ciclo corresponda a los Ayuntamientos, en ejercicio de su autonomía local reconocida constitucionalmente."
 },
 {
  "id": "b26-08",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 148 y 149 CE: el sistema de distribución de competencias entre el Estado y las Comunidades Autónomas",
  "explanation": "El art. 148.1 CE enumera materias que las Comunidades Autónomas pueden asumir mediante su Estatuto, como el fomento de la cultura, la investigación y, en su caso, la enseñanza de la lengua propia (art. 148.1.17ª CE), base que permite a Galicia regular la promoción del gallego en el sistema educativo. Frente a ello, el art. 149.1.18ª CE reserva al Estado la competencia exclusiva sobre las bases del régimen jurídico de las Administraciones públicas y el procedimiento administrativo común, razón por la que la Ley 39/2015 rige en toda España aunque cada Comunidad module aspectos organizativos propios. Como cláusula de cierre, el art. 149.3 CE establece que las materias no asumidas expresamente por los Estatutos corresponden al Estado, cuyas normas prevalecerán en lo no atribuido a la competencia exclusiva autonómica, y que el derecho estatal será en todo caso supletorio del autonómico, evitando así vacíos normativos."
 },
 {
  "id": "b26-09",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 156 y 157 CE: la financiación de las Comunidades Autónomas",
  "explanation": "El art. 156.1 CE reconoce a las Comunidades Autónomas autonomía financiera para el desarrollo y ejecución de sus competencias, pero la sujeta a los principios de coordinación con la Hacienda estatal y de solidaridad entre todos los españoles: no es, por tanto, una autonomía absoluta, sino coordinada con el sistema general de financiación autonómica. El art. 157.1 CE concreta los recursos de las Comunidades Autónomas: impuestos cedidos total o parcialmente por el Estado, sus propios tributos, transferencias del Fondo de Compensación interterritorial y de otras asignaciones del presupuesto estatal, rendimientos de su patrimonio y operaciones de crédito; no figura entre ellos, en cambio, la cesión de tributos entre Comunidades Autónomas, porque la cesión siempre fluye desde el Estado hacia cada Comunidad. Esta financiación es la que permite, en la práctica, sostener servicios públicos autonómicos como la red de escuelas infantiles gallegas."
 },
 {
  "id": "b26-10",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Art. 9 del Estatuto: las instituciones de la Comunidad Autónoma de Galicia",
  "explanation": "Conforme al art. 9.Uno del Estatuto de Autonomía de Galicia (LO 1/1981), los poderes de la Comunidad Autónoma se ejercen a través de tres instituciones: el Parlamento, la Junta y su Presidente. El Parlamento es el poder legislativo, elegido por sufragio y representativo del pueblo gallego; la Junta es el órgano colegiado que ejerce el poder ejecutivo; y el Presidente ostenta la máxima representación de la Comunidad Autónoma y dirige la acción de la Junta. Esta arquitectura institucional reproduce, a escala autonómica, el esquema parlamentario del Estado central: el Parlamento controla políticamente a un ejecutivo (la Junta) que emana de su confianza. En términos prácticos, es este entramado el que produce, por ejemplo, la Ley 2/2015 del empleo público de Galicia (aprobada por el Parlamento) y el Decreto 150/2022 que desarrolla el currículo de Educación Infantil (aprobado por la Junta a propuesta de la consejería competente)."
 },
 {
  "id": "b26-11",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 10, 11 y 13 del Estatuto: el Parlamento de Galicia",
  "explanation": "El Parlamento de Galicia ejerce la potestad legislativa de la Comunidad Autónoma, aprueba los presupuestos, controla la acción de la Junta y elige al Presidente, entre otras funciones (art. 10.Uno.a) del Estatuto); es, por ejemplo, el órgano que aprobó tanto la Ley 2/2015 de empleo público como la Ley 7/2023 de igualdad. Se elige por un plazo de cuatro años según un sistema de representación proporcional (art. 11.Dos), con un número de diputados que una ley autonómica debe fijar entre sesenta y ochenta (art. 11.Cinco), y sus miembros gozan de inviolabilidad por los votos y opiniones emitidos en su cargo, no pudiendo ser detenidos ni retenidos por actos delictivos cometidos en Galicia salvo flagrante delito, correspondiendo entonces al Tribunal Superior de Justicia de Galicia decidir sobre su inculpación (art. 11.Tres). Las leyes gallegas se promulgan por el Presidente de la Junta y se publican en el Diario Oficial de Galicia y en el BOE, pero a efectos de su entrada en vigor rige la fecha del DOG, normalmente anterior a la del BOE (art. 13.Dos)."
 },
 {
  "id": "b26-12",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 15 y 16 del Estatuto: el Presidente y la Junta de Galicia",
  "explanation": "El Presidente de la Junta es elegido por el Parlamento de Galicia de entre sus miembros y nombrado por el Rey (art. 15.Dos del Estatuto), reproduciendo el mismo esquema de doble paso —elección parlamentaria y nombramiento regio— que sigue la designación del Presidente del Gobierno estatal; dirige la Junta, coordina sus consejerías y ostenta la más alta representación de Galicia. La Junta, por su parte, está compuesta por el Presidente, el Vicepresidente o Vicepresidentes, en su caso, y los Consejeros o Consejeras, que dirigen cada consejería (art. 16.Dos), como la Consejería de Educación, competente en materia de Educación Infantil, escolarización y normativa curricular autonómica. Es precisamente la Junta, a propuesta de la persona titular de esta consejería, quien aprueba disposiciones como el Decreto 150/2022, de 8 de septiembre, que establece la ordenación y el currículo de la Educación Infantil en Galicia."
 },
 {
  "id": "b26-13",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 21, 24 y 25 del Estatuto: la Administración de Justicia en Galicia",
  "explanation": "El Tribunal Superior de Justicia de Galicia es el órgano jurisdiccional en que culmina la organización judicial en el territorio gallego, sin perjuicio de la jurisdicción que en todo el Estado corresponde al Tribunal Supremo (art. 21 del Estatuto). A instancia de la Comunidad Autónoma se convocan los concursos y oposiciones para cubrir en Galicia las plazas vacantes de Magistrados, Jueces, Secretarios Judiciales y demás personal, conforme a la Ley Orgánica del Poder Judicial (art. 24.1), y en la resolución de esos concursos y oposiciones se considera mérito preferente la especialización en Derecho gallego y el conocimiento del idioma del país (art. 25), lo que en la práctica valora positivamente, por ejemplo, acreditar el CELGA. Este mecanismo asegura que Galicia pueda influir en la provisión de plazas judiciales en su territorio y que quienes las cubren conozcan su realidad jurídica y lingüística propia."
 },
 {
  "id": "b26-14",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 27, 31 y 33 del Estatuto: el reparto de competencias autonómicas de Galicia",
  "explanation": "El Estatuto distingue distintos grados de competencia autonómica. Es competencia exclusiva de Galicia, entre otras materias, la ordenación del territorio y del litoral, el urbanismo y la vivienda (art. 27.Tres), así como la promoción y la enseñanza de la lengua gallega (art. 27.Veinte): en estos ámbitos el Estado no puede legislar salvo en lo que la propia Constitución le reserva. Es competencia plena la regulación y administración de la enseñanza en toda su extensión, niveles, grados, modalidades y especialidades, sin perjuicio del art. 27 CE y de la alta inspección del Estado (art. 31), lo que permite que el currículo de Educación Infantil en Galicia se apruebe por decreto autonómico dentro del marco básico estatal. Y es competencia compartida el desarrollo legislativo y la ejecución de la legislación básica del Estado en sanidad interior (art. 33.Uno), de modo que el Estado fija las bases y Galicia las desarrolla y ejecuta a través del Sergas."
 },
 {
  "id": "b26-15",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 39 y 40 del Estatuto: la Administración pública gallega y la comarca",
  "explanation": "Corresponde a la Comunidad Autónoma la creación y estructuración de su propia Administración pública, dentro de los principios generales y normas básicas del Estado (art. 39 del Estatuto); esta previsión permite a Galicia organizar sus propias consejerías, cuerpos y escalas de funcionarios, entre ellos el cuerpo docente que presta servicio en las escuelas infantiles y colegios públicos gallegos. Por otra parte, mediante ley de Galicia se puede reconocer la comarca como entidad local con personalidad jurídica y demarcación propia, sin que ello suponga necesariamente la supresión de los municipios que la integren (art. 40.Uno); la comarca actuaría así como un nivel intermedio de gestión de servicios entre el municipio y la provincia, por ejemplo para coordinar recursos educativos o sociales entre varios ayuntamientos pequeños de una misma zona."
 },
 {
  "id": "b26-16",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Art. 35 del Estatuto: los convenios de Galicia con otras Comunidades Autónomas",
  "explanation": "Los convenios que Galicia celebre con otras Comunidades Autónomas para la gestión y prestación de servicios propios de la exclusiva competencia de las mismas deben comunicarse a las Cortes Generales antes de su entrada en vigor (art. 35.Uno del Estatuto); si estas manifiestan reparos dentro de los treinta días siguientes, el convenio no puede seguir su trámite ordinario y debe reconducirse por la vía propia de los acuerdos de cooperación, que sí exigen autorización expresa de las Cortes Generales. Esta distinción entre «convenios» (de mera comunicación, salvo reparo) y «acuerdos de cooperación» (de autorización previa) es relevante porque determina el grado de control estatal sobre la colaboración interautonómica: por ejemplo, un convenio entre Galicia y Castilla y León para gestionar conjuntamente un servicio educativo transfronterizo quedaría sujeto a este régimen de comunicación previa."
 },
 {
  "id": "b26-17",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 34, 35.1 y 36.1 Ley 39/2015: los elementos y la forma del acto administrativo",
  "explanation": "Los actos administrativos se producen por el órgano competente ajustándose a los requisitos y al procedimiento establecido (art. 34.1 Ley 39/2015); si, por ejemplo, un acto de admisión en un centro educativo lo dicta un órgano incompetente, el acto podrá ser anulable o incluso nulo según la gravedad del vicio. Deben motivarse, con sucinta referencia de hechos y fundamentos de derecho, los actos que limiten derechos subjetivos o intereses legítimos (art. 35.1.a): así, la denegación de una plaza escolar debe explicar por qué esa solicitud no cumple los criterios del baremo aplicado, y una motivación insuficiente puede dar lugar a su impugnación. Y, con carácter general, los actos administrativos se producen por escrito a través de medios electrónicos, salvo que su naturaleza exija otra forma de expresión y constancia, como una señal de tráfico o una orden verbal en una emergencia (art. 36.1)."
 },
 {
  "id": "b26-18",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 39.3, 47.1.a) y 48.1 Ley 39/2015: la eficacia y la validez de los actos administrativos",
  "explanation": "Los actos administrativos producen efectos desde la fecha en que se dicten, salvo que en ellos se disponga otra cosa; excepcionalmente puede otorgarse eficacia retroactiva a los que se dicten en sustitución de actos anulados o que produzcan efectos favorables al interesado, siempre que los supuestos de hecho necesarios existieran ya en la fecha a la que se retrotraiga la eficacia (art. 39.3): por ejemplo, si se anula la denegación de una beca y se dicta una nueva resolución reconociéndola, puede aplicarse desde la fecha de la solicitud original. Cuando el acto lesiona derechos y libertades susceptibles de amparo constitucional es nulo de pleno derecho (art. 47.1.a) —sería el caso de discriminar a un aspirante por razón de sexo, vulnerando el art. 14 CE—, mientras que cualquier otra infracción del ordenamiento, incluida la desviación de poder (usar una potestad para un fin distinto del previsto por la norma), determina solo su anulabilidad (art. 48.1), un vicio menos grave y subsanable."
 },
 {
  "id": "b26-19",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 40, 43.2 y 44 Ley 39/2015: la notificación de los actos administrativos",
  "explanation": "Toda notificación debe cursarse dentro del plazo de diez días desde que el acto se dictó (art. 40.2), y si contiene el texto íntegro del acto pero omite algún otro requisito, surte efecto desde que el interesado realice actuaciones que demuestren conocer su contenido o interponga el recurso procedente, de modo que un defecto meramente formal no la invalida si consta ese conocimiento efectivo (art. 40.3). Cuando la notificación electrónica es obligatoria o ha sido elegida por el interesado, se entiende rechazada —y por tanto el trámite por efectuado— si transcurren diez días naturales desde su puesta a disposición sin que se acceda al contenido (art. 43.2), lo que exige a cualquier interesado en un procedimiento revisar periódicamente su sede electrónica o su Dirección Electrónica Habilitada. Y cuando los interesados sean desconocidos, se ignore su domicilio o no se haya podido practicar la notificación, esta se hará mediante anuncio en el «Boletín Oficial del Estado», mecanismo subsidiario que garantiza la publicidad del acto (art. 44)."
 },
 {
  "id": "b26-20",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 53.1 y 82.2 Ley 39/2015: derechos de los interesados y trámite de audiencia",
  "explanation": "Los interesados en un procedimiento administrativo tienen derecho a conocer, en cualquier momento, el estado de su tramitación (art. 53.1.a), lo que en la práctica permite a un aspirante en un proceso selectivo consultar en qué fase se encuentra su expediente, y a no presentar documentos originales salvo que, excepcionalmente, la normativa reguladora aplicable exija lo contrario (art. 53.1.c), lo que agiliza los trámites al bastar habitualmente con copias. Estos derechos se proyectan de forma especial en el trámite de audiencia, en el que los interesados, en un plazo no inferior a diez días ni superior a quince, pueden alegar y presentar los documentos que estimen pertinentes antes de que se dicte la resolución final (art. 82.2): es el momento procedimental en que, por ejemplo, un docente expedientado puede aportar pruebas de descargo antes de que la Administración resuelva, garantizando así su derecho de defensa."
 },
 {
  "id": "b26-21",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Art. 77 Ley 39/2015: la prueba en el procedimiento administrativo",
  "explanation": "El instructor del procedimiento acuerda la apertura de un período de prueba, por un plazo no superior a treinta días ni inferior a diez, en el que se practican las pruebas pertinentes para resolver —informes técnicos, testimonios, documentos— (art. 77.2), y, cuando lo considere necesario y a petición de los interesados, puede abrir además un período extraordinario de prueba de duración máxima de diez días, adicional al ordinario. El instructor solo puede rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, y debe hacerlo mediante resolución motivada que se notifique a los interesados para que, en su caso, puedan recurrirla (art. 77.3). Este régimen garantiza que, por ejemplo, en un expediente disciplinario a un empleado público, no se le prive arbitrariamente de aportar un testigo o un informe relevante sin una justificación expresa y recurrible."
 },
 {
  "id": "b26-22",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 84.1, 106.1, 106.5, 107.2, 112.1 y 114.1.a) Ley 39/2015: terminación, revisión de oficio y recursos administrativos",
  "explanation": "El procedimiento administrativo termina por resolución, desistimiento (abandono del procedimiento), renuncia al derecho, caducidad o imposibilidad material de continuarlo, entre otras causas (art. 84.1). Al margen de esa terminación ordinaria, la Administración puede declarar de oficio, en cualquier momento, la nulidad de los actos que hayan puesto fin a la vía administrativa, pero necesita el dictamen previo y favorable del Consejo de Estado u órgano consultivo autonómico equivalente, garantía que evita que se anulen sus propios actos sin control externo (art. 106.1); si ese procedimiento se inició de oficio, el transcurso de seis meses sin resolución produce su caducidad (art. 106.5). Cuando el acto es solo anulable, la Administración debe impugnarlo ante los tribunales mediante la declaración de lesividad, que no puede adoptarse una vez transcurridos cuatro años desde que se dictó el acto, en garantía de la seguridad jurídica del interesado (art. 107.2). Frente a las resoluciones, los interesados pueden interponer los recursos de alzada (ante el órgano superior jerárquico) y el potestativo de reposición (ante el mismo órgano, previo a los tribunales) (art. 112.1), y son precisamente las resoluciones de los recursos de alzada las que ponen fin a la vía administrativa, abriendo ya la vía contencioso-administrativa (art. 114.1.a)."
 },
 {
  "id": "b26-23",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 81.2 y 82.5 Ley 39/2015: la responsabilidad patrimonial de las Administraciones Públicas",
  "explanation": "En los procedimientos de responsabilidad patrimonial, cuando la indemnización reclamada sea de cuantía igual o superior a 50.000 euros, o a la que establezca la legislación autonómica correspondiente, es preceptivo solicitar dictamen del Consejo de Estado o del órgano consultivo autonómico equivalente, garantía adicional en reclamaciones de cuantía elevada frente a la Administración (art. 81.2). Además, en los procedimientos de responsabilidad patrimonial derivados de la ejecución de contratos administrativos (art. 32.9 de la Ley 40/2015, LRJSP), es necesario en todo caso dar audiencia al contratista, notificándole las actuaciones para que pueda personarse y proponer los medios de prueba que estime oportunos, puesto que el resultado del procedimiento —por ejemplo, un daño causado a un usuario de un servicio público prestado por una empresa contratista— puede afectarle directamente (art. 82.5)."
 },
 {
  "id": "b26-24",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 20.2, 21 y 133 Ley 2/2015: las clases de empleados públicos",
  "explanation": "Los empleados públicos gallegos se clasifican en personal funcionario de carrera, personal funcionario interino, personal laboral y personal eventual (art. 20.2): un maestro con plaza fija en un CEIP gallego es funcionario de carrera, mientras que quien cubre una baja mediante nombramiento temporal es funcionario interino. El personal funcionario de carrera está vinculado a la Administración por una relación estatutaria regulada por el derecho administrativo, de carácter permanente (art. 21), lo que lo diferencia esencialmente del personal laboral, cuya relación se rige por el derecho laboral mediante un contrato de trabajo. Precisamente por ese distinto régimen jurídico, el art. 133 establece que la jornada, los permisos, las licencias y las vacaciones del personal laboral se rigen por la legislación laboral aplicable —el Estatuto de los Trabajadores y el convenio colectivo correspondiente— y no por la normativa administrativa específica del funcionariado."
 },
 {
  "id": "b26-25",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 23.2 y 24 Ley 2/2015: el nombramiento y los plazos del personal funcionario interino",
  "explanation": "El nombramiento de personal funcionario interino por existencia de puesto vacante tiene un plazo máximo, con carácter general, de tres años, transcurrido el cual debe estar resuelto el proceso selectivo de cobertura definitiva de esa plaza (art. 23.2.a); si, en cambio, se trata de un exceso o acumulación de tareas de carácter excepcional y circunstancial —por ejemplo, reforzar temporalmente un centro educativo ante una matriculación extraordinaria—, el nombramiento tiene un plazo máximo de nueve meses dentro de un período de dieciocho meses (art. 23.2.d). Excepcionalmente, si se publicó la convocatoria dentro del plazo de tres años pero esta aún no se ha resuelto, el interino puede permanecer en el puesto hasta su resolución, sin derecho a compensación económica, porque se entiende que la Administración cumplió su obligación de convocar en plazo (art. 23.3). Si, por el contrario, la Administración incumple ese plazo máximo, debe abonar una compensación económica equivalente a veinte días de retribuciones fijas por año de servicio, prorrateada por meses y con un máximo de doce mensualidades (art. 24.4), indemnización que compensa al interino por la demora que le es imputable a la Administración."
 },
 {
  "id": "b26-26",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 86.1, 88.1, 89.1, 89.2 y 102 Ley 2/2015: la provisión de puestos de trabajo y la movilidad",
  "explanation": "Se garantiza al personal funcionario de carrera el derecho a la movilidad voluntaria, conforme a los procedimientos previstos legalmente, lo que permite, por ejemplo, a un maestro trasladarse de centro mediante los concursos de traslados periódicos (art. 86.1). Los puestos reservados a este personal se proveen de forma ordinaria por concurso —ordinario o específico— o por libre designación con convocatoria pública (art. 88.1); el concurso valora méritos objetivos, como antigüedad, formación o experiencia (art. 89.1), mientras que la libre designación valora la confianza para puestos directivos, exigiendo en ambos casos convocatoria pública. Quedan excluidos de la convocatoria general de concursos los puestos con personal adscrito por motivos de salud o rehabilitación, o por motivos de violencia de género o de violencia sexual (art. 89.2), protección que se completa con el traslado especial previsto para estos últimos casos, que permite al funcionario afectado cambiar de puesto, incluso a otra localidad, con carácter prioritario y sin esperar a una convocatoria ordinaria (art. 102)."
 },
 {
  "id": "b26-27",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 105, 106.6, 132.1, 132.2 y 132.6 Ley 2/2015: jornada, permisos y vacaciones",
  "explanation": "Cada Administración pública determina la jornada ordinaria y las especiales de trabajo del personal funcionario, previa negociación con la representación sindical del personal (art. 105). En materia de vacaciones, el funcionario tiene derecho, por año completo de servicio, a un mínimo de veintidós días hábiles anuales, reducidos proporcionalmente si el tiempo trabajado en el año es inferior al completo (art. 132.1), sin que a estos efectos se consideren hábiles los sábados (art. 132.2). En caso de jubilación por incapacidad permanente o de fallecimiento, puede solicitarse el abono de una compensación económica por las vacaciones devengadas y no disfrutadas hasta un máximo de dieciocho meses, evitando que el funcionario o sus herederos pierdan ese derecho ya generado (art. 132.6). En cuanto a permisos, se mantiene el derecho a la reducción de jornada por cuidado de hijo o hija con cáncer u otra enfermedad grave hasta que este cumpla veintiséis años si, antes de los veintitrés, se acredita un grado de discapacidad igual o superior al 65 %, ampliando así el derecho más allá de la mayoría de edad en supuestos de dependencia acreditada (art. 106.6)."
 },
 {
  "id": "b26-28",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 164.1, 166.1 y 167 Ley 2/2015: las situaciones administrativas del personal funcionario de carrera",
  "explanation": "El personal funcionario de carrera puede hallarse en distintas situaciones administrativas: servicio activo, servicios especiales, servicio en otras Administraciones públicas, excedencia voluntaria, excedencia forzosa o suspensión de funciones (art. 164.1), cada una con efectos distintos sobre derechos como la retribución o la reserva de plaza. La situación habitual y mayoritaria es el servicio activo, en la que se encuentran quienes prestan servicios en su condición de funcionario de carrera sin que les corresponda quedar en otra situación —es decir, un maestro que trabaja con normalidad en su centro (art. 166.1)—. Pasa, en cambio, a servicios especiales el funcionario designado miembro del Gobierno, del Consello de la Xunta, de los órganos de gobierno de otras Comunidades Autónomas o de instituciones de la Unión Europea, entre otros supuestos (art. 167.c), situación en la que se le reserva el puesto y el tiempo computa a efectos de antigüedad aunque no lo esté desempeñando efectivamente."
 },
 {
  "id": "b26-29",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 1, 2.2.b), 3.1, 4.1 y 5.1 LO 3/2018: objeto, principios generales y datos de personas fallecidas",
  "explanation": "La LO 3/2018 tiene por objeto, entre otros, adaptar el ordenamiento jurídico español al Reglamento (UE) 2016/679 —el RGPD—, que aunque directamente aplicable en toda la Unión Europea necesita normas nacionales complementarias como esta ley orgánica (art. 1.a). Entre sus principios, en relación con el art. 5.1.d) del RGPD, los datos personales deben ser exactos y, si fuere necesario, actualizados —por ejemplo, un centro educativo debe actualizar el domicilio de una familia si esta lo comunica, para que las notificaciones lleguen correctamente— (art. 4.1), y los responsables y encargados del tratamiento, así como todas las personas que intervengan en cualquier fase de este, quedan sujetos a un deber de confidencialidad que se mantiene incluso finalizada su relación con el responsable (art. 5.1). La ley, por lo demás, no se aplica con carácter general a los tratamientos de datos de personas fallecidas (art. 2.2.b), sin perjuicio de que las personas vinculadas a ellas por razones familiares o de hecho, y sus herederos, puedan solicitar al responsable el acceso, rectificación o supresión de esos datos, salvo prohibición expresa del fallecido o previsión legal en contrario (art. 3.1)."
 },
 {
  "id": "b26-30",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 6.1, 7.1 y 7.2 LO 3/2018: el consentimiento del afectado y de los menores",
  "explanation": "Se entiende por consentimiento del afectado toda manifestación de voluntad libre, específica, informada e inequívoca por la que este acepta, mediante declaración o clara acción afirmativa, el tratamiento de sus datos (art. 6.1): marcar activamente una casilla vale como consentimiento, pero el silencio o una casilla premarcada no. El tratamiento de los datos personales de un menor solo puede fundarse en su propio consentimiento cuando sea mayor de catorce años, salvo excepciones legales; por debajo de esa edad es necesario el consentimiento de quien ejerza la patria potestad o tutela (art. 7.1), y ese consentimiento parental solo hace lícito el tratamiento con el alcance que determinen quienes ejercen dicha patria potestad o tutela (art. 7.2). En la práctica escolar, esto significa que, por ejemplo, la publicación de fotografías de un niño o niña de tres años en la web de una escuela infantil requiere el consentimiento expreso de sus progenitores o tutores, no bastando el del propio menor."
 },
 {
  "id": "b26-31",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Art. 9 LO 3/2018: las categorías especiales de datos",
  "explanation": "Para evitar situaciones discriminatorias, el solo consentimiento del afectado no basta para levantar la prohibición general de tratar datos que identifiquen ideología, afiliación sindical, religión, creencias, orientación sexual u origen racial o étnico, salvo que una disposición adicional de la propia ley lo autorice expresamente en supuestos concretos (art. 9.1); de igual modo, los tratamientos de datos de salud amparados en las letras g), h) e i) del art. 9.2 del RGPD, cuando se fundan en el Derecho español, deben estar amparados en una norma con rango de ley, que puede establecer requisitos adicionales de seguridad y confidencialidad (art. 9.2). Este refuerzo de garantías tiene una traducción muy concreta en el ámbito escolar: los datos sobre alergias, discapacidad o necesidades educativas especiales de un alumno de Educación Infantil son datos de salud especialmente protegidos, y su tratamiento por el centro exige una base legal específica, no basta con un simple consentimiento informal de la familia."
 },
 {
  "id": "b26-32",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 11, 12.6 y 13.3 LO 3/2018: transparencia, representación de menores y límites al ejercicio de derechos",
  "explanation": "Cuando los datos personales se obtienen directamente del propio afectado, el responsable debe informarle, entre otros extremos, de la finalidad del tratamiento, el plazo de conservación y sus derechos, normalmente mediante una cláusula informativa incorporada al propio formulario de recogida de datos (art. 11). Los titulares de la patria potestad pueden ejercitar en nombre y representación de los menores de catorce años los derechos de acceso, rectificación, cancelación, oposición y demás que les correspondan —por ejemplo, solicitando la eliminación de una fotografía del menor publicada sin autorización— (art. 12.6). Estos derechos, sin embargo, no son ilimitados: puede considerarse repetitivo el ejercicio del derecho de acceso en más de una ocasión durante un plazo de seis meses, salvo que exista causa legítima, en cuyo caso el responsable puede exigir una compensación por los costes administrativos o negarse a atenderlo (art. 13.3), filtro que protege a los responsables frente a solicitudes reiteradas sin justificación."
 },
 {
  "id": "b26-33",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 63.1, 64.1, 65.2 y 65.3 LO 3/2018: el procedimiento ante la Agencia Española de Protección de Datos",
  "explanation": "El Título VIII de la ley se aplica a los procedimientos que tramita la Agencia Española de Protección de Datos (AEPD) ante reclamaciones o investigaciones de posibles infracciones, por ejemplo cuando una persona denuncia que un centro publicó datos suyos sin consentimiento (art. 63.1). Cuando el procedimiento se refiere exclusivamente a la falta de atención de una solicitud de ejercicio de derechos, el plazo para resolver es de seis meses desde que se notifica al reclamante el acuerdo de admisión a trámite, transcurrido el cual sin resolución expresa la reclamación se entiende desestimada (art. 64.1). La AEPD inadmitirá las reclamaciones que no versen sobre protección de datos, carezcan manifiestamente de fundamento, sean abusivas o no aporten indicios racionales de infracción (art. 65.2), y puede inadmitir también, previa advertencia y adopción de medidas correctivas por el responsable, aquellas en las que no se haya causado perjuicio al afectado o en las que su derecho quede ya plenamente garantizado por dichas medidas, evitando así sancionar a quien corrige voluntariamente su incumplimiento (art. 65.3)."
 },
 {
  "id": "b26-34",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 1.1, 13.1 y 18 Ley 7/2023: objeto de la ley, concepto de género y acción positiva",
  "explanation": "La Ley 7/2023 refuerza el compromiso de la Comunidad Autónoma de Galicia con la eliminación de la discriminación de las mujeres y la promoción de la igualdad entre mujeres y hombres, actualizando la anterior Ley 7/2004 gallega para la igualdad (art. 1.1). A efectos de la ley, se entiende por género el conjunto de construcciones sociales, educativas y culturales de los roles, rasgos, actitudes, comportamientos y expectativas asociados de forma diferencial a mujeres y hombres, a diferencia del sexo, que alude a las características biológicas (art. 18); esta distinción es clave, por ejemplo, para entender por qué la coeducación busca corregir roles aprendidos, no rasgos biológicos. Para hacer efectivo el derecho constitucional a la igualdad, los poderes públicos gallegos adoptarán medidas de acción positiva a favor de las mujeres, razonables y proporcionadas, mientras subsistan situaciones de desigualdad, como reservas de plazas o bonificaciones en determinados procesos selectivos (art. 13.1), en línea con el art. 9.2 CE."
 },
 {
  "id": "b26-35",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 4.2, 4.3 y 9 Ley 7/2023: tipos de discriminación por razón de sexo",
  "explanation": "Existe discriminación directa por razón de sexo cuando una persona sea, haya sido o pudiera ser tratada de manera menos favorable que otra en situación comparable —por ejemplo, no seleccionar a una candidata para un puesto por estar embarazada— (art. 4.2, en relación con la LO 3/2007). Existe discriminación indirecta cuando una disposición, criterio o práctica aparentemente neutros ponen a personas de un sexo en desventaja particular respecto de las del otro, salvo justificación objetiva y proporcionada, como exigir una altura mínima para un puesto sin relación real con las tareas a desempeñar, requisito que perjudicaría desproporcionadamente a las mujeres (art. 4.3). Y existe discriminación sexista por asociación cuando una persona sufre un trato desfavorable por razón del sexo, el embarazo, el parto o la maternidad, o de las obligaciones familiares o el estado civil de otra persona con la que está relacionada, como penalizar laboralmente a un padre que solicita una reducción de jornada para cuidar de su hija (art. 9)."
 },
 {
  "id": "b26-36",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 6.1, 36.g), 74.1 y 77 Ley 7/2023: formas específicas de violencia y discriminación",
  "explanation": "Se entiende por acoso sexual cualquier comportamiento verbal, no verbal o físico de naturaleza sexual que tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona, creando un entorno intimidatorio, hostil, degradante, humillante u ofensivo (art. 6.1.a). El Servicio Gallego de Salud debe garantizar el tratamiento adecuado de las situaciones de violencia de género y de violencia contra la mujer en los servicios de atención sanitaria, mediante protocolos que permitan al personal sanitario detectar indicios y activar recursos de protección (art. 36.g). La ley presta especial atención a la discriminación múltiple e interseccional: la confluencia de dos o más factores de discriminación —como ser mujer y tener una discapacidad— tiene un efecto exponencial en la desigualdad, no simplemente sumativo (art. 74.1), y la Administración debe considerar también la situación particular de desventaja de las mujeres lesbianas, bisexuales y trans, colaborando para erradicar la violencia lesbófoba y contra las mujeres trans mediante planes y protocolos específicos (art. 77)."
 },
 {
  "id": "b26-37",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 32.1, 50.2.f) y 60 Ley 7/2023: medidas institucionales, universitarias y en el ámbito electoral",
  "explanation": "La Administración general de la Comunidad Autónoma y las entidades del sector público deben erradicar, en todas las formas de expresión oral o escrita, el uso sexista del lenguaje en el campo institucional, evitando por ejemplo fórmulas que invisibilicen a las mujeres en comunicaciones y formularios oficiales (art. 32.1). En el ámbito universitario, se garantizará que en los procesos de selección o de evaluación de la trayectoria académico-profesional queden excluidos, sin impacto negativo, los períodos dedicados a permisos de nacimiento o adopción, riesgo durante el embarazo o lactancia, o a incapacidad temporal asociada a estas causas o a la violencia de género o cualquier tipo de acoso laboral (art. 50.2.f), norma equiparable, en su lógica, a la protección que da la Ley 2/2015 al personal funcionario en situaciones similares. Y, en período electoral, se fomentará el debate sobre cuestiones de género mediante un incremento del 10 % del tiempo gratuito de propaganda electoral concedido a las candidaturas al Parlamento de Galicia que lo destinen a esas cuestiones (art. 60)."
 },
 {
  "id": "b26-38",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 41.1.a), 41.1.h) y 43.1 Ley 7/2023: currículo, coeducación y prohibición de estereotipos en los centros docentes",
  "explanation": "El currículo educativo debe adaptarse para incluir la comprensión del valor constitucional de la igualdad entre ambos sexos, sin admitir contenidos que transmitan una distribución estereotipada de papeles —por ejemplo, evitando cuentos o materiales que asignen roles de cuidado exclusivamente a las niñas— (art. 41.1.a), y la Administración autonómica debe garantizar, dentro de sus competencias, la coeducación en Galicia, dirigida al libre desarrollo de la personalidad sin barreras de género, es decir, una educación conjunta de niños y niñas en igualdad, sin diferenciación de expectativas por razón de sexo (art. 41.1.h). En coherencia con ello, no se admitirán en el centro docente desigualdades sustentadas en creencias, prejuicios, tradiciones o costumbres que transmitan, directa o indirectamente, una distribución estereotipada de papeles entre los sexos, como separar por sexo actividades deportivas sin una justificación pedagógica real (art. 43.1); estos preceptos son directamente aplicables a la organización cotidiana de una escuela de Educación Infantil, desde el reparto de juegos y espacios hasta la selección de materiales didácticos."
 },
 {
  "id": "b26-39",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 42.1 y 44 Ley 7/2023: la coordinación de igualdad y la formación del profesorado",
  "explanation": "Constituido el consejo escolar de los centros docentes públicos, este debe designar a una persona del centro que impulse medidas educativas que fomenten la igualdad real y efectiva entre hombres y mujeres, figura habitualmente conocida como coordinador o coordinadora de igualdad o de coeducación (art. 42.1, en relación con el art. 126.2 de la LOE); en una escuela infantil, esta persona suele encargarse de revisar materiales, organizar actividades del 8 de marzo o coordinar la formación interna del claustro en la materia. Complementariamente, la Administración debe incluir en los planes de formación permanente del profesorado, como materia específica, la igualdad y la violencia de género, diseñando cursos concretos para que el personal docente sepa detectar y actuar ante posibles casos (art. 44), formación que resulta especialmente relevante en Educación Infantil por la temprana edad en que se forman las actitudes y roles de género en el alumnado."
 },
 {
  "id": "b26-40",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 1.1, 1.3 y 1.4 LO 1/2004: el concepto y el ámbito de la violencia de género",
  "explanation": "La ley actúa contra la violencia ejercida sobre las mujeres por quienes sean o hayan sido sus cónyuges o estén o hayan estado ligados a ellas por relaciones similares de afectividad, aun sin convivencia (art. 1.1); se trata, por tanto, de una ley limitada a la violencia en el ámbito de la pareja o expareja, no a cualquier violencia contra la mujer. Esa violencia de género comprende todo acto de violencia física y psicológica, incluidas las agresiones a la libertad sexual, las amenazas, las coacciones o la privación arbitraria de libertad (art. 1.3), y también comprende la violencia vicaria: la que, con el objetivo de causar perjuicio o daño a las mujeres, se ejerce sobre sus familiares o allegados menores de edad, dañando a los hijos o hijas para hacer sufrir a la madre (art. 1.4). Esta última noción es de especial relevancia para el personal de un centro de Educación Infantil, que puede ser el primer entorno en detectar signos de esta forma de violencia en un niño o niña muy pequeño."
 },
 {
  "id": "b26-41",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 3.1 y 5 LO 1/2004: medidas de sensibilización y protección inmediata",
  "explanation": "De manera inmediata a la entrada en vigor de la ley se debía poner en marcha un Plan Estatal de Sensibilización y Prevención de la Violencia de Género, de carácter permanente, dirigido a informar y concienciar a la sociedad sobre este problema (art. 3.1). En un plano más concreto y práctico, las Administraciones competentes deben prever la escolarización inmediata de los hijos e hijas que se vean afectados por un cambio de residencia derivado de actos de violencia de género (art. 5), evitando así que la falta de plaza escolar disponible se convierta en un obstáculo que impida a una madre huir de una situación de maltrato con sus hijos. En la práctica, esto obliga a los centros de Educación Infantil y a las Administraciones educativas a tramitar con carácter urgente y preferente la matrícula de un menor en estas circunstancias, incluso fuera de los plazos ordinarios de escolarización."
 },
 {
  "id": "b26-42",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 4.2, 4.4 y 6 LO 1/2004: el sistema educativo no universitario ante la violencia de género",
  "explanation": "La Educación Infantil debe contribuir a desarrollar en la infancia el aprendizaje en la resolución pacífica de conflictos, sentando desde las primeras edades las bases para prevenir comportamientos violentos y fomentar el respeto en las relaciones interpersonales (art. 4.2); la Educación Secundaria Obligatoria continúa después ese trabajo, desarrollando en el alumnado la capacidad de relacionarse pacíficamente y de conocer, valorar y respetar la igualdad de oportunidades entre hombres y mujeres (art. 4.4). Este itinerario formativo se apoya, además, en el control de los materiales educativos: las Administraciones educativas deben velar para que en todos ellos se eliminen los estereotipos sexistas o discriminatorios y se fomente el igual valor de hombres y mujeres, revisando, por ejemplo, que los libros de texto muestren a hombres y mujeres en una diversidad real de roles profesionales y familiares (art. 6). Estos tres artículos muestran que la prevención de la violencia de género se concibe como un proceso educativo continuo desde la etapa infantil."
 },
 {
  "id": "b26-43",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 4.7, 7, 8 y 9 LO 1/2004: formación del profesorado, universidades, consejos escolares e inspección educativa",
  "explanation": "Las Universidades deben incluir y fomentar, en todos los ámbitos académicos, la formación, docencia e investigación en igualdad de género y no discriminación de forma transversal, es decir, integrada en distintas disciplinas y grados y no como una asignatura aislada (art. 4.7). En los niveles no universitarios, la formación inicial y permanente del profesorado debe habilitarlo, entre otras cosas, para la detección precoz de la violencia en el ámbito familiar, tanto sobre la mujer como sobre los hijos e hijas, ya que el contacto habitual del docente con el alumnado le permite observar indicios —cambios de comportamiento, ausencias, lesiones— que pueden pasar desapercibidos en otros entornos (art. 7.c). Se adoptarán también medidas para que los Consejos Escolares impulsen medidas educativas que fomenten la igualdad real (art. 8), complementando la labor de la persona coordinadora de igualdad prevista en la normativa autonómica gallega, y los servicios de inspección educativa velarán por el cumplimiento de estos principios en los centros, supervisando por ejemplo que se cumpla con la coeducación (art. 9)."
 },
 {
  "id": "b26-44",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Art. 10 LO 1/2004: la publicidad ilícita por razón de género",
  "explanation": "Se considera ilícita, de acuerdo con la Ley 34/1988 General de Publicidad, la publicidad que utilice la imagen de la mujer con carácter vejatorio o discriminatorio, ya sea utilizando particular y directamente su cuerpo o partes del mismo como mero objeto desvinculado del producto que se pretende promocionar, o asociando su imagen a comportamientos estereotipados que vulneren los fundamentos de nuestro ordenamiento coadyuvando a generar violencia (art. 10). Esta previsión permite, por ejemplo, que asociaciones de mujeres o la propia Administración puedan actuar contra un anuncio comercial que cosifique el cuerpo femenino o refuerce roles sexistas, incluso cuando ese anuncio no incurra en ningún otro ilícito publicitario; se trata de una manifestación de la lucha contra la violencia de género en el terreno simbólico y cultural, no solo en el físico o psicológico directo."
 },
 {
  "id": "b26-45",
  "block": "b26",
  "blockTitle": "Legislación BOE (Temario xeral: Constitución, Estatuto, Ley 39/2015, Ley 2/2015, LOPDGDD, Ley 7/2023, LO 1/2004)",
  "concept": "Arts. 15.1 y 16 LO 1/2004: el ámbito sanitario ante la violencia de género",
  "explanation": "Las Administraciones sanitarias, en el seno del Consejo Interterritorial del Sistema Nacional de Salud, deben promover e impulsar actuaciones de los profesionales sanitarios para la detección precoz de la violencia de género (art. 15.1), puesto que el personal médico y de enfermería, por su contacto con las mujeres en consultas o servicios de urgencias, puede detectar signos de maltrato —lesiones recurrentes, retrasos en pedir atención, alteraciones psicológicas— que no siempre llegan a otros ámbitos institucionales. Para coordinar esta labor entre las distintas Comunidades Autónomas, se constituye en el seno del propio Consejo Interterritorial una Comisión contra la Violencia de Género que presta apoyo técnico a la planificación de las medidas sanitarias en la materia (art. 16), asegurando así protocolos y criterios homogéneos de actuación clínica en todo el territorio nacional ante casos de violencia de género."
 }
];
