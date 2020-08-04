import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader/PageHeader';

import './styles.css'
import TeacherItem from '../../components/TeacherItem/TeacherItem';

const TeachersList = () => {
    return(
       <div id="page-teacher-list" className="container">
          <PageHeader title="Esses são os professores disponíveis">
              <form id="search-teachers">
                  <div className="input-block">
                      <label htmlFor="subject">Matérias:</label>
                      <input type="text" id="subject"/>
                  </div>
                  
                  <div className="input-block">
                      <label htmlFor="week_day">Dia da Semana:</label>
                      <input type="text" id="week_day"/>
                  </div>
                  
                  <div className="input-block">
                      <label htmlFor="time">Matérias:</label>
                      <input type="text" id="time"/>
                  </div>
              </form>
          </PageHeader>

          <main>
            <TeacherItem />
          </main>
       </div>
    )
}

export default TeachersList