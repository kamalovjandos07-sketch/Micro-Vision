/* ============================================================
   МикроАтлас — script.js
   Interactive Microbiology Directory
   ============================================================ */

'use strict';

/* ──────────────────────────────────────────────────────────────
   DATA: Full Academic Content (Russian, Litusov-style)
   ────────────────────────────────────────────────────────────── */

const MICROBES = {

  /* ══════════ E. COLI ══════════ */
  ecoli: {
    id: 'ecoli',
    latinName: 'Escherichia coli',
    taxon: 'Escherichia · Enterobacteriaceae · ATCC 25922',
    badge: { text: 'Условный патоген', cls: 'danger' },
    modelFile: 'e_coli.glb',
    modelScale: '1–5 мкм',
    summary: 'Escherichia coli (кишечная палочка) — грамотрицательная факультативно-анаэробная палочковидная бактерия, входящая в состав нормальной микрофлоры толстого кишечника человека. Выступает возбудителем эшерихиозов, инфекций мочевыводящих путей, неонатального менингита и других оппортунистических инфекций.',
    taxonomy: [
      ['Домен', 'Bacteria'],
      ['Тип', 'Pseudomonadota'],
      ['Класс', 'Gammaproteobacteria'],
      ['Порядок', 'Enterobacterales'],
      ['Семейство', 'Enterobacteriaceae'],
      ['Род', 'Escherichia'],
      ['Вид', 'E. coli'],
    ],
    placeholderSVG: `<svg viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="90" cy="60" rx="65" ry="34" fill="#dbeafe" stroke="#2657a0" stroke-width="2"/>
      <ellipse cx="90" cy="60" rx="42" ry="20" fill="#bfdbfe" opacity="0.5"/>
      <line x1="25" y1="60" x2="5" y2="44" stroke="#2657a0" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="25" y1="60" x2="3" y2="68" stroke="#2657a0" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="155" y1="60" x2="175" y2="44" stroke="#2657a0" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="155" y1="60" x2="177" y2="68" stroke="#2657a0" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="55" y1="26" x2="48" y2="8" stroke="#2657a0" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="125" y1="26" x2="132" y2="8" stroke="#2657a0" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="55" y1="94" x2="48" y2="112" stroke="#2657a0" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="125" y1="94" x2="132" y2="112" stroke="#2657a0" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="90" cy="60" r="10" fill="#2657a0" opacity="0.25"/>
      <circle cx="90" cy="60" r="4" fill="#2657a0" opacity="0.5"/>
      <text x="90" y="118" text-anchor="middle" fill="#64748b" font-size="9" font-family="serif" font-style="italic">E. coli (схема)</text>
    </svg>`,
    sections: [
      {
        id: 'classification',
        num: '01',
        title: 'Классификация',
        subtitle: 'Classification',
        content: {
          type: 'props',
          rows: [
            ['Домен / Тип', 'Bacteria / Pseudomonadota (Proteobacteria)'],
            ['Класс / Порядок', 'Gammaproteobacteria / Enterobacterales'],
            ['Семейство', 'Enterobacteriaceae'],
            ['Род / Вид', 'Escherichia / E. coli (T. Escherich, 1885)'],
            ['Патогенные варианты', 'ETEC, EPEC, EHEC (O157:H7), EIEC, EAEC, ExPEC'],
            ['Значимые серотипы', 'O111, O126, O55 (диарея детей); O157:H7 (ГУС); O1, O2, O6 (ИМП)'],
            ['Кол-во серогрупп по О-Аг', '> 170 серогрупп'],
          ]
        }
      },
      {
        id: 'morphology',
        num: '02',
        title: 'Морфология',
        subtitle: 'Morphology',
        content: {
          type: 'props',
          rows: [
            ['Форма / Размер', 'Грамотрицательная короткая палочка, 1,1–1,5 × 2,0–6,0 мкм'],
            ['Расположение', 'Одиночно, парами, реже в виде коротких цепочек'],
            ['Окраска по Граму', 'Грамотрицательная (розово-красная, −). Трёхслойная клеточная стенка с наружной мембраной.'],
            ['Жгутики', 'Перитрихи (H-антиген): многочисленные жгутики по всей поверхности клетки. Подвижные штаммы.'],
            ['Пили / Фимбрии', 'Тип I (маннозо-чувствительные); P-фимбрии (маннозо-резистентные, тропизм к уроэпителию); SEF14 (токсигенные штаммы).'],
            ['Споры / Капсула', 'Споры не образует. Капсула (К-антиген) — у инкапсулированных штаммов (K1 — нейровирулентность).'],
            ['Окраска препаратов', 'Метод Грама (основной); по Романовскому; по Гимзе при идентификации'],
          ]
        }
      },
      {
        id: 'culture',
        num: '03',
        title: 'Культуральные свойства',
        subtitle: 'Cultural Properties',
        content: {
          type: 'props',
          rows: [
            ['Тип дыхания', 'Факультативный анаэроб. Растёт как в аэробных, так и в анаэробных условиях.'],
            ['Оптимум роста', 'T = 37 °C, pH = 7,2–7,4; рост наблюдается от 8 °C до 46 °C'],
            ['МПА (плотная среда)', 'Крупные (2–4 мм), круглые, выпуклые, с ровным краем, гладкие (S-форма), блестящие, серовато-белые колонии. Возможна R-форма — морщинистые.'],
            ['МПБ (жидкая среда)', 'Равномерное помутнение с образованием осадка и плёнки. Бульон мутнеет быстро (18–24 ч).'],
            ['Среда Эндо', 'Тёмно-красные, с металлическим блеском колонии («малиновые» — лактозо-положительные). Ключевой признак для идентификации.'],
            ['Среда Левина (ЭМА)', 'Синевато-чёрные колонии с тёмным центром и металлическим блеском.'],
            ['Висмут-сульфит агар (ВСА)', 'Зелёные или серые колонии (в отличие от чёрных у сальмонелл).'],
            ['Биохимия (IMViC)', 'Индол +, МТ +, реакция Фогеса–Проскауэра −, цитрат Симмонса −. Лактоза + (кроме EIEC). Глюкоза + (с газом и кислотой).'],
          ]
        }
      },
      {
        id: 'resistance',
        num: '04',
        title: 'Резистентность',
        subtitle: 'Environmental Resistance',
        content: {
          type: 'mixed',
          items: [
            { type: 'props', rows: [
              ['Внешняя среда', 'В почве и воде — до нескольких месяцев. Является санитарно-показательным микроорганизмом (БГКП).'],
              ['Нагревание', '56 °C — гибель в течение 30 мин; 60 °C — 15 мин; кипячение — немедленно.'],
              ['УФ-излучение', 'Гибель в течение 30–40 мин прямого действия'],
              ['Дезинфектанты', 'Чувствительна к 1% хлорамину, 3% H₂O₂, 1% лизолу, формалину. Гибель в течение 1–5 мин.'],
              ['Антибиотики', 'Природная чувствительность к ампициллину, цефалоспоринам, аминогликозидам, фторхинолонам. Частая устойчивость через ESBL, MCR-гены.'],
              ['Холод / Замораживание', 'Длительно сохраняется при 4–6 °C и при замораживании (месяцы и годы).'],
            ]},
            { type: 'callout', cls: 'callout-accent', icon: '🧫', text: 'E. coli является основным санитарно-показательным микроорганизмом для оценки фекального загрязнения воды, пищевых продуктов и объектов внешней среды. Присутствие >1 КОЕ/100 мл в питьевой воде недопустимо.' },
          ]
        }
      },
      {
        id: 'pathogenicity',
        num: '05',
        title: 'Факторы патогенности',
        subtitle: 'Virulence Factors',
        content: {
          type: 'mixed',
          items: [
            { type: 'props', rows: [
              ['Адгезины', 'Фимбрии 1-го типа (урин. тракт); P-фимбрии; CFA/I, CFA/II (ETEC); интимин (EPEC); Afa/Dr фимбрии.'],
              ['Экзотоксины (ETEC)', 'LT (термолабильный): аналог токсина холеры, активирует аденилатциклазу → цАМФ↑ → хлоридная секреция. ST (термостабильный): активирует гуанилатциклазу → цГМФ↑.'],
              ['Шига-токсины (EHEC)', 'Stx1, Stx2: инактивируют 60S рибосомы → остановка синтеза белка → апоптоз эндотелия сосудов → ГУС (гемолитико-уремический синдром).'],
              ['Гемолизины', 'α-гемолизин (HlyA) — порообразующий токсин; цитолетальный растягивающий токсин (CDT — EIEC).'],
              ['Сидерофоры', 'Энтеробактин, аэробактин — захват ионов железа от трансферрина хозяина.'],
              ['Капсула (K1)', 'Антифагоцитарная активность. K1 — полисахарид, имитирующий нейрональные антигены → нейровирулентность.'],
              ['ЛПС (О-антиген)', 'Эндотоксин (липид A): активация TLR4 → NF-κB → системное воспаление, ДВС-синдром, септический шок.'],
              ['Острова патогенности (PAI)', 'LEE (locus of enterocyte effacement), PAI-I, PAI-II, PAI-III — несут гены токсинов, сидерофоров, систем T3SS.'],
            ]},
          ]
        }
      },
      {
        id: 'pathogenesis',
        num: '06',
        title: 'Патогенез',
        subtitle: 'Pathogenesis',
        content: {
          type: 'mixed',
          items: [
            { type: 'prose', paragraphs: [
              'Патогенез эшерихиозов определяется категорией патогенного варианта. <strong>ETEC</strong> колонизирует тонкий кишечник, продуцируя LT и ST-токсины, которые нарушают ион-транспортные механизмы энтероцитов без их деструкции, вызывая секреторную диарею (аналог холеры).',
              '<strong>EPEC</strong> формирует характерные A/E-повреждения (attaching and effacing): через T3SS вводит в клетку хозяина белок Tir, который служит рецептором для интимина → уплощение микроворсинок, нарушение всасывания.',
              '<strong>EHEC (O157:H7)</strong>: Stx2 поглощается через рецептор Gb3 клетками эндотелия капилляров клубочков → ДНК-повреждение, апоптоз → тромботическая микроангиопатия → ГУС (гемолиз, почечная недостаточность, тромбоцитопения). Триада ГУС развивается у 15% заражённых детей.',
              'При <strong>восходящей инфекции МВП</strong> (ExPEC) фимбрии P-типа связываются с уроэпителием → уропатогенные штаммы вызывают цистит, пиелонефрит. Гемолизин HlyA лизирует уротелиальные и эритроциты → высвобождение питательных веществ, усиление воспаления.',
              '<strong>Неонатальный менингит</strong>: K1-капсула защищает от фагоцитоза, бактерии преодолевают ГЭБ через трансцитоз эндотелия мозговых капилляров.',
            ]},
          ]
        }
      },
      {
        id: 'clinic',
        num: '07',
        title: 'Клиника',
        subtitle: 'Clinical Presentation',
        content: {
          type: 'mixed',
          items: [
            { type: 'props', rows: [
              ['Эшерихиоз (диарея путешественников / ETEC)', 'Инкубация 1–3 дня. Водянистая диарея без крови, тошнота, спазмы. Самоограничивающийся (3–5 дней).'],
              ['Геморрагический колит (EHEC O157:H7)', 'Инкубация 3–4 дня. Водянистая диарея → кровавая, схваткообразные боли, субфебрилитет. Осложнение: ГУС (10–15% у детей до 5 лет).'],
              ['Инфекции мочевыводящих путей', 'Цистит: дизурия, поллакиурия, пиурия. Пиелонефрит: высокая лихорадка, боль в пояснице, бактериурия.'],
              ['Неонатальный менингит', 'Новорождённые: лихорадка, выбухание родничка, ригидность, апноэ. Летальность без лечения до 50%; неврологические последствия у выживших.'],
              ['Неонатальный сепсис', 'Гипотермия, вялость, апноэ, иктеричность. Высокая летальность.'],
              ['Госпитальные инфекции (ExPEC)', 'Вентилятор-ассоциированная пневмония, катетер-ассоциированные ИМП, интраабдоминальные инфекции у иммунокомпрометированных.'],
            ]},
            { type: 'callout', cls: 'callout-danger', icon: '⚠️', text: 'ГУС — жизнеугрожающее осложнение EHEC-инфекции. Антибиотики противопоказаны при подозрении на EHEC O157:H7, так как они усиливают высвобождение Stx2 → риск ГУС возрастает в 17 раз.' },
          ]
        }
      },
      {
        id: 'diagnostics',
        num: '08',
        title: 'Диагностика',
        subtitle: 'Laboratory Diagnostics',
        content: {
          type: 'props',
          rows: [
            ['Материал', 'Фекалии, моча (средняя порция), кровь (при сепсисе), СМЖ (при менингите), ректальный мазок'],
            ['Микроскопия', 'Грамотрицательные палочки в окрашенных по Граму мазках. Не является видовым признаком.'],
            ['Бактериологический метод (золотой стандарт)', 'Посев на среду Эндо, ЭМА, Левина. Инкубация 18–24 ч при 37 °C. Отбор лактозо-положительных колоний. Биохимическая идентификация (API 20E, VITEK 2). Серотипирование по О-, Н-, К-антигенам.'],
            ['ПЦР', 'Выявление генов вирулентности: stx1, stx2 (EHEC); elt, est (ETEC); eae (EPEC). RT-PCR для количественной оценки.'],
            ['Серологическая диагностика', 'РПГА с эритроцитарными диагностикумами (ретроспективно). ИФА на Stx-токсины в кале.'],
            ['Антибиотикограмма', 'Обязательно: диск-диффузионный метод Кирби–Бауэра; МПК. Скрининг на ESBL (E-тест, двойной диск-синергизм).'],
            ['Экспресс-методы', 'Латекс-агглютинация на O157:H7; иммунохроматографический тест на Stx; масс-спектрометрия MALDI-TOF MS.'],
          ]
        }
      },
      {
        id: 'treatment',
        num: '09',
        title: 'Лечение и Профилактика',
        subtitle: 'Treatment & Prevention',
        content: {
          type: 'mixed',
          items: [
            { type: 'table', headers: ['Нозология', 'Препарат выбора', 'Альтернатива'], rows: [
              ['ИМП (неосложнённая)', 'Нитрофурантоин, Фосфомицин', 'Цефалоспорины II–III'],
              ['ИМП (осложнённая)', 'Фторхинолоны (ципрофлоксацин)', 'Карбапенемы (при ESBL)'],
              ['Диарея путешественников', 'Азитромицин, Рифаксимин', 'Фторхинолоны (резистентность растёт)'],
              ['EHEC (ГУС)', 'Патогенетическая терапия. АБ — ПРОТИВОПОКАЗАНЫ', 'Диализ, трансфузии'],
              ['Неонатальный менингит', 'Ампициллин + гентамицин (1-я линия); Цефотаксим', 'Меропенем'],
              ['Сепсис (ExPEC)', 'Пиперациллин/тазобактам', 'Карбапенемы (ESBL/MDR)'],
            ]},
            { type: 'callout', cls: 'callout-primary', icon: '🛡️', text: 'Профилактика: гигиена рук (особенно после контакта с животными), термическая обработка продуктов (фарш — 71 °C), санитарный контроль воды. Специфическая вакцина не разработана.' },
            { type: 'list', items: [
              'Санитарный контроль пищевых продуктов и питьевой воды (ТУ, ГОСТ, CEN/TR 15214)',
              'Мониторинг БГКП (бактерий группы кишечных палочек) — индикатор фекального загрязнения',
              'Рациональная антибиотикотерапия: строго по показаниям, с учётом антибиотикограммы',
              'Изоляция больных в стационаре при EHEC; дезинфекция выделений хлорсодержащими препаратами',
              'Профилактика нозокомиальных инфекций: соблюдение асептики, уход за катетерами',
            ]},
          ]
        }
      },
    ]
  },

  /* ══════════ ECHINOCOCCUS GRANULOSUS ══════════ */
  echinococcus: {
    id: 'echinococcus',
    latinName: 'Echinococcus granulosus',
    taxon: 'Echinococcus · Taeniidae · Ленточный червь',
    badge: { text: 'Гельминт-паразит', cls: 'warning' },
    modelFile: 'echinococcus_granulosus.glb',
    modelScale: '3–9 мм (взрослая форма)',
    summary: 'Echinococcus granulosus — возбудитель эхинококкоза (гидатидной болезни), паразитического ленточного червя. Окончательные хозяева — хищные млекопитающие (собаки, волки). Промежуточные хозяева — травоядные (овцы) и человек. Образует многокамерные (альвеолярные) кисты в органах хозяина.',
    taxonomy: [
      ['Царство', 'Animalia'],
      ['Тип', 'Platyhelminthes (плоские черви)'],
      ['Класс', 'Cestoidea (ленточные черви)'],
      ['Порядок', 'Cyclophyllidea'],
      ['Семейство', 'Taeniidae'],
      ['Род', 'Echinococcus'],
      ['Вид', 'E. granulosus'],
    ],
    placeholderSVG: `<svg viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="90" cy="30" rx="15" ry="8" fill="#7c3aed" opacity="0.3" stroke="#7c3aed" stroke-width="1.5"/>
      <rect x="70" y="42" width="40" height="6" fill="#7c3aed" opacity="0.2" stroke="#7c3aed" stroke-width="1.5"/>
      <rect x="68" y="52" width="44" height="6" fill="#7c3aed" opacity="0.25" stroke="#7c3aed" stroke-width="1.5"/>
      <rect x="66" y="62" width="48" height="6" fill="#7c3aed" opacity="0.3" stroke="#7c3aed" stroke-width="1.5"/>
      <rect x="64" y="72" width="52" height="6" fill="#7c3aed" opacity="0.25" stroke="#7c3aed" stroke-width="1.5"/>
      <text x="90" y="105" text-anchor="middle" fill="#64748b" font-size="9" font-family="serif" font-style="italic">E. granulosus (схема)</text>
    </svg>`,
    sections: [
      {
        id: 'classification',
        num: '01',
        title: 'Классификация',
        subtitle: 'Classification',
        content: {
          type: 'props',
          rows: [
            ['Царство / Тип', 'Animalia / Platyhelminthes'],
            ['Класс / Порядок', 'Cestoidea / Cyclophyllidea'],
            ['Семейство', 'Taeniidae'],
            ['Род / Вид', 'Echinococcus / E. granulosus (Batsch, 1786)'],
            ['Подвиды/генотипы', 'G1–G10; G1 (овечий генотип, наиболее частый); G2 (европейский конский); G3 (верблюжий)'],
            ['Распространение', 'Космополитный. Эндемичные зоны: Средняя Азия, Кавказ, Кыргызстан, Монголия, Австралия, Южная Америка'],
            ['Жизненный цикл', 'Дефинитивные хозяева: собаки, волки, лисицы. Промежуточные: овцы, крупный рогатый скот, свиньи, лошади, человек'],
          ]
        }
      },
      {
        id: 'morphology',
        num: '02',
        title: 'Морфология и Жизненный Цикл',
        subtitle: 'Morphology & Life Cycle',
        content: {
          type: 'mixed',
          items: [
            { type: 'props', rows: [
              ['Размер взрослой формы', '3–9 мм в длину. Очень маленький размер облегчает заражение.'],
              ['Строение тела', 'Ленточный червь состоит из сколекса (головка с присосками и крючьями) и 3–4 члеников (проглоттид).'],
              ['Сколекс (головка)', 'Округлая, 0,3–0,4 мм, с 4 присосками и коронкой из 28–50 крючьев. Позволяет прикрепиться к стенке кишечника.'],
              ['Членики (проглоттиды)', 'Незрелые (проксимальные) — содержат половую систему; зрелые (дистальные) — наполнены яйцами (350–810 яиц). Последний членик содержит ~500 яиц.'],
              ['Яйца', 'Сферические, 30–40 мкм в диаметре. Содержат онкосферу (личинка с 6 крючьями, гексакант). Покрыты оболочкой из оксида кальция. Инвазионны для животных и человека.'],
              ['Личинка (цист)', 'В теле хозяина развивается в ларвальный пузырь — многокамерную (альвеолярную) кисту. Отличительная черта: внутри кисты много мелких дочерних пузырьков.'],
              ['Окраска', 'При окраске по Романовскому—Гимзе: тёмно-фиолетовые тельца. При флюоресцентной микроскопии видны крючья онкосферы.'],
            ]}
          ]
        }
      },
      {
        id: 'culture',
        num: '03',
        title: 'Культуральные Свойства и Экология',
        subtitle: 'Ecological Niche',
        content: {
          type: 'mixed',
          items: [
            { type: 'callout', cls: 'callout-danger', icon: '🐕', text: 'Ключевой момент: взрослая форма Echinococcus granulosus паразитирует в тонком кишечнике окончательного хозяина (собаки). На этом этапе паразит НЕ вызывает заболевания у хищников, но является источником инфекции для промежуточных хозяев.' },
            { type: 'props', rows: [
              ['В кишечнике хищника', 'Взрослая форма живёт в тонком кишечнике 5–20 месяцев. Животное может быть инфекционным 2–3 месяца.'],
              ['Во внешней среде', 'Яйца устойчивы: сохраняют жизнеспособность при низких температурах. В окружающей среде выживают 3–6 месяцев.'],
              ['Температурный режим', 'Оптимальная T для развития в теле промежуточного хозяина — 37 °C. Яйца чувствительны к высыханию.'],
              ['В теле промежуточного хозяина', 'После попадания онкосферы в кровь развитие кисты занимает месяцы–годы. Киста растёт медленно (0,5–30 мм/год в зависимости от локализации и иммунного статуса).'],
              ['Локализация кист', 'Печень (70%), лёгкие (20%), почки, селезёнка, мозг, кости, мышцы (редко). В печени киста обычно одиночная и крупная; в лёгких часто множественные.'],
            ]},
          ]
        }
      },
      {
        id: 'resistance',
        num: '04',
        title: 'Резистентность и Инактивация',
        subtitle: 'Environmental Resistance',
        content: {
          type: 'props',
          rows: [
            ['Во внешней среде', 'Яйца очень устойчивы к физическим и химическим факторам. Выживают при −40 °C (месяцы), при высокой влажности (годы в почве).'],
            ['Кипячение', 'Яйца погибают при 60 °C за 30 сек; при 100 °C — немедленно.'],
            ['Дезинфектанты', 'Чувствительны к 5% раствору креозота, формалину, хлорамину. Низкая концентрация дезинфектантов неэффективна.'],
            ['Высыхание', 'В высушенном состоянии яйца могут пережить несколько месяцев, но при полном высыхании погибают за дни–недели.'],
            ['Кислота / Щелочь', 'pH < 3 и > 10 убивают яйца за минуты.'],
            ['В теле хозяина (киста)', 'Киста часто инкапсулируется фиброзной оболочкой. Содержимое кисты стерильно, защищено от иммунной системы. Может оставаться годами.'],
          ]
        }
      },
      {
        id: 'pathogenicity',
        num: '05',
        title: 'Факторы Патогенности',
        subtitle: 'Virulence Factors',
        content: {
          type: 'mixed',
          items: [
            { type: 'callout', cls: 'callout-accent', icon: '💊', text: 'Патогенность Echinococcus granulosus связана не с токсинами, а с механическим воздействием растущей кисты: сдавление соседних органов, нарушение кровоснабжения, риск разрыва и аллергической реакции.' },
            { type: 'props', rows: [
              ['Рост кисты', 'Киста растёт в зависимости от локализации и иммунного ответа хозяина. В печени медленнее (1–5 см/год), в лёгких быстрее. Может достичь размера теннисного мяча и более.'],
              ['Сдавление органов', 'Киста вытесняет, сдавливает и деформирует окружающие ткани. В печени может вызвать обструкцию жёлчных протоков.'],
              ['Дочерние пузырьки', 'Внутри материнской кисты развиваются дочерние пузырьки (с протосколексами). Если киста разрывается, возможна диссеминация.'],
              ['Протосколекс', 'Форма паразита внутри кисты, способная развиться во взрослого паразита при попадании в кишечник хищника.'],
              ['Антигены кисты', 'Поверхностные антигены кисты вызывают иммунный ответ (образование антител). При разрыве кисты возможна анафилаксия.'],
              ['Вторичная инфекция', 'Нередко происходит бактериальная инфекция содержимого кисты → формирование гнойника.'],
            ]},
          ]
        }
      },
      {
        id: 'pathogenesis',
        num: '06',
        title: 'Патогенез и Клиника',
        subtitle: 'Pathogenesis & Clinical Picture',
        content: {
          type: 'mixed',
          items: [
            { type: 'prose', paragraphs: [
              '<strong>Инфекция человека:</strong> Заражение происходит при проглатывании яиц Echinococcus вместе с загрязнённой пищей, водой или в результате прямого контакта с инвазированными животными (собаками). После проникновения онкосферы через стенку тонкого кишечника → гематогенная диссеминация в печень и лёгкие.',
              '<strong>Развитие кисты:</strong> На месте фиксации личинки начинается образование кисты. Это происходит в течение недель–месяцев. Киста растёт медленно, часто без явных клинических проявлений. Человек может не знать о заболевании годами, пока киста не достигнет больших размеров или не вызовет механическое воздействие.',
              '<strong>Клинические симптомы зависят от локализации:</strong> Киста печени (70%) → боль в правом подреберье, гепатомегалия, обструкция жёлчных протоков. Киста лёгких (20%) → кашель, одышка, боль при дыхании, возможно кровохарканье. Редкие локализации (мозг, кости) → неврологические симптомы, патологические переломы.',
              '<strong>Осложнения:</strong> Разрыв кисты (спонтанный или травматический) → высвобождение протосколексов и содержимого → анафилактический шок, диссеминация паразита, перитонит. Вторичная инфекция кисты → формирование абсцесса. Обструкция протоков → механическая желтуха (при локализации в печени).',
            ]},
          ]
        }
      },
      {
        id: 'clinic',
        num: '07',
        title: 'Клиника по Органам',
        subtitle: 'Clinical Manifestations',
        content: {
          type: 'props',
          rows: [
            ['Печень (70% случаев)', 'Боль в правом подреберье или эпигастрии (иррадиирует в спину). Гепатомегалия. Пальпируемое образование. При крупной кисте — признаки сдавления: желтуха, холелитиаз. Возможно пальпируемое «дрожание» при ощупывании.'],
            ['Лёгкие (20%)', 'Кашель (обычно сухой). Одышка при физической нагрузке. Боль при дыхании в области поражения. Кровохарканье при прорыве кисты в бронх.'],
            ['Почки / ЖКТ', 'Боль в боку (при поражении почки). Гематурия (редко). Непроходимость кишечника (при кисте брюшины).'],
            ['Мозг / ЦНС', 'Головная боль, повышение внутричерепного давления, неврологический дефицит, судороги (при эхинококкозе мозга).'],
            ['Кости', 'Боль, патологические переломы, свищи (редко).'],
            ['Скрытое течение', 'Часто киста обнаруживается случайно при УЗИ или КТ, проведённых по другим показаниям. Бессимптомное течение может длиться годы.'],
          ]
        }
      },
      {
        id: 'diagnostics',
        num: '08',
        title: 'Диагностика',
        subtitle: 'Laboratory Diagnostics',
        content: {
          type: 'mixed',
          items: [
            { type: 'props', rows: [
              ['УЗИ / КТ / МРТ', 'Методы выбора. УЗИ показывает кисту как гипоэхогенное или анэхогенное образование, часто многокамерное. КТ и МРТ — точны для определения размера и локализации. Позволяют дифференцировать от других образований.'],
              ['Рентгенография', 'При лёгочной локализации: круглое, чётко контурированное образование (могут быть видны дочерние кисты). При костной локализации: деструктивные изменения.'],
              ['Серологические тесты', 'Непрямая гемагглютинация (РПГА), ИФА (IgG к антигенам Echinococcus). Чувствительность зависит от локализации: в печени ~90%, в лёгких ~70%. Могут быть отрицательны при неосложнённых кистах.'],
              ['Внутрикожная проба (кожная реакция Каскони)', 'Вводят антиген эхинококка. Положительная реакция (папула >5 мм через 15 мин) указывает на сенсибилизацию. Менее специфична, используется редко.'],
              ['Анализ мокроты / рвотных масс', 'При прорыве кисты в бронх или ЖКТ — обнаружение крючьев онкосферы и элементов кисты в нативном препарате.'],
              ['ДНК-диагностика (ПЦР)', 'Обнаружение ДНК паразита в сыворотке крови или спинномозговой жидкости (при кисте мозга). Высокая специфичность.'],
            ]},
            { type: 'callout', cls: 'callout-primary', icon: '🔍', text: 'Дифференциальная диагностика: киста печени от пиогенного абсцесса (УЗИ, КТ, клинический контекст), от гемангиомы (КТ с контрастом), от аденокарциномы.' },
          ]
        }
      },
      {
        id: 'treatment',
        num: '09',
        title: 'Лечение и Профилактика',
        subtitle: 'Treatment & Prevention',
        content: {
          type: 'mixed',
          items: [
            { type: 'table', headers: ['Подход', 'Метод', 'Показания'], rows: [
              ['Хирургический', 'Экстирпация (удаление) кисты, перицистэктомия (удаление оболочки)', 'Крупные, осложнённые кисты, опасные локализации'],
              ['Чрескожный', 'PAIR (Puncture, Aspiration, Injection, Re-aspiration) + альбендазол', 'Простые, средних размеров кисты, недоступные хирургически'],
              ['Медикаментозный', 'Альбендазол 10–15 мг/кг/сут × 3 месяца или более', 'Неоперабельные, множественные, рецидивирующие кисты'],
              ['Наблюдение', 'УЗИ каждые 6–12 мес, без активного лечения', 'Маленькие неактивные кисты без симптомов'],
            ]},
            { type: 'callout', cls: 'callout-accent', icon: '⚠️', text: 'ВАЖНО: Прямой прорыв кисты (при неосторожной пункции или спонтанный) опасен анафилактическим шоком. При хирургии кисту окружают марлевыми салфетками, смоченными спиртом или физраствором, и аспирируют содержимое с предосторожностями.' },
            { type: 'list', items: [
              'Альбендазол: 400 мг × 2 раза в сутки (для взрослых) × 3 месяца. Возможны побочные эффекты (гепатотоксичность, подавление костного мозга). Требуется мониторинг печёночных ферментов.',
              'Мебендазол: альтернатива альбендазолу (менее эффективен для Echinococcus, но иногда используется).',
              'Профилактика: соблюдение гигиены (мытьё рук после контакта с собаками), тепловая обработка продуктов питания, санитарный контроль мяса, лечение собак и животных.',
              'Регулярная дегельминтизация собак в эндемичных зонах (праксиквантел, фенбендазол).',
              'Санитарное просвещение населения в эндемичных регионах.',
            ]},
          ]
        }
      },
    ]
  }
};

/* ──────────────────────────────────────────────────────────────
   STATE
   ────────────────────────────────────────────────────────────── */
let currentMicrobe = null;

/* ──────────────────────────────────────────────────────────────
   HELPERS: Content Renderers
   ────────────────────────────────────────────────────────────── */

function renderProps(rows) {
  return rows.map(([key, val]) => `
    <div class="prop-row">
      <div class="prop-key">${key}</div>
      <div class="prop-val">${val}</div>
    </div>
  `).join('');
}

function renderCallout(cls, icon, text) {
  return `<div class="callout ${cls}"><span class="callout-icon">${icon}</span><span>${text}</span></div>`;
}

function renderProse(paragraphs) {
  return `<div class="info-prose">${paragraphs.map(p => `<p>${p}</p>`).join('')}</div>`;
}

function renderList(items) {
  return `<ul class="detail-list">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
}

function renderTable(headers, rows) {
  const ths = headers.map(h => `<th>${h}</th>`).join('');
  const trs = rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('');
  return `<div style="overflow-x:auto"><table class="drug-table"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
}

function renderContent(content) {
  if (content.type === 'props') {
    return `<div class="section-body">${renderProps(content.rows)}</div>`;
  }
  if (content.type === 'mixed') {
    let html = '';
    for (const item of content.items) {
      if (item.type === 'props')    html += `<div class="section-body">${renderProps(item.rows)}</div>`;
      if (item.type === 'callout')  html += renderCallout(item.cls, item.icon, item.text);
      if (item.type === 'prose')    html += `<div class="section-body">${renderProse(item.paragraphs)}</div>`;
      if (item.type === 'list')     html += `<div class="section-body">${renderList(item.items)}</div>`;
      if (item.type === 'table')    html += `<div class="section-body">${renderTable(item.headers, item.rows)}</div>`;
    }
    return html;
  }
  return '';
}

/* ──────────────────────────────────────────────────────────────
   RENDER DETAIL PAGE
   ────────────────────────────────────────────────────────────── */

function renderDetailPage(microbeId) {
  const m = MICROBES[microbeId];
  if (!m) return;
  currentMicrobe = m;

  /* --- Header --- */
  document.getElementById('detail-breadcrumb').textContent =
    `${m.taxonomy.find(r => r[0] === 'Семейство')?.[1] ?? ''} → ${m.latinName}`;

  /* --- Hero text --- */
  document.getElementById('detail-taxon').textContent = m.taxon;
  const badgeEl = document.getElementById('detail-badge');
  badgeEl.textContent = m.badge.text;
  badgeEl.className = `danger-badge-large ${m.badge.cls}`;
  document.getElementById('detail-name').textContent = m.latinName;
  document.getElementById('detail-summary').textContent = m.summary;

  /* --- 3D model viewer --- */
  const mv = document.getElementById('model-viewer-instance');
  const modelPath = `assets/models/${m.modelFile}`;
  mv.setAttribute('src', modelPath);
  mv.setAttribute('alt', `3D модель ${m.latinName}`);

  document.getElementById('vinfo-size').textContent = m.modelScale;
  document.getElementById('vinfo-file').textContent = m.modelFile;
  document.getElementById('glb-filename').textContent = m.modelFile;

  /* Placeholder SVG */
  document.getElementById('placeholder-3d-content').innerHTML = `
    ${m.placeholderSVG}
    <h3>${m.latinName}</h3>
    <p>Разместите <strong>${m.modelFile}</strong><br/>в папке <code>assets/models/</code></p>
  `;

  /* Handle model load vs placeholder */
  const overlay = document.getElementById('model-placeholder');
  mv.addEventListener('load', () => { overlay.style.display = 'none'; }, { once: true });
  mv.addEventListener('error', () => { overlay.style.display = 'flex'; }, { once: true });
  overlay.style.display = 'flex'; /* default: show placeholder until model loads */

  /* --- Taxonomy card --- */
  const taxRows = m.taxonomy.map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('');
  document.getElementById('taxonomy-card').innerHTML = `
    <div class="taxonomy-title">Систематика</div>
    <table class="taxonomy-table"><tbody>${taxRows}</tbody></table>
  `;

  /* --- Tabs & Sections --- */
  const tabsContainer = document.getElementById('section-tabs');
  const sectionsContainer = document.getElementById('sections-container');
  tabsContainer.innerHTML = '';
  sectionsContainer.innerHTML = '';

  m.sections.forEach((sec, idx) => {
    /* Tab */
    const tab = document.createElement('button');
    tab.className = 'tab-btn' + (idx === 0 ? ' active' : '');
    tab.textContent = sec.title;
    tab.dataset.target = sec.id;
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(`sec-${sec.id}`);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    tabsContainer.appendChild(tab);

    /* Section */
    const article = document.createElement('article');
    article.className = 'content-section';
    article.id = `sec-${sec.id}`;
    article.innerHTML = `
      <div class="section-heading">
        <span class="section-num">${sec.num}</span>
        <h2 class="section-title">${sec.title} <span class="section-subtitle">${sec.subtitle}</span></h2>
      </div>
      ${renderContent(sec.content)}
    `;
    sectionsContainer.appendChild(article);
  });

  /* Intersection observer to highlight active tab */
  setupTabObserver();
}

function setupTabObserver() {
  const sections = document.querySelectorAll('.content-section');
  const tabs = document.querySelectorAll('.tab-btn');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id.replace('sec-', '');
        tabs.forEach(t => {
          t.classList.toggle('active', t.dataset.target === id);
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ──────────────────────────────────────────────────────────────
   PAGE TRANSITIONS
   ────────────────────────────────────────────────────────────── */

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });
  const target = document.getElementById(pageId);
  /* Small delay triggers CSS transition */
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      target.classList.add('active');
      window.scrollTo({ top: 0 });
    });
  });
}

function openMicrobeDetail(microbeId) {
  renderDetailPage(microbeId);
  showPage('detail-page');
}

function goBack() {
  showPage('landing-page');
  currentMicrobe = null;
}

/* ──────────────────────────────────────────────────────────────
   MODEL-VIEWER CONTROLS
   ────────────────────────────────────────────────────────────── */

function initViewerControls() {
  document.querySelectorAll('.vctrl-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.vctrl-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mv = document.getElementById('model-viewer-instance');
      const env = btn.dataset.env;
      if (env === 'lab') {
        mv.setAttribute('environment-image', 'neutral');
        mv.setAttribute('exposure', '1.1');
      } else {
        mv.setAttribute('environment-image', 'legacy');
        mv.setAttribute('exposure', '0.9');
      }
    });
  });
}

/* ──────────────────────────────────────────────────────────────
   EVENT LISTENERS
   ────────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  /* Microbe card clicks */
  document.querySelectorAll('.microbe-card[data-id]').forEach(card => {
    card.addEventListener('click', () => openMicrobeDetail(card.dataset.id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openMicrobeDetail(card.dataset.id);
      }
    });
  });

  /* Back button */
  document.getElementById('back-btn').addEventListener('click', goBack);

  /* Model viewer controls */
  initViewerControls();

  /* Initial page fade-in */
  showPage('landing-page');
});

/* Browser back/forward support */
window.addEventListener('popstate', () => {
  if (currentMicrobe) goBack();
});
