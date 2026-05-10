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

  /* ══════════ TREPONEMA PALLIDUM ══════════ */
  treponema: {
    id: 'treponema',
    latinName: 'Treponema pallidum',
    taxon: 'Treponema · Treponemataceae · Штамм Никольса (1912)',
    badge: { text: 'Облигатный паразит', cls: 'warning' },
    modelFile: 'treponema_pallidum.glb',
    modelScale: '6–15 мкм',
    summary: 'Treponema pallidum subsp. pallidum — возбудитель сифилиса, системного венерического заболевания с характерной стадийностью. Не культивируется на искусственных питательных средах. Передаётся преимущественно половым и вертикальным путями. Является антропонозом.',
    taxonomy: [
      ['Домен', 'Bacteria'],
      ['Тип', 'Spirochaetota'],
      ['Класс', 'Spirochaetia'],
      ['Порядок', 'Spirochaetales'],
      ['Семейство', 'Treponemataceae'],
      ['Род', 'Treponema'],
      ['Вид', 'T. pallidum subsp. pallidum'],
    ],
    placeholderSVG: `<svg viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 50 C20 30, 30 70, 40 50 C50 30, 60 70, 70 50 C80 30, 90 70, 100 50 C110 30, 120 70, 130 50 C140 30, 150 70, 160 50 C165 42, 170 46, 172 50"
        stroke="#0d9488" stroke-width="3" stroke-linecap="round" fill="none"/>
      <circle cx="10" cy="50" r="4" fill="#0d9488" opacity="0.6"/>
      <circle cx="172" cy="50" r="4" fill="#0d9488" opacity="0.6"/>
      <text x="90" y="90" text-anchor="middle" fill="#64748b" font-size="9" font-family="serif" font-style="italic">T. pallidum (схема)</text>
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
            ['Домен / Тип', 'Bacteria / Spirochaetota'],
            ['Класс / Порядок', 'Spirochaetia / Spirochaetales'],
            ['Семейство', 'Treponemataceae'],
            ['Род / Вид', 'Treponema / T. pallidum (Schaudinn & Hoffmann, 1905)'],
            ['Подвиды', 'subsp. pallidum (сифилис); subsp. pertenue (фрамбезия); subsp. endemicum (беджель); subsp. carateum (пинта)'],
            ['Ссылочный штамм', 'Штамм Никольса (1912) — поддерживается в яичках кроликов'],
            ['Геном', '~1,14 Мб, одна хромосома; самый маленький геном среди патогенных спирохет'],
          ]
        }
      },
      {
        id: 'morphology',
        num: '02',
        title: 'Морфология',
        subtitle: 'Morphology',
        content: {
          type: 'mixed',
          items: [
            { type: 'props', rows: [
              ['Форма / Размер', 'Тонкая спиральная клетка, диаметр 0,09–0,18 мкм, длина 6–15 мкм. Ширина делает её невидимой в световой микроскоп.'],
              ['Завитки', '8–12 равномерных спиральных завитков с длиной волны 1,0–1,1 мкм и амплитудой 0,2–0,3 мкм. Форма строго сохраняется.'],
              ['Концы клетки', 'Заострённые. Могут иметь цилиндрические выросты.'],
              ['Движение', 'Вращательное и поступательное (как штопор). Осуществляется за счёт осевых нитей (периплазматических жгутиков) — 3–4 нити с каждого конца.'],
              ['Осевые нити', 'Расположены в периплазматическом пространстве. Обеспечивают уникальную подвижность — «штопорообразное» и «змееподобное».'],
              ['Окраска по Граму', 'Практически не окрашивается по Граму (тонкая клеточная стенка, атипичная трёхслойная мембрана; относится к грамотрицательному типу).'],
              ['Окраска по Романовскому–Гимзе', 'Слабо розовая — отсюда название «бледная трепонема» (pallidum — бледный).'],
              ['Серебрение', 'Метод Левадити (импрегнация серебром на срезах тканей) — чёрные нити в бурой ткани. Метод Морозова — для мазков.'],
              ['Темнопольная микроскопия', 'Метод выбора: живая трепонема светится на тёмном фоне, хорошо видны характерные завитки и движение.'],
              ['Споры / Капсула', 'Не образует спор. Тонкая мукополисахаридная капсулоподобная оболочка.'],
            ]}
          ]
        }
      },
      {
        id: 'culture',
        num: '03',
        title: 'Культуральные свойства',
        subtitle: 'Cultural Properties',
        content: {
          type: 'mixed',
          items: [
            { type: 'callout', cls: 'callout-danger', icon: '🚫', text: 'Treponema pallidum subsp. pallidum НЕ РАСТЁТ на искусственных питательных средах in vitro. Это является ключевой особенностью и определяет ограничения диагностики. Не удалось создать ни одной культуры, воспроизводящей биологические свойства in vivo.' },
            { type: 'props', rows: [
              ['Культивирование in vivo', 'Поддерживается внутрияичковым заражением кроликов (штамм Никольса). Размножение медленное: время удвоения ~30–33 часа.'],
              ['Культивирование in vitro', 'Ограниченная репликация: в клеточных культурах (фибробласты Sf1Ep + кролик). Не пригодно для диагностики или наработки антигенов.'],
              ['Температурный оптимум', '33–37 °C. Чувствительна к гипертермии (39–40 °C — гибель).'],
              ['Атмосфера', 'Микроаэрофил: предпочитает низкое парциальное давление O₂ (~1–5%).'],
              ['Рост на среде Кейпс–Томчека', 'Частичная культивация in vitro с ограниченным числом делений (~3–6 дней). Нежизнеспособна вне хозяина.'],
            ]},
          ]
        }
      },
      {
        id: 'resistance',
        num: '04',
        title: 'Резистентность',
        subtitle: 'Environmental Resistance',
        content: {
          type: 'props',
          rows: [
            ['Вне организма', 'Крайне нестойка. Вне хозяина погибает в течение минут–часов.'],
            ['Высыхание', 'Быстрая гибель (минуты) при высыхании.'],
            ['Температура', 'Погибает при 48–55 °C за 15–30 мин; при 60 °C — за 10 мин. Кипячение — немедленно.'],
            ['Низкие температуры', 'Сохраняется при −70 °C (в глицерине) в течение лет. Консервированная кровь — инфекционна до 5 суток при +4 °C.'],
            ['Дезинфектанты', 'Инактивируется 0,5% р-ром фенола, 0,1% HgCl₂, 70% этанолом, хлорамином. Высокочувствительна.'],
            ['Антибиотики', 'Абсолютно чувствительна к пенициллину (за >70 лет применения устойчивость не зарегистрирована). Чувствительна к тетрациклинам, макролидам (кроме макролид-устойчивых штаммов с мутацией A2058G в 23S рРНК).'],
            ['Мышьяк / Висмут (ист.)','Препараты Эрлиха (сальварсан, 606) — первая специфическая химиотерапия сифилиса (до пенициллина)'],
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
            { type: 'callout', cls: 'callout-accent', icon: '🔬', text: 'Геном T. pallidum крайне редуцирован (~1,14 Мб). Значительная часть генов кодирует мембранные липопротеины. Классические токсины не обнаружены; патогенность определяется иными механизмами.' },
            { type: 'props', rows: [
              ['Мембранные липопротеины (Тр-Ag)', 'TpN47, TpN44.5, TpN17, TpN15 — поверхностные липопротеины, стимулируют иммунный ответ, активируют макрофаги через TLR2.'],
              ['Наружные мембранные белки (OMP)', 'Семейство Tprk (Treponema pallidum repeat): высокая антигенная вариабельность → уклонение от иммунного ответа.'],
              ['Гиалуронидаза', 'Разрушает гиалуроновую кислоту соединительной ткани → инвазия в ткани.'],
              ['Фибронектин-связывающий белок', 'Адгезия к эндотелию и клеткам хозяина.'],
              ['Мукополисахаридный чехол', 'Защита от фагоцитоза; маскировка антигенов; «антигенный камуфляж» — адсорбция белков хозяина.'],
              ['Липополисахарид (ЛПС-подобный)', 'Слабая эндотоксическая активность (значительно ниже, чем у классических грамотрицательных).'],
              ['Тропизм', 'Тропизм к коже, слизистым, нервной ткани, эндотелию, костям, аорте — определяет полиорганность поражений.'],
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
              '<strong>Первичный сифилис.</strong> Трепонема проникает через микроповреждения кожи или слизистых. Прикрепляется к клеткам хозяина. В месте внедрения формируется <em>твёрдый шанкр</em> — безболезненная эрозия/язва с плотным инфильтратом (тканевой ответ: периваскулярная инфильтрация лимфоцитами и плазматическими клетками → облитерирующий эндартериит). Регионарный лимфаденит — «бубон».',
              '<strong>Вторичный сифилис.</strong> Трепонемы диссеминируют лимфогенно и гематогенно → бактериемия. Генерализованное поражение: сыпь (розеолы, папулы, пустулы), алопеция, кондиломы лата. Механизм сыпи — иммунокомплексный васкулит. Высокая инфекционность (трепонемы в высыпаниях).',
              '<strong>Скрытый сифилис.</strong> Бессимптомный период. Трепонемы сохраняются в лимфоузлах, ЦНС, стекловидном теле. Иммунный ответ неэффективен из-за антигенной вариабельности Tprk.',
              '<strong>Третичный сифилис.</strong> Через 3–30 лет. Формирование <em>гумм</em> (гранулём с центральным казеозным некрозом) в костях, коже, печени. <em>Нейросифилис</em>: прогрессирующий паренхиматозный менингит, tabes dorsalis, паренхиматозный нейросифилис (dementia paralytica). <em>Кардиоваскулярный сифилис</em>: аортит → аневризма аорты → недостаточность аортального клапана.',
              '<strong>Врождённый сифилис.</strong> Трансплацентарная передача (с 16–18 нед беременности): поражение плода → выкидыш, мертворождение, ранний и поздний врождённый сифилис (триада Гетчинсона: кератит, глухота, «зубы Гетчинсона»).',
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
          type: 'props',
          rows: [
            ['Инкубация', '10–90 дней (в среднем 21 день). Зависит от инфицирующей дозы и локализации.'],
            ['Первичный (I)', 'Твёрдый шанкр — единичная, безболезненная, чистая язва с ровными краями и плотным дном. Регионарный безболезненный лимфаденит. Длительность 3–6 нед.'],
            ['Вторичный (II)', 'Генерализованная сыпь: розеолы (розовые пятна), папулы (медно-красные, не зудящие), пустулы. Широкие кондиломы (condylomata lata). «Ожерелье Венеры». Аргентинская аlopecia. Поражение слизистых (ангина, мукозные бляшки).'],
            ['Скрытый', 'Ранний скрытый (<2 лет) — заразен. Поздний скрытый (>2 лет) — незаразен. Только серопозитивность.'],
            ['Третичный (III)', 'Гуммозный: мягкотканевые/костные гуммы. Сердечно-сосудистый: аортит, аневризма. Нейросифилис: менингит, tabes dorsalis, прогрессивный паралич.'],
            ['Нейросифилис', 'Ранний: асептический менингит. Поздний: tabes dorsalis (атаксия, стреляющие боли, зрачок Аргайлла Робертсона), dementia paralytica.'],
            ['Врождённый', 'Ранний (<2 лет): пузырчатка, ринит («сап»), остеохондрит. Поздний (>2 лет): триада Гетчинсона, саблевидные голени, «седловидный нос».'],
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
              ['Материал', 'Отделяемое шанкра, пунктат лимфоузлов, кровь (серология), СМЖ (нейросифилис)'],
              ['Темнопольная микроскопия (прямая)', 'Выявление живых трепонем в отделяемом шанкра. Применяется только для первичного сифилиса. Специфичность — 97%, чувствительность — 70–80%. Немедленное исследование свежего материала.'],
              ['ПЦР', 'Обнаружение ДНК T. pallidum (ген polA, 47-kDa). Оптимально для шанкра, СМЖ, биоптатов. Специфичность >99%.'],
              ['Нетрепонемные тесты (скрининг)', 'РПР (Rapid Plasma Reagin), VDRL — выявление реагиновых антител к кардиолипин-лецитин-холестерину. Экспресс-формат. Возможны ложноположительные результаты (беременность, аутоиммунные, ТБ, инфекционный мононуклеоз).'],
              ['Трепонемные тесты (подтверждение)', 'РПГА (TPHA) — реакция пассивной гемагглютинации. ИФА (EIA/ELISA) — антитела к TpN47. ИХА (иммунохроматографический). РИБТ (реакция иммобилизации трепонем Нельсона–Мейер) — классический подтверждающий тест, высокая специфичность.'],
              ['FTA-ABS (РИФ-абс)', 'Иммунофлуоресцентный анализ. Высокочувствительный подтверждающий тест. Первый положительный тест при первичном сифилисе (через 2–3 нед).'],
              ['Нейросифилис', 'VDRL в СМЖ — специфичен; FTA-ABS-СМЖ — чувствителен. Плеоцитоз, повышение белка в СМЖ.'],
            ]},
            { type: 'callout', cls: 'callout-primary', icon: '🧪', text: 'Алгоритм диагностики: скрининг нетрепонемным тестом (РПР/VDRL) → при + результате подтверждение трепонемным тестом (РПГА/ИФА/РИБТ). Оба теста остаются + пожизненно даже после лечения (РПГА, FTA-ABS). Количественный VDRL/РПР используется для мониторинга эффективности терапии.' },
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
            { type: 'table', headers: ['Стадия / Форма', 'Препарат выбора', 'При аллергии на пенициллин'], rows: [
              ['Первичный, вторичный, ранний скрытый', 'Бензатин-бензилпенициллин G 2,4 млн ЕД в/м однократно', 'Доксициклин 100 мг 2×/сут × 14 дней'],
              ['Поздний скрытый, третичный', 'Бензатин-бензилпенициллин G 2,4 млн ЕД в/м 1×/нед × 3 нед', 'Доксициклин 100 мг 2×/сут × 28 дней'],
              ['Нейросифилис', 'Бензилпенициллин 18–24 млн ЕД/сут в/в × 14 дней', 'Цефтриаксон 2 г в/в × 14 дней'],
              ['Врождённый сифилис', 'Прокаин-пенициллин G 50 000 ЕД/кг/сут в/м × 10 дней', 'Консультация инфекциониста'],
            ]},
            { type: 'callout', cls: 'callout-accent', icon: '✅', text: 'Реакция Яриша–Герксгеймера: через 2–8 ч после первой дозы пенициллина — лихорадка, озноб, усиление сыпи. Не является аллергией! Связана с массивным высвобождением спирохетных антигенов → системный воспалительный ответ. Лечение симптоматическое.' },
            { type: 'list', items: [
              'Специфическая вакцина против сифилиса отсутствует',
              'Барьерная контрацепция (презерватив) снижает, но не исключает риск передачи',
              'Обязательное обследование на сифилис: беременные (3-кратно), доноры крови, медперсонал',
              'Лечение половых партнёров (контакт в течение 90 дней при первичном сифилисе)',
              'Обязательная регистрация случаев сифилиса согласно приказу МЗ РФ №291н',
              'Мониторинг эффективности лечения: VDRL/РПР через 3, 6, 12, 24 мес (снижение титра в 4 раза = выздоровление)',
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
