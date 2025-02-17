import React from 'react';
import { useState } from 'react';

import ButtonShow from '../comps/ButtonShow';

import cssMain from '../../styles/views/global/main.css';
import cssSections from '../../styles/views/local/sections.css';

const { MainContainer } = cssMain;
const { AboutSection } = cssSections;

const AboutPage = () => {

    const [showDescription, setShowDescription] = useState({
        technologies: true,
        techSpecific: {
            general: false,
            list: false,
            game: false,
            about: false
        }
    });

    const showTechnologies = () => {
        setShowDescription({...showDescription, technologies: !showDescription.technologies})
    }

    const showGeneralSpecific = () => {
        setShowDescription({...showDescription, techSpecific: {
            ...showDescription.techSpecific, 
            general: !showDescription.techSpecific.general
        }})
    }

    const showListPageSpecific = () => {
        setShowDescription({...showDescription, techSpecific: {
            ...showDescription.techSpecific, 
            list: !showDescription.techSpecific.list
        }})
    }

    const showGamePageSpecific = () => {
        setShowDescription({...showDescription, techSpecific: {
            ...showDescription.techSpecific, 
            game: !showDescription.techSpecific.game
        }})
    }

    const showAboutPageSpecific = () => {
        setShowDescription({...showDescription, techSpecific: {
            ...showDescription.techSpecific, 
            about: !showDescription.techSpecific.about
        }})
    }

    return (       
    <MainContainer>
        <AboutSection>
            <h1>О проекте</h1>
            
            <p>Этот проект — учебный, он предназначен для демонстрации знаний, навыков и умений автора в разработке веб-приложения, использующего API.</p>
            <p>Ниже приведены общие технические характеристики проекта и реализация выполнения технического задания, разработанного самим автором. :)</p>

            <div>
                <h2>Технологии</h2>
                <ButtonShow action={showTechnologies} show={showDescription.technologies} />
                {showDescription.technologies && (
                <div>
                    <ul>
                        <li>Пакетный менеджер - <span>npm</span></li>
                        <li>Инструмент сборки - <span>Vite</span></li>
                        <li>Интерфейс - <span>React</span></li>
                        <li>Маршрутизатор - <span>React Router</span></li>
                        <li>Менеджер состояний - <span>Redux Toolkit</span></li>
                        <li>Библиотека компонентов - <span>Ant Design</span></li>
                        <li>Стилизация - <span>Styled components</span></li>
                    </ul>                    
                    <h3>Локальный запуск:</h3>
                    <ul>
                        <li>Исходный код -
                            <a href='https://github.com/RomMcL/React-API_FreeToPlayGames' target='_blank'> GitHub</a>
                        </li>
                        <li>Команда запуска - <span>npm start</span></li>
                        <li>Используемый localhost - <span>3001</span></li>
                    </ul>                    
                </div>
                )}
            </div>
            <h2>Реализация технического задания</h2>
            <div>
                <h3>Общие задачи проекта</h3>
                <ButtonShow action={showGeneralSpecific} show={showDescription.techSpecific.general} />
                {showDescription.techSpecific.general && (
                <div>
                    <ul>
                        <li>Использован Free-To-Play Games API.
                            <ul>
                                <li>Вызовы API и обработка данных от него производится напрямую с фронтенда.</li>
                            </ul>
                        </li>
                        <li>Адаптивный интерфейс (desktop, mobile).</li>
                        <li>Приложение разработано с помощью библиотек React и Redux Toolkit.</li>
                        <li>Роутинг (навигация без перезагрузки веб-страницы).</li>
                        <li>Использована UI библиотека компонентов.</li>
                        <li>При загрузке данных показывается индикатор загрузки.</li>
                        <li>При ошибках получения данных происходит информирование пользователя.</li>
                        <li>При неудачном запросе происходит три попытки повторного запроса через 5, 10 и 15 секунд соответственно.
                            <ul>
                                <li>При переходе на другую страницу этот процесс прерывается.</li>
                            </ul>
                        </li>
                        <li>После открытия карточки игры, данные о ней сохраняются и доступны при повторном входе в неё (или при перезагрузке страницы) в течении 5 минут без дополнительного запроса к API.
                            <ul>
                                <li>Посещённые карточки меняют свой цвет. Если информация стала неактуальной (прошло 5 минут), карточка восстанавливает свой цвет.</li>
                            </ul>
                        </li>
                        <li>При переходе между страницами запросы, относящиеся к старой странице, прерываются (отменяются), о чём сообщается пользователю.</li>
                        <li>При переходе между страницами позиция скролла сохраняется для главной страницы (список игр) и всегда в нулевой позиции на остальных страницах.</li>
                    </ul>
                </div>
                )}
            </div>
            <div>
                <h3>Главная страница</h3>
                <ButtonShow action={showListPageSpecific} show={showDescription.techSpecific.list} />
                {showDescription.techSpecific.list && (
                <div>
                    <ul>
                        <li>Показывает список игр (карточки)
                            <ul>
                                <li>Возможность фильтрации по платформе и жанру</li>
                                <li>Возможность сортировки по алфавиту (дефолт), дате релиза и популярности</li>
                            </ul>
                        </li>
                        <li>Каждая карточка игры в списке содержит:
                            <ul>
                                <li>постер</li>
                                <li>название игры</li>
                                <li>жанр</li>
                                <li>издатель</li>
                                <li>дата релиза (в российском формате)</li>
                            </ul>
                        </li>
                        <li>При клике на карточку игры происходит переход на страницу игры</li>
                        <li>Пагинация списка игр с возможностью выбрать отображаемое на странице количество карточек</li>
                    </ul>
                </div>
                )}
            </div>
            <div>
                <h3>Страница выбранной игры</h3>
                <ButtonShow action={showGamePageSpecific} show={showDescription.techSpecific.game} />
                {showDescription.techSpecific.game && (
                <div>
                    <ul>
                        <li>Содержит:
                            <ul>
                                <li>постер</li>
                                <li>название игры</li>
                                <li>жанр</li>
                                <li>издатель</li>
                                <li>разработчик</li>
                                <li>дата релиза (в российском формате)</li>
                                <li>системные требования</li>
                                <li>карусель скриншотов</li>
                            </ul>
                        </li>
                        <li>Кнопка возврата к списку игр (с сохранением фильтрации, сортировки и пагинации)</li>
                        <li>Возврат к списку игр происходит без нового обращения к API</li>
                    </ul>
                </div>
                )}
            </div>
            <div>
                <h3>Страница описания проекта</h3>
                <ButtonShow action={showAboutPageSpecific} show={showDescription.techSpecific.about} />
                {showDescription.techSpecific.about && (
                <div>
                    <ul>
                        <li>Содержит общее техническое описание проекта</li>
                    </ul>
                </div>
                )}
            </div>
        </AboutSection>       
    </MainContainer>
        
    )
}

export default AboutPage;