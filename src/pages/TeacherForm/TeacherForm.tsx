import React, { useState, FormEvent }from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import warningsIcon from '../../assets/images/icons/warning.svg';

import './styles.css'
import Input from '../../components/Input/Input';
import Textarea from '../../components/Textarea/Textarea';
import Select from '../../components/Select/Select';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

const TeacherForm = () => {
    
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] =  useState('');
    const [cost, setCost] =  useState(0);

    const history = useHistory();

    const [scheduleItems, setScheduleItems] = useState( [
        { week_day:0, from: '', to: '0' }
    ])

    const addNewScheduleItem = () => {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '0' }
        ])
    }

    const setScheduleItemValue = (position: number, field:string, value:string) => {
        const updateScheduleItem = scheduleItems.map((scheduleItem, index) => {
            if(position === index){
                return {...scheduleItem, [field]: value}
            }

            return scheduleItem;
        })
        
        setScheduleItems(updateScheduleItem);
    }

    const handleCreateClass = (e: FormEvent) => {
        e.preventDefault();
        api.post('classes',{
            name, avatar, whatsapp, bio, subject, cost, schedule:scheduleItems
        }).then( res => {
            alert('Cadastrado com sucesso.');
            history.push('/');
        }).catch(err=>console.log(err))
    }

    return(
        <div id="page-teacher-form" className="container">
          <PageHeader title= "Incrível que você quer dar aulas."
          description="Primeiro passo é preencher o formulário de inscrição"/>
          <main>
              <form onSubmit={e => handleCreateClass(e)}>
              <fieldset>
                  <legend>Seus dados</legend>
                  <Input name="name" 
                         label="Nome Completo" 
                         value = {name}
                         onChange={ e => setName(e.target.value)}/>
                  <Input name="avatar" 
                         label="Avatar"
                         value = {avatar}
                         onChange={ e => setAvatar(e.target.value)}/>
                  <Input name="whatsapp" 
                         label="Whatsapp"
                         value = {whatsapp}
                         onChange={ e => setWhatsapp(e.target.value)}/>
                  <Textarea name="bio" 
                            label="Biografia"
                            value = {bio}
                            onChange={ e=> setBio(e.target.value)}/>
              </fieldset>

              <fieldset>
                  <legend>Sobre a aula</legend>
                  <Select name="subject" 
                          label="Matéria" 
                          value = {subject}
                          onChange={e => setSubject(e.target.value)}
                          options={[
                              { value: "Artes", label:"Artes" },
                              { value: "Biologia", label:"Biologia" },
                              { value: "Física", label:"Física" },
                          ]}/>
                  <Input name="cost" 
                         label="Custo da sua hora por aula"
                         value = {cost}
                         onChange={e => setCost(Number(e.target.value))}/>
              </fieldset>

              <fieldset>
                <legend>
                    Horários diponíveis
                    <button type="button" onClick={ addNewScheduleItem }>
                        + Novo horário
                    </button>
                </legend>

                {scheduleItems.map((scheduleItem, index) => (
                    <div key={scheduleItem.week_day} className="schedule-item">
                        <Select name="week_day" 
                                label="Dia da Semana"
                                value={scheduleItem.week_day}
                                onChange={e=> 
                                    setScheduleItemValue(index, 'week_day', e.target.value)}
                                options={[
                                { value: "0", label:"Domingo" },
                                { value: "1", label:"Segunda-Feira" },
                                { value: "2", label:"Terça-Feira" },
                                { value: "3", label:"Quarta-Feira" },
                                { value: "4", label:"Quinta-Feira" },
                                { value: "5", label:"Sexta-Feira" },
                                { value: "6", label:"Sábado" },
                            ]
                        }/>
                        <Input name="from" 
                               label="Das" 
                               type="time"
                               value={scheduleItem.from}
                               onChange={
                                   e=> setScheduleItemValue(index, 'from', e.target.value)} 
                               />
                        <Input name="to" 
                               label="Até" 
                               type="time"
                               value={scheduleItem.to}
                               onChange={
                                e=> setScheduleItemValue(index, 'to', e.target.value)}
                             />
                    </div>
                ))}
              </fieldset>

              <footer>
                  <p>
                    <img src={warningsIcon} alt="Aviso Importante"/>
                    Importante! <br />
                    Preencha todos os dados
                  </p>
                  <button type="submit">
                      Salvar Cadastro
                  </button>
              </footer>
              </form>
          </main>
       </div>
    )
}

export default TeacherForm