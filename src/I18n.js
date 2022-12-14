import {createI18n} from "react-router-i18n";

const locales = ["ru", "en"];

const translations = {
    ru: {
        navbar: {
            tab1: 'Главная',
            tab2: 'Кинорежиссёры',
            toggleTitle: 'Русский.\nПросмотр доступных языков'
        },
        home: {
                title: 'Главная',
                caption: 'Кинорежиссёры Беларуси',
                description: 'Данный сайт содержит основную информацию о кинорежиссерах Беларуси. На этой странице размещен блок “Деятель дня” и информация о разработчиках сайта. На персональной странице кинорежиссера предоставлена подробная информация: фотогалерея, биография, видео, место его основной деятельности на карте.',
                person: {
                    title: 'Деятель дня',
                    btn: 'Подробнее'
                },
                devsTitle: 'Разработчики',
                name1: 'Денисова Екатерина',
                name2: 'Харлап Диана',
                name3: 'Харитоненко Денис',
            },
        Directors: {
            title: 'Кинорежиссёры',
            placeholder: 'Поиск кинорежиссёра'
        },
        person: {
            month1: 'января',
            month2: 'февраля',
            month3: 'марта',
            month4: 'апреля',
            month5: 'мая',
            month6: 'июня',
            month7: 'июля',
            month8: 'августа',
            month9: 'сентября',
            month10: 'октября',
            month11: 'ноября',
            month12: 'декабря',
            birthdateTitle: 'Дата рождения',
            dateOfDeathTitle: 'Дата смерти',
            videoTitle: 'Видео об деятеле, или о его работах, или о истории его времени.',
            mapLang: 'ru_RU',
            btnTopTitle: 'Наверх'
        },
        persons: {
            moroz:  {
                surname: 'Мороз',
                name: 'Владимир',
                patronymic: 'Викентьевич',
                description: 'Закончил архитектурный факультет Белорусского политехнического института (1975) и Литературный институт имени А. М. Горького в Москве (1983), архитектор ПТО «Интеграл», в институте «Минскпроект».В кинематографии с 1981 года: старший редактор Госкино БССР, ведущий редактор студии «Летопись» киностудии «Беларусьфильм» (1988―1998). ',
                img_captions: {
                    avatar: 'Владимир Мороз',
                   img1: 'Мороз Владимир Викентьевич',
                   img2: 'Книга режиссёра "Обречённые на забвенье"',
                   img3: 'Книга режиссёра "Великая звезда"',
                },
                timeline: {
                    
                    text0: 'Автор сценариев 60 документальных фильмов, среди которых «Воссоединение», «К доброму научению…», «Кирилл Туровский», «Размышление у палитры», «Иван Носович», «Филомат Томаш Зан», «Беларусь, праздник православия», «Беларусь — моя родина», «Лев Сапега, канцлер», «Эхо вооруженного восстания», «Братья Ермоловичи», «Воспоминание о Миколе Равенском», «За вратами забытых мелодий», «Крест у дороги».',
                    text1: 'Режиссёр документальных фильмов «И пусть нам вечным памятником будет», «Нефтяная жемчужина Беларуси», «Лазер Алфёрова», «Мифологемы Родина», «Беларусьфильм 2010».',
                }
            },
            dashuk: {
                surname: 'Виктор',
                name: 'Никифорович',
                patronymic: 'Дашук',
                description: 'Окончил факультет журналистики Белорусского государственного университета им. В. И. Ленина в 1960 году. В 1967 году окончил Высшие курсы сценаристов и режиссёров в Москве (отделение кинорежиссуры, мастерская Л.Трауберга).С 1960 года работает на киностудии «Беларусьфильм»: был администратором, ассистентом оператора, ассистентом кинорежиссёра; с 1963 — режиссёр, оператор, сценарист документального и игрового кино.',
                img_captions: {
                    avatar: 'Выступление Виктора Дашука на кинофестивале GoEast в 2014 году',
                    img1: 'Творческий портрет',
                    img2: '27.05.2014',
                    img3: 'Телесериал "У войны не женское лицо"',
            
                },
                timeline: {
                    text0: '“Дом”, “А кукушка куковала…”-режиссер; “Безумству храбрых”, “Давным-давно окончен бой”, “Биография полонеза ля минор”-сценарист.',
                    text1:'«Я из огненной деревни», «Тонежские бабы»-сценарист; «Прощание», «Прощание», «Девяносто шестая осень»-режиссёр.',
                    text2: '«Труба», «Василь Быков. Восхождение», «Чурбанов и другие», «Форс-мажор», «Витебское дело»-сценарист.',
                    text3:'«Сладкий яд любви», «Между Сатаной и Богом», «Ночь длинных ножей», «Репортаж из клетки для кроликов»-сценарист, режиссёр.',
                    text4:'«Декамерон по-белорусски», «Magnum misteria», «Солдат Василий Быков»-режиссер. «Женщина легкого поведения по имени Femida», «Страсть»-сценарист.'
                }
            },
            turov: {
                surname: 'Туров',
                name: 'Виктор',
                patronymic: 'Тимофеевич',
                description: 'Виктор Туров родился 2 в Могилёве (по другим источникам — в деревне Брыли Могилевского района).Отца будущего кинорежиссёра во время войны расстреляли как партизана нацистские оккупанты. Сам Виктор вместе с матерью и сестрой был узником концлагеря под Ахеном.',
                img_captions: {
                    avatar: 'Виктор Тимофеевич Туров',
                    img1: 'Могила народного артиста',
                    img2:'Виктор Тимофеевич Туров',
                    img3:'Фото в процессе работы'
                },
                timeline: {
                    text0:'Режиссёр киностудии «Беларусьфильм» (Минск). Автор ряда документальных фильмов и сюжетов в киножурнале «Советская Беларусь».',
                    text1:'Закончил режиссерский факультет ВГИК',
                    text2:'Вёл режиссёрскую мастерскую в Белорусской академии искусств (профессор).',
                    text3:'1-й секретарь Союза кинематографистов Белорусской ССР. Академик Всемирной академии славянского искусства.'
            
                }
            },
            kudidenko: {
                surname: 'Кудиденко',
                name: 'Адрей',
                patronymic: 'Анатольевич',
                description: 'Андрей Кудиненко учился в Киевском политехническом институте (1988—1992). Окончил Белорусскую государственную академию искусств в 1998 году (мастерская Виктора Турова), затем аспирантуру (2001). Во время учёбы получал стипендию специального фонда Президента Республики Беларусь по поддержке талантливой молодёжи, имеющей творческие достижения. Андрей Кудиненко — один из последних учеников легенды «Беларусьфильма» Виктора Турова. После окончания Академии снимал короткометражные фильмы и рекламу.',
                img_captions: {
                    avatar: 'Андрей Анатольевич'
                },
                timeline: {
                    text0: '“Шуточка”, “Игра в прятки”, “Сны Валентина Виноградова”, “Баран”, “Планета ХХ”-короткометражные фильмы.',
                    text1: '“Битва пяти воинств”, “Оккупация. Мистерии”, “Кадетство”, “Опера-2. Хроники убойного отдела”, “Розыгрыш”, “Масакра”-фильмы.',
                    text2: '“Hard Reboot”, “Хронотопь”, “Фанат”, “В. Виноградов или белорусское кино, которого нет”-фильмы.',
                }
            },
            sablin: {
                surname: 'Саблин',
                name: 'Владимир',
                patronymic: 'Владимирович',
                description: 'Владимир Корш-Саблин родился в Москве в семье книгоиздателя В. М. Саблина.После окончания реального училища, в 1917 году начал творческую деятельность как актёр в театре своего деда по матери, Федора Адамовича Корша — Театре Корша (по семейному преданию, дед, впечатленный успехами внука, разрешил ему соединить обе фамилии).Участник Гражданской войны.Работал в театрах Симферополя, Мелитополя, Казани.В кино пришёл в 1923 году. С 1925 года был помощником, ассистентом режиссёра и актёром киностудии «Госкино» («Совкино») в Москве, с 1926 — актёр и режиссёр (с 1929 года) киностудии «Советская Беларусь» специального управления «Белгоскино» (позже «Беларусьфильм»); снимал комедии, фильмы-драмы, биографические фильмы.',
                img_captions: {
                avatar: 'Антон Прушинский с женой и детьми'
                },
                timeline: {
                    text0:'“В огне рожденная” “Жизнь и учеба кавдивизии” “Из топи болот” “Бумага” “3 штыка” “Стальной путь”-документальные фильмы.',
                    text1:'“Первый взвод” “Золотые огни” “Искатели счастья” “Дочь Родины” “Огненные годы” “Моя любовь” “Белорусские новеллы”-фильмы.',
                    text2:'“Живи, родная Беларусь!” “Освобождение советской Беларуссии” “Новый дом” “Константин заслонов” “Советская Белоруссия”-фильмы.',
                    text3:'“Поют жаоронки” “Кто смеется последним?” “Посеяли девушки лен” “Красные листья” “Первые испытания” “Москва-Генуя” “Запомним этот день” “Крушение империи”-фильмы.'
                  }
            },
            lobach: {
                surname: 'Лобач',
                name: 'Антон',
                patronymic: 'Юрьевич',
                description: 'Белорусский кинорежиссер, клипмейкер, автор музыкальных клипов, документальных фильмов.В настоящее время работает с дизайн-студиями, работает с телевизионными каналами. Автор музыкальных клипов ZigZag, MTV, The Best of Rock, Studio Elemental (fireshow), Open Space, Inside.',
                img_captions: {
                    avatar: 'Лобач Антон'
                    
                },
                timeline: {
                    text0: '«Гродно. Новый свет»',
                    text1: 'Калеты',
                    text2: 'Простые вещи'
                }
            }
        }
    },
    en: {
        navbar: {
            tab1: 'Home',
            tab2: 'Filmmakers',
            toggleTitle: 'English.\nView available languages'
        },
        home: {
                title: 'Home',
                caption: 'Filmmakers of Belarus',
                description: 'This portal contains information about filmmakers in Belarus. On the main page there is a block Person of the day, and information about the developers of the portal. Detailed information is provided on the personal page of the filmmaker: biography, photo gallery, video, place of his main activity on the map.',
                person: {
                    title: 'Person of the day',
                    btn: 'More'
                },
                devsTitle: 'Developers',
                name1: 'Denisova Ekaterina',
                name2: 'Harlap Diana',
                name3: 'Haritonenko Denis',
            },
        Directors:{
            title: "Filmmakers",
            placeholder: "Search for a filmmaker"
        },
        person: {
            month1: 'January',
            month2: 'February',
            month3: 'March',
            month4: 'April',
            month5: 'May',
            month6: 'June',
            month7: 'July',
            month8: 'August',
            month9: 'September',
            month10: 'October',
            month11: 'November',
            month12: 'December',
            birthdateTitle: 'Born',
            dateOfDeathTitle: 'Died',
            videoTitle: 'A video about the person, or about his works, or about the history of his time.',
            mapLang: 'en_RU',
            btnTopTitle: 'On top'
        },
        persons: {
            turov: {
                /* tr */
                surname: 'Turov',
                name: 'Victor',
                patronymic: 'Timofeevich',
                description: 'Victor Turov was born on 2 in Mogilev (according to other sources - in the village of Bryli, Mogilev region). The father of the future film director was shot as a partisan by the Nazi invaders during the war. Victor himself, along with his mother and sister, was a prisoner of a concentration camp near Aachen.',
                img_captions: {
                    avatar: 'Victor Timofeevich Turov',
                    img1: 'The Grave of National Artist',
                    img2:'Victor Timofeevich Turov',
                    img3:'Working'
                },
                timeline: {
                    text0:'Director of the film studio "Belarusfilm" (Minsk). Author of a number of documentaries and stories in the film magazine "Soviet Belarus".',
                    text1:'Graduated from the directing faculty of VGIK',
                    text2:'Led a director\'s workshop at the Belarusian Academy of Arts (professor).',
                    text3:'1st Secretary of the Union of Cinematographers of the BSSR. Academician of the World Academy of Slavic Art.'
                }
            },
            dashuk: {
                /* tr */
                surname: 'Victor',
                name: 'Nikiforovich',
                patronymic: 'Dashuk',
                description: 'Graduated from the journalism faculty of V.I. Lenin Belarusian State University in 1960. In 1967 he graduated from the Higher Courses for Scriptwriters and Directors in Moscow (department of film directing, workshop of L. Trauberg). since 1963 - director, cameraman, screenwriter of documentary and feature films.',
                img_captions: {
                    avatar: 'Viktor Dashuk\'s performance at the GoEast film festival in 2014',
                    img1: 'Portrait',
                    img2: '27.05.2014',
                    img3: 'TV series "War has no woman\'s face"',
            
                },
                timeline: {
                    text0: '“House”, “And the cuckoo cuckooed ...” - director; “To the madness of the brave”, “The battle is over long ago”, “Biography of the Polonaise in A minor” - screenwriter.',
                    text1:'“I am from a fiery village”, “Tonezh women” - screenwriter; "Farewell", "Farewell", "Ninety-sixth Autumn" - director.',
                    text2: '"Pipe", "Vasil Bykov. Climbing”, “Churbanov and others”, “Force majeure”, “Vitebsk affair” - screenwriter.',
                    text3:'"Sweet Poison of Love", "Between Satan and God", "Night of Long Knives", "Report from the Rabbit Cage" - screenwriter, director.',
                    text4:'"Decameron in Belarusian", "Magnum misteria", "Soldier Vasily Bykov" - director. "A woman of easy virtue named Femida", "Passion" - screenwriter.'
                }
            },
            moroz:  {
                /*tr */
                surname: 'Moroz',
                name: 'Vladimir',
                patronymic: 'Vikentievich',
                description: 'Graduated from the Faculty of Architecture of the Belarusian Polytechnic Institute (1975) and the A. M. Gorky Literary Institute in Moscow (1983), the architect of the VET Integral, at the Minskproject Institute. In cinematography since 1981: senior editor of the Goskino of the BSSR, leading editor of the studio "Chronicle" of the film studio "Belarusfilm" (1988-1998).',
                img_captions: {
                    avatar: 'Vladimir Moroz',
                   img1: 'Moroz Vladimir Vikentievich',
                   img2: '"Doomed to Oblivion" Book',
                   img3: '"Grest Star" Book',
                },
                timeline: {
                    
                    text0: 'Scriptwriter for 60 documentaries, including "Reunion", "Towards Good Learning...", "Kirill Turovsky", "Thinking at the Palette", "Ivan Nosovich", "Filomat Tomasz Zan", "Belarus, the Feast of Orthodoxy", "Belarus — my homeland”, “Lev Sapieha, Chancellor”, “Echo of an armed uprising”, “Brothers Yermolovichi”, “Memories of Mikol Ravensky”, “Beyond the gates of forgotten melodies”, “Cross by the road”.',
                    text1: 'Director of documentaries "And let it be an eternal monument to us", "Oil Pearl of Belarus", "Alferov\'s Laser", "Mythologemes Motherland", "Belarusfilm 2010".',
                }
            },
            kudidenko: {
                /*ек */
                surname: 'Kudienko',
                name: 'Andrey',
                patronymic: 'Anatolyevich',
                description: 'Andrey Kudinenko studied at the Kiev Polytechnic Institute (1988-1992). Graduated from the Belarusian State Academy of Arts in 1998 (workshop of Viktor Turov), then postgraduate studies (2001). During his studies, he received a scholarship from the special fund of the President of the Republic of Belarus to support talented youth with creative achievements. Andrei Kudinenko is one of the last students of the Belarusfilm legend Viktor Turov. After graduating from the Academy, he made short films and commercials.',
                img_captions: {
                    avatar: 'Andrey Anatolyevich'
                },
                timeline: {
                    text0: '“Joke”, “Hide and Seek”, “Dreams of Valentin Vinogradov”, “Baran”, “Planet XX” are short films.',
                    text1: '“Battle of the Five Armies”, “Occupation. Mysteries”, “Kadetstvo”, “Opera-2. Chronicles of the homicide department”, “Joke”, “Masacra”-films.',
                    text2: '“Hard Reboot”, “Chronotop”, “Fan”, “V. Vinogradov or the Belarusian cinema that does not exist” - films.',
                }
            },
            sablin: {
                /* tr */
                surname: 'Sablin',
                name: 'Vladimir',
                patronymic: 'Vladimirovich',
                description: 'Vladimir Korsh-Sablin was born in Moscow into the family of the book publisher V. M. Sablin. successes of his grandson, allowed him to combine both names). Member of the Civil War. Worked in the theaters of Simferopol, Melitopol, Kazan. He came to the cinema in 1923. Since 1925, he was an assistant, assistant director and actor of the Goskino (Sovkino) film studio in Moscow, since 1926 - an actor and director (since 1929) of the Soviet Belarus film studio of the Belgoskino special department (later Belarusfilm); directed comedies, drama films, biopics.',
                img_captions: {
                avatar: 'Vladimir Sablin'
                },
                timeline: {
                    text0:'“Born in fire” “Life and studies of the cavalry division” “From the marshes of swamps” “Paper” “3 bayonets” “Steel way”-documentary films.',
                    text1:'“First Platoon” “Golden Fires” “Seekers of Happiness” “Daughter of the Motherland” “Fiery Years” “My Love” “Belarusian Novels” films.',
                    text2:'“Live, dear Belarus!” “Liberation of Soviet Belarus” “New House” “Konstantin Zaslov” “Soviet Belarus” films.',
                    text3:'“Larks sing” “Who has the last laugh?” “Girls sowed flax” “Red leaves” “First trials” “Moscow-Genoa” “Remember this day” “Collapse of the empire” films.'
                  }
            },
            lobach: {
                /* tr */
                surname: 'Lobach',
                name: 'Anton',
                patronymic: 'Yuryevich',
                description: 'Belarusian film director, clip maker, author of music videos, documentaries. Currently working with design studios, working with television channels. Author of music videos ZigZag, MTV, The Best of Rock, Studio Elemental (fireshow), Open Space, Inside.',
                img_captions: {
                    avatar: 'Lobach Anton'
                    
                },
                timeline: {
                    text0: '«Grodno. New World»',
                    text1: 'Calets',
                    text2: 'Simple things'
                }
            }

        }
    }
}

const I18n = createI18n(
    locales,
    translations
);

export default I18n;