import React, { useState, FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi'

import './styles.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import TeacherItem, { Teachear} from '../../components/TeacherItem/TeacherItem';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';

import './styles.css'
import api from '../../services/api';

const TeachersList = () => {
   const [subject, setSubject] = useState('');
   const [week_day, setWeekDay] = useState('');
   const [time, setTime] = useState('');

   const [teacherList, setTeacherList] = useState([])

   const handlerSeacherTeachers = async (e:FormEvent) => {
      e.preventDefault();
      const response = await api.get('/classes', {
         params: {
            subject, week_day, time
         }
      })
      setTeacherList(response.data);
   }
   return(
      <div id="page-teacher-list" className="container">
         <PageHeader title="Estes são os proffys disponíveis.">
            <form id="search-teachers" onSubmit={handlerSeacherTeachers}>
               <Select name="subject" 
                      label="Matéria" 
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      options={[
                        { value: "Artes", label:"Artes" },
                        { value: "Biologia", label:"Biologia" },
                        { value: "Física", label:"Física" },
                     ]}/>
               <Select name="week_day" 
                      label="Dia da Semana"
                      value={week_day}
                      onChange={e => setWeekDay(e.target.value)}
                      options={[
                        { value: "0", label:"Domingo" },
                        { value: "1", label:"Segunda-Feira" },
                        { value: "2", label:"Terça-Feira" },
                        { value: "3", label:"Quarta-Feira" },
                        { value: "4", label:"Quinta-Feira" },
                        { value: "5", label:"Sexta-Feira" },
                        { value: "6", label:"Sábado" },
                     ]}/>
               <Input name="time" 
                      label="Hora" 
                      type="time"
                      value={time}
                      onChange={e => setTime(e.target.value)}/>
               <button type="submit">
                    <FiSearch /> Buscar
               </button>
            </form>
          </PageHeader>

          <main>
             {teacherList.map((teacher: Teachear) => (
                <TeacherItem key={teacher.id} teachear={teacher} />
             ))}
            
          </main>
       </div>
    )
}

export default TeachersList