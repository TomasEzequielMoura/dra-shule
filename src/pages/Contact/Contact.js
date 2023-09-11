// import React from 'react'
// import JotformEmbed from 'react-jotform-embed';

// const Contact = () => {
//   return (
//     <section >
//       <JotformEmbed src="https://form.jotform.com/231907216410649" />
//     </section>
//   )
// }

// export default Contact


import React, { useState } from 'react'
import "./Contact.css";
import tooth from '../../assets/images/tooth.webp';

import { DevicePhoneMobileIcon, CheckIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

import { useForm } from 'react-hook-form';

import { ProgressBar } from 'react-loader-spinner'

import emailjs from '@emailjs/browser';

const Contact = () => {

  const [waitingEmailJS, setWaitingEmailJS] = useState(false)
  const [emailJSSent, setEmailJSSent] = useState(false)

  const onSubmit = async (data) => {

    setWaitingEmailJS(true)

    console.log(data)

    const { firstName, lastName, email, phoneNumber, message } = data;

    console.log('firstName: ', firstName);
    console.log('lastName: ', lastName);
    console.log('email: ', email);
    console.log('phoneNumber: ', phoneNumber);
    console.log('Message: ', message);

    try {
      const templateParams = {
        firstName,
        lastName,
        email,
        phoneNumber,
        message
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      setWaitingEmailJS(false)
      setEmailJSSent(true)
    } catch (e) {
      console.log(e);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  return (
    <section className="bg">
      <div className='container-simil-bootstrap'>
        <div className="contact">
          <h1 className="title is-spaced">Contactanos</h1>
          <h2 className="subtitle">¡Deja tu consulta aca! En las proximas horas te estaremos contactando.</h2>
          <div className="container-contact">
            {
              waitingEmailJS ?
                <div className='msg-sent form-size'>
                  <ProgressBar
                    height="80"
                    width="80"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass="progress-bar-wrapper"
                    borderColor='#fff'
                    barColor='#53c6e3'
                  />
                </div>
                :
                <div className='form-size'>
                  {
                    emailJSSent ?
                      <div className='msg-sent'>
                        <p>
                          <CheckIcon className="text-blue-500" /><br />
                          ¡Su mensaje fue enviado! En las proximas horas nos contactaremos.
                        </p>
                      </div>
                      :
                      <>
                        <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                          <div className='columns'>
                            <div className='column'>
                              <div class="field">
                                <label class="label">Nombre</label>
                                <div class="control">
                                  <input
                                    placeholder='Nombre'
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    autoComplete="given-name"
                                    className="input"
                                    {...register('firstName', {
                                      required: { value: true, message: 'Por favor ingrese su nombre' },
                                      maxLength: {
                                        value: 30,
                                        message: 'Maximo 30 caracteres'
                                      }
                                    })}
                                  ></input>
                                  {errors.firstName && <span className='errorMessage'>{errors.firstName.message}</span>}
                                </div>
                              </div>
                              <div class="field">
                                <label class="label">Apellido</label>
                                <div class="control">
                                  <input
                                    placeholder='Apellido'
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    autoComplete="family-name"
                                    className="input"
                                    {...register('lastName', {
                                      required: { value: true, message: 'Por favor ingrese su apellido' },
                                      maxLength: {
                                        value: 30,
                                        message: 'Maximo 30 caracteres'
                                      }
                                    })}
                                  ></input>
                                  {errors.lastName && <span className='errorMessage'>{errors.lastName.message}</span>}
                                </div>
                              </div>

                            </div>

                            <div className='column'>

                              <div class="field">
                                <label class="label">Email</label>
                                <div class="control ">
                                  <input
                                    placeholder='Correo electrónico'
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    className="input"
                                    {...register('email', {
                                      required: true,
                                      pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                    })}
                                  ></input>
                                  {errors.email && (
                                    <span className='errorMessage'>Por favor ingrese un email valido</span>
                                  )}
                                </div>
                              </div>
                              <div class="field">
                                <label class="label">Celular</label>
                                <div class="control ">
                                  <input
                                    placeholder='Celular'
                                    type="tel"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    autoComplete="tel"
                                    className="input"
                                    {...register('phoneNumber', {
                                      required: true,
                                      pattern: /^\+?[1-9]\d{1,14}$/
                                    })}
                                  ></input>
                                  {errors.phoneNumber && (
                                    <span className='errorMessage'>Por favor ingrese un celular valido</span>
                                  )}
                                </div>
                              </div>
                            </div>

                          </div>

                          <div class="field">
                            <label class="label">Message</label>
                            <div class="control">
                              <textarea
                                placeholder='Mensaje'
                                name="message"
                                id="message"
                                rows={4}
                                className="textarea"
                                defaultValue={''}
                                {...register('message', {
                                  required: true
                                })}
                              ></textarea>
                              {errors.message && <span className='errorMessage'>Por favor, ingrese un mensaje</span>}
                            </div>
                          </div>

                          <button type="submit">
                            <a className="btn-epic" target="_blank">
                              <div>
                                <span>Contactanos</span>
                                <span>Contactanos</span>
                              </div>
                            </a>
                          </button>
                        </form>
                      </>
                  }
                </div>
            }
            <div className='contacto-data'>
              <p><a target="_blank" href="https://wa.me/5491159252808?text=¡Hola!%20Tengo%20una%20consulta."><DevicePhoneMobileIcon className="h-5 w-5 text-blue-500" />+54 9 11 5925-2808</a></p>
              <p><EnvelopeIcon className="h-5 w-5 text-blue-500" />veroshule@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact;